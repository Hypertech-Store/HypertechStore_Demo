import { Link } from "react-router-dom";
import { useState } from "react";
const SlidebarAdmin = () => {
  // Sử dụng useState để theo dõi mục nào đang active
  const [activeItem, setActiveItem] = useState("dashboard"); // Mặc định "dashboard" là active

  // Hàm để thay đổi mục active
  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <nav className="navbar navbar-vertical navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
          {/* scrollbar removed*/}
          <div className="navbar-vertical-content">
            <ul className="navbar-nav flex-column" id="navbarVerticalNav">
              <li className="nav-item">
                {/* parent pages*/}
                <div className="nav-item-wrapper">
                  <a
                    className={`nav-link label-1 ${
                      activeItem === "dashboard" ? "active" : ""
                    }`}
                    href="/admin"
                    role="button"
                    data-bs-toggle
                    aria-expanded="false"
                    onClick={() => handleClick("dashboard")}
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-pie-chart"
                        >
                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                          <path d="M22 12A10 10 0 0 0 12 2v10z" />
                        </svg>
                      </span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">Bảng điều khiển</span>
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                {/* label*/}
                <p className="navbar-vertical-label">Ứng dụng</p>
                <hr className="navbar-vertical-line" />
                {/* parent pages*/}
                <div className="nav-item-wrapper">
                  <a
                    className="nav-link dropdown-indicator label-1"
                    href="#nv-e-commerce"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-e-commerce"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <span className="fas fa-caret-right dropdown-indicator-icon" />
                      </div>
                      <span className="nav-link-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-shopping-cart"
                        >
                          <circle cx={9} cy={21} r={1} />
                          <circle cx={20} cy={21} r={1} />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                      </span>
                      <span className="nav-link-text">Thương mại điện tử</span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="nv-e-commerce"
                    >
                      <li className="collapsed-nav-item-title d-none">
                        E commerce
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link dropdown-indicator ${
                            activeItem === "products" ? "active" : ""
                          }`}
                          href="#nv-products"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="nv-products"
                          onClick={() => handleClick("products")} // Set active item on click
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Sản phẩm</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="nv-products"
                          >
                            {/* <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "add-product" ? "active" : ""
                                }`}
                                to="them-san-pham"
                                onClick={() => handleClick("add-product")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Add product
                                  </span>
                                </div>
                              </Link>
                            </li> */}

                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "list-products" ? "active" : ""
                                }`}
                                to="danh-sach-san-pham"
                                onClick={() => handleClick("list-products")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Danh sách sản phẩm
                                  </span>
                                </div>
                              </Link>
                              {/* more inner pages*/}
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link dropdown-indicator ${
                            activeItem === "category" ? "active" : ""
                          }`}
                          href="#nv-category"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="nv-category"
                          onClick={() => handleClick("category")} // Set active item on click
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Danh mục</span>
                          </div>
                        </a>
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="nv-category"
                          >
                            {/* <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "add-category" ? "active" : ""
                                }`}
                                to="them-danh-muc"
                                onClick={() => handleClick("add-category")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Add category
                                  </span>
                                </div>
                              </Link>
                            </li> */}
                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "list-category" ? "active" : ""
                                }`}
                                to="danh-sach-danh-muc"
                                onClick={() => handleClick("list-category")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Danh sách danh mục
                                  </span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link dropdown-indicator ${
                            activeItem === "subcategory" ? "active" : ""
                          }`}
                          href="#nv-subcategory"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="nv-subcategory"
                          onClick={() => handleClick("subcategory")} // Set active item on click
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Danh mục con</span>
                          </div>
                        </a>
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="nv-subcategory"
                          >
                            {/* <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "add-subcategory"
                                    ? "active"
                                    : ""
                                }`}
                                to="them-danh-muc-con"
                                onClick={() => handleClick("add-subcategory")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Add subcategory
                                  </span>
                                </div>
                              </Link>
                            </li> */}
                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "list-subcategory"
                                    ? "active"
                                    : ""
                                }`}
                                to="danh-sach-danh-muc-con"
                                onClick={() => handleClick("list-subcategory")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Danh sách danh mục con
                                  </span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link dropdown-indicator ${
                            activeItem === "variable" ? "active" : ""
                          }`}
                          href="#nv-Variable"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="nv-Variable"
                          onClick={() => handleClick("variable")} // Set active item on click
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">
                              Biến thể sản phẩm
                            </span>
                          </div>
                        </a>
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="nv-Variable"
                          >
                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "attribute-name"
                                    ? "active"
                                    : ""
                                }`}
                                to="ten-thuoc-tinh"
                                onClick={() => handleClick("attribute-name")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Thuộc tính
                                  </span>
                                </div>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "attribute-value"
                                    ? "active"
                                    : ""
                                }`}
                                to="gia-tri-thuoc-tinh"
                                onClick={() => handleClick("attribute-value")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Giá trị thuộc tính
                                  </span>
                                </div>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "variation-details"
                                    ? "active"
                                    : ""
                                }`}
                                to="chi-tiet-bien-the"
                                onClick={() => handleClick("variation-details")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Biến thể
                                  </span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link dropdown-indicator ${
                            activeItem === "saleProduct" ? "active" : ""
                          }`}
                          href="#nv-saleProduct"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="nv-saleProduct"
                          onClick={() => handleClick("saleProduct")}
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Sale sản phẩm</span>
                          </div>
                        </a>
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="nv-saleProduct"
                          >
                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "saleList" ? "active" : ""
                                }`}
                                to="danh-sach-san-pham-sale"
                                onClick={() => handleClick("saleList")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Danh sách sale
                                  </span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      {/* Specifications Section */}
                      <li className="nav-item">
                        <a
                          className={`nav-link dropdown-indicator ${
                            activeItem === "parameter" ? "active" : ""
                          }`}
                          href="#nv-parameter"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="nv-parameter"
                          onClick={() => handleClick("parameter")}
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">
                              Thông số sản phẩm
                            </span>
                          </div>
                        </a>
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="nv-parameter"
                          >
                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "parameterList" ? "active" : ""
                                }`}
                                to="danh-sach-thong-so"
                                onClick={() => handleClick("parameterList")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Thông số
                                  </span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="nv-parameter"
                          >
                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "parameterLink" ? "active" : ""
                                }`}
                                to="lien-ket-thong-so"
                                onClick={() => handleClick("parameterLink")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Liên kết thông số
                                  </span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* parent pages*/}
                <div className="nav-item-wrapper">
                  <a
                    className={`nav-link dropdown-indicator label-1 ${
                      activeItem === "account" ? "active" : ""
                    }`}
                    href="#account"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="account"
                    onClick={() => handleClick("account")} // Khi nhấn, cập nhật trạng thái active
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <span className="fas fa-caret-right dropdown-indicator-icon" />
                      </div>
                      <span className="nav-link-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </span>
                      <span className="nav-link-text">Người dùng</span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="account"
                    >
                      <li className="collapsed-nav-item-title d-none">
                        Người dùng
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link dropdown-indicator ${
                            activeItem === "admin" ? "active" : ""
                          }`}
                          href="#nv-admin"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="nv-admin"
                          onClick={() => handleClick("admin")}
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Admin</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="nv-admin"
                          >
                            {/* <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "addAdmin" ? "active" : ""
                                }`}
                                to="them-san-pham"
                                onClick={() => handleClick("addAdmin")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Add admin
                                  </span>
                                </div>
                              </Link>
                            </li> */}

                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "listAdmin" ? "active" : ""
                                }`}
                                to="danh-sach-quan-tri"
                                onClick={() => handleClick("listAdmin")}
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Danh sách admin
                                  </span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link dropdown-indicator ${
                            activeItem === "customer" ? "active" : ""
                          }`}
                          href="#category"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="category"
                          onClick={() => handleClick("customer")}
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Khách hàng</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="category"
                          >
                            <li className="nav-item">
                              <Link
                                className={`nav-link ${
                                  activeItem === "listCustomer" ? "active" : ""
                                }`}
                                onClick={() => handleClick("listCustomer")}
                                to="danh-sach-khach-hang"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Danh sách khách hàng
                                  </span>
                                </div>
                              </Link>
                              {/* more inner pages*/}
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <li className="nav-item">
                  <div className="nav-item-wrapper">
                    <Link
                      to="khuyen-mai"
                      className={`nav-link label-1 ${
                        activeItem === "deals" ? "active" : ""
                      }`}
                      role="button"
                      data-bs-toggle
                      aria-expanded="false"
                      onClick={() => handleClick("deals")}
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-gift"
                          >
                            <polyline points="20 12 20 22 4 22 4 12" />
                            <rect x={2} y={7} width={20} height={5} />
                            <line x1={12} y1={22} x2={12} y2={7} />
                            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                          </svg>
                        </span>
                        <span className="nav-link-text">Khuyến mãi</span>
                      </div>
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  {/* parent pages*/}
                  <div className="nav-item-wrapper">
                    <Link
                      className={`nav-link label-1 ${
                        activeItem === "orders" ? "active" : ""
                      }`}
                      to="don-hang"
                      role="button"
                      data-bs-toggle
                      aria-expanded="false"
                      onClick={() => handleClick("orders")}
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-package"
                          >
                            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1={12} y1="22.08" x2={12} y2={12} />
                          </svg>
                        </span>
                        <span className="nav-link-text">Đơn hàng</span>
                      </div>
                    </Link>
                  </div>
                </li>

                {/* parent pages*/}
                <div className="nav-item-wrapper">
                  <Link
                    className={`nav-link label-1 ${
                      activeItem === "chat" ? "active" : ""
                    }`}
                    to="tin-nhan"
                    role="button"
                    data-bs-toggle
                    aria-expanded="false"
                    onClick={() => handleClick("chat")}
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-message-square"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">Chat</span>
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="nav-item-wrapper">
                  <Link
                    className={`nav-link label-1 ${
                      activeItem === "transport" ? "active" : ""
                    }`}
                    to="hinh-thuc-van-chuyen"
                    role="button"
                    data-bs-toggle
                    aria-expanded="false"
                    onClick={() => handleClick("transport")}
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-truck"
                        >
                          <rect x={1} y={3} width={15} height={13} />
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                          <circle cx="5.5" cy="18.5" r="2.5" />
                          <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                      </span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">
                          Hình thức vận chuyển
                        </span>
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="nav-item-wrapper">
                  <Link
                    className={`nav-link label-1 ${
                      activeItem === "payment" ? "active" : ""
                    }`}
                    to="phuong-thuc-thanh-toan"
                    role="button"
                    data-bs-toggle
                    aria-expanded="false"
                    onClick={() => handleClick("payment")}
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-credit-card"
                        >
                          <rect
                            x={1}
                            y={4}
                            width={22}
                            height={16}
                            rx={2}
                            ry={2}
                          />
                          <line x1={1} y1={10} x2={23} y2={10} />
                        </svg>
                      </span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">
                          Phương thức thanh toán
                        </span>
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="nav-item-wrapper">
                  <Link
                    className={`nav-link label-1 ${
                      activeItem === "status" ? "active" : ""
                    }`}
                    to="trang-thai-don-hang"
                    role="button"
                    data-bs-toggle
                    aria-expanded="false"
                    onClick={() => handleClick("status")}
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          viewBox="0 0 24 24"
                          width={16}
                          height={16}
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="css-i6dzq1"
                        >
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                        </svg>
                      </span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">
                          Trạng thái đơn hàng
                        </span>
                      </span>
                    </div>
                  </Link>
                </div>

                {/* parent pages*/}
                <div className="nav-item-wrapper">
                  <Link
                    className={`nav-link dropdown-indicator label-1 ${
                      activeItem === "email" ? "active" : ""
                    }`}
                    to="#nv-email"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-email"
                    onClick={() => handleClick("email")} // Xử lý khi click vào
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <span className="fas fa-caret-right dropdown-indicator-icon" />
                      </div>
                      <span className="nav-link-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-mail"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </span>
                      <span className="nav-link-text">Email</span>
                    </div>
                  </Link>

                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="nv-email"
                    >
                      <li className="collapsed-nav-item-title d-none">Email</li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${
                            activeItem === "inbox" ? "active" : ""
                          }`}
                          to="apps/email/inbox.html"
                          onClick={() => handleClick("inbox")} // Cập nhật active khi click vào Inbox
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Inbox</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${
                            activeItem === "email-detail" ? "active" : ""
                          }`}
                          to="apps/email/email-detail.html"
                          onClick={() => handleClick("email-detail")} // Cập nhật active khi click vào Email detail
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Email detail</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${
                            activeItem === "compose" ? "active" : ""
                          }`}
                          to="apps/email/compose.html"
                          onClick={() => handleClick("compose")} // Cập nhật active khi click vào Compose
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Compose</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav-item-wrapper">
                  <Link
                    className={`nav-link label-1 ${
                      activeItem === "noti" ? "active" : ""
                    }`}
                    to="pages/notifications.html"
                    role="button"
                    data-bs-toggle
                    aria-expanded="false"
                    onClick={() => handleClick("noti")}
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-bell"
                        >
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                      </span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">Notifications</span>
                      </span>
                    </div>
                  </Link>
                </div>
                {/* parent pages*/}
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-vertical-footer">
          <button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center">
            <span className="uil uil-left-arrow-to-left fs-8" />
            <span className="uil uil-arrow-from-right fs-8" />
            <span className="navbar-vertical-footer-text ms-2">Thu gọn</span>
          </button>
        </div>
      </nav>
    </>
  );
};
export default SlidebarAdmin;
