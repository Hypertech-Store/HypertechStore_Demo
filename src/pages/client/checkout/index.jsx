import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import pay from "../../../assets/img/logos/pay.webp";
import momo from "../../../assets/img/logos/momo.webp";
import vnpay from "../../../assets/img/logos/vnpay.webp";
import "../../../assets/css/style.css";
import "../../../assets/js/main.js";
import { TbEdit } from "react-icons/tb";
const Checkout = () => {
  document.title = "Hypertech Store - Thanh toán";
  const baseUrl = "http://127.0.0.1:8000/storage/";
  const navigate = useNavigate(); // Hook dùng để điều hướng
  const [products, setProducts] = useState([]); // State để lưu danh sách sản phẩm
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [voucherEligible, setVoucherEligible] = useState(false);
  const [voucherInfo, setVoucherInfo] = useState(null);

  const handleEditClick = () => {
    navigate("/thong-tin-tai-khoan"); // Chuyển hướng đến trang thông tin tài khoản
  };
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    note: "",
    shippingAddress: "",
  });

  // Giả sử thông tin đã lưu trong sessionStorage (hoặc có thể dùng localStorage)
  useEffect(() => {
    // Lấy thông tin user từ sessionStorage
    const userInfoStored = sessionStorage.getItem("userInfo");
    if (userInfoStored) {
      const userInfo = JSON.parse(userInfoStored);
      setUserInfo(userInfo); // Cập nhật state cho thông tin user

      // Log ra toàn bộ thông tin user
      console.log("User Info:", userInfo);
    } else {
      console.log("No user info found in sessionStorage.");
    }

    // Lấy danh sách sản phẩm từ sessionStorage
    const productsStored = sessionStorage.getItem("selectedProducts");
    if (productsStored) {
      const products = JSON.parse(productsStored);
      if (Array.isArray(products) && products.length > 0) {
        setProducts(products); // Cập nhật state với danh sách sản phẩm
        console.log("Selected Products retrieved:", products); // Log danh sách sản phẩm
      } else {
        console.log("Selected products array is empty or invalid.");
      }
    } else {
      console.log("No selected products found in sessionStorage.");
    }
  }, []);

  // Sample products data from sessionStorage (or dynamically fetched data)

  // Discounts and shipping cost
  const discount = 10; // Fixed discount, can be calculated based on logic

  useEffect(() => {
    // Calculate subtotal (sum of product prices * quantities)
    let subtotal = 0;
    products.forEach((product) => {
      subtotal += product.gia;
    });

    // Calculate total (subtotal after discount + shipping cost)
    const total = subtotal - discount + shippingCost;

    // Update state with the calculated values
    setSubtotal(subtotal);

    setTotal(total);
  }, [products]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://127.0.0.1:8000/api/hinh-thuc-van-chuyen")
      .then((response) => response.json())
      .then((data) => setShippingOptions(data))
      .catch((error) => console.error("Error fetching shipping data:", error));
  }, []);

  const handleShippingChange = (e, option) => {
    setShippingCost(Number(e.target.value));
    setSelectedOption(option);
  };

  const getDeliveryDate = (option) => {
    let date = new Date();
    if (option) {
      if (option.ten_van_chuyen === "Ship hỏa tốc") {
        // For "Ship hỏa tốc", deliver within the same day
        return date.toLocaleDateString();
      } else if (option.ten_van_chuyen === "Ship nhanh") {
        // For "Ship nhanh", deliver between 2-5 days
        let randomDays = Math.floor(Math.random() * 4) + 2; // Random between 2 and 5 days
        date.setDate(date.getDate() + randomDays);
        return date.toLocaleDateString();
      }
    }
    return "Chưa chọn hình thức vận chuyển"; // Default message when no option is selected
  };

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
          <h2 className="mb-5">Thanh toán</h2>

          <div className="row justify-content-between">
            <div className="col-lg-7 col-xl-6 mt-2">
              <form>
                <div className="card mt-3 mt-lg-0">
                  <div className="card-body">
                    <div className="d-flex align-items-end">
                      <h3 className="mb-0 me-3">Người đặt hàng</h3>
                      <button
                        className="btn btn-link p-0"
                        type="button"
                        onClick={handleEditClick}
                      >
                        <TbEdit style={{ height: "1.3em", width: "1.3em" }} />
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
                              <h5 className="lh-sm me-4">Họ tên</h5>
                            </div>
                          </td>
                          <td className="py-2 fw-bold lh-sm">:</td>
                          <td className="py-2 px-3">
                            <h5 className="lh-sm fw-normal text-body-secondary">
                              {userInfo.ho_ten}
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
                              <h5 className="lh-sm me-3">Địa chỉ</h5>
                            </div>
                          </td>
                          <td className="py-2 fw-bold lh-sm">:</td>
                          <td className="py-2 px-3">
                            <h5
                              className="lh-lg fw-normal text-body-secondary"
                              style={{
                                whiteSpace: "nowrap",
                              }}
                            >
                              {userInfo.dia_chi}
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 ps-0">
                            <div className="d-flex">
                              <span
                                className="fs-3 me-2"
                                data-feather="mail"
                                style={{ height: 16, width: 16 }}
                              >
                                {" "}
                              </span>
                              <h5 className="lh-sm me-4">Email</h5>
                            </div>
                          </td>
                          <td className="py-2 fw-bold lh-sm">: </td>
                          <td className="py-2 px-3">
                            <h5 className="lh-sm fw-normal text-body-secondary">
                              {userInfo.email}
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
                              <h5
                                className="lh-sm me-4"
                                style={{
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Số điện thoại
                              </h5>
                            </div>
                          </td>
                          <td className="py-2 fw-bold lh-sm">: </td>
                          <td className="py-2 px-3">
                            <h5 className="lh-sm fw-normal text-body-secondary">
                              {userInfo.dien_thoai}
                            </h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card mt-lg-3">
                  <div className="card-body">
                    <div className="d-flex align-items-end">
                      <h3 className="mb-0 me-3">Địa chỉ nhận hàng</h3>
                    </div>
                    <div className="row g-3 mt-3">
                      <div className="col-12">
                        <input
                          className="form-control mt-1"
                          id="address"
                          name="address"
                          type="text"
                          required
                          placeholder="Tỉnh/Thành Phố, Quận/Huyện, Phường Xã"
                          autoComplete="off"
                        />
                        <div
                          id="suggestions"
                          className="suggestions col-12"
                        ></div>
                      </div>

                      <div className="col-4">
                        <input
                          className="form-control mt-1"
                          id="city"
                          name="city"
                          required
                          type="text"
                          placeholder="Tỉnh/Thành Phố"
                        />
                      </div>
                      <div className="col-4">
                        <input
                          className="form-control mt-1"
                          id="district"
                          name="district"
                          required
                          type="text"
                          placeholder="Quận/Huyện"
                        />
                      </div>
                      <div className="col-4">
                        <input
                          className="form-control mt-1"
                          id="ward"
                          name="ward"
                          required
                          type="text"
                          placeholder="Phường/Xã"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mt-lg-3">
                  <div className="card-body">
                    <h3 className="mb-6">Hình thức vận chuyển</h3>
                    <div className="row gy-6 mb-6">
                      {shippingOptions.map((option) => (
                        <div key={option.id} className="col-12 col-md-6">
                          <div className="d-flex flex-wrap align-items-center mb-3">
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="shippingRadio"
                                id={`shipping_${option.id}`}
                                value={option.gia_van_chuyen}
                                onChange={(e) =>
                                  handleShippingChange(e, option)
                                }
                                checked={
                                  shippingCost === Number(option.gia_van_chuyen)
                                }
                              />
                              <label
                                className="form-check-label fs-8 text-body"
                                htmlFor={`shipping_${option.id}`}
                              >
                                {option.ten_van_chuyen}
                              </label>
                            </div>
                            <span className="d-inline-block text-body-emphasis fw-bold ms-2">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "decimal", // Use 'decimal' style to format the number without currency symbol
                                minimumFractionDigits: 0, // Optional: you can remove decimal places
                              }).format(option.gia_van_chuyen)}{" "}
                              VNĐ
                            </span>
                          </div>
                          <div className="ps-4">
                            <h6 className="text-body-tertiary mb-2">
                              Dự kiến ​​giao hàng: {getDeliveryDate(option)}
                            </h6>
                            <h6 className="text-info lh-base mb-0">
                              {option.mo_ta}
                            </h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 col-xl-6 mt-2">
              <div className="card mt-3 mt-lg-0">
                <div className="card-body">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#f3f4f6",
                      padding: "8px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      gap: "8px",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#addDealModal"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="#dc2626"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_21_9220)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.11702 17.6577C3.28369 17.6577 1.78369 16.1577 1.78369 14.3244V13.491C1.78369 12.991 2.20036 12.6577 2.61702 12.491C3.61702 12.1577 4.28369 11.241 4.28369 10.1577C4.28369 9.07438 3.61702 8.15771 2.61702 7.82438C2.20036 7.65771 1.78369 7.32438 1.78369 6.82438V5.99105C1.78369 4.15771 3.28369 2.65771 5.11702 2.65771H15.117C16.9504 2.65771 18.4504 4.15771 18.4504 5.99105V6.82438C18.4504 7.32438 18.0337 7.65771 17.617 7.82438C16.617 8.15771 15.9504 9.07438 15.9504 10.1577C15.9504 11.241 16.617 12.1577 17.617 12.491C18.0337 12.6577 18.4504 12.991 18.4504 13.491V14.3244C18.4504 16.1577 16.9504 17.6577 15.117 17.6577H5.11702ZM7.61702 8.49105C8.11702 8.49105 8.45036 8.15771 8.45036 7.65771C8.45036 7.15771 8.11702 6.82438 7.61702 6.82438C7.11702 6.82438 6.78369 7.15771 6.78369 7.65771C6.78369 8.15771 7.11702 8.49105 7.61702 8.49105ZM13.4504 12.6577C13.4504 13.1577 13.117 13.491 12.617 13.491C12.117 13.491 11.7837 13.1577 11.7837 12.6577C11.7837 12.1577 12.117 11.8244 12.617 11.8244C13.117 11.8244 13.4504 12.1577 13.4504 12.6577ZM13.0337 8.07438C13.2837 7.82438 13.2837 7.40771 13.0337 7.15771C12.7837 6.90771 12.367 6.90771 12.117 7.15771L7.11702 12.1577C6.86702 12.4077 6.86702 12.8244 7.11702 13.0744C7.36702 13.3244 7.78369 13.3244 8.03369 13.0744L13.0337 8.07438Z"
                            fill
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_21_9220">
                            <rect width={20} height={20} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p
                        style={{
                          margin: 0,
                          fontWeight: "600",
                        }}
                      >
                        Chọn hoặc nhập ưu đãi
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={21}
                      height={20}
                      viewBox="0 0 21 20"
                      fill="#6b7280"
                    >
                      <path
                        d="M7.8499 4.20694C8.14982 3.92125 8.62456 3.93279 8.91025 4.23271L13.9116 9.48318C14.1875 9.77285 14.1875 10.2281 13.9116 10.5178L8.91025 15.7682C8.62456 16.0681 8.14982 16.0797 7.8499 15.794C7.54998 15.5083 7.53844 15.0336 7.82413 14.7336L12.3327 10.0005L7.82413 5.26729C7.53844 4.96737 7.54998 4.49264 7.8499 4.20694Z"
                        fill
                      />
                    </svg>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <h3 className="mb-0">Thông tin đơn hàng</h3>
                    <button className="btn btn-link pe-0" type="button">
                      Edit cart
                    </button>
                  </div>
                  <div className="border-dashed border-bottom border-translucent mt-4">
                    <div className="ms-n2">
                      {products.length > 0 &&
                        products.map((product, index) => (
                          <div
                            className="row align-items-center mb-2 g-3"
                            key={index}
                          >
                            <div className="col-8 col-md-7 col-lg-8">
                              <div className="d-flex align-items-center">
                                <img
                                  className="me-2 ms-1"
                                  src={`${baseUrl}${product.chi_tiet_san_pham.images}`}
                                  width={40}
                                  alt={
                                    product.chi_tiet_san_pham.ten_san_pham ||
                                    "Sản phẩm"
                                  }
                                />
                                <h6 className="fw-semibold text-body-highlight lh-base">
                                  {product.chi_tiet_san_pham.ten_san_pham}{" "}
                                  {/* Tên sản phẩm */}
                                  {product.thuoc_tinh.length > 0 && (
                                    <div>
                                      {product.thuoc_tinh.map(
                                        (thuocTinh, index) => (
                                          <span key={index}>
                                            <strong
                                              style={{
                                                color: "#dc2626",
                                                fontWeight: "600",
                                              }}
                                            >
                                              {thuocTinh.ten_gia_tri}
                                            </strong>
                                            {index <
                                              product.thuoc_tinh.length - 1 &&
                                              ", "}
                                            {/* Thêm dấu phẩy nếu không phải phần tử cuối */}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  )}
                                </h6>
                              </div>
                            </div>
                            <div className="col-1 col-md-3 col-lg-2">
                              <h6
                                className="fs-10 mb-0"
                                style={{ marginLeft: "-3pc" }}
                              >
                                x{product.so_luong}
                              </h6>{" "}
                              {/* Số lượng */}
                            </div>

                            <div
                              className="col-2 ps-0"
                              style={{ marginLeft: "-3pc" }}
                            >
                              <h5
                                className="mb-0 fw-semibold text-end"
                                style={{
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {parseInt(product.gia).toLocaleString()} VNĐ
                              </h5>{" "}
                              {/* Giá */}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="border-dashed border-bottom border-translucent mt-4">
                    {/* Subtotal after discount */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="text-body fw-semibold">Tổng tiền</h5>
                      <h5 className="text-body fw-semibold">
                        {subtotal.toLocaleString()} VNĐ
                      </h5>
                    </div>

                    {/* Discount */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="text-body fw-semibold">Giảm giá</h5>
                      <h5 className="text-danger fw-semibold">
                        -{discount.toLocaleString()} VNĐ
                      </h5>
                    </div>
                    {/* Shipping cost */}
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="text-body fw-semibold">Phí vận chuyển</h5>
                      <h5 className="text-body fw-semibold">
                        {shippingCost.toLocaleString()} VNĐ
                      </h5>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="d-flex justify-content-between border-dashed-y pt-3">
                    <h4 className="mb-0">Cần thanh toán</h4>
                    <h4 className="mb-0">{total.toLocaleString()} VNĐ</h4>
                  </div>
                </div>
              </div>
              <div className="card mt-lg-5">
                <div className="card-body">
                  <div className="cart-title mb-4">
                    <h3 className="mb-5">Phương thức thanh toán</h3>
                  </div>
                  <div className="payment-methods">
                    <div className="method-item d-flex align-items-center mb-3">
                      <input
                        type="radio"
                        id="cod"
                        name="paymentMethod"
                        value="cod"
                        className="form-check-input me-3"
                      />
                      <label
                        htmlFor="cod"
                        className="d-flex align-items-center"
                      >
                        <img className="me-3" src={pay} alt="cod" width="30" />
                        <span>Thanh toán tiền mặt khi nhận hàng</span>
                      </label>
                    </div>
                    <div className="method-item d-flex align-items-center mb-3">
                      <input
                        type="radio"
                        id="momo"
                        name="paymentMethod"
                        value="momo"
                        className="form-check-input me-3"
                      />
                      <label
                        htmlFor="momo"
                        className="d-flex align-items-center"
                      >
                        <img
                          className="me-3"
                          src={momo}
                          alt="Momo"
                          width="30"
                        />
                        <span>Thanh toán qua ví MoMo</span>
                      </label>
                    </div>
                    <div className="method-item d-flex align-items-center mb-3">
                      <input
                        type="radio"
                        id="vnpay"
                        name="paymentMethod"
                        value="vnpay"
                        className="form-check-input me-3"
                      />
                      <label
                        htmlFor="vnpay"
                        className="d-flex align-items-center"
                      >
                        <img
                          className="me-3"
                          src={vnpay}
                          alt="VNPay"
                          width="30"
                        />
                        <span>Thanh toán qua ví VNPay</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mt-lg-5">
                <button className="btn btn-primary" type="submit">
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-popup-promotion"></div>
        <div
          className="modal fade"
          id="addDealModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="addDealModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-body-highlight p-5">
              <div className="modal-body px-0 promotion-popup">
                <div className="promotion-top">
                  <p className="title-use-promotion">Sử dụng mã giảm giá</p>

                  <IoClose
                    className="iconcart-close-popup"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="codeboxinput__dropdown--content">
                  <div className="codeboxinput__dropdown--content-normal">
                    <div className="input-group mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Nhập mã giảm giá/ Phiếu mua hàng"
                        maxLength={10}
                      />
                      <button
                        className="btn btn-phoenix-primary"
                        disabled
                        style={{ marginLeft: "0px" }}
                      >
                        Áp dụng
                      </button>
                    </div>
                    <span className="error_codebox_input">
                      Mã giảm giá không hợp lệ, vui lòng kiểm tra lại hoặc liên
                      hệ nơi phát hành để được hỗ trợ
                    </span>
                  </div>
                </div>
                <div className="popup-promotion-code-box--empty">
                  <i className="popup-promotion-code-box__empty-voucher" />
                  <h1 className="title-empty-promotion">Mã giảm giá trống</h1>
                  <p className="caution-empty-promotion">
                    {" "}
                    Vui lòng nhập mã giảm có thể sử dụng vào thanh bên trên{" "}
                  </p>
                </div>

                <div className="cursor-pointer relative z-10 flex">
                  <div className="flex h-fit w-full gap-2 rounded-l-2 bg-bgWhiteDefault p-2">
                    <div className="flex h-11 min-w-11 items-center justify-center rounded-[48px] bg-red-red-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M26.7233 5.71704L30.1623 19.6235C30.2881 20.1317 29.9874 20.6484 29.4902 20.7771L9.27562 26.0109C8.63108 26.1775 7.94958 25.968 7.5026 25.4644L2.82365 20.1972C2.41971 19.7426 2.2641 19.113 2.40813 18.5162L4.07575 11.6065C4.23523 10.9458 4.73739 10.4291 5.38137 10.2626L25.5959 5.02928C26.0926 4.90054 26.5975 5.20828 26.7233 5.71704Z"
                          fill="#EF4444"
                        />
                        <path
                          d="M28.8525 11.6417V26.1156C28.8525 26.6046 28.4651 27.0004 27.9878 27.0004H7.0735C6.4091 27.0004 5.79823 26.6255 5.48534 26.0253L2.2119 19.7457C1.92937 19.2036 1.92937 18.5537 2.2119 18.0122L5.48534 11.732C5.79823 11.1318 6.40855 10.7568 7.0735 10.7568H27.9878C28.4656 10.7568 28.8525 11.1532 28.8525 11.6417Z"
                          fill="white"
                        />
                        <path
                          d="M7.83626 18.8781C7.83626 19.5766 7.28278 20.143 6.59962 20.143C5.91646 20.143 5.36353 19.5766 5.36353 18.8781C5.36353 18.1796 5.91701 17.6133 6.59962 17.6133C7.28223 17.6133 7.83626 18.1796 7.83626 18.8781Z"
                          fill="#FEE2E2"
                        />
                        <path
                          d="M16.4658 13.9346C15.3241 13.9346 14.3954 14.8843 14.3954 16.0526C14.3954 17.2209 15.3236 18.1712 16.4658 18.1712C17.6081 18.1712 18.5363 17.2215 18.5363 16.0526C18.5363 14.8838 17.6076 13.9346 16.4658 13.9346ZM16.4658 16.759C16.0845 16.759 15.7755 16.4434 15.7755 16.0526C15.7755 15.6619 16.084 15.3462 16.4658 15.3462C16.8477 15.3462 17.1562 15.6624 17.1562 16.0526C17.1562 16.4428 16.8472 16.759 16.4658 16.759Z"
                          fill="#EF4444"
                        />
                        <path
                          d="M22.5611 15.033L17.0401 23.5069C16.832 23.8265 16.4055 23.9213 16.0832 23.7022C15.7659 23.486 15.6804 23.0478 15.8917 22.7237L21.4128 14.2498C21.6219 13.9251 22.0501 13.8365 22.3696 14.0533C22.6869 14.2701 22.7725 14.7083 22.5611 15.033Z"
                          fill="#EF4444"
                        />
                        <path
                          d="M21.9868 19.585C20.8451 19.585 19.9164 20.5347 19.9164 21.703C19.9164 22.8713 20.8446 23.8216 21.9868 23.8216C23.1291 23.8216 24.0573 22.8718 24.0573 21.7036C24.0573 20.5353 23.1286 19.585 21.9868 19.585ZM21.9868 22.4094C21.6055 22.4094 21.2965 22.0937 21.2965 21.703C21.2965 21.3123 21.605 20.9966 21.9868 20.9966C22.3687 20.9966 22.6766 21.3128 22.6772 21.703C22.6772 22.0932 22.3681 22.4094 21.9868 22.4094Z"
                          fill="#EF4444"
                        />
                      </svg>
                    </div>
                    <div className="grid w-full">
                      <span className="f1-semibold text-textOnWhitePrimary">
                        Giảm ngay 800,000đ áp dụng đến 26/12
                      </span>
                      <span className="truncate f2-regular text-textOnWhiteSecondary">
                        Áp dụng cho iPhone 16 Pro Max 256GB Titan Đen MYWV3VN/A
                      </span>
                    </div>
                  </div>
                  <div className="relative flex w-[47px] items-center justify-center rounded-r-2 border-l border-dashed border-bgGrayDefault bg-bgWhiteDefault">
                    <div className="absolute left-[-6px] top-[-6px] h-2.5 w-2.5 rounded-full bg-bgGrayDefault" />
                    <div className="absolute bottom-[-6px] left-[-6px] h-2.5 w-2.5 rounded-full bg-bgGrayDefault" />
                    <button className="flex h-[24px] w-[24px] items-center justify-center rounded-full cursor-pointer bg-red-red-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx={12}
                          cy={12}
                          r={11}
                          fill="var(--red-red-7)"
                        />
                        <path
                          d="M11.3701 15.3163L17.7202 8.85485C18.0922 8.47634 18.0922 7.86263 17.7202 7.4841C17.3483 7.10557 16.7452 7.10556 16.3732 7.48407L10.6966 13.2602L8.82526 11.356C8.45328 10.9774 7.85018 10.9774 7.4782 11.356C7.10622 11.7345 7.10622 12.3482 7.47821 12.7267L10.0231 15.3163C10.395 15.6948 10.9981 15.6948 11.3701 15.3163Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <div className="absolute right-[-3px] top-2 grid">
                      <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-bgGrayDefault" />
                      <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-bgGrayDefault" />
                      <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-bgGrayDefault" />
                      <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-bgGrayDefault" />
                      <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-bgGrayDefault" />
                      <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-bgGrayDefault" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Checkout;
