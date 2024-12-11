import bgImage1 from "../../../assets/img/bg/37.png";
import bgImage2 from "../../../assets/img/bg/38.png";
import authImageLight from "../../../assets/img/spot-illustrations/auth.png";
import authImageDark from "../../../assets/img/spot-illustrations/auth-dark.png";
import logo from "../../../assets/img/icons/logo1.png";

const Verification = () => {
  return (
    <>
      <div className="container-fluid bg-body-tertiary dark__bg-gray-1200">
        <div
          className="bg-holder bg-auth-card-overlay"
          style={{ backgroundImage: `url(${bgImage1})` }}
        />
        {/*/.bg-holder*/}
        <div className="row flex-center position-relative min-vh-100 g-0 py-5">
          <div className="col-11 col-sm-10 col-xl-8">
            <div className="card border border-translucent auth-card">
              <div className="card-body pe-md-0">
                <div className="row align-items-center gx-0 gy-7">
                  <div className="col-auto bg-body-highlight dark__bg-gray-1100 rounded-3 position-relative overflow-hidden auth-title-box">
                    <div
                      className="bg-holder"
                      style={{
                        backgroundImage: `url(${bgImage2})`,
                      }}
                    />
                    {/*/.bg-holder*/}
                    <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7">
                      <h3 className="mb-3 text-body-emphasis fs-7">
                        Phoenix Authentication
                      </h3>
                      <p className="text-body-tertiary">
                        Give yourself some hassle-free development process with
                        the uniqueness of Phoenix!
                      </p>
                      <ul className="list-unstyled mb-0 w-max-content w-md-auto">
                        <li className="d-flex align-items-center">
                          <span className="uil uil-check-circle text-success me-2" />
                          <span className="text-body-tertiary fw-semibold">
                            Fast
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="uil uil-check-circle text-success me-2" />
                          <span className="text-body-tertiary fw-semibold">
                            Simple
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="uil uil-check-circle text-success me-2" />
                          <span className="text-body-tertiary fw-semibold">
                            Responsive
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="position-relative z-n1 mb-6 d-none d-md-block text-center mt-md-15">
                      <img
                        className="auth-title-box-img d-dark-none"
                        src={authImageLight}
                        alt="auth light"
                      />
                      <img
                        className="auth-title-box-img d-light-none"
                        src={authImageDark}
                        alt="auth dark"
                      />
                    </div>
                  </div>
                  <div className="col mx-auto">
                    <div className="auth-form-box">
                      <div className="text-center">
                        <a
                          className="d-flex flex-center text-decoration-none mb-4"
                          href="../../../index.html"
                        >
                          <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                            <img src={logo} alt="phoenix" width={58} />
                          </div>
                        </a>
                        <h4 className="text-body-highlight">
                          Enter the verification code
                        </h4>
                        <p className="text-body-tertiary mb-0">
                          An email containing a 6-digit verification code has
                          been sent to the email address - exa*********.com{" "}
                        </p>
                        <p className="fs-10 mb-5">
                          Don’t have access? <a href="#!">Use another method</a>
                        </p>
                        <form
                          className="verification-form"
                          data-2fa-form="data-2fa-form"
                        >
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <input
                              className="form-control px-2 text-center"
                              type="number"
                            />
                            <input
                              className="form-control px-2 text-center"
                              type="number"
                            />
                            <input
                              className="form-control px-2 text-center"
                              type="number"
                            />
                            <span>-</span>
                            <input
                              className="form-control px-2 text-center"
                              type="number"
                            />
                            <input
                              className="form-control px-2 text-center"
                              type="number"
                            />
                            <input
                              className="form-control px-2 text-center"
                              type="number"
                            />
                          </div>
                          <div className="form-check text-start mb-4">
                            <input
                              className="form-check-input"
                              id="2fa-checkbox"
                              type="checkbox"
                            />
                            <label htmlFor="2fa-checkbox">
                              Don’t ask again on this device
                            </label>
                          </div>
                          <button
                            className="btn btn-primary w-100 mb-5"
                            type="submit"
                            disabled="disabled"
                          >
                            Verify
                          </button>
                          <a className="fs-9" href="#!">
                            Didn’t receive the code?{" "}
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
