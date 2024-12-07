import logo from "../../../assets/img/icons/logo1.png";
const Register = () => {
  document.title = "Hypertech Store - Đăng ký";
  return (
    <>
      <div className="container">
        <div className="row flex-center min-vh-100 py-5">
          <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
            <a
              className="d-flex flex-center text-decoration-none mb-4"
              href="/"
            >
              <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                <img src={logo} alt="phoenix" width={58} />
              </div>
            </a>
            <div className="text-center mb-7">
              <h3 className="text-body-highlight">Sign Up</h3>
              <p className="text-body-tertiary">Create your account today</p>
            </div>
            <button className="btn btn-phoenix-secondary w-100 mb-3">
              <span className="fab fa-google text-danger me-2 fs-9" />
              Sign up with google
            </button>
            <div className="position-relative mt-4">
              <hr className="bg-body-secondary" />
              <div className="divider-content-center">or use email</div>
            </div>
            <form>
              <div className="mb-3 text-start">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="row g-3 mb-3">
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <div
                    className="position-relative"
                    data-password="data-password"
                  >
                    <input
                      className="form-control form-icon-input pe-6"
                      id="password"
                      type="password"
                      placeholder="Password"
                      data-password-input="data-password-input"
                    />
                    <button
                      className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                      data-password-toggle="data-password-toggle"
                    >
                      <span className="uil uil-eye show" />
                      <span className="uil uil-eye-slash hide" />
                    </button>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <div
                    className="position-relative"
                    data-password="data-password"
                  >
                    <input
                      className="form-control form-icon-input pe-6"
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      data-password-input="data-password-input"
                    />
                    <button
                      className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                      data-password-toggle="data-password-toggle"
                    >
                      <span className="uil uil-eye show" />
                      <span className="uil uil-eye-slash hide" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  id="termsService"
                  type="checkbox"
                />
                <label
                  className="form-label fs-9 text-transform-none"
                  htmlFor="termsService"
                >
                  I accept the <a href="#!">terms </a>and{" "}
                  <a href="#!">privacy policy</a>
                </label>
              </div>
              <button className="btn btn-primary w-100 mb-3">Sign up</button>
              <div className="text-center">
                <a className="fs-9 fw-bold" href="dang-nhap">
                  Sign in to an existing account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
