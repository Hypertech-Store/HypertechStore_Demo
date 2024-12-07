import products2 from "../../../assets/img/products/2.png";
import products1 from "../../../assets/img/products/1.png";
import products3 from "../../../assets/img/products/3.png";
import visa from "../../../assets/img/logos/visa.png";
// import discover from "../../../assets/img/logos/discover.png";
import mastercard from "../../../assets/img/logos/mastercard.png";
import express from "../../../assets/img/logos/american_express.png";
const Checkout = () => {
  document.title = "Hypertech Store - Thanh toán";
  return (
    <>
      <section className="pt-5 pb-9">
        <div className="container-small">
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
          <div className="row justify-content-between">
            <div className="col-lg-7 col-xl-6">
              <form>
                <div className="d-flex align-items-end">
                  <h3 className="mb-0 me-3">Shipping Details</h3>
                  <button className="btn btn-link p-0" type="button">
                    Edit
                  </button>
                </div>
                <table className="table table-borderless mt-4">
                  <tbody>
                    <tr>
                      <td className="py-2 ps-0">
                        <div className="d-flex">
                          <span
                            className="fs-3 me-2"
                            data-feather="user"
                            style={{ height: 16, width: 16 }}
                          >
                            {" "}
                          </span>
                          <h5 className="lh-sm me-4">Name</h5>
                        </div>
                      </td>
                      <td className="py-2 fw-bold lh-sm">:</td>
                      <td className="py-2 px-3">
                        <h5 className="lh-sm fw-normal text-body-secondary">
                          Shatinon Mekalan
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 ps-0">
                        <div className="d-flex">
                          <span
                            className="fs-3 me-2"
                            data-feather="home"
                            style={{ height: 16, width: 16 }}
                          >
                            {" "}
                          </span>
                          <h5 className="lh-sm me-4">Address</h5>
                        </div>
                      </td>
                      <td className="py-2 fw-bold lh-sm">:</td>
                      <td className="py-2 px-3">
                        <h5 className="lh-lg fw-normal text-body-secondary">
                          Apt: 6/B, 192 Edsel Road, Van Nuys <br /> California,
                          USA 96580
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 ps-0">
                        <div className="d-flex">
                          <span
                            className="fs-3 me-2"
                            data-feather="phone"
                            style={{ height: 16, width: 16 }}
                          >
                            {" "}
                          </span>
                          <h5 className="lh-sm me-4">Phone</h5>
                        </div>
                      </td>
                      <td className="py-2 fw-bold lh-sm">: </td>
                      <td className="py-2 px-3">
                        <h5 className="lh-sm fw-normal text-body-secondary">
                          818-414-4092
                        </h5>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <hr className="my-6" />
                <h3 className="mb-5">Delivery Type</h3>
                <div className="row gy-6">
                  <div className="col-12 col-md-6">
                    <div className="d-flex flex-wrap align-items-center mb-3">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="shippingRadio"
                          id="free_shipping"
                        />
                        <label
                          className="form-check-label fs-8 text-body"
                          htmlFor="free_shipping"
                        >
                          Free Shipping
                        </label>
                      </div>
                      <span className="d-inline-block text-body-emphasis fw-bold ms-2">
                        $0.00
                      </span>
                    </div>
                    <div className="ps-4">
                      <h6 className="text-body-tertiary mb-2">
                        Est. delivery: Jun 21 – Jul 20
                      </h6>
                      <h6 className="text-info lh-base mb-0">
                        Get Free Shipped products in Time!
                      </h6>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex flex-wrap align-items-center mb-3">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="shippingRadio"
                          id="two_days_shipping"
                        />
                        <label
                          className="form-check-label fs-8 text-body"
                          htmlFor="two_days_shipping"
                        >
                          Two days Shipping
                        </label>
                      </div>
                      <span className="d-inline-block text-body-emphasis fw-bold ms-2">
                        $20.00
                      </span>
                    </div>
                    <div className="ps-4">
                      <h6 className="text-body-tertiary mb-2">
                        Est. delivery: Jun 21 – Jul 20
                      </h6>
                      <h6 className="text-info lh-base mb-0">
                        Everything faster with minimum shipping fee.
                      </h6>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex flex-wrap align-items-center mb-3">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="shippingRadio"
                          id="standard_shipping"
                        />
                        <label
                          className="form-check-label fs-8 text-body"
                          htmlFor="standard_shipping"
                        >
                          Standard Shipping
                        </label>
                      </div>
                      <span className="d-inline-block text-body-emphasis fw-bold ms-2">
                        $10.00
                      </span>
                    </div>
                    <div className="ps-4">
                      <h6 className="text-body-tertiary mb-2">
                        Est. delivery: Jun 21 – Jul 20
                      </h6>
                      <h6 className="text-info lh-base mb-0">
                        Get timely delivery with economy shipping.
                      </h6>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex flex-wrap align-items-center mb-3">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="shippingRadio"
                          defaultChecked="checked"
                          id="one_day_shipping"
                        />
                        <label
                          className="form-check-label fs-8 text-body"
                          htmlFor="one_day_shipping"
                        >
                          One day Shipping
                        </label>
                      </div>
                      <span className="d-inline-block text-body-emphasis fw-bold ms-2">
                        $30.00
                      </span>
                      <span className="badge badge-phoenix badge-phoenix-warning ms-2 ms-lg-4 ms-xl-2">
                        Popular
                      </span>
                    </div>
                    <div className="ps-4">
                      <h6 className="text-body-tertiary mb-2">
                        Est. delivery: Jun 21 – Jul 20
                      </h6>
                      <h6 className="text-info lh-base mb-0">
                        Highest priority shipping at the lowest cost.
                      </h6>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 col-xl-5">
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
              <hr className="my-6" />
              <h3 className="mb-5">Payment Method</h3>
              <div className="row g-4 mb-7">
                <div className="col-12">
                  <div className="row gx-lg-2">
                    <div className="col-md-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="creditCard"
                          type="radio"
                          name="paymentMethod"
                          defaultChecked="checked"
                        />
                        <label
                          className="form-check-label fs-8 text-body text-nowrap d-flex gap-2"
                          htmlFor="creditCard"
                        >
                          Credit card
                          <img className="h-100" src={visa} alt />
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="paypal"
                          type="radio"
                          name="paymentMethod"
                        />
                        <label
                          className="form-check-label fs-8 text-body"
                          htmlFor="paypal"
                        >
                          Paypal <img className="h-100" src={mastercard} alt />
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="coupon"
                          type="radio"
                          name="paymentMethod"
                        />
                        <label
                          className="form-check-label fs-8 text-body"
                          htmlFor="coupon"
                        >
                          Coupon <img className="h-100" src={express} alt />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3 mt-lg-0">
                <button className="btn btn-primary" type="submit">
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </>
  );
};
export default Checkout;
