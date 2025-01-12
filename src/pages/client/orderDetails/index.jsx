import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
const OrderDetails = () => {
  document.title = "Hypertech Store - Chi tiết đơn hàng ";
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const breadcrumbTitles = {
    "chi-tiet-don-hang": "Chi tiết đơn hàng", // URL chính, không có "/"
  };

  // Tách ra tên của các phần đường dẫn, không bao gồm id (phần cuối cùng là id đơn hàng)
  const currentTitle =
    breadcrumbTitles[pathnames[0]] ||
    pathnames[pathnames.length - 1]?.toUpperCase();
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderStatusList, setOrderStatusList] = useState([]);
  const [nguoiHuy, setNguoiHuy] = useState("");

  const handleViewDetails = (id) => {
    navigate(`/chi-tiet-san-pham?id=${id}`);
  };

  useEffect(() => {
    // Fetch trạng thái đơn hàng từ API
    fetch("http://127.0.0.1:8000/api/getAllTrangThaiDonHang")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dữ liệu trạng thái:", data);
        setOrderStatusList(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu trạng thái:", error);
      });
  }, []);
  function getBadgeClass(statusId) {
    switch (statusId) {
      case 1:
        return "badge-phoenix-warning"; // Chờ xác nhận
      case 2:
        return "badge-phoenix-danger"; // Đã hủy
      case 3:
        return "badge-phoenix-info"; // Đang lấy hàng
      case 4:
        return "badge-phoenix-primary"; // Chờ giao hàng
      case 5:
        return "badge-phoenix-secondary"; // Đang vận chuyển
      case 6:
        return "badge-phoenix-success"; // Đã giao hàng
      case 7:
        return "badge-phoenix-dark"; // Đã hoàn thành
      case 8:
        return "badge-phoenix-warning-light"; // Hoàn trả hàng
      case 9:
        return "badge-phoenix-success-light"; // Trả hàng thành công
      default:
        return "badge-phoenix-light"; // Mặc định
    }
  }

  useEffect(() => {
    // Fetch trạng thái đơn hàng từ API
    fetch("http://127.0.0.1:8000/api/getAllTrangThaiDonHang")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dữ liệu trạng thái:", data);
        setOrderStatusList(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu trạng thái:", error);
      });
  }, []);

  // Hàm để lấy tên trạng thái theo ID
  function getStatusName(statusId) {
    const status = orderStatusList.find((status) => status.id === statusId);
    return status ? status.ten_trang_thai : "Chưa rõ";
  }

  console.log(orderId);


  const handleCancelOrder = async (nguoi_huy) => {
    const rolePrefix = nguoi_huy.split("_")[0]; // Tách chuỗi để lấy tiền tố trước dấu "_"
    const id = nguoi_huy.split("_")[1]; // Lấy phần sau dấu "_" làm id

    // Kiểm tra nếu là admin hoặc user và gọi API tương ứng
    let apiUrl = "";
    if (rolePrefix === "admin") {
      apiUrl = `http://127.0.0.1:8000/api/quan-tri-viens/detail/${id}`; // API cho admin với id
    } else if (rolePrefix === "user") {
      apiUrl = `http://127.0.0.1:8000/api/khach-hang/profile/${id}`; // API cho user với id
    }

    try {
      // Fetch dữ liệu từ API
      const response = await fetch(apiUrl);

      // Kiểm tra phản hồi từ API
      if (!response.ok) {
        console.error("Lỗi phản hồi từ API:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Dữ liệu từ API:", data);

      if (rolePrefix === "admin") {
        setNguoiHuy(`Admin ${data.ho_ten}`); // Nếu là admin
      } else if (rolePrefix === "user") {
        setNguoiHuy(`Khách hàng ${data.user.ho_ten}`); // Nếu là user
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  // Gọi handleCancelOrder khi orderDetails thay đổi
  useEffect(() => {
    if (orderDetails && orderDetails.nguoi_huy) {
      handleCancelOrder(orderDetails.nguoi_huy);
    }
  }, [orderDetails]);

  useEffect(() => {
    // Fetch chi tiết đơn hàng từ API
    fetch(`http://127.0.0.1:8000/api/donhang/order-details/${orderId}`)
      .then((response) => response.json())
      .then((data) => {
        setOrderDetails(data.data);
        console.log(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        setLoading(false);
      });
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }


  const handleRedirect = (orderId) => {
    navigate(`/trang-thai-don-hang?id=${orderId}`); // Truyền id qua tham số query
  };

  return (
    <>
      <section className="pt-5 pb-9 bg-body-emphasis dark__bg-gray-1200 border-top">
        <div className="container-small">
          <nav className="mb-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                {currentTitle}
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h3 className="mb-0">
              Chi tiết đơn hàng{" "}
              <span
                style={{
                  color: "#FF5733",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                #{orderDetails.ma_don_hang}
              </span>
            </h3>

            <div>
              <button
                className="btn btn-phoenix-secondary me-2"
                onClick={() => handleRedirect(orderId)}
              >
                <span className="fa fa-wheelchair-alt me-sm-2" />
                <span className="d-none d-sm-inline-block">
                  Trạng thái đơn hàng
                </span>
              </button>
            </div>
          </div>


          <div className="card mx-n4 mx-lg-n6 mb-5" style={{ borderRadius: "0" }}>
            <div className="card-body" style={{ fontSize: "15px" }}>
              <div className="row">
                <div className="col-md-3">
                  <p>
                    <strong>Mã đơn hàng:</strong> #{orderDetails.ma_don_hang}
                  </p>
                  <p>
                    <strong>Khách hàng:</strong> {orderDetails.ho_ten_khach_hang}
                  </p>
                  <p>
                    <strong>Phương thức thanh toán:</strong>{" "}
                    {orderDetails.ten_phuong_thuc}
                  </p>
                  <p>
                    <strong>Hình thức vận chuyển:</strong>{" "}
                    {orderDetails.ten_van_chuyen}
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    <strong>Người nhận:</strong> {orderDetails.ho_ten}
                  </p>
                  <p>
                    <strong>Email:</strong> {orderDetails.email}
                  </p>
                  <p>
                    <strong>Số điện thoại:</strong> {orderDetails.so_dien_thoai}
                  </p>
                  <p>
                    <strong>Địa chỉ giao hàng:</strong>{" "}
                    {orderDetails.dia_chi_giao_hang}
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    <strong>Trạng thái đơn hàng:</strong>
                    <span
                      className={`badge badge-phoenix fs-10 ${getBadgeClass(
                        orderDetails.trang_thai_don_hang_id
                      )}`}
                    >
                      {orderDetails.trang_thai_don_hang}
                    </span>

                  </p>
                  <p>
                    <strong>Mã giảm giá:</strong> #{orderDetails.ma_giam_gia}
                  </p>
                  <p>
                    <strong>Tổng tiền:</strong>{" "}
                    {Number(orderDetails.tong_tien).toLocaleString()} VNĐ
                  </p>
                  <p>
                    <strong>Giảm giá:</strong> {orderDetails.discount}%
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    <strong>Lý do hủy:</strong> {orderDetails.ly_do_huy_don}
                  </p>
                  <p>
                    <strong>Người hủy:</strong> {nguoiHuy}
                  </p>
                  <p>
                    <strong>Lý do hoàn hàng:</strong>{" "}
                    {orderDetails.ly_do_hoan_hang}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bảng chi tiết sản phẩm */}
          <div
            id="orderTable"
            data-list='{"valueNames":["order","total","customer","payment_status","fulfilment_status","delivery_type","date"],"page":10,"pagination":true}'
          >
            <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
              <div className="table-responsive scrollbar mx-n1 px-1">
                <table className="table table-sm fs-9 mb-0">
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: "7%" }}>
                        STT
                      </th>
                      <th scope="col" style={{ width: "10%" }}>
                        Hình ảnh
                      </th>
                      <th scope="col" style={{ width: "25%" }}>
                        Sản phẩm
                      </th>
                      <th scope="col" style={{ width: "15%" }}>
                        Danh mục
                      </th>
                      <th scope="col" style={{ width: "15%" }}>
                        Số lượng
                      </th>
                      <th scope="col" style={{ width: "15%" }}>
                        Biến thể
                      </th>
                      <th scope="col" style={{ width: "11%" }}>
                        Giá
                      </th>
                      <th scope="col" style={{ width: "5%" }} />
                    </tr>
                  </thead>
                  <tbody className="list" id="profile-order-table-body">
                    {orderDetails?.chi_tiet_don_hangs.map((item, index) => (
                      <tr
                        key={index}
                        className="hover-actions-trigger btn-reveal-trigger position-static"
                      >
                        <td className="order align-middle white-space-nowrap py-2 ps-0">
                          {index + 1}
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
                          <img
                            src={`http://127.0.0.1:8000/storage/${item.san_pham.duong_dan_anh}`}
                            alt={item.san_pham.ten_san_pham}
                            style={{ width: "50px" }}
                          />
                        </td>
                        <td className="status align-middle white-space-nowrap text-start py-2">
                          {item.san_pham.ten_san_pham}
                        </td>
                        <td className="order align-middle white-space-nowrap py-2 ps-1">
                          {item.san_pham.ten_danh_muc}
                        </td>
                        <td className="total align-middle text-body-tertiary text-start py-2">
                          {item.so_luong}
                        </td>
                        <td className="date align-middle fw-semibold text-start py-2 text-body-highlight">
                          {item.thuoc_tinh.map((t, idx) => (
                            <div key={idx}>{t.ten_gia_tri}</div>
                          ))}
                        </td>
                        <td className="order align-middle white-space-nowrap py-2 ps-1">
                          {Number(item.gia).toLocaleString()} VNĐ
                        </td>
                        <td className="order align-middle white-space-nowrap py-2 ps-1">
                          {orderDetails.trang_thai_don_hang_id === 7 ? (
                            <button className="btn btn-outline-info btn-sm"
                              type="button" onClick={() => handleViewDetails(item.san_pham_id)}>Đánh giá sản phẩm</button>
                          ) : (
                            <button className="btn btn-outline-info btn-sm"
                              type="button" disabled>
                              Chưa thể đánh giá
                            </button>
                          )}
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* end of .container*/}
      </section>
    </>
  );
};
export default OrderDetails;
