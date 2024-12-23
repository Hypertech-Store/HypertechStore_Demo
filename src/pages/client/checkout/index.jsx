import { useState } from "react";
import { useNavigate } from "react-router-dom";

import products2 from "../../../assets/img/products/2.png";
import products1 from "../../../assets/img/products/1.png";
import products3 from "../../../assets/img/products/3.png";
import pay from "../../../assets/img/logos/pay.webp";
import momo from "../../../assets/img/logos/momo.webp";
import vnpay from "../../../assets/img/logos/vnpay.webp";
import { TbEdit } from "react-icons/tb";
const Checkout = () => {
  document.title = "Hypertech Store - Thanh toán";
  const navigate = useNavigate(); // Hook dùng để điều hướng
  const [isVisible, setIsVisible] = useState(false);

  const [text, setText] = useState(""); // Quản lý trạng thái của textarea
  const maxLength = 250;

  const handleChange = (e) => {
    setText(e.target.value); // Cập nhật giá trị khi nhập
  };

  const handleEditClick = () => {
    navigate("/thong-tin-tai-khoan"); // Chuyển hướng đến trang thông tin tài khoản
  };

  const toggleForm = () => {
    setIsVisible(!isVisible);
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
            <div className="col-lg-7 col-xl-7 mt-2">
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
                              <h5 className="lh-sm me-4">Địa chỉ</h5>
                            </div>
                          </td>
                          <td className="py-2 fw-bold lh-sm">:</td>
                          <td className="py-2 px-3">
                            <h5 className="lh-lg fw-normal text-body-secondary">
                              Apt: 6/B, 192 Edsel Road, Van Nuys <br />{" "}
                              California, USA 96580
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
                              <h5 className="lh-sm me-4">Số điện thoại</h5>
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
                  </div>
                </div>

                <div className="card mt-lg-3">
                  <div className="card-body">
                    <div className="d-flex align-items-end">
                      <h3 className="mb-0 me-3">Hình thức nhận hàng</h3>
                    </div>
                    <div className="row g-4 mt-3">
                      <div className="col-12">
                        <input
                          className="form-control mt-1"
                          id="inputAddress1"
                          type="text"
                          placeholder="Tỉnh/Thành Phố, Quận/Huyện, Phường Xã"
                        />
                      </div>
                    </div>
                    <div
                      className="mb-6 mt-5"
                      style={{
                        position: "relative",
                      }}
                    >
                      <textarea
                        className="form-control"
                        style={{
                          resize: "none", // Ngừng khả năng kéo dài textarea
                        }}
                        maxLength={maxLength}
                        placeholder="Ghi chú (Ví dụ: Hãy gọi tôi khi chuẩn bị hàng xong)"
                        value={text}
                        onChange={handleChange}
                        rows="5" // Số dòng tối đa cố định
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px", // Vị trí từ đáy của input
                          right: "12px", // Vị trí từ phải của input
                          fontSize: "0.8rem", // Kích thước nhỏ hơn
                          color: "#9ca3af", // Màu nhạt
                          backgroundColor: "white", // Nền trắng để không bị che
                          padding: "0 4px", // Khoảng padding nội bộ
                          pointerEvents: "none", // Tránh bị click
                        }}
                      >
                        {text.length}/{maxLength}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-lg-3">
                  <div className="card-body">
                    <h3 className="mb-6">Hình thức vận chuyển</h3>
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
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 col-xl-5 mt-2">
              <div className="card mt-3 mt-lg-0">
                <div className="card-body">
                  <div
                    onClick={toggleForm}
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
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>

      {isVisible && (
        <div>
          {/* Backdrop */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%", // Đảm bảo backdrop chiếm toàn bộ màn hình
              height: "100%",
              backgroundColor: "hsla(0, 0.00%, 53.70%, 0.81)",
              backdropFilter: "blur(2px)", // Làm mờ nền
              zIndex: 999,
              transition: "all 0.35s cubic-bezier(0.32, 0.72, 0, 1)", // Hiệu ứng chuyển đổi
            }}
            onClick={toggleForm}
          />

          {/* Sidebar */}
          <div
            style={{
              position: "fixed",
              top: 0, // Đảm bảo nó chạm mép trên của màn hình
              right: isVisible ? "0" : "-100%", // Điều chỉnh cho vị trí bên phải, ẩn khi không cần
              width: "600px", // Chiều rộng cố định
              height: "100%", // Chiều cao bằng toàn bộ chiều cao màn hình
              backgroundColor: "#FFF",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Tạo hiệu ứng shadow
              zIndex: 1000, // Đặt z-index để nó hiển thị trên các phần tử khác
              transition: "right 0.5s ease", // Tạo hiệu ứng trượt mượt mà
              padding: "15px",
            }}
          >
            <div
              className="d-flex"
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.1)", // Shadow effect cho đầu thẻ div
                position: "sticky", // Giữ phần trên cùng khi di chuyển
                borderBottom: "2px solid #ddd", // Đường gạch dưới với màu nhẹ và độ dày 2px
              }}
            >
              <div>
                <h3 style={{ fontSize: "20px" }}>Khuyến mãi và ưu đãi</h3>
              </div>

              <svg
                width={24}
                height={24}
                viewBox="0 0 28 28"
                fill="#090d14"
                xmlns="http://www.w3.org/2000/svg"
                className="Sheet_icon__RnybF cursor-pointer"
              >
                <path d="M6.2097 6.3871L6.29289 6.29289C6.65338 5.93241 7.22061 5.90468 7.6129 6.2097L7.70711 6.29289L14 12.585L20.2929 6.29289C20.6834 5.90237 21.3166 5.90237 21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L15.415 14L21.7071 20.2929C22.0676 20.6534 22.0953 21.2206 21.7903 21.6129L21.7071 21.7071C21.3466 22.0676 20.7794 22.0953 20.3871 21.7903L20.2929 21.7071L14 15.415L7.70711 21.7071C7.31658 22.0976 6.68342 22.0976 6.29289 21.7071C5.90237 21.3166 5.90237 20.6834 6.29289 20.2929L12.585 14L6.29289 7.70711C5.93241 7.34662 5.90468 6.77939 6.2097 6.3871L6.29289 6.29289L6.2097 6.3871Z" />
              </svg>
            </div>
            <div
              className="Sheet_body__VKc95 active"
              style={{
                maxHeight: "calc(100% - 54px)",
                overflow: "auto",
                backgroundColor: "#f3f4f6",
              }}
            >
              <div className="relative h-full">
                <div className="grid gap-2 bg-bgGrayDefault">
                  <div>
                    <div className="grid py-3">
                      <h5 style={{ fontSize: "15px" }}>Mã giảm giá</h5>
                      <div
                        className="gap-3 px-3 mt-3"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          justifyContent: "flex-start", // Align items to the left
                        }}
                        role="button"
                        aria-label="Enter discount code"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_630_81456)">
                            <path
                              d="M10.0304 1.23725C9.73749 0.944355 9.26262 0.944355 8.96972 1.23725L1.23749 8.96948C0.944599 9.26237 0.944599 9.73725 1.23749 10.0301L2.01208 10.8047C2.01227 10.8048 2.01252 10.8049 2.01283 10.805C2.01548 10.8061 2.02385 10.8089 2.03946 10.8096C2.07351 10.8111 2.12291 10.8014 2.17144 10.7749C2.49223 10.5993 2.86035 10.4998 3.25024 10.4998C4.49288 10.4998 5.50024 11.5071 5.50024 12.7498C5.50024 13.1396 5.40065 13.5078 5.22513 13.8286C5.19857 13.8771 5.18892 13.9265 5.19041 13.9605C5.19109 13.9761 5.19387 13.9845 5.19495 13.9872C5.19508 13.9875 5.19518 13.9877 5.19527 13.9879L5.96973 14.7624C6.26262 15.0553 6.73749 15.0553 7.03039 14.7624L14.7626 7.03014C15.0555 6.73725 15.0555 6.26237 14.7626 5.96948L13.9881 5.19496C13.9879 5.19487 13.9877 5.19476 13.9873 5.19464C13.9847 5.19356 13.9763 5.19078 13.9607 5.19009C13.9267 5.18861 13.8773 5.19825 13.8288 5.22479C13.508 5.40022 13.14 5.49976 12.7502 5.49976C11.5076 5.49976 10.5002 4.4924 10.5002 3.24976C10.5002 2.85998 10.5998 2.49196 10.7752 2.17123C10.8017 2.12271 10.8114 2.07331 10.8099 2.03927C10.8092 2.02368 10.8064 2.01531 10.8054 2.01265C10.8052 2.01234 10.8051 2.0121 10.805 2.0119L10.0304 1.23725ZM8.26262 0.530141C8.94604 -0.153276 10.0541 -0.153276 10.7375 0.530141L11.5127 1.30537C11.9192 1.71184 11.8496 2.29086 11.6525 2.65111C11.5556 2.8284 11.5002 3.03187 11.5002 3.24976C11.5002 3.94011 12.0599 4.49976 12.7502 4.49976C12.9681 4.49976 13.1716 4.44443 13.3489 4.34746C13.7091 4.15041 14.2882 4.08081 14.6946 4.48728L15.4697 5.26237C16.1531 5.94579 16.1531 7.05383 15.4697 7.73725L7.73749 15.4695C7.05407 16.1529 5.94604 16.1529 5.26262 15.4695L4.48759 14.6945C4.08107 14.2879 4.15074 13.7088 4.34786 13.3486C4.44489 13.1712 4.50024 12.9677 4.50024 12.7498C4.50024 12.0594 3.9406 11.4998 3.25024 11.4998C3.0323 11.4998 2.82877 11.5551 2.65145 11.6521C2.29118 11.8493 1.71207 11.9189 1.30554 11.5124L0.530386 10.7372C-0.153031 10.0538 -0.153033 8.94579 0.530385 8.26237L8.26262 0.530141Z"
                              fill="#212121"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_630_81456">
                              <rect width={16} height={16} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: "600",
                          }}
                        >
                          Nhập mã giảm giá của bạn tại đây nhé
                        </p>

                        <div style={{ marginLeft: "12pc" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                          >
                            <path
                              d="M7.64582 4.81309C7.84073 4.61748 8.15731 4.61692 8.35292 4.81183L13.8374 10.2768C14.0531 10.4918 14.0531 10.8411 13.8374 11.056L8.35292 16.521C8.15731 16.7159 7.84073 16.7153 7.64582 16.5197C7.4509 16.3241 7.45147 16.0075 7.64708 15.8126L12.8117 10.6664L7.64708 5.5202C7.45147 5.32528 7.4509 5.0087 7.64582 4.81309Z"
                              fill="#212121"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="grid py-3">
                      <h5 style={{ fontSize: "15px" }}>Khuyến mãi</h5>
                      <div
                        id="promotion-card-{'code':'KM-1124-2161','ofProductId':''}"
                        className="cursor-pointer relative z-10 flex"
                        role="button"
                        aria-label="Promotional details"
                      >
                        <div className="flex h-fit w-full gap-2 rounded-l-2 bg-bgWhiteDefault p-2">
                          <div className="flex h-11 min-w-11 items-center justify-center rounded-[48px] bg-red-red-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              viewBox="0 0 32 32"
                              fill="none"
                              aria-hidden="true"
                            >
                              {/* SVG Path */}
                            </svg>
                          </div>
                          {/* More promotion details can go here */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-end bg-bgWhiteDefault">
                    <div className="flex h-11 justify-between border-b border-neutral-gray-2 px-4 py-3">
                      <span className="flex items-center text-textOnWhitePrimary b2-medium">
                        Đã chọn 4 khuyến mãi và ưu đãi
                      </span>
                    </div>
                    <div className="flex h-[70px] gap-2 px-4 py-3">
                      <div className="h-[46px] w-1/2">
                        <span className="text-textOnWhiteBrand h6-semibold">
                          45.990.000&nbsp;₫
                        </span>
                        <div className="flex h-[18px] gap-0.5 f1-medium">
                          <span className="text-textOnWhitePrimary">
                            Tiết kiệm
                          </span>
                          <span className="text-textOnWhiteBrand">
                            2.000.000&nbsp;₫
                          </span>
                        </div>
                      </div>
                      <button className="Button_root__LQsbl Button_btnSmall__aXxTy Button_redPrimary__Rvn3w Button_btnSquare___qM_O w-[145px] flex-1 b1-medium">
                        {""}
                        <span>Xác nhận</span>
                        {""}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Checkout;
