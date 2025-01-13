import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Deals = () => {
  const [vouchers, setVouchers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [vouchersPerPage, setVouchersPerPage] = useState(10);

  const [voucherData, setVoucherData] = useState({
    ma_giam_gia: "",
    gia_tri_giam_gia: "",
    gia_tri_don_hang_toi_thieu: "",
    so_luot_su_dung: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    mo_ta: "",
    loai_giam_gia: "Giảm theo phần trăm",
  });

  const breadcrumbTitles = {
    "admin/khuyen-mai": "Danh sách voucher", // Đây là URL không có "/"
  };
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  useEffect(() => {
    // Fetch data for the current page
    axios
      .get(
        `http://127.0.0.1:8000/api/phieu-giam-gia/?page=${currentPage}&limit=${vouchersPerPage}`
      )
      .then((response) => {
        // Xử lý danh sách voucher
        const updatedVouchers = response.data.data.map((voucher) => {
          // Nếu so_luot_su_dung = 0, đặt trang_thai = 0
          if (voucher.so_luot_su_dung === 0) {
            voucher.trang_thai = 0; // Tắt trạng thái
          }
          return voucher;
        });

        setVouchers(updatedVouchers); // Cập nhật voucher sau khi kiểm tra
        setTotalPages(response.data.last_page);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage, vouchersPerPage]); // Thêm dependencies cần thiết

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoucherData({
      ...voucherData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra nếu so_luot_su_dung = 0, thì trang_thai sẽ bị tắt.
    const updatedVoucherData = {
      ...voucherData,
      trang_thai: voucherData.so_luot_su_dung === "0" ? 0 : 1, // Kiểm tra nếu so_luot_su_dung = 0 thì trang_thai là 0
    };

    // Gửi yêu cầu POST tới API để tạo mới phiếu giảm giá
    fetch("http://127.0.0.1:8000/api/phieu-giam-gia/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedVoucherData), // Gửi dữ liệu phiếu giảm giá đã thay đổi
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        // Thêm phiếu giảm giá vào danh sách hiện tại (setVouchers)
        setVouchers((prevVouchers) => [...prevVouchers, data.data]);

        // Reset dữ liệu form
        setVoucherData({
          ma_giam_gia: "",
          gia_tri_giam_gia: "",
          gia_tri_don_hang_toi_thieu: "",
          so_luot_su_dung: "",
          ngay_bat_dau: "",
          ngay_ket_thuc: "",
          mo_ta: "",
          loai_giam_gia: "Giảm theo phần trăm",
        });

        // Thông báo thành công
        alert("Thêm voucher thành công");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleToggleStatus = async (
    phieuGiamGiaId,
    newStatus,
    soLuotSuDung
  ) => {
    try {
      // Nếu số lượt sử dụng bằng 0, trạng thái sẽ tự động tắt
      if (soLuotSuDung === 0) {
        newStatus = false; // Đặt trạng thái thành tắt nếu số lượt sử dụng = 0
      }

      // Gửi yêu cầu PUT tới API để cập nhật trạng thái của phiếu giảm giá
      const response = await axios.put(
        `http://127.0.0.1:8000/api/phieu-giam-gia/update/${phieuGiamGiaId}`,
        {
          trang_thai: newStatus ? 1 : 0, // Chuyển đổi trạng thái true/false thành 1/0
        }
      );

      // Kiểm tra nếu cập nhật thành công
      if (response.data.success) {
        // Cập nhật danh sách phiếu giảm giá
        setVouchers((prevVouchers) => {
          return prevVouchers.map((voucher) =>
            voucher.id === phieuGiamGiaId
              ? { ...voucher, trang_thai: newStatus ? 1 : 0 }
              : voucher
          );
        });

        // Hiển thị thông báo thành công
        alert("Cập nhật trạng thái phiếu giảm giá thành công.");
      } else {
        // Nếu có lỗi gì đó trong quá trình xử lý
        alert("Cập nhật trạng thái phiếu giảm giá thất bại.");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      alert("Đã xảy ra lỗi khi cập nhật trạng thái.");
    }
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
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Danh sách voucher</h2>
          </div>
        </div>

        <div
          id="products"
          data-list='{"valueNames":["product","price","category","tags","vendor","time"],"page":10,"pagination":true}'
        >
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-3">
              <div className="search-box">
                <form className="position-relative">
                  <input
                    className="form-control search-input search"
                    type="search"
                    placeholder="Tìm kiếm voucher"
                    aria-label="Search"
                  />
                  <span className="fas fa-search search-box-icon" />
                </form>
              </div>

              <div className="ms-xxl-auto ms-auto">
                <button
                  className="btn btn-primary"
                  id="addBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#addVoucher"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Thêm mã
                </button>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table fs-9 mb-0">
                <thead>
                  <tr>
                    <th
                      className="white-space-nowrap fs-9 align-middle"
                      scope="col"
                      style={{ width: "5%" }}
                    >
                      STT
                    </th>
                    <th
                      className="white-space-nowrap align-middle"
                      scope="col"
                      style={{ width: "12%" }}
                    >
                      MÃ GIẢM GIÁ
                    </th>
                    <th
                      className="white-space-nowrap align-middle"
                      scope="col"
                      style={{ width: "12%" }}
                    >
                      LOẠI GIẢM GIÁ
                    </th>
                    <th
                      className="white-space-nowrap align-middle"
                      scope="col"
                      style={{ width: "12%" }}
                    >
                      GIÁ TRỊ GIẢM GIÁ
                    </th>
                    <th
                      className="white-space-nowrap align-middle"
                      scope="col"
                      style={{ width: "12%" }}
                    >
                      SỐ LƯỢT SỬ DỤNG
                    </th>
                    <th
                      className="white-space-nowrap align-middle"
                      scope="col"
                      style={{ width: "15%" }}
                    >
                      GIÁ TRỊ ĐƠN TỐI THIỂU
                    </th>
                    <th
                      className="white-space-nowrap align-middle"
                      scope="col"
                      style={{ width: "15%" }}
                    >
                      MÔ TẢ
                    </th>
                    <th
                      className="white-space-nowrap align-middle"
                      scope="col"
                      style={{ width: "5%" }}
                    >
                      TRẠNG THÁI
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {vouchers.length > 0 ? (
                    vouchers.map((voucher, index) => {
                      return (
                        <tr key={voucher.id}>
                          <td className="align-middle ps-3">
                            {(currentPage - 1) * 10 + index + 1}
                          </td>
                          <td className="align-middle">
                            {voucher.ma_giam_gia}
                          </td>
                          <td className="align-middle">
                            {voucher.loai_giam_gia}
                          </td>
                          <td className="align-middle">
                            {parseFloat(
                              voucher.gia_tri_giam_gia
                            ).toLocaleString("vi-VN")}
                            %
                          </td>
                          <td className="align-middle">
                            {voucher.so_luot_su_dung}
                          </td>
                          <td className="align-middle">
                            {parseFloat(
                              voucher.gia_tri_don_hang_toi_thieu
                            ).toLocaleString("vi-VN")}{" "}
                            VNĐ
                          </td>
                          <td className="align-middle">{voucher.mo_ta}</td>
                          <td className="align-middle white-space-nowrap ps-5">
                            <input
                              className="form-check-status ms-0 me-2"
                              type="checkbox"
                              id={`phieuGiamGia_${voucher.id}`}
                              checked={voucher.trang_thai === 1}
                              onChange={
                                (e) =>
                                  handleToggleStatus(
                                    voucher.id,
                                    e.target.checked,
                                    voucher.so_luot_su_dung
                                  ) // Truyền thêm số lượt sử dụng
                              }
                            />
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">
                        Không có dữ liệu
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
              {/* Hiển thị số trang */}
              <div className="col-auto d-flex">
                <p className="mb-0 me-3 fw-semibold text-body">
                  Trang {currentPage} / {totalPages}
                </p>
              </div>

              {/* Phần nút phân trang */}
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
                      key={index + 1}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
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

      <div
        className="modal fade"
        id="addVoucher"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addVoucher"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Thêm Voucher</h3>
              <button
                className="btn btn-sm btn-phoenix-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="fas fa-times text-danger" />
              </button>
            </div>
            <div className="modal-body px-0 mt-1">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Loại giảm giá
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="loai_giam_gia"
                      value={voucherData.loai_giam_gia} // Use discountType state for value
                      readOnly // Prevent editing
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Giá trị giảm giá (%)
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Nhập giá trị phần trăm giảm giá"
                      name="gia_tri_giam_gia"
                      min="1"
                      max="100"
                      value={voucherData.gia_tri_giam_gia}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Giá trị đơn hàng tối thiểu
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Nhập giá trị đơn hàng tối thiểu"
                      name="gia_tri_don_hang_toi_thieu"
                      value={voucherData.gia_tri_don_hang_toi_thieu}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Số lượt sử dụng
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Nhập số lượt sử dụng"
                      name="so_luot_su_dung"
                      min="1"
                      value={voucherData.so_luot_su_dung}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Ngày bắt đầu
                    </label>
                    <input
                      className="form-control"
                      type="datetime-local"
                      name="ngay_bat_dau"
                      value={voucherData.ngay_bat_dau}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Ngày kết thúc
                    </label>
                    <input
                      className="form-control"
                      type="datetime-local"
                      name="ngay_ket_thuc"
                      value={voucherData.ngay_ket_thuc}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Mô tả
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Nhập mô tả về voucher"
                      rows="3"
                      name="mo_ta"
                      value={voucherData.mo_ta}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 pt-0 px-0 pb-0">
              <button
                className="btn btn-link text-danger px-3 my-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Hủy bỏ
              </button>
              <button className="btn btn-primary my-0" onClick={handleSubmit}>
                Thêm Voucher
              </button>
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
export default Deals;
