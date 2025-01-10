import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactECharts from "echarts-for-react";
const Dashboard = () => {
  const navigate = useNavigate();
  const [thongKe, setThongKe] = useState(null);
  const [thongKeDonHang7Ngay, setThongKeDonHang7Ngay] = useState(null);
  const [thongKeKhachHangMoi7Ngay, setThongKeKhachHangMoi7Ngay] =
    useState(null);
  const [ordersChartOptions, setOrdersChartOptions] = useState(null);
  const [customerChartOptions, setCustomerChartOptions] = useState(null);
  const [productChartOptions, setProductChartOptions] = useState(null);
  const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
  const [month, setMonth] = useState(1); // Mặc định chọn tháng 1

  const [year, setYear] = useState(null); // Year starts as null

  // eslint-disable-next-line no-unused-vars
  const [monthOptions, setMonthOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const [danhGia, setDanhGia] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true); // Thêm trạng thái loading
  const [totalProducts, setTotalProducts] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState(null); // Để lưu trạng thái của đánh giá

  const handleUpdateStatus = async (review, newStatus) => {
    try {
      console.log(newStatus);

      const response = await axios.put(
        `http://127.0.0.1:8000/api/danh-gia/${review.id}`,
        {
          trang_thai: newStatus, // Cập nhật trạng thái mới
        }
      );

      console.log(response);
      setStatus(newStatus); // Cập nhật lại trạng thái trong state
      console.log(response.data.message); // In thông báo phản hồi từ API
      // Cập nhật danh gia local sau khi thay đổi trạng thái
      const updatedDanhGia = danhGia.map((item) =>
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

  // Fetching all data in one request
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchData("http://127.0.0.1:8000/api/thong-ke", setThongKe),
          fetchData(
            "http://127.0.0.1:8000/api/thong-ke-don-hang-7-ngay",
            setThongKeDonHang7Ngay
          ),
          fetchData(
            "http://127.0.0.1:8000/api/thong-ke-khach-hang-moi-7-ngay",
            setThongKeKhachHangMoi7Ngay
          ),
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Update orders chart options based on thongKeDonHang7Ngay
  useEffect(() => {
    if (thongKeDonHang7Ngay) {
      const currentDaysData = thongKeDonHang7Ngay.current_seven_days_data;
      const totalOrders = currentDaysData.map((item) => item.tong_don_hang);

      const newOrdersChartOptions = {
        tooltip: { trigger: "axis" },
        xAxis: {
          type: "category",
          data: currentDaysData.map((item) => item.ngay), // Dates
          axisTick: { alignWithLabel: true },
        },
        yAxis: {
          type: "value",
          min: 0,
          max: Math.max(...totalOrders) + 1,
        },
        series: [
          {
            name: "Tổng đơn hàng",
            type: "bar",
            data: totalOrders,
            itemStyle: { color: "#3485E4" },
          },
        ],
      };
      setOrdersChartOptions(newOrdersChartOptions);
    }
  }, [thongKeDonHang7Ngay]);

  // Update customer chart options based on thongKeKhachHangMoi7Ngay
  useEffect(() => {
    if (thongKeKhachHangMoi7Ngay) {
      const currentCustomersData =
        thongKeKhachHangMoi7Ngay.current_fourteen_days_data;
      const totalCustomers = Object.keys(currentCustomersData).map(
        (date) => currentCustomersData[date].tong_khach_hang
      );

      const newCustomerChartOptions = {
        tooltip: { trigger: "axis" },
        xAxis: {
          type: "category",
          data: Object.keys(currentCustomersData), // Dates
          axisTick: { alignWithLabel: true },
        },
        yAxis: {
          type: "value",
          min: 0,
          max: Math.max(...totalCustomers) + 1,
        },
        series: [
          {
            name: "Tổng khách hàng",
            type: "bar",
            data: totalCustomers,
            itemStyle: { color: "#28a745" },
          },
        ],
      };
      setCustomerChartOptions(newCustomerChartOptions);
    }
  }, [thongKeKhachHangMoi7Ngay]);

  // Lấy các năm có sẵn từ API
  useEffect(() => {
    const fetchAvailableYears = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/thong-ke-san-pham"
        );
        const years = response.data.available_years || [];

        // Cập nhật các năm có sẵn cho option
        setYearOptions(
          years.map((year) => ({ label: `${year}`, value: year }))
        );

        // Đặt năm mặc định là năm hiện tại, nếu năm hiện tại có trong list thì tự động chọn
        if (years.includes(currentYear)) {
          setYear(currentYear); // Chọn năm hiện tại nếu có trong danh sách
        } else {
          setYear(years[0] || currentYear); // Lấy năm đầu tiên có sẵn, hoặc chọn năm hiện tại
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu năm từ API:", error);
        setYearOptions([]);
      }
    };

    fetchAvailableYears();
  }, []);

  // Set mặc định tháng từ tháng 1 khi năm thay đổi
  useEffect(() => {
    if (year) {
      // Lấy 12 tháng cho năm đã chọn
      const months = Array.from({ length: 12 }, (_, i) => ({
        label: `Tháng ${i + 1}`,
        value: i + 1,
      }));
      setMonthOptions(months);
      setMonth(1); // Đặt tháng mặc định là 1 khi năm thay đổi
    }
  }, [year]);

  const handleMonthYearChange = (e) => {
    const value = e.target.value; // Giá trị chọn "YYYY-MM"
    const [selectedYear, selectedMonth] = value.split("-"); // Tách năm và tháng

    setYear(selectedYear); // Lưu năm đã chọn
    setMonth(selectedMonth); // Lưu tháng đã chọn
  };

  // Kiểm tra xem có dữ liệu cho tháng và năm đã chọn
  const checkDataAvailability = async (selectedMonth, selectedYear) => {
    if (!selectedMonth || !selectedYear) return;
    const url = `http://127.0.0.1:8000/api/thong-ke-san-pham?month=${selectedMonth}&year=${selectedYear}`;
    try {
      const response = await axios.get(url);
      if (
        !response.data.current_month?.length &&
        !response.data.previous_month?.length
      ) {
        setErrorMessage("Không có dữ liệu cho tháng và năm đã chọn");
        setProductChartOptions(null);
        return false;
      }
      setErrorMessage(""); // Reset error nếu có dữ liệu
      return response.data;
    } catch (error) {
      console.error("Error fetching chart data:", error);
      setErrorMessage("Lỗi khi tải dữ liệu từ API");
      setProductChartOptions(null);
      return false;
    }
  };

  // Lấy dữ liệu biểu đồ khi thay đổi tháng hoặc năm
  const fetchChartData = async (selectedMonth, selectedYear) => {
    const data = await checkDataAvailability(selectedMonth, selectedYear);
    if (!data) return;

    const chartData = {
      xAxis: [],
      currentMonthData: [],
      previousMonthData: [],
    };

    if (data.current_month) {
      chartData.xAxis = data.current_month.map((item) => item.ngay);
      chartData.currentMonthData = data.current_month.map(
        (item) => parseInt(item.tong_san_pham) || 0
      );
    }

    if (data.previous_month) {
      chartData.previousMonthData = data.previous_month.map(
        (item) => parseInt(item.tong_san_pham) || 0
      );
    }

    setProductChartOptions({
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: chartData.xAxis,
      },
      yAxis: {
        type: "value",
        min: 0,
        max:
          Math.max(
            ...chartData.currentMonthData,
            ...chartData.previousMonthData
          ) + 1,
      },
      series: [
        {
          name: `Tổng số sản phẩm tháng ${selectedMonth} - ${selectedYear}`,
          type: "line",
          data: chartData.currentMonthData,
          itemStyle: { color: "#007bff" },
        },
        {
          name: `Tổng số sản phẩm tháng trước`,
          type: "line",
          data: chartData.previousMonthData,
          itemStyle: { color: "#808080" },
        },
      ],
    });
  };

  // Truyền giá trị chọn tháng và năm để lấy dữ liệu khi chúng thay đổi
  useEffect(() => {
    if (month && year) {
      fetchChartData(month, year);
    }
  }, [month, year]);

  // Lấy dữ liệu đánh giá
  useEffect(() => {
    const fetchDanhGia = async (page) => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/danh-gia?page=${page}`
        );
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

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
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
                      <h4 className="mb-0">
                        {thongKe?.tong_hang_moi} đơn hàng mới
                      </h4>
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
                      <h4 className="mb-0">
                        {thongKe?.tong_don_hang_dang_giu} đơn hàng
                      </h4>
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
                      <h4 className="mb-0">
                        {thongKe?.tong_san_pham_ton_kho_bang_0} sản phẩm
                      </h4>
                      <p className="text-body-secondary fs-9 mb-0">Hết hàng</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-body-secondary mb-6 mt-4" />
              <div className="row flex-between-center mb-4 g-3">
                <div className="col-auto">
                  <h3>Tổng số sản phẩm</h3>
                  <p className="text-body-tertiary lh-sm mb-0">
                    Thanh toán được nhận trên tất cả các kênh
                  </p>
                </div>
                <div className="col-8 col-sm-4">
                  <div className="row">
                    <div className="col-12">
                      <select
                        className="form-select"
                        value={`${year}-${month}`} // Giá trị dạng "YYYY-MM"
                        onChange={handleMonthYearChange}
                      >
                        {yearOptions.length > 0 ? (
                          yearOptions.map((option) => (
                            <optgroup
                              label={`Năm ${option.label}`}
                              key={option.value}
                            >
                              {Array.from({ length: 12 }, (_, i) => (
                                <option
                                  key={`${option.value}-${i + 1}`}
                                  value={`${option.value}-${i + 1}`}
                                >
                                  Tháng {i + 1} / {option.label}
                                </option>
                              ))}
                            </optgroup>
                          ))
                        ) : (
                          <option disabled>Không có dữ liệu năm</option>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {errorMessage ? (
                <div className="alert alert-warning text-center mt-4">
                  {errorMessage}
                </div>
              ) : productChartOptions && month && year ? (
                <div className="d-flex justify-content-center mt-4">
                  <ReactECharts
                    option={productChartOptions}
                    style={{ minHeight: 750, width: "100%" }}
                  />
                </div>
              ) : null}
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
                              <span className="badge-label">
                                {thongKeDonHang7Ngay?.ti_le_chenh_lech % 1 === 0
                                  ? `${thongKeDonHang7Ngay?.ti_le_chenh_lech.toFixed(
                                    0
                                  )}%`
                                  : `${thongKeDonHang7Ngay?.ti_le_chenh_lech.toFixed(
                                    1
                                  )}%`}
                              </span>
                            </span>
                          </h5>
                          <h6 className="text-body-tertiary">7 ngày qua</h6>
                        </div>
                        <h4>{thongKeDonHang7Ngay?.tong_don_hang}</h4>
                      </div>
                      <div className="d-flex justify-content-center px-4 py-6">
                        {ordersChartOptions ? (
                          <ReactECharts
                            option={ordersChartOptions}
                            style={{ height: 350, width: "100%" }}
                          />
                        ) : (
                          <div>Loading...</div>
                        )}
                      </div>
                      <div className="mt-2">
                        <div className="d-flex align-items-center mb-2">
                          <div className="bullet-item bg-primary me-2" />
                          <h6 className="text-body fw-semibold flex-1 mb-0">
                            Hoàn thành
                          </h6>
                          <h6 className="text-body fw-semibold mb-0">
                            {thongKeDonHang7Ngay?.ti_le_hoan_thanh % 1 === 0
                              ? `${thongKeDonHang7Ngay?.ti_le_hoan_thanh.toFixed(
                                0
                              )}%`
                              : `${thongKeDonHang7Ngay?.ti_le_hoan_thanh.toFixed(
                                1
                              )}%`}
                          </h6>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="bullet-item bg-primary-subtle me-2" />
                          <h6 className="text-body fw-semibold flex-1 mb-0">
                            Chưa hoàn thành
                          </h6>
                          <h6 className="text-body fw-semibold mb-0">
                            {thongKeDonHang7Ngay?.ti_le_chua_hoan_thanh % 1 ===
                              0
                              ? `${thongKeDonHang7Ngay?.ti_le_chua_hoan_thanh.toFixed(
                                0
                              )}%`
                              : `${thongKeDonHang7Ngay?.ti_le_chua_hoan_thanh.toFixed(
                                1
                              )}%`}
                          </h6>
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
                              <span className="badge-label">
                                {thongKeKhachHangMoi7Ngay?.ti_le_chenh_lech %
                                  1 ===
                                  0
                                  ? `${thongKeKhachHangMoi7Ngay?.ti_le_chenh_lech.toFixed(
                                    0
                                  )}%`
                                  : `${thongKeKhachHangMoi7Ngay?.ti_le_chenh_lech.toFixed(
                                    1
                                  )}%`}
                              </span>
                            </span>
                          </h5>
                          <h6 className="text-body-tertiary">7 ngày qua</h6>
                        </div>
                        <h4>{thongKeKhachHangMoi7Ngay?.tong_khach_hang}</h4>
                      </div>
                      <div className="d-flex justify-content-center px-4 py-6">
                        {customerChartOptions ? (
                          <ReactECharts
                            option={customerChartOptions}
                            style={{ height: 300, width: "100%" }}
                          />
                        ) : (
                          <div>Loading...</div>
                        )}
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
                    <th
                      className="white-space-nowrap align-middle ps-0"
                      scope="col"
                      style={{ width: "5%" }}
                    >
                      STT
                    </th>
                    <th
                      className="white-space-nowrap align-middle ps-0"
                      scope="col"
                      style={{ width: "8%" }}
                    >
                      HÌNH ẢNH
                    </th>
                    <th
                      className="white-space-nowrap align-middle ps-0"
                      scope="col"
                      style={{ width: "20%" }}
                      data-sort="product"
                    >
                      SẢN PHẨM
                    </th>
                    <th
                      className="align-middle ps-0"
                      scope="col"
                      data-sort="customer"
                      style={{ width: "12%" }}
                    >
                      KHÁCH HÀNG
                    </th>
                    <th
                      className="align-middle ps-0"
                      scope="col"
                      data-sort="rating"
                      style={{ width: "8%" }}
                    >
                      ĐÁNH GIÁ
                    </th>
                    <th
                      className="align-middle"
                      scope="col"
                      data-sort="review"
                      style={{ width: "25%" }}
                    >
                      NHẬN XÉT
                    </th>
                    <th
                      className="align-middle ps-0"
                      scope="col"
                      data-sort="status"
                      style={{ width: "10%" }}
                    >
                      TRẠNG THÁI
                    </th>
                    <th
                      className="align-middle ps-0"
                      scope="col"
                      data-sort="time"
                      style={{ width: "11%" }}
                    >
                      THỜI GIAN
                    </th>
                    <th
                      className="pe-0 align-middle text-center"
                      scope="col"
                      style={{ width: "5%" }}
                    >
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>

                <tbody className="list" id="table-latest-review-body">
                  {Array.isArray(danhGia) && danhGia.length > 0 ? (
                    danhGia.map((review, index) => (
                      <tr key={review.id}>
                        <td>{index + 1}</td>
                        <td className="align-middle product white-space-nowrap py-0 ps-0">
                          <img
                            src={`http://127.0.0.1:8000/storage/${review.san_pham.duong_dan_anh}`}
                            width={50}
                            alt="product"
                          />
                        </td>
                        <td className="align-middle product white-space-nowrap ps-0">
                          {review.san_pham.ten_san_pham}
                        </td>
                        <td className="align-middle customer white-space-nowrap ps-0">
                          {review.khach_hang.ho_ten}
                        </td>
                        <td className="align-middle rating white-space-nowrap fs-10 ps-0">
                          {Array.from({ length: review.danh_gia }).map(
                            (_, idx) => (
                              <span
                                key={idx}
                                className="fa fa-star text-warning"
                              />
                            )
                          )}
                        </td>
                        <td>
                          <p className="fs-9 fw-semibold text-body-highlight mb-0">
                            {review.binh_luan}

                            <br />
                            <div>
                              {Array.isArray(review.chi_tiet_danh_gias) &&
                                review.chi_tiet_danh_gias.map((detail) => (
                                  <img
                                    key={detail.id}
                                    src={`http://127.0.0.1:8000/storage/${detail.hinh_anh_duong_dan}`}
                                    alt="Chi tiết đánh giá"
                                    width={50}
                                    className="me-2 mt-1"
                                  />
                                ))}
                            </div>
                          </p>
                        </td>
                        <td className="align-middle text-start status ps-0">
                          {review.trang_thai === 1 ? (
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              Đã duyệt
                            </span>
                          ) : review.trang_thai === 0 ? (
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              Chưa duyệt
                            </span>
                          ) : review.trang_thai === 2 ? (
                            <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                              Đã hủy
                            </span>
                          ) : null}
                        </td>
                        <td className="align-middle time white-space-nowrap">
                          <h6 className="text-body-highlight mb-0">
                            {new Date(review.created_at).toLocaleString()}
                          </h6>
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center">
                        Không có dữ liệu đánh giá
                      </td>
                    </tr>
                  )}
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
