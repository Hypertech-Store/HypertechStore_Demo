import blueFront from "../../../assets/img/products/details/blue_front.png";
import blueBack from "../../../assets/img/products/details/blue_back.png";
import redFront from "../../../assets/img/products/details/red_front.png";
import redBack from "../../../assets/img/products/details/red_back.png";
import greenFront from "../../../assets/img/products/details/green_front.png";
import greenBack from "../../../assets/img/products/details/green_back.png";
import purpleFront from "../../../assets/img/products/details/purple_front.png";
import purpleBack from "../../../assets/img/products/details/purple_back.png";
import silverFront from "../../../assets/img/products/details/silver_front.png";
import silverBack from "../../../assets/img/products/details/silver_back.png";
import yellowFront from "../../../assets/img/products/details/yellow_front.png";
import yellowBack from "../../../assets/img/products/details/yellow_back.png";
import orangeFront from "../../../assets/img/products/details/orange_front.png";
import orangeBack from "../../../assets/img/products/details/orange_back.png";

import products from "../../../assets/img/products/23.png";
import products1 from "../../../assets/img/products/2.png";
import products2 from "../../../assets/img/products/16.png";
import products3 from "../../../assets/img/products/10.png";
import products4 from "../../../assets/img/products/1.png";
import products5 from "../../../assets/img/products/3.png";
import products6 from "../../../assets/img/products/5.png";
import products7 from "../../../assets/img/products/6.png";
import icon from "../../../assets/img/icons/image-icon.png";
import review1 from "../../../assets/img/e-commerce/review-11.jpg";
import review2 from "../../../assets/img/e-commerce/review-12.jpg";
import review3 from "../../../assets/img/e-commerce/review-13.jpg";
import review4 from "../../../assets/img/e-commerce/review-14.jpg";
import review5 from "../../../assets/img/e-commerce/review-15.jpg";
import review6 from "../../../assets/img/e-commerce/review-16.jpg";

