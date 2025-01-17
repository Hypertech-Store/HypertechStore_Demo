import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const Cart = () => {
  document.title = "Hypertech Store - Giỏ hàng";
  const baseUrl = "http://127.0.0.1:8000/storage/";
  const khachHangIdFromStorage = localStorage.getItem("userId");
  console.log("Khách Hàng ID từ localStorage: ", khachHangIdFromStorage);
  // Sử dụng useNavigate để điều hướng
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [loading, setLoading] = useState(false); // Trạng thái loading
  // Khởi tạo với một đối tượng rỗng

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const breadcrumbTitles = {
    "gio-hang": "Giỏ hàng", // URL chính, không có "/"
  };

  // Tách ra tên của các phần đường dẫn, không bao gồm id (phần cuối cùng là id đơn hàng)
  const currentTitle =
    breadcrumbTitles[pathnames[0]] ||
    pathnames[pathnames.length - 1]?.toUpperCase();

  useEffect(() => {
    const fetchCartData = async () => {
      if (!khachHangIdFromStorage) {
        console.error("Khách hàng ID không có trong localStorage.");
        setIsLoading(false);
        return;
      }

      try {
        // Fetch dữ liệu giỏ hàng từ API
        const response = await fetch(
          `http://127.0.0.1:8000/api/gio-hang/${khachHangIdFromStorage}`
        );

        console.log("HTTP Response:", response);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Kiểm tra và cập nhật giỏ hàng
        if (data?.san_pham && Array.isArray(data.san_pham)) {
          setCart({ san_pham: data.san_pham });
          console.log("Fetched Data:", data); // Log toàn bộ dữ liệu giỏ hàng

          // Khởi tạo selectedItems cho các sản phẩm, mặc định tất cả đều không được chọn
          const newSelectedItems = data.san_pham.reduce((acc, item) => {
            acc[item.id] = false; // Mặc định bỏ chọn cho từng sản phẩm
            return acc;
          }, {});
          setSelectedItems(newSelectedItems);

          calculateTotalAmount(data.san_pham);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartData();
  }, [khachHangIdFromStorage]);
  // Helper functions

  // Tính tổng số tiền giỏ hàng
  const calculateTotalAmount = (cartItems = []) => {
    let total = 0;
    cartItems.forEach((item) => {
      const price = item.gia_sau_sale_them_gia_bien_the || 0;
      const quantity = item.so_luong || 1;

      // Log thông tin sản phẩm, sử dụng chi_tiet_id thay vì item.id
      console.log(
        `Item ID: ${item.chi_tiet_id}`, // Sử dụng chi_tiet_id
        " Price:",
        price,
        " Quantity:",
        quantity
      );

      total += price * quantity;

      // Log tổng tiền tạm thời sau mỗi vòng lặp
      console.log("Intermediate total:", total);
    });

    setTotalAmount(total);
    // Log tổng tiền sau khi tính toán
    console.log("Total amount after calculation:", total);
  };

  const updateCartItemQuantity = (id, quantity) => {
    const updatedCartItems = [...cart.san_pham];
    const itemIndex = updatedCartItems.findIndex(
      (item) => item.chi_tiet_id === id
    );

    if (itemIndex !== -1) {
      // Cập nhật số lượng (không cho phép giá trị <= 0)
      updatedCartItems[itemIndex].so_luong = Math.max(quantity, 1);

      // Tính lại tổng tiền cho sản phẩm này và cập nhật vào danh sách giỏ hàng
      const selectedItem = updatedCartItems[itemIndex];
      const productTotal =
        selectedItem.gia_sau_sale_them_gia_bien_the * selectedItem.so_luong;

      // Gán giá trị tổng tiền tính được vào thuộc tính `tong_tien` của sản phẩm
      updatedCartItems[itemIndex].tong_tien = productTotal;

      // Log để kiểm tra dữ liệu sản phẩm
      console.log("Updated item:", updatedCartItems[itemIndex]);

      // Cập nhật lại state giỏ hàng
      setCart({
        ...cart,
        san_pham: updatedCartItems,
      });

      // Gửi yêu cầu PUT API để lưu thay đổi vào cơ sở dữ liệu
      fetch("http://127.0.0.1:8000/api/gio-hang/cap-nhat-gio-hang", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chi_tiet_gio_hang_id: selectedItem.chi_tiet_id, // ID sản phẩm
          so_luong: selectedItem.so_luong, // Số lượng
          gia: selectedItem.tong_tien, // Tổng tiền đã tính
        }),
      })
        .then((response) => response.json())
        .then((data) => {

          console.log("Cập nhật giỏ hàng thành công:", data);

          // Tính tổng tiền và tổng số lượng toàn bộ giỏ hàng
          const totalQuantity = updatedCartItems.reduce(
            (acc, item) => acc + item.so_luong,
            0
          );
          const totalAmount = updatedCartItems.reduce(
            (acc, item) => acc + item.tong_tien,
            0
          );

          // Lưu tổng tiền và tổng số lượng vào localStorage
          localStorage.setItem("totalQuantity", totalQuantity);
          localStorage.setItem("totalAmount", totalAmount);

          // Log tổng tiền và tổng số lượng
          console.log("Tổng số lượng sản phẩm:", totalQuantity);
          console.log(
            "Tổng tiền:",
            totalAmount.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })
          );
        })
        .catch((error) => {
          console.error("Lỗi khi cập nhật giỏ hàng:", error);
        });
    } else {
      console.error("Không tìm thấy sản phẩm với ID:", id);
    }
  };

  // Xử lý khi "Chọn tất cả"

  const handleSelectAll = (e) => {
    const checked = e.target.checked; // Kiểm tra checkbox "Chọn tất cả" có được chọn hay không
    setSelectAll(checked); // Cập nhật trạng thái "Chọn tất cả"

    // Cập nhật trạng thái chọn sản phẩm cho tất cả sản phẩm trong giỏ hàng
    const updatedItems = cart.san_pham.reduce((acc, item) => {
      acc[item.chi_tiet_id] = checked; // Cập nhật trạng thái chọn cho mỗi chi_tiet_id
      return acc;
    }, {});

    setSelectedItems(updatedItems); // Cập nhật trạng thái cho tất cả các sản phẩm
  };

  const handleSelectItem = (e, chi_tiet_id) => {
    const checked = e.target.checked; // Kiểm tra trạng thái checkbox khi được chọn hay bỏ chọn

    // Cập nhật trạng thái của sản phẩm cụ thể theo chi_tiet_id
    setSelectedItems((prevState) => {
      const updatedItems = {
        ...prevState,
        [chi_tiet_id]: checked, // Thay đổi trạng thái của sản phẩm với chi_tiet_id tương ứng
      };

      // Kiểm tra trạng thái của tất cả sản phẩm để cập nhật "Chọn tất cả" (Chỉ có thể chọn khi tất cả các sản phẩm được chọn)
      setSelectAll(Object.values(updatedItems).every((value) => value)); // Nếu tất cả giá trị đều true, chọn tất cả

      return updatedItems;
    });
  };

  const formatPrice = (price) => {
    return (
      new Intl.NumberFormat("vi-VN", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price) + " VNĐ"
    );
  };

  const handleCheckout = () => {
    setLoading(true); // Hiện loader và disabled nút
    // Lưu lại khachHangIdFromStorage vào localStorage (nếu chưa có)
    localStorage.setItem("khachHangId", khachHangIdFromStorage);

    // Kiểm tra và in thông báo nếu lưu thành công
    const storedKhachHangId = localStorage.getItem("khachHangId");
    if (storedKhachHangId === khachHangIdFromStorage) {
      console.log(
        "Lưu khachHangId vào localStorage thành công:",
        storedKhachHangId
      );
    } else {
      console.error("Lỗi khi lưu khachHangId vào localStorage");
    }

    // Lưu các sản phẩm đã chọn vào localStorage
    const selectedProducts = cart.san_pham.filter(
      (item) => selectedItems[item.chi_tiet_id]
    );

    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));

    // Kiểm tra và in thông báo nếu lưu thành công
    const storedSelectedProducts = JSON.parse(
      localStorage.getItem("selectedProducts")
    );
    if (
      JSON.stringify(storedSelectedProducts) ===
      JSON.stringify(selectedProducts)
    ) {
      console.log(
        "Lưu sản phẩm đã chọn vào localStorage thành công:",
        storedSelectedProducts
      );
    } else {
      console.error("Lỗi khi lưu sản phẩm đã chọn vào localStorage");
    }

    // Chuyển hướng tới trang thanh toán
    console.log("Chuyển hướng đến trang thanh toán...");
    // Logic chuyển trang
    setTimeout(() => {
      window.location.href = "/thanh-toan"; // Chuyển sang trang checkout (hoặc dùng navigate nếu dùng react-router)
    }, 1500); // Thời gian chờ trước khi chuyển trang (1s là ví dụ)
  };

  const handleDelete = async (chi_tiet_id) => {
    // Hiển thị hộp thoại xác nhận với SweetAlert2
    const result = await Swal.fire({
      title: "Bạn chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });

    // Nếu người dùng nhấn "Xóa", thực hiện xóa sản phẩm
    if (result.isConfirmed) {
      const apiUrl = `http://127.0.0.1:8000/api/gio-hang/xoa-san-pham-gio-hang/${chi_tiet_id}`;

      try {
        const response = await fetch(apiUrl, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          Swal.fire(
            "Thành công!",
            "Sản phẩm đã được xóa khỏi giỏ hàng",
            "success"
          );

          // Fetch updated cart data after deletion
          const updatedCartResponse = await fetch(
            `http://127.0.0.1:8000/api/gio-hang/${khachHangIdFromStorage}`
          );

          if (!updatedCartResponse.ok) {
            throw new Error(
              `HTTP error! status: ${updatedCartResponse.status}`
            );
          }

          const updatedCartData = await updatedCartResponse.json();

          // Kiểm tra và cập nhật giỏ hàng
          if (
            updatedCartData?.san_pham &&
            Array.isArray(updatedCartData.san_pham)
          ) {
            setCart({ san_pham: updatedCartData.san_pham });
            console.log("Updated Cart Data:", updatedCartData); // Log dữ liệu giỏ hàng mới

            // Cập nhật lại selectedItems với các sản phẩm mới (bỏ chọn các sản phẩm)
            const newSelectedItems = updatedCartData.san_pham.reduce(
              (acc, item) => {
                acc[item.id] = false; // Mặc định bỏ chọn cho từng sản phẩm
                return acc;
              },
              {}
            );
            setSelectedItems(newSelectedItems);

            calculateTotalAmount(updatedCartData.san_pham);
          }
        } else {
          Swal.fire("Thất bại!", "Không thể xóa sản phẩm", "error");
        }
      } catch (error) {
        Swal.fire("Lỗi!", "Đã xảy ra lỗi: " + error.message, "error");
      }
    }
  };

  // Khi giỏ hàng trống hoặc không có dữ liệu
  if (!khachHangIdFromStorage || !cart || cart.san_pham.length === 0) {
    return (
      <div className="cart-empty">
        <i className="iconcart-empty"></i>
        <h1>Giỏ hàng trống</h1>
        <span className="dmx">Không có sản phẩm nào trong giỏ hàng</span>
        <a href="/cua-hang" className="btn-backhome">
          Tiếp tục mua sắm
        </a>
        <p className="note-help">
          Khi cần trợ giúp vui lòng gọi
          <a style={{ color: "#288ad6" }} href="tel:1900232460">
            {" "}
            1900 232 460{" "}
          </a>
          hoặc
          <a style={{ color: "#288ad6" }} href="tel:02836221060">
            {" "}
            028.3622.1060{" "}
          </a>
          (8h00 - 21h30)
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="pt-5 pb-9">
        <div className="container-small cart">
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
          <h2 className="mb-6">Cart</h2>
          <div className="row g-5">
            <div className="col-12 col-lg-12">
              <div
                id="cartTable"
                data-list='{"valueNames":["products","color","size","price","quantity","total"],"page":10}'
              >
                <div className="table-responsive scrollbar mx-n1 px-1">
                  <table className="table fs-9 mb-0 border-top border-translucent">
                    <thead>
                      <tr>
                        <th className="white-space-nowrap align-middle ps-3">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              id="checkbox-bulk-products-select"
                              type="checkbox"
                              checked={selectAll} // Đảm bảo checkbox "Chọn tất cả" đồng bộ với state
                              onChange={handleSelectAll} // Xử lý khi click vào "Chọn tất cả"
                            />
                          </div>
                        </th>

                        <th
                          className="align-middle ps-3"
                          scope="col"
                          style={{ width: "10%" }}
                        >
                          IMAGE
                        </th>
                        <th
                          className="white-space-nowrap align-middle"
                          scope="col"
                          style={{ width: "25%" }}
                        >
                          PRODUCTS
                        </th>
                        <th
                          className="align-middle"
                          scope="col"
                          style={{ width: "15%" }}
                        >
                          VARIABLE
                        </th>
                        <th
                          className="align-middle ps-3"
                          scope="col"
                          style={{ width: "12%" }}
                        >
                          PRICE
                        </th>
                        <th
                          className="align-middle ps-7"
                          scope="col"
                          style={{ width: "22%" }}
                        >
                          QUANTITY
                        </th>
                        <th
                          className="align-middle ps-0"
                          scope="col"
                          style={{ width: "15%" }}
                        >
                          TOTAL
                        </th>
                        <th
                          className="text-end align-middle ps-0"
                          scope="col"
                          style={{ width: "10%" }}
                        />
                      </tr>
                    </thead>
                    <tbody className="list" id="cart-table-body">
                      {cart.san_pham?.map((item) => (
                        <tr
                          className="cart-table-row btn-reveal-trigger"
                          key={item.id}
                        >
                          <td className="fs-9 align-middle ps-3">
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={
                                  selectedItems?.[item.chi_tiet_id] ?? false
                                } // Dùng chi_tiet_id thay item.id
                                onChange={(e) =>
                                  handleSelectItem(e, item.chi_tiet_id)
                                } // Truyền chi_tiet_id
                              />
                            </div>
                          </td>

                          <td className="align-middle white-space-nowrap py-0 ps-3">
                            <a
                              className="border border-translucent rounded-2"
                              href="product-details.html"
                              style={{
                                width: "53px", // Đặt chiều rộng khung
                                height: "53px", // Đặt chiều cao khung
                                display: "flex", // Dùng flex để căn giữa ảnh
                                justifyContent: "center", // Căn giữa ảnh theo chiều ngang
                                alignItems: "center", // Căn giữa ảnh theo chiều dọc
                                padding: 0, // Xóa padding nếu có
                                boxSizing: "border-box", // Đảm bảo ảnh không bị tràn ra ngoài
                              }}
                            >
                              <img
                                src={`${baseUrl}${item.images}`}
                                alt
                                style={{
                                  width: "40px", // Đặt kích thước ảnh 40x40px
                                  height: "40px", // Đảm bảo ảnh có kích thước chính xác
                                  objectFit: "contain", // Giữ tỷ lệ ảnh gốc
                                }}
                              />
                            </a>
                          </td>

                          <td className="products align-middle">
                            <a
                              className="fw-semibold mb-0 line-clamp-2"
                              href="product-details.html"
                            >
                              {item.ten_san_pham}
                            </a>
                          </td>
                          <td
                            className="color align-middle white-space-nowrap fs-9"
                            style={{
                              marginLeft: "20px",
                              color: "#dc2626",
                              fontWeight: "600",
                            }} // Thêm thuộc tính màu sắc
                          >
                            {item?.bien_the?.map((bienTheItem, index) => (
                              <span key={bienTheItem.gia_tri_thuoc_tinh_id}>
                                {bienTheItem.ten_gia_tri}
                                {index < item.bien_the.length - 1 && " - "}{" "}
                                {/* Thêm dấu " - " nếu không phải phần tử cuối cùng */}
                              </span>
                            ))}
                          </td>

                          <td className="price align-middle fs-9 fw-semibold ps-3">
                            {formatPrice(item.gia_sau_sale_them_gia_bien_the)}{" "}
                            {/* Hiển thị giá đã giảm cộng thêm biến thể */}
                          </td>
                          <td className="quantity align-middle fs-8 ps-7">
                            <div
                              className="input-group input-group-sm flex-nowrap"
                              data-quantity="data-quantity"
                              style={{ marginLeft: "-25px" }}
                            >
                              <button
                                className="btn btn-sm ps-4"
                                data-type="minus"
                                onClick={
                                  () =>
                                    updateCartItemQuantity(
                                      item.chi_tiet_id,
                                      item.so_luong - 1
                                    ) // Thay đổi ở đây
                                }
                              >
                                -
                              </button>
                              <input
                                className="form-control text-center input-spin-none bg-transparent border-0 px-0"
                                type="number"
                                min={1}
                                value={item.so_luong}
                                onChange={
                                  (e) =>
                                    updateCartItemQuantity(
                                      item.chi_tiet_id,
                                      Number(e.target.value)
                                    ) // Thay đổi ở đây
                                }
                                style={{ width: "10px" }}
                              />
                              <button
                                className="btn btn-sm px-8 ps-3"
                                data-type="plus"
                                onClick={
                                  () =>
                                    updateCartItemQuantity(
                                      item.chi_tiet_id,
                                      item.so_luong + 1
                                    ) // Thay đổi ở đây
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>

                          <td className="total align-middle fw-bold text-body-highlight ps-0">
                            {formatPrice(
                              item.gia_sau_sale_them_gia_bien_the *
                                item.so_luong
                            )}{" "}
                            {/* Tổng giá theo số lượng */}
                          </td>

                          <td className="align-middle white-space-nowrap text-end pe-0 ps-3">
                            <button
                              className="btn btn-sm text-body-tertiary text-opacity-85 text-body-tertiary-hover me-2"
                              onClick={() => handleDelete(item.chi_tiet_id)}
                            >
                              <span className="fas fa-trash" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <button
                    onClick={handleCheckout}
                    className={
                      selectedItems &&
                      Object.values(selectedItems).some((value) => value)
                        ? "btn btn-primary mt-5 float-end"
                        : "btn btn-phoenix-primary mt-5 float-end"
                    }
                    disabled={
                      loading || // Disable khi đang loading
                      !selectedItems ||
                      !Object.values(selectedItems).some((value) => value)
                    }
                  >
                    Đặt hàng{" "}
                    <span
                      className="fas fa-chevron-right icon-small"
                      style={{ verticalAlign: "-0.2em" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
