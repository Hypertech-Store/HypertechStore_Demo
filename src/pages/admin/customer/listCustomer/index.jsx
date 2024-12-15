import { useState, useEffect } from "react";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
const listCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Thêm state loading
  const customersPerPage = 10;

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
            <a href="#!">Page 1</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#!">Page 2</a>
          </li>
          <li className="breadcrumb-item active">Default</li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-2 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Customers</h2>
          </div>
        </div>
        <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <span>All </span>
              <span className="text-body-tertiary fw-semibold">(68817)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>New </span>
              <span className="text-body-tertiary fw-semibold">(6)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Abandoned checkouts </span>
              <span className="text-body-tertiary fw-semibold">(17)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Locals </span>
              <span className="text-body-tertiary fw-semibold">(6,810)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Email subscribers </span>
              <span className="text-body-tertiary fw-semibold">(8)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Top reviews </span>
              <span className="text-body-tertiary fw-semibold">(2)</span>
            </a>
          </li>
        </ul>
        <div
          id="products"
          data-list='{"valueNames":["customer","email","total-orders","total-spent","city","last-seen","last-order"],"page":10,"pagination":true}'
        >
          <div className="mb-4">
            <div className="row g-3">
              <div className="col-auto">
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
              <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
                <div className="btn-group position-static" role="group">
                  <div className="btn-group position-static text-nowrap">
                    <button
                      className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      {""}
                      Country
                      <span className="fas fa-angle-down ms-2" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          US
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Uk
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Australia
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group position-static text-nowrap">
                    <button
                      className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      {""}
                      VIP
                      <span className="fas fa-angle-down ms-2" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          VIP 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          VIP 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          VIP 3
                        </a>
                      </li>
                      <li />
                    </ul>
                  </div>
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0">
                    More filters
                  </button>
                </div>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-phoenix-secondary flex-shrink-0"
                  type="button"
                >
                  <span className="fa-solid fa-file-export fs-9 me-2" />
                  Export
                </button>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar-overlay mx-n1 px-1">
              <table className="table table-sm fs-9 mb-0">
                <thead>
                  <tr>
                    <th className="white-space-nowrap fs-9 align-middle ps-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          id="checkbox-bulk-customers-select"
                          type="checkbox"
                        />
                      </div>
                    </th>
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
                    {customers.map((customer) => (
                      <tr
                        key={customer.id}
                        className="hover-actions-trigger btn-reveal-trigger position-static"
                      >
                        <td className="fs-9 align-middle ps-0 py-3">
                          <div className="form-check mb-0 fs-8">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap">
                          <a
                            className="d-flex align-items-center text-body-emphasis"
                            href="#"
                          >
                            <div className="avatar avatar-m">
                              <img
                                className="rounded-circle"
                                src={
                                  customer.hinh_anh ||
                                  "https://via.placeholder.com/50"
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
                <PropagateLoader speedMultiplier={1} color="#36d7b7" />
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
                  <div className="mb-5 mt-1 flex-column align-items-center justify-content-between">
                    <img
                      src={
                        selectedCustomer?.hinh_anh ||
                        "https://via.placeholder.com/150"
                      } // default image
                      alt="User Image"
                      className="img-fluid"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                  <div className="mb-4">
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
                  <div className="mb-4">
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
                  <div className="mb-4">
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
                  <div className="mb-4">
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
                  <div className="mb-4">
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
                  <div className="mb-4">
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
