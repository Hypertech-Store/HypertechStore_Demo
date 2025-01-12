import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
const OrderDetails = () => {
  document.title = "Hypertech Store - Chi tiết đơn hàng ";
  // Lấy orderId từ URL
  const { orderId } = useParams();
  const navigate = useNavigate();
  // State để lưu dữ liệu đơn hàng
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const breadcrumbTitles = {
    "chi-tiet-don-hang": "Chi tiết đơn hàng", // URL chính, không có "/"
  };

  // Tách ra tên của các phần đường dẫn, không bao gồm id (phần cuối cùng là id đơn hàng)
  const currentTitle =
    breadcrumbTitles[pathnames[0]] ||
    pathnames[pathnames.length - 1]?.toUpperCase();

  useEffect(() => {
    // Gửi request API đến endpoint chi tiết đơn hàng
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/donhang/order-details/${orderId}`
        );

        // Nếu không có đơn hàng
        if (!response.ok) {
          throw new Error("Không tìm thấy đơn hàng");
        }

        const data = await response.json();
        setOrderData(data.data); // Lưu dữ liệu vào state
        console.log(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  // Hiển thị loading khi chưa có dữ liệu
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh", // Toàn màn hình
          backgroundColor: "#f9f9f9", // Nền
        }}
      >
        <FadeLoader speedMultiplier={0.8} color="#36d7b7" />
      </div>
    );
  }

  // Hiển thị thông báo lỗi nếu có
  if (error) return <div>{error}</div>;

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
                #{orderData.ma_don_hang}
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

          <div className="px-0 mt-5">
            <div className="table-responsive scrollbar">
              <table className="table fs-9 text-body mb-0">
                <thead className="bg-body-secondary">
                  <tr>
                    <th scope="col" />
                    <th scope="col" style={{ width: "7%" }}>
                      STT
                    </th>
                    <th scope="col" style={{ width: "10%" }}>
                      Hình ảnh
                    </th>
                    <th scope="col" style={{ width: "25%" }}>
                      Sản phẩm
                    </th>{" "}
                    {/* Larger width for 'Sản phẩm' */}
                    <th scope="col" style={{ width: "15%" }}>
                      Danh mục
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Số lượng
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Biến thể
                    </th>
                    <th scope="col" className="" style={{ width: "11%" }}>
                      Giá
                    </th>
                    <th scope="col" style={{ width: "5%" }} />
                  </tr>
                </thead>
                <tbody>
                  {/* Duyệt qua mảng sản phẩm trong chi tiết đơn hàng để hiển thị */}
                  {orderData?.chi_tiet_don_hangs?.map((item, index) => (
                    <tr key={item.id}>
                      <td className="border-0" />
                      <td className="align-middle">{index + 1}</td>
                      <td className="align-middle">
                        {/* Hiển thị ảnh sản phẩm nếu có, nếu không có thì dùng ảnh mặc định */}
                        <img
                          src={`http://127.0.0.1:8000/storage/${item.san_pham.duong_dan_anh}`} // Hình ảnh từ API
                          alt={item.san_pham.ten_san_pham}
                          className="img-fluid"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td className="align-middle">
                        <p className="line-clamp-1 mb-0 fw-semibold">
                          {item.san_pham.ten_san_pham}
                        </p>
                      </td>
                      <td className="align-middle">
                        <p className="line-clamp-1 mb-0 fw-semibold">
                          {item.san_pham.ten_danh_muc}
                        </p>
                      </td>
                      <td className="align-middle text-body-tertiary fw-semibold">
                        {item.so_luong}
                      </td>
                      <td className="align-middle text-body-tertiary fw-semibold">
                        {/* Hiển thị biến thể sản phẩm (nếu có) */}
                        {item.thuoc_tinh?.map((attr, idx) => (
                          <span key={idx}>{attr.ten_gia_tri} </span>
                        ))}
                      </td>

                      {/* Không có giảm giá trong data bạn cung cấp */}
                      <td className="align-middle text-body-highlight fw-semibold">
                        {parseFloat(item.gia).toLocaleString()} VNĐ
                      </td>
                      <td className="border-0" />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </>
  );
};
export default OrderDetails;
