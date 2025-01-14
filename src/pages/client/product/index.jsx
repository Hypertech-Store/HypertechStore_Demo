import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners"; // Thêm import FadeLoader
import soldout from "../../../assets/img/e-commerce/outstock.png";
const Shop = () => {
  document.title = "Hypertech Store - Cửa hàng";
  const baseUrl = "http://127.0.0.1:8000/storage/";
  // const [userId] = useState(() => localStorage.getItem('userId'));
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [newProducts, setNewProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [productsPerPage] = useState(9); // Số sản phẩm mỗi trang (max 9 sản phẩm)

  // State to keep track of selected main categories
  const [selectedCategory, setSelectedCategory] = useState({});

  const handleCategoryChange = (category) => {
    // Toggle the selected category when clicked
    setSelectedCategory((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };
  // eslint-disable-next-line no-unused-vars
  const [wishlistData, setWishlistData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/san-pham/allProductClient?page=${currentPage}&number_row=${productsPerPage}`
        );
        const data = await response.json();

        // Kiểm tra nếu dữ liệu hợp lệ và có mảng
        if (data.status === "success" && Array.isArray(data.data.data)) {
          setProducts(data.data.data);

          setTotalProducts(data.data.total);
          setTotalPages(data.data.last_page);
        } else {
          console.error("API response không hợp lệ:", data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        setError(error);
      } finally {
        setLoading(false); // Ẩn loader
      }
    };

    fetchProducts();
  }, [currentPage, productsPerPage]);

  // Hàm xử lý thay đổi trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Cập nhật trang hiện tại
    }
  };

  // Hàm để lấy sản phẩm mới
  const fetchNewProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/san-pham/getNewProducts"
      );
      setNewProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching new products:", error);
    }
  };

  // Hàm để lấy sản phẩm đang sale
  const fetchSaleProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/sale-san-pham/get-sale"
      );
      setSaleProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching sale products:", error);
    }
  };

  useEffect(() => {
    fetchNewProducts();
    fetchSaleProducts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // Update current time every second
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const getRemainingTime = (saleEnd) => {
    const currentTime = new Date().getTime();
    const timeLeft = saleEnd - currentTime;

    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);

    // Tính tổng số giờ còn lại
    const totalHours = Math.floor(timeLeft / (1000 * 60 * 60));

    if (timeLeft > 0) {
      return `${totalHours}h ${minutes}m ${seconds}s`;
    }
  };

  const [userId, setUserId] = useState(null);
  const [wishlistStatus, setWishlistStatus] = useState({});

  // Lấy userId từ localStorage khi component mount
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUserInfo = localStorage.getItem("userInfo");
      if (storedUserInfo) {
        const user = JSON.parse(storedUserInfo);
        setUserId(user.id);
      }
    };

    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const user = JSON.parse(storedUserInfo);
      setUserId(user.id);
    }

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Hàm để khởi tạo wishlist từ localStorage nếu có
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlistStatus(JSON.parse(savedWishlist)); // Lấy wishlist từ localStorage và lưu vào state
    }
  }, []);

  // Hàm xử lý thêm sản phẩm vào danh sách yêu thích
  const handleAddToWishlist = async (sanPhamId) => {
    if (!userId) {
      toast.error(
        "Vui lòng đăng nhập để thêm sản phẩm vào danh sách yêu thích."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/danh-sach-yeu-thich/addWishlist",
        {
          khach_hang_id: userId,
          san_pham_id: sanPhamId,
        }
      );

      if (response.data.message) {
        toast.success(response.data.message);
      }

      if (
        response.data.message ===
        "Sản phẩm đã được thêm vào danh sách yêu thích."
      ) {
        // Cập nhật trạng thái wishlist của sản phẩm và lưu vào localStorage
        const updatedWishlist = { ...wishlistStatus, [sanPhamId]: true };
        setWishlistStatus(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Lưu wishlist mới vào localStorage
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Có lỗi xảy ra.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Hàm gọi API
    const fetchWishlist = async () => {
      try {
        if (!userId) return; // Chỉ gọi API khi `userId` có giá trị hợp lệ
        setLoading(true); // Đánh dấu là đang tải dữ liệu
        const response = await fetch(
          `http://127.0.0.1:8000/api/danh-sach-yeu-thich/${userId}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);

        const data = await response.json();
        setWishlistData(data);
        const status = {};
        data.forEach((item) => {
          status[item.san_pham_id] = true;
        });
        console.log(status);

        setWishlistStatus(status);
      } catch (err) {
        setError(err.message); // Lưu lỗi vào state nếu có
      } finally {
        setLoading(false); // Đánh dấu là đã xong
      }
    };

    fetchWishlist();
  }, [userId]); // Dùng [] để gọi API chỉ 1 lần khi component mount

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh", // Toàn màn hình
          backgroundColor: "#f9f9f9", // Nền
        }}
      >
        <FadeLoader color="#36d7b7" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className="pt-5 pb-9">
        <div className="product-filter-container">
          <button
            className="btn btn-sm btn-phoenix-secondary text-body-tertiary mb-5 d-lg-none"
            data-phoenix-toggle="offcanvas"
            data-phoenix-target="#productFilterColumn"
          >
            <span className="fa-solid fa-filter me-2" />
            Filter
          </button>
          <div className="row">
            <div className="col-lg-3 col-xxl-2 ps-2 ps-xxl-3">
              <div
                className="phoenix-offcanvas-filter bg-body scrollbar phoenix-offcanvas phoenix-offcanvas-fixed"
                id="productFilterColumn"
                style={{ top: 92 }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="mb-0">Bộ lọc</h3>
                  <button
                    className="btn d-lg-none p-0"
                    data-phoenix-dismiss="offcanvas"
                  >
                    <span className="uil uil-times fs-8" />
                  </button>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseAvailability"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseAvailability"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Danh mục</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseAvailability">
                  <div className="mb-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="phone"
                        type="checkbox"
                        name="categories"
                        checked={selectedCategory["phones"]}
                        onChange={() => handleCategoryChange("phones")}
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="phone"
                      >
                        Điện thoại
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="laptop"
                        type="checkbox"
                        name="categories"
                        checked={selectedCategory["computers"]}
                        onChange={() => handleCategoryChange("computers")}
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="laptop"
                      >
                        Máy tính
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="watch"
                        type="checkbox"
                        name="categories"
                        checked={selectedCategory["watches"]}
                        onChange={() => handleCategoryChange("watches")}
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="watch"
                      >
                        Đồng hồ
                      </label>
                    </div>
                  </div>
                </div>
                {selectedCategory["phones"] && (
                  <div>
                    <a
                      className="btn px-0 d-block collapse-indicator"
                      data-bs-toggle="collapse"
                      href="#collapsePhones"
                      role="button"
                      aria-expanded={
                        selectedCategory["phones"] ? "true" : "false"
                      }
                      aria-controls="collapsePhones"
                    >
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="fs-8 text-body-highlight">
                          Danh mục con - Điện thoại
                        </div>
                        <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                      </div>
                    </a>
                    <div className="collapse show" id="collapsePhones">
                      <div className="mb-2">
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input mt-0"
                            id="blackberryInput"
                            type="checkbox"
                            name="brands"
                          />
                          <label
                            className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                            htmlFor="blackberryInput"
                          >
                            Blackberry
                          </label>
                        </div>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input mt-0"
                            id="appleInput"
                            type="checkbox"
                            name="brands"
                          />
                          <label
                            className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                            htmlFor="appleInput"
                          >
                            Apple
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedCategory["computers"] && (
                  <div>
                    <a
                      className="btn px-0 d-block collapse-indicator"
                      data-bs-toggle="collapse"
                      href="#collapsePhones"
                      role="button"
                      aria-expanded={
                        selectedCategory["computers"] ? "true" : "false"
                      }
                      aria-controls="collapsePhones"
                    >
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="fs-8 text-body-highlight">
                          Danh mục con - Máy Tính
                        </div>
                        <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                      </div>
                    </a>
                    <div className="collapse show" id="collapsePhones">
                      <div className="mb-2">
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input mt-0"
                            id="blackberryInput"
                            type="checkbox"
                            name="brands"
                          />
                          <label
                            className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                            htmlFor="blackberryInput"
                          >
                            Dell
                          </label>
                        </div>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input mt-0"
                            id="appleInput"
                            type="checkbox"
                            name="brands"
                          />
                          <label
                            className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                            htmlFor="appleInput"
                          >
                            HP
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedCategory["watches"] && (
                  <div>
                    <a
                      className="btn px-0 d-block collapse-indicator"
                      data-bs-toggle="collapse"
                      href="#collapsePhones"
                      role="button"
                      aria-expanded={
                        selectedCategory["watches"] ? "true" : "false"
                      }
                      aria-controls="collapsePhones"
                    >
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="fs-8 text-body-highlight">
                          Danh mục con - Đồng hồ
                        </div>
                        <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                      </div>
                    </a>
                    <div className="collapse show" id="collapsePhones">
                      <div className="mb-2">
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input mt-0"
                            id="blackberryInput"
                            type="checkbox"
                            name="brands"
                          />
                          <label
                            className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                            htmlFor="blackberryInput"
                          >
                            Casio
                          </label>
                        </div>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input mt-0"
                            id="appleInput"
                            type="checkbox"
                            name="brands"
                          />
                          <label
                            className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                            htmlFor="appleInput"
                          >
                            Seiko
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapsePriceRange"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapsePriceRange"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Mức giá</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapsePriceRange">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="input-group me-2">
                      <input
                        className="form-control"
                        type="text"
                        aria-label="First name"
                        placeholder="Min"
                      />
                      <input
                        className="form-control"
                        type="text"
                        aria-label="Last name"
                        placeholder="Max"
                      />
                    </div>
                    <button
                      className="btn btn-phoenix-primary px-3"
                      type="button"
                    >
                      Go
                    </button>
                  </div>
                </div>
                <a
                  className="btn px-0 y-4 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseRating"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseRating"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Xếp hạng</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseRating">
                  <div className="d-flex align-items-center mb-1">
                    <input
                      className="form-check-input me-3"
                      id="flexRadio1"
                      type="radio"
                      name="flexRadio"
                    />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <input
                      className="form-check-input me-3"
                      id="flexRadio2"
                      type="radio"
                      name="flexRadio"
                    />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span
                      className="fa-regular fa-star text-warning-light fs-9 me-1"
                      data-bs-theme="light"
                    />
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <input
                      className="form-check-input me-3"
                      id="flexRadio3"
                      type="radio"
                      name="flexRadio"
                    />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span
                      className="fa-regular fa-star text-warning-light fs-9 me-1"
                      data-bs-theme="light"
                    />
                    <span
                      className="fa-regular fa-star text-warning-light fs-9 me-1"
                      data-bs-theme="light"
                    />
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <input
                      className="form-check-input me-3"
                      id="flexRadio4"
                      type="radio"
                      name="flexRadio"
                    />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span
                      className="fa-regular fa-star text-warning-light fs-9 me-1"
                      data-bs-theme="light"
                    />
                    <span
                      className="fa-regular fa-star text-warning-light fs-9 me-1"
                      data-bs-theme="light"
                    />
                    <span
                      className="fa-regular fa-star text-warning-light fs-9 me-1"
                      data-bs-theme="light"
                    />
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <input
                      className="form-check-input me-3"
                      id="flexRadio5"
                      type="radio"
                      name="flexRadio"
                    />
                    <span className="fa fa-star text-warning fs-9 me-1" />
                    <span
                      className="fa-regular fa-star text-warning-light fs-9 me-1"
                      data-bs-theme="light"
                    />
                    <span
                      className="fa-regular fa-star text-warning-light fs-9 me-1"
                      data-bs-theme="light"
                    />
                    <span
                      className="fa-regular fa-star text-warning-light fs-9 me-1"
                      data-bs-theme="light"
                    />
                    <span
                      className="fa-regular fa-star text-warning-light fs-9 me-1"
                      data-bs-theme="light"
                    />
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas-backdrop d-lg-none"
                data-phoenix-backdrop
                style={{ top: 92 }}
              />
            </div>
            <div className="col-lg-9 col-xxl-10">
              <div className="row gx-3 gy-6 mb-8">
                {products.map((product) => {
                  const saleInfo = saleProducts.find(
                    (sale) => sale.san_pham_id === product.id
                  );
                  let label = null;
                  let discountedPrice = parseFloat(product.gia);
                  let remainingTime = "";

                  if (saleInfo) {
                    const currentDate = new Date();
                    const saleStart = new Date(saleInfo.ngay_bat_dau_sale);
                    const saleEnd = new Date(saleInfo.ngay_ket_thuc_sale);

                    if (saleStart <= currentDate && saleEnd >= currentDate) {
                      label = `${parseFloat(
                        saleInfo.sale_theo_phan_tram
                      ).toFixed(0)}%`;
                      const discountPercentage = parseFloat(
                        saleInfo.sale_theo_phan_tram
                      );
                      const discountAmount =
                        (discountedPrice * discountPercentage) / 100;
                      discountedPrice -= discountAmount;

                      // Calculate remaining time for sale
                      remainingTime = getRemainingTime(saleEnd);
                    }
                  }

                  const productCreatedAt = new Date(product.created_at);
                  const sevenDaysAgo = new Date();
                  sevenDaysAgo.setDate(new Date().getDate() - 7);
                  if (!label && productCreatedAt >= sevenDaysAgo) {
                    label = "New";
                  }

                  const numberFormat = new Intl.NumberFormat("vi-VN", {
                    style: "decimal",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  });

                  return (
                    <div
                      className="col-12 col-sm-6 col-md-4 col-xxl-2"
                      key={product.id}
                    >
                      <div className="product-card-container h-100">
                        <div className="position-relative text-decoration-none product-card h-100">
                          <div className="d-flex flex-column justify-content-between h-100">
                            <div>
                              <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                                {product.so_luong_ton_kho === 0 && (
                                  <div className="sold-out-overlay">
                                    {/* Bạn có thể dùng một hình ảnh biểu tượng hoặc văn bản */}
                                    <img
                                      src={soldout}
                                      alt="Sold Out"
                                      style={{
                                        width: "90%",
                                        objectFit: "contain",
                                      }}
                                    />
                                  </div>
                                )}
                                {label && (
                                  <div
                                    style={{
                                      position: "absolute",
                                      overflow: "hidden",
                                      width: "80px",
                                      height: "85px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        fontSize: "11px",
                                        position: "relative",
                                        top: "22px", // Adjust vertically to balance the new left offset
                                        left: "-30px", // Applied offset as specified
                                        width: "120px",
                                        height: "20px", // Define container height for proper centering
                                        lineHeight: "20px", // Line height matches the height for vertical centering
                                        color: "#fff",
                                        textAlign: "center",
                                        backgroundColor: "#ff3100",
                                        textTransform: "uppercase",
                                        zIndex: 2,
                                        fontWeight: "700",
                                        transform: "rotate(-45deg)",
                                      }}
                                    >
                                      {label}
                                    </div>
                                  </div>
                                )}

                                <button
                                  className={`btn btn-wish btn-wish-primary z-2 d-toggle-container ${
                                    wishlistStatus[product.id] ? "active" : ""
                                  }`}
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title={
                                    wishlistStatus[product.id]
                                      ? "Đã có trong danh sách yêu thích"
                                      : "Thêm vào danh sách yêu thích"
                                  }
                                  onClick={() =>
                                    handleAddToWishlist(product.id)
                                  }
                                  disabled={loading}
                                >
                                  <span
                                    className={`fas fa-heart d-block-hover ${
                                      wishlistStatus[product.id] ? "d-none" : ""
                                    }`}
                                    data-fa-transform="down-1"
                                  />
                                  <span
                                    className={`far fa-heart d-none-hover ${
                                      !wishlistStatus[product.id]
                                        ? "d-block"
                                        : ""
                                    }`}
                                    data-fa-transform="down-1"
                                  />
                                </button>

                                <img
                                  className="img-fluid"
                                  style={{
                                    padding: "10px", // Tạo khoảng cách bên trong để ảnh nhỏ hơn viền
                                  }}
                                  src={`${baseUrl}${product.duong_dan_anh}`}
                                  alt={product.ten_san_pham}
                                />
                              </div>
                              <a
                                className="stretched-link"
                                href={`/chi-tiet-san-pham?id=${product.id}`}
                              >
                                <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                                  {product.ten_san_pham}
                                </h6>
                              </a>

                              <p className="fs-9">
                                <span className="fa fa-star text-warning" />
                                <span className="fa fa-star text-warning" />
                                <span className="fa fa-star text-warning" />
                                <span className="fa fa-star text-warning" />
                                <span className="fa fa-star text-warning" />
                                <span className="text-body-quaternary fw-semibold ms-1">
                                  (50 đánh giá)
                                </span>
                              </p>
                            </div>
                            <div>
                              <div className="align-items-center mb-1">
                                {saleInfo ? (
                                  <>
                                    <h4
                                      className="mb-0"
                                      style={{ color: "#dd2f2c" }}
                                    >
                                      {numberFormat.format(discountedPrice)} VNĐ
                                    </h4>
                                    <p
                                      className="text-decoration-line-through mb-0 mt-1"
                                      style={{
                                        color: "#98a2b3",
                                        fontSize: "16px",
                                      }}
                                    >
                                      {numberFormat.format(
                                        parseFloat(product.gia)
                                      )}{" "}
                                      VNĐ
                                    </p>
                                  </>
                                ) : (
                                  <h4 className="text-body-emphasis mb-0">
                                    {numberFormat.format(
                                      parseFloat(product.gia)
                                    )}{" "}
                                    VNĐ
                                  </h4>
                                )}
                              </div>
                              {saleInfo && remainingTime && (
                                <p className="text-success fw-bold fs-9 lh-1 mb-0 mt-3">
                                  Deals time ends in {remainingTime}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="d-flex justify-content-end">
                <nav aria-label="Page navigation example">
                  <ul className="pagination mb-0">
                    {/* Previous Button */}
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1)
                            handlePageChange(currentPage - 1);
                        }}
                      >
                        <span className="fas fa-chevron-left" />
                      </a>
                    </li>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(index + 1);
                          }}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}

                    {/* Next Button */}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages)
                            handlePageChange(currentPage + 1);
                        }}
                      >
                        <span className="fas fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </>
  );
};
export default Shop;
