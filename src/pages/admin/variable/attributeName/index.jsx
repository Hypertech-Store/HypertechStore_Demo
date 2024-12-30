import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const listOfAttributeName = () => {
  const [attributes, setAttributes] = useState([]); // Danh sách thuộc tính
  const [attributeName, setAttributeName] = useState(""); // Tên thuộc tính từ input
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const [selectedAttribute, setSelectedAttribute] = useState({ name: "" });
  const [attributeId, setAttributeId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false); // Quản lý hiển thị modal
  const location = useLocation();

  // Dữ liệu tiêu đề breadcrumb dựa trên đường dẫn
  const breadcrumbTitles = {
    "admin/ten-thuoc-tinh": "List attribute name",
  };

  useEffect(() => {
    // Gọi API để lấy danh sách thuộc tính
    const fetchAttributes = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/thuoc-tinh-san-pham`
        );
        setAttributes(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching attributes:", error);
      }
    };

    fetchAttributes();
  }, []);

  const addAttribute = async () => {
    if (!attributeName.trim()) {
      alert("Tên thuộc tính không được để trống.");
      return;
    }

    setLoading(true); // Enable loading state
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/thuoc-tinh-san-pham",
        { ten_thuoc_tinh: attributeName }
      );

      if (response.status === 201) {
        console.log("Tạo mới thành công:", response.data);

        // Ensure `created_at` is valid before adding it to the state
        const validCreatedAt = new Date(response.data.created_at);
        const isValidDate = !isNaN(validCreatedAt.getTime()); // Check if the date is valid

        setAttributes((prevAttributes) => [
          ...prevAttributes,
          {
            id: response.data.id,
            ten_thuoc_tinh: response.data.ten_thuoc_tinh,
            created_at: isValidDate ? validCreatedAt.toISOString() : "", // Set an empty string if the date is invalid
          },
        ]);
        alert("Thêm thuộc tính thành công!");
        setAttributeName(""); // Clear input
      } else {
        alert("Lỗi: Thuộc tính không được thêm.");
      }
    } catch (error) {
      console.error("Lỗi khi thêm thuộc tính:", error);

      if (error.response && error.response.data) {
        alert("Lỗi khi thêm thuộc tính: " + error.response.data.message);
      } else {
        alert("Lỗi kết nối với máy chủ.");
      }
    } finally {
      setLoading(false); // Disable loading state
    }
  };

  // Xử lý đường dẫn breadcrumb
  const pathnames = location.pathname.split("/").filter(Boolean);
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy tiêu đề

  const handleEditClick = (attributeId) => {
    // Kiểm tra thông tin trong attributeId để hiểu cấu trúc của dữ liệu
    console.log("attributeId:", attributeId); // Kiểm tra toàn bộ đối tượng attributeId

    // Truy xuất trực tiếp giá trị từ attributeId
    console.log("ten_thuoc_tinh:", attributeId.ten_thuoc_tinh); // Truy xuất trực tiếp từ attributeId, không phải attributeId.data

    // Cập nhật lại selectedAttribute
    setSelectedAttribute({
      id: attributeId.id, // Lấy giá trị id từ attributeId
      ten_thuoc_tinh: attributeId.ten_thuoc_tinh, // Lấy giá trị từ attributeId
    });
  };

  const handleUpdateAttribute = () => {
    const updateData = {
      ten_thuoc_tinh: selectedAttribute.ten_thuoc_tinh, // Dữ liệu đã chỉnh sửa
    };

    axios
      .put(
        `http://127.0.0.1:8000/api/thuoc-tinh-san-pham/${selectedAttribute.id}`,
        updateData
      )
      .then((response) => {
        console.log("Cập nhật thành công:", response.data);
        setModalOpen(false); // Đóng modal sau khi cập nhật
        // Cập nhật lại dữ liệu trên giao diện nếu cần
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật thuộc tính:", error);
      });
  };
  const handleDeleteClick = async (id) => {
    try {
      const confirmation = window.confirm(
        "Bạn có chắc chắn muốn xóa thuộc tính này không?"
      );
      if (confirmation) {
        // Gọi API để xóa thuộc tính
        await axios.delete(
          `http://127.0.0.1:8000/api/thuoc-tinh-san-pham/${id}`
        );
        console.log("Thuộc tính đã được xóa thành công!");

        // Cập nhật lại danh sách thuộc tính sau khi xóa
        setAttributes((prevAttributes) =>
          prevAttributes.filter((attribute) => attribute.id !== id)
        );
      }
    } catch (error) {
      console.error("Lỗi khi xóa thuộc tính:", error);
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
            <h2 className="mb-0">List Attribute Name</h2>
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
                  Thêm thuộc tính
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
                      style={{ width: "30%" }}
                      data-sort="product"
                    >
                      ATTRIBUTE NAME
                    </th>

                    <th
                      className="align-middle"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      PUBLISHED ON
                    </th>
                    <th className="align-middle ps-4" style={{ width: "5%" }}>
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {attributes.map((attribute, index) => (
                    <tr key={attribute.id}>
                      <td className="align-middle ps-0">{index + 1}</td>
                      <td className="product align-middle ps-4">
                        {attribute.ten_thuoc_tinh}
                      </td>
                      <td className="tags align-middle review pb-2 ps-3">
                        {attribute.created_at &&
                        !isNaN(new Date(attribute.created_at).getTime())
                          ? new Date(attribute.created_at).toLocaleDateString()
                          : "Invalid Date"}
                      </td>

                      <td className="align-middle white-space-nowrap">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#editAttribute"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-bs-reference="parent"
                          onClick={() => handleEditClick(attribute)}
                        >
                          <span className="fa-solid fa-pen-to-square fs-9" />
                        </button>
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          onClick={() => handleDeleteClick(attribute.id)} // Gọi hàm delete với id của thuộc tính
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
                <p className="mb-0 me-3 fw-semibold text-body"></p>
                Showing 1 to 2 of 2 items
              </div>
              <div className="col-auto d-flex">
                <button className="" disabled>
                  <span className="fas fa-chevron-left" />
                </button>
                <ul className="mb-0 pagination">
                  <li className="">
                    <button className="page" type="button">
                      1
                    </button>
                  </li>
                </ul>
                <button className="" disabled>
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
              <h3 className="mb-0">Add Attribute</h3>
              <button
                id="closeModalButton"
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
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên thuộc tính
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={attributeName}
                      onChange={(e) => setAttributeName(e.target.value)}
                      placeholder="Nhập tên thuộc tính"
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
                onClick={addAttribute}
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
              <h3 className="mb-0">Edit Attribute</h3>
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
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên thuộc tính
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={selectedAttribute?.ten_thuoc_tinh || ""} // Đảm bảo nếu selectedAttribute có giá trị thì dùng, không thì dùng chuỗi trống
                      onChange={(e) =>
                        setSelectedAttribute({
                          ...selectedAttribute,
                          ten_thuoc_tinh: e.target.value, // Cập nhật giá trị khi người dùng thay đổi
                        })
                      }
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
                onClick={handleUpdateAttribute} // Cập nhật thuộc tính khi bấm "Cập nhật"
              >
                Cập nhật
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
export default listOfAttributeName;
