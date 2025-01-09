import { useState, useEffect } from "react";
import axios from "axios";

// Import ảnh
import whoopingBannerProduct from "../../../assets/img/e-commerce/whooping_banner_product.png";
import whoopingBannerShape from "../../../assets/img/e-commerce/whooping_banner_shape_2.png";
import giftItemsBannerBg from "../../../assets/img/e-commerce/gift-items-banner-bg.png";
import bestInMarketBg from "../../../assets/img/e-commerce/best-in-market-bg.png";
import productImage from "../../../assets/img/e-commerce/5.png";

import ecommerce from "../../../assets/img/e-commerce/4.png";
import illustrations from "../../../assets/img/spot-illustrations/light_30.png";
import illustrations1 from "../../../assets/img/spot-illustrations/dark_30.png";

const HomeClient = () => {
  const baseUrl = "http://127.0.0.1:8000/storage/";
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Chỉ số sản phẩm hiển thị
  const [isFirstSlide, setIsFirstSlide] = useState(true); // Trạng thái của nút Previous
  const [isLastSlide, setIsLastSlide] = useState(false); // Trạng thái của nút Next

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Gọi API và lấy dữ liệu
    fetch("http://127.0.0.1:8000/api/sale-san-pham/get-sale")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data?.data) {
          // Thêm thời gian còn lại vào mỗi sản phẩm và xử lý đường dẫn ảnh
          const updatedProducts = data.data.map((product) => {
            const endTime = new Date(product.ngay_ket_thuc_sale).getTime();
            const now = new Date().getTime();
            return {
              ...product,
              timeRemaining: endTime - now,
              imageUrl: `${baseUrl}${product.duong_dan_anh}`, // Tạo URL hoàn chỉnh
            };
          });
          console.log(data.data);
          setProducts(updatedProducts);
        } else {
          console.error("Dữ liệu API không hợp lệ:", data);
        }
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

  useEffect(() => {
    // Lấy dữ liệu sản phẩm bán chạy nhất từ API
    axios
      .get("http://localhost:8000/api/san-pham/getBestSellingProduct")
      .then((response) => {
        // Giả sử dữ liệu trả về là một mảng sản phẩm
        setBestProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleNextClick = () => {
    if (currentIndex < bestProducts.length - 6) {
      // Tăng 1 sản phẩm vào cuối danh sách hiển thị
      setCurrentIndex(currentIndex + 1);

      setIsFirstSlide(false); // Đảm bảo nút "Previous" hoạt động

      if (currentIndex + 1 === bestProducts.length - 6) {
        setIsLastSlide(true); // Đến sản phẩm cuối cùng
      }
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      // Giảm 1 sản phẩm từ cuối danh sách hiển thị
      setCurrentIndex(currentIndex - 1);

      setIsLastSlide(false); // Đảm bảo nút "Next" hoạt động

      if (currentIndex - 1 === 0) {
        setIsFirstSlide(true); // Đến sản phẩm đầu tiên
      }
    }
  };

  // Fetch data from the API
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/danh-muc-con/getAll")
      .then((response) => {
        setCategories(response.data); // Assuming the API response returns an array of categories
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  return (
    <div>
      <section className="py-0 mt-5">
        <div className="container-small">
          <div
            className="scrollbar"
            style={{
              overflow: "hidden", // Ẩn các mục trượt ra khỏi viewport
              position: "relative", // Đặt vị trí cố định
              whiteSpace: "nowrap", // Giữ các mục hiển thị trên cùng một hàng
            }}
          >
            <div
              className="d-flex justify-content-between"
              style={{
                display: "flex",
                animation: "marquee 40s linear infinite", // Điều khiển chuyển động
              }}
            >
              {[...categories, ...categories].map((category, index) => (
                <div
                  className="d-flex flex-column justify-content-center align-items-center mb-3 category-item"
                  style={{
                    flex: "1",
                    maxWidth: "calc(10% - 50px)", // Kích thước mỗi danh mục
                    margin: "0 30px", // Khoảng cách giữa các danh mục
                  }}
                  key={index}
                >
                  <a
                    className="icon-nav-item d-flex flex-column justify-content-center align-items-center"
                    href={`/cua-hang?danh-muc-con=${category.id}`}
                  >
                    <div className="icon-container mb-2">
                      <img
                        src={`${baseUrl}${category.img}`}
                        alt={category.ten_danh_muc_con}
                        width={50}
                        height={50}
                      />
                    </div>
                    <p className="nav-label mb-0 text-center">
                      {category.ten_danh_muc_con}
                    </p>
                  </a>
                </div>
              ))}
            </div>

            {/* CSS Keyframes */}
            <style>
              {`
      @keyframes marquee {
        0% {
          transform: translateX(0); /* Bắt đầu */
        }
        100% {
          transform: translateX(-100%); /* Trượt ra ngoài màn hình */
        }
      }
    `}
            </style>
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
                  <h3 className="mx-2">Sản phẩm giảm giá</h3>
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
                    {products.slice(0, 4).map((product) => (
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
                                  style={{
                                    padding: "10px", // Tạo khoảng cách bên trong để ảnh nhỏ hơn viền
                                  }}
                                  src={
                                    product.san_pham?.duong_dan_anh
                                      ? `${baseUrl}${product.san_pham.duong_dan_anh}`
                                      : "default-image.jpg"
                                  }
                                  alt={
                                    product.san_pham?.ten_san_pham || "Sản phẩm"
                                  }
                                />

                                <span
                                  style={{
                                    position: "absolute",
                                    overflow: "hidden",
                                    width: "85px",
                                    height: "85px",
                                    left: "-15px", // Đẩy sang trái toàn bộ `span`
                                  }}
                                >
                                  <div
                                    style={{
                                      fontSize: "11px",
                                      position: "relative",
                                      top: "15px", // Căn chỉnh chiều dọc
                                      left: "-20px", // Đẩy thành phần nội dung thêm sang trái
                                      width: "120px",
                                      height: "20px", // Chiều cao nội dung
                                      lineHeight: "20px", // Giữ văn bản căn giữa theo chiều dọc
                                      color: "#fff",
                                      textAlign: "center",
                                      backgroundColor: "#ff3100", // Màu nền cho giảm giá
                                      textTransform: "uppercase",
                                      zIndex: 2,
                                      fontWeight: "700",
                                      transform: "rotate(-45deg)", // Tạo hiệu ứng nghiêng
                                    }}
                                  >
                                    {parseFloat(product.sale_theo_phan_tram)}%
                                  </div>
                                </span>
                              </div>
                              <a
                                className="stretched-link"
                                href={`/chi-tiet-san-pham?id=${product.san_pham?.id}`}
                              >
                                <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                                  {product.san_pham.ten_san_pham}
                                </h6>
                              </a>
                              {bestProducts.map((product) => (
                                <div key={product.id}>
                                  {/* Hiển thị đánh giá sản phẩm nếu có người đánh giá */}
                                  {product.tong_khach_hang_danh_gia > 0 && (
                                    <p className="fs-9">
                                      {Array.from({
                                        length: Math.floor(product.trung_binh_sao),
                                      }).map((_, index) => (
                                        <span
                                          key={index}
                                          className="fa fa-star text-warning"
                                        ></span>
                                      ))}
                                      {product.trung_binh_sao % 1 !== 0 && (
                                        <span className="fa fa-star-half-alt star-icon text-warning"></span> // Hiển thị nửa sao nếu trung_binh_sao là số thập phân
                                      )}
                                      {Array.from({
                                        length: 5 - Math.ceil(product.trung_binh_sao),
                                      }).map((_, index) => (
                                        <span
                                          key={index}
                                          className="fa-regular fa-star text-warning-light"
                                          data-bs-theme="light"
                                        ></span>
                                      ))}
                                      <span className="text-body-quaternary fw-semibold ms-1">
                                        ({product.tong_khach_hang_danh_gia}{" "}
                                        người đánh giá)
                                      </span>
                                    </p>
                                  )}
                                </div>
                              ))}
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
                    ))}
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
              <h3>Sản phẩm bán chạy</h3>
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
                  {bestProducts
                    .slice(currentIndex, currentIndex + 6)
                    .map((product) => (
                      <div
                        key={product.id}
                        className="swiper-slide"
                        role="group"
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
                                    style={{
                                      transformOrigin: "0.5em 0.5625em",
                                    }}
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
                                    style={{
                                      transformOrigin: "0.5em 0.5625em",
                                    }}
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
                                <img
                                  className="img-fluid"
                                  src={`${baseUrl}${product.duong_dan_anh}`}
                                  alt={product.ten_san_pham}
                                />
                              </div>
                              <a
                                className="stretched-link"
                                href={`/chi-tiet-san-pham?id=${product?.id}`}
                              >
                                <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                                  {product.ten_san_pham}
                                </h6>
                              </a>
                              <p className="fs-9">
                                {/* Render các sao đầy đủ */}
                                {Array.from({
                                  length: Math.floor(product.trung_binh_sao),
                                }).map((_, index) => (
                                  <svg
                                    key={`full-star-${index}`}
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
                                ))}

                                {/* Render sao nửa nếu trung_binh_sao có phần thập phân */}
                                {product.trung_binh_sao % 1 !== 0 && (
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
                                )}

                                {/* Render sao trống cho phần còn lại */}
                                {Array.from({
                                  length: 5 - Math.ceil(product.trung_binh_sao),
                                }).map((_, index) => (
                                  <svg
                                    key={`empty-star-${index}`}
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
                                ))}

                                {product.tong_khach_hang_danh_gia > 0 && (
                                  <span className="text-body-quaternary fw-semibold ms-1">
                                    ({product.tong_khach_hang_danh_gia} người
                                    đánh giá)
                                  </span>
                                )}
                              </p>
                            </div>
                            <h5 className="text-danger">
                              {numberFormat.format(
                                parseFloat(product.gia) *
                                  (1 - product.sale_percentage / 100)
                              )}{" "}
                              VNĐ
                            </h5>
                            <div className="mt-1">
                              {product.sale_percentage > 0 && (
                                <h6 className="text-success lh-1 mb-0">
                                  Giảm giá {parseFloat(product.sale_percentage)}
                                  %
                                </h6>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                />
              </div>
              <div className="swiper-nav">
                <div
                  className={`swiper-button-next ${
                    isLastSlide ? "swiper-button-disabled" : ""
                  }`}
                  onClick={handleNextClick}
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                  aria-disabled={isLastSlide}
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
                  >
                    <path
                      fill="currentColor"
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    />
                  </svg>
                </div>

                <div
                  className={`swiper-button-prev ${
                    isFirstSlide ? "swiper-button-disabled" : ""
                  }`}
                  onClick={handlePrevClick}
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled={isFirstSlide}
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
                  >
                    <path
                      fill="currentColor"
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                    />
                  </svg>
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
