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
                hypertech store is an admin dashboard template with fascinating
                features and amazing layout. The template is responsive to all
                major browsers and is compatible with all available devices and
                screen sizes.
              </p>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">About hypertech store</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Careers
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Affiliate Program
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">Stay Connected</h5>
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
              <h5 className="fw-bolder mb-3">Customer Service</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Help Desk
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Support, 24/7
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Community of hypertech store
                </a>
              </div>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">Payment Method</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Cash on Delivery
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Online Payment
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  PayPal
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Installment
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
              Thank you for creating with Hypertech Store
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
