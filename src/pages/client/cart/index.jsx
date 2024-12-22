import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  document.title = "Hypertech Store - Giỏ hàng";
  const baseUrl = "http://127.0.0.1:8000/storage/";
  const khachHangIdFromStorage = sessionStorage.getItem("userId");
  console.log("Khách Hàng ID từ sessionStorage: ", khachHangIdFromStorage);
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
  const [cart, setCart] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (!khachHangIdFromStorage) {
      console.error("Khách hàng ID không có trong sessionStorage.");
      return;
    }

    // Fetch cart data from API
    fetch(`http://127.0.0.1:8000/api/gio-hang/${khachHangIdFromStorage}`)
      .then((response) => response.json())
      .then((data) => {
        setCart(data.gio_hang);
        calculateTotalAmount(data.gio_hang.chi_tiet_gio_hangs);
        console.log(data.gio_hang);
      })
      .catch((error) => console.error("Error fetching cart data:", error));
  }, [khachHangIdFromStorage]);

  const calculateTotalAmount = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.gia * item.so_luong; // Tính tổng giỏ hàng
    });
    setTotalAmount(total); // Cập nhật tổng tiền giỏ hàng
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    // Đảm bảo số lượng sản phẩm không ít hơn 1
    const quantity = Math.max(newQuantity, 1);
    console.log("Updating cart item quantity:", {
      itemId,
      newQuantity,
      quantity,
    });

    // Tìm sản phẩm trong giỏ hàng
    const updatedItem = cart.chi_tiet_gio_hangs.find(
      (item) => item.id === itemId
    );

    if (!updatedItem) {
      console.error("Item not found");
      return;
    }

    // Lấy giá sản phẩm sau khi giảm giá và giá biến thể
    const newPrice =
      updatedItem.chi_tiet_san_pham.gia_sau_sale_them_gia_bien_the;

    // Cập nhật lại số lượng sản phẩm và giữ nguyên giá mới
    const updatedCartItems = cart.chi_tiet_gio_hangs.map((item) =>
      item.id === itemId
        ? { ...item, so_luong: quantity } // Cập nhật số lượng
        : item
    );

    // Tính lại tổng giá của giỏ hàng sau khi cập nhật
    let updatedTotalAmount = 0;
    updatedCartItems.forEach((item) => {
      updatedTotalAmount +=
        item.so_luong * item.chi_tiet_san_pham.gia_sau_sale_them_gia_bien_the;
    });

    console.log("Updated cart items:", updatedCartItems);

    // Cập nhật giỏ hàng với trạng thái mới
    setCart({
      ...cart,
      chi_tiet_gio_hangs: updatedCartItems,
      totalAmount: updatedTotalAmount,
    });

    // Nếu muốn gửi yêu cầu API để cập nhật server
    fetch("http://127.0.0.1:8000/api/gio-hang/cap-nhat-gio-hang", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chi_tiet_gio_hang_id: itemId,
        so_luong: quantity,
        gia_sau_sale_them_gia_bien_the: newPrice, // Gửi giá mới sau khi giảm và giá biến thể
      }),
    })
      .then(async (response) => {
        console.log("Response received:", response);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }
        return response.json();
      })
      .then((data) => console.log("API response:", data))
      .catch((error) => console.error("Error updating cart:", error));
  };

  // Hiển thị thông báo khi giỏ hàng đang load
  if (!cart) {
    return <div>Loading...</div>;
  }

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
    // Chuyển hướng tới trang thanh toán
    navigate("/thanh-toan");
  };

  return (
    <>
      <section className="pt-5 pb-9">
        <div className="container-small cart">
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
                              data-bulk-select='{"body":"products-table-body"}'
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
                          className="align-middle ps-0"
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
                      {cart.chi_tiet_gio_hangs.map((item) => (
                        <tr
                          className="cart-table-row btn-reveal-trigger"
                          key={item.id}
                        >
                          <td className="fs-9 align-middle ps-3">
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                type="checkbox"
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
                                src={`${baseUrl}${item.chi_tiet_san_pham.images}`}
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
                              {item.chi_tiet_san_pham.ten_san_pham}
                            </a>
                          </td>
                          <td
                            className="color align-middle white-space-nowrap fs-9 text-body"
                            style={{ marginLeft: "20px" }}
                          >
                            {item.thuoc_tinh.map((t, index) => (
                              <div key={index}>{t.ten_gia_tri}</div>
                            ))}
                          </td>
                          <td className="price align-middle text-body fs-9 fw-semibold ps-0">
                            {formatPrice(
                              item.chi_tiet_san_pham
                                .gia_sau_sale_them_gia_bien_the
                            )}{" "}
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
                                onClick={() =>
                                  updateCartItemQuantity(
                                    item.id,
                                    item.so_luong - 1
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                className="form-control text-center input-spin-none bg-transparent border-0 px-0"
                                type="number"
                                min={1}
                                value={item.so_luong}
                                onChange={(e) =>
                                  updateCartItemQuantity(
                                    item.id,
                                    Number(e.target.value)
                                  )
                                }
                                style={{ width: "10px" }}
                              />
                              <button
                                className="btn btn-sm px-8 ps-3"
                                data-type="plus"
                                onClick={() =>
                                  updateCartItemQuantity(
                                    item.id,
                                    item.so_luong + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="total align-middle fw-bold text-body-highlight ps-0">
                            {formatPrice(
                              item.chi_tiet_san_pham
                                .gia_sau_sale_them_gia_bien_the * item.so_luong
                            )}{" "}
                            {/* Tổng giá theo số lượng */}
                          </td>

                          <td className="align-middle white-space-nowrap text-end pe-0 ps-3">
                            <button className="btn btn-sm text-body-tertiary text-opacity-85 text-body-tertiary-hover me-2">
                              <span className="fas fa-trash" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <button
                    onClick={handleCheckout}
                    className="btn btn-primary mt-5 float-end"
                  >
                    Checkout
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
