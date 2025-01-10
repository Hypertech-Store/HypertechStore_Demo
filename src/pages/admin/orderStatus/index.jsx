import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const OrderStatus = () => {
  const [status, setStatus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState(""); // For storing name of the status
  const [description, setDescription] = useState(""); // For storing the description
  const [editName, setEditName] = useState(""); // Lưu tên trạng thái
  const [editDescription, setEditDescription] = useState(""); // Lưu mô tả trạng thái
  const [editingStatusId, setEditingStatusId] = useState(null); // ID của trạng thái đang chỉnh sửa

  const breadcrumbTitles = {
    "admin/trang-thai-don-hang": "Danh sách trạng thái đơn hàng",
  };

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase();

  const fetchStatus = async (page = 1) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/trang-thai-don-hang?page=${page}`
      );
      setStatus(response.data.data);
      console.log(response.data.data);
      setTotalPages(response.data.last_page);
      setCurrentPage(response.data.current_page);
    } catch (error) {
      console.error("Failed to fetch methods", error);
    }
  };

  useEffect(() => {
    fetchStatus(currentPage);
  }, [currentPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Function to handle form submit and add a new status
  const handleAddStatus = async (e) => {
    e.preventDefault(); // Prevent the default form submit

    const statusData = {
      ten_trang_thai: name,
      mo_ta: description,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/trang-thai-don-hang",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(statusData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        // Handle the success response (e.g. close the modal, reset form fields)
        alert("Trạng thái đã được thêm thành công.");
        fetchStatus(currentPage); // Hoặc gọi lại với trang đầu tiên
        setName(""); // Reset the name field
        setDescription(""); // Reset the description field
        // Optionally close the modal
        const modalCloseButton = document.querySelector(
          '[data-bs-dismiss="modal"]'
        );
        modalCloseButton.click();
      } else {
        alert(`Lỗi: ${result.message}`);
      }
    } catch (error) {
      console.error("Error adding status:", error);
      alert("Đã xảy ra lỗi, vui lòng thử lại.");
    }
  };

  const handleEditStatus = async (statusId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/trang-thai-don-hang/${statusId}`
      );
      if (response.status === 200) {
        const { ten_trang_thai, mo_ta } = response.data;
        setEditName(ten_trang_thai);
        setEditDescription(mo_ta);
        setEditingStatusId(statusId);
      } else {
        alert("Lỗi: Không thể tải dữ liệu trạng thái.");
      }
    } catch (error) {
      console.error("Error fetching status detail:", error);
      alert("Đã xảy ra lỗi, vui lòng thử lại.");
    }
  };

  const handleUpdateStatus = async () => {
    const updatedData = {
      ten_trang_thai: editName,
      mo_ta: editDescription,
    };

    try {
      const response = await axios.put(
        `http://localhost:8000/api/trang-thai-don-hang/${editingStatusId}`,
        updatedData
      );

      if (response.status === 200) {
        alert("Trạng thái đã được cập nhật thành công.");
        fetchStatus(currentPage); // Tải lại danh sách trạng thái
        // Đóng modal
        const modalCloseButton = document.querySelector(
          '[data-bs-dismiss="modal"]'
        );
        modalCloseButton.click();
      } else {
        alert(`Lỗi: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Đã xảy ra lỗi, vui lòng thử lại.");
    }
  };

  const handleDeleteStatus = async (statusId) => {
    console.log("Xóa trạng thái với ID:", statusId); // Kiểm tra giá trị ID truyền vào

    try {
      // Xác nhận trước khi xóa
      if (window.confirm("Bạn chắc chắn muốn xóa trạng thái này?")) {
        const response = await axios.delete(
          `http://localhost:8000/api/trang-thai-don-hang/${statusId}`
        );

        if (response.status === 200 || response.status === 204) {
          alert("Trạng thái đã được xóa thành công.");
          fetchStatus(currentPage); // Cập nhật lại danh sách
        } else if (response.data && response.data.message) {
          alert(`Lỗi: ${response.data.message}`);
        } else {
          alert("Đã xảy ra lỗi không xác định trong quá trình xóa.");
        }
      }
    } catch (error) {
      // Xử lý khi xảy ra lỗi HTTP hoặc lỗi trong code
      console.error("Error deleting status:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Lỗi: ${error.response.data.message}`);
      } else {
        alert("Đã xảy ra lỗi, vui lòng thử lại.");
      }
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
            <h2 className="mb-0">Danh sách trạng thái đơn hàng</h2>
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
                    placeholder="Tìm kiếm"
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
                  data-bs-target="#addStatus"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Thêm trạng thái
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
                      className="white-space-nowrap fs-9 align-middle ps-5"
                      scope="col"
                      style={{ width: "20%" }}
                    >
                      STT
                    </th>
                    <th
                      className="white-space-nowrap align-middle"
                      scope="col"
                      style={{ width: "35%" }}
                      data-sort="product"
                    >
                      TÊN TRẠNG THÁI
                    </th>

                    <th
                      className="align-middle"
                      scope="col"
                      style={{ width: "35%" }}
                    >
                      MÔ TẢ
                    </th>

                    <th className="align-middle ps-5" style={{ width: "20%" }}>
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>

                <tbody className="list" id="products-table-body">
                  {status.map((status, index) => (
                    <tr key={status.id}>
                      <td className="product align-middle ps-5">
                        {(currentPage - 1) * 5 + index + 1}
                      </td>
                      <td className="product align-middle">
                        {status.ten_trang_thai}
                      </td>

                      <td className="tags align-middle review pb-2">
                        {status.mo_ta}
                      </td>

                      <td className="align-middle white-space-nowrap ps-4">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#editStatus"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-bs-reference="parent"
                          onClick={() => handleEditStatus(status.id)}
                        >
                          <span className="fa-solid fa-pen-to-square fs-9" />
                        </button>
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          onClick={() => handleDeleteStatus(status.id)} // Gọi function với `status.id`
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
        id="addStatus"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addStatus"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-l modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Thêm trạng thái</h3>
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
                      Tên trạng thái
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      onChange={(e) => setDescription(e.target.value)}
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
                onClick={handleAddStatus}
              >
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editStatus"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editStatus"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-l modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Sửa trạng thái</h3>
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
                      Tên trạng thái
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="ten_van_chuyen"
                      value={editName} // Dữ liệu hiện tại của tên trạng thái
                      onChange={(e) => setEditName(e.target.value)} // Cập nhật giá trị tên
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
                      value={editDescription} // Dữ liệu hiện tại của mô tả trạng thái
                      onChange={(e) => setEditDescription(e.target.value)} // Cập nhật mô tả
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
                onClick={handleUpdateStatus}
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
export default OrderStatus;