const ProductDetails = () => {
  document.title = "Hypertech Store - Chi tiết sản phẩm";
  return (
    <>
      <div>
        <section>
          <section className="py-0">
            <div className="container-small">
              <nav className="mb-3" aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">Fashion</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Womens fashion</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Footwear</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Hills
                  </li>
                </ol>
              </nav>
              <div
                className="row g-5 mb-5 mb-lg-8"
                data-product-details="data-product-details"
              >
                <div className="col-12 col-lg-6">
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-2 col-lg-12 col-xl-2">
                      <div
                        className="swiper-products-thumb swiper theme-slider overflow-visible swiper-initialized swiper-vertical swiper-backface-hidden swiper-thumbs"
                        id="swiper-products-thumb"
                      >
                        <div
                          className="swiper-wrapper"
                          id="swiper-wrapper-56b3ffd4b36810b60"
                          aria-live="polite"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                          <div
                            className="swiper-slide swiper-slide-active swiper-slide-visible swiper-slide-fully-visible swiper-slide-thumb-active"
                            role="group"
                            aria-label="1 / 3"
                            style={{ height: 84, marginBottom: 16 }}
                          >
                            <div className="product-thumb-container p-2 p-sm-3 p-xl-2">
                              <img src={blueFront} alt />
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-next swiper-slide-visible swiper-slide-fully-visible"
                            role="group"
                            aria-label="2 / 3"
                            style={{ height: 84, marginBottom: 16 }}
                          >
                            <div className="product-thumb-container p-2 p-sm-3 p-xl-2">
                              <img src={blueBack} alt />
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-visible swiper-slide-fully-visible"
                            role="group"
                            aria-label="3 / 3"
                            style={{ height: 84, marginBottom: 16 }}
                          >
                            <div className="product-thumb-container p-2 p-sm-3 p-xl-2">
                              <img src={blueFront} alt />
                            </div>
                          </div>
                        </div>
                        <span
                          className="swiper-notification"
                          aria-live="assertive"
                          aria-atomic="true"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-10 col-lg-12 col-xl-10">
                      <div className="d-flex align-items-center border border-translucent rounded-3 text-center p-5 h-100">
                        <div
                          className="swiper theme-slider swiper-initialized swiper-horizontal swiper-backface-hidden"
                          data-thumb-target="swiper-products-thumb"
                          data-products-swiper='{"slidesPerView":1,"spaceBetween":16,"thumbsEl":".swiper-products-thumb"}'
                        >
                          <div
                            className="swiper-wrapper"
                            id="swiper-wrapper-25b87b05eda6d6e9"
                            aria-live="polite"
                          >
                            <div
                              className="swiper-slide swiper-slide-active"
                              role="group"
                              aria-label="1 / 3"
                              style={{ width: 411 }}
                            >
                              <img className="w-100" src={blueFront} alt />
                            </div>
                            <div
                              className="swiper-slide swiper-slide-next"
                              role="group"
                              aria-label="2 / 3"
                              style={{ width: 411 }}
                            >
                              <img className="w-100" src={blueBack} alt />
                            </div>
                            <div
                              className="swiper-slide "
                              role="group"
                              aria-label="3 / 3"
                              style={{ width: 411 }}
                            >
                              <img className="w-100" src={blueFront} alt />
                            </div>
                          </div>
                          <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-lg btn-outline-warning rounded-pill w-100 me-3 px-2 px-sm-4 fs-9 fs-sm-8">
                      <svg
                        className="svg-inline--fa fa-heart me-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="heart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                        />
                      </svg>
                      {/* <span class="me-2 far fa-heart"></span> Font Awesome fontawesome.com */}
                      Add to wishlist
                    </button>
                    <button className="btn btn-lg btn-warning rounded-pill w-100 fs-9 fs-sm-8">
                      <svg
                        className="svg-inline--fa fa-cart-shopping me-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cart-shopping"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        />
                      </svg>
                      {/* <span class="fas fa-shopping-cart me-2"></span> Font Awesome fontawesome.com */}
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="d-flex flex-wrap">
                        <div className="me-2">
                          <svg
                            className="svg-inline--fa fa-star text-warning"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                          {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          <svg
                            className="svg-inline--fa fa-star text-warning"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                          {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          <svg
                            className="svg-inline--fa fa-star text-warning"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                          {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          <svg
                            className="svg-inline--fa fa-star text-warning"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                          {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          <svg
                            className="svg-inline--fa fa-star text-warning"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                          {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                        </div>
                        <p className="text-primary fw-semibold mb-2">
                          6548 People rated and reviewed{" "}
                        </p>
                      </div>
                      <h3 className="mb-3 lh-sm">
                        24" iMac® with Retina 4.5K display - Apple M1 8GB Memory
                        - 256GB SSD - w/Touch ID (Latest Model) - Blue
                      </h3>
                      <div className="d-flex flex-wrap align-items-start mb-3">
                        <span className="badge text-bg-success fs-9 rounded-pill me-2 fw-semibold">
                          #1 Best seller
                        </span>
                        <a className="fw-semibold" href="#!">
                          in Phoenix sell analytics 2021
                        </a>
                      </div>
                      <div className="d-flex flex-wrap align-items-center">
                        <h1 className="me-3">$1349.99</h1>
                        <p className="text-body-quaternary text-decoration-line-through fs-6 mb-0 me-3">
                          $1499.99
                        </p>
                        <p className="text-warning fw-bolder fs-6 mb-0">
                          10% off
                        </p>
                      </div>
                      <p className="text-success fw-semibold fs-7 mb-2">
                        In stock
                      </p>
                      <p className="mb-2 text-body-secondary">
                        <strong className="text-body-highlight">
                          Do you want it on Saturday, July 29th?
                        </strong>{" "}
                        Choose{" "}
                        <strong className="text-body-highlight">
                          Saturday Delivery{" "}
                        </strong>
                        at checkout if you want your order delivered within 12
                        hours 43 minutes,{" "}
                        <a className="fw-bold" href="#!">
                          Details.{" "}
                        </a>
                        <strong className="text-body-highlight">
                          Gift wrapping is available.
                        </strong>
                      </p>
                      <p className="text-danger-dark fw-bold mb-5 mb-lg-0">
                        Special offer ends in 23:00:45 hours
                      </p>
                    </div>
                    <div>
                      <div className="mb-3">
                        <p className="fw-semibold mb-2 text-body">
                          Color:{" "}
                          <span
                            className="text-body-emphasis"
                            data-product-color="data-product-color"
                          >
                            Blue
                          </span>
                        </p>
                        <div
                          className="d-flex product-color-variants"
                          data-product-color-variants="data-product-color-variants"
                        >
                          <div
                            className="rounded-1 border border-translucent me-2 active"
                            data-variant="Blue"
                            data-products-images={[blueFront, blueBack]}
                          >
                            <img src={blueFront} alt="Blue Front" width={38} />
                          </div>
                          <div
                            className="rounded-1 border border-translucent me-2"
                            data-variant="Red"
                            data-products-images={[redFront, redBack]}
                          >
                            <img src={redFront} alt="Red Front" width={38} />
                          </div>
                          <div
                            className="rounded-1 border border-translucent me-2"
                            data-variant="Green"
                            data-products-images={[greenFront, greenBack]}
                          >
                            <img
                              src={greenFront}
                              alt="Green Front"
                              width={38}
                            />
                          </div>
                          <div
                            className="rounded-1 border border-translucent me-2"
                            data-variant="Purple"
                            data-products-images={[purpleFront, purpleBack]}
                          >
                            <img
                              src={purpleFront}
                              alt="Purple Front"
                              width={38}
                            />
                          </div>
                          <div
                            className="rounded-1 border border-translucent me-2"
                            data-variant="Silver"
                            data-products-images={[silverFront, silverBack]}
                          >
                            <img
                              src={silverFront}
                              alt="Silver Front"
                              width={38}
                            />
                          </div>
                          <div
                            className="rounded-1 border border-translucent me-2"
                            data-variant="Yellow"
                            data-products-images={[yellowFront, yellowBack]}
                          >
                            <img
                              src={yellowFront}
                              alt="Yellow Front"
                              width={38}
                            />
                          </div>
                          <div
                            className="rounded-1 border border-translucent me-2"
                            data-variant="Orange"
                            data-products-images={[orangeFront, orangeBack]}
                          >
                            <img
                              src={orangeFront}
                              alt="Orange Front"
                              width={38}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row g-3 g-sm-5 align-items-end">
                        <div className="col-12 col-sm-auto">
                          <p className="fw-semibold mb-2 text-body">Size:</p>
                          <div className="d-flex align-items-center">
                            <select className="form-select w-auto">
                              <option value={44}>44</option>
                              <option value={22}>22</option>
                              <option value={18}>18</option>
                            </select>
                            <a className="ms-2 fs-9 fw-semibold" href="#!">
                              Size chart
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm">
                          <p className="fw-semibold mb-2 text-body">
                            Quantity:
                          </p>
                          <div className="d-flex justify-content-between align-items-end">
                            <div
                              className="d-flex flex-between-center"
                              data-quantity="data-quantity"
                            >
                              <button
                                className="btn btn-phoenix-primary px-3"
                                data-type="minus"
                              >
                                -
                              </button>
                              <input
                                className="form-control text-center input-spin-none bg-transparent border-0 outline-none"
                                style={{ width: 50 }}
                                type="number"
                                min={1}
                                defaultValue={2}
                              />
                              <button
                                className="btn btn-phoenix-primary px-3"
                                data-type="plus"
                              >
                                +
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary px-3 border-0">
                              <span className="fas fa-share-alt fs-7" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-0">
            <div className="container-small">
              <ul
                className="nav nav-underline fs-9 mb-4"
                id="productTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    href="#tab-description"
                    role="tab"
                    aria-controls="tab-description"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="specification-tab"
                    data-bs-toggle="tab"
                    href="#tab-specification"
                    role="tab"
                    aria-controls="tab-specification"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Specification
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    href="#tab-reviews"
                    role="tab"
                    aria-controls="tab-reviews"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Ratings &amp; reviews
                  </a>
                </li>
              </ul>
              <div className="row gx-3 gy-7">
                <div className="col-12 col-lg-7 col-xl-8">
                  <div className="tab-content" id="productTabContent">
                    <div
                      className="tab-pane pe-lg-6 pe-xl-12 fade show active text-body-emphasis"
                      id="tab-description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <p className="mb-5">
                        CUPERTINO, CA , The M1 CPU allows Apple to deliver an
                        all-new iMac with a lot more compact and impressively
                        thin design. The new iMac delivers tremendous
                        performance in an 11.5-millimeter-thin design with a
                        stunning side profile that almost vanishes. iMac
                        includes a 24-inch 4.5K Retina display with 11.3 million
                        pixels, 500 nits of brightness, and over a billion
                        colors, giving a beautiful and vivid viewing experience.
                        It is available in a variety of striking colors to match
                        a user's own style and brighten any area. A 1080p
                        FaceTime HD camera, studio-quality mics, and a
                        six-speaker sound system are all included in the new
                        iMac, making it the greatest camera and audio system
                        ever in a Mac. Touch ID is also making its debut on the
                        iMac, making it easier than ever to securely log in,
                        make Apple Pay transactions, and switch user accounts
                        with the touch of a finger. Apps launch at lightning
                        speed, everyday chores seem astonishingly fast and
                        fluid, and demanding workloads like editing 4K video and
                        working with large photos are faster than ever before
                        thanks to the power and performance of M1 and macOS Big
                        Sur.
                      </p>
                      <a href={products} data-gallery="gallery-description">
                        <img
                          className="img-fluid mb-5 rounded-3"
                          src={products}
                          alt
                        />
                      </a>
                      <p className="mb-0">
                        The new iMac joins Apple's fantastic M1-powered Mac
                        family, which includes the MacBook Air, 13-inch MacBook
                        Pro, and Mac mini, and represents yet another step ahead
                        in the company's shift to Apple silicon. Customers may
                        order iMac starting Friday, April 30. It's the most
                        personal, powerful, capable, and enjoyable it's ever
                        been. In the second half of May, the iMac will be
                        available."M1 is a huge step forward for the Mac," said
                        Greg Joswiak, Apple's senior vice president of Worldwide
                        Marketing. "Today, we're delighted to present the
                        all-new iMac, the first Mac developed around the
                        groundbreaking M1 processor." "The new iMac takes
                        everything people love about iMac to an entirely new
                        level, with its beautiful design in seven breathtaking
                        colors, its immersive 4.5K Retina display, the greatest
                        camera, mics, and speakers ever in a Mac, and Touch ID,
                        combined with M1's incredible performance and macOS Big
                        Sur's power."
                      </p>
                    </div>
                    <div
                      className="tab-pane pe-lg-6 pe-xl-12 fade"
                      id="tab-specification"
                      role="tabpanel"
                      aria-labelledby="specification-tab"
                    >
                      <h3 className="mb-0 ms-4 fw-bold">Processor/Chipset</h3>
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{ width: "40%" }}> </th>
                            <th style={{ width: "60%" }} />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Chip name
                              </h6>
                            </td>
                            <td className="px-5 mb-0">Apple M1 chip</td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Cpu core
                              </h6>
                            </td>
                            <td className="px-5 mb-0">
                              8 (4 performance and 4 efficiency)
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Gpu core
                              </h6>
                            </td>
                            <td className="px-5 mb-0">7</td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Neural engine
                              </h6>
                            </td>
                            <td className="px-5 mb-0">16 cores</td>
                          </tr>
                        </tbody>
                      </table>
                      <h3 className="mb-0 mt-6 ms-4 fw-bold">Storage</h3>
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{ width: "40%" }} />
                            <th style={{ width: "60%" }} />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Memory
                              </h6>
                            </td>
                            <td className="px-5 mb-0">8 GB unified</td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                SSD
                              </h6>
                            </td>
                            <td className="px-5 mb-0">256 GB</td>
                          </tr>
                        </tbody>
                      </table>
                      <h3 className="mb-0 mt-6 ms-4 fw-bold">Display</h3>
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{ width: "40%" }}> </th>
                            <th style={{ width: "60%" }} />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Display type
                              </h6>
                            </td>
                            <td className="px-5 mb-0">Retina</td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Size
                              </h6>
                            </td>
                            <td className="px-5 mb-0">
                              24” (actual diagonal 23.5”)
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Resolution
                              </h6>
                            </td>
                            <td className="px-5 mb-0">4480 x 2520 </td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Brightness
                              </h6>
                            </td>
                            <td className="px-5 mb-0">500 nits</td>
                          </tr>
                        </tbody>
                      </table>
                      <h3 className="mb-0 mt-6 ms-4 fw-bold">
                        Additional Specifications
                      </h3>
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{ width: "40%" }}> </th>
                            <th style={{ width: "60%" }} />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Camera
                              </h6>
                            </td>
                            <td className="px-5 mb-0">
                              1080p FaceTime HD camera
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight">
                              <h6 className="mb-0 mt-1 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Video{" "}
                              </h6>
                            </td>
                            <td className="px-5 mb-0">
                              Full native resolution on built-in display at 1
                              billion colors; <br />
                              One external display with up to 6K resolution at
                              60Hz
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight">
                              <h6 className="mb-0 mt-1 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Audio
                              </h6>
                            </td>
                            <td className="px-5 mb-0">
                              High-fidelity six-speaker with force-cancelling
                              woofers <br />
                              Wide stereo sound <br />
                              Spatial audio with Dolby Atmos3
                              <br />
                              Studio-quality three-mic array with directional
                              beamforming
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight">
                              <h6 className="mb-0 mt-1 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Inputs{" "}
                              </h6>
                            </td>
                            <td className="px-5 mb-0">
                              Magic Keyboard
                              <br />
                              Magic Mouse
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight">
                              <h6 className="mb-0 mt-1 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Wireless{" "}
                              </h6>
                            </td>
                            <td className="px-5 mb-0">
                              802.11ax Wi-Fi 6 (IEEE 802.11a/b/g/n/ac
                              compatible)
                              <br />
                              Bluetooth 5.0 wireless technology
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight">
                              <h6 className="mb-0 mt-1 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                I/O &amp; expantions{" "}
                              </h6>
                            </td>
                            <td className="px-5 mb-0">
                              Thunderbolt / USB 4 ports x 2<br />
                              3.5 mm headphone jack
                              <br />
                              Gigabit Ethernet
                              <br />
                              USB 3 ports x2
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-body-highlight align-middle">
                              <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                Operating System
                              </h6>
                            </td>
                            <td className="px-5 mb-0">macOS Monterey </td>
                          </tr>
                        </tbody>
                      </table>
                      <h3 className="mb-3 mt-6 ms-4 fw-bold">In The Box</h3>
                      <p className="lh-sm border-top border-translucent mb-0 py-3 px-4">
                        iMac 24”
                      </p>
                      <p className="lh-sm border-top border-translucent mb-0 py-3 px-4">
                        Magic Keyboard{" "}
                      </p>
                      <p className="lh-sm border-top border-translucent mb-0 py-3 px-4">
                        Magic Mouse
                      </p>
                      <p className="lh-sm border-top border-translucent mb-0 py-3 px-4">
                        143W power adapter
                      </p>
                      <p className="lh-sm border-top border-translucent mb-0 py-3 px-4">
                        2m Power Cord
                      </p>
                      <p className="lh-sm border-y border-translucent mb-0 py-3 px-4">
                        USB-C to Lightning Cable
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tab-reviews"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                    >
                      <div className="bg-body-emphasis rounded-3 p-4 border border-translucent">
                        <div className="row g-3 justify-content-between mb-4">
                          <div className="col-auto">
                            <div className="d-flex align-items-center flex-wrap">
                              <h2 className="fw-bolder me-3">
                                4.9
                                <span className="fs-8 text-body-quaternary fw-bold">
                                  /5
                                </span>
                              </h2>
                              <div className="me-3">
                                <svg
                                  className="svg-inline--fa fa-star text-warning fs-6"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="star"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  />
                                </svg>
                                {/* <span class="fa fa-star text-warning fs-6"></span> Font Awesome fontawesome.com */}
                                <svg
                                  className="svg-inline--fa fa-star text-warning fs-6"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="star"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  />
                                </svg>
                                {/* <span class="fa fa-star text-warning fs-6"></span> Font Awesome fontawesome.com */}
                                <svg
                                  className="svg-inline--fa fa-star text-warning fs-6"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="star"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  />
                                </svg>
                                {/* <span class="fa fa-star text-warning fs-6"></span> Font Awesome fontawesome.com */}
                                <svg
                                  className="svg-inline--fa fa-star text-warning fs-6"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="star"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  />
                                </svg>
                                {/* <span class="fa fa-star text-warning fs-6"></span> Font Awesome fontawesome.com */}
                                <svg
                                  className="svg-inline--fa fa-star-half-stroke star-icon text-warning fs-6"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="star-half-stroke"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"
                                  />
                                </svg>
                                {/* <span class="fa fa-star-half-alt star-icon text-warning fs-6"></span> Font Awesome fontawesome.com */}
                              </div>
                              <p className="text-body mb-0 fw-semibold fs-7">
                                6548 ratings and 567 reviews
                              </p>
                            </div>
                          </div>
                          <div className="col-auto">
                            <button
                              className="btn btn-primary rounded-pill"
                              data-bs-toggle="modal"
                              data-bs-target="#reviewModal"
                            >
                              Rate this product
                            </button>
                            <div
                              className="modal fade"
                              id="reviewModal"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content p-4">
                                  <div className="d-flex flex-between-center mb-2">
                                    <h5 className="modal-title fs-8 mb-0">
                                      Your rating
                                    </h5>
                                    <button className="btn p-0 fs-10">
                                      Clear
                                    </button>
                                  </div>
                                  <div
                                    className="mb-3 star-rating"
                                    data-rater='{"starSize":32,"step":0.5}'
                                    style={{
                                      width: 160,
                                      height: 32,
                                      backgroundSize: 32,
                                    }}
                                  >
                                    <div
                                      className="star-value"
                                      style={{ backgroundSize: 32, width: 0 }}
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <h5 className="text-body-highlight mb-3">
                                      Your review
                                    </h5>
                                    <textarea
                                      className="form-control"
                                      id="reviewTextarea"
                                      rows={5}
                                      placeholder="Write your review"
                                      defaultValue={" "}
                                    />
                                  </div>
                                  <div
                                    className="dropzone dropzone-multiple p-0 mb-3 dz-clickable"
                                    id="my-awesome-dropzone"
                                    data-dropzone
                                  >
                                    <div className="dz-preview d-flex flex-wrap" />
                                    <div
                                      className="dz-message text-body-tertiary text-opacity-85 fw-bold fs-9 p-4"
                                      data-dz-message
                                    >
                                      {" "}
                                      Drag your photo here{" "}
                                      <span className="text-body-secondary">
                                        or{" "}
                                      </span>
                                      <button className="btn btn-link p-0">
                                        Browse from device{" "}
                                      </button>
                                      <br />
                                      <img
                                        className="mt-3 me-2"
                                        src={icon}
                                        width={24}
                                        alt
                                      />
                                    </div>
                                  </div>
                                  <div className="d-sm-flex flex-between-center">
                                    <div className="form-check flex-1">
                                      <input
                                        className="form-check-input"
                                        id="reviewAnonymously"
                                        type="checkbox"
                                        defaultValue
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label mb-0 text-body-emphasis fw-semibold"
                                        htmlFor="reviewAnonymously"
                                      >
                                        Review anonymously
                                      </label>
                                    </div>
                                    <button
                                      className="btn ps-0"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button className="btn btn-primary rounded-pill">
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 hover-actions-trigger btn-reveal-trigger">
                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2">
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <span className="text-body-secondary ms-1">
                                {" "}
                                by
                              </span>{" "}
                              Zingko Kudobum
                            </h5>
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <svg
                                  className="svg-inline--fa fa-ellipsis fs-10"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="ellipsis"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                  />
                                </svg>
                                {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                          <p className="text-body-tertiary fs-9 mb-1">
                            35 mins ago
                          </p>
                          <p className="text-body-highlight mb-3">
                            100% satisfied
                          </p>
                          <div className="row g-2 mb-2">
                            <div className="col-auto">
                              <a href={review1} data-gallery="gallery-0">
                                <img src={review1} alt height={164} />
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href={review2} data-gallery="gallery-0">
                                <img src={review2} alt height={164} />
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href={review3} data-gallery="gallery-0">
                                <img src={review3} alt height={164} />
                              </a>
                            </div>
                          </div>
                          <div className="d-flex">
                            <svg
                              className="svg-inline--fa fa-reply fa-rotate-180 me-2"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="reply"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"
                              />
                            </svg>
                            {/* <span class="fas fa-reply fa-rotate-180 me-2"></span> Font Awesome fontawesome.com */}
                            <div>
                              <h5>
                                Respond from store
                                <span className="text-body-tertiary fs-9 ms-2">
                                  5 mins ago
                                </span>
                              </h5>
                              <p className="text-body-highlight mb-0">
                                Thank you for your valuable feedback
                              </p>
                            </div>
                          </div>
                          <div className="hover-actions top-0">
                            <button className="btn btn-sm btn-phoenix-secondary me-2">
                              <svg
                                className="svg-inline--fa fa-thumbs-up"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="thumbs-up"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                                />
                              </svg>
                              {/* <span class="fas fa-thumbs-up"></span> Font Awesome fontawesome.com */}
                            </button>
                            <button className="btn btn-sm btn-phoenix-secondary me-1">
                              <svg
                                className="svg-inline--fa fa-thumbs-down"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="thumbs-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"
                                />
                              </svg>
                              {/* <span class="fas fa-thumbs-down"></span> Font Awesome fontawesome.com */}
                            </button>
                          </div>
                        </div>
                        <div className="mb-4 hover-actions-trigger btn-reveal-trigger">
                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2">
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning-light"
                                data-bs-theme="light"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                                />
                              </svg>
                              {/* <span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span> Font Awesome fontawesome.com */}
                              <span className="text-body-secondary ms-1">
                                {" "}
                                by
                              </span>{" "}
                              Piere Auguste Renoir
                            </h5>
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <svg
                                  className="svg-inline--fa fa-ellipsis fs-10"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="ellipsis"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                  />
                                </svg>
                                {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                          <p className="text-body-tertiary fs-9 mb-1">
                            23 Oct, 12:09 PM
                          </p>
                          <p className="text-body-highlight mb-1">
                            Since the spring loaded event, I've been wanting an
                            iMac, and it's exceeded my expectations. The screen
                            is clear, the colors are vibrant (I got the blue
                            one! ), and the performance is more than adequate
                            for my needs as a college student. That's how good
                            it is.
                          </p>
                          <div className="hover-actions top-0">
                            <button className="btn btn-sm btn-phoenix-secondary me-2">
                              <svg
                                className="svg-inline--fa fa-thumbs-up"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="thumbs-up"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                                />
                              </svg>
                              {/* <span class="fas fa-thumbs-up"></span> Font Awesome fontawesome.com */}
                            </button>
                            <button className="btn btn-sm btn-phoenix-secondary me-1">
                              <svg
                                className="svg-inline--fa fa-thumbs-down"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="thumbs-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"
                                />
                              </svg>
                              {/* <span class="fas fa-thumbs-down"></span> Font Awesome fontawesome.com */}
                            </button>
                          </div>
                        </div>
                        <div className="mb-4 hover-actions-trigger btn-reveal-trigger">
                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2">
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star-half-stroke star-icon text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star-half-stroke"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"
                                />
                              </svg>
                              {/* <span class="fa fa-star-half-alt star-icon text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning-light"
                                data-bs-theme="light"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                                />
                              </svg>
                              {/* <span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span> Font Awesome fontawesome.com */}
                              <span className="text-body-secondary ms-1">
                                {" "}
                                by
                              </span>{" "}
                              Abel Kablmann{" "}
                            </h5>
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <svg
                                  className="svg-inline--fa fa-ellipsis fs-10"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="ellipsis"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                  />
                                </svg>
                                {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                          <p className="text-body-tertiary fs-9 mb-1">
                            21 Oct, 12:00 PM
                          </p>
                          <p className="text-body-highlight mb-1">
                            Over the years, I've preferred Apple products. My
                            job has allowed me to use Windows products on
                            laptops and PCs. I've owned Windows laptops and
                            desktops for home use in the past and will never use
                            them again.
                          </p>
                          <div className="hover-actions top-0">
                            <button className="btn btn-sm btn-phoenix-secondary me-2">
                              <svg
                                className="svg-inline--fa fa-thumbs-up"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="thumbs-up"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                                />
                              </svg>
                              {/* <span class="fas fa-thumbs-up"></span> Font Awesome fontawesome.com */}
                            </button>
                            <button className="btn btn-sm btn-phoenix-secondary me-1">
                              <svg
                                className="svg-inline--fa fa-thumbs-down"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="thumbs-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"
                                />
                              </svg>
                              {/* <span class="fas fa-thumbs-down"></span> Font Awesome fontawesome.com */}
                            </button>
                          </div>
                        </div>
                        <div className="mb-4 hover-actions-trigger btn-reveal-trigger">
                          <div className="d-flex justify-content-between">
                            <h5 className="mb-2">
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-star text-warning"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                />
                              </svg>
                              {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                              <span className="text-body-secondary ms-1">
                                {" "}
                                by
                              </span>{" "}
                              Pennywise Alfred
                            </h5>
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <svg
                                  className="svg-inline--fa fa-ellipsis fs-10"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="ellipsis"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                  />
                                </svg>
                                {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider" />
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                          <p className="text-body-tertiary fs-9 mb-1">
                            35 mins ago
                          </p>
                          <p className="text-body-highlight mb-3">
                            Nice and beautiful product.
                          </p>
                          <div className="row g-2 mb-2">
                            <div className="col-auto">
                              <a href={review4} data-gallery="gallery-3">
                                <img src={review4} alt height={164} />
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href={review5} data-gallery="gallery-3">
                                <img src={review5} alt height={164} />
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href={review6} data-gallery="gallery-3">
                                <img src={review6} alt height={164} />
                              </a>
                            </div>
                          </div>
                          <div className="hover-actions top-0">
                            <button className="btn btn-sm btn-phoenix-secondary me-2">
                              <svg
                                className="svg-inline--fa fa-thumbs-up"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="thumbs-up"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                                />
                              </svg>
                              {/* <span class="fas fa-thumbs-up"></span> Font Awesome fontawesome.com */}
                            </button>
                            <button className="btn btn-sm btn-phoenix-secondary me-1">
                              <svg
                                className="svg-inline--fa fa-thumbs-down"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="thumbs-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"
                                />
                              </svg>
                              {/* <span class="fas fa-thumbs-down"></span> Font Awesome fontawesome.com */}
                            </button>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <nav>
                            <ul className="pagination mb-0">
                              <li className="page-item">
                                <a className="page-link" href="#!">
                                  <svg
                                    className="svg-inline--fa fa-chevron-left"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="chevron-left"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    data-fa-i2svg
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                    />
                                  </svg>
                                  {/* <span class="fas fa-chevron-left"> </span> Font Awesome fontawesome.com */}
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#!">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#!">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#!">
                                  3
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#!">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#!">
                                  5
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#!">
                                  <svg
                                    className="svg-inline--fa fa-chevron-right"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="chevron-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    data-fa-i2svg
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                    />
                                  </svg>
                                  {/* <span class="fas fa-chevron-right"></span> Font Awesome fontawesome.com */}
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="text-body-emphasis">
                        Usually Bought Together
                      </h5>
                      <div className="w-75">
                        <p className="text-body-tertiary fs-9 fw-bold line-clamp-1">
                          with 24" iMac® with Retina 4.5K display - Apple M1 8GB
                          Memory - 256GB SSD - w/Touch ID (Latest Model) - Blue
                        </p>
                      </div>
                      <div className="border-dashed border-y border-translucent py-4">
                        <div className="d-flex align-items-center mb-5">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked="checked"
                            />
                            <label className="form-check-label" />
                          </div>
                          <a href="product-details.html">
                            {" "}
                            <img
                              className="border border-translucent rounded"
                              src={products1}
                              width={53}
                              alt
                            />
                          </a>
                          <div className="ms-2">
                            <a
                              className="fs-9 fw-bold line-clamp-2 mb-2"
                              href="product-details.html"
                            >
                              {" "}
                              iPhone 13 pro max-Pacific Blue- 128GB
                            </a>
                            <h5>$899.99</h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-5">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked="checked"
                            />
                            <label className="form-check-label" />
                          </div>
                          <a href="product-details.html">
                            {" "}
                            <img
                              className="border border-translucent rounded"
                              src={products2}
                              width={53}
                              alt
                            />
                          </a>
                          <div className="ms-2">
                            <a
                              className="fs-9 fw-bold line-clamp-2 mb-2"
                              href="product-details.html"
                            >
                              Apple AirPods Pro
                            </a>
                            <h5>$59.00</h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-0">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label className="form-check-label" />
                          </div>
                          <a href="product-details.html">
                            {" "}
                            <img
                              className="border border-translucent rounded"
                              src={products3}
                              width={53}
                              alt
                            />
                          </a>
                          <div className="ms-2">
                            <a
                              className="fs-9 fw-bold line-clamp-2 mb-2"
                              href="product-details.html"
                            >
                              Apple Magic Mouse (Wireless, Rechargable) -
                              Silver, Worst mouse ever
                            </a>
                            <h5>$89.00</h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-between pt-3">
                        <div>
                          <h5 className="mb-2 text-body-tertiary text-opacity-85">
                            Total
                          </h5>
                          <h4 className="mb-0 text-body-emphasis">$958.99</h4>
                        </div>
                        <div className="btn btn-outline-warning">
                          Add 3 items to cart
                          <svg
                            className="svg-inline--fa fa-cart-shopping ms-2"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="cart-shopping"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                            />
                          </svg>
                          {/* <span class="fas fa-shopping-cart ms-2"></span> Font Awesome fontawesome.com */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of .container*/}
          </section>
        </section>

        <section className="py-0 mb-9">
          <div className="container">
            <div className="d-flex flex-between-center mb-3">
              <div>
                <h3>Similar Products</h3>
                <p className="mb-0 text-body-tertiary fw-semibold">
                  Essential for a better life
                </p>
              </div>
              <button className="btn btn-sm btn-phoenix-primary">
                View all
              </button>
            </div>
            <div className="swiper-theme-container products-slider">
              <div
                className="swiper theme-slider swiper-initialized swiper-horizontal swiper-backface-hidden"
                data-swiper='{"slidesPerView":1,"spaceBetween":16,"breakpoints":{"450":{"slidesPerView":2,"spaceBetween":16},"768":{"slidesPerView":3,"spaceBetween":16},"992":{"slidesPerView":4,"spaceBetween":16},"1200":{"slidesPerView":5,"spaceBetween":16},"1540":{"slidesPerView":6,"spaceBetween":16}}}'
              >
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-18d1b1cb4c610f964"
                  aria-live="polite"
                >
                  <div
                    className="swiper-slide swiper-slide-active"
                    role="group"
                    aria-label="1 / 7"
                    style={{ width: "217.6px", marginRight: 16 }}
                  >
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button
                              className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Add to wishlist"
                              data-bs-original-title="Add to wishlist"
                            >
                              <svg
                                className="svg-inline--fa fa-heart d-block-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-heart d-none-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                            </button>
                            <img className="img-fluid" src={products4} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              Fitbit Sense Advanced Smartwatch with Tools for
                              Heart Health, Stress Management &amp; Skin
                              Temperature Trends Carbon/Graphite, One Size (S
                              &amp; L Bands)
                            </h6>
                          </a>
                          <p className="fs-9">
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (59 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <div className="d-flex align-items-center mb-1">
                            <p className="me-2 text-body text-decoration-line-through mb-0">
                              $49.99
                            </p>
                            <h3 className="text-body-emphasis mb-0">$34.99</h3>
                          </div>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                            2 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    role="group"
                    aria-label="2 / 7"
                    style={{ width: "217.6px", marginRight: 16 }}
                  >
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button
                              className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Add to wishlist"
                              data-bs-original-title="Add to wishlist"
                            >
                              <svg
                                className="svg-inline--fa fa-heart d-block-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-heart d-none-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                            </button>
                            <img className="img-fluid" src={products5} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              Apple MacBook Pro 13 inch-M1-8/256GB-Space Gray
                            </h6>
                          </a>
                          <p className="fs-9">
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (13 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="fs-9 text-body-highlight fw-bold mb-2">
                            Apple care included
                          </p>
                          <div className="d-flex align-items-center mb-1">
                            <p className="me-2 text-body text-decoration-line-through mb-0">
                              $1299.00
                            </p>
                            <h3 className="text-body-emphasis mb-0">
                              $1149.00
                            </h3>
                          </div>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                            2 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="3 / 7"
                    style={{ width: "217.6px", marginRight: 16 }}
                  >
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button
                              className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Add to wishlist"
                              data-bs-original-title="Add to wishlist"
                            >
                              <svg
                                className="svg-inline--fa fa-heart d-block-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-heart d-none-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                            </button>
                            <img className="img-fluid" src={products6} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming
                              headset
                            </h6>
                          </a>
                          <p className="fs-9">
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (64 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <h3 className="text-body-emphasis">$59.00</h3>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                            1 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="4 / 7"
                    style={{ width: "217.6px", marginRight: 16 }}
                  >
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button
                              className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Add to wishlist"
                              data-bs-original-title="Add to wishlist"
                            >
                              <svg
                                className="svg-inline--fa fa-heart d-block-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-heart d-none-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                            </button>
                            <img className="img-fluid" src={products1} alt />
                            <span className="badge text-bg-success fs-10 product-verified-badge">
                              Verified
                              <svg
                                className="svg-inline--fa fa-check ms-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                />
                              </svg>
                              {/* <span class="fas fa-check ms-1"></span> Font Awesome fontawesome.com */}
                            </span>
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              iPhone 13 pro max-Pacific Blue, 128GB storage
                            </h6>
                          </a>
                          <p className="fs-9">
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (32 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="fs-9 text-body-highlight fw-bold mb-2">
                            Stock limited
                          </p>
                          <div className="d-flex align-items-center mb-1">
                            <p className="me-2 text-body text-decoration-line-through mb-0">
                              $899.99
                            </p>
                            <h3 className="text-body-emphasis mb-0">$855.00</h3>
                          </div>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                            5 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="5 / 7"
                    style={{ width: "217.6px", marginRight: 16 }}
                  >
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button
                              className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Add to wishlist"
                              data-bs-original-title="Add to wishlist"
                            >
                              <svg
                                className="svg-inline--fa fa-heart d-block-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-heart d-none-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                            </button>
                            <img className="img-fluid" src={products2} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              Apple AirPods Pro
                            </h6>
                          </a>
                          <p className="fs-9">
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (39 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="fs-9 text-body-highlight fw-bold mb-1">
                            free with iPhone 5s
                          </p>
                          <p className="fs-9 text-body-tertiary mb-2">
                            Ships to Canada
                          </p>
                          <h3 className="text-body-emphasis">$59.00</h3>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                            3 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="6 / 7"
                    style={{ width: "217.6px", marginRight: 16 }}
                  >
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button
                              className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Add to wishlist"
                              data-bs-original-title="Add to wishlist"
                            >
                              <svg
                                className="svg-inline--fa fa-heart d-block-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-heart d-none-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                            </button>
                            <img className="img-fluid" src={products3} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              Apple Magic Mouse (Wireless, Rechargable) - Silver
                            </h6>
                          </a>
                          <p className="fs-9">
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="fs-9 text-body-highlight fw-bold mb-1">
                            Bundle availabe
                          </p>
                          <p className="fs-9 text-body-tertiary mb-2">
                            Charger not included
                          </p>
                          <h3 className="text-body-emphasis">$89.00</h3>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                            2 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="7 / 7"
                    style={{ width: "217.6px", marginRight: 16 }}
                  >
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button
                              className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Add to wishlist"
                              data-bs-original-title="Add to wishlist"
                            >
                              <svg
                                className="svg-inline--fa fa-heart d-block-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                              <svg
                                className="svg-inline--fa fa-heart d-none-hover"
                                data-fa-transform="down-1"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="heart"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg
                                style={{ transformOrigin: "0.5em 0.5625em" }}
                              >
                                <g transform="translate(256 256)">
                                  <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                    <path
                                      fill="currentColor"
                                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                      transform="translate(-256 -256)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              {/* <span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                            </button>
                            <img className="img-fluid" src={products7} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              PlayStation 5 DualSense Wireless Controller
                            </h6>
                          </a>
                          <p className="fs-9">
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <svg
                              className="svg-inline--fa fa-star text-warning"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="star"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              data-fa-i2svg
                            >
                              <path
                                fill="currentColor"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                              />
                            </svg>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (67 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <div className="d-flex align-items-center mb-1">
                            <p className="me-2 text-body text-decoration-line-through mb-0">
                              $125.00
                            </p>
                            <h3 className="text-body-emphasis mb-0">$89.00</h3>
                          </div>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                            2 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                />
              </div>
              <div className="swiper-nav">
                <div
                  className="swiper-button-next"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-18d1b1cb4c610f964"
                  aria-disabled="false"
                >
                  <svg
                    className="svg-inline--fa fa-chevron-right nav-icon"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    />
                  </svg>
                  {/* <span class="fas fa-chevron-right nav-icon"></span> Font Awesome fontawesome.com */}
                </div>
                <div
                  className="swiper-button-prev swiper-button-disabled"
                  tabIndex={-1}
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-18d1b1cb4c610f964"
                  aria-disabled="true"
                >
                  <svg
                    className="svg-inline--fa fa-chevron-left nav-icon"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                    />
                  </svg>
                  {/* <span class="fas fa-chevron-left nav-icon"></span> Font Awesome fontawesome.com */}
                </div>
              </div>
            </div>
          </div>
          {/* end of .container*/}
        </section>
      </div>
    </>
  );
};
export default ProductDetails;
