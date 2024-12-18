import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink từ react-router-dom
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import logo from "../../../../assets/img/icons/logo1.png";
import team from "../../../../assets/img/team/40x40/30.webp";
import team1 from "../../../../assets/img/team/40x40/avatar.webp";
import team2 from "../../../../assets/img/team/40x40/57.webp";
import team3 from "../../../../assets/img/team/40x40/59.webp";
import team4 from "../../../../assets/img/team/40x40/58.webp";

import defaultAvatar from "../../../../assets/img/team/image-default.png";
const HeaderClient = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Kiểm tra thông tin người dùng trong sessionStorage khi component mount
  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      const user = JSON.parse(storedUserInfo);
      setUserInfo(user);
      setLoggedIn(true);
      console.log("Thông tin người dùng từ sessionStorage:", user);
    }
  }, []); // Chỉ chạy khi component mount

  // Lấy danh mục từ API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/danh-muc/getAll')
      .then(response => {
        setCategories(response.data); // Cập nhật danh mục
      })
      .catch(error => {
        console.error('Error fetching categories:', error); // Xử lý lỗi nếu có
      });
  }, []);
  console.log(categories);


  // Xử lý đăng xuất
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
        // Xóa thông tin người dùng khỏi sessionStorage và localStorage
        sessionStorage.removeItem("userInfo");
        localStorage.removeItem("userToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("userInfo");

        // Cập nhật trạng thái đăng xuất
        setLoggedIn(false);
        setUserInfo(null);

        // Hiển thị thông báo thành công
        toast.success("Đăng xuất thành công!");

        // Điều hướng lại trang chủ sau 100ms để đảm bảo trạng thái đã được cập nhật
        setTimeout(() => {
          navigate("/"); // Thay đổi đường dẫn nếu cần
        }, 100);
      }
    });
  };
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
                        className="feather feather-bell text-body-tertiary"
                        style={{ height: 20, width: 20 }}
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </a>

                    <div>
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
                                        <span className="fw-bold">
                                          10:41 AM{" "}
                                        </span>
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
                                        <span className="fw-bold">
                                          10:20 AM{" "}
                                        </span>
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
                                        <span className="fw-bold">
                                          9:30 AM{" "}
                                        </span>
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
                                        <span className="fw-bold">
                                          9:11 AM{" "}
                                        </span>
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
                                        <span className="fw-bold">
                                          10:58 PM{" "}
                                        </span>
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
                                        <span className="fw-bold">
                                          10:18 AM{" "}
                                        </span>
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
                        className="feather feather-user text-body-tertiary"
                        style={{ height: 20, width: 20 }}
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </a>
                    <div>
                      {loggedIn ? (
                        <div
                          className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border mt-2"
                          aria-labelledby="navbarDropdownUser"
                        >
                          <div className="card position-relative border-0">
                            <div className="card-body p-0">
                              <div className="text-center pt-4 pb-3">
                                <div className="avatar avatar-xl ">
                                  <img
                                    className="rounded-circle"
                                    src={userInfo?.hinh_anh || defaultAvatar} // Sử dụng ảnh mặc định nếu không có hình ảnh
                                    alt="User Avatar"
                                  />
                                </div>
                                <h6 className="mt-2 text-body-emphasis">
                                  {userInfo?.ten_nguoi_dung ||
                                    "Chưa cập nhật tên"}
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
                                    <span>Profile</span>
                                  </a>
                                </li>

                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
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
                                      className="feather feather-lock me-2 text-body align-bottom"
                                    >
                                      <rect
                                        x={3}
                                        y={11}
                                        width={18}
                                        height={11}
                                        rx={2}
                                        ry={2}
                                      />
                                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    Posts &amp; Activity
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
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
                                    Settings &amp; Privacy{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
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
                                      <line
                                        x1={12}
                                        y1={17}
                                        x2="12.01"
                                        y2={17}
                                      />
                                    </svg>
                                    Help Center
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
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
                                    Language
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="card-footer p-0 border-top border-translucent">
                              <ul className="nav d-flex flex-column my-3">
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
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
                                      className="feather feather-user-plus me-2 text-body align-bottom"
                                    >
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                      <circle cx="8.5" cy={7} r={4} />
                                      <line x1={20} y1={8} x2={20} y2={14} />
                                      <line x1={23} y1={11} x2={17} y2={11} />
                                    </svg>
                                    Add another account
                                  </a>
                                </li>
                              </ul>
                              <hr />
                              <div className="px-3">
                                {" "}
                                <a
                                  className="btn btn-phoenix-secondary d-flex flex-center w-100"
                                  href="#"
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
                                  Sign out
                                </a>
                              </div>
                              <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
                                <a
                                  className="text-body-quaternary me-1"
                                  href="#!"
                                >
                                  Privacy policy
                                </a>
                                •
                                <a
                                  className="text-body-quaternary mx-1"
                                  href="#!"
                                >
                                  Terms
                                </a>
                                •
                                <a
                                  className="text-body-quaternary ms-1"
                                  href="#!"
                                >
                                  Cookies
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile-1 shadow border mt-2"
                          aria-labelledby="navbarDropdownUser"
                        >
                          <div className="card position-relative border-0">
                            <div className="overflow-auto scrollbar">
                              <ul className="nav d-flex flex-column">
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="dang-ky"
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="bi bi-person-add"
                                    >
                                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                      <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                    </svg>
                                    <span>Đăng ký</span>
                                  </a>
                                </li>

                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="dang-nhap"
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="bi bi-person-add"
                                    >
                                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                      <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                    </svg>
                                    Đăng nhập
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
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
              Danh mục
            </button>
            <div className="dropdown-menu border border-translucent py-0 category-dropdown-menu">
              <div className="card border-0 scrollbar" style={{ maxHeight: 657 }}>
                <div className="card-body p-6 pb-3">
                  <div className="row gx-7 gy-5 mb-5">
                    {categories?.map((category, index) => (
                      <div key={index} className="col-12 col-sm-6 col-md-4">
                        <div className="d-flex align-items-center mb-3">
                          <span className="text-primary me-2" data-feather="pocket" style={{ strokeWidth: 3 }} />
                          <h6 className="text-body-highlight mb-0 text-nowrap">
                            {category.ten_danh_muc} {/* Hiển thị tên danh mục chính */}
                          </h6>
                        </div>
                        <div className="ms-n2">
                          {/* Render danh mục con nếu có */}
                          {category.danh_muc_cons?.map((item, idx) => (
                            <a
                              key={idx}
                              className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                              href="#!"
                            >
                              {item.ten_danh_muc_con} {/* Hiển thị tên danh mục con */}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
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
            {/* <li className="nav-item" data-nav-item="data-nav-item">
              <NavLink className="nav-link" to="/san-pham-yeu-thich">
                Wishlist
              </NavLink>
            </li> */}
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
            {/* <li className="nav-item" data-nav-item="data-nav-item">
              <NavLink className="nav-link" to="/thanh-toan">
                Checkout
              </NavLink>
            </li> */}
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
