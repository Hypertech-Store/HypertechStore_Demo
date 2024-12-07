import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink từ react-router-dom

import logo from "../../../../assets/img/icons/logo1.png";
import team from "../../../../assets/img/team/40x40/30.webp";
import team1 from "../../../../assets/img/team/40x40/avatar.webp";
import team2 from "../../../../assets/img/team/40x40/57.webp";
import team3 from "../../../../assets/img/team/40x40/59.webp";
import team4 from "../../../../assets/img/team/40x40/58.webp";
import avatar from "../../../../assets/img/team/72x72/57.webp";
const HeaderClient = () => {
  return (
    <>
      <div className="container-small">
        <div className="ecommerce-topbar">
          <nav className="navbar navbar-expand-lg navbar-light px-0">
            <div className="row gx-0 gy-2 w-100 flex-between-center">
              <div className="col-auto">
                <a className="text-decoration-none" href="/">
                  <div className="d-flex align-items-center">
                    <img src={logo} alt="phoenix" width={27} />
                    <h5 className="logo-text ms-2">hypertech store</h5>
                  </div>
                </a>
              </div>
              <div className="order-md-1 col-auto">
                <ul className="navbar-nav-icons flex-row me-n2 navbar-nav">
                  <li className="d-flex align-items-center nav-item">
                    <div className="theme-control-toggle">
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
                        <span className="icon" data-feather="moon" />
                      </label>
                      <label
                        className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                        htmlFor="themeControlToggle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        data-bs-title="Switch theme"
                        style={{ height: 32, width: 32 }}
                      >
                        <span className="icon" data-feather="sun" />
                      </label>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link px-2 icon-indicator icon-indicator-primary"
                      href="gio-hang"
                      role="button"
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
                        className="feather feather-shopping-cart text-body-tertiary"
                        style={{ height: 20, width: 20 }}
                      >
                        <circle cx={9} cy={21} r={1} />
                        <circle cx={20} cy={21} r={1} />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                      <span className="icon-indicator-number">3</span>
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link px-2 icon-indicator icon-indicator-sm icon-indicator-danger"
                      id="navbarTopDropdownNotification"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span
                        className="text-body-tertiary"
                        data-feather="bell"
                        style={{ height: 20, width: 20 }}
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret mt-2"
                      id="navbarDropdownNotfication"
                      aria-labelledby="navbarDropdownNotfication"
                    >
                      <div className="card position-relative border-0">
                        <div className="card-header p-2">
                          <div className="d-flex justify-content-between">
                            <h5 className="text-body-emphasis mb-0">
                              Notifications
                            </h5>
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
                                    <img
                                      className="rounded-circle"
                                      src={team}
                                      alt
                                    />
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
                                      Jessie Samson
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">💬</span>
                                      Mentioned you in a comment.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                        10m
                                      </span>
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock" />
                                      <span className="fw-bold">10:41 AM </span>
                                      August 7,2021
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
                                      <span className="me-1 fs-10">📅</span>
                                      Created an event.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                        20m
                                      </span>
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock" />
                                      <span className="fw-bold">10:20 AM </span>
                                      August 7,2021
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
                                      src={team1}
                                      alt
                                    />
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
                                      Jessie Samson
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">👍</span>
                                      Liked your comment.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                        1h
                                      </span>
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock" />
                                      <span className="fw-bold">9:30 AM </span>
                                      August 7,2021
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
                                      src={team2}
                                      alt
                                    />
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
                                      Kiera Anderson
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">💬</span>
                                      Mentioned you in a comment.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock" />
                                      <span className="fw-bold">9:11 AM </span>
                                      August 7,2021
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
                                      src={team3}
                                      alt
                                    />
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
                                      Herman Carter
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">👤</span>
                                      Tagged you in a comment.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock" />
                                      <span className="fw-bold">10:58 PM </span>
                                      August 7,2021
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
                            <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                              <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="d-flex">
                                  <div className="avatar avatar-m status-online me-3">
                                    <img
                                      className="rounded-circle"
                                      src={team4}
                                      alt
                                    />
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
                                      Benjamin Button
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">👍</span>
                                      Liked your comment.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock" />
                                      <span className="fw-bold">10:18 AM </span>
                                      August 7,2021
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
                            <a
                              className="fw-bolder"
                              href="../../../pages/notifications.html"
                            >
                              Notification history
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="dropdown-caret-none nav-link lh-1 dropdown-toggle"
                      id="navbarDropdownUser"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span
                        className="text-body-tertiary"
                        data-feather="user"
                        style={{ height: 20, width: 20 }}
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border mt-2"
                      aria-labelledby="navbarDropdownUser"
                    >
                      <div className="card position-relative border-0">
                        <div className="card-body p-0">
                          <div className="text-center pt-4 pb-3">
                            <div className="avatar avatar-xl ">
                              <img
                                className="rounded-circle "
                                src={avatar}
                                alt
                              />
                            </div>
                            <h6 className="mt-2 text-body-emphasis">
                              Jerry Seinfield
                            </h6>
                          </div>
                          <div className="mb-3 mx-3">
                            <input
                              className="form-control form-control-sm"
                              id="statusUpdateInput"
                              type="text"
                              placeholder="Update your status"
                            />
                          </div>
                        </div>
                        <div
                          className="overflow-auto scrollbar"
                          style={{ height: "10rem" }}
                        >
                          <ul className="nav d-flex flex-column mb-2 pb-1">
                            <li className="nav-item">
                              <a
                                className="nav-link px-3 d-block"
                                href="thong-tin-tai-khoan"
                              >
                                {" "}
                                <span
                                  className="me-2 text-body align-bottom"
                                  data-feather="user"
                                />
                                <span>Profile</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link px-3 d-block" href="#!">
                                <span
                                  className="me-2 text-body align-bottom"
                                  data-feather="pie-chart"
                                />
                                Dashboard
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link px-3 d-block" href="#!">
                                {" "}
                                <span
                                  className="me-2 text-body align-bottom"
                                  data-feather="lock"
                                />
                                Posts &amp; Activity
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link px-3 d-block" href="#!">
                                {" "}
                                <span
                                  className="me-2 text-body align-bottom"
                                  data-feather="settings"
                                />
                                Settings &amp; Privacy{" "}
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link px-3 d-block" href="#!">
                                {" "}
                                <span
                                  className="me-2 text-body align-bottom"
                                  data-feather="help-circle"
                                />
                                Help Center
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link px-3 d-block" href="#!">
                                {" "}
                                <span
                                  className="me-2 text-body align-bottom"
                                  data-feather="globe"
                                />
                                Language
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer p-0 border-top border-translucent">
                          <ul className="nav d-flex flex-column my-3">
                            <li className="nav-item">
                              <a className="nav-link px-3 d-block" href="#!">
                                {" "}
                                <span
                                  className="me-2 text-body align-bottom"
                                  data-feather="user-plus"
                                />
                                Add another account
                              </a>
                            </li>
                          </ul>
                          <hr />
                          <div className="px-3">
                            {" "}
                            <a
                              className="btn btn-phoenix-secondary d-flex flex-center w-100"
                              href="dang-xuat"
                            >
                              <span className="me-2" data-feather="log-out">
                                {" "}
                              </span>
                              Sign out
                            </a>
                          </div>
                          <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
                            <a className="text-body-quaternary me-1" href="#!">
                              Privacy policy
                            </a>
                            •
                            <a className="text-body-quaternary mx-1" href="#!">
                              Terms
                            </a>
                            •
                            <a className="text-body-quaternary ms-1" href="#!">
                              Cookies
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 col-12">
                <div className="search-box ecommerce-search-box w-100">
                  <form className="position-relative">
                    <input
                      placeholder="Search..."
                      type="search"
                      className="search-input search rounded-pill form-control form-control-sm"
                    />
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="magnifying-glass"
                      className="svg-inline--fa fa-magnifying-glass search-box-icon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                      ></path>
                    </svg>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <nav className="ecommerce-navbar navbar-expand navbar-light bg-body-emphasis justify-content-between">
        <div
          className="container-small d-flex flex-between-center"
          data-navbar="data-navbar"
        >
          <div className="dropdown">
            <button
              className="btn text-body ps-0 pe-5 text-nowrap dropdown-toggle dropdown-caret-none"
              data-category-btn="data-category-btn"
              data-bs-toggle="dropdown"
            >
              <span className="fas fa-bars me-2" />
              Category
            </button>
            <div className="dropdown-menu border border-translucent py-0 category-dropdown-menu">
              <div
                className="card border-0 scrollbar"
                style={{ maxHeight: 657 }}
              >
                <div className="card-body p-6 pb-3">
                  <div className="row gx-7 gy-5 mb-5">
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex align-items-center mb-3">
                        <span
                          className="text-primary me-2"
                          data-feather="pocket"
                          style={{ strokeWidth: 3 }}
                        />
                        <h6 className="text-body-highlight mb-0 text-nowrap">
                          Collectibles &amp; Art
                        </h6>
                      </div>
                      <div className="ms-n2">
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Collectibles
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Antiques
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Sports memorabilia{" "}
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Art
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex align-items-center mb-3">
                        <span
                          className="text-primary me-2"
                          data-feather="home"
                          style={{ strokeWidth: 3 }}
                        />
                        <h6 className="text-body-highlight mb-0 text-nowrap">
                          Home &amp; Gardan
                        </h6>
                      </div>
                      <div className="ms-n2">
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Yard, Garden &amp; Outdoor
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Crafts
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Home Improvement
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Pet Supplies
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex align-items-center mb-3">
                        <span
                          className="text-primary me-2"
                          data-feather="globe"
                          style={{ strokeWidth: 3 }}
                        />
                        <h6 className="text-body-highlight mb-0 text-nowrap">
                          Sporting Goods
                        </h6>
                      </div>
                      <div className="ms-n2">
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Outdoor Sports
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Team Sports
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Exercise &amp; Fitness
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Golf
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex align-items-center mb-3">
                        <span
                          className="text-primary me-2"
                          data-feather="monitor"
                          style={{ strokeWidth: 3 }}
                        />
                        <h6 className="text-body-highlight mb-0 text-nowrap">
                          Electronics
                        </h6>
                      </div>
                      <div className="ms-n2">
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Computers &amp; Tablets
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Camera &amp; Photo
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          TV, Audio &amp; Surveillance
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Cell Ohone &amp; Accessories
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex align-items-center mb-3">
                        <span
                          className="text-primary me-2"
                          data-feather="truck"
                          style={{ strokeWidth: 3 }}
                        />
                        <h6 className="text-body-highlight mb-0 text-nowrap">
                          Auto Parts &amp; Accessories
                        </h6>
                      </div>
                      <div className="ms-n2">
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          GPS &amp; Security Devices
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Rader &amp; Laser Detectors
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Care &amp; Detailing
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Scooter Parts &amp; Accessories
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex align-items-center mb-3">
                        <span
                          className="text-primary me-2"
                          data-feather="codesandbox"
                          style={{ strokeWidth: 3 }}
                        />
                        <h6 className="text-body-highlight mb-0 text-nowrap">
                          Toys &amp; Hobbies
                        </h6>
                      </div>
                      <div className="ms-n2">
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Radio Control
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Kids Toys
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Action Figures
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Dolls &amp; Bears
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex align-items-center mb-3">
                        <span
                          className="text-primary me-2"
                          data-feather="watch"
                          style={{ strokeWidth: 3 }}
                        />
                        <h6 className="text-body-highlight mb-0 text-nowrap">
                          Fashion
                        </h6>
                      </div>
                      <div className="ms-n2">
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Women
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Men
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Jewelry &amp; Watches
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Shoes
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex align-items-center mb-3">
                        <span
                          className="text-primary me-2"
                          data-feather="music"
                          style={{ strokeWidth: 3 }}
                        />
                        <h6 className="text-body-highlight mb-0 text-nowrap">
                          Musical Instruments &amp; Gear
                        </h6>
                      </div>
                      <div className="ms-n2">
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Guitar
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Pro Audio Equipment
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          String
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Stage Lighting &amp; Effects
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="d-flex align-items-center mb-3">
                        <span
                          className="text-primary me-2"
                          data-feather="grid"
                          style={{ strokeWidth: 3 }}
                        />
                        <h6 className="text-body-highlight mb-0 text-nowrap">
                          Other Categories
                        </h6>
                      </div>
                      <div className="ms-n2">
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Video Games &amp; Consoles
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Health &amp; Beauty
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Baby
                        </a>
                        <a
                          className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                          href="#!"
                        >
                          Business &amp; Industrial
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center border-top border-translucent pt-3">
                    <a className="fw-bold" href="#!">
                      See all Categories
                      <span
                        className="fas fa-angle-right ms-1"
                        data-fa-transform="down-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="navbar-nav justify-content-end align-items-center">
            <li className="nav-item" data-nav-item="data-nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item" data-nav-item="data-nav-item">
              <NavLink className="nav-link" to="/cua-hang">
                Products
              </NavLink>
            </li>
            <li className="nav-item" data-nav-item="data-nav-item">
              <NavLink className="nav-link" to="/san-pham-yeu-thich">
                Wishlist
              </NavLink>
            </li>
            <li className="nav-item" data-nav-item="data-nav-item">
              <NavLink className="nav-link" to="/thong-tin-van-chuyen">
                Shipping Info
              </NavLink>
            </li>

            <li className="nav-item" data-nav-item="data-nav-item">
              <NavLink className="nav-link" to="/don-hang">
                Track order
              </NavLink>
            </li>
            <li className="nav-item" data-nav-item="data-nav-item">
              <NavLink className="nav-link" to="/thanh-toan">
                Checkout
              </NavLink>
            </li>
            <li className="nav-item" data-nav-item="data-nav-item">
              <NavLink className="nav-link" to="/hoa-don">
                Invoice
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderClient;
