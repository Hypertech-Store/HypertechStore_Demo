import { useState, useEffect } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useLocation } from "react-router-dom";

import avatar from "../../../../assets/img/team/150x150/avatar.png";
const listCustomer = () => {
  const link = "http://127.0.0.1:8000/storage/";
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [customers, setCustomers] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true); // Thêm state loading

  const breadcrumbTitles = {
    "admin/danh-sach-khach-hang": "List customer", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  console.log(currentTitle);
  const customersPerPage = 10;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Set loading to true initially
    setLoading(true);

    // Fetch data from the API
    axios
      .get("http://127.0.0.1:8000/api/khach-hang/tai-khoan")
      .then((response) => {
        setCustomers(response.data.data);

        // Simulate a delay before hiding the loader
        setTimeout(() => {
          setLoading(false); // Dữ liệu đã được tải xong, ẩn loader sau một khoảng thời gian
        }, 5000); // Adjust the time (in milliseconds) as needed, e.g., 2000ms = 2 seconds
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
        setLoading(false); // Trong trường hợp có lỗi, ẩn loader
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
            <Link to="/admin">Dashboard</Link>
          </li>

          <li className="breadcrumb-item active" aria-current="page">
            {currentTitle}
          </li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-2 mb-4">
          <div className="col-auto">
            <h2 className="mb-0 mt-5">List customers</h2>
          </div>
          <div className="col-auto ms-auto">
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
                      IMAGE
                    </th>
                    <th className="align-middle" style={{ width: "15%" }}>
                      FULLNAME
                    </th>
                    <th className="align-middle" style={{ width: "20%" }}>
                      EMAIL
                    </th>
                    <th className="align-middle" style={{ width: "15%" }}>
                      PHONE
                    </th>
                    <th className="align-middle" style={{ width: "30%" }}>
                      ADDRESS
                    </th>
                    <th className="align-middle" style={{ width: "10%" }}>
                      JOIN DATE
                    </th>
                    <th className="align-middle" style={{ width: "5%" }}>
                      ACTION
                    </th>
                  </tr>
                </thead>
                {/* Conditionally render tbody after loading */}
                {!loading && (
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
                          {new Date(customer.created_at).toLocaleDateString(
                            "en-GB"
                          )}
                        </td>
                        <td className="align-middle white-space-nowrap">
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#addDealModal"
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
                )}
              </table>
            </div>
            {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100px", // Set a height for the loading row
                }}
              >
                <PulseLoader size={10} speedMultiplier={1} color="#36d7b7" />
              </div>
            )}

            {/* Pagination outside the table */}
            {!loading && (
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
                    className={`page-link ${
                      currentPage === 1 ? "disabled" : ""
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
                    className={`page-link ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <span className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="addDealModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addDealModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Customer Details</h3>
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
                        marginLeft: "50px",
                      }}
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-body-highlight fw-bold mb-2">
                      Fullname
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
                      Username
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
                      Phone
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
                      Address
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
                      Gender
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
