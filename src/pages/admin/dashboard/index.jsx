import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const adminId = localStorage.getItem("adminId");
    if (adminId === null) {
      // Nếu userId không tồn tại (chưa đăng nhập), không làm gì
      console.log("User is not logged in.");
      navigate("/login");
    } else {
      // Nếu userId tồn tại (đã đăng nhập), điều hướng đến trang admin
      navigate("/admin");
    }
  }, [navigate]);

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
                      <h4 className="mb-0">57 đơn hàng mới</h4>
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
                      <h4 className="mb-0">5 đơn hàng</h4>
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
                      <h4 className="mb-0">15 sản phẩm</h4>
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
                              <span className="badge-label">-6.8%</span>
                            </span>
                          </h5>
                          <h6 className="text-body-tertiary">7 ngày qua</h6>
                        </div>
                        <h4>16,247</h4>
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
                          <h6 className="text-body fw-semibold mb-0">52%</h6>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="bullet-item bg-primary-subtle me-2" />
                          <h6 className="text-body fw-semibold flex-1 mb-0">
                            Đang chờ thanh toán
                          </h6>
                          <h6 className="text-body fw-semibold mb-0">48%</h6>
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
                              <span className="badge-label">+26.5%</span>
                            </span>
                          </h5>
                          <h6 className="text-body-tertiary">7 ngày qua</h6>
                        </div>
                        <h4>356</h4>
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
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"product":"iPhone 13 pro max-Pacific Blue-128GB storage","productImage":"/products/60x60/2.png","customer":{"name":"Ashley Garrett","avatar":"/team/40x40/59.webp"},"rating":3,"review":"The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.","status":{"title":"Approved","badge":"success","icon":"check"},"time":"Just now"}'
                        />
                      </div>
                    </td>
                    <td className="align-middle product white-space-nowrap py-0">
                      <a
                        className="d-block rounded-2 border border-translucent"
                        href="apps/e-commerce/landing/product-details.html"
                      >
                        <img
                          src="assets/img/products/60x60/2.png"
                          alt
                          width={53}
                        />
                      </a>
                    </td>
                    <td className="align-middle product white-space-nowrap">
                      <a
                        className="fw-semibold"
                        href="apps/e-commerce/landing/product-details.html"
                      >
                        iPhone 13 pro max-Pacific Blue-128GB storage
                      </a>
                    </td>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-body"
                        href="apps/e-commerce/landing/profile.html"
                      >
                        <div className="avatar avatar-l">
                          <img
                            className="rounded-circle"
                            src="assets/img/team/40x40/59.webp"
                            alt
                          />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Ashley Garrett</h6>
                      </a>
                    </td>
                    <td className="align-middle rating white-space-nowrap fs-10">
                      <span className="fa fa-star text-warning" />
                      <span className="fa fa-star text-warning" />
                      <span className="fa fa-star text-warning" />
                      <span
                        className="fa-regular fa-star text-warning-light"
                        data-bs-theme="light"
                      />
                      <span
                        className="fa-regular fa-star text-warning-light"
                        data-bs-theme="light"
                      />
                    </td>
                    <td
                      className="align-middle review"
                      style={{ minWidth: 350 }}
                    >
                      <p className="fs-9 fw-semibold text-body-highlight mb-0">
                        The order was delivered ahead of schedule. To give us
                        additional time, you should leave the packaging sealed
                        with plastic.
                      </p>
                    </td>
                    <td className="align-middle text-start ps-5 status">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Approved</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="align-middle text-end time white-space-nowrap">
                      <div className="hover-hide">
                        <h6 className="text-body-highlight mb-0">Just now</h6>
                      </div>
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0">
                      <div className="position-relative">
                        <div className="hover-actions">
                          <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                            <span className="fas fa-check" />
                          </button>
                          <button className="btn btn-sm btn-phoenix-secondary fs-10">
                            <span className="fas fa-trash" />
                          </button>
                        </div>
                      </div>
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

                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"product":"Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)","productImage":"/products/60x60/13.png","customer":{"name":"Michael Jenkins","avatar":"/team/40x40/9.webp"},"rating":5,"review":"I had a bit of a hard time at first but after I contacted the team they were able to help me set up the theme. It&apos;s really good and I highly recommend it to everyone.","status":{"title":"Pending","badge":"warning","icon":"clock"},"time":"Nov 04, 12:00 PM"}'
                        />
                      </div>
                    </td>
                    <td className="align-middle product white-space-nowrap py-0">
                      <a
                        className="d-block rounded-2 border border-translucent"
                        href="apps/e-commerce/landing/product-details.html"
                      >
                        <img
                          src="assets/img/products/60x60/13.png"
                          alt
                          width={53}
                        />
                      </a>
                    </td>
                    <td className="align-middle product white-space-nowrap">
                      <a
                        className="fw-semibold"
                        href="apps/e-commerce/landing/product-details.html"
                      >
                        Nintendo Switch with Neon Blue and Neon Red Jo...
                      </a>
                    </td>
                    <td className="align-middle customer white-space-nowrap">
                      <a
                        className="d-flex align-items-center text-body"
                        href="apps/e-commerce/landing/profile.html"
                      >
                        <div className="avatar avatar-l">
                          <img
                            className="rounded-circle"
                            src="assets/img/team/40x40/9.webp"
                            alt
                          />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Michael Jenkins</h6>
                      </a>
                    </td>
                    <td className="align-middle rating white-space-nowrap fs-10">
                      <span className="fa fa-star text-warning" />
                      <span className="fa fa-star text-warning" />
                      <span className="fa fa-star text-warning" />
                      <span className="fa fa-star text-warning" />
                      <span className="fa fa-star text-warning" />
                    </td>
                    <td
                      className="align-middle review"
                      style={{ minWidth: 350 }}
                    >
                      <p className="fs-9 fw-semibold text-body-highlight mb-0">
                        I had a bit of a hard time at first but after I
                        contacted the team they were able to help me set up the
                        theme. It's really good and I ...
                        <a href="#!">See more</a>
                      </p>
                    </td>
                    <td className="align-middle text-start ps-5 status">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                        <span className="badge-label">Pending</span>
                        <span
                          className="ms-1"
                          data-feather="clock"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="align-middle text-end time white-space-nowrap">
                      <div className="hover-hide">
                        <h6 className="text-body-highlight mb-0">
                          Nov 04, 12:00 PM
                        </h6>
                      </div>
                    </td>
                    <td className="align-middle white-space-nowrap text-end pe-0">
                      <div className="position-relative">
                        <div className="hover-actions">
                          <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                            <span className="fas fa-check" />
                          </button>
                          <button className="btn btn-sm btn-phoenix-secondary fs-10">
                            <span className="fas fa-trash" />
                          </button>
                        </div>
                      </div>
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
                </tbody>
              </table>
            </div>
            <div className="row align-items-center py-1">
              <div className="pagination d-none" />
              <div className="col d-flex fs-9">
                <p
                  className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                  data-list-info="data-list-info"
                />
                <a className="fw-semibold" href="#!" data-list-view="*">
                  View all
                  <span
                    className="fas fa-angle-right ms-1"
                    data-fa-transform="down-1"
                  />
                </a>
                <a
                  className="fw-semibold d-none"
                  href="#!"
                  data-list-view="less"
                >
                  View Less
                </a>
              </div>
              <div className="col-auto d-flex">
                <button
                  className="btn btn-link px-1 me-1"
                  type="button"
                  title="Previous"
                  data-list-pagination="prev"
                >
                  <span className="fas fa-chevron-left me-2" />
                  Previous
                </button>
                <button
                  className="btn btn-link px-1 ms-1"
                  type="button"
                  title="Next"
                  data-list-pagination="next"
                >
                  Next
                  <span className="fas fa-chevron-right ms-2" />
                </button>
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
