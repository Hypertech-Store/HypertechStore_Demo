import logo from "../../../assets/img/icons/logo1.png";
const ForPassword = () => {
  document.title = "Hypertech Store - Quên mật khẩu";
  return (
    <>
      <div className="container">
        <div className="row flex-center min-vh-100 py-5">
          <div className="col-sm-10 col-md-8 col-lg-5 col-xxl-4">
            <a
              className="d-flex flex-center text-decoration-none mb-4"
              href="/"
            >
              <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                <img src={logo} alt="phoenix" width={58} />
              </div>
            </a>
            <div className="px-xxl-5">
              <div className="text-center mb-6">
                <h4 className="text-body-highlight">Forgot your password?</h4>
                <p className="text-body-tertiary mb-5">
                  Enter your email below and we will send{" "}
                  <br className="d-sm-none" />
                  you a reset link
                </p>
                <form className="d-flex align-items-center mb-5">
                  <input
                    className="form-control flex-1"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <button className="btn btn-primary ms-2">
                    Send
                    <span className="fas fa-chevron-right ms-2" />
                  </button>
                </form>
                <a className="fs-9 fw-bold" href="#!">
                  Still having problems?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForPassword;
