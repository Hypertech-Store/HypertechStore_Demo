/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

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
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [voucherData, setVoucherData] = useState(null); // Dữ liệu voucher từ API
  const [errorMessage, setErrorMessage] = useState(""); // Trạng thái lưu thông báo lỗi
  const [successMessage, setSuccessMessage] = useState(""); // Trạng thái lưu thông báo thành công
  // eslint-disable-next-line no-unused-vars
  const [selectedOption, setSelectedOption] = useState(null);
  // State để kiểm tra tình trạng hiện tại của button (đang hiển thị SVG ban đầu hay SVG thay thế)
  // eslint-disable-next-line no-unused-vars
  const [isClicked, setIsClicked] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [giaTriGiamGia, setGiaTriGiamGia] = useState(0);
  const [ngayKetThuc, setNgayKetThuc] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [moTa, setMoTa] = useState("");

  const [discountAmount, setDiscountAmount] = useState(0);
  const [isVoucherApplied, setIsVoucherApplied] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [vouchers, setVouchers] = useState([]);
  const [showVoucherForm, setShowVoucherForm] = useState(false);

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

  useEffect(() => {
    import("../../../assets/js/main.js")
      .then((module) => {
        if (module.default) {
          module.default(); // Gọi hàm mặc định nếu có
        }
      })
      .catch((error) => console.error("Error loading main.js:", error));
  }, []);

  // Giả sử thông tin đã lưu trong localStorage (hoặc có thể dùng localStorage)
  useEffect(() => {
    // Lấy thông tin user từ localStorage
    const userInfoStored = localStorage.getItem("userInfo");
    if (userInfoStored) {
      const userInfo = JSON.parse(userInfoStored);
      setUserInfo(userInfo); // Cập nhật state cho thông tin user

      // Log ra toàn bộ thông tin user
      console.log("User Info:", userInfo);
    } else {
      setUserInfo(null);
      console.log("No user info found in localStorage.");
    }

    // Lấy danh sách sản phẩm từ localStorage
    const productsStored = localStorage.getItem("selectedProducts");
    if (productsStored) {
      const products = JSON.parse(productsStored);
      if (Array.isArray(products) && products.length > 0) {
        setProducts(products); // Cập nhật state với danh sách sản phẩm
        console.log("Selected Products retrieved:", products); // Log danh sách sản phẩm
      } else {
        console.log("Selected products array is empty or invalid.");
      }
    } else {
      console.log("No selected products found in localStorage.");
    }

    // Kiểm tra nếu mã giảm giá đã được áp dụng trước đó (từ localStorage)
    const voucherApplied = localStorage.getItem("voucherApplied");
    if (!voucherApplied) {
      setDiscountAmount(0); // Nếu không có mã giảm giá, set giảm giá về 0
    } else {
      const storedDiscountAmount = localStorage.getItem("discountAmount");
      if (storedDiscountAmount) {
        setDiscountAmount(parseFloat(storedDiscountAmount));
        setSuccessMessage("Áp dụng mã giảm giá thành công!");
      }
    }
  }, []);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://127.0.0.1:8000/api/get-all-hinh-thuc-van-chuyen")
      .then((response) => response.json())
      .then((data) => setShippingOptions(data))
      .catch((error) => console.error("Error fetching shipping data:", error));
  }, []);

  const handleShippingChange = (e, option) => {
    console.log("Selected shipping option:", option);
    setShippingCost(Number(e.target.value));
  };

  const getDeliveryDate = (option) => {
    let date = new Date();
    if (option) {
      if (option.ten_van_chuyen === "Ship hỏa tốc") {
        // Giao ngay trong ngày
        return date.toLocaleDateString();
      } else if (option.ten_van_chuyen === "Ship nhanh") {
        // Giao trong 5 ngày
        date.setDate(date.getDate() + 5); // Cố định 5 ngày
        return date.toLocaleDateString();
      }
    }
    return "Chưa chọn hình thức vận chuyển"; // Trả về nếu chưa chọn hình thức vận chuyển
  };

  // Fetch voucher data từ API
  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        if (subtotal <= 0) {
          console.log("Subtotal must be greater than 0 to fetch voucher.");
          setShowVoucherForm(false);
          return;
        }

        const response = await fetch(
          "http://127.0.0.1:8000/api/phieu-giam-gia/phieu-giam-gia-phu-hop",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ gia_tri_don_hang: subtotal }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Vouchers data fetched: ", data);

        const voucher = data.data[0]; // Lấy voucher đầu tiên trong mảng

        // Kiểm tra nếu số lượt sử dụng = 0 thì không hiển thị voucher
        if (voucher.so_luot_su_dung === 0) {
          setShowVoucherForm(false); // Ẩn voucher form
          return;
        }

        setVoucherData(voucher); // Lưu voucher vào trạng thái

        const minimumOrderValue = parseFloat(
          voucher.gia_tri_don_hang_toi_thieu
        );
        const today = new Date();
        const startDate = new Date(voucher.ngay_bat_dau);
        const endDate = new Date(voucher.ngay_ket_thuc);

        // Kiểm tra ngày bắt đầu và ngày kết thúc
        if (
          subtotal > minimumOrderValue &&
          today >= startDate &&
          today <= endDate
        ) {
          // Tính toán tiền giảm
          const discountAmount = (subtotal * voucher.gia_tri_giam_gia) / 100;
          setGiaTriGiamGia(voucher.gia_tri_giam_gia); // Tỷ lệ giảm giá
          setNgayKetThuc(voucher.ngay_ket_thuc); // Ngày hết hạn
          setMoTa(voucher.mo_ta); // Mô tả giảm giá
          setDiscountAmount(discountAmount); // Tiền giảm
          setShowVoucherForm(true); // Hiển thị voucher form
        } else {
          setShowVoucherForm(false); // Ẩn voucher form
        }
      } catch (error) {
        console.error("Error fetching vouchers:", error);
      }
    };

    // Chỉ gọi fetchVouchers nếu có subtotal và voucher đã được áp dụng trước đó
    if (subtotal > 0) {
      fetchVouchers();
    }
  }, [subtotal]);

  // Hàm thay đổi giá trị trong input
  const handleInputChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const handleSvgClick = () => {
    if (isClicked) {
      // Nếu đã nhấn, xóa mã giảm giá và đặt trạng thái về chưa nhấn
      setDiscountCode("");
      setIsClicked(false);
    } else {
      // Nếu chưa nhấn, hiển thị mã giảm giá và đặt trạng thái là đã nhấn
      if (voucherData) {
        setDiscountCode(voucherData.ma_giam_gia);
      }
      setIsClicked(true);
    }
  };

  // Tính toán subtotal và total
  useEffect(() => {
    let currentSubtotal = 0;
    products.forEach((product) => {
      currentSubtotal += product.tong_tien; // Tính tổng giá sản phẩm
    });

    // Chỉ trừ số tiền giảm giá khi voucher được áp dụng
    const discount = isVoucherApplied ? discountAmount : 0;
    const currentTotal = currentSubtotal - discount + shippingCost;

    setSubtotal(currentSubtotal);
    setTotal(currentTotal);
  }, [products, shippingCost, discountAmount, isVoucherApplied]);

  useEffect(() => {
    // Fetching data from the API
    fetch("http://127.0.0.1:8000/api/phuong-thuc-thanh-toan")
      .then((response) => response.json())
      .then((data) => setPaymentMethods(data))
      .catch((error) =>
        console.error("Error fetching payment methods:", error)
      );
  }, []);

  // Hàm kiểm tra và áp dụng mã giảm giá
  const handleApplyVoucher = async () => {
    try {
      if (!userInfo || !discountCode) {
        throw new Error("Vui lòng nhập mã giảm giá và xác định khách hàng.");
      }

      const customerId = userInfo.id; // Lấy customerId từ userInfo

      if (!customerId) {
        throw new Error(
          "Không tìm thấy thông tin khách hàng trong phiên làm việc."
        );
      }

      // Gửi yêu cầu API để kiểm tra mã giảm giá
      const response = await fetch(
        "http://127.0.0.1:8000/api/phieu-giam-gia/check-phieu-giam-gia",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            khach_hang_id: customerId,
            ma_giam_gia: discountCode,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Lỗi phản hồi từ API:", errorText);
        throw new Error("Mã giảm giá không hợp lệ.");
      }

      const data = await response.json();

      if (data.success) {
        setErrorMessage(""); // Xóa thông báo lỗi
        setSuccessMessage("Áp dụng mã giảm giá thành công!");

        // Tính toán số tiền giảm giá
        const discount =
          (subtotal * parseFloat(data.data.gia_tri_giam_gia)) / 100;
        setDiscountAmount(discount); // Lưu số tiền giảm giá vào state
        setIsVoucherApplied(true); // Đánh dấu mã giảm giá đã được áp dụng
      } else {
        throw new Error("Mã giảm giá không hợp lệ.");
      }
    } catch (error) {
      console.error("Lỗi:", error.message);
      setSuccessMessage(""); // Xóa thông báo thành công
      setErrorMessage(error.message); // Hiển thị lỗi
      setIsVoucherApplied(false); // Đảm bảo không trừ số tiền giảm giá
      setDiscountAmount(0); // Reset tiền giảm giá về 0
    }
  };

  const goToCart = () => {
    navigate("/cua-hang"); // Điều hướng đến trang giỏ hàng
    window.location.reload(); // Forces the page to refresh
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const generateRandomOrderCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const address = document.getElementById("address").value;

    if (!userInfo || !userInfo.id) {
      console.error("Không có thông tin khách hàng.");
      return;
    }

    const khachHangId = userInfo.id;

    const selectedShippingOption = shippingOptions.find(
      (option) => Number(option.gia_van_chuyen) === Number(shippingCost)
    );

    if (!selectedShippingOption) {
      console.error("Không tìm thấy phương thức vận chuyển phù hợp.");
      return;
    }

    console.log("shippingCost (Number):", Number(shippingCost));
    console.log(
      "shippingOptions (gia_van_chuyen as Number):",
      shippingOptions.map((opt) => Number(opt.gia_van_chuyen))
    );
    console.log("Selected shipping option:", selectedShippingOption);

    const selectedPaymentMethod = paymentMethods.find(
      (method) => method.ten_phuong_thuc === selectedPayment
    );

    if (!selectedPaymentMethod) {
      console.error("Không tìm thấy phương thức thanh toán phù hợp.");
      return;
    }

    const orderCode = generateRandomOrderCode();

    const orderData = {
      ma_don_hang: orderCode, // Thêm mã đơn hàng ngẫu nhiên
      khach_hang_id: khachHangId,
      phuong_thuc_thanh_toan_id: selectedPaymentMethod.id,
      hinh_thuc_van_chuyen_id: selectedShippingOption.id,
      tong_tien: total,
      ma_giam_gia: discountCode || null,
      dia_chi_giao_hang: address,
      products: products.map((product) => ({
        san_pham_id: product.san_pham_id,
        bien_the_san_pham_id: product.bien_the_san_pham_id,
        attributes: product.bien_the.map((item) => ({
          gia_tri_thuoc_tinh_id: item.gia_tri_thuoc_tinh_id,
          ten_gia_tri: item.ten_gia_tri,
        })),
        so_luong: product.so_luong,
        gia: product.tong_tien,
      })),
    };

    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Log dữ liệu orderData trước khi gửi yêu cầu
    console.log("Order Data:", orderData);

    const spinnerModalElement = document.getElementById("paymentSpinnerModal");
    if (!spinnerModalElement) {
      console.error("Không tìm thấy modal spinner trong DOM.");
      return; // Dừng nếu modal không tồn tại
    }

    // eslint-disable-next-line no-undef
    const spinnerModal = new bootstrap.Modal(
      document.getElementById("paymentSpinnerModal")
    );
    spinnerModal.show();

    try {
      if (selectedPaymentMethod.id === 2) {
        // Thanh toán bằng VNPAY
        const vnpayResponse = await fetch(
          "http://127.0.0.1:8000/api/thanh-toan/vppay/create",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: total,
              ma_don_hang: orderCode,
            }),
          }
        );

        const vnpayData = await vnpayResponse.json();

        if (!vnpayResponse.ok || vnpayData.code !== "00") {
          throw new Error("Gửi yêu cầu thanh toán VNPAY thất bại");
        }

        // Redirect đến URL thanh toán VNPAY
        window.location.href = vnpayData.data;
        return;
      } else {
        const orderResponse = await fetch(
          "http://127.0.0.1:8000/api/donhang/orders",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
          }
        );

        console.log(orderResponse);

        if (!orderResponse.ok) {
          throw new Error("Gửi đơn hàng thất bại");
        }

        const data = await orderResponse.json();
        console.log(data);

        console.log("Đơn hàng đã được gửi:", data);
      }

      // Sau khi thanh toán thành công, xóa giỏ hàng bằng khach_hang_id
      if (khachHangId) {
        const deleteCartResponse = await fetch(
          `http://127.0.0.1:8000/api/gio-hang/xoa-gio-hang/${khachHangId}`,
          {
            method: "DELETE",
          }
        );

        if (!deleteCartResponse.ok) {
          throw new Error("Xóa giỏ hàng thất bại");
        }

        console.log("Giỏ hàng đã được xóa cho khách hàng:", khachHangId);
      }

      // Đóng spinner modal sau khi thanh toán thành công và mở modal thành công
      setTimeout(() => {
        spinnerModal.hide(); // Ẩn spinner modal
        const successModalElement = document.getElementById(
          "paymentSuccessModal"
        );
        if (successModalElement) {
          // eslint-disable-next-line no-undef
          const successModal = new bootstrap.Modal(
            document.getElementById("paymentSuccessModal")
          );
          successModal.show();
        } else {
          console.error("Không tìm thấy modal thành công trong DOM.");
        }
      }, 3000); // Đợi 3 giây để hiển thị spinner trước khi hiển thị thành công
    } catch (error) {
      console.error("Lỗi gửi đơn hàng:", error);

      // Đóng modal spinner và hiển thị lỗi (nếu có lỗi)
      setTimeout(() => {
        spinnerModal.hide(); // Ẩn spinner modal
        alert("Đã có lỗi xảy ra khi gửi đơn hàng, vui lòng thử lại sau.");
      }, 3000); // Đợi 3 giây trước khi ẩn spinner
    }
  };

  const handleVNPAYReturn = () => {
    // Lấy các tham số từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const vnp_ResponseCode = urlParams.get("vnp_ResponseCode");

    // Kiểm tra mã phản hồi từ VNPAY
    if (vnp_ResponseCode === "00") {
      // Lấy orderData từ localStorage
      const orderData = JSON.parse(localStorage.getItem("orderData"));

      if (orderData) {
        // Gửi thông tin đơn hàng vào hệ thống
        fetch("http://127.0.0.1:8000/api/donhang/orders", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        })
          .then((orderResponse) => {
            if (!orderResponse.ok) {
              throw new Error("Gửi đơn hàng thất bại");
            }
            return orderResponse.json();
          })
          .then((data) => {
            console.log("Đơn hàng đã được gửi:", data);

            // Sau khi thanh toán thành công, xóa giỏ hàng bằng khach_hang_id
            const khachHangId = orderData.khach_hang_id;
            if (khachHangId) {
              return fetch(
                `http://127.0.0.1:8000/api/gio-hang/xoa-gio-hang/${khachHangId}`,
                {
                  method: "DELETE",
                }
              );
            }
          })
          .then((deleteCartResponse) => {
            if (deleteCartResponse && !deleteCartResponse.ok) {
              throw new Error("Xóa giỏ hàng thất bại");
            }

            console.log(
              "Giỏ hàng đã được xóa cho khách hàng:",
              orderData.khach_hang_id
            );

            // Gửi email thông báo thanh toán thành công
            return fetch("http://127.0.0.1:8000/api/donhang/send-mail", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                khach_hang_id: orderData.khach_hang_id,
                order_id: orderData.ma_don_hang,
                total: orderData.tong_tien,
                payment_time: new Date().toISOString(),
              }),
            });
          })
          .then((mailResponse) => {
            if (mailResponse && !mailResponse.ok) {
              throw new Error("Gửi email thất bại");
            }

            console.log("Email thông báo thanh toán thành công đã được gửi.");
          })
          .then(() => {
            // Đóng spinner modal và hiển thị modal thành công
            const spinnerModalElement = document.getElementById(
              "paymentSpinnerModal"
            );
            if (spinnerModalElement) {
              const spinnerModal = new bootstrap.Modal(spinnerModalElement);
              spinnerModal.hide(); // Ẩn spinner modal
            }

            // Mở modal thành công sau 3 giây
            const successModalElement = document.getElementById(
              "paymentSuccessModal"
            );
            if (successModalElement) {
              const successModal = new bootstrap.Modal(successModalElement);
              setTimeout(() => {
                successModal.show();
              }, 3000); // Đợi 3 giây để hiển thị spinner trước khi mở modal thành công
            } else {
              console.error("Không tìm thấy modal thành công trong DOM.");
            }
          })
          .catch((error) => {
            console.error("Lỗi:", error);

            // Đóng modal spinner và hiển thị lỗi
            const spinnerModalElement = document.getElementById(
              "paymentSpinnerModal"
            );
            if (spinnerModalElement) {
              const spinnerModal = new bootstrap.Modal(spinnerModalElement);
              setTimeout(() => {
                spinnerModal.hide(); // Ẩn spinner modal
                alert("Đã có lỗi xảy ra, vui lòng thử lại sau.");
              }, 3000); // Đợi 3 giây trước khi ẩn spinner
            }
          })
          .finally(() => {
            // Xóa orderData khỏi localStorage sau khi xử lý xong
            localStorage.removeItem("orderData");
          });
      } else {
        console.error("Không tìm thấy thông tin đơn hàng trong cache.");
      }
    } else {
      console.error("Thanh toán không thành công, mã lỗi:", vnp_ResponseCode);
      // Xử lý khi thanh toán không thành công
      alert("Thanh toán thất bại. Vui lòng thử lại.");
    }
  };

  // Gọi hàm handleVNPAYReturn khi trang load
  window.onload = handleVNPAYReturn;

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
                              Dự kiến giao hàng: {getDeliveryDate(option)}
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
                    <button
                      className="btn btn-link pe-0"
                      type="button"
                      onClick={goToCart} // Gọi goToCart khi nhấn vào nút
                    >
                      Tiếp tục mua sắm
                      <span className="fas fa-chevron-right icon-small" />
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
                                  src={`${baseUrl}${product.images}`}
                                  width={40}
                                  alt={product.ten_san_pham || "Sản phẩm"}
                                />
                                <h6 className="fw-semibold text-body-highlight lh-base">
                                  {product.ten_san_pham} {/* Tên sản phẩm */}
                                  <div>
                                    <span>
                                      <strong
                                        style={{
                                          color: "#dc2626",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {product.bien_the &&
                                        Array.isArray(product.bien_the)
                                          ? product.bien_the.join(" - ")
                                          : product.bien_the}
                                      </strong>
                                    </span>
                                  </div>
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
                                {parseInt(product.tong_tien).toLocaleString()}{" "}
                                VNĐ
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
                        {isVoucherApplied && discountAmount > 0
                          ? `- ${discountAmount.toLocaleString()} VNĐ` // Hiển thị giảm giá
                          : "0"}
                      </h5>
                    </div>

                    {/* Shipping cost */}
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="text-body fw-semibold">Phí vận chuyển</h5>
                      <h5 className="text-body fw-semibold">
                        {shippingCost > 0
                          ? `${shippingCost.toLocaleString()} VNĐ`
                          : "0"}
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
              <div className="card mt-lg-3">
                <div className="card-body">
                  <div className="cart-title mb-4">
                    <h3 className="mb-5">Phương thức thanh toán</h3>
                  </div>
                  <div className="payment-methods">
                    {paymentMethods.map((method) => (
                      <div
                        className="method-item d-flex align-items-center mb-3"
                        key={method.id}
                      >
                        <input
                          type="radio"
                          id={method.ten_phuong_thuc}
                          name="paymentMethod"
                          value={method.ten_phuong_thuc}
                          className="form-check-input me-3"
                          onChange={handlePaymentMethodChange} // Xử lý sự kiện thay đổi lựa chọn
                          checked={selectedPayment === method.ten_phuong_thuc} // Kiểm tra xem phương thức thanh toán này đã được chọn chưa
                        />
                        <label
                          htmlFor={method.ten_phuong_thuc}
                          className="d-flex align-items-center"
                        >
                          <img
                            className="me-3"
                            src={`${baseUrl}${method.anh_phuong_thuc}`}
                            alt={method.ten_phuong_thuc}
                            width="30"
                          />
                          <span>{method.ten_phuong_thuc}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card mt-lg-4">
                <button
                  className="btn btn-primary"
                  type="button" // Đặt type là "button" thay vì "submit"
                  onClick={handleSubmit} // Gắn sự kiện click với hàm handleSubmit
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Spinner Modal */}

        <div
          className="modal fade"
          id="paymentSpinnerModal"
          tabIndex={-1}
          aria-labelledby="paymentSpinnerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-transparent border-0 text-center">
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>

              <div className="mt-3 text-white fw-bold">
                Đang xử lý thanh toán ...
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="paymentSuccessModal"
          tabIndex={-1}
          aria-labelledby="paymentSuccessModalLabel"
          aria-hidden="true"
          style={{ width: "100%", height: "100%" }}
        >
          <div
            className="modal-dialog modal-fullscreen d-flex justify-content-center align-items-center m-0"
            role="document"
          >
            <div className="modal-content bg-white m-0 p-5 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-success"
                    width={75}
                    height={75}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </div>

                <h1>Mua hàng thành công!</h1>
                <p
                  style={{
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    maxWidth: "70%",
                    margin: "0 auto",
                  }}
                  className="mt-2"
                >
                  Đơn hàng của bạn đã được xử lý thành công. Email xác nhận có
                  thông tin chi tiết về đơn hàng đã được gửi đến hộp thư đến của
                  bạn. Cảm ơn bạn đã mua sắm với chúng tôi!
                </p>
                <button className="btn btn-primary mt-4" onClick={goToCart}>
                  Tiếp tục mua sắm
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
                        value={discountCode} // Giá trị ô input là discountCode
                        onChange={handleInputChange}
                      />
                      <button
                        className="btn btn-phoenix-primary"
                        disabled={!discountCode}
                        style={{ marginLeft: "0px" }}
                        onClick={handleApplyVoucher} // Gọi sự kiện khi nhấn nút
                      >
                        Áp dụng
                      </button>
                    </div>
                    <span
                      className={`codeboxinput__dropdown--content1 ${
                        errorMessage
                          ? "error_codebox_input"
                          : "success_codebox_input"
                      }`}
                    >
                      {errorMessage || successMessage}
                    </span>
                  </div>
                </div>
                {!showVoucherForm ? (
                  <div className="popup-promotion-code-box--empty">
                    <i className="popup-promotion-code-box__empty-voucher" />
                    <h1 className="title-empty-promotion">Mã giảm giá trống</h1>
                    <p className="caution-empty-promotion">
                      {" "}
                      Vui lòng nhập mã giảm có thể sử dụng vào thanh bên trên{" "}
                    </p>
                  </div>
                ) : (
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
                          Giảm ngay {discountAmount.toLocaleString("vi-VN")} VNĐ
                          áp dụng đến{" "}
                          {new Date(ngayKetThuc).toLocaleDateString("vi-VN")}
                        </span>
                        <span className="truncate f2-regular text-textOnWhiteSecondary">
                          {moTa}
                        </span>
                      </div>
                    </div>
                    <div className="relative flex w-[47px] items-center justify-center rounded-r-2 border-l border-dashed border-bgGrayDefault bg-bgWhiteDefault">
                      <div className="absolute left-[-6px] top-[-6px] h-2.5 w-2.5 rounded-full bg-bgGrayDefault" />
                      <div className="absolute bottom-[-6px] left-[-6px] h-2.5 w-2.5 rounded-full bg-bgGrayDefault" />
                      <button className="flex h-[24px] w-[24px] items-center justify-center rounded-full cursor-pointer bg-red-red-2">
                        {!isClicked ? (
                          // Hiển thị SVG ban đầu khi chưa nhấn
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleSvgClick} // Gọi hàm khi nhấn vào SVG
                          >
                            <path
                              d="M7.67742 0.677419C7.67742 0.303291 7.37413 0 7 0C6.62587 0 6.32258 0.303291 6.32258 0.677419V6.32258H0.677419C0.303291 6.32258 0 6.62587 0 7C0 7.37413 0.303291 7.67742 0.677419 7.67742H6.32258V13.3226C6.32258 13.6967 6.62587 14 7 14C7.37413 14 7.67742 13.6967 7.67742 13.3226V7.67742H13.3226C13.6967 7.67742 14 7.37413 14 7C14 6.62587 13.6967 6.32258 13.3226 6.32258H7.67742V0.677419Z"
                              fill="#DC2626"
                            />
                            <path
                              d="M7.67742 0.677419C7.67742 0.303291 7.37413 0 7 0C6.62587 0 6.32258 0.303291 6.32258 0.677419V6.32258H0.677419C0.303291 6.32258 0 6.62587 0 7C0 7.37413 0.303291 7.67742 0.677419 7.67742H6.32258V13.3226C6.32258 13.6967 6.62587 14 7 14C7.37413 14 7.67742 13.6967 7.67742 13.3226V7.67742H13.3226C13.6967 7.67742 14 7.37413 14 7C14 6.62587 13.6967 6.32258 13.3226 6.32258H7.67742V0.677419Z"
                              fill="#DC2626"
                              fillOpacity="0.2"
                            />
                          </svg>
                        ) : (
                          // Hiển thị SVG đã nhấn cùng ô input

                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleSvgClick} // Trở về trạng thái SVG ban đầu khi nhấn
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
                        )}
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Checkout;
