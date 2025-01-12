import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import haha from "../../../assets/img/e-commerce/image-removebg-preview.png";
import defaultAvatar from "../../../assets/img/team/image-default.png";

const link = "http://127.0.0.1:8000/storage/";
function Profile() {
  document.title = "Hypertech Store - Thông tin cá nhân";

  const [orders, setOrders] = useState([]);
  const [currentOrderPage, setCurrentOrderPage] = useState(1);
  const [totalOrderPages, setTotalOrderPages] = useState(1);
  const [totalOrder, setTotalOrder] = useState(0);
  const ordersPerPage = 5; // Number of orders per page
  const [totalSpent, setTotalSpent] = useState(0); // Tổng tiền đã chi tiêu
  const [lastOrderDate, setLastOrderDate] = useState(""); // Thời gian đơn hàng cuối
  // eslint-disable-next-line no-unused-vars
  const [totalOrders, setTotalOrders] = useState(0);

  const [passwordVisible, setPasswordVisible] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const storedUserInfo = localStorage.getItem("userInfo");
  const [formData, setFormData] = useState({});
  const [avatar, setAvatar] = useState(null);

  const user = JSON.parse(storedUserInfo);
  const userId = user.id;

  console.log(orders);

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const breadcrumbTitles = {
    "thong-tin-tai-khoan": "Thông tin tài khoản", // Đây là URL không có "/"
  };
  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/donhang/orders/${userId}?page=${currentOrderPage}&number_row=${ordersPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        const orders = data.don_hangs.data;
        setOrders(orders); // Gán dữ liệu đơn hàng vào state
        setTotalOrderPages(data.total_pages); // Đặt tổng số trang từ API
        setTotalOrders(data.total_records || 0); // Tổng số đơn

        // Tính toán tổng tiền đã chi tiêu và kiểm tra giá trị của order.tong_tien
        const totalSpentValue = orders.reduce((sum, order) => {
          const orderTotal = parseFloat(order.tong_tien); // Chuyển đổi thành số (dùng parseFloat)
          return !isNaN(orderTotal) ? sum + orderTotal : sum; // Kiểm tra xem giá trị có hợp lệ hay không
        }, 0);

        // Định dạng tổng tiền theo VNĐ nếu totalSpentValue là số hợp lệ
        const formattedTotalSpent =
          new Intl.NumberFormat("vi-VN").format(totalSpentValue) + " VNĐ";

        setTotalSpent(formattedTotalSpent); // Gán kết quả vào state
        console.log(formattedTotalSpent);

        // Lấy thông tin của đơn hàng cuối cùng và hiển thị thời gian đặt hàng
        const lastOrder = orders.length > 0 ? orders[orders.length - 1] : null;

        // Tính toán thời gian cách đây bao lâu
        const timeDifference = lastOrder
          ? new Date() - new Date(lastOrder.created_at)
          : 0;

        let timeAgo = "No orders yet";

        if (timeDifference > 0) {
          const minutes = Math.floor(timeDifference / 60000); // thời gian tính theo phút
          if (minutes < 60) {
            timeAgo = `${minutes} phút trước`;
          } else {
            const hours = Math.floor(minutes / 60);
            if (hours < 24) {
              timeAgo = `${hours} giờ trước`;
            } else {
              const days = Math.floor(hours / 24);
              timeAgo = `${days} ngày trước`;
            }
          }
        }

        setLastOrderDate(timeAgo);

        setOrders(data.don_hangs.data); // Assign order data to state
        setTotalOrderPages(data.total_pages);
        setTotalOrder(data.don_hangs.total);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [currentOrderPage]); // Tái nạp dữ liệu khi trang hiện tại thay đổi

  // Handle previous page

  // Handle next page

  // Handle page change (clicking a page number)
  const handleOrderPageChange = (pageNumber) => {
    setCurrentOrderPage(pageNumber);
  };

  const numberFormat = new Intl.NumberFormat("vi-VN", {
    style: "decimal", // Sử dụng kiểu "decimal" thay vì "currency"
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/khach-hang/profile/${userId}`
        );
        const data = await response.json();
        setAvatar(data?.user?.hinh_anh);

        console.log("Fetched Data:", data);

        const birthday = data.user.ngay_sinh || "";
        const [year, month, day] = birthday.split("-");

        // Format created_at to a readable date (e.g., "Dec 10, 2024")
        const createdDate = new Date(data.user.created_at).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "short",
            day: "numeric",
            timeZone: "UTC", // Đảm bảo giữ nguyên múi giờ UTC
          }
        );

        setFormData({
          ho_ten: data.user.ho_ten || "",
          ten_nguoi_dung: data.user.ten_nguoi_dung || "",
          email: data.user.email || "",
          dien_thoai: data.user.dien_thoai || "",
          dia_chi: data.user.dia_chi || "",
          gioi_tinh: data.user.gioi_tinh || "",
          ngay_sinh: birthday,
          ngay: day?.padStart(2, "0") || "",
          thang: month?.padStart(2, "0") || "",
          nam: year || "",
          mat_khau: "",
          joinedDate: createdDate, // Save the formatted created_at date
        });
      } catch (error) {
        console.error("Có lỗi khi tải dữ liệu", error);
      }
    };

    fetchProfileData();
  }, []);

  // Handle profile update
  const handleUpdateProfile = async () => {
    try {
      const url = `http://127.0.0.1:8000/api/khach-hang/update-profile/${userId}`;
      const submitData = new FormData();
      for (const key in formData) {
        submitData.append(key, formData[key]);
      }
      submitData.append("_method", "PUT");
      const response = await fetch(url, {
        method: "POST",
        body: submitData,
      });

      // Kiểm tra mã trạng thái và log phản hồi chi tiết
      if (response.ok) {
        const data = await response.json(); // Phân tích JSON khi thành công
        console.log("Cập nhật thành công:", data);

        const updatedUser = {
          id: data?.data?.id, // Kiểm tra cả hai trường hợp
          hinh_anh: data?.data?.hinh_anh,
          ho_ten: data?.data?.ho_ten,
          ten_nguoi_dung: data?.data?.ten_nguoi_dung,
          email: data?.data?.email,
          dien_thoai: data?.data?.dien_thoai,
          dia_chi: data?.data?.dia_chi,
          ngay_sinh: data?.data?.ngay_sinh,
        };

        localStorage.setItem("userInfo", JSON.stringify(updatedUser));

        alert(data.message || "Cập nhật thông tin thành công!");
        // window.location.reload();
      } else {
        // Log mã lỗi và phản hồi nếu không phải 2xx
        const errorData = await response.json(); // Phân tích JSON nếu server trả về dữ liệu dạng JSON
        console.error("Cập nhật thất bại:", errorData); // Log chi tiết lỗi
        alert(errorData.message || "Cập nhật thất bại! Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Có lỗi khi cập nhật thông tin:", error);
      alert("Có lỗi khi cập nhật thông tin! Vui lòng thử lại.");
    }
  };

  //   Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value, // Chỉ cập nhật trường đang thay đổi
      };

      // Chỉ cập nhật `ngay_sinh` nếu có đủ `ngay`, `thang`, `nam`
      if (updatedData.nam && updatedData.thang && updatedData.ngay) {
        updatedData.ngay_sinh = `${updatedData.nam}-${updatedData.thang}-${updatedData.ngay}`;
      } else {
        updatedData.ngay_sinh = prevData.ngay_sinh; // Giữ nguyên nếu thiếu thông tin
      }

      return updatedData;
    });
  };

  const years = Array.from({ length: 2025 - 1990 + 1 }, (v, i) => 1990 + i);

  //danh sách yêu thích
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const [wishlistCount, setWishlistCount] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/danh-sach-yeu-thich/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const productList = data.map((item) => ({
          image: item.san_pham.duong_dan_anh,
          name: item.san_pham.ten_san_pham,
          price: parseFloat(item.san_pham.gia),
          stock: item.san_pham.so_luong_ton_kho,
          id: item.san_pham_id,
        }));
        setProducts(productList);
        console.log("Data API:", productList);
        setWishlistCount(productList.length);
      })
      .catch((error) => console.error("Error fetching wishlist data:", error));
  }, [userId]);


  const [reviews, setReviews] = useState([]);
  const [reviewPerPage] = useState(10);
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [totalReviewPages, setTotalReviewPages] = useState(1);
  const [totalReview, setTotalReview] = useState(1);
  useEffect(() => {
    // Fetch data for the current page
    axios
      .get(
        `http://127.0.0.1:8000/api/danh-gia/khach-hang/${userId}?page=${currentReviewPage}&limit=${reviewPerPage}`
      )
      .then((response) => {
        console.log(response);
        setTotalReview(response.data.data.total);

        setReviews(response.data.data.data); // Dữ liệu của trang hiện tại
        setTotalReviewPages(response.data.data.last_page); // Tổng số trang
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentReviewPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalReviewPages) {
      setCurrentPage(page);
    }
  };
  console.log(reviews);


  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  // Pagination logic
  const totalPages = Math.ceil(products.length / productsPerPage);
  const visibleProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const removeFromWishlist = (productId) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa sản phẩm này không?",
      text: "Bạn sẽ không thể hoàn tác hành động này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý, xóa sản phẩm!",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        // Gửi yêu cầu API để xóa sản phẩm khỏi danh sách yêu thích
        fetch(`http://127.0.0.1:8000/api/danh-sach-yeu-thich/destroy`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            khach_hang_id: userId, // Gửi userId trong body
            san_pham_id: productId, // Gửi productId trong body
          }),
        })
          .then((response) => {
            if (response.ok) {
              // Cập nhật danh sách sản phẩm và hiển thị thông báo thành công
              setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id !== productId)
              ); // Xóa sản phẩm khỏi danh sách
              setWishlistCount((prevCount) => prevCount - 1);
              toast.success("Bạn đã xóa thành công sản phẩm yêu thích!");
            } else {
              // Xử lý nếu API trả về lỗi
              toast.error("Không thể xóa sản phẩm khỏi danh sách yêu thích!");
              console.error("Failed to remove product from wishlist");
            }
          })
          .catch((error) => {
            // Xử lý lỗi nếu không thể kết nối đến API
            toast.error("Đã xảy ra lỗi khi xóa sản phẩm!");
            console.error("Error:", error);
          });
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
      setFormData((pre) => ({
        ...pre,
        image: file,
      }));
    }
  };

  const handleCancelOrder = (orderId, currentStatusId) => {
    const newStatusId = 2; // Trạng thái "Đã hủy"

    if (currentStatusId !== 1) {
      alert("Chỉ có thể hủy đơn hàng khi ở trạng thái mới.");
      return;
    }

    // Yêu cầu nhập lý do hủy
    const reason = prompt("Vui lòng nhập lý do hủy đơn hàng:");
    if (!reason) {
      alert("Lý do hủy không được để trống.");
      return;
    }

    // Đẩy lý do hủy lên request
    fetch(`http://127.0.0.1:8000/api/don-hang/update/${orderId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        trang_thai_don_hang_id: newStatusId,
        ly_do_huy_don: reason,
        nguoi_huy: "client_" + userId,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Đơn hàng đã được hủy.");
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId
              ? {
                ...order,
                trang_thai_don_hang_id: newStatusId,
                trang_thai_don_hang: getStatusName(newStatusId),
                ly_do_huy_don: reason,
                nguoi_huy: "client_" + userId,
              }
              : order
          )
        );
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật trạng thái:", error);
        alert("Đã xảy ra lỗi khi cập nhật trạng thái.");
      });
  };


  const handleConfirmReceived = (orderId) => {
    const newStatusId = 7; // Trạng thái "Đã hoàn thành"
  
    if (confirm("Bạn có chắc chắn muốn xác nhận đã nhận hàng không?")) {
      // Gửi yêu cầu cập nhật trạng thái
      fetch(`http://127.0.0.1:8000/api/don-hang/update/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trang_thai_don_hang_id: newStatusId,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Đơn hàng đã được xác nhận là đã nhận.");
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.id === orderId
                ? {
                    ...order,
                    trang_thai_don_hang_id: newStatusId,
                    trang_thai_don_hang: getStatusName(newStatusId),
                    nguoi_xac_nhan: "client_" + userId,
                  }
                : order
            )
          );
        })
        .catch((error) => {
          console.error("Lỗi khi cập nhật trạng thái:", error);
          alert("Đã xảy ra lỗi khi cập nhật trạng thái.");
        });
    }
  };

  const handleReturnOrder = (orderId) => {
    const newStatusId = 8;
  
    const reason = prompt("Vui lòng nhập lý do hoàn hàng:");
    if (!reason) {
      alert("Lý do không được để trống.");
      return;
    }
    if (confirm("Bạn có chắc chắn muốn xác nhận hoàn hàng không?")) {
      // Gửi yêu cầu cập nhật trạng thái
      fetch(`http://127.0.0.1:8000/api/don-hang/update/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trang_thai_don_hang_id: newStatusId,
          ly_do_hoan_hang: reason,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Đã gửi yêu cầu hoàn hàng.");
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.id === orderId
                ? {
                    ...order,
                    trang_thai_don_hang_id: newStatusId,
                    trang_thai_don_hang: getStatusName(newStatusId),
                    nguoi_xac_nhan: "client_" + userId,
                  }
                : order
            )
          );
        })
        .catch((error) => {
          console.error("Lỗi khi cập nhật trạng thái:", error);
          alert("Đã xảy ra lỗi khi cập nhật trạng thái.");
        });
    }
  };

  // Hàm để lấy class theo trạng thái đơn hàng
  function getBadgeClass(statusId) {
    switch (statusId) {
      case 1:
        return "badge-phoenix-warning"; // Chờ xác nhận
      case 2:
        return "badge-phoenix-info"; // Chờ lấy hàng
      case 3:
        return "badge-phoenix-primary"; // Chờ giao hàng
      case 4:
        return "badge-phoenix-secondary"; // Đang vận chuyển
      case 5:
        return "badge-phoenix-success"; // Đã giao hàng
      // case 6:
      //   return "badge-phoenix-success"; // Hoàn thành đơn
      case 6:
        return "badge-phoenix-danger"; // Đơn giao thất bại
      default:
        return "badge-phoenix-light"; // Mặc định
    }
  }

  // Function to toggle the visibility of a specific password input
  const togglePasswordVisibility = (field) => {
    setPasswordVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <section className="pt-5 pb-9">
      <div className="container-small">
        <nav className="mb-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              {currentTitle}
            </li>
          </ol>
        </nav>
        <div className="row align-items-center justify-content-between g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Hồ sơ</h2>
          </div>
          <div className="col-auto">
            <div className="row g-2 g-sm-3">
              <div className="col-auto">
                <button className="btn btn-phoenix-danger">
                  <span className="fas fa-trash-alt me-2" />
                  Xóa tài khoản
                </button>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-phoenix-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#changePassword"
                  data-boundary="window"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-key me-2" />
                  Đặt lại mật khẩu
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 mb-6">
          <div className="col-12 col-lg-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="border-bottom border-dashed pb-4">
                  <div className="row align-items-center g-3 g-sm-5 text-center text-sm-start">
                    <div className="col-12 col-sm-auto">
                      <input
                        className="d-none"
                        id="avatarFile"
                        type="file"
                        onChange={handleFileChange}
                      />
                      <label
                        className="cursor-pointer avatar avatar-5xl"
                        htmlFor="avatarFile"
                      >
                        {previewImage || (avatar && avatar.trim() !== "") ? (
                          <img
                            className="rounded-circle"
                            src={previewImage || `${link}${avatar}`}
                            alt="Avatar"
                          />
                        ) : (
                          <img
                            className="rounded-circle"
                            src={defaultAvatar}
                            alt="Default Avatar"
                          />
                        )}
                      </label>
                    </div>
                    <div className="col-12 col-sm-auto flex-1">
                      <h3>{formData.ho_ten || "Your Name"}</h3>
                      <p className="text-body-secondary">
                        Joined {formData.joinedDate || "Date not available"}
                      </p>

                      <div>
                        <a className="me-2" href={formData.linkedin || "#"}>
                          <span className="fab fa-linkedin-in text-body-quaternary text-opacity-75 text-primary-hover" />
                        </a>
                        <a className="me-2" href={formData.facebook || "#"}>
                          <span className="fab fa-facebook text-body-quaternary text-opacity-75 text-primary-hover" />
                        </a>
                        <a href={formData.twitter || "#"}>
                          <span className="fab fa-twitter text-body-quaternary text-opacity-75 text-primary-hover" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-between-center pt-4">
                  <div>
                    <h6 className="mb-2 text-body-secondary">
                      Tổng số tiền đã chi
                    </h6>
                    <h4 className="fs-7 text-body-highlight mb-0">
                      {totalSpent || "0"}
                    </h4>
                  </div>
                  <div className="text-end">
                    <h6 className="mb-2 text-body-secondary">
                      Đơn hàng cuối cùng
                    </h6>
                    <h4 className="fs-7 text-body-highlight mb-0">
                      {lastOrderDate || "No orders yet"}
                    </h4>
                  </div>
                  <div className="text-end">
                    <h6 className="mb-2 text-body-secondary">
                      Tổng số đơn hàng
                    </h6>
                    <h4 className="fs-7 text-body-highlight mb-0">
                      {totalOrder || "0"}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="scrollbar">
            <ul
              className="nav nav-underline fs-9 flex-nowrap mb-3 pb-1"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link text-nowrap active"
                  id="personal-info-tab"
                  data-bs-toggle="tab"
                  href="#tab-personal-info"
                  role="tab"
                  aria-controls="tab-personal-info"
                  aria-selected="true"
                >
                  <span className="fas fa-user me-2" />
                  Thông tin tài khoản
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link text-nowrap"
                  id="orders-tab"
                  data-bs-toggle="tab"
                  href="#tab-orders"
                  role="tab"
                  aria-controls="tab-orders"
                  aria-selected="true"
                >
                  <span className="fas fa-shopping-cart me-2" />
                  Lịch sử đơn hàng{" "}
                  <span className="text-body-tertiary fw-normal">
                    {" "}
                    ({totalOrder})
                  </span>
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link text-nowrap"
                  id="reviews-tab"
                  data-bs-toggle="tab"
                  href="#tab-reviews"
                  role="tab"
                  aria-controls="tab-orders"
                  aria-selected="true"
                >
                  <span className="fas fa-star me-2" />
                  Đánh giá
                  <span className="text-body-tertiary fw-normal"> ({totalReview})</span>
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link text-nowrap"
                  id="wishlist-tab"
                  data-bs-toggle="tab"
                  href="#tab-wishlist"
                  role="tab"
                  aria-controls="tab-wishlist"
                  aria-selected="true"
                >
                  <span className="fas fa-heart me-2" />
                  Danh sách yêu thích{" "}
                  <span className="text-body-tertiary fw-normal">
                    {" "}
                    ({wishlistCount})
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="profileTabContent">
            <div
              className="tab-pane fade show active"
              id="tab-personal-info"
              role="tabpanel"
              aria-labelledby="personal-info-tab"
            >
              <div className="row gx-3 gy-4 mb-5">
                <div className="col-12 col-lg-6">
                  <label
                    className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm"
                    htmlFor="fullName"
                  >
                    Họ và tên
                  </label>
                  <input
                    className="form-control"
                    id="fullName"
                    name="ho_ten"
                    type="text"
                    placeholder="Full name"
                    value={formData.ho_ten}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <label
                    className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm"
                    htmlFor="gender"
                  >
                    Giới tính
                  </label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gioi_tinh"
                    value={formData.gioi_tinh}
                    onChange={handleInputChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="col-12 col-lg-6">
                  <label
                    className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    readOnly
                    style={{ color: "#ccc" }} // Thêm màu #ccc cho văn bản trong input
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <div className="row g-2 gy-lg-0">
                    <label className="form-label text-body-highlight fs-8 ps-1 text-capitalize lh-sm mb-1">
                      Ngày sinh
                    </label>
                    <div className="col-6 col-sm-2 col-lg-3 col-xl-2">
                      <select
                        className="form-select"
                        id="date"
                        name="ngay"
                        value={formData.ngay}
                        onChange={handleInputChange}
                      >
                        {[...Array(31).keys()].map((i) => (
                          <option
                            key={i + 1}
                            value={(i + 1).toString().padStart(2, "0")}
                          >
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-6 col-sm-2 col-lg-3 col-xl-2">
                      <select
                        className="form-select"
                        id="month"
                        name="thang"
                        value={formData.thang}
                        onChange={handleInputChange}
                      >
                        <option value="01">Jan</option>
                        <option value="02">Feb</option>
                        <option value="03">Mar</option>
                        <option value="04">Apr</option>
                        <option value="05">May</option>
                        <option value="06">Jun</option>
                        <option value="07">Jul</option>
                        <option value="08">Aug</option>
                        <option value="09">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                      </select>
                    </div>

                    <div className="col-12 col-sm-8 col-lg-6 col-xl-8">
                      <select
                        className="form-select"
                        id="year"
                        name="nam"
                        value={formData.nam}
                        onChange={handleInputChange}
                      >
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <label
                    className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm"
                    htmlFor="address"
                  >
                    Địa chỉ
                  </label>
                  <input
                    className="form-control"
                    id="address"
                    name="dia_chi"
                    type="text"
                    placeholder="Address"
                    value={formData.dia_chi}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <label
                    className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm"
                    htmlFor="phone"
                  >
                    Số điện thoại
                  </label>
                  <input
                    className="form-control"
                    id="phone"
                    name="dien_thoai"
                    type="text"
                    placeholder="Phone"
                    value={formData.dien_thoai}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="text-end">
                <button
                  className="btn btn-primary px-7"
                  onClick={handleUpdateProfile}
                >
                  Lưu thay đổi
                </button>
              </div>
            </div>

            <div
              className="tab-pane fade mt-3"
              id="tab-orders"
              role="tabpanel"
              aria-labelledby="orders-tab"
            >
              <div
                className="border-top border-bottom border-translucent"
                id="profileOrdersTable"
                data-list=""
              >
                <div className="table-responsive scrollbar">
                  <table className="table fs-9 mb-0">
                    <thead>
                      <tr>
                        <th
                          className="white-space-nowrap align-middle pe-3 ps-0"
                          scope="col"
                          data-sort="order"
                          style={{ width: "10%", minWidth: 120 }}
                        >
                          Mã đơn hàng
                        </th>
                        <th
                          className="align-middle pe-3"
                          scope="col"
                          data-sort="status"
                          style={{ width: "15%", minWidth: 150 }}
                        >
                          Trạng thái
                        </th>
                        <th
                          className="align-middle text-start"
                          scope="col"
                          data-sort="delivery"
                          style={{ width: "20%", minWidth: 200 }}
                        >
                          Phương thức thanh toán
                        </th>

                        <th
                          className="align-middle text-start"
                          scope="col"
                          data-sort="delivery"
                          style={{ width: "30%", minWidth: 180 }}
                        >
                          Hình thức vận chuyển
                        </th>
                        <th
                          className="align-middle text-start"
                          scope="col"
                          data-sort="delivery"
                          style={{ width: "25%", minWidth: 150 }}
                        >
                          Địa chỉ nhận hàng
                        </th>
                        <th
                          className="align-middle pe-0 ps-5"
                          scope="col"
                          data-sort="date"
                          style={{ width: "25%", minWidth: 200 }}
                        >
                          Ngày đặt hàng
                        </th>
                        <th
                          className="align-middle text-start"
                          scope="col"
                          data-sort="total"
                          style={{ width: "20%", minWidth: 150 }}
                        >
                          Tổng tiền
                        </th>

                        <th
                          className="align-middle pe-0"
                          scope="col"
                          style={{ width: "5%" }}
                        >
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="list" id="profile-order-table-body">
                      {orders.map((order) => (
                        <tr
                          key={order.id}
                          className="hover-actions-trigger btn-reveal-trigger position-static"
                        >
                          <td className="order align-middle white-space-nowrap py-2 ps-0">
                            <a className="fw-semibold text-primary" href="#!">
                              #{order.ma_don_hang}
                            </a>
                          </td>
                          <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                            <span
                              className={`badge badge-phoenix fs-10 ${getBadgeClass(
                                order.trang_thai_don_hang_id
                              )}`}
                            >
                              <span className="badge-label">
                                {order.trang_thai_don_hang.ten_trang_thai}
                              </span>
                            </span>
                          </td>

                          <td className="delivery align-middle white-space-nowrap text-body py-2">
                            {order.phuong_thuc_thanh_toan.ten_phuong_thuc}
                          </td>
                          <td className="delivery align-middle white-space-nowrap text-body py-2">
                            {order.hinh_thuc_van_chuyen.ten_van_chuyen}
                          </td>
                          <td className="delivery align-middle white-space-nowrap text-body py-2">
                            {order.dia_chi_giao_hang}
                          </td>
                          <td className="total align-middle text-body-tertiary text-start py-2  ps-5">
                            {new Date(order.created_at).toLocaleString()}
                          </td>
                          <td className="date align-middle fw-semibold text-start py-2 text-body-highlight">
                            {new Intl.NumberFormat("vi-VN").format(
                              order.tong_tien
                            ) + " VNĐ"}
                          </td>
                          <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
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
                                <span className="fas fa-ellipsis-h fs-10" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a
                                  href={`chi-tiet-don-hang/${order.id}`}
                                  className="dropdown-item"
                                >
                                  Chi tiết
                                </a>
                                {order.trang_thai_don_hang_id !== 6 && (
                                  <>
                                    <a className="dropdown-item">
                                      Trạng thái
                                    </a>
                                  </>
                                )}

                                {order.trang_thai_don_hang_id === 1 && (
                                  <>
                                    <div className="dropdown-divider" />
                                    <a
                                      className="dropdown-item text-danger"
                                      onClick={() => handleCancelOrder(order.id, order.trang_thai_don_hang_id)}
                                    >
                                      Hủy đơn
                                    </a>
                                  </>
                                )}

                                {order.trang_thai_don_hang_id === 6 && (
                                  <>
                                    <a
                                      className="dropdown-item text-success"
                                      onClick={() => handleConfirmReceived(order.id)}
                                    >
                                      Xác nhận đã nhận hàng
                                    </a>
                                    <a
                                      className="dropdown-item text-warning"
                                      onClick={() => handleReturnOrder(order.id)}
                                    >
                                      Hoàn trả hàng
                                    </a>
                                  </>
                                )}

                                {order.trang_thai_don_hang_id === 7 && (
                                  <>
                                    <a
                                      className="dropdown-item text-success"
                                    >
                                      Đánh giá
                                    </a>
                                  </>
                                )}
                              </div>
                            </div>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                  <div className="col-auto">
                    <p className="mb-0">
                      Showing{" "}
                      {orders.length === 0
                        ? 0
                        : (currentOrderPage - 1) * ordersPerPage + 1}{" "}
                      to{" "}
                      {Math.min(
                        currentOrderPage * ordersPerPage,
                        orders.length
                      )}{" "}
                      of {orders.length} items
                    </p>
                  </div>
                  <div className="col-auto d-flex">
                    <button
                      className={`page-link ${currentOrderPage === 1 ? "disabled" : ""
                        }`}
                      data-list-pagination="prev"
                      onClick={() =>
                        handleOrderPageChange(currentOrderPage - 1)
                      }
                      disabled={currentOrderPage === 1}
                    >
                      <span className="fas fa-chevron-left" />
                    </button>
                    <ul className="mb-0 pagination">
                      {[...Array(totalOrderPages)].map((_, index) => (
                        <li
                          key={index}
                          className={
                            currentOrderPage === index + 1 ? "active" : ""
                          }
                        >
                          <button
                            className="page"
                            type="button"
                            onClick={() => handleOrderPageChange(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`page-link ${currentOrderPage === totalOrderPages ? "disabled" : ""
                        }`}
                      data-list-pagination="next"
                      onClick={() =>
                        handleOrderPageChange(currentOrderPage + 1)
                      }
                      disabled={currentOrderPage === totalOrderPages}
                    >
                      <span className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="tab-reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <div
                className="border-y"
                id="profileRatingTable"
                data-list='{"valueNames":["product","rating","review","status","date"],"page":6,"pagination":true}'
              >
                <div className="table-responsive scrollbar">
                  <table className="table fs-9 mb-0">
                    <thead>
                      <tr>
                        <th
                          className="white-space-nowrap align-middle ps-0"
                          scope="col"
                          style={{ width: "10%" }}
                        >
                          Hình ảnh
                        </th>
                        <th
                          className="white-space-nowrap align-middle ps-0"
                          scope="col"
                          style={{ width: "30%" }}
                          data-sort="product"
                        >
                          Sản phẩm
                        </th>
                        <th
                          className="align-middle"
                          scope="col"
                          data-sort="rating"
                          style={{ width: "10%" }}
                        >
                          Đánh giá
                        </th>
                        <th
                          className="align-middle"
                          scope="col"
                          data-sort="review"
                          style={{ width: "30%" }}
                        >
                          Nhận xét
                        </th>
                        <th
                          className="align-middle"
                          scope="col"
                          style={{ width: "10%" }}
                          data-sort="status"
                        >
                          Trạng thái
                        </th>
                        <th
                          className="text-end align-middle"
                          scope="col"
                          style={{ width: "10%" }}
                          data-sort="date"
                        >
                          Ngày tạo
                        </th>
                      </tr>
                    </thead>
                    <tbody className="list" id="profile-review-table-body">
                      {reviews.map((review) => (
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap py-0 ps-0">
                            <img
                              src={`http://127.0.0.1:8000/storage/${review.san_pham.duong_dan_anh}`}
                              width={50}
                              alt="product"
                            />
                          </td>
                          <td className="align-middle product pe-3">
                            {review.san_pham.ten_san_pham}
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            {Array.from({ length: review.danh_gia }).map(
                              (_, idx) => (
                                <span
                                  key={idx}
                                  className="fa fa-star text-warning"
                                />
                              )
                            )}
                          </td>
                          <td className="align-middle review pe-7">
                            <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">
                              {review.binh_luan}
                            </p>
                            <br />
                            <div>
                              {Array.isArray(review.chi_tiet_danh_gias) &&
                                review.chi_tiet_danh_gias.map((detail) => (
                                  <img
                                    key={detail.id}
                                    src={`http://127.0.0.1:8000/storage/${detail.hinh_anh_duong_dan}`}
                                    alt="Chi tiết đánh giá"
                                    width={50}
                                    className="me-2 mt-1"
                                  />
                                ))}
                            </div>
                          </td>
                          <td className="align-middle status pe-9">
                            {review.trang_thai === 1 ? (
                              <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                                Đã duyệt
                              </span>
                            ) : review.trang_thai === 0 ? (
                              <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                Chưa duyệt
                              </span>
                            ) : review.trang_thai === 2 ? (
                              <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                                Đã hủy
                              </span>
                            ) : null}
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <h6 className="text-body-highlight mb-0">
                              {new Date(review.created_at).toLocaleString()}
                            </h6>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                  <div className="col-auto d-flex">
                    <p
                      className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                      data-list-info="data-list-info"
                    />
                    <a className="fw-semibold" href="#!" data-list-view="*">
                      View all
                      <span
                        className="fas fa-angle-right ms-1"
                        data-fa-transform="down-1"
                      />
                    </a>
                    <a
                      className="fw-semibold d-none"
                      href="#!"
                      data-list-view="less"
                    >
                      View Less
                      <span
                        className="fas fa-angle-right ms-1"
                        data-fa-transform="down-1"
                      />
                    </a>
                  </div>
                  <div className="col-auto d-flex">
                    <button className="page-link" data-list-pagination="prev">
                      <span className="fas fa-chevron-left" />
                    </button>
                    <ul className="mb-0 pagination" />
                    <button
                      className="page-link pe-0"
                      data-list-pagination="next"
                    >
                      <span className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="tab-wishlist"
              role="tabpanel"
              aria-labelledby="wishlist-tab"
            >
              {products.length > 0 ? (
                <div
                  className="border-y border-translucent"
                  id="productWishlistTable"
                  data-list='{"valueNames":["products","color","size","price","quantity","total"],"page":5,"pagination":true}'
                >
                  <div className="table-responsive scrollbar">
                    <table className="table fs-9 mb-0">
                      <thead>
                        <tr>
                          <th
                            className="align-middle"
                            scope="col"
                            data-sort="image"
                            style={{ width: "20%" }} // Tăng chiều rộng cho hình ảnh
                          >
                            HÌNH ẢNH
                          </th>
                          <th
                            className="white-space-nowrap align-middle"
                            scope="col"
                            style={{ width: "35%", minWidth: 250 }} // Tăng chiều rộng cho sản phẩm
                            data-sort="products"
                          >
                            SẢN PHẨM
                          </th>
                          <th
                            className="align-middle text-body"
                            scope="col"
                            data-sort="price"
                            style={{ width: "15%" }} // Cân đối chiều rộng cho giá
                          >
                            GIÁ
                          </th>
                          <th
                            className="align-middle text-body"
                            scope="col"
                            style={{
                              width: "20%", // Cân đối chiều rộng cho hành động
                              textAlign: "center",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            HÀNH ĐỘNG
                          </th>
                        </tr>
                      </thead>

                      <tbody className="list" id="profile-wishlist-table-body">
                        {visibleProducts.map((product, index) => (
                          <tr
                            key={index}
                            className="hover-actions-trigger btn-reveal-trigger position-static"
                          >
                            <td className="align-middle white-space-nowrap ps-0 py-0">
                              <a
                                className="border border-translucent rounded-2 d-inline-block"
                                href="product-details.html"
                              >
                                <img
                                  src={`${link}${product.image}`}
                                  alt={product.name}
                                  width={55}
                                />
                              </a>
                            </td>
                            <td className="products align-middle">
                              <a
                                className="fw-semibold mb-0 line-clamp-1"
                                href="product-details.html"
                              >
                                {product.name}
                              </a>
                            </td>
                            <td className="price align-middle text-body fs-9 fw-semibold">
                              {numberFormat.format(
                                parseFloat(product.price.toFixed(2))
                              )}{" "}
                              VNĐ
                            </td>
                            <td className="total align-middle fw-bold text-body-highlight text-nowrap pe-0 ps-14">
                              <button
                                className=" text-body-quaternary text-body-tertiary-hover me-2"
                                onClick={() => removeFromWishlist(product.id)}
                              >
                                <span className="fa-solid fa-trash" />
                              </button>
                              <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                                <span className="fa-solid fa-cart-plus" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                    <div className="col-auto">
                      <p className="mb-0">
                        Showing{" "}
                        {products.length === 0
                          ? 0
                          : (currentPage - 1) * productsPerPage + 1}{" "}
                        to{" "}
                        {Math.min(
                          currentPage * productsPerPage,
                          products.length
                        )}{" "}
                        of {products.length} items
                      </p>
                    </div>
                    <div className="col-auto d-flex">
                      <button
                        className={`page-link ${currentPage === 1 ? "disabled" : ""
                          }`}
                        data-list-pagination="prev"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <span className="fas fa-chevron-left" />
                      </button>
                      <ul className="mb-0 pagination">
                        {[...Array(totalPages)].map((_, index) => (
                          <li
                            key={index}
                            className={
                              currentPage === index + 1 ? "active" : ""
                            }
                          >
                            <button
                              className="page"
                              type="button"
                              onClick={() => handlePageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`page-link ${currentPage === totalPages ? "disabled" : ""
                          }`}
                        data-list-pagination="next"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <span className="fas fa-chevron-right" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="container"
                  style={{ textAlign: "center", marginTop: "50px" }}
                >
                  <img
                    src={haha}
                    alt="Không có sản phẩm"
                    style={{ marginBottom: "20px" }}
                  />
                  <p style={{ fontSize: "18px", color: "#999" }}>
                    Hiện tại bạn chưa có sản phẩm nào trong danh sách yêu thích.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* end of .container*/}
      <div
        className="modal fade"
        id="changePassword"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="changePassword"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-l modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Đổi mật khẩu</h3>
              <button
                className="btn btn-sm btn-phoenix-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="fas fa-times text-danger" />
              </button>
            </div>
            <div className="modal-body px-0 mt-1">
              <form>
                <div className="row g-4">
                  {/* Mật khẩu hiện tại */}
                  <div className="col-lg-12">
                    <div className="mb-4">
                      <label
                        htmlFor="currentPassword"
                        className="text-body-highlight fw-bold mb-2"
                      >
                        Mật khẩu hiện tại
                      </label>
                      <input
                        id="currentPassword"
                        className="form-control"
                        type={
                          passwordVisible.currentPassword ? "text" : "password"
                        }
                        placeholder="Nhập mật khẩu hiện tại"
                        required
                      />
                      <button
                        type="button"
                        className="btn px-3 py-0 position-absolute end-0 fs-7 text-body-tertiary"
                        style={{ marginTop: "-2pc" }}
                        onClick={() =>
                          togglePasswordVisibility("currentPassword")
                        }
                      >
                        <span
                          className={
                            passwordVisible.currentPassword
                              ? "uil uil-eye-slash"
                              : "uil uil-eye"
                          }
                        />
                      </button>
                    </div>
                  </div>

                  {/* Mật khẩu mới */}
                  <div className="col-lg-12">
                    <div className="mb-4">
                      <label
                        htmlFor="newPassword"
                        className="text-body-highlight fw-bold mb-2"
                      >
                        Mật khẩu mới
                      </label>
                      <input
                        id="newPassword"
                        className="form-control"
                        type={passwordVisible.newPassword ? "text" : "password"}
                        placeholder="Nhập mật khẩu mới"
                        required
                      />
                      <button
                        type="button"
                        className="btn px-3 py-0 position-absolute end-0 fs-7 text-body-tertiary"
                        style={{ marginTop: "-2pc" }}
                        onClick={() => togglePasswordVisibility("newPassword")}
                      >
                        <span
                          className={
                            passwordVisible.newPassword
                              ? "uil uil-eye-slash"
                              : "uil uil-eye"
                          }
                        />
                      </button>
                    </div>
                  </div>

                  {/* Nhập lại mật khẩu mới */}
                  <div className="col-lg-12">
                    <div className="mb-4">
                      <label
                        htmlFor="confirmPassword"
                        className="text-body-highlight fw-bold mb-2"
                      >
                        Xác nhận mật khẩu mới
                      </label>
                      <div className="position-relative">
                        <input
                          id="confirmPassword"
                          className="form-control"
                          type={
                            passwordVisible.confirmPassword
                              ? "text"
                              : "password"
                          }
                          placeholder="Xác nhận mật khẩu"
                          required
                        />
                        <button
                          type="button"
                          className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                          onClick={() =>
                            togglePasswordVisibility("confirmPassword")
                          }
                        >
                          <span
                            className={
                              passwordVisible.confirmPassword
                                ? "uil uil-eye-slash"
                                : "uil uil-eye"
                            }
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer border-0 pt-0 px-0 pb-0">
              <button
                className="btn btn-link text-danger px-3 my-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Hủy bỏ
              </button>
              <button type="submit" className="btn btn-primary my-0">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Profile;