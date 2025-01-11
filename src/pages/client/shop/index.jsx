/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import soldout from "../../../assets/img/e-commerce/outstock.png";

import { FadeLoader } from "react-spinners";
const Shop = () => {
  document.title = "Hypertech Store - Sản phẩm";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saleProducts, setSaleProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [wishlistStatus, setWishlistStatus] = useState({});
  const [userId, setUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage] = useState(9); // Set max 9 products per page
  const baseUrl = "http://127.0.0.1:8000/storage/";

  // Calculate total pages based on total products and products per page
  const totalPages = Math.ceil(totalProducts / productsPerPage);

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

  useEffect(() => {
    const search = window.location.search; // ?danh-muc-con=123
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get("danh-muc-con"); // Lấy id từ URL

    if (id) {
      // Gọi API để lấy dữ liệu
      axios
        .get(
          `http://localhost:8000/api/san-pham/danh-muc-con/${id}?page=${currentPage}&limit=${productsPerPage}`
        )
        .then((response) => {
          const data = response.data;
          setProducts(data.san_phams || []); // Danh sách sản phẩm
          setTotalProducts(data.last_page || 1); // Tổng số trang từ API
          setCurrentPage(data.current_page || 1); // Đảm bảo trang hiện tại đúng
          setLoading(false); // Kết thúc trạng thái tải
        })
        .catch((error) => {
          console.error("Lỗi khi gọi API:", error);
          setProducts([]); // Không có sản phẩm
          setTotalProducts(1); // Reset phân trang
          setLoading(false);
        });
    } else {
      console.warn("Không tìm thấy id trong URL");
      setProducts([]);
      setTotalProducts(1);
      setLoading(false);
    }
  }, [currentPage]); // Mỗi khi currentPage thay đổi, gọi lại API

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
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching sale products:", error);
    }
  };

  useEffect(() => {
    fetchNewProducts();
    fetchSaleProducts();
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

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Cập nhật trang hiện tại
    }
  };

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
        <FadeLoader speedMultiplier={0.8} color="#36d7b7" />
      </div>
    );
  }

  if (!products.length) {
    return <p>Không có sản phẩm nào cho danh mục con này.</p>;
  }

  return (
    <>
      <section className="pt-5 pb-9">
        <div className="container-small">
          <nav className="mb-3 ps-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Trang chủ</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/cua-hang">Sản phẩm</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Danh mục con
              </li>
            </ol>
          </nav>
          <div className="row align-items-center justify-content-between g-3 mb-4">
            <div className="row g-3 mb-6">
              <div className="col-lg-12 col-xxl-10">
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
                                  {product.trang_thai_ton_kho === 0 && (
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
                                        wishlistStatus[product.id]
                                          ? "d-none"
                                          : ""
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

                                {product.tong_khach_hang_danh_gia > 0 && (
                                  <p className="fs-9">
                                    {Array.from({
                                      length: Math.floor(
                                        product.trung_binh_sao
                                      ),
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
                                      length:
                                        5 - Math.ceil(product.trung_binh_sao),
                                    }).map((_, index) => (
                                      <span
                                        key={index}
                                        className="fa-regular fa-star text-warning-light"
                                        data-bs-theme="light"
                                      ></span>
                                    ))}
                                    <span className="text-body-quaternary fw-semibold ms-1">
                                      ({product.tong_khach_hang_danh_gia} người
                                      đánh giá)
                                    </span>
                                  </p>
                                )}
                              </div>
                              <div>
                                <div className="align-items-center mb-1">
                                  {saleInfo ? (
                                    <>
                                      <h4
                                        className="mb-0"
                                        style={{ color: "#dd2f2c" }}
                                      >
                                        {numberFormat.format(discountedPrice)}{" "}
                                        VNĐ
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
                      {/* Nút Previous */}
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
                            handlePageChange(currentPage - 1);
                          }}
                        >
                          <span className="fas fa-chevron-left" />
                        </a>
                      </li>

                      {/* Số trang */}
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

                      {/* Nút Next */}
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
        </div>
        {/* end of .container*/}
      </section>
    </>
  );
};
export default Shop;
