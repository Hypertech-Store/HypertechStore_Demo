//import logo
import logo from "../../../../assets/img/icons/logo1.png";
import team from "../../../../assets/img/team/30.webp";
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
      <div className="support-chat-container">
        <div className="container-fluid support-chat">
          <div className="card bg-body-emphasis">
            <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
              <h5 className="mb-0 d-flex align-items-center gap-2">
                Demo widget
                <span className="fa-solid fa-circle text-success fs-11" />
              </h5>
              <div className="btn-reveal-trigger">
                <button
                  className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
                  type="button"
                  id="support-chat-dropdown"
                  data-bs-toggle="dropdown"
                  data-boundary="window"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-ellipsis-h text-body" />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end py-2"
                  aria-labelledby="support-chat-dropdown"
                >
                  <a className="dropdown-item" href="#!">
                    Request a callback
                  </a>
                  <a className="dropdown-item" href="#!">
                    Search in chat
                  </a>
                  <a className="dropdown-item" href="#!">
                    Show history
                  </a>
                  <a className="dropdown-item" href="#!">
                    Report to Admin
                  </a>
                  <a className="dropdown-item btn-support-chat" href="#!">
                    Close Support
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body chat p-0">
              <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
                <div className="text-end mt-6">
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semibold fs-9">
                      I need help with something
                    </p>
                    <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                  </a>
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semibold fs-9">
                      I can’t reorder a product I previously ordered
                    </p>
                    <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                  </a>
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semibold fs-9">
                      How do I place an order?
                    </p>
                    <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                  </a>
                  <a
                    className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semibold fs-9">
                      My payment method not working
                    </p>
                    <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                  </a>
                </div>
                <div className="text-center mt-auto">
                  <div className="avatar avatar-3xl status-online">
                    <img
                      className="rounded-circle border border-3 border-light-subtle"
                      src={team}
                      alt
                    />
                  </div>
                  <h5 className="mt-2 mb-3">Eric</h5>
                  <p className="text-center text-body-emphasis mb-0">
                    Ask us anything – we’ll get back to you here or by email
                    within 24 hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
              <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4">
                <input
                  className="form-control outline-none border-0 flex-1 fs-9 px-0"
                  type="text"
                  placeholder="Write message"
                />
                <label
                  className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                  htmlFor="supportChatPhotos"
                >
                  <span className="fa-solid fa-image" />
                </label>
                <input
                  className="d-none"
                  type="file"
                  accept="image/*"
                  id="supportChatPhotos"
                />
                <label
                  className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                  htmlFor="supportChatAttachment"
                >
                  {" "}
                  <span className="fa-solid fa-paperclip" />
                </label>
                <input
                  className="d-none"
                  type="file"
                  id="supportChatAttachment"
                />
              </div>
              <button className="btn p-0 border-0 send-btn">
                <span className="fa-solid fa-paper-plane fs-9" />
              </button>
            </div>
          </div>
        </div>
        <button className="btn btn-support-chat p-0 border border-translucent">
          <span className="fs-8 btn-text text-primary text-nowrap">
            Chat demo
          </span>
          <span className="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative">
            <span className="ping-icon-bg" />
            <span className="fa-solid fa-circle ping-icon" />
          </span>
          <span className="fa-solid fa-headset text-primary fs-8 d-sm-none" />
          <span className="fa-solid fa-chevron-down text-primary fs-7" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
