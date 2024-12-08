import React, { useState, useEffect } from "react";

// Import ảnh
import whoopingBannerProduct from "../../../assets/img/e-commerce/whooping_banner_product.png";
import whoopingBannerShape from "../../../assets/img/e-commerce/whooping_banner_shape_2.png";
import giftItemsBannerBg from "../../../assets/img/e-commerce/gift-items-banner-bg.png";
import bestInMarketBg from "../../../assets/img/e-commerce/best-in-market-bg.png";
import productImage from "../../../assets/img/e-commerce/5.png";
import product1 from "../../../assets/img/products/1.png";
import product2 from "../../../assets/img/products/2.png";
import product3 from "../../../assets/img/products/3.png";
import product4 from "../../../assets/img/products/4.png";
import product5 from "../../../assets/img/products/5.png";
import product7 from "../../../assets/img/products/7.png";
import product8 from "../../../assets/img/products/8.png";
import product10 from "../../../assets/img/products/10.png";
import product18 from "../../../assets/img/products/18.png";
import product12 from "../../../assets/img/products/12.png";
import product16 from "../../../assets/img/products/16.png";
import product17 from "../../../assets/img/products/17.png";
import product24 from "../../../assets/img/products/24.png";
import product25 from "../../../assets/img/products/25.png";
import product26 from "../../../assets/img/products/26.png";
import product27 from "../../../assets/img/products/27.png";
import ecommerce from "../../../assets/img/e-commerce/4.png";
import illustrations from "../../../assets/img/spot-illustrations/light_30.png";
import illustrations1 from "../../../assets/img/spot-illustrations/dark_30.png";

