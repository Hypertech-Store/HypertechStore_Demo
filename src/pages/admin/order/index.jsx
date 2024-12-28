import { useState, useEffect } from "react";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalOrderPages, setTotalOrderPages] = useState(0);
  const [currentOrderPage, setCurrentOrderPage] = useState(1);
  const ordersPerPage = 5;

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/don-hang?page=${currentOrderPage}&number_row=${ordersPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setOrders(data.data); // Lưu dữ liệu đơn hàng vào state
        console.log(data.data);
        setTotalOrders(data.total); // Lưu tổng số đơn hàng từ API
        setTotalOrderPages(data.total_pages); // Lưu số trang từ API
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [currentOrderPage]);

  // Xử lý khi chuyển trang
  const handleOrderPageChange = (pageNumber) => {
    setCurrentOrderPage(pageNumber);
  };

  // Hàm để lấy class theo trạng thái đơn hàng
  function getBadgeClass(statusId) {
    switch (statusId) {
      case 1:
        return "badge-phoenix-warning"; // Chờ xác nhận
      case 2:
        return "badge-phoenix-info"; // Chờ lấy hàng
      case 3:
        return "badge-phoenix-primary"; // Chờ giao hàng
      case 4:
        return "badge-phoenix-secondary"; // Đang vận chuyển
      case 5:
        return "badge-phoenix-success"; // Đã giao hàng
      // case 6:
      //   return "badge-phoenix-success"; // Hoàn thành đơn
      case 6:
        return "badge-phoenix-danger"; // Đơn giao thất bại
      default:
        return "badge-phoenix-light"; // Mặc định
    }
  }

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
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Orders</h2>
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
              <span>Pending payment </span>
              <span className="text-body-tertiary fw-semibold">(6)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Unfulfilled </span>
              <span className="text-body-tertiary fw-semibold">(17)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Completed</span>
              <span className="text-body-tertiary fw-semibold">(6,810)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Refunded</span>
              <span className="text-body-tertiary fw-semibold">(8)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Failed</span>
              <span className="text-body-tertiary fw-semibold">(2)</span>
            </a>
          </li>
        </ul>
        <div
          id="orderTable"
          data-list='{"valueNames":["order","total","customer","payment_status","fulfilment_status","delivery_type","date"],"page":10,"pagination":true}'
        >
          <div className="mb-4">
            <div className="row g-3">
              <div className="col-auto">
                <div className="search-box">
                  <form className="position-relative">
                    <input
                      className="form-control search-input search"
                      type="search"
                      placeholder="Search orders"
                      aria-label="Search"
                    />
                    <span className="fas fa-search search-box-icon" />
                  </form>
                </div>
              </div>
              <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
                <div className="btn-group position-static" role="group">
                  <div
                    className="btn-group position-static text-nowrap"
                    role="group"
                  >
                    <button
                      className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      Payment status
                      <span className="fas fa-angle-down ms-2" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="btn-group position-static text-nowrap"
                    role="group"
                  >
                    <button
                      className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      Fulfilment status
                      <span className="fas fa-angle-down ms-2" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0">
                    More filters
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table table-sm fs-9 mb-0">
                <thead>
                  <tr>
                    <th
                      className="white-space-nowrap align-middle pe-3 ps-0"
                      style={{ width: "5%" }}
                    >
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          id="checkbox-bulk-order-select"
                          type="checkbox"
                          data-bulk-select='{"body":"order-table-body"}'
                        />
                      </div>
                    </th>
                    <th
                      className="white-space-nowrap align-middle pe-3 ps-0"
                      scope="col"
                      data-sort="order"
                      style={{ minWidth: 180 }}
                    >
                      Mã đơn hàng
                    </th>
                    <th
                      className="align-middle pe-3"
                      scope="col"
                      data-sort="status"
                      style={{ width: "15%", minWidth: 180 }}
                    >
                      Trạng thái
                    </th>
                    <th
                      className="align-middle text-start"
                      scope="col"
                      data-sort="delivery"
                      style={{ width: "20%", minWidth: 180 }}
                    >
                      Phương thức thanh toán
                    </th>
                    <th
                      className="align-middle pe-0 text-end"
                      scope="col"
                      data-sort="date"
                      style={{ width: "15%", minWidth: 150 }}
                    >
                      Ngày đặt hàng
                    </th>
                    <th
                      className="align-middle text-end"
                      scope="col"
                      data-sort="total"
                      style={{ width: "15%", minWidth: 150 }}
                    >
                      Tổng tiền
                    </th>

                    <th
                      className="align-middle pe-0 text-end"
                      scope="col"
                      style={{ width: "15%" }}
                    >
                      {" "}
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="profile-order-table-body">
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover-actions-trigger btn-reveal-trigger position-static"
                    >
                      <td
                        className="white-space-nowrap align-middle pe-3 ps-0"
                        style={{ width: "5%" }}
                      >
                        <div className="form-check mb-0 fs-8">
                          <input
                            className="form-check-input"
                            id="checkbox-bulk-order-select"
                            type="checkbox"
                            data-bulk-select='{"body":"order-table-body"}'
                          />
                        </div>
                      </td>
                      <td className="order align-middle white-space-nowrap py-2 ps-0">
                        <a className="fw-semibold text-primary" href="#!">
                          #{order.ma_don_hang}
                        </a>
                      </td>
                      <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                        <span
                          className={`badge badge-phoenix fs-10 ${getBadgeClass(
                            order.trang_thai_don_hang_id
                          )}`}
                        >
                          <span className="badge-label">
                            {order.trang_thai_don_hang}
                          </span>
                        </span>
                      </td>

                      <td className="delivery align-middle white-space-nowrap text-body py-2">
                        {order.phuong_thuc_thanh_toan.ten_phuong_thuc}
                      </td>
                      <td className="total align-middle text-body-tertiary text-end py-2">
                        {new Date(order.created_at).toLocaleString()}
                      </td>
                      <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
                        {new Intl.NumberFormat("vi-VN").format(
                          order.tong_tien
                        ) + " VNĐ"}
                      </td>

                      <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                        <div className="btn-reveal-trigger position-static">
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs-10" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Export
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-danger" href="#!">
                              Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
              <div className="col-auto">
                <p className="mb-0">
                  {orders.length === 0
                    ? "No orders available"
                    : `Showing ${
                        (currentOrderPage - 1) * ordersPerPage + 1
                      } to ${Math.min(
                        currentOrderPage * ordersPerPage,
                        totalOrders
                      )} of ${totalOrders} items`}
                </p>
              </div>

              <div className="col-auto d-flex">
                <button
                  className={`page-link ${
                    currentOrderPage === 1 ? "disabled" : ""
                  }`}
                  data-list-pagination="prev"
                  onClick={() => handleOrderPageChange(currentOrderPage - 1)}
                  disabled={currentOrderPage === 1}
                >
                  <span className="fas fa-chevron-left" />
                </button>
                <ul className="mb-0 pagination">
                  {[...Array(totalOrderPages)].map((_, index) => (
                    <li
                      key={index}
                      className={currentOrderPage === index + 1 ? "active" : ""}
                    >
                      <button
                        className="page"
                        type="button"
                        onClick={() => handleOrderPageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className={`page-link ${
                    currentOrderPage === totalOrderPages ? "disabled" : ""
                  }`}
                  data-list-pagination="next"
                  onClick={() => handleOrderPageChange(currentOrderPage + 1)}
                  disabled={currentOrderPage === totalOrderPages}
                >
                  <span className="fas fa-chevron-right" />
                </button>
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
export default Order;
