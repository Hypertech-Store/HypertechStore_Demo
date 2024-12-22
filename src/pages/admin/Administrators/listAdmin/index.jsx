import team from "../../../../assets/img/team/32.webp";
import React, { useEffect, useState } from "react";
import axios from "axios";

const listAdmin = () => {
  const [quanTriViens, setQuanTriViens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const link = "http://127.0.0.1:8000/storage/";

  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 10,
  });

  // Hàm lấy dữ liệu từ API
  const fetchQuanTriViens = async (page = 1) => {
    setLoading(true);
    setError(null); // Reset lỗi khi bắt đầu tải
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/quan-tri-viens/getAll?page=${page}&per_page=${pagination.per_page}`
      );
      const { data, current_page, last_page } = response.data;
      setQuanTriViens(data);
      setCurrentPage(current_page);
      setTotalPages(last_page);
    } catch (err) {
      setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuanTriViens();
  }, []);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      fetchQuanTriViens(page);
    }
  };

  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#!">Page 1</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#!">Page 2</a>
          </li>
          <li className="breadcrumb-item active">Default</li>
        </ol>
      </nav>
      <div className="pb-6">
        <h2 className="mb-4">Administrators</h2>
        <div
          id="lealsTable"
          data-list='{"valueNames":["name","email","phone","contact","company","date"],"page":10,"pagination":true}'
        >
          <div className="row g-3 justify-content-between mb-4">
            <div className="col-auto">
              <div className="d-md-flex justify-content-between">
                <div>
                  <button className="btn btn-primary me-4">
                    <span className="fas fa-plus me-2" />
                    Create Lead
                  </button>
                  <button className="btn btn-link text-body px-0">
                    <span className="fa-solid fa-file-export fs-9 me-2" />
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex">
                <div className="search-box me-2">
                  <form className="position-relative">
                    <input
                      className="form-control search-input search"
                      type="search"
                      placeholder="Search by name"
                      aria-label="Search"
                    />
                    <span className="fas fa-search search-box-icon" />
                  </form>
                </div>
                <div className="flatpickr-input-container me-2">
                  <input
                    className="form-control ps-6 datetimepicker"
                    id="datepicker"
                    type="text"
                    data-options='{"dateFormat":"M j, Y","disableMobile":true,"defaultDate":"Mar 1, 2022"}'
                  />
                  <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary" />
                </div>
                <button
                  className="btn px-3 btn-phoenix-secondary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#filterModal"
                  data-boundary="window"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span
                    className="fa-solid fa-filter text-primary"
                    data-fa-transform="down-3"
                  />
                </button>
                <div className="modal fade" id="filterModal" tabIndex={-1}>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border border-translucent">
                      <form id="addEventForm" autoComplete="off">
                        <div className="modal-header border-translucent p-4 justify-content-between">
                          <h5 className="modal-title text-body-highlight fs-6 lh-sm">
                            Filter
                          </h5>
                          <button
                            className="btn p-1 text-danger"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span className="fas fa-times fs-9" />
                          </button>
                        </div>
                        <div className="modal-body pt-4 pb-2 px-4">
                          <div className="mb-3">
                            <label
                              className="fw-bold mb-2 text-body-highlight"
                              htmlFor="leadStatus"
                            >
                              Lead Status
                            </label>
                            <select className="form-select" id="leadStatus">
                              <option value="newLead" selected="selected">
                                New Lead
                              </option>
                              <option value="coldLead">Cold Lead</option>
                              <option value="wonLead">Won Lead</option>
                              <option value="canceled">Canceled</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label
                              className="fw-bold mb-2 text-body-highlight"
                              htmlFor="createDate"
                            >
                              Create Date
                            </label>
                            <select className="form-select" id="createDate">
                              <option value="today" selected="selected">
                                Today
                              </option>
                              <option value="last7Days">Last 7 Days</option>
                              <option value="last30Days">Last 30 Days</option>
                              <option value="chooseATimePeriod">
                                Choose a time period
                              </option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label
                              className="fw-bold mb-2 text-body-highlight"
                              htmlFor="designation"
                            >
                              Designation
                            </label>
                            <select className="form-select" id="designation">
                              <option value="VPAccounting" selected="selected">
                                VP Accounting
                              </option>
                              <option value="ceo">CEO</option>
                              <option value="creativeDirector">
                                Creative Director
                              </option>
                              <option value="accountant">Accountant</option>
                              <option value="executiveManager">
                                Executive Manager
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-end align-items-center px-4 pb-4 border-0 pt-3">
                          <button
                            className="btn btn-sm btn-phoenix-primary px-4 fs-10 my-0"
                            type="submit"
                          >
                            {""}
                            <span className="fas fa-arrows-rotate me-2 fs-10" />
                            Reset
                          </button>
                          <button
                            className="btn btn-sm btn-primary px-9 fs-10 my-0"
                            type="submit"
                          >
                            Done
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0 leads-table border-top border-translucent">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Contact Name</th>
                  <th>Address</th>
                  <th>Create Date</th>
                </tr>
              </thead>
              <tbody id="leal-tables-body">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      Đang tải dữ liệu...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="7" className="text-center text-danger">
                      {error}
                    </td>
                  </tr>
                ) : quanTriViens.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      Không có dữ liệu.
                    </td>
                  </tr>
                ) : (
                  quanTriViens.map((admin, index) => (
                    <tr
                      key={admin.id}
                      className="hover-actions-trigger btn-reveal-trigger position-static"
                    >
                      <td>
                        {(currentPage - 1) * 10 + index + 1}
                      </td>
                      <td className="name align-middle white-space-nowrap ps-0">
                        <div className="d-flex align-items-center">
                          <a href="#!">
                            <div className="avatar avatar-xl me-3">
                              <img
                                className="rounded-circle"
                                src={`${link}${admin.anh_nguoi_dung}`}
                                alt="Avatar"
                              />
                            </div>
                          </a>
                          <div>
                            <a className="fs-8 fw-bold" href="#!">
                              {admin.ho_ten}
                            </a>
                            <div className="d-flex align-items-center">
                              <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
                                {admin.ten_dang_nhap}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                        <a className="text-body-highlight" href={`mailto:${admin.email}`}>
                          {admin.email}
                        </a>
                      </td>
                      <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                        <a className="text-body-highlight" href={`tel:${admin.so_dien_thoai}`}>
                          {admin.so_dien_thoai}
                        </a>
                      </td>
                      <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
                        {admin.ho_ten}
                      </td>
                      <td className="address align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
                        {admin.dia_chi}
                      </td>
                      <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
                        {new Date(admin.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="row align-items-center justify-content-end py-4 pe-0 fs-9">
            <div className="col-auto d-flex">
              <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body">
                Trang {pagination.current_page} / {totalPages}
              </p>
            </div>
            <div className="col-auto d-flex">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="fas fa-chevron-left" />
              </button>
              <ul className="mb-0 pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i + 1}
                    className={`page-item ${currentPage === i + 1 ? "active" : ""
                      }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="fas fa-chevron-right" />
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

export default listAdmin;