const HomeClient = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gọi API và lấy dữ liệu
    fetch("http://127.0.0.1:8000/api/sale-san-pham/get-sale")
      .then((response) => response.json())
      .then((data) => {
        // Thêm thời gian còn lại vào mỗi sản phẩm
        const updatedProducts = data.data.map((product) => {
          const endTime = new Date(product.ngay_ket_thuc_sale).getTime();
          const now = new Date().getTime();
          return {
            ...product,
            timeRemaining: endTime - now,
          };
        });
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProducts((prevProducts) =>
        prevProducts.map((product) => {
          if (product.timeRemaining > 0) {
            return {
              ...product,
              timeRemaining: product.timeRemaining - 1000,
            };
          }
          return product; // Giữ nguyên nếu hết thời gian
        })
      );
    }, 1000);

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const numberFormat = new Intl.NumberFormat("vi-VN", {
    style: "decimal", // Sử dụng kiểu "decimal" thay vì "currency"
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div>
      <section className="py-0 mt-5">
        <div className="container-small">
          <div className="scrollbar">
            <div className="d-flex justify-content-between">
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="bg-warning-subtle icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-warning"
                  >
                    <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Deals</p>
              </a>
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Grocery</p>
              </a>
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17,8.61,16,2.84A1,1,0,0,0,15,2H9a1,1,0,0,0-1,.84l-1,5.77a6,6,0,0,0,0,6.78l1,5.77A1,1,0,0,0,9,22h6a1,1,0,0,0,1-.84l1-5.77a6,6,0,0,0,0-6.78ZM9.85,4h4.3l.44,2.59a6,6,0,0,0-5.18,0Zm4.3,16H9.85l-.44-2.59a6,6,0,0,0,5.18,0ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Fashion</p>
              </a>
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.71,16.29l-.15-.12a.76.76,0,0,0-.18-.09L12.2,16a1,1,0,0,0-.91.27,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,1.3,1.31,1.46,1.46,0,0,0,.33-.22,1,1,0,0,0,.21-1.09A1,1,0,0,0,12.71,16.29ZM16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Mobile</p>
              </a>
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H7.64l-.58,1a2,2,0,0,0,0,2,2,2,0,0,0,1.75,1h6.46A2,2,0,0,0,17,21a2,2,0,0,0,0-2l-.59-1H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM8.77,20,10,18H14l1.2,2ZM20,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14H20Zm0-3H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Electronics</p>
              </a>
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Home</p>
              </a>
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18,2.78A1,1,0,0,0,17,2H7a1,1,0,0,0-1,.78l-2,9a1,1,0,0,0,.2.85A1,1,0,0,0,5,13H8.94A8.26,8.26,0,0,1,9,14a8.92,8.92,0,0,1-2.57,6.3A1,1,0,0,0,7.14,22h9.72a1,1,0,0,0,.71-1.7A8.92,8.92,0,0,1,15,14a8.26,8.26,0,0,1,.06-1H16v2a1,1,0,0,0,2,0V13h1a1,1,0,0,0,.78-.37,1,1,0,0,0,.2-.85ZM9.22,20A10.9,10.9,0,0,0,11,14c0-.33,0-.67-.05-1h2.1c0,.33-.05.67-.05,1a10.9,10.9,0,0,0,1.78,6Zm-3-9L7.8,4h8.4l1.55,7Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Dining</p>
              </a>
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18,7h-.35A3.45,3.45,0,0,0,18,5.5a3.49,3.49,0,0,0-6-2.44A3.49,3.49,0,0,0,6,5.5,3.45,3.45,0,0,0,6.35,7H6a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1H5v6a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V13h1a1,1,0,0,0,1-1V10A3,3,0,0,0,18,7ZM11,20H8a1,1,0,0,1-1-1V13h4Zm0-9H5V10A1,1,0,0,1,6,9h5Zm0-4H9.5A1.5,1.5,0,1,1,11,5.5Zm2-1.5A1.5,1.5,0,1,1,14.5,7H13ZM17,19a1,1,0,0,1-1,1H13V13h4Zm2-8H13V9h5a1,1,0,0,1,1,1Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Gifts</p>
              </a>
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.71,15.58l-4.52-4.51a6.85,6.85,0,0,0,.14-1.4A7.67,7.67,0,0,0,6.42,2.72a1,1,0,0,0-.57.74,1,1,0,0,0,.28.88l4.35,4.34-1.8,1.8L4.34,6.13a1,1,0,0,0-.88-.27,1,1,0,0,0-.74.56,7.67,7.67,0,0,0,7,10.91,6.85,6.85,0,0,0,1.4-.14l4.51,4.52a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4.9-4.9a1,1,0,0,0-.95-.26,5.88,5.88,0,0,1-1.48.2A5.67,5.67,0,0,1,4,9.67a6,6,0,0,1,.08-1L8,12.6a1,1,0,0,0,1.42,0L12.6,9.39A1,1,0,0,0,12.6,8L8.71,4.08a6.12,6.12,0,0,1,1-.08,5.67,5.67,0,0,1,5.66,5.67,5.88,5.88,0,0,1-.2,1.48,1,1,0,0,0,.26.95l4.9,4.9a1,1,0,0,0,1.42-1.42Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Tools</p>
              </a>
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22,5.08A3.08,3.08,0,0,0,16.74,2.9L13.93,5.71,7.44,3.55a1,1,0,0,0-1,.24L4.06,6.15a1,1,0,0,0,.29,1.61l5.18,2.35-2.6,2.6-1.71-.86A1,1,0,0,0,4.06,12L2.29,13.81a1,1,0,0,0,0,1.41l6.49,6.49a1,1,0,0,0,1.41,0L12,19.94a1,1,0,0,0,.19-1.16l-.86-1.71,2.6-2.6,2.35,5.18a1,1,0,0,0,1.61.29l2.36-2.36a1,1,0,0,0,.24-1l-2.16-6.49L21.1,7.26A3.05,3.05,0,0,0,22,5.08Zm-2.32.77L16.44,9.09a1,1,0,0,0-.24,1l2.16,6.48-.9.9-2.35-5.17a1,1,0,0,0-.73-.57,1,1,0,0,0-.89.28L9.37,16.17a1,1,0,0,0-.19,1.15L10,19l-.56.56L4.41,14.52,5,14l1.71.86a1,1,0,0,0,1.15-.19L12,10.51a1,1,0,0,0-.29-1.62L6.5,6.54l.9-.9L13.88,7.8a1,1,0,0,0,1-.24l3.24-3.24a1.07,1.07,0,0,1,1.53,0,1,1,0,0,1,.32.76A1.06,1.06,0,0,1,19.68,5.85Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Travel</p>
              </a>
              <a
                className="icon-nav-item mb-3"
                href="/apps/e-commerce/customer/homepage#!"
              >
                <div className="icon-container mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={39}
                    height={39}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.42,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,7.42,15.54Zm0-8.49a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,7.42,7.05Zm4.95,10a1,1,0,1,0,1,1A1,1,0,0,0,12.37,17Zm-6-6a1,1,0,1,0,1,1A1,1,0,0,0,6.37,11Zm6-6a1,1,0,1,0,1,1A1,1,0,0,0,12.37,5Zm3.54,2.05a1,1,0,1,0,1.41,0A1,1,0,0,0,15.91,7.05Zm6.3,0a11,11,0,1,0-7.85,15.74,3.87,3.87,0,0,0,2.5-1.65A4.2,4.2,0,0,0,17.47,18a5.65,5.65,0,0,1-.1-1,5,5,0,0,1,3-4.56,3.84,3.84,0,0,0,2.06-2.25A4,4,0,0,0,22.21,7.08Zm-1.7,2.44a1.9,1.9,0,0,1-1,1.09A7,7,0,0,0,15.37,17a7.3,7.3,0,0,0,.14,1.4,2.16,2.16,0,0,1-.31,1.65,1.79,1.79,0,0,1-1.21.8,8.72,8.72,0,0,1-1.62.15,9,9,0,0,1-9-9.28A9.05,9.05,0,0,1,11.85,3h.51a9,9,0,0,1,8.06,5A2,2,0,0,1,20.51,9.52ZM12.37,11a1,1,0,1,0,1,1A1,1,0,0,0,12.37,11Z"></path>
                  </svg>
                </div>
                <p className="nav-label mb-0">Others</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0 px-xl-3">
        <div className="container px-xl-0 px-xxl-3">
          <div className="row g-3 mb-9">
            <div className="col-12">
              <div className="whooping-banner w-100 rounded-3 overflow-hidden">
                <div
                  className="bg-holder z-n1 product-bg"
                  style={{
                    backgroundImage: `url(${whoopingBannerProduct})`,
                    backgroundPosition: "bottom right",
                  }}
                ></div>
                <div
                  className="bg-holder z-n1 shape-bg"
                  style={{
                    backgroundImage: `url(${whoopingBannerShape})`,
                    backgroundPosition: "bottom left",
                  }}
                ></div>
                <div className="banner-text" data-bs-theme="light">
                  <h2 className="text-warning-light fw-bolder fs-lg-3 fs-xxl-2">
                    Whooping <span className="gradient-text">60%</span> Off
                  </h2>
                  <h3 className="fw-bolder fs-lg-5 fs-xxl-3 text-white">
                    on everyday items
                  </h3>
                </div>
                <a
                  className="btn btn-lg btn-primary rounded-pill banner-button"
                  href="#!"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="gift-items-banner w-100 rounded-3 overflow-hidden">
                <div
                  className="bg-holder z-n1 banner-bg"
                  style={{ backgroundImage: `url(${giftItemsBannerBg})` }}
                />
                <div className="banner-text text-md-center">
                  <h2 className="text-white fw-bolder fs-xl-4">
                    Get <span className="gradient-text">10% Off </span>
                    <br className="d-md-none" /> on gift items
                  </h2>
                  <a
                    className="btn btn-lg btn-primary rounded-pill banner-button"
                    href="#!"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="best-in-market-banner d-flex h-100 px-4 px-sm-7 py-5 px-md-11 rounded-3 overflow-hidden">
                <div
                  className="bg-holder z-n1 banner-bg"
                  style={{ backgroundImage: `url(${bestInMarketBg})` }}
                />
                <div className="row align-items-center w-sm-100">
                  <div className="col-8">
                    <div className="banner-text">
                      <h2 className="text-white fw-bolder fs-sm-4 mb-5">
                        MI 11 Pro
                        <br />
                        <span className="fs-7 fs-sm-6">
                          {" "}
                          Best in the market
                        </span>
                      </h2>
                      <a
                        className="btn btn-lg btn-warning rounded-pill banner-button"
                        href="#!"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <img
                      className="w-100 w-sm-75"
                      src={productImage}
                      alt="Product"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mb-6">
            <div className="col-12 col-lg-9 col-xxl-10">
              <div className="d-flex flex-between-center mb-3">
                <div className="d-flex">
                  <svg
                    className="svg-inline--fa fa-bolt text-warning fs-6"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bolt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
                    />
                  </svg>
                  {/* <span class="fas fa-bolt text-warning fs-6"></span> Font Awesome fontawesome.com */}
                  <h3 className="mx-2">Top Deals today</h3>
                  <svg
                    className="svg-inline--fa fa-bolt text-warning fs-6"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bolt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
                    />
                  </svg>
                  {/* <span class="fas fa-bolt text-warning fs-6"></span> Font Awesome fontawesome.com */}
                </div>
                <a
                  className="btn btn-link btn-lg p-0 d-none d-md-block"
                  href="#!"
                >
                  Explore more
                  <svg
                    className="svg-inline--fa fa-chevron-right fs-9 ms-1"
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
                  {/* <span class="fas fa-chevron-right fs-9 ms-1"></span> Font Awesome fontawesome.com */}
                </a>
              </div>
              <div className="swiper-theme-container products-slider">
                <div
                  className="swiper theme-slider swiper-initialized swiper-horizontal swiper-backface-hidden"
                  data-swiper='{"slidesPerView":4,"spaceBetween":16,"breakpoints":{"450":{"slidesPerView":2,"spaceBetween":16},"768":{"slidesPerView":3,"spaceBetween":20},"1200":{"slidesPerView":4,"spaceBetween":16},"1540":{"slidesPerView":5,"spaceBetween":16}}}'
                >
                  <div className="swiper-wrapper">
                    {products.slice(0, 4).map(
                      (
                        product // Hiển thị 4 sản phẩm đầu tiên
                      ) => (
                        <div
                          className="swiper-slide swiper-slide-prev"
                          role="group"
                          aria-label="2 / 6"
                          style={{ width: "208.5px", marginRight: 16 }}
                          key={product.id}
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
                                  >
                                    <svg
                                      className="svg-inline--fa fa-heart"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="heart"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                      />
                                    </svg>
                                  </button>
                                  <img
                                    className="img-fluid"
                                    src={product.san_pham.duong_dan_anh}
                                    alt={product.san_pham.ten_san_pham}
                                  />
                                  <span className="badge text-bg-success fs-10 product-verified-badge">
                                    -{parseFloat(product.sale_theo_phan_tram)}%
                                  </span>
                                </div>
                                <a
                                  className="stretched-link"
                                  href="product-details.html"
                                >
                                  <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                                    {product.san_pham.ten_san_pham}
                                  </h6>
                                </a>
                                <p className="fs-9">
                                  <span className="fa fa-star text-warning"></span>
                                  <span
                                    className="fa-regular fa-star text-warning-light"
                                    data-bs-theme="light"
                                  ></span>
                                  <span
                                    className="fa-regular fa-star text-warning-light"
                                    data-bs-theme="light"
                                  ></span>
                                  <span
                                    className="fa-regular fa-star text-warning-light"
                                    data-bs-theme="light"
                                  ></span>
                                  <span
                                    className="fa-regular fa-star text-warning-light"
                                    data-bs-theme="light"
                                  ></span>
                                  <span className="text-body-quaternary fw-semibold ms-1">
                                    (6 people rated)
                                  </span>
                                </p>
                              </div>
                              <div>
                                <div className="align-items-center mb-1">
                                  <h4 className="text-danger">
                                    {numberFormat.format(
                                      parseFloat(product.san_pham.gia) *
                                        (1 - product.sale_theo_phan_tram / 100)
                                    )}{" "}
                                    VNĐ
                                  </h4>
                                  <p
                                    className="me-2 text-decoration-line-through mb-0"
                                    style={{
                                      color: "#98a2b3",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {numberFormat.format(
                                      parseFloat(product.san_pham.gia)
                                    )}{" "}
                                    VNĐ
                                  </p>
                                </div>
                                <p className="text-success fw-bold fs-9 lh-1 mb-0">
                                  Deal time ends in{" "}
                                  {formatTime(product.timeRemaining)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <a className="fw-bold d-md-none px-0" href="#!">
                Explore more
                <svg
                  className="svg-inline--fa fa-chevron-right fs-9 ms-1"
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
                {/* <span class="fas fa-chevron-right fs-9 ms-1"></span> Font Awesome fontawesome.com */}
              </a>
            </div>
            <div className="col-lg-3 d-none d-lg-block col-xxl-2">
              <div className="h-100 position-relative rounded-3 overflow-hidden">
                <div
                  className="bg-holder"
                  style={{ backgroundImage: `url(${ecommerce})` }}
                />
                {/*/.bg-holder*/}
              </div>
            </div>
            <div className="col-12 d-lg-none">
              <a href="#!">
                <img
                  className="w-100 rounded-3"
                  src="../../../assets/img/e-commerce/6.png"
                  alt
                />
              </a>
            </div>
          </div>
          <div className="mb-6">
            <div className="d-flex flex-between-center mb-3">
              <h3>Top Electronics</h3>
              <a className="fw-bold d-none d-md-block" href="#!">
                Explore more
                <svg
                  className="svg-inline--fa fa-chevron-right fs-9 ms-1"
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
                {/* <span class="fas fa-chevron-right fs-9 ms-1"></span> Font Awesome fontawesome.com */}
              </a>
            </div>
            <div className="swiper-theme-container products-slider">
              <div
                className="swiper theme-slider swiper-initialized swiper-horizontal swiper-backface-hidden"
                data-swiper='{"slidesPerView":1,"spaceBetween":16,"breakpoints":{"450":{"slidesPerView":2,"spaceBetween":16},"576":{"slidesPerView":3,"spaceBetween":20},"768":{"slidesPerView":4,"spaceBetween":20},"992":{"slidesPerView":5,"spaceBetween":20},"1200":{"slidesPerView":6,"spaceBetween":16}}}'
              >
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-6853887aa6f7a4f2"
                  aria-live="polite"
                >
                  <div
                    className="swiper-slide swiper-slide-active"
                    role="group"
                    aria-label="1 / 7"
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product5} alt />
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
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (59 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <h3 className="text-body-emphasis">$59.00</h3>
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
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product7} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) -
                              Space Gray
                            </h6>
                          </a>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (13 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <h3 className="text-body-emphasis">$799.00</h3>
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
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product12} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              HORI Racing Wheel Apex for PlayStation 4/3, and PC
                            </h6>
                          </a>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (64 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="fs-9 text-body-highlight fs-9 mb-0 fw-bold">
                            Leather cover add-on available
                          </p>
                          <p className="fs-9 text-body-tertiary fs-9 mb-2">
                            supports Windows 11
                          </p>
                          <h3 className="text-body-emphasis">$299.00</h3>
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
                    style={{ width: 184, marginRight: 16 }}
                  >
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button
                              className="btn btn-wish btn-wish-primary z-2 d-toggle-container active"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              aria-label="Remove from wishlist"
                              data-bs-original-title="Remove from wishlist"
                            >
                              <svg
                                className="svg-inline--fa fa-heart"
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
                              {/* <span class="fas fa-heart" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                            </button>
                            <img className="img-fluid" src={product1} alt />
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
                              Amazfit T-Rex Pro Smart Watch with GPS, Outdoor
                              Fitness Watch for Men, Military Standard Certified
                            </h6>
                          </a>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (32 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <h3 className="text-body-emphasis">$20.00</h3>
                          <p className="text-success fw-bold fs-9 lh-1 mb-0">
                            Deal time ends in 24 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="5 / 7"
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product16} alt />
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
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (39 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="fs-9 text-body-highlight fs-9 mb-0 fw-bold">
                            Free with iPhone 5s
                          </p>
                          <p className="fs-9 text-body-tertiary fs-9 mb-2">
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
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product10} alt />
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
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="fs-9 text-body-highlight fs-9 mb-0 fw-bold">
                            Bundle available
                          </p>
                          <p className="fs-9 text-body-tertiary fs-9 mb-2">
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
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product8} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              Amazon Basics Matte Black Wired Keyboard - US
                              Layout (QWERTY)
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
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (7 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <h3 className="text-body-emphasis">$98.00</h3>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                            1 colors
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
                  aria-controls="swiper-wrapper-6853887aa6f7a4f2"
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
                  aria-controls="swiper-wrapper-6853887aa6f7a4f2"
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
            <a className="fw-bold d-md-none" href="#!">
              Explore more
              <svg
                className="svg-inline--fa fa-chevron-right fs-9 ms-1"
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
              {/* <span class="fas fa-chevron-right fs-9 ms-1"></span> Font Awesome fontawesome.com */}
            </a>
          </div>
          <div className="mb-6">
            <div className="d-flex flex-between-center mb-3">
              <h3>Best Sellers</h3>
              <a className="fw-bold d-none d-md-block" href="#!">
                Explore more
                <svg
                  className="svg-inline--fa fa-chevron-right fs-9 ms-1"
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
                {/* <span class="fas fa-chevron-right fs-9 ms-1"></span> Font Awesome fontawesome.com */}
              </a>
            </div>
            <div className="swiper-theme-container products-slider">
              <div
                className="swiper theme-slider swiper-initialized swiper-horizontal swiper-backface-hidden"
                data-swiper='{"slidesPerView":1,"spaceBetween":16,"breakpoints":{"450":{"slidesPerView":2,"spaceBetween":16},"576":{"slidesPerView":3,"spaceBetween":20},"768":{"slidesPerView":4,"spaceBetween":20},"992":{"slidesPerView":5,"spaceBetween":20},"1200":{"slidesPerView":6,"spaceBetween":16}}}'
              >
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-8d218cf75451129a"
                  aria-live="polite"
                >
                  <div
                    className="swiper-slide swiper-slide-active"
                    role="group"
                    aria-label="1 / 7"
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product25} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              RESPAWN 200 Racing Style Gaming Chair, in Gray RSP
                              200 GRY
                            </h6>
                          </a>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">35% off</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    role="group"
                    aria-label="2 / 7"
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product27} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              LEVOIT Humidifiers for Bedroom Large Room 6L Warm
                              and Cool Mist for...
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
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">18% off</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="3 / 7"
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product26} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              NETGEAR Nighthawk Pro Gaming XR500 Wi-Fi Router
                              with 4 Ethernet Ports...
                            </h6>
                          </a>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">15% off</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="4 / 7"
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product18} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              Rachael Ray Cucina Bakeware Set Includes Nonstick
                              Bread Baking Cookie Sheet...
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
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">20% off</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="5 / 7"
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product17} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              Xbox Series S
                            </h6>
                          </a>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">12% off</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="6 / 7"
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product24} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              FURINNO Computer Writing Desk, Walnut
                            </h6>
                          </a>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span className="text-body-quaternary fw-semibold ms-1">
                              (6 people rated)
                            </span>
                            {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">16% off</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="7 / 7"
                    style={{ width: 184, marginRight: 16 }}
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
                            <img className="img-fluid" src={product18} alt />
                          </div>
                          <a
                            className="stretched-link"
                            href="product-details.html"
                          >
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                              Seagate Portable 2TB External Hard Drive Portable
                              HDD
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
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">15% off</h6>
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
                  aria-controls="swiper-wrapper-8d218cf75451129a"
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
                  aria-controls="swiper-wrapper-8d218cf75451129a"
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
            <a className="fw-bold d-md-none" href="#!">
              Explore more
              <svg
                className="svg-inline--fa fa-chevron-right fs-9 ms-1"
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
              {/* <span class="fas fa-chevron-right fs-9 ms-1"></span> Font Awesome fontawesome.com */}
            </a>
          </div>
          <div className="row flex-center mb-15 mt-11 gy-6">
            <div className="col-auto">
              <img
                className="d-dark-none"
                src={illustrations}
                alt
                width={305}
              />
              <img
                className="d-light-none"
                src={illustrations1}
                alt
                width={305}
              />
            </div>
            <div className="col-auto">
              <div className="text-center text-lg-start">
                <h3 className="text-body-highlight mb-2">
                  <span className="fw-semibold">Want to have the </span>ultimate{" "}
                  <br className="d-md-none" />
                  customer experience?
                </h3>
                <h1 className="display-3 fw-semibold mb-4">
                  Become a{" "}
                  <span className="text-primary fw-bolder">member</span>today!
                </h1>
                <a className="btn btn-lg btn-primary px-7" href="dang-ky">
                  Sign up
                  <svg
                    className="svg-inline--fa fa-chevron-right ms-2 fs-9"
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
                  {/* <span class="fas fa-chevron-right ms-2 fs-9"></span> Font Awesome fontawesome.com */}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </div>
  );
};
export default HomeClient;
