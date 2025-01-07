import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

import avatar from "../../../assets/img/team/150x150/avatar.png";
const listCustomer = () => {
  const link = "http://127.0.0.1:8000/storage/";
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const breadcrumbTitles = {
    "admin/danh-sach-khach-hang": "Danh sách khách hàng", // Đây là URL không có "/"
  };
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  console.log(currentTitle);
  const customersPerPage = 10;

  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/api/khach-hang/tai-khoan")
      .then((response) => {
        setCustomers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(customers.length / customersPerPage);
  console.log(totalPages);
  // Get current customers to display based on the page
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
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
        <div className="row g-2 mb-4">
          <div className="col-auto">
            <h2 className="mb-0 mt-3">Danh sách khách hàng</h2>
          </div>
          <div className="col-auto ms-auto mt-3">
            <div className="search-box">
              <form className="position-relative">
                <input
                  className="form-control search-input search"
                  type="search"
                  placeholder="Search customers"
                  aria-label="Search"
                />
                <span className="fas fa-search search-box-icon" />
              </form>
            </div>
          </div>
        </div>

        <div
          id="products"
          data-list='{"valueNames":["customer","email","total-orders","total-spent","city","last-seen","last-order"],"page":10,"pagination":true}'
        >
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar-overlay mx-n1 px-1">
              <table className="table table-sm fs-9 mb-0">
                <thead>
                  <tr>
                    <th className="align-middle" style={{ width: "10%" }}>
                      HÌNH ẢNH
                    </th>
                    <th className="align-middle" style={{ width: "15%" }}>
                      KHÁCH HÀNG
                    </th>
                    <th className="align-middle" style={{ width: "20%" }}>
                      EMAIL
                    </th>
                    <th className="align-middle" style={{ width: "15%" }}>
                      SỐ ĐIỆN THOẠI
                    </th>
                    <th className="align-middle" style={{ width: "30%" }}>
                      ĐỊA CHỈ
                    </th>
                    <th className="align-middle" style={{ width: "10%" }}>
                      NGÀY SINH
                    </th>
                    <th className="align-middle" style={{ width: "5%" }}>
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                {/* Conditionally render tbody after loading */}

                <tbody>
                  {currentCustomers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="hover-actions-trigger btn-reveal-trigger position-static"
                    >
                      <td className="customer align-middle white-space-nowrap">
                        <a
                          className="d-flex align-items-center text-body-emphasis"
                          href="#"
                        >
                          <div className="avatar avatar-m">
                            <img
                              className="rounded-circle"
                              src={
                                customer.hinh_anh
                                  ? `${link}${customer.hinh_anh}`
                                  : avatar
                              }
                              alt="Customer Avatar"
                            />
                          </div>
                        </a>
                      </td>
                      <td className="align-middle white-space-nowrap fw-semibold">
                        {customer.ho_ten}
                      </td>
                      <td className="align-middle white-space-nowrap">
                        {customer.email}
                      </td>
                      <td className="align-middle white-space-nowrap">
                        {customer.dien_thoai}
                      </td>
                      <td className="align-middle white-space-nowrap">
                        {customer.dia_chi}
                      </td>
                      <td className="align-middle white-space-nowrap">
                        {new Date(customer.ngay_sinh).toLocaleDateString(
                          "en-GB"
                        )}
                      </td>
                      <td className="align-middle white-space-nowrap">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#addCustomer"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-bs-reference="parent"
                          onClick={() => {
                            // Set the selected customer by using the customer object directly
                            setSelectedCustomer(customer);
                          }}
                        >
                          <span className="fas fa-eye fs-10" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
            {/* Pagination outside the table */}

            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
              <div className="col-auto">
                <p className="mb-0">
                  Showing{" "}
                  {currentPage === 1
                    ? 1
                    : (currentPage - 1) * customersPerPage + 1}{" "}
                  to{" "}
                  {Math.min(currentPage * customersPerPage, customers.length)}{" "}
                  of {customers.length} items
                </p>
              </div>
              <div className="col-auto d-flex">
                <button
                  className={`page-link ${currentPage === 1 ? "disabled" : ""
                    }`}
                  onClick={() => handlePageChange(currentPage - 1)}
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
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className={`page-link ${currentPage === totalPages ? "disabled" : ""
                    }`}
                  onClick={() => handlePageChange(currentPage + 1)}
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
        id="addCustomer"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addCustomer"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Chi tiết khách hàng</h3>
              <button
                className="btn btn-sm btn-phoenix-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="fas fa-times text-danger" />
              </button>
            </div>
            <div className="modal-body px-0">
              <div className="row g-4">
                {/* Left column with customer details */}
                <div className="col-lg-5">
                  <div className="mb-5 flex-column align-items-center justify-content-between">
                    <img
                      src={
                        selectedCustomer?.hinh_anh
                          ? `${link}${selectedCustomer.hinh_anh}` // Concatenates link with image path
                          : avatar // Default placeholder image
                      }
                      alt="User Image"
                      className="img-thumbnail"
                      style={{
                        width: "170px",
                        height: "170px",
                      }}
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên khách hàng
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={selectedCustomer?.ho_ten || ""}
                      readOnly
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên người dùng
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={selectedCustomer?.ten_nguoi_dung || ""}
                      readOnly
                    />
                  </div>
                </div>

                {/* Right column with more details */}
                <div className="col-lg-7">
                  <div className="mb-5">
                    <label className="text-body-highlight fw-bold mb-2">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      value={selectedCustomer?.email || ""}
                      readOnly
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-body-highlight fw-bold mb-2">
                      Số điện thoại
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={selectedCustomer?.dien_thoai || ""}
                      readOnly
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-body-highlight fw-bold mb-2">
                      Địa chỉ
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={selectedCustomer?.dia_chi || ""}
                      readOnly
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-body-highlight fw-bold mb-2">
                      Giới tính
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={selectedCustomer?.gioi_tinh || ""}
                      readOnly
                    />
                  </div>
                </div>
              </div>
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
export default listCustomer;
