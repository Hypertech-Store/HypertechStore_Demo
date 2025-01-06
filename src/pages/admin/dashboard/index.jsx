import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [thongKe, setThongKe] = useState(null);
  const [thongKeDonHang7Ngay, setThongKeDonHang7Ngay] = useState(null);
  const [thongKeKhachHangMoi7Ngay, setThongKeKhachHangMoi7Ngay] = useState(null);
  const [danhGia, setDanhGia] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true); // Thêm trạng thái loading
  const [totalProducts, setTotalProducts] = useState(0);
  const [status, setStatus] = useState(null); // Để lưu trạng thái của đánh giá

  const handleUpdateStatus = async (review, newStatus) => {
    try {
      console.log(newStatus);

      const response = await axios.put(`http://127.0.0.1:8000/api/danh-gia/${review.id}`, {
        trang_thai: newStatus, // Cập nhật trạng thái mới
      });

      console.log(response);
      setStatus(newStatus); // Cập nhật lại trạng thái trong state
      console.log(response.data.message); // In thông báo phản hồi từ API
      // Cập nhật danh gia local sau khi thay đổi trạng thái
      const updatedDanhGia = danhGia.map(item =>
        item.id === review.id ? { ...item, trang_thai: newStatus } : item
      );

      setDanhGia(updatedDanhGia);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    const adminId = localStorage.getItem("adminId");
    if (adminId === null) {
      console.log("User is not logged in.");
      navigate("/login");
    } else {
      navigate("/admin");
    }
  }, [navigate]);

  // Hàm gọi API chung
  const fetchData = async (url, setState) => {
    try {
      const response = await axios.get(url);
      setState(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Lấy dữ liệu thống kê
  useEffect(() => {
    setLoading(true); // Khi bắt đầu gọi API, set loading = true
    fetchData("http://127.0.0.1:8000/api/thong-ke", setThongKe);
    fetchData("http://127.0.0.1:8000/api/thong-ke-don-hang-7-ngay", setThongKeDonHang7Ngay);
    fetchData("http://127.0.0.1:8000/api/thong-ke-khach-hang-moi-7-ngay", setThongKeKhachHangMoi7Ngay);
  }, []);

  // Lấy dữ liệu đánh giá
  useEffect(() => {
    const fetchDanhGia = async (page) => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/danh-gia?page=${page}`);
        const { data, current_page, last_page } = response.data.data;

        setDanhGia(data);
        setCurrentPage(current_page);
        setLastPage(last_page);
        setTotalProducts(response.data.data.total);
        
        setLoading(false); // Khi hoàn thành gọi API, set loading = false
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchDanhGia(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalProducts / 10);
  

  // Xử lý thay đổi trang
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= lastPage) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Hiển thị loading khi đang tải dữ liệu
  }

  return (
    <>
      <div className="content">
        <div className="pb-5">
          <div className="row g-4">
            <div className="col-12 col-xxl-6">
              <div className="mb-8">
                <h2 className="mb-2">Thống kê sản phẩm</h2>
                <h5 className="text-body-tertiary fw-semibold">
                  Đây là những gì đang diễn ra tại doanh nghiệp của bạn ngay bây
                  giờ
                </h5>
              </div>
              <div className="row align-items-center g-4">
                <div className="col-12 col-md-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="fa-stack"
                      style={{ minHeight: 46, minWidth: 46 }}
                    >
                      <span
                        className="fa-solid fa-square fa-stack-2x dark__text-opacity-50 text-success-light"
                        data-fa-transform="down-4 rotate--10 left-4"
                      />
                      <span
                        className="fa-solid fa-circle fa-stack-2x stack-circle text-stats-circle-success"
                        data-fa-transform="up-4 right-3 grow-2"
                      />
                      <span
                        className="fa-stack-1x fa-solid fa-star text-success "
                        data-fa-transform="shrink-2 up-8 right-6"
                      />
                    </span>
                    <div className="ms-3">
                      <h4 className="mb-0">{thongKe?.tong_hang_moi} đơn hàng mới</h4>
                      <p className="text-body-secondary fs-9 mb-0">
                        Đang chờ xử lý
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="fa-stack"
                      style={{ minHeight: 46, minWidth: 46 }}
                    >
                      <span
                        className="fa-solid fa-square fa-stack-2x dark__text-opacity-50 text-warning-light"
                        data-fa-transform="down-4 rotate--10 left-4"
                      />
                      <span
                        className="fa-solid fa-circle fa-stack-2x stack-circle text-stats-circle-warning"
                        data-fa-transform="up-4 right-3 grow-2"
                      />
                      <span
                        className="fa-stack-1x fa-solid fa-pause text-warning "
                        data-fa-transform="shrink-2 up-8 right-6"
                      />
                    </span>
                    <div className="ms-3">
                      <h4 className="mb-0">{thongKe?.tong_don_hang_dang_giu} đơn hàng</h4>
                      <p className="text-body-secondary fs-9 mb-0">Đang giữ</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-auto">
                  <div className="d-flex align-items-center">
                    <span
                      className="fa-stack"
                      style={{ minHeight: 46, minWidth: 46 }}
                    >
                      <span
                        className="fa-solid fa-square fa-stack-2x dark__text-opacity-50 text-danger-light"
                        data-fa-transform="down-4 rotate--10 left-4"
                      />
                      <span
                        className="fa-solid fa-circle fa-stack-2x stack-circle text-stats-circle-danger"
                        data-fa-transform="up-4 right-3 grow-2"
                      />
                      <span
                        className="fa-stack-1x fa-solid fa-xmark text-danger "
                        data-fa-transform="shrink-2 up-8 right-6"
                      />
                    </span>
                    <div className="ms-3">
                      <h4 className="mb-0">{thongKe?.tong_san_pham_ton_kho_bang_0} sản phẩm</h4>
                      <p className="text-body-secondary fs-9 mb-0">Hết hàng</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-body-secondary mb-6 mt-4" />
              <div className="row flex-between-center mb-4 g-3">
                <div className="col-auto">
                  <h3>Tổng số đơn hàng</h3>
                  <p className="text-body-tertiary lh-sm mb-0">
                    Thanh toán được nhận trên tất cả các kênh
                  </p>
                </div>
                <div className="col-8 col-sm-4">
                  <select
                    className="form-select form-select-sm"
                    id="select-gross-revenue-month"
                  >
                    <option>Mar 1 - 31, 2022</option>
                    <option>April 1 - 30, 2022</option>
                    <option>May 1 - 31, 2022</option>
                  </select>
                </div>
              </div>
              <div
                className="echart-total-sales-chart"
                style={{ minHeight: 320, width: "100%" }}
              />
            </div>
            <div className="col-12 col-xxl-6">
              <div className="row g-3">
                <div className="col-12 col-md-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1">
                            Tổng số đơn hàng
                            <span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs-9 ms-2">
                              <span className="badge-label">{(thongKeDonHang7Ngay?.ti_le_chenh_lech)?.toFixed(1)}%</span>
                            </span>
                          </h5>
                          <h6 className="text-body-tertiary">7 ngày qua</h6>
                        </div>
                        <h4>{thongKeDonHang7Ngay?.tong_don_hang}</h4>
                      </div>
                      <div className="d-flex justify-content-center px-4 py-6">
                        <div
                          className="echart-total-orders"
                          style={{ height: 85, width: 115 }}
                        />
                      </div>
                      <div className="mt-2">
                        <div className="d-flex align-items-center mb-2">
                          <div className="bullet-item bg-primary me-2" />
                          <h6 className="text-body fw-semibold flex-1 mb-0">
                            Hoàn thành
                          </h6>
                          <h6 className="text-body fw-semibold mb-0">{(thongKeDonHang7Ngay?.ti_le_hoan_thanh)?.toFixed(1)}%</h6>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="bullet-item bg-primary-subtle me-2" />
                          <h6 className="text-body fw-semibold flex-1 mb-0">
                            Chưa hoàn thành
                          </h6>
                          <h6 className="text-body fw-semibold mb-0">{(thongKeDonHang7Ngay?.ti_le_chua_hoan_thanh)?.toFixed(1)}%</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1">
                            Khách hàng mới
                            <span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs-9 ms-2">
                              {""}
                              <span className="badge-label">{(thongKeKhachHangMoi7Ngay?.ti_le_chenh_lech)?.toFixed(1)}%</span>
                            </span>
                          </h5>
                          <h6 className="text-body-tertiary">7 ngày qua</h6>
                        </div>
                        <h4>{(thongKeKhachHangMoi7Ngay?.tong_khach_hang)}</h4>
                      </div>
                      <div className="pb-0 pt-4">
                        <div
                          className="echarts-new-customers"
                          style={{ height: 180, width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-7 border-y">
          <div data-list='{"valueNames":["product","customer","rating","review","time"],"page":6}'>
            <div className="row align-items-end justify-content-between pb-5 g-3">
              <div className="col-auto">
                <h3>Đánh giá mới nhất</h3>
                <p className="text-body-tertiary lh-sm mb-0">
                  Thanh toán được nhận trên tất cả các kênh
                </p>
              </div>
              <div className="col-12 col-md-auto">
                <div className="row g-2 gy-3">
                  <div className="col-auto flex-1">
                    <div className="search-box">
                      <form className="position-relative">
                        <input
                          className="form-control search-input search form-control-sm"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <span className="fas fa-search search-box-icon" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive mx-n1 px-1 scrollbar">
              <table className="table fs-9 mb-0 border-top border-translucent">
                <thead>
                  <tr>
                    <th className="white-space-nowrap fs-9 ps-0 align-middle">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          id="checkbox-bulk-reviews-select"
                          type="checkbox"
                          data-bulk-select='{"body":"table-latest-review-body"}'
                        />
                      </div>
                    </th>
                    <th
                      className="sort white-space-nowrap align-middle"
                      scope="col"
                    />
                    <th
                      className="sort white-space-nowrap align-middle"
                      scope="col"
                      style={{ minWidth: 360 }}
                      data-sort="product"
                    >
                      SẢN PHẨM
                    </th>
                    <th
                      className="sort align-middle"
                      scope="col"
                      data-sort="customer"
                      style={{ minWidth: 200 }}
                    >
                      KHÁCH HÀNG
                    </th>
                    <th
                      className="sort align-middle"
                      scope="col"
                      data-sort="rating"
                      style={{ minWidth: 110 }}
                    >
                      ĐÁNH GIÁ
                    </th>
                    <th
                      className="sort align-middle"
                      scope="col"
                      style={{ maxWidth: 350 }}
                      data-sort="review"
                    >
                      NHẬN XÉT
                    </th>
                    <th
                      className="sort text-start ps-5 align-middle"
                      scope="col"
                      data-sort="status"
                    >
                      TRẠNG THÁI
                    </th>
                    <th
                      className="sort text-end align-middle"
                      scope="col"
                      data-sort="time"
                    >
                      THỜI GIAN
                    </th>
                    <th
                      className="sort text-end pe-0 align-middle"
                      scope="col"
                    />
                  </tr>
                </thead>
                <tbody className="list" id="table-latest-review-body">
                  {danhGia.map((review, index) => (
                    <tr key={review.id}>
                      <td>{index + 1}</td>
                      <td className="align-middle product white-space-nowrap py-0">
                        <img
                          src={`http://127.0.0.1:8000/storage/${review.san_pham.duong_dan_anh}`}
                          width={50}
                        />
                      </td>
                      <td className="align-middle product white-space-nowrap">
                        {review.san_pham.ten_san_pham}
                      </td>
                      <td className="align-middle customer white-space-nowrap">
                        <img src={`http://127.0.0.1:8000/storage/${review.khach_hang.hinh_anh}`} width={50} />
                        {review.khach_hang.ho_ten}
                      </td>
                      <td className="align-middle rating white-space-nowrap fs-10">
                        {Array.from({ length: review.danh_gia }).map((_, idx) => (
                          <span key={idx} className="fa fa-star text-warning" />
                        ))}</td>
                      <td><p className="fs-9 fw-semibold text-body-highlight mb-0">{review.binh_luan}</p></td>
                      <td className="align-middle text-start ps-5 status">
                        {review.trang_thai === 1 ? (
                          <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                            Đã duyệt
                            <span
                              className="ms-1"
                              data-feather="check"
                              style={{ height: "12.8px", width: "12.8px" }}
                            />
                          </span>
                        ) : review.trang_thai === 0 ? (
                          <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                            <span className="badge-label">Chưa duyệt</span>
                            <span
                              className="ms-1"
                              data-feather="clock"
                              style={{ height: "12.8px", width: "12.8px" }}
                            />
                          </span>
                        ) : review.trang_thai === 2 ? (
                          <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                            Đã hủy
                            <span
                              className="ms-1"
                              data-feather="x"
                              style={{ height: "12.8px", width: "12.8px" }}
                            />
                          </span>
                        ) : null}

                      </td>
                      <td className="align-middle text-end time white-space-nowrap">
                        <div className="hover-hide">
                          <h6 className="text-body-highlight mb-0">
                            {new Date(review.created_at).toLocaleString()}
                          </h6>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0">
                        <div>
                          <button
                            className="btn btn-sm btn-phoenix-secondary me-1 fs-10"
                            onClick={() => handleUpdateStatus(review, 1)}
                          >
                            <span className="fas fa-check" />
                          </button>
                          <button
                            className="btn btn-sm btn-phoenix-secondary fs-10"
                            onClick={() => handleUpdateStatus(review, 2)}
                          >
                            <span className="fas fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                {/* Hiển thị số trang */}
                <div className="col-auto d-flex">
                  <p className="mb-0 me-3 fw-semibold text-body">
                    Trang {currentPage} / {totalPages}
                  </p>
                </div>

                {/* Điều hướng phân trang */}
                <div className="col-auto d-flex">
                  {/* Nút Previous */}
                  <button
                    className="page-link"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <span className="fas fa-chevron-left" />
                  </button>

                  {/* Danh sách các trang */}
                  <ul className="pagination mb-0">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        key={index}
                        className={`page-item ${currentPage === index + 1 ? "active" : ""
                          }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => goToPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {/* Nút Next */}
                  <button
                    className="page-link pe-0"
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

        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-6 pb-9 border-top">
          <div className="row g-6">
            <div className="col-12 col-xl-12">
              <div>
                <h3>Tỷ lệ khách hàng quay lại</h3>
                <p className="mb-1 text-body-tertiary">
                  Tỷ lệ khách hàng quay lại cửa hàng của bạn theo thời gian
                </p>
              </div>
              <div
                className="echart-returning-customer"
                style={{ height: 300 }}
              />
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
    </>
  );
};
export default Dashboard;
