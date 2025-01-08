import logo from "../../../../assets/img/icons/logo1.png";
import products from "../../../../assets/img/products/60x60/3.png";
import avatar from "../../../../assets/img/team/72x72/57.webp";
import team from "../../../../assets/img/team/40x40/30.webp";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();
  const adminId = localStorage.getItem("adminId");
  const adminName = localStorage.getItem("adminName");
  const adminAvatar = localStorage.getItem("adminAvatar");
  const link = "http://127.0.0.1:8000/storage/";

  // console.log(adminId);
  // console.log(adminName);
  // console.log(adminAvatar);

  const handleLogout = () => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn đăng xuất?",
      text: "Bạn sẽ không thể hoàn tác hành động này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý, đăng xuất!",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("adminId");
        localStorage.removeItem("adminName");
        localStorage.removeItem("adminAvatar");
        localStorage.removeItem("customRole");
        toast.success("Đăng xuất thành công!");
        setTimeout(() => {
          navigate("/login");
        }, 100); // Delay 100ms để đảm bảo trạng thái đã được cập nhật
      }
    });
  };

  return (
    <>
      <nav
        className="navbar navbar-top fixed-top navbar-expand"
        id="navbarDefault"
      >
        <div className="collapse navbar-collapse justify-content-between">
          <div className="navbar-logo">
            <button
              className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalCollapse"
              aria-controls="navbarVerticalCollapse"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggle-icon">
                <span className="toggle-line" />
              </span>
            </button>
            <a className="navbar-brand me-1 me-sm-3" href="index.html">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img src={logo} alt="phoenix" width={27} />
                  <h5 className="logo-text ms-2 d-none d-sm-block">
                    hypertech store
                  </h5>
                </div>
              </div>
            </a>
          </div>
          <div
            className="search-box navbar-top-search-box d-none d-lg-block"
            data-list='{"valueNames":["title"]}'
            style={{ width: "25rem" }}
          >
            <form
              className="position-relative"
              data-bs-toggle="search"
              data-bs-display="static"
            >
              <input
                className="form-control search-input fuzzy-search rounded-pill form-control-sm"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <span className="fas fa-search search-box-icon" />
            </form>
            <div
              className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none"
              data-bs-dismiss="search"
            >
              <button className="btn btn-link p-0" aria-label="Close" />
            </div>
            <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
              <div className="scrollbar-overlay" style={{ maxHeight: "30rem" }}>
                <div className="list pb-3">
                  <h6 className="dropdown-header text-body-highlight fs-10 py-2">
                    24 <span className="text-body-quaternary">results</span>
                  </h6>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                    Recently Searched
                  </h6>
                  <div className="py-2">
                    <a
                      className="dropdown-item"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span
                            className="fa-solid fa-clock-rotate-left"
                            data-fa-transform="shrink-2"
                          />{" "}
                          Store Macbook
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span
                            className="fa-solid fa-clock-rotate-left"
                            data-fa-transform="shrink-2"
                          />{" "}
                          MacBook Air - 13″
                        </div>
                      </div>
                    </a>
                  </div>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                    Products
                  </h6>
                  <div className="py-2">
                    <a
                      className="dropdown-item py-2 d-flex align-items-center"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="file-thumbnail me-2">
                        <img
                          className="h-100 w-100 object-fit-cover rounded-3"
                          src={products}
                          alt
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 text-body-highlight title">
                          MacBook Air - 13″
                        </h6>
                        <p className="fs-10 mb-0 d-flex text-body-tertiary">
                          <span className="fw-medium text-body-tertiary text-opactity-85">
                            8GB Memory - 1.6GHz - 128GB Storage
                          </span>
                        </p>
                      </div>
                    </a>
                    <a
                      className="dropdown-item py-2 d-flex align-items-center"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="file-thumbnail me-2">
                        <img className="img-fluid" src={products} alt />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 text-body-highlight title">
                          MacBook Pro - 13″
                        </h6>
                        <p className="fs-10 mb-0 d-flex text-body-tertiary">
                          <span className="fw-medium text-body-tertiary text-opactity-85">
                            30 Sep at 12:30 PM
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                    Quick Links
                  </h6>
                  <div className="py-2">
                    <a
                      className="dropdown-item"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span
                            className="fa-solid fa-link text-body"
                            data-fa-transform="shrink-2"
                          />{" "}
                          Support MacBook House
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span
                            className="fa-solid fa-link text-body"
                            data-fa-transform="shrink-2"
                          />{" "}
                          Store MacBook″
                        </div>
                      </div>
                    </a>
                  </div>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                    Files
                  </h6>
                  <div className="py-2">
                    <a
                      className="dropdown-item"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span
                            className="fa-solid fa-file-zipper text-body"
                            data-fa-transform="shrink-2"
                          />{" "}
                          Library MacBook folder.rar
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span
                            className="fa-solid fa-file-lines text-body"
                            data-fa-transform="shrink-2"
                          />{" "}
                          Feature MacBook extensions.txt
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span
                            className="fa-solid fa-image text-body"
                            data-fa-transform="shrink-2"
                          />{" "}
                          MacBook Pro_13.jpg
                        </div>
                      </div>
                    </a>
                  </div>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                    Members
                  </h6>
                  <div className="py-2">
                    <a
                      className="dropdown-item py-2 d-flex align-items-center"
                      href="pages/members.html"
                    >
                      <div className="avatar avatar-l status-online me-2 text-body">
                        <img className="rounded-circle" src={team} alt />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 text-body-highlight title">
                          Carry Anna
                        </h6>
                        <p className="fs-10 mb-0 d-flex text-body-tertiary">
                          anna@technext.it
                        </p>
                      </div>
                    </a>
                    <a
                      className="dropdown-item py-2 d-flex align-items-center"
                      href="pages/members.html"
                    >
                      <div className="avatar avatar-l me-2 text-body">
                        <img className="rounded-circle" src={team} alt />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 text-body-highlight title">
                          John Smith
                        </h6>
                        <p className="fs-10 mb-0 d-flex text-body-tertiary">
                          smith@technext.it
                        </p>
                      </div>
                    </a>
                  </div>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                    Related Searches
                  </h6>
                  <div className="py-2">
                    <a
                      className="dropdown-item"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span
                            className="fa-brands fa-firefox-browser text-body"
                            data-fa-transform="shrink-2"
                          />{" "}
                          Search in the Web MacBook
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item"
                      href="apps/e-commerce/landing/product-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span
                            className="fa-brands fa-chrome text-body"
                            data-fa-transform="shrink-2"
                          />{" "}
                          Store MacBook″
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <p className="fallback fw-bold fs-7 d-none">
                    No Result Found.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="navbar-nav navbar-nav-icons flex-row">
            <li className="nav-item">
              <div className="theme-control-toggle fa-icon-wait px-2">
                <input
                  className="form-check-input ms-0 theme-control-toggle-input"
                  type="checkbox"
                  data-theme-control="phoenixTheme"
                  defaultValue="dark"
                  id="themeControlToggle"
                />
                <label
                  className="mb-0 theme-control-toggle-label theme-control-toggle-light"
                  htmlFor="themeControlToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Switch theme"
                  style={{ height: 32, width: 32 }}
                >
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
                    className="feather feather-moon icon"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </label>
                <label
                  className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                  htmlFor="themeControlToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Switch theme"
                  style={{ height: 32, width: 32 }}
                >
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
                    className="feather feather-sun icon"
                  >
                    <circle cx={12} cy={12} r={5} />
                    <line x1={12} y1={1} x2={12} y2={3} />
                    <line x1={12} y1={21} x2={12} y2={23} />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1={1} y1={12} x2={3} y2={12} />
                    <line x1={21} y1={12} x2={23} y2={12} />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                </label>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                style={{ minWidth: "2.25rem" }}
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
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
                  style={{ height: 20, width: 20 }}
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
                id="navbarDropdownNotfication"
                aria-labelledby="navbarDropdownNotfication"
              >
                <div className="card position-relative border-0">
                  <div className="card-header p-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-body-emphasis mb-0">Notifications</h5>
                      <button
                        className="btn btn-link p-0 fs-9 fw-normal"
                        type="button"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div
                      className="scrollbar-overlay"
                      style={{ height: "27rem" }}
                    >
                      <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img className="rounded-circle" src={team} alt />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs-9 text-body-emphasis">
                                Jessie Samson
                              </h4>
                              <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs-10">💬</span>Mentioned
                                you in a comment.
                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                  10m
                                </span>
                              </p>
                              <p className="text-body-secondary fs-9 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">10:41 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button
                              className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10 text-body" />
                            </button>
                            <div className="dropdown-menu py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <div className="avatar-name rounded-circle">
                                <span>J</span>
                              </div>
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs-9 text-body-emphasis">
                                Jane Foster
                              </h4>
                              <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs-10">📅</span>Created an
                                event.
                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                  20m
                                </span>
                              </p>
                              <p className="text-body-secondary fs-9 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">10:20 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button
                              className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10 text-body" />
                            </button>
                            <div className="dropdown-menu py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle avatar-placeholder"
                                src={team}
                                alt
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs-9 text-body-emphasis">
                                Jessie Samson
                              </h4>
                              <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs-10">👍</span>Liked your
                                comment.
                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                  1h
                                </span>
                              </p>
                              <p className="text-body-secondary fs-9 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">9:30 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button
                              className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10 text-body" />
                            </button>
                            <div className="dropdown-menu py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img className="rounded-circle" src={team} alt />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs-9 text-body-emphasis">
                                Kiera Anderson
                              </h4>
                              <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs-10">💬</span>Mentioned
                                you in a comment.
                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                              </p>
                              <p className="text-body-secondary fs-9 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">9:11 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button
                              className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10 text-body" />
                            </button>
                            <div className="dropdown-menu py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle"
                                src={adminAvatar}
                                alt
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs-9 text-body-emphasis">
                                Herman Carter
                              </h4>
                              <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs-10">👤</span>Tagged you
                                in a comment.
                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                              </p>
                              <p className="text-body-secondary fs-9 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">10:58 PM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button
                              className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10 text-body" />
                            </button>
                            <div className="dropdown-menu py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 notification-card position-relative read">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <img
                                className="rounded-circle"
                                src={avatar}
                                alt
                              />
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs-9 text-body-emphasis">
                                Benjamin Button
                              </h4>
                              <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                <span className="me-1 fs-10">👍</span>Liked your
                                comment.
                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                              </p>
                              <p className="text-body-secondary fs-9 mb-0">
                                <span className="me-1 fas fa-clock" />
                                <span className="fw-bold">10:18 AM </span>August
                                7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button
                              className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fas fa-ellipsis-h fs-10 text-body" />
                            </button>
                            <div className="dropdown-menu py-2">
                              <a className="dropdown-item" href="#!">
                                Mark as unread
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer p-0 border-top border-translucent border-0">
                    <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                      <a className="fw-bolder" href="pages/notifications.html">
                        Notification history
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link lh-1 pe-0"
                id="navbarDropdownUser"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="avatar avatar-l">
                  <img
                    className="rounded-circle"
                    src={`${link}${adminAvatar}`}
                    alt
                  />
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border"
                aria-labelledby="navbarDropdownUser"
              >
                <div className="card position-relative border-0">
                  <div className="card-body p-0">
                    <div className="text-center pt-4">
                      <div className="avatar avatar-xl">
                        <img
                          className="rounded-circle"
                          src={`${link}${adminAvatar}`}
                          alt="User Avatar"
                        />
                      </div>
                      <h6 className="mt-2 text-body-emphasis">
                        {adminName || "Chưa cập nhật tên"}
                      </h6>
                      <hr />
                    </div>
                  </div>
                  <div
                    className="overflow-auto scrollbar"
                    style={{ height: "9rem" }}
                  >
                    <ul className="nav d-flex flex-column mb-2 pb-1">
                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
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
                            className="feather feather-user me-2 text-body align-bottom"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                          </svg>

                          <span>Tài khoản</span>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
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
                            className="feather feather-settings me-2 text-body align-bottom"
                          >
                            <circle cx={12} cy={12} r={3} />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                          </svg>
                          Cài đặt &amp; Quyền riêng tư
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
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
                            className="feather feather-help-circle me-2 text-body align-bottom"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <line x1={12} y1={17} x2="12.01" y2={17} />
                          </svg>
                          Trợ giúp
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
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
                            className="feather feather-globe me-2 text-body align-bottom"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <line x1={2} y1={12} x2={22} y2={12} />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          Ngôn ngữ
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer border-top border-translucent pb-3">
                    <div className="px-3">
                      <a
                        className="btn btn-phoenix-secondary d-flex flex-center w-100"
                        href="#!"
                        onClick={handleLogout}
                      >
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
                          className="feather feather-log-out me-2"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1={21} y1={12} x2={9} y2={12} />
                        </svg>
                        Đăng xuất
                      </a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default HeaderAdmin;
