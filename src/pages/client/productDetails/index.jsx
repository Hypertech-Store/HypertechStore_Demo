import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify"; // Thư viện toast cho thông báo
import PacmanLoader from "react-spinners/PacmanLoader";
import { useNavigate } from "react-router-dom"; // Import hook điều hướng
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
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const navigate = useNavigate();
  const productId = queryParams.get("id");
  const [productData, setProductData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [variantPrice, setVariantPrice] = useState(0); // lưu giá biến thể
  const [remainingTime, setRemainingTime] = useState("");
  const [ngayKetThucSale, setNgayKetThucSale] = useState(null);
  const [images, setImages] = useState([]);
  const [colorAttribute, setColorAttribute] = useState("");
  const [colorName, setColorName] = useState("");
  const [dungLuongOptions, setDungLuongOptions] = useState([]);

  const [selectedDungLuong, setSelectedDungLuong] = useState(null); // Dung lượng được chọn
  const [finalPrice, setFinalPrice] = useState(0);
  const [dungLuongName, setDungLuongName] = useState(""); // State for the attribute name "Dung lượng"
  const [colorVariants, setColorVariants] = useState([]);
  const [otherAttributes, setOtherAttributes] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [isAttributesComplete, setIsAttributesComplete] = useState(false);

  const baseUrl = "http://127.0.0.1:8000/storage/";

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/san-pham/detail/${productId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Product data:", data);
        setProductData(data);

        setNgayKetThucSale(data.sale?.ngay_ket_thuc_sale || null);

        if (data.hinh_anh_bien_the_san_pham) {
          const imageLinks = data.hinh_anh_bien_the_san_pham.flatMap((item) =>
            item.hinh_anh.map(
              (image) => `${baseUrl}${image.duong_dan_hinh_anh}`
            )
          );
          setImages(imageLinks);
        }

        // Xử lý thuộc tính "Màu sắc"
        const colorAttributeData = data.gia_tri_thuoc_tinh?.find(
          (item) => item.thuoc_tinh_san_pham?.ten_thuoc_tinh === "Màu sắc"
        );
        setColorAttribute(
          colorAttributeData?.thuoc_tinh_san_pham?.ten_thuoc_tinh || "Màu sắc"
        );
        setColorName(colorAttributeData?.gia_tri || "Chưa chọn màu");

        // Hiển thị các biến thể màu sắc (nếu có)
        if (data.hinh_anh_bien_the_san_pham) {
          const colorVariantsData = data.hinh_anh_bien_the_san_pham.flatMap(
            (item) =>
              item.hinh_anh.map((image) => ({
                colorName: image.ten_gia_tri,
                imageUrl: `${baseUrl}${image.duong_dan_hinh_anh}`,
              }))
          );
          setColorVariants(colorVariantsData);
        }

        // Xử lý thuộc tính "Dung lượng"
        const capacityAttributeData = data.grouped_attributes?.["Dung lượng"];
        if (capacityAttributeData) {
          setDungLuongOptions(capacityAttributeData.ten_gia_tri || []);
          setDungLuongName("Dung lượng");
        }

        // Xử lý các thuộc tính khác (không phải Màu sắc và Dung lượng)
        const otherAttributesData = Object.keys(
          data.grouped_attributes || {}
        ).filter((key) => key !== "Màu sắc" && key !== "Dung lượng");
        setOtherAttributes(otherAttributesData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (productId) {
      fetchProductData();
    }
  }, [productId]);

  // Dependency on `productId` and `baseUrl`

  useEffect(() => {
    if (productData) {
      document.title = `${productData?.sanPham?.ten_san_pham}`;
    }
  }, [productData]); // Mỗi khi productData thay đổi, cập nhật lại tiêu đề trang

  useEffect(() => {
    // Hàm tính thời gian đếm ngược
    const calculateRemainingTime = () => {
      if (!ngayKetThucSale) return;

      const endTime = new Date(
        new Date(ngayKetThucSale).toLocaleString("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
        })
      ).getTime();
      const now = new Date().getTime();
      const timeLeft = endTime - now;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Số ngày
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ); // Số giờ còn lại
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Số phút
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Số giây

        setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setRemainingTime(null); // Nếu hết hạn, xóa thời gian
      }
    };

    // Cập nhật mỗi giây nếu `ngayKetThucSale` tồn tại
    if (ngayKetThucSale) {
      const timer = setInterval(calculateRemainingTime, 1000);
      return () => clearInterval(timer); // Xóa bộ đếm khi unmounted
    }
  }, [ngayKetThucSale]);

  useEffect(() => {
    // Kiểm tra xem tất cả các thuộc tính đã được chọn hay chưa
    const isColorSelected = colorName && colorName !== "Chưa chọn màu";
    const isDungLuongSelected = selectedDungLuong && selectedDungLuong !== "";
    const areOtherAttributesSelected = otherAttributes.every(
      (attribute) =>
        productData.grouped_attributes[attribute]?.ten_gia_tri.length > 0
    );

    setIsAttributesComplete(
      isColorSelected && isDungLuongSelected && areOtherAttributesSelected
    );
  }, [colorName, selectedDungLuong, otherAttributes, productData]);
  // State để lưu chỉ số ảnh hiện tại
  const [activeImageIndex, setActiveImageIndex] = useState(0); // Mặc định là ảnh chính

  // Thêm ảnh chính vào đầu danh sách
  const imageArray = [productData?.sanPham?.duong_dan_anh, ...images];

  const handleImageClick = (index, color = "") => {
    if (index === 0) {
      setActiveImageIndex(0);
      setColorName("");
      setVariantPrice(0); // No variant price
    } else {
      setActiveImageIndex(index);
      setColorName(color);

      if (selectedDungLuong) {
        const selectedVariant = productData?.bienTheSanPhams?.find(
          (variant) =>
            variant.gia_tri_thuoc_tinh?.some(
              (attr) => attr.ten_gia_tri === color
            ) &&
            variant.gia_tri_thuoc_tinh?.some(
              (attr) => attr.ten_gia_tri === selectedDungLuong
            )
        );

        if (selectedVariant) {
          const variantPrice = parseFloat(selectedVariant.gia) || 0;
          setVariantPrice(variantPrice);

          // Format price with currency
          console.log(
            `Giá biến thể: ${new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(variantPrice)}`
          );

          setFinalPrice(calculateFinalPrice(variantPrice)); // Tính giá cuối
        }
      }
    }
  };

  const handleDungLuongChange = (event) => {
    const selectedCapacity = event.target.value;
    setSelectedDungLuong(selectedCapacity);

    if (colorName) {
      const selectedVariant = productData?.bienTheSanPhams?.find(
        (variant) =>
          variant.gia_tri_thuoc_tinh?.some(
            (attr) => attr.ten_gia_tri === colorName
          ) &&
          variant.gia_tri_thuoc_tinh?.some(
            (attr) => attr.ten_gia_tri === selectedCapacity
          )
      );

      if (selectedVariant) {
        const variantPrice = parseFloat(selectedVariant.gia) || 0;
        setVariantPrice(variantPrice);

        // Log the price with currency format
        console.log(
          `Giá biến thể: ${new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(variantPrice)}`
        );

        setFinalPrice(calculateFinalPrice(variantPrice)); // Tính giá cuối
      }
    }
  };

  const calculateFinalPrice = (variantPrice = 0) => {
    let basePrice = parseFloat(productData?.sanPham?.gia) || 0; // Giá gốc
    if (productData?.sale_theo_phan_tram) {
      // Nếu có giảm giá
      basePrice =
        basePrice -
        (basePrice * parseFloat(productData?.sale_theo_phan_tram || 0)) / 100; // Giá sau khi giảm
    }
    let finalPrice = basePrice + variantPrice;
    return finalPrice;
  };
  // Dùng giá mặc định ban đầu (gốc hoặc đã giảm)
  useEffect(() => {
    const initialPrice = calculateFinalPrice(0); // Giá mặc định khi chưa có biến thể
    setFinalPrice(initialPrice);
  }, [productData]);

  const handleAddToCart = async () => {
    // Lấy thông tin người dùng từ sessionStorage
    const userData = JSON.parse(sessionStorage.getItem("userInfo")); // Sửa lại key lấy là "userInfo" thay vì "user"

    // Kiểm tra xem người dùng có đăng nhập chưa
    if (!userData || !userData.id) {
      toast.error("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
      return;
    }

    // Kiểm tra biến thể sản phẩm đã được chọn
    const selectedVariant = productData?.bienTheSanPhams?.find(
      (variant) =>
        variant.gia_tri_thuoc_tinh?.some(
          (attr) => attr.ten_gia_tri === colorName
        ) &&
        variant.gia_tri_thuoc_tinh?.some(
          (attr) => attr.ten_gia_tri === selectedDungLuong
        )
    );

    if (selectedVariant) {
      const stock = selectedVariant.so_luong_kho || 0;

      if (stock === 0) {
        // Nếu sản phẩm hết hàng
        toast.error("Sản phẩm biến thể này đã hết hàng.");
      } else {
        const totalPrice = finalPrice; // Tổng giá sản phẩm đã tính (bao gồm biến thể)

        // Chuẩn bị dữ liệu gửi lên API
        const productDataToSend = {
          khach_hang_id: userData.id, // Lấy ID người dùng từ sessionStorage
          san_pham_id: selectedVariant.san_pham_id,
          so_luong: 1, // Giả sử người dùng mua 1 sản phẩm
          bien_the_san_pham_id: selectedVariant.id,
          attributes: selectedVariant.gia_tri_thuoc_tinh.map((attr) => ({
            gia_tri_thuoc_tinh_id: attr.id,
            ten_gia_tri: attr.ten_gia_tri,
          })),
          gia: totalPrice, // Sử dụng giá đã tính
        };

        try {
          // Gửi dữ liệu lên API
          const response = await fetch(
            "http://127.0.0.1:8000/api/gio-hang/them-gio-hang",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(productDataToSend),
            }
          );

          if (response.ok) {
            const responseData = await response.json();
            toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
            // Log dữ liệu khi thêm thành công
            console.log("Sản phẩm đã được thêm vào giỏ hàng:", responseData);
            navigate("/gio-hang");
          } else {
            const errorData = await response.json();
            toast.error(
              errorData.message ||
                "Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng."
            );
          }
          // eslint-disable-next-line no-unused-vars
        } catch (error) {
          toast.error("Không thể kết nối với máy chủ, vui lòng thử lại.");
        }
      }
    } else {
      toast.error("Vui lòng chọn đầy đủ thuộc tính của sản phẩm.");
    }
  };

  if (!productData || !productData.grouped_attributes) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <PacmanLoader speedMultiplier={0.8} color="#36d7b7" />
      </div>
    ); // Show the loader while waiting for data
  }
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
                          {/* Duyệt qua các ảnh khác (các ảnh con) */}
                          {images.map((image, index) => (
                            <div
                              key={index}
                              className={`swiper-slide ${
                                activeImageIndex === index + 1 // Chỉnh lại logic tính toán active
                                  ? "swiper-slide-thumb-active"
                                  : ""
                              }`}
                              role="group"
                              aria-label={`${index + 2} / ${imageArray.length}`}
                              style={{ height: 84, marginBottom: 16 }}
                              onClick={() =>
                                handleImageClick(
                                  index + 1, // Cập nhật chỉ số chính xác khi chọn ảnh con
                                  colorVariants[index]?.colorName || "",
                                  true
                                )
                              } // Gọi với isVariant = true cho các ảnh con
                            >
                              <div className="product-thumb-container p-2 p-sm-3 p-xl-2">
                                <img
                                  src={image}
                                  alt={`Product Image ${index + 2}`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
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
                              aria-label={`${activeImageIndex + 1} / ${
                                imageArray.length
                              }`}
                              style={{ width: 411 }}
                            >
                              {/* Hiển thị ảnh active */}
                              <img
                                className="w-100"
                                src={`${
                                  imageArray[activeImageIndex]?.startsWith(
                                    "http"
                                  )
                                    ? imageArray[activeImageIndex]
                                    : baseUrl + imageArray[activeImageIndex]
                                }`}
                                alt={`Product image ${activeImageIndex + 1}`}
                              />
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
                    <button
                      className="btn btn-lg btn-warning rounded-pill w-100 fs-9 fs-sm-8"
                      onClick={handleAddToCart}
                    >
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
                        {productData?.sanPham?.ten_san_pham}
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
                        {productData?.sale_theo_phan_tram ? (
                          <>
                            <h1 className="me-3">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })
                                .format(
                                  parseFloat(productData?.sanPham?.gia) *
                                    (1 -
                                      parseFloat(
                                        productData?.sale_theo_phan_tram
                                      ) /
                                        100) +
                                    variantPrice
                                )
                                .replace("₫", "VNĐ")}
                            </h1>
                            <p className="text-body-quaternary text-decoration-line-through fs-6 mb-0 me-3">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })
                                .format(parseFloat(productData?.sanPham?.gia))
                                .replace("₫", "VNĐ")}
                            </p>
                            <p className="text-warning fw-bolder fs-6 mb-0">
                              {parseFloat(
                                productData?.sale_theo_phan_tram
                              ).toFixed(0)}{" "}
                              % off
                            </p>
                          </>
                        ) : (
                          <h1>
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })
                              .format(
                                parseFloat(productData?.sanPham?.gia) +
                                  variantPrice
                              )
                              .replace("₫", "VNĐ")}
                          </h1>
                        )}
                      </div>

                      <p className="text-success fw-semibold fs-7 mb-2">
                        In stock
                      </p>
                      <p className="mb-2 text-body-secondary">
                        {productData?.sanPham?.mo_ta}

                        {/* <a className="fw-bold" href="#!">
                            {""}Xem thêm
                          </a> */}
                      </p>
                      {remainingTime && (
                        <p className="text-danger-dark fw-bold mb-5 mb-lg-0">
                          Special offer ends in {remainingTime} hours
                        </p>
                      )}
                    </div>
                    <div>
                      {/* Màu sắc */}
                      {colorAttribute === "Màu sắc" && (
                        <div className="mb-3">
                          <p className="fw-semibold mb-2 text-body">
                            <span>{colorAttribute}: </span>
                            <span className="text-body-emphasis">
                              {colorName || "Chưa chọn màu"}
                            </span>
                          </p>
                          <div className="d-flex product-color-variants">
                            {colorVariants.map((variant, index) => (
                              <div
                                key={index}
                                className={`rounded-1 border border-translucent me-2 ${
                                  activeImageIndex === index + 1 ? "active" : ""
                                }`}
                                onClick={() =>
                                  handleImageClick(index + 1, variant.colorName)
                                }
                                style={{ padding: "5px", borderWidth: "3px" }}
                              >
                                <img
                                  src={variant.imageUrl}
                                  alt={variant.colorName}
                                  width={30}
                                  height={30}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Dung lượng */}
                      {dungLuongName === "Dung lượng" && (
                        <div className="row g-3 g-sm-5 align-items-end">
                          <div className="col-12 col-sm-auto">
                            <p className="fw-semibold mb-2 text-body">
                              {dungLuongName}
                            </p>
                            <div className="d-flex align-items-center">
                              {dungLuongOptions.length > 0 ? (
                                dungLuongOptions.map((option, index) => (
                                  <div
                                    key={index}
                                    className={`d-flex align-items-center me-3 rounded-1 border cursor-pointer ${
                                      selectedDungLuong === option
                                        ? "border border-primary"
                                        : "border border-1"
                                    }`} // Ensure `option.name` is compared with selectedDungLuong
                                    onClick={() =>
                                      handleDungLuongChange({
                                        target: { value: option },
                                      })
                                    }
                                    style={{
                                      padding: "7px 10px",
                                      borderWidth: "3px",
                                      fontSize: "13px",
                                    }}
                                  >
                                    <span>{option}</span>
                                  </div>
                                ))
                              ) : (
                                <span className="text-muted">
                                  No capacity options available
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Hiển thị các thuộc tính khác nếu có */}
                      {otherAttributes.length > 0 && (
                        <div className="mb-3">
                          {otherAttributes.map((attribute) => (
                            <div key={attribute}>
                              <p className="fw-semibold mb-2 text-body">
                                <span>{attribute}: </span>
                                <span className="text-body-emphasis">
                                  {productData.grouped_attributes[
                                    attribute
                                  ]?.ten_gia_tri.join(", ")}
                                </span>
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
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
                    id="specification-tab"
                    data-bs-toggle="tab"
                    href="#tab-specification"
                    role="tab"
                    aria-controls="tab-specification"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Thông số kỹ thuật
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
                    Đánh giá & nhận xét
                  </a>
                </li>
              </ul>
              <div className="row gx-3 gy-7">
                <div className="col-12 col-lg-7 col-xl-12">
                  <div className="tab-content" id="productTabContent">
                    <div
                      className="tab-pane pe-lg-6 pe-xl-12 fade show active text-body-emphasis"
                      id="tab-specification"
                      role="tabpanel"
                      aria-labelledby="specification-tab"
                    >
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{ width: "40%" }}> </th>
                            <th style={{ width: "60%" }} />
                          </tr>
                        </thead>
                        <tbody>
                          {productData?.sanPham?.thong_so &&
                            productData?.sanPham?.thong_so.map(
                              (spec, index) => (
                                <tr key={index}>
                                  <td className="bg-body-highlight align-middle">
                                    <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                      {spec.thong_so}
                                    </h6>
                                  </td>
                                  <td className="px-5 mb-0">{spec.mo_ta}</td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
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
