import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const TransportMethod = () => {
  const [methods, setMethods] = useState([]);
  const [formData, setFormData] = useState({
    ten_van_chuyen: "",
    mo_ta: "",
    gia_van_chuyen: "",
  });
  const [editData, setEditData] = useState({
    ten_van_chuyen: "",
    gia_van_chuyen: "",
    mo_ta: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMethods(currentPage);
  }, [currentPage]);

  const breadcrumbTitles = {
    "admin/hinh-thuc-van-chuyen": "Hình thức vận chuyển",
  };

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase();

  useEffect(() => {
    fetchMethods();
  }, []);

  const fetchMethods = async (page = 1) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/hinh-thuc-van-chuyen?page=${page}`
      );
      setMethods(response.data.data);
      setTotalPages(response.data.last_page);
      setCurrentPage(response.data.current_page);
    } catch (error) {
      console.error("Failed to fetch methods", error);
    }
  };
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAddMethod = async () => {
    try {
      if (!formData.ten_van_chuyen || !formData.gia_van_chuyen) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
      }

      // Kiểm tra nếu gia_van_chuyen là một số hợp lệ
      if (isNaN(formData.gia_van_chuyen) || formData.gia_van_chuyen >= 0) {
        alert("Giá vận chuyển phải là một số hợp lệ và lớn hơn 0!");
        return;
      }

      await axios.post(
        "http://127.0.0.1:8000/api/hinh-thuc-van-chuyen",
        formData
      );

      alert("Thêm hình thức vận chuyển thành công!");
      setFormData({ ten_van_chuyen: "", mo_ta: "", gia_van_chuyen: "" });
      fetchMethods();
    } catch (error) {
      alert("Thêm hình thức vận chuyển thất bại. Vui lòng thử lại!");
      console.error("Failed to add method", error);
    }
  };
  const handleEditMethod = async () => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/hinh-thuc-van-chuyen/${editData.id}`,
        editData
      );
      alert("Cập nhật phương thức vận chuyển thành công!");

      fetchMethods(); // Tải lại danh sách
    } catch (error) {
      alert("Cập nhật phương thức vận chuyển thất bại. Vui lòng thử lại!");
      console.error("Failed to edit method", error);
    }
  };

  const handleDeleteMethod = async (id) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa phương thức này không?"
    );
    if (!confirmDelete) {
      return; // Nếu người dùng chọn "Hủy", thoát hàm
    }

    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/hinh-thuc-van-chuyen/${id}`
      );
      alert("Xóa hình thức vận chuyển thành công!");
      fetchMethods(); // Tải lại danh sách
    } catch (error) {
      alert("Xóa hình thức vận chuyển thất bại. Vui lòng thử lại!");
      console.error("Failed to delete method", error);
    }
  };

  const handleChange = (e, isEdit = false) => {
    const { name, value } = e.target;

    let updatedValue = value;

    // Kiểm tra và xử lý giá trị của "gia_van_chuyen" (giá vận chuyển)
    if (name === "gia_van_chuyen") {
      // Loại bỏ đuôi ".00" nếu giá trị là số nguyên
      if (!isNaN(updatedValue) && updatedValue.endsWith(".00")) {
        updatedValue = updatedValue.slice(0, -3); // Cắt bỏ ".00"
      }

      // Chuyển giá trị thành số để tránh NaN
      updatedValue = parseFloat(updatedValue);
      if (isNaN(updatedValue)) {
        updatedValue = ""; // Nếu giá trị không hợp lệ, để trống
      }
    }
    if (isEdit) {
      setEditData({ ...editData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
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
            <h2 className="mb-0">Danh sách hình thức vận chuyển</h2>
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
                  data-bs-target="#addMethod"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Thêm hình thức
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
                      TÊN VẬN CHUYỂN
                    </th>

                    <th
                      className="align-middle ps-4"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      GIÁ VẬN CHUYỂN
                    </th>
                    <th
                      className="align-middle ps-4"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      MÔ TẢ
                    </th>

                    <th className="align-middle" style={{ width: "5%" }}>
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {methods.map((method, index) => (
                    <tr key={method.id}>
                      <td className="product align-middle ps-2">
                        {(currentPage - 1) * 10 + index + 1}
                      </td>
                      <td className="product align-middle ps-4">
                        {method.ten_van_chuyen}
                      </td>
                      <td className="tags align-middle review pb-2 ps-4">
                        {Number(method.gia_van_chuyen).toLocaleString()} VNĐ
                      </td>
                      <td className="tags align-middle review pb-2 ps-4">
                        {method.mo_ta}
                      </td>
                      <td className="align-middle white-space-nowrap ps-1">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#editMethod"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-bs-reference="parent"
                          onClick={() => setEditData(method)}
                        >
                          <span className="fa-solid fa-pen-to-square fs-9" />
                        </button>
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          onClick={() => handleDeleteMethod(method.id)}
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
                  Trang {currentPage} / {totalPages}
                </p>
              </div>
              <div className="col-auto d-flex">
                <button
                  className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <span className="fas fa-chevron-left" />
                </button>
                <ul className="mb-0 pagination">
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={currentPage === index + 1 ? "active" : ""}
                    >
                      <button
                        className="page"
                        type="button"
                        onClick={() => goToPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className={`page-link ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
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
        id="addMethod"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addMethod"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Thêm hình thức vận chuyển</h3>
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
                  {/* Biến thể ) */}
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên vận chuyển
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="ten_van_chuyen"
                      value={formData.ten_van_chuyen}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Giá vận chuyển
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="gia_van_chuyen"
                      value={formData.gia_van_chuyen}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Mô tả
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Mô tả thông số của sản phẩm"
                      name="mo_ta"
                      value={formData.mo_ta}
                      onChange={handleChange}
                    ></textarea>
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
                onClick={handleAddMethod}
              >
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editMethod"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editMethod"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Sửa hình thức vận chuyển</h3>
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
                  {/* Biến thể ) */}
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên vận chuyển
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="ten_van_chuyen"
                      value={editData?.ten_van_chuyen || ""}
                      onChange={(e) => handleChange(e, true)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Giá vận chuyển
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="gia_van_chuyen"
                      value={Number(editData?.gia_van_chuyen) || ""}
                      onChange={(e) => handleChange(e, true)}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Mô tả
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name="mo_ta"
                      value={editData?.mo_ta || ""}
                      onChange={(e) => handleChange(e, true)}
                    ></textarea>
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
                onClick={handleEditMethod}
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
export default TransportMethod;
