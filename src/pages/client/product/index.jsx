import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Shop = () => {
  document.title = "Hypertech Store - Cửa hàng";

  // const [userId] = useState(() => localStorage.getItem('userId'));
  const [products, setProducts] = useState([]);
  // const [wishlist, setWishlist] = useState(new Set());

  const [newProducts, setNewProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);

  const [currentTime, setCurrentTime] = useState(new Date());

  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage] = useState(9); // Set max 9 products per page

  // Calculate total pages based on total products and products per page
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/san-pham/allProduct?page=${currentPage}&limit=${productsPerPage}`
        );
        const data = await response.json();

        if (data.status === "success" && Array.isArray(data.data.data)) {
          setProducts(data.data.data); // Set the current products for the page
          setTotalProducts(data.data.total); // Update the total products count
        } else {
          console.error(
            "Error: Expected an array but got",
            typeof data.data.data
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Update the current page
    }
  };

  //   const addToCart = (productId, price, variationId) => {
  //     const cartData = {
  //       khach_hang_id: userId,
  //       san_pham_id: productId,
  //       so_luong: 1,
  //       bien_the_san_pham_id: variationId, // Use selected variation id
  //       gia: price,
  //     };

  //     fetch("http://127.0.0.1:8000/api/gio-hang/them-san-pham", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(cartData),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("API response:", data); // In ra để kiểm tra dữ liệu trả về từ API

  //         // Kiểm tra nếu API trả về một message thành công
  //         if (
  //           data &&
  //           data.message === "Sản phẩm đã được thêm vào giỏ hàng thành công"
  //         ) {
  //           console.log("Product added to cart:", data);
  //           toast.success("Thêm sản phẩm thành công vào giỏ hàng!", {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //           });
  //         } else {
  //           console.error("Failed to add product to cart:", data);
  //           toast.error("Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng!", {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error adding product to cart:", error);
  //         toast.error("Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng!", {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //         });
  //       });
  //   };

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
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);

    // Tính tổng số giờ còn lại
    const totalHours = Math.floor(timeLeft / (1000 * 60 * 60));

    if (timeLeft > 0) {
      return `${totalHours}h ${minutes}m ${seconds}s`;
    }
  };

  // const storedUserInfo = sessionStorage.getItem("userInfo");
  // const user = JSON.parse(storedUserInfo);
  // const userId = user.id;

  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null); // Khởi tạo state userId mặc định là null
  const [wishlistStatus, setWishlistStatus] = useState({}); // Khởi tạo wishlistStatus là object rỗng

  // Lấy userId từ sessionStorage khi component mount
  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      const user = JSON.parse(storedUserInfo);
      setUserId(user.id); // Lưu userId nếu có thông tin người dùng
    }
  }, []);

  // Hàm để khởi tạo wishlist từ sessionStorage nếu có
  useEffect(() => {
    const savedWishlist = sessionStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlistStatus(JSON.parse(savedWishlist)); // Lấy wishlist từ sessionStorage và lưu vào state
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
        // Cập nhật trạng thái wishlist của sản phẩm và lưu vào sessionStorage
        const updatedWishlist = { ...wishlistStatus, [sanPhamId]: true };
        setWishlistStatus(updatedWishlist);
        sessionStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Lưu wishlist mới vào sessionStorage
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Có lỗi xảy ra.");
    } finally {
      setLoading(false);
    }
  };

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
                  <h3 className="mb-0">Filters</h3>
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
                    <div className="fs-8 text-body-highlight">Availability</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseAvailability">
                  <div className="mb-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="inStockInput"
                        type="checkbox"
                        name="color"
                        defaultChecked
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="inStockInput"
                      >
                        In stock
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="preBookInput"
                        type="checkbox"
                        name="color"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="preBookInput"
                      >
                        Pre-book
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="outOfStockInput"
                        type="checkbox"
                        name="color"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="outOfStockInput"
                      >
                        Out of stock
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseColorFamily"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseColorFamily"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Color family</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseColorFamily">
                  <div className="mb-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="flexCheckBlack"
                        type="checkbox"
                        name="color"
                        defaultChecked
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="flexCheckBlack"
                      >
                        Black
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="flexCheckBlue"
                        type="checkbox"
                        name="color"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="flexCheckBlue"
                      >
                        Blue
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="flexCheckRed"
                        type="checkbox"
                        name="color"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="flexCheckRed"
                      >
                        Red
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseBrands"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseBrands"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Brands</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseBrands">
                  <div className="mb-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="flexCheckBlackberry"
                        type="checkbox"
                        name="brands"
                        defaultChecked
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="flexCheckBlackberry"
                      >
                        Blackberry
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="flexCheckApple"
                        type="checkbox"
                        name="brands"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="flexCheckApple"
                      >
                        Apple
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="flexCheckNokia"
                        type="checkbox"
                        name="brands"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="flexCheckNokia"
                      >
                        Nokia
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="flexCheckSony"
                        type="checkbox"
                        name="brands"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="flexCheckSony"
                      >
                        Sony
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="flexCheckLG"
                        type="checkbox"
                        name="brands"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body mb-0 fw-normal"
                        htmlFor="flexCheckLG"
                      >
                        LG
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapsePriceRange"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapsePriceRange"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Price range</div>
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
                    <div className="fs-8 text-body-highlight">Rating</div>
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
                    <p className="ms-1 mb-0">&amp; above</p>
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
                    <p className="ms-1 mb-0">&amp; above </p>
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
                    <p className="ms-1 mb-0">&amp; above</p>
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
                    <p className="ms-1 mb-0">&amp; above </p>
                  </div>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseDisplayType"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseDisplayType"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Display type</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseDisplayType">
                  <div className="mb-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="lcdInput"
                        type="checkbox"
                        name="displayType"
                        defaultChecked
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="lcdInput"
                      >
                        LCD
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="ipsInput"
                        type="checkbox"
                        name="displayType"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="ipsInput"
                      >
                        IPS
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="oledInput"
                        type="checkbox"
                        name="displayType"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="oledInput"
                      >
                        OLED
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="amoledInput"
                        type="checkbox"
                        name="displayType"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="amoledInput"
                      >
                        AMOLED
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="retinaInput"
                        type="checkbox"
                        name="displayType"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="retinaInput"
                      >
                        Retina
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseCondition"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseCondition"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Condition</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseCondition">
                  <div className="mb-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="newInput"
                        type="checkbox"
                        name="condition"
                        defaultChecked
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="newInput"
                      >
                        New
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="usedInput"
                        type="checkbox"
                        name="condition"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="usedInput"
                      >
                        Used
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="refurbrishedInput"
                        type="checkbox"
                        name="condition"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="refurbrishedInput"
                      >
                        Refurbrished
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseDelivery"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseDelivery"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Delivery</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseDelivery">
                  <div className="mb-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="freeShippingInput"
                        type="checkbox"
                        name="delivery"
                        defaultChecked
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="freeShippingInput"
                      >
                        Free Shipping
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="oneDayShippingInput"
                        type="checkbox"
                        name="delivery"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="oneDayShippingInput"
                      >
                        One-day Shipping
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="codInput"
                        type="checkbox"
                        name="delivery"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="codInput"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseCampaign"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseCampaign"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Campaign</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseCampaign">
                  <div className="mb-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="summerSaleInput"
                        type="checkbox"
                        name="campaign"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="summerSaleInput"
                      >
                        Summer Sale
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="marchMadnessInput"
                        type="checkbox"
                        name="campaign"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="marchMadnessInput"
                      >
                        March Madness
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="flashSaleInput"
                        type="checkbox"
                        name="campaign"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="flashSaleInput"
                      >
                        Flash Sale
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="bogoBlastInput"
                        type="checkbox"
                        name="campaign"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="bogoBlastInput"
                      >
                        BOGO Blast
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseWarranty"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseWarranty"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">Warranty</div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseWarranty">
                  <div className="mb-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="threeMonthInput"
                        type="checkbox"
                        name="warranty"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="threeMonthInput"
                      >
                        3 months
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="sixMonthInput"
                        type="checkbox"
                        name="warranty"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="sixMonthInput"
                      >
                        6 months
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="oneYearInput"
                        type="checkbox"
                        name="warranty"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="oneYearInput"
                      >
                        1 year
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="twoYearsInput"
                        type="checkbox"
                        name="warranty"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="twoYearsInput"
                      >
                        2 years
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="threeYearsInput"
                        type="checkbox"
                        name="warranty"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="threeYearsInput"
                      >
                        3 years
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="fiveYearsInput"
                        type="checkbox"
                        name="warranty"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="fiveYearsInput"
                      >
                        5 years
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseWarrantyType"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseWarrantyType"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">
                      Warranty Type
                    </div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseWarrantyType">
                  <div className="mb-2">
                    <div className="form-check mb-0x">
                      <input
                        className="form-check-input mt-0"
                        id="replacementInput"
                        type="checkbox"
                        name="warrantyType"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="replacementInput"
                      >
                        Replacement
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="serviceInput"
                        type="checkbox"
                        name="warrantyType"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="serviceInput"
                      >
                        Service
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="partialCoveregeInput"
                        type="checkbox"
                        name="warrantyType"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="partialCoveregeInput"
                      >
                        Partial Coverage
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="appleCareInput"
                        type="checkbox"
                        name="warrantyType"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="appleCareInput"
                      >
                        Apple Care
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="moneyBackInput"
                        type="checkbox"
                        name="warrantyType"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="moneyBackInput"
                      >
                        Money back
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="extendableInput"
                        type="checkbox"
                        name="warrantyType"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="extendableInput"
                      >
                        Extendable
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  className="btn px-0 d-block collapse-indicator"
                  data-bs-toggle="collapse"
                  href="#collapseCertification"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseCertification"
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="fs-8 text-body-highlight">
                      Certification
                    </div>
                    <span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                  </div>
                </a>
                <div className="collapse show" id="collapseCertification">
                  <div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="rohsInput"
                        type="checkbox"
                        name="certification"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="rohsInput"
                      >
                        RoHS
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="fccInput"
                        type="checkbox"
                        name="certification"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="fccInput"
                      >
                        FCC
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="conflictInput"
                        type="checkbox"
                        name="certification"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="conflictInput"
                      >
                        Conflict Free
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="isoOneInput"
                        type="checkbox"
                        name="certification"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="isoOneInput"
                      >
                        ISO 9001:2015
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="isoTwoInput"
                        type="checkbox"
                        name="certification"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="isoTwoInput"
                      >
                        ISO 27001:2013
                      </label>
                    </div>
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input mt-0"
                        id="isoThreeInput"
                        type="checkbox"
                        name="certification"
                      />
                      <label
                        className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0"
                        htmlFor="isoThreeInput"
                      >
                        IEC 61000-4-2
                      </label>
                    </div>
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
                  // Find sale information for the product
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
                      label = `-${parseFloat(
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

                  // If the product is new (created within 7 days)
                  const productCreatedAt = new Date(product.created_at);
                  const sevenDaysAgo = new Date();
                  sevenDaysAgo.setDate(new Date().getDate() - 7);
                  if (!label && productCreatedAt >= sevenDaysAgo) {
                    label = "New";
                  }

                  const numberFormat = new Intl.NumberFormat("vi-VN", {
                    style: "decimal", // Sử dụng kiểu "decimal" thay vì "currency"
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
                                  src={product.duong_dan_anh}
                                  alt={product.ten_san_pham}
                                />
                                {label && (
                                  <span className="badge text-bg-success fs-10 product-verified-badge">
                                    {label}
                                  </span>
                                )}
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
                              <div className="d-flex align-items-center mb-1">
                                {saleInfo ? (
                                  <>
                                    <p className="me-2 text-body text-decoration-line-through mb-0">
                                      {numberFormat.format(
                                        parseFloat(product.gia)
                                      )}{" "}
                                      VNĐ
                                    </p>
                                    <h3 className="text-body-emphasis mb-0">
                                      {numberFormat.format(discountedPrice)} VNĐ
                                    </h3>
                                  </>
                                ) : (
                                  <h3 className="text-body-emphasis mb-0">
                                    {numberFormat.format(
                                      parseFloat(product.gia)
                                    )}{" "}
                                    VNĐ
                                  </h3>
                                )}
                              </div>
                              {saleInfo && remainingTime && (
                                <p className="text-success fw-bold fs-9 lh-1 mb-0">
                                  Deal time ends in {remainingTime}
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
