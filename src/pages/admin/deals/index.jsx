import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Deals = () => {
  const [vouchers, setVouchers] = useState([]); // State lưu dữ liệu vouchers
  const [voucherData, setVoucherData] = useState({
    ma_giam_gia: "",
    gia_tri_giam_gia: "",
    gia_tri_don_hang_toi_thieu: "",
    so_luot_su_dung: "",
    ngay_bat_dau: "",
    ngay_ket_thuc: "",
    mo_ta: "",
    loai_giam_gia: "Giảm theo phần trăm", // default value
  });
  const breadcrumbTitles = {
    "admin/khuyen-mai": "Discount code", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  useEffect(() => {
    // Lấy dữ liệu từ API khi component được render
    axios
      .get("http://localhost:8000/api/phieu-giam-gia/")
      .then((response) => {
        setVouchers(response.data.data.data); // Gán dữ liệu vào state
        console.log(response.data.data.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoucherData({
      ...voucherData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the POST request to the API
    fetch("http://localhost:8000/api/phieu-giam-gia/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(voucherData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        // Assuming the response contains the created voucher data
        // Add the new voucher to the existing vouchers state
        setVouchers((prevVouchers) => [...prevVouchers, data.data]);

        // Optionally reset the form
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            <h2 className="mb-0">List voucher</h2>
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
                    placeholder="Search products"
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
                    ></th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {vouchers.length > 0 ? (
                    vouchers.map((voucher, index) => {
                      return (
                        <tr key={voucher.id}>
                          <td className="align-middle ps-3">{index + 1}</td>
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
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
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
                                <a className="dropdown-item" href="#view">
                                  Chi tiết
                                </a>
                                <a className="dropdown-item" href="#edit">
                                  Chỉnh sửa
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="#delete"
                                >
                                  Xóa
                                </a>
                              </div>
                            </div>
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
              <div className="col-auto d-flex">
                <p className="mb-0 me-3 fw-semibold text-body"></p>
                {/* Showing{" "}
                {currentPage === 1
                  ? 1
                  : (currentPage - 1) * CategorysPerPage + 1}{" "}
                to {Math.min(currentPage * CategorysPerPage, categories.length)}{" "}
                of {categories.length} items */}
              </div>
              <div className="col-auto d-flex">
                <button className="" disabled>
                  <span className="fas fa-chevron-left" />
                </button>
                <ul className="mb-0 pagination">
                  <li className="">
                    <button className="page" type="button"></button>
                  </li>
                </ul>
                <button className="" disabled>
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

      <div
        className="modal fade"
        id="editMethod"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editMethod"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Edit Method Payment</h3>
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
                <div className="col-lg-12">
                  {/* Biến thể (readonly) */}
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên phương thức
                    </label>
                    <input className="form-control" type="text" />
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
              <button className="btn btn-primary my-0">Cập nhật</button>
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
