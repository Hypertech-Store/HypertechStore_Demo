//import logo
import logo from "../../../../assets/img/icons/logo1.png";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <section className="bg-body-highlight dark__bg-gray-1100 py-9">
        <div className="container-small">
          <div className="row justify-content-between gy-4">
            <div className="col-12 col-lg-4">
              <div className="d-flex align-items-center mb-3">
                <img src={logo} alt="hypertech store" width={27} />
                <h5 className="logo-text ms-2">hypertech store</h5>
              </div>
              <p className="text-body-tertiary mb-1 fw-semibold lh-sm fs-9">
                Hypertech Store cửa hàng bán đồ công nghệ uy tín hàng đầu
              </p>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">Giới thiệu</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Cửa hàng
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Chính sách bảo mật
                </a>
              </div>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">Kết nối</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Blogs
                </a>
                <a className="mb-1 fw-semibold fs-9 d-flex" href="#!">
                  <span className="fab fa-facebook-square text-primary me-2 fs-8" />
                  <span className="text-body-secondary">Facebook</span>
                </a>
                <a className="mb-1 fw-semibold fs-9 d-flex" href="#!">
                  <span className="fab fa-twitter-square text-info me-2 fs-8" />
                  <span className="text-body-secondary">Twitter</span>
                </a>
              </div>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">Dịch vụ khách hàng</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Trợ giúp
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Hỗ trợ, 24/7
                </a>

              </div>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">Phương thức thanh toán</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Thanh toán khi nhận hàng
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Thanh toán qua VNPay
                </a>

              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      <footer className="footer position-relative">
        <div className="row g-0 justify-content-between align-items-center h-100">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 mt-2 mt-sm-0 text-body">
              Cản ơn bạn đã đến với Hypertech Store
              <span className="d-none d-sm-inline-block" />
              <span className="d-none d-sm-inline-block mx-1">|</span>
              <br className="d-sm-none" />
              {currentYear} ©
              <a className="mx-1" href="https://themewagon.com/">
                Hypertech Store
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

export default Footer;
