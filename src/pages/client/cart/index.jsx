import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  document.title = "Hypertech Store - Giỏ hàng";
  const baseUrl = "http://127.0.0.1:8000/storage/";
  const khachHangIdFromStorage = localStorage.getItem("userId");
  console.log("Khách Hàng ID từ localStorage: ", khachHangIdFromStorage);
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState({}); // Initialize with an empty object

  // useEffect to fetch cart data
  useEffect(() => {
    if (!khachHangIdFromStorage) {
      console.error("Khách hàng ID không có trong localStorage.");
      setIsLoading(false);
      return;
    }

    // Fetch cart data from the API
    fetch(`http://127.0.0.1:8000/api/gio-hang/${khachHangIdFromStorage}`)
      .then((response) => response.json())
      .then((data) => {
        setCart(data.gio_hang);
        if (data.gio_hang && data.gio_hang.chi_tiet_gio_hangs) {
          setSelectedItems(
            data.gio_hang.chi_tiet_gio_hangs.reduce((acc, item) => {
              acc[item.id] = false; // Initialize all items as unchecked
              return acc;
            }, {})
          );
          calculateTotalAmount(data.gio_hang.chi_tiet_gio_hangs);
        }
        setIsLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
        setIsLoading(false); // Stop loading in case of error
      });
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

  // Khi giỏ hàng trống hoặc không có dữ liệu
  if (
    !khachHangIdFromStorage ||
    !cart ||
    cart.chi_tiet_gio_hangs.length === 0
  ) {
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

  // Handle the checkbox for select all / deselect all
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    setSelectedItems(
      cart.chi_tiet_gio_hangs.reduce((acc, item) => {
        acc[item.id] = checked;
        return acc;
      }, {})
    );
  };

  // Handle individual item selection
  const handleSelectItem = (e, itemId) => {
    const checked = e.target.checked;
    setSelectedItems((prevState) => ({
      ...prevState,
      [itemId]: checked,
    }));
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
    const selectedProducts = cart.chi_tiet_gio_hangs.filter(
      (item) => selectedItems[item.id]
    );

    localStorage.setItem(
      "selectedProducts",
      JSON.stringify(selectedProducts)
    );

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
                              checked={selectAll} // Link with state
                              onChange={handleSelectAll}
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
                                checked={selectedItems[item.id] || false} // Sync individual item selection with state
                                onChange={(e) => handleSelectItem(e, item.id)}
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
                    className={
                      Object.values(selectedItems).some((value) => value)
                        ? "btn btn-primary mt-5 float-end"
                        : "btn btn-phoenix-primary mt-5 float-end"
                    }
                    disabled={
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
