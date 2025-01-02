import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const ListValue = () => {
  const breadcrumbTitles = {
    "admin/gia-tri-thuoc-tinh": "List value", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const [giaTriThuocTinhId, setGiaTriThuocTinhId] = useState(null); // Đảm bảo khai báo state này
  const [attributeName, setAttributeName] = useState([]); // Khởi tạo là một mảng rỗng
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [attributeValue, setAttributeValue] = useState("");
  const [loading, setLoading] = useState(false);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  const [attributes, setAttributes] = useState({
    data: [], // Dữ liệu các giá trị thuộc tính
    current_page: 1, // Trang hiện tại
    last_page: 1, // Tổng số trang
  });

  useEffect(() => {
    fetchData(attributes.current_page);
  }, [attributes.current_page]);

  // Fetch attributes data with pagination
  const fetchData = (page) => {
    setLoading(true); // Set loading state to true while fetching
    fetch(
      `http://127.0.0.1:8000/api/gia-tri-thuoc-tinh?page=${page}&per_page=5`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setAttributes({
            data: data.data,
            current_page: data.current_page,
            last_page: data.last_page,
          });
        } else {
          console.error("Dữ liệu trả về không hợp lệ:", data);
        }
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error))
      .finally(() => setLoading(false)); // Set loading false when data fetching is completed
  };

  // Chuyển trang
  const handlePageChange = (page) => {
    // Kiểm tra tính hợp lệ của trang
    if (page >= 1 && page <= attributes.last_page) {
      setAttributes((prevState) => ({ ...prevState, current_page: page }));
    }
  };

  // Fetch tên thuộc tính khi component được render lần đầu tiên
  useEffect(() => {
    const fetchAttributes = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/thuoc-tinh-san-pham"
        );

        // Kiểm tra nếu dữ liệu trả về đúng định dạng
        if (response.data && Array.isArray(response.data.data)) {
          setAttributeName(response.data.data); // Lưu danh sách tên thuộc tính
        } else {
          console.error("Data from API is not in the expected format");
          setAttributeName([]);
        }
      } catch (error) {
        console.error("Error fetching attribute names:", error);
        setAttributeName([]);
      }
    };

    fetchAttributes();
  }, []);

  const handleSubmit = async () => {
    if (!selectedAttribute || !attributeValue) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    setLoading(true);

    try {
      const data = {
        thuoc_tinh_san_pham_id: selectedAttribute, // Không cần chuyển thành số nếu `selectedAttribute` là chuỗi số hợp lệ
        ten_gia_tri: attributeValue, // Chuyển `attributeValue` thành giá trị chuỗi
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/api/gia-tri-thuoc-tinh",
        data
      );
      console.log(response);
      // Kiểm tra kết quả trả về từ API
      if (
        response.data.data &&
        response.status === 201
      ) {
        const foundAttribute = attributeName.find(
          (attr) => attr.id === parseInt(selectedAttribute)
        );

        const newAttribute = {
          id: response.data.data.id,
          thuoc_tinh_san_pham_id: selectedAttribute,
          ten_gia_tri: attributeValue,
          ten_thuoc_tinh: foundAttribute?.ten_thuoc_tinh || "Không xác định",
          created_at: response.data.data.created_at , 
        };

        setAttributes((prevAttributes) => ({
          ...prevAttributes,
          data: [...prevAttributes.data, newAttribute],
        }));

        alert("Thêm giá trị thành công!");

        // Reset các trường
        setSelectedAttribute("");
        setAttributeValue("");
      } else {
        alert("Thêm giá trị thất bại. Kiểm tra lại.");
      }
    } catch (error) {
      // Kiểm tra lỗi chi tiết nếu có từ response của API
      if (error.response) {
        console.error("API Error:", error.response.data);
        alert(
          `Lỗi: ${error.response.data.message || "Có lỗi xảy ra khi thêm giá trị!"
          }`
        );
      } else {
        console.error("Error:", error.message);
        alert("Có lỗi xảy ra khi thêm giá trị!");
      }
    } finally {
      setLoading(false);
    }
  };

  // Hàm mở modal và tải dữ liệu
  const handleEditAttribute = (attributeId) => {
    axios
      .get(`http://127.0.0.1:8000/api/gia-tri-thuoc-tinh/${attributeId}`)
      .then((response) => {
        const attributeData = response.data.data;

        // Lưu gia_tri_thuoc_tinh_id vào state
        setGiaTriThuocTinhId(attributeData.id);
        setSelectedAttribute(attributeData.thuoc_tinh_san_pham_id);
        setAttributeValue(attributeData.ten_gia_tri);

        setAttributes((prevAttributes) => ({
          ...prevAttributes,
          data: prevAttributes.data.map((attribute) =>
            attribute.id === giaTriThuocTinhId
              ? {
                ...attribute,
                thuoc_tinh_san_pham_id: selectedAttribute,
                ten_gia_tri: attributeValue,
              }
              : attribute
          ),
        }));

      })
      .catch((error) => {
        console.error("Error fetching attribute data:", error);
        alert("Lỗi khi tải thông tin thuộc tính.");
      });
  };

  const handleUpdateAttribute = async () => {
    if (!giaTriThuocTinhId || !attributeValue) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    setLoading(true);

    try {
      const data = {
        thuoc_tinh_san_pham_id: selectedAttribute, // ID thuộc tính
        ten_gia_tri: attributeValue, // Cập nhật giá trị thuộc tính
      };

      const response = await axios.put(
        `http://127.0.0.1:8000/api/gia-tri-thuoc-tinh/${giaTriThuocTinhId}`, // Thực hiện PUT tới API
        data
      );

      console.log("Response from API:", response);

      if (
        response.data &&
        response.data.message.includes("Cập nhật giá trị thuộc tính")
      ) {
        const foundAttribute = attributeName.find(
          (attr) => attr.id === parseInt(selectedAttribute)
        );

        const updatedAttributes = attributes.data.map((attribute) => {
          if (attribute.id === giaTriThuocTinhId) {
            return {
              ...attribute,
              thuoc_tinh_san_pham_id: selectedAttribute,
              ten_gia_tri: attributeValue,
              ten_thuoc_tinh: foundAttribute?.ten_thuoc_tinh || "Không xác định",
            };
          }
          return attribute;
        });

        setAttributes((prevAttributes) => ({
          ...prevAttributes,
          data: updatedAttributes,
        }));

        alert("Cập nhật giá trị thành công!");

        // Reset lại các trường
        setSelectedAttribute("");
        setAttributeValue("");
        
      } else {
        alert("Cập nhật giá trị thất bại. Kiểm tra lại.");
      }
    } catch (error) {
      console.error("Error updating attribute:", error);
      if (error.response && error.response.data) {
        alert(`Có lỗi xảy ra: ${error.response.data.message || error.message}`);
      } else {
        alert("Có lỗi xảy ra khi cập nhật giá trị!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa không?"); // Hiển thị hộp thoại xác nhận

    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/gia-tri-thuoc-tinh/${id}`
        );

        if (response.status === 200) {
          // Hiển thị thông báo thành công
          alert("Xóa thành công!");

          // Cập nhật lại danh sách sau khi xóa
          setAttributes((prevAttributes) => ({
            ...prevAttributes,
            data: prevAttributes.data.filter((attribute) => attribute.id !== id),
          }));
        }
      } catch (error) {
        console.error("Error deleting attribute:", error);
        alert("Có lỗi xảy ra khi xóa!");
      }
    } else {
      alert("Hành động xóa đã bị hủy bỏ.");
    }
  };


  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/admin">Dashboard</Link>
          </li>

          <li className="breadcrumb-item active" aria-current="page">
            {currentTitle}
          </li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">List Attribute Value</h2>
          </div>
        </div>

        <div
          id="products"
          data-list='{"valueNames":["product","price","category","tags","vendor","time"],"page":10,"pagination":true}'
        >
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-3">
              <div className="search-box">
                <form className="position-relative">
                  <input
                    className="form-control search-input search"
                    type="search"
                    placeholder="Search products"
                    aria-label="Search"
                  />
                  <span className="fas fa-search search-box-icon" />
                </form>
              </div>

              <div className="ms-xxl-auto ms-auto">
                <button
                  className="btn btn-primary"
                  id="addBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#addAttribute"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Thêm giá trị
                </button>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table fs-9 mb-0">
                <thead>
                  <tr>
                    <th
                      className="white-space-nowrap fs-9 align-middle ps-0"
                      scope="col"
                      style={{ width: "15%" }}
                    >
                      STT
                    </th>
                    <th
                      className="white-space-nowrap align-middle ps-4"
                      scope="col"
                      style={{ width: "25%" }}
                      data-sort="product"
                    >
                      TÊN THUỘC TÍNH
                    </th>
                    <th
                      className="white-space-nowrap align-middle ps-4"
                      scope="col"
                      style={{ width: "30%" }}
                      data-sort="product"
                    >
                      GIÁ TRỊ THUỘC TÍNH
                    </th>
                    <th
                      className="align-middle ps-4"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      NGÀY TẠO
                    </th>
                    <th className="align-middle" style={{ width: "5%" }}>
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {attributes.data.map((attribute, index) => (
                    <tr key={attribute.id}>
                      <td className="product align-middle ps-2">
                        {(attributes.current_page - 1) * 5 + (index + 1)}
                      </td>
                      <td className="product align-middle ps-4">
                        {attribute.ten_thuoc_tinh}
                      </td>
                      <td className="product align-middle ps-4">
                        {attribute.ten_gia_tri}
                      </td>
                      <td className="tags align-middle review pb-2 ps-4">
                        {new Date(attribute.created_at).toLocaleString()}
                      </td>
                      <td className="align-middle white-space-nowrap">
                        {/* Thực hiện vòng lặp trên attributes.data thay vì attributes */}
                        <button
                          key={attribute.id}
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#editAttribute"
                          onClick={() => handleEditAttribute(attribute.id)} // Gửi attribute.id vào hàm
                        >
                          <span className="fa-solid fa-pen-to-square fs-9" />
                        </button>

                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          onClick={() => handleDelete(attribute.id)} // Truyền ID vào hàm xóa
                        >
                          <span className="fa-solid fa-trash fs-9" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
              <div className="col-auto d-flex">
                <p className="mb-0 me-3 fw-semibold text-body">
                  Trang {attributes.current_page} / {attributes.last_page}
                </p>
              </div>
              <div className="col-auto d-flex">
                {/* Nút Prev */}
                <button
                  className="page-link"
                  onClick={() => handlePageChange(attributes.current_page - 1)}
                  disabled={attributes.current_page === 1}
                >
                  <span className="fas fa-chevron-left" />
                </button>

                {/* Danh sách các nút trang */}
                <ul className="pagination mb-0">
                  {Array.from({ length: attributes.last_page }, (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${attributes.current_page === index + 1 ? "active" : ""
                        }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Nút Next */}
                <button
                  className="page-link"
                  onClick={() => handlePageChange(attributes.current_page + 1)}
                  disabled={attributes.current_page === attributes.last_page}
                >
                  <span className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addAttribute"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addAttribute"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-l modal-dialog-centered"
          style={{ width: "25pc" }}
        >
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Thêm giá trị</h3>
              <button
                className="btn btn-sm btn-phoenix-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="fas fa-times text-danger" />
              </button>
            </div>
            <div className="modal-body px-0 mt-1">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên thuộc tính
                    </label>
                    <select
                      className="form-select"
                      value={selectedAttribute}
                      onChange={(e) => setSelectedAttribute(e.target.value)}
                    >
                      <option value="" disabled>
                        Chọn tên thuộc tính
                      </option>
                      {Array.isArray(attributeName) &&
                        attributeName.map((attribute) => (
                          <option key={attribute.id} value={attribute.id}>
                            {attribute.ten_thuoc_tinh}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Giá trị thuộc tính
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={attributeValue}
                      onChange={(e) => setAttributeValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 pt-0 px-0 pb-0">
              <button
                className="btn btn-link text-danger px-3 my-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Hủy bỏ
              </button>
              <button
                className="btn btn-primary my-0"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Đang thêm..." : "Thêm mới"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editAttribute"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editAttribute"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-l modal-dialog-centered"
          style={{ width: "25pc" }}
        >
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Sửa thuộc tính</h3>
              <button
                className="btn btn-sm btn-phoenix-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="fas fa-times text-danger" />
              </button>
            </div>
            <div className="modal-body px-0 mt-1">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên thuộc tính
                    </label>
                    <select
                      className="form-select"
                      value={selectedAttribute}
                      onChange={(e) => setSelectedAttribute(e.target.value)}
                    >
                      <option value="" disabled>
                        Chọn tên thuộc tính
                      </option>
                      {Array.isArray(attributeName) &&
                        attributeName.map((attribute) => (
                          <option key={attribute.id} value={attribute.id}>
                            {attribute.ten_thuoc_tinh}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Giá trị thuộc tính
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={attributeValue}
                      onChange={(e) => setAttributeValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 pt-0 px-0 pb-0">
              <button
                className="btn btn-link text-danger px-3 my-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Hủy bỏ
              </button>
              <button
                className="btn btn-primary my-0"
                onClick={handleUpdateAttribute}
                disabled={loading}
              >
                {loading ? "Đang cập nhật..." : "Cập nhật"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer position-absolute">
        <div className="row g-0 justify-content-between align-items-center h-100">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 mt-2 mt-sm-0 text-body">
              Thank you for creating with Phoenix
              <span className="d-none d-sm-inline-block" />
              <span className="d-none d-sm-inline-block mx-1">|</span>
              <br className="d-sm-none" />
              2024 ©
              <a className="mx-1" href="https://themewagon.com/">
                Themewagon
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-body-tertiary text-opacity-85">v1.18.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default ListValue;
