import { Link } from "react-router-dom";

const SlidebarAdmin = () => {
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
                    className="nav-link label-1 active"
                    href="/admin"
                    role="button"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <span data-feather="pie-chart" />
                      </span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">Dashboard</span>
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                {/* label*/}
                <p className="navbar-vertical-label">Apps</p>
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
                        <span data-feather="shopping-cart" />
                      </span>
                      <span className="nav-link-text">E-commerce</span>
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
                          className="nav-link dropdown-indicator"
                          href="#nv-admin"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="nv-admin"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Products</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="nv-admin"
                          >
                            <li className="nav-item">
                              <Link className="nav-link" to="them-san-pham">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Add product
                                  </span>
                                </div>
                              </Link>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="danh-sach-san-pham"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    List Products
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
                          className="nav-link dropdown-indicator"
                          href="#category"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="category"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Category</span>
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
                              <Link className="nav-link" to="them-danh-muc">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Add category
                                  </span>
                                </div>
                              </Link>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="danh-sach-danh-muc"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    List category
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
                          className="nav-link dropdown-indicator"
                          href="#subcategory"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="category"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">SubCategory</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="subcategory"
                          >
                            <li className="nav-item">
                              <Link className="nav-link" to="them-danh-muc-con">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Add subcategory
                                  </span>
                                </div>
                              </Link>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="danh-sach-danh-muc-con"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    List subcategory
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
                          className="nav-link dropdown-indicator"
                          href="#variable"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="category"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Variables</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="variable"
                          >
                            <li className="nav-item">
                              <Link className="nav-link" to="them-danh-muc-con">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Add variable
                                  </span>
                                </div>
                              </Link>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="danh-sach-danh-muc-con"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    List variable
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
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
                    className="nav-link dropdown-indicator label-1"
                    href="#account"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="account"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <span className="fas fa-caret-right dropdown-indicator-icon" />
                      </div>
                      <span className="nav-link-icon">
                        <span data-feather="user" />
                      </span>
                      <span className="nav-link-text">Accounts</span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="account"
                    >
                      <li className="collapsed-nav-item-title d-none">
                        Accounts
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link dropdown-indicator"
                          href="#nv-admin"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="nv-admin"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">
                              Administrators
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="nv-admin"
                          >
                            <li className="nav-item">
                              <Link className="nav-link" to="them-san-pham">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Add admin
                                  </span>
                                </div>
                              </Link>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="danh-sach-quan-tri">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    List admin
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link dropdown-indicator"
                          href="#category"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="category"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Customer</span>
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
                                className="nav-link"
                                to="danh-sach-khach-hang"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    List customer
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
                  {/* parent pages*/}
                  <div className="nav-item-wrapper">
                    <a
                      className="nav-link label-1"
                      href="khuyen-mai"
                      role="button"
                      data-bs-toggle
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon">
                          <span data-feather="gift" />
                        </span>
                        <span className="nav-link-text">Deals</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  {/* parent pages*/}
                  <div className="nav-item-wrapper">
                    <a
                      className="nav-link label-1"
                      href="don-hang"
                      role="button"
                      data-bs-toggle
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-icon">
                          <span data-feather="package" />
                        </span>
                        <span className="nav-link-text">Orders</span>
                      </div>
                    </a>
                  </div>
                </li>

                {/* parent pages*/}
                <div className="nav-item-wrapper">
                  <a
                    className="nav-link label-1"
                    href="tin-nhan"
                    role="button"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <span data-feather="message-square" />
                      </span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">Chat</span>
                      </span>
                    </div>
                  </a>
                </div>
                {/* parent pages*/}
                <div className="nav-item-wrapper">
                  <a
                    className="nav-link dropdown-indicator label-1"
                    href="#nv-email"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-email"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <span className="fas fa-caret-right dropdown-indicator-icon" />
                      </div>
                      <span className="nav-link-icon">
                        <span data-feather="mail" />
                      </span>
                      <span className="nav-link-text">Email</span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="nv-email"
                    >
                      <li className="collapsed-nav-item-title d-none">Email</li>
                      <li className="nav-item">
                        <a className="nav-link" href="apps/email/inbox.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Inbox</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="apps/email/email-detail.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Email detail</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="apps/email/compose.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Compose</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* parent pages*/}
                <div className="nav-item-wrapper">
                  <a
                    className="nav-link dropdown-indicator label-1"
                    href="#nv-events"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-events"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <span className="fas fa-caret-right dropdown-indicator-icon" />
                      </div>
                      <span className="nav-link-icon">
                        <span data-feather="bookmark" />
                      </span>
                      <span className="nav-link-text">Events</span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="nv-events"
                    >
                      <li className="collapsed-nav-item-title d-none">
                        Events
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="apps/events/create-an-event.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Create an event
                            </span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="apps/events/event-detail.html"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Event detail</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                {/* label*/}
                <p className="navbar-vertical-label">Pages</p>
                <hr className="navbar-vertical-line" />
                {/* parent pages*/}
                <div className="nav-item-wrapper">
                  <a
                    className="nav-link label-1"
                    href="pages/notifications.html"
                    role="button"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <span data-feather="bell" />
                      </span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">Notifications</span>
                      </span>
                    </div>
                  </a>
                </div>

                {/* parent pages*/}
                <div className="nav-item-wrapper">
                  <a
                    className="nav-link dropdown-indicator label-1"
                    href="#nv-authentication"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-authentication"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <span className="fas fa-caret-right dropdown-indicator-icon" />
                      </div>
                      <span className="nav-link-icon">
                        <span data-feather="lock" />
                      </span>
                      <span className="nav-link-text">Authentication</span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="nv-authentication"
                    >
                      <li className="collapsed-nav-item-title d-none">
                        Authentication
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link dropdown-indicator"
                          href="#nv-simple"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="nv-simple"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Simple</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent"
                            data-bs-parent="#authentication"
                            id="nv-simple"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/simple/sign-in.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Sign in</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/simple/sign-up.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Sign up</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/simple/sign-out.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign out
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/simple/forgot-password.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Forgot password
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/simple/reset-password.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Reset password
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/simple/lock-screen.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Lock screen
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/simple/2FA.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">2FA</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link dropdown-indicator"
                          href="#nv-split"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="nv-split"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Split</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent"
                            data-bs-parent="#authentication"
                            id="nv-split"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/split/sign-in.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Sign in</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/split/sign-up.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Sign up</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/split/sign-out.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign out
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/split/forgot-password.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Forgot password
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/split/reset-password.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Reset password
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/split/lock-screen.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Lock screen
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/split/2FA.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">2FA</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link dropdown-indicator"
                          href="#nv-Card"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="nv-Card"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon-wrapper">
                              <span className="fas fa-caret-right dropdown-indicator-icon" />
                            </div>
                            <span className="nav-link-text">Card</span>
                          </div>
                        </a>
                        {/* more inner pages*/}
                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent"
                            data-bs-parent="#authentication"
                            id="nv-Card"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/card/sign-in.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Sign in</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/card/sign-up.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">Sign up</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/card/sign-out.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign out
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/card/forgot-password.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Forgot password
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/card/reset-password.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Reset password
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/card/lock-screen.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Lock screen
                                  </span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="pages/authentication/card/2FA.html"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">2FA</span>
                                </div>
                              </a>
                              {/* more inner pages*/}
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-vertical-footer">
          <button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center">
            <span className="uil uil-left-arrow-to-left fs-8" />
            <span className="uil uil-arrow-from-right fs-8" />
            <span className="navbar-vertical-footer-text ms-2">
              Collapsed View
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
export default SlidebarAdmin;
