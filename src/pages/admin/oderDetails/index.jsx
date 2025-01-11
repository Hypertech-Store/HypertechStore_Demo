import { Link, useLocation } from "react-router-dom";

const OrderDetails = () => {
  const breadcrumbTitles = {
    "admin/chi-tiet-don-hang": "Chi tiết đơn hàng", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

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

        <div
          id="orderTable"
          data-list='{"valueNames":["order","total","customer","payment_status","fulfilment_status","delivery_type","date"],"page":10,"pagination":true}'
        >
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table table-sm fs-9 mb-0">
                <thead>
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
                <tbody className="list" id="profile-order-table-body">
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="order align-middle white-space-nowrap py-2 ps-0">
                      <a className="fw-semibold text-primary" href="#!"></a>
                    </td>
                    <td className="order align-middle white-space-nowrap py-2 ps-0"></td>

                    <td className="delivery align-middle white-space-nowrap text-body py-2"></td>
                    <td className="status align-middle white-space-nowrap text-start py-2"></td>
                    <td className="order align-middle white-space-nowrap py-2 ps-1"></td>
                    <td className="total align-middle text-body-tertiary text-start py-2"></td>
                    <td className="date align-middle fw-semibold text-start py-2 text-body-highlight"></td>
                    <td className="order align-middle white-space-nowrap py-2 ps-1"></td>
                    <td className="order align-middle white-space-nowrap py-2 ps-1"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
              <div className="col-auto">
                <p className="mb-0">Trang 1 / 2</p>
              </div>

              <div className="col-auto d-flex">
                <button className="page-link " disabled>
                  <span className="fas fa-chevron-left" />
                </button>
                <ul className="mb-0 pagination">
                  <li className="active">
                    <button className="page " type="button">
                      1
                    </button>
                  </li>
                </ul>
                <button className="page-link ">
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
export default OrderDetails;
