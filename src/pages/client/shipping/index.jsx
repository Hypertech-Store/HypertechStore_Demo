import products2 from "../../../assets/img/products/2.png";
import products1 from "../../../assets/img/products/1.png";
import products3 from "../../../assets/img/products/3.png";
const Shipping = () => {
  document.title = "Hypertech Store - Thông tin vận chuyển";
  return (
    <>
      <section className="pt-5 pb-9">
        <div className="container-small cart">
          <nav className="mb-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#!">Page 1</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#!">Page 2</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Default
              </li>
            </ol>
          </nav>
          <h2 className="mb-5">Check out</h2>
          <div className="row">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <form>
                <h3 className="mb-5">Shipping Info</h3>
                <div className="row g-4">
                  <div className="col-12">
                    <label
                      className="form-label fs-8 text-body-highlight ps-0 text-transform-none"
                      htmlFor="inputName"
                    >
                      Full name
                    </label>
                    <input
                      className="form-control"
                      id="inputName"
                      type="text"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label fs-8 text-body-highlight ps-0 text-transform-none"
                      htmlFor="inputEmail"
                    >
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label fs-8 text-body-highlight ps-0 text-transform-none"
                      htmlFor="inputPhone"
                    >
                      Phone
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder={+1234567890}
                    />
                  </div>
                  <div className="col-12">
                    <label
                      className="form-label fs-8 text-body-highlight ps-0 text-transform-none"
                      htmlFor="inputAddress1"
                    >
                      Address line 1
                    </label>
                    <input
                      className="form-control"
                      id="inputAddress1"
                      type="text"
                      placeholder="Address line 1"
                    />
                  </div>
                  <div className="col-12">
                    <label
                      className="form-label fs-8 text-body-highlight ps-0 text-transform-none"
                      htmlFor="inputAddress2"
                    >
                      Address line 2
                    </label>
                    <input
                      className="form-control"
                      id="inputAddress2"
                      type="text"
                      placeholder="Address line 2"
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      className="form-label fs-8 text-body-highlight ps-0 text-transform-none"
                      htmlFor="inputCity"
                    >
                      City
                    </label>
                    <select
                      className="form-select text-body-emphasis"
                      id="inputCity"
                    >
                      <option selected="selected">Van Nuys</option>
                      <option value="los-angeles">Los Angeles</option>
                      <option value="chicago">Chicago</option>
                      <option value="houston">Houston</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label
                      className="form-label fs-8 text-body-highlight ps-0 text-transform-none"
                      htmlFor="inputState"
                    >
                      State
                    </label>
                    <select
                      className="form-select text-body-emphasis"
                      id="inputState"
                    >
                      <option selected="selected">California</option>
                      <option value="Alaska">Alaska</option>
                      <option value="alabama">Alabama</option>
                      <option value="florida">Florida</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label
                      className="form-label fs-8 text-body-highlight ps-0 text-transform-none"
                      htmlFor="inputZipCode"
                    >
                      Zip code
                    </label>
                    <input
                      className="form-control number-arrows-none"
                      id="inputZipCode"
                      type="number"
                      placeholder="Zip code"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label
                      className="form-label fs-8 text-body-highlight ps-0 text-transform-none"
                      htmlFor="inputCountry"
                    >
                      Country
                    </label>
                    <select
                      className="form-select text-body-emphasis"
                      id="inputCountry"
                    >
                      <option selected="selected">USA</option>
                      <option value="uk">UK</option>
                      <option value="aus">AUS</option>
                      <option value="nz">NZ</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary px-8 px-sm-11 me-2"
                      type="submit"
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-phoenix-secondary text-nowrap"
                      type="submit"
                    >
                      Exit Without Saving
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-5 col-xl-4 offset-xl-1">
              <div className="card mt-3 mt-lg-0">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="mb-0">Summary</h3>
                    <button className="btn btn-link pe-0" type="button">
                      Edit cart
                    </button>
                  </div>
                  <div className="border-dashed border-bottom border-translucent mt-4">
                    <div className="ms-n2">
                      <div className="row align-items-center mb-2 g-3">
                        <div className="col-8 col-md-7 col-lg-8">
                          <div className="d-flex align-items-center">
                            <img
                              className="me-2 ms-1"
                              src={products1}
                              width={40}
                              alt
                            />
                            <h6 className="fw-semibold text-body-highlight lh-base">
                              Fitbit Sense Advanced Smartwatch with...{" "}
                            </h6>
                          </div>
                        </div>
                        <div className="col-2 col-md-3 col-lg-2">
                          <h6 className="fs-10 mb-0">x1</h6>
                        </div>
                        <div className="col-2 ps-0">
                          <h5 className="mb-0 fw-semibold text-end">$398</h5>
                        </div>
                      </div>
                      <div className="row align-items-center mb-2 g-3">
                        <div className="col-8 col-md-7 col-lg-8">
                          <div className="d-flex align-items-center">
                            <img
                              className="me-2 ms-1"
                              src={products2}
                              width={40}
                              alt
                            />
                            <h6 className="fw-semibold text-body-highlight lh-base">
                              iPhone 13 pro max-Pacific Blue-128GB{" "}
                            </h6>
                          </div>
                        </div>
                        <div className="col-2 col-md-3 col-lg-2">
                          <h6 className="fs-10 mb-0">x1</h6>
                        </div>
                        <div className="col-2 ps-0">
                          <h5 className="mb-0 fw-semibold text-end">$398</h5>
                        </div>
                      </div>
                      <div className="row align-items-center mb-5 g-3">
                        <div className="col-8 col-md-7 col-lg-8">
                          <div className="d-flex align-items-center">
                            <img
                              className="me-2 ms-1"
                              src={products3}
                              width={40}
                              alt
                            />
                            <h6 className="fw-semibold text-body-highlight lh-base">
                              Apple MacBook Pro 13 inch-M1-8/256GB
                            </h6>
                          </div>
                        </div>
                        <div className="col-2 col-md-3 col-lg-2">
                          <h6 className="fs-10 mb-0">x1</h6>
                        </div>
                        <div className="col-2 ps-0">
                          <h5 className="mb-0 fw-semibold text-end">$65</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-dashed border-bottom border-translucent mt-4">
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="text-body fw-semibold">
                        Items subtotal:{" "}
                      </h5>
                      <h5 className="text-body fw-semibold">$691</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="text-body fw-semibold">Discount: </h5>
                      <h5 className="text-danger fw-semibold">-$59</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="text-body fw-semibold">Tax: </h5>
                      <h5 className="text-body fw-semibold">$126.20</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="text-body fw-semibold">Subtotal </h5>
                      <h5 className="text-body fw-semibold">$665</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="text-body fw-semibold">Shipping Cost </h5>
                      <h5 className="text-body fw-semibold">$30 </h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between border-dashed-y pt-3">
                    <h4 className="mb-0">Total :</h4>
                    <h4 className="mb-0">$695.20</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </>
  );
};
export default Shipping;
