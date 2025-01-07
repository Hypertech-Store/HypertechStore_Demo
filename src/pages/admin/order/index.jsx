import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Order = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatusList, setOrderStatusList] = useState([]);
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
        setOrders(data.data); // Store orders data
        setTotalOrders(data.total); // Store total number of orders
        console.log(data.data);
        // Calculate the total number of pages based on the total orders
        const totalPages = Math.ceil(data.total / ordersPerPage);
        setTotalOrderPages(totalPages); // Store calculated total pages
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [currentOrderPage]); // Dependency on currentOrderPage for fetching data when changed

  // Handle page change
  function handleOrderPageChange(newPage) {
    if (newPage >= 1 && newPage <= totalOrderPages) {
      setCurrentOrderPage(newPage);
    }
  }

  const breadcrumbTitles = {
    "admin/don-hang": "Danh sách đơn hàng", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/getAllTrangThaiDonHang")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dữ liệu trạng thái:", data); // In ra dữ liệu API để kiểm tra
        setOrderStatusList(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu trạng thái:", error);
      });
  }, []);

  function getStatusName(statusId) {
    // Tìm trạng thái từ danh sách trạng thái
    const status = orderStatusList.find((status) => status.id === statusId);
    return status ? status.ten_trang_thai : "Chưa rõ"; // Trả về tên trạng thái, nếu không tìm thấy trả về "Chưa rõ"
  }

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

      default:
        return "badge-phoenix-light"; // Mặc định
    }
  }

  // Hàm xử lý khi thay đổi trạng thái
  function handleChangeStatus(orderId, newStatusId) {
    console.log("New Status ID:", newStatusId);

    // Tiến hành cập nhật trạng thái cho đơn hàng
    fetch(`http://127.0.0.1:8000/api/don-hang/update/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trang_thai_don_hang_id: newStatusId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Lỗi HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response Data:", data);

        // Kiểm tra dữ liệu trả về từ API và so với trạng thái mong muốn
        if (data.data && data.data.trang_thai_don_hang_id === newStatusId) {
          alert("Trạng thái đã được cập nhật!");

          // Cập nhật trạng thái cho đơn hàng trong state
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.id === orderId
                ? {
                    ...order,
                    trang_thai_don_hang_id: newStatusId,
                    trang_thai_don_hang: getStatusName(newStatusId), // Cập nhật tên trạng thái
                  }
                : order
            )
          );
        } else {
          alert("Cập nhật trạng thái thất bại.");
        }
      })
      .catch((error) => {
        console.error("Lỗi cập nhật trạng thái:", error);
        alert("Đã xảy ra lỗi, vui lòng thử lại.");
      });
  }

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
            <h2 className="mb-0 mt-3">Danh sách đơn hàng</h2>
          </div>
          <div className="col-auto ms-auto mt-3">
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
        </div>

        <div
          id="orderTable"
          data-list='{"valueNames":["order","total","customer","payment_status","fulfilment_status","delivery_type","date"],"page":10,"pagination":true}'
        >
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table table-sm fs-9 mb-0">
                <thead>
                  <tr>
                    <th
                      className="white-space-nowrap align-middle pe-3 ps-0"
                      scope="col"
                      data-sort="order"
                      style={{ width: "15%", minWidth: 120 }}
                    >
                      Mã đơn hàng
                    </th>
                    <th
                      className="align-middle pe-3"
                      scope="col"
                      data-sort="status"
                      style={{ width: "20%", minWidth: 150 }}
                    >
                      Khách hàng
                    </th>

                    <th
                      className="align-middle text-start"
                      scope="col"
                      data-sort="delivery"
                      style={{ width: "30%", minWidth: 200 }}
                    >
                      Phương thức thanh toán
                    </th>
                    <th
                      className="align-middle pe-3"
                      scope="col"
                      data-sort="status"
                      style={{ width: "20%", minWidth: 200 }}
                    >
                      Trạng thái
                    </th>
                    <th
                      className="align-middle pe-3"
                      scope="col"
                      data-sort="status"
                      style={{ width: "20%", minWidth: 180 }}
                    >
                      Hình thức vận chuyển
                    </th>
                    <th
                      className="align-middle pe-0 text-start"
                      scope="col"
                      data-sort="date"
                      style={{ width: "30%", minWidth: 180 }}
                    >
                      Ngày đặt hàng
                    </th>
                    <th
                      className="align-middle text-start"
                      scope="col"
                      data-sort="total"
                      style={{ width: "20%", minWidth: 150 }}
                    >
                      Tổng tiền
                    </th>

                    <th
                      className="align-middle pe-3"
                      scope="col"
                      data-sort="status"
                      style={{ width: "20%", minWidth: 180 }}
                    >
                      Địa chỉ
                    </th>

                    <th
                      className="align-middle pe-0"
                      scope="col"
                      style={{ width: "5%" }}
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
                      <td className="order align-middle white-space-nowrap py-2 ps-0">
                        <a className="fw-semibold text-primary" href="#!">
                          #{order.ma_don_hang}
                        </a>
                      </td>
                      <td className="order align-middle white-space-nowrap py-2 ps-0">
                        {order.ho_ten}
                      </td>

                      <td className="delivery align-middle white-space-nowrap text-body py-2">
                        {order.phuong_thuc_thanh_toan.ten_phuong_thuc}
                      </td>
                      <td className="status align-middle white-space-nowrap text-start py-2">
                        <div className="d-flex align-items-center">
                          {/* Hiển thị trạng thái hiện tại */}
                          <span
                            className={`badge badge-phoenix fs-10 ${getBadgeClass(
                              order.trang_thai_don_hang_id
                            )}`}
                          >
                            {order.trang_thai_don_hang}
                          </span>
                          {/* Nút chỉnh sửa trạng thái */}
                          <button
                            className="btn btn-outline-primary btn-sm ms-2"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            title="Cập nhật trạng thái"
                            style={{
                              padding: "0.25rem 0.5rem",
                              fontSize: "0.75rem",
                              borderRadius: "0.2rem",
                            }}
                          >
                            <i className="fas fa-sync-alt" />
                          </button>
                          {/* Dropdown danh sách trạng thái */}

                          <ul className="dropdown-menu shadow">
                            {orderStatusList.length > 0 ? (
                              orderStatusList.map((status) => (
                                <li key={status.id}>
                                  <button
                                    className="dropdown-item"
                                    type="button"
                                    onClick={() =>
                                      handleChangeStatus(order.id, status.id)
                                    }
                                    style={{
                                      color:
                                        order.trang_thai_don_hang_id ===
                                        status.id
                                          ? "#007bff"
                                          : "inherit",
                                      fontWeight:
                                        order.trang_thai_don_hang_id ===
                                        status.id
                                          ? "bold"
                                          : "normal",
                                    }}
                                  >
                                    {status.ten_trang_thai}
                                  </button>
                                </li>
                              ))
                            ) : (
                              <li>Không có trạng thái</li>
                            )}
                          </ul>
                        </div>
                      </td>
                      <td className="order align-middle white-space-nowrap py-2 ps-1">
                        {order.ten_van_chuyen}
                      </td>
                      <td className="total align-middle text-body-tertiary text-start py-2">
                        {new Date(order.created_at).toLocaleString()}
                      </td>
                      <td className="date align-middle fw-semibold text-start py-2 text-body-highlight">
                        {new Intl.NumberFormat("vi-VN").format(
                          order.tong_tien
                        ) + " VNĐ"}
                      </td>
                      <td className="order align-middle white-space-nowrap py-2 ps-1">
                        {order.dia_chi_giao_hang}
                      </td>

                      {/* <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
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
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
              <div className="col-auto">
                <p className="mb-0">
                  Trang {currentOrderPage} /{" "}
                  {Math.ceil(totalOrders / ordersPerPage)}
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
                  {[...Array(Math.ceil(totalOrders / ordersPerPage))].map(
                    (_, index) => (
                      <li
                        key={index}
                        className={
                          currentOrderPage === index + 1 ? "active" : ""
                        }
                      >
                        <button
                          className="page"
                          type="button"
                          onClick={() => handleOrderPageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    )
                  )}
                </ul>
                <button
                  className={`page-link ${
                    currentOrderPage === Math.ceil(totalOrders / ordersPerPage)
                      ? "disabled"
                      : ""
                  }`}
                  data-list-pagination="next"
                  onClick={() => handleOrderPageChange(currentOrderPage + 1)}
                  disabled={
                    currentOrderPage === Math.ceil(totalOrders / ordersPerPage)
                  }
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
