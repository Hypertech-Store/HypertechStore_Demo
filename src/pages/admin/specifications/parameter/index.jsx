import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ListParameter = () => {
  const breadcrumbTitles = {
    "admin/danh-sach-thong-so": "Danh sách thông số", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  const [thongSo, setThongSo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // For total pages
  const itemsPerPage = 10; // Define the number of items per page
  const [categories, setCategories] = useState([]);
  const [editingThongSo, setEditingThongSo] = useState(null); // Lưu thông tin thông số đang chỉnh sửa
  const [editTenThongSo, setEditTenThongSo] = useState("");
  const [editMoTa, setEditMoTa] = useState("");
  const [editCategory, setEditCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/danh-muc/getAll"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  // Handler for changing pages
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return; // Avoid invalid pages
    setCurrentPage(page);
  };

  // Fetch data from the API
  useEffect(() => {
    setLoading(true);
    fetch(
      `http://127.0.0.1:8000/api/thong-so?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setThongSo(data.data);
        console.log(data.data);
        setTotalPages(data.last_page); // Update totalPages from API response
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi lấy thông số", error);
        setLoading(false);
      });
  }, [currentPage]);

  const [thongSoList, setThongSoList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddThongSo = () => {
    // Kiểm tra nếu không có danh mục đã chọn
    if (!selectedCategory || !selectedCategory.id) {
      alert("Vui lòng chọn danh mục trước!");
      return;
    }

    // Kiểm tra nếu không có thông số nào được nhập
    if (thongSoList.length === 0) {
      alert("Vui lòng nhập ít nhất một thông số!");
      return;
    }

    try {
      console.log("Selected category:", selectedCategory); // Kiểm tra selectedCategory

      // Tạo danh sách thông số mới
      const newThongSoList = thongSoList.map((item) => {
        // Kiểm tra tên thông số có trống không
        if (!item.tenThongSo) {
          throw new Error("Tên thông số là bắt buộc!");
        }

        // Log dữ liệu đầu vào trước khi chuyển đến API
        console.log("New Thong So Data:", {
          danh_muc_id: selectedCategory.id, // Đảm bảo gửi ID đúng của danh mục
          ten_thong_so: item.tenThongSo.trim(),
          mo_ta: item.moTa.trim(),
        });

        // Trả về dữ liệu sau khi xử lý
        return {
          danh_muc_id: selectedCategory.id, // ID danh mục
          ten_thong_so: item.tenThongSo.trim(),
          mo_ta: item.moTa.trim(),
        };
      });

      // Gửi dữ liệu thông số lên server
      fetch("http://127.0.0.1:8000/api/thong-so", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ thong_so_list: newThongSoList }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("Dữ liệu trả về từ server:", response);

          // Lấy danh sách thông số mới từ phản hồi của server
          const newThongso = response?.data || [];

          if (newThongso.length > 0) {
            alert("Thông số đã được thêm thành công!");

            // Cập nhật lại danh sách thongSo sau khi thêm
            setThongSoList([]); // Reset danh sách thông số đang nhập
            setThongSo((prevThongSo) => [...prevThongSo, ...newThongso]); // Cập nhật thongSo (nếu cần)

            // Reset danh mục sau khi thêm thành công
            setSelectedCategory(null); // Reset danh mục
          } else {
            alert("Dữ liệu trả về không hợp lệ.");
          }
        })
        .catch((error) => {
          console.error("Error adding thong so:", error);
          alert("Có lỗi xảy ra khi thêm thông số.");
        });
    } catch (err) {
      alert(err.message); // Thông báo lỗi nếu có bất kỳ lỗi nào trong quá trình xử lý
    }
  };

  // Thêm thông số mới
  const addThongSo = () => {
    setThongSoList([...thongSoList, { tenThongSo: "", moTa: "" }]);
  };

  // Cập nhật thông số
  const updateThongSo = (index, field, value) => {
    const updatedList = [...thongSoList];
    updatedList[index][field] = value;
    setThongSoList(updatedList);
  };

  // Xóa một thông số
  const removeThongSo = (index) => {
    const updatedList = thongSoList.filter((_, i) => i !== index);
    setThongSoList(updatedList);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/thong-so/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.redirected == true) {
        alert("Xóa thông số thành công!");
        setThongSo((prevThongSo) =>
          prevThongSo.filter((item) => item.id !== id)
        );
      } else {
        const errorData = await response.json();
        alert(`Xóa thất bại!`);
      }
    } catch (error) {
      console.error("Lỗi khi xóa thông số:", error);
      alert("Có lỗi xảy ra khi xóa thông số");
    }
  };

  const handleEditClick = (item) => {
    setEditingThongSo(item);
    setEditTenThongSo(item.ten_thong_so);
    setEditMoTa(item.mo_ta);
    setEditCategory(item.danh_muc_id);
  };

  const handleUpdateThongSo = async () => {
    if (!editingThongSo) return;
    const danhMuc = categories.find(
      (category) => category.id === parseInt(editCategory, 10)
    );

    const updatedThongSo = {
      danh_muc_id: editCategory,
      danh_muc: danhMuc,
      ten_thong_so: editTenThongSo,
      mo_ta: editMoTa,
    };

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/thong-so/${editingThongSo.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedThongSo),
        }
      );

      if (response.ok) {
        const updatedData = await response.json();
        console.log(updatedData);

        // Cập nhật trực tiếp thông số trong state mà không phải tải lại trang
        setThongSo((prevThongSo) =>
          prevThongSo.map((item) =>
            item.id === editingThongSo.id
              ? { ...item, ...updatedThongSo }
              : item
          )
        );
        console.log(thongSo);

        alert("Cập nhật thông số thành công!");
      } else {
        const errorData = await response.json();
        alert(
          `Lỗi cập nhật: ${errorData.message || "Không thể cập nhật thông số"}`
        );
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật thông số:", error);
      alert("Có lỗi xảy ra khi cập nhật thông số");
    }
  };

  return (
    <div className="content">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/admin">Bảng điều khiển</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {currentTitle}
          </li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Danh sách thông số</h2>
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
                    placeholder="Tìm kiếm thông số"
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
                  data-bs-target="#addParameter"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Thêm thông số
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
                      style={{ width: "15%" }}
                    >
                      STT
                    </th>
                    <th
                      className="white-space-nowrap align-middle ps-4"
                      style={{ width: "30%" }}
                    >
                      DANH MỤC
                    </th>
                    <th className="align-middle ps-4" style={{ width: "25%" }}>
                      TÊN THÔNG SỐ
                    </th>
                    <th className="align-middle ps-4" style={{ width: "25%" }}>
                      MÔ TẢ
                    </th>
                    <th className="align-middle" style={{ width: "5%" }}>
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                <tbody className="list">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    thongSo.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index % 2 === 0 ? "even-row" : "odd-row"}
                      >
                        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                        {/* Tính STT đúng cho mỗi trang */}
                        <td className="product align-middle ps-4">
                          {/* Tìm và hiển thị ten_danh_muc của danh mục */}
                          {categories.find(
                            (category) => category.id === item.danh_muc_id
                          )?.ten_danh_muc || "Chưa có danh mục"}
                        </td>

                        <td className="tags align-middle review pb-2 ps-4">
                          {item.ten_thong_so}
                        </td>
                        <td className="tags align-middle review pb-2 ps-4">
                          {item.mo_ta}
                        </td>
                        <td className="align-middle white-space-nowrap ps-2">
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            onClick={() => handleEditClick(item)}
                            data-bs-toggle="modal"
                            data-bs-target="#editParameter"
                          >
                            <span className="fa-solid fa-pen-to-square fs-9" />
                          </button>
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            onClick={() => handleDelete(item.id)}
                          >
                            <span className="fa-solid fa-trash fs-9" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
            {/* Hiển thị số trang */}
            <div className="col-auto d-flex">
              <p className="mb-0 me-3 fw-semibold text-body">
                Trang {currentPage} / {totalPages}
              </p>
            </div>

            {/* Điều hướng phân trang */}
            <div className="col-auto d-flex">
              {/* Nút Previous */}
              <button
                className="page-link"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="fas fa-chevron-left" />
              </button>

              {/* Danh sách các trang */}
              <ul className="pagination mb-0">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => goToPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Nút Next */}
              <button
                className="page-link pe-0"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addParameter"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addParameter"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          style={{ width: "1100px" }}
        >
          <div className="modal-content bg-body-highlight p-4">
            {/* Modal Header */}
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Thêm thông số</h3>
              <button
                className="btn btn-sm btn-phoenix-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="fas fa-times text-danger" />
              </button>
            </div>

            <div className="modal-body">
              <div className="row g-4">
                {/* Danh mục */}
                <div className="col-lg-12">
                  <div className="card p-3">
                    <label className="text-body-highlight fw-bold mb-2">
                      Chọn danh mục
                    </label>
                    <select
                      className="form-control"
                      value={selectedCategory ? selectedCategory.id : ""}
                      onChange={(e) => {
                        const selectedId = e.target.value; // Lấy ID từ phần chọn
                        const selectedCategoryData = categories.find(
                          (category) => category.id.toString() === selectedId // So sánh đúng với ID dạng chuỗi
                        );
                        setSelectedCategory(selectedCategoryData); // Cập nhật selectedCategory với thông tin đầy đủ
                      }}
                    >
                      <option value="">Chọn danh mục</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.ten_danh_muc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {thongSoList.length > 0 && (
                  <div className="col-lg-12">
                    <h5 className="mb-3">Thông số đã thêm</h5>
                  </div>
                )}

                {thongSoList.map((item, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="card p-3 h-100">
                      <div className="row g-3 align-items-start">
                        <div className="col-lg-12">
                          <label className="form-label fw-bold">
                            Tên thông số
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Tên thông số"
                            value={item.tenThongSo}
                            onChange={(e) =>
                              updateThongSo(index, "tenThongSo", e.target.value)
                            }
                          />
                        </div>
                        <div className="col-lg-12">
                          <label className="form-label fw-bold">Mô tả</label>
                          <textarea
                            className="form-control"
                            rows="2"
                            placeholder="Mô tả"
                            value={item.moTa}
                            onChange={(e) =>
                              updateThongSo(index, "moTa", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-12 text-end">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeThongSo(index)}
                          >
                            Xóa thông số
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Nút thêm thông số */}
                <div className="col-lg-12 text-center mt-4">
                  <div className="card p-3 bg-light border-dashed">
                    <button
                      className="btn btn-outline-success btn-block d-flex align-items-center justify-content-center btn-sm"
                      style={{ fontSize: "12px", fontWeight: "bold" }}
                      onClick={addThongSo}
                    >
                      <i className="fas fa-plus me-2"></i>
                      Thêm thông số mới
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Đường kẻ ngang */}
            <hr className="my-5" />

            {/* Modal Footer */}
            <div className="modal-footer border-0 d-flex justify-content-between">
              <button
                className="btn btn-link text-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Hủy bỏ
              </button>
              <button className="btn btn-primary" onClick={handleAddThongSo}>
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editParameter"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editParameter"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-l modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Sửa thông số</h3>
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
                      Danh mục
                    </label>
                    <select
                      id="editCategory"
                      className="form-control"
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.ten_danh_muc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên thông số
                    </label>
                    <input
                      id="editTenThongSo"
                      type="text"
                      className="form-control"
                      value={editTenThongSo}
                      onChange={(e) => setEditTenThongSo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Mô tả
                    </label>
                    <textarea
                      id="editMoTa"
                      className="form-control"
                      value={editMoTa}
                      onChange={(e) => setEditMoTa(e.target.value)}
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
                onClick={handleUpdateThongSo}
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
export default ListParameter;
