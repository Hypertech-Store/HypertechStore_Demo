import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const OrderDetails = () => {
  const breadcrumbTitles = {
    "admin/chi-tiet-don-hang": "Chi tiết đơn hàng", // Đây là URL không có "/"
  };
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const adminId = localStorage.getItem("adminId");
  console.log(adminId);
  

  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase();
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderStatusList, setOrderStatusList] = useState([]);
  const [nguoiHuy, setNguoiHuy] = useState('');

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

  // Hàm để lấy class của trạng thái
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


  // Hàm lọc trạng thái theo trang_thai_id
  function getFilteredStatusList(currentStatusId) {
    if (currentStatusId === 1) {
      // Chỉ cho phép chuyển sang trạng thái 2 và 3, ẩn trạng thái 8 và 9
      return orderStatusList.filter((status) => [2, 3].includes(status.id));
    } else if (currentStatusId === 2) {
      return []; // Không hiển thị trạng thái nào
    } else if ([3, 4, 5, 6, 7].includes(currentStatusId)) {
      if (currentStatusId === 3) {
        return orderStatusList.filter((status) => [4, 5, 6, 7].includes(status.id));
      } else if (currentStatusId === 4) {
        return orderStatusList.filter((status) => [5, 6, 7].includes(status.id));
      } else if (currentStatusId === 5) {
        return orderStatusList.filter((status) => [6, 7].includes(status.id));
      } else if (currentStatusId === 6) {
        return orderStatusList.filter((status) => status.id === 7);
      } else if (currentStatusId === 7) {
        return []; // Không hiển thị trạng thái nào
      }
    } else if (currentStatusId === 8) {
      return []; // Luôn ẩn trạng thái 8 và 9
    } else if (currentStatusId === 9) {
      return []; // Luôn ẩn trạng thái 8 và 9
    }
    
    // Ẩn trạng thái 8 và 9 với mọi trường hợp còn lại
    return orderStatusList.filter((status) => status.id !== 8 && status.id !== 9);
  }
  

  function handleChangeStatus(orderId, newStatusId) {
    const currentStatusId = orderDetails.trang_thai_don_hang_id;

    // Điều kiện cho phép hủy
    if (newStatusId === 2) { // Trạng thái "Đã hủy"
      if (currentStatusId !== 1) {
        alert("Chỉ có thể hủy đơn hàng khi ở trạng thái mới.");
        return;
      }

      // Yêu cầu nhập lý do hủy
      const reason = prompt("Vui lòng nhập lý do hủy đơn hàng:");
      if (!reason) {
        alert("Lý do hủy không được để trống.");
        return;
      }

      // Đẩy lý do hủy lên request
      fetch(`http://127.0.0.1:8000/api/don-hang/update/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trang_thai_don_hang_id: newStatusId,
          ly_do_huy_don: reason,
          nguoi_huy: "admin_" + adminId,
        }),
      })
        .then((response) => response.json())
        .then(() => {

          alert("Đơn hàng đã được hủy.");
          setOrderDetails((prev) => ({
            ...prev,
            trang_thai_don_hang_id: newStatusId,
            trang_thai_don_hang: getStatusName(newStatusId),
            ly_do_huy_don: reason,
            nguoi_huy: "admin_" + adminId,
          }));
        })
        .catch((error) => {
          console.error("Lỗi khi cập nhật trạng thái:", error);
          alert("Đã xảy ra lỗi khi cập nhật trạng thái.");
        });

      return; // Dừng thực thi tiếp theo nếu đơn hàng đã được hủy
    }

    // Các điều kiện khác cho các trạng thái chuyển tiếp
    const validStatuses = {
      1: [2, 3], // Ví dụ chỉ được chuyển từ 1 sang 2
      2: [3],
      3: [4],
      4: [5],
      5: [6],
      6: [7],
      7: [],
      8: [9],
      9: []
    };

    if (!validStatuses[currentStatusId]?.includes(newStatusId)) {
      alert("Chuyển trạng thái không hợp lệ.");
      return;
    }

    fetch(`http://127.0.0.1:8000/api/don-hang/update/${orderId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trang_thai_don_hang_id: newStatusId }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Trạng thái đã được cập nhật.");
        setOrderDetails((prev) => ({
          ...prev,
          trang_thai_don_hang_id: newStatusId,
          trang_thai_don_hang: getStatusName(newStatusId),
        }));
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật trạng thái:", error);
        alert("Đã xảy ra lỗi khi cập nhật trạng thái.");
      });
  }

  const handleCancelOrder = async (nguoi_huy) => {
    const rolePrefix = nguoi_huy.split('_')[0]; // Tách chuỗi để lấy tiền tố trước dấu "_"
    const id = nguoi_huy.split('_')[1]; // Lấy phần sau dấu "_" làm id

    // Kiểm tra nếu là admin hoặc user và gọi API tương ứng
    let apiUrl = '';
    if (rolePrefix === 'admin') {
      apiUrl = `http://127.0.0.1:8000/api/quan-tri-viens/detail/${id}`; // API cho admin với id
    } else if (rolePrefix === 'user') {
      apiUrl = `http://127.0.0.1:8000/api/khach-hang/profile/${id}`; // API cho user với id
    }

    try {
      // Fetch dữ liệu từ API
      const response = await fetch(apiUrl);
      
      // Kiểm tra phản hồi từ API
      if (!response.ok) {
        console.error('Lỗi phản hồi từ API:', response.statusText);
        return;
      }

      const data = await response.json();
      console.log('Dữ liệu từ API:', data);

      if (rolePrefix === 'admin') {
        setNguoiHuy(`Admin ${data.ho_ten}`); // Nếu là admin
      } else if (rolePrefix === 'user') {
        setNguoiHuy(`Khách hàng ${data.user.ho_ten}`); // Nếu là user
      }
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
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
    fetch(`http://127.0.0.1:8000/api/donhang/order-details/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setOrderDetails(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/admin">Bảng điều khiển</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Chi tiết đơn hàng
          </li>
        </ol>
      </nav>

      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0 mt-3">Đơn hàng</h2>
          </div>
          <div className="col-auto ms-auto mt-3">
            <div className="search-box">
              <form className="position-relative">
                <input
                  className="form-control search-input search"
                  type="search"
                  placeholder="Tìm kiếm đơn hàng"
                  aria-label="Search"
                />
                <span className="fas fa-search search-box-icon" />
              </form>
            </div>
          </div>
        </div>

        {/* Thẻ card chứa thông tin đơn hàng */}
        <div className="card mx-n4 mx-lg-n6 mb-5" style={{ borderRadius: "0" }}>
          <div className="card-header">
            <h3 style={{ fontSize: "20px" }}>Chi tiết đơn hàng</h3>
          </div>
          <div className="card-body" style={{ fontSize: "15px" }}>
            <div className="row">
              <div className="col-md-4">
                <p>
                  <strong>Mã đơn hàng:</strong> #{orderDetails.ma_don_hang}
                </p>
                <p>
                  <strong>Khách hàng:</strong> {orderDetails.ho_ten}
                </p>
                <p>
                  <strong>Phương thức thanh toán:</strong> {orderDetails.ten_phuong_thuc}
                </p>
                <p>
                  <strong>Hình thức vận chuyển:</strong> {orderDetails.ten_van_chuyen}
                </p>
                <p>
                  <strong>Địa chỉ giao hàng:</strong>  {orderDetails.dia_chi_giao_hang}
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <strong>Trạng thái đơn hàng:</strong>
                  <span
                    className={`badge badge-phoenix fs-10 ${getBadgeClass(
                      orderDetails.trang_thai_don_hang_id
                    )}`}
                  >
                    {orderDetails.trang_thai_don_hang}
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

                  <ul className="dropdown-menu">
                    {getFilteredStatusList(orderDetails.trang_thai_don_hang_id).map((status) => (
                      <li key={status.id}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleChangeStatus(orderDetails.id, status.id)}
                        >
                          {status.ten_trang_thai}
                        </button>
                      </li>
                    ))}
                  </ul>

                </p>
                <p>
                  <strong>Mã giảm giá:</strong> #{orderDetails.ma_giam_gia}
                </p>
                <p>
                  <strong>Tổng tiền:</strong> {Number(orderDetails.tong_tien).toLocaleString()} VNĐ
                </p>
                <p>
                  <strong>Giảm giá:</strong>  {orderDetails.discount}%
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <strong>Lý do hủy:</strong>  {orderDetails.ly_do_huy_don}
                </p>
                <p>
                  <strong>Người hủy:</strong>  {nguoiHuy}
                </p>
                <p>
                  <strong>Lý do hoàn hàng:</strong>  {orderDetails.ly_do_hoan_hang}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bảng chi tiết sản phẩm */}
        <div id="orderTable" data-list='{"valueNames":["order","total","customer","payment_status","fulfilment_status","delivery_type","date"],"page":10,"pagination":true}'>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table table-sm fs-9 mb-0">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "7%" }}>STT</th>
                    <th scope="col" style={{ width: "10%" }}>Hình ảnh</th>
                    <th scope="col" style={{ width: "25%" }}>Sản phẩm</th>
                    <th scope="col" style={{ width: "15%" }}>Danh mục</th>
                    <th scope="col" style={{ width: "15%" }}>Số lượng</th>
                    <th scope="col" style={{ width: "15%" }}>Biến thể</th>
                    <th scope="col" style={{ width: "11%" }}>Giá</th>
                    <th scope="col" style={{ width: "5%" }} />
                  </tr>
                </thead>
                <tbody className="list" id="profile-order-table-body">
                  {orderDetails?.chi_tiet_don_hangs.map((item, index) => (
                    <tr key={index} className="hover-actions-trigger btn-reveal-trigger position-static">
                      <td className="order align-middle white-space-nowrap py-2 ps-0">{index + 1}</td>
                      <td className="delivery align-middle white-space-nowrap text-body py-2">
                        <img src={`http://127.0.0.1:8000/storage/${item.san_pham.duong_dan_anh}`} alt={item.san_pham.ten_san_pham} style={{ width: '50px' }} />
                      </td>
                      <td className="status align-middle white-space-nowrap text-start py-2">{item.san_pham.ten_san_pham}</td>
                      <td className="order align-middle white-space-nowrap py-2 ps-1">{item.san_pham.ten_danh_muc}</td>
                      <td className="total align-middle text-body-tertiary text-start py-2">{item.so_luong}</td>
                      <td className="date align-middle fw-semibold text-start py-2 text-body-highlight">
                        {item.thuoc_tinh.map((t, idx) => (
                          <div key={idx}>{t.ten_gia_tri}</div>
                        ))}
                      </td>
                      <td className="order align-middle white-space-nowrap py-2 ps-1">{Number(item.gia).toLocaleString()} VNĐ</td>
                      <td className="order align-middle white-space-nowrap py-2 ps-1"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              <a className="mx-1" href="https://themewagon.com/">Themewagon</a>
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


export default OrderDetails;