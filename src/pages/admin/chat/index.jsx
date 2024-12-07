import team from "../../../assets/img/team/20.webp";
import chat from "../../../assets/img/chat/1.png";
import "../../../assets/vendors/glightbox/glightbox.min.css";
import "../../../assets/js/index.js";
import "../../../assets/vendors/popup-picker@5.7.6/dist/umd/index.js";
import "../../../assets/vendors/lottie/lottie.min.js";

const Chat = () => {
  return (
    <div className="content">
      <div className="chat d-flex phoenix-offcanvas-container pt-1 mt-n1 mb-9">
        <div
          className="card p-3 p-xl-1 mt-xl-n1 chat-sidebar me-3 phoenix-offcanvas phoenix-offcanvas-start"
          id="chat-sidebar"
        >
          <button
            className="btn d-none d-sm-block d-xl-none mb-2"
            data-bs-toggle="modal"
            data-bs-target="#chatSearchBoxModal"
          >
            <span className="fa-solid fa-magnifying-glass text-body-tertiary text-opacity-85 fs-7" />
          </button>
          <div className="d-none d-sm-block d-xl-none mb-5">
            <button
              className="btn w-100 mx-auto"
              type="button"
              data-bs-toggle="dropdown"
              data-boundary="window"
              aria-haspopup="true"
              aria-expanded="false"
              data-bs-reference="parent"
            >
              <span className="fa-solid fa-bars text-body-tertiary text-opacity-85 fs-7" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end p-0">
              <li>
                <a className="dropdown-item" href="#!">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Read
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Unread
                </a>
              </li>
            </ul>
          </div>
          <div className="form-icon-container mb-4 d-sm-none d-xl-block">
            <input
              className="form-control form-icon-input"
              type="text"
              placeholder="People, Groups and Messages"
            />
            <span className="fas fa-user text-body fs-9 form-icon" />
          </div>
          <ul
            className="nav nav-phoenix-pills mb-5 d-sm-none d-xl-flex"
            id="contactListTab"
            data-chat-thread-tab="data-chat-thread-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link cursor-pointer active"
                data-bs-toggle="tab"
                data-chat-thread-list="all"
                role="tab"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link cursor-pointer"
                data-bs-toggle="tab"
                role="tab"
                data-chat-thread-list="read"
                aria-selected="false"
              >
                Read
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link cursor-pointer"
                data-bs-toggle="tab"
                role="tab"
                data-chat-thread-list="unread"
                aria-selected="false"
              >
                Unread
              </a>
            </li>
          </ul>
          <div className="scrollbar">
            <div className="tab-content" id="contactListTabContent">
              <div data-chat-thread-tab-content="data-chat-thread-tab-content">
                <ul className="nav chat-thread-tab flex-column list">
                  <li className="nav-item read" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2  active"
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-1"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle"
                          src={team}
                          alt
                        />
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Sharuka Nijibum
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Just now
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            This is a message from you
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item read" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2  "
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-2"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle"
                          src={team}
                          alt
                        />
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Urito Nisemuno
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Yesterday, 11 PM
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            Say Hi to your new friend now
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item read" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2  "
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-3"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle"
                          src={team}
                          alt
                        />
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Xiang Ledepisipang
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Yesterday, 10 PM
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            We can also discuss prese....
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item unread" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2 unread "
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-4"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle"
                          src={team}
                          alt
                        />
                        <span
                          className="bg-primary rounded-circle top-0 end-0 position-absolute text-white d-flex flex-center fs-10 fw-semibold d-none d-sm-flex d-xl-none lh-1"
                          style={{ height: "1rem", width: "1rem" }}
                        >
                          3
                        </span>
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Abshini Thipano
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Yesterday, 10 PM
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            WHAT!
                          </p>
                          <span className="badge badge-phoenix badge-phoenix-primary px-1 unread-badge">
                            3+
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item read" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2  "
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-5"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle"
                          src={team}
                          alt
                        />
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Nenko Nimitanip
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Yesterday, 9 PM
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            Nenko sent an attachment
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item unread" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2 unread "
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-6"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle"
                          src={team}
                          alt
                        />
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Shanito Bistroglini
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Yesterday, 1 PM
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            https://youtu.be/dQw4w9WgXcQ
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item read" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2  "
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-7"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle avatar-placeholder"
                          src={team}
                          alt
                        />
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Misthoni Trepalnano
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Yesterday, 11 AM
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            You shared an album
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item read" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2  "
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-8"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle"
                          src={team}
                          alt
                        />
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Zogidi Lishang
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Yesterday, 10 AM
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            Reacted ❤️ to your photo
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item read" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2  "
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-9"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle"
                          src={team}
                          alt
                        />
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Nonteporano Lepat
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Yesterday, 10 AM
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            Thanks for understanding. I will forever be in debt
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item read" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2  "
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-10"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle"
                          src={team}
                          alt
                        />
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Jessica Ball
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Yesterday, 10 AM
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            Thanks for understanding. I will forever be in debt
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item read" role="presentation">
                    <a
                      className="nav-link d-flex align-items-center justify-content-center p-2  "
                      data-bs-toggle="tab"
                      data-chat-thread="data-chat-thread"
                      href="#tab-thread-11"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2">
                        <img
                          className="rounded-circle border border-2 border-light-subtle"
                          src={team}
                          alt
                        />
                      </div>
                      <div className="flex-1 d-sm-none d-xl-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-body fw-normal name text-nowrap">
                            Harley Brown
                          </h5>
                          <p className="fs-10 text-body-tertiary text-opacity-85 mb-0 text-nowrap">
                            Yesterday, 10 AM
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fs-9 mb-0 line-clamp-1 text-body-tertiary text-opacity-85 message">
                            Thanks for understanding. I will forever be in debt
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card tab-content flex-1 phoenix-offcanvas-container">
          <div
            className="tab-pane h-100 fade active show"
            id="tab-thread-1"
            role="tabpanel"
            aria-labelledby="tab-thread-1"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-0"
                    >
                      <span className="line-clamp-1">Sharuka Nijibum</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-0">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              I have got a date at a quarter to eight; I’ll see
                              you at the gate, so don’t be late.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">This is a message from you</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              You know New York, you need New York, you know you
                              need a unique New York.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">Willie’s really weary.</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">Eddie edited it.</p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2 w-min-content">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              Yes, in an organization stature
                            </p>
                            <a href={chat} data-gallery="gallery-undefined">
                              <img
                                className="rounded-2 object-fit-cover mt-1"
                                src={chat}
                                alt
                                style={{ maxWidth: 200 }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              If Peter Piper picked a peck of pickled peppers,
                              where’s the peck of pickled peppers Peter Piper
                              picked?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Peter Piper picked a peck of pickled peppers. A
                              peck of pickled peppers Peter Piper picked.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-0"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-0"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-0"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-0"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-0"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle"
                        src={team}
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Sharuka Nijibum</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane h-100 fade"
            id="tab-thread-2"
            role="tabpanel"
            aria-labelledby="tab-thread-2"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-1"
                    >
                      <span className="line-clamp-1">Urito Nisemuno</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-1">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              However, the shot Shott shot shot not Shott, but
                              Nott.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/29.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              But if the shot Shott shot shot Shott, then Shott
                              was shot, not Nott.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              If the shot Shott shot shot Nott, Nott was shot.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/29.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              But Shott says he shot Nott. Either the shot Shott
                              shot at Nott was not shot, Or Nott was shot.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              Some say Nott was not shot. But Shott says he shot
                              Nott.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content gallery"
                            data-bs-theme="light"
                          >
                            <p className="mb-0" />
                            <div className="row g-2 mt-0">
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/13.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/13.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/2.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/2.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/3.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/3.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/4.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/4.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/5.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/5.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/6.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/6.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/7.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/7.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/8.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/8.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/9.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/9.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/10.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/10.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/11.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/11.png"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="col-6 col-md-4 ol-xl-2 col-xl-3">
                                <a
                                  href="../assets/img/chat/12.png"
                                  data-gallery="gallery-undefined"
                                >
                                  {""}
                                  <img
                                    className="rounded-2 object-fit-cover img-fluid"
                                    src="../assets/img/chat/12.png"
                                    alt
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/29.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Ned Nott was shot and Sam Shott was not. So it is
                              better to be Shott than Nott.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-1"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-1"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-1"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-1"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-1"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle"
                        src="../assets/img/team/29.webp"
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Urito Nisemuno</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane h-100 fade"
            id="tab-thread-3"
            role="tabpanel"
            aria-labelledby="tab-thread-3"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-2"
                    >
                      <span className="line-clamp-1">Xiang Ledepisipang</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-2">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/30.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              A tree-toad loved a she-toad who lived up in a
                              tree. He was a two-toed tree-toad, but a
                              three-toed toad was she. The two-toed tree-toad
                              tried to win the three-toed she-toad’s heart, for
                              the two-toed tree-toad loved the ground that the
                              three-toed tree-toad trod. But the two-toed
                              tree-toad tried in vain; he couldn’t please her
                              whim. From her tree-toad bower, with her
                              three-toed power, the she-toad vetoed him.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-2"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-2"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-2"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-2"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-2"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle"
                        src="../assets/img/team/30.webp"
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Xiang Ledepisipang</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane h-100 fade"
            id="tab-thread-4"
            role="tabpanel"
            aria-labelledby="tab-thread-4"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-3"
                    >
                      <span className="line-clamp-1">Abshini Thipano</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-3">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">An anchor, right?</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/25.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              A cold. But what do you throw out when you want to
                              use it but take in when you don’t want to use it?
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              Well tell me what I am if I can never be thrown
                              but I can be caught. Ways to lose me are always
                              being sought.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">A coin, or what?</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/25.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              A river. But I have a head and a tail that will
                              never meet. Having too many of me is always a
                              treat. What am I?
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/25.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              What runs, but never walks. Murmurs, but never
                              talks. Has a bed, but never sleeps. And has a
                              mouth, but never eats?
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/25.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Hello, I’m Doctor Triple A! How can I help?
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-3"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-3"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-3"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-3"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-3"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle"
                        src="../assets/img/team/25.webp"
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Abshini Thipano</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane h-100 fade"
            id="tab-thread-5"
            role="tabpanel"
            aria-labelledby="tab-thread-5"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-4"
                    >
                      <span className="line-clamp-1">Nenko Nimitanip</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-4">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              When a doctor doctors a doctor, does the doctor
                              doing the doctoring doctor as the doctor being
                              doctored wants to be doctored or does the doctor
                              doing the doctoring doctor as he wants to doctor?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-4"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-4"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-4"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-4"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-4"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle"
                        src="../assets/img/team/15.webp"
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Nenko Nimitanip</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane h-100 fade"
            id="tab-thread-6"
            role="tabpanel"
            aria-labelledby="tab-thread-6"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-5"
                    >
                      <span className="line-clamp-1">Shanito Bistroglini</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-5">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/59.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Well… check the attached file for answer, man!
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              When a doctor doctors a doctor, does the doctor
                              doing the doctoring doctor as the doctor being
                              doctored wants to be doctored or does the doctor
                              doing the doctoring doctor as he wants to doctor?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-5"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-5"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-5"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-5"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-5"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle"
                        src="../assets/img/team/59.webp"
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Shanito Bistroglini</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane h-100 fade"
            id="tab-thread-7"
            role="tabpanel"
            aria-labelledby="tab-thread-7"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-6"
                    >
                      <span className="line-clamp-1">Misthoni Trepalnano</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-6">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle avatar-placeholder"
                            src="../assets/img/team/avatar.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              So See’s saw sawed Soar’s seesaw. But it was sad
                              to see Soar so sore just because See’s saw sawed
                              Soar’s seesaw.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              Had Soar seen See’s saw before See sawed Soar’s
                              seesaw, See’s saw would not have sawed Soar’s
                              seesaw.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle avatar-placeholder"
                            src="../assets/img/team/avatar.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Mr. See owned a saw. And Mr. Soar owned a seesaw.
                              Now, See’s saw sawed Soar’s seesaw before Soar saw
                              See, which made Soar sore.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-6"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-6"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-6"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-6"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-6"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle avatar-placeholder"
                        src="../assets/img/team/avatar.webp"
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Misthoni Trepalnano</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane h-100 fade"
            id="tab-thread-8"
            role="tabpanel"
            aria-labelledby="tab-thread-8"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-7"
                    >
                      <span className="line-clamp-1">Zogidi Lishang</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-7">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/1.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Brisk brave brigadiers brandished broad bright
                              blades, blunderbusses, and bludgeons—balancing
                              them badly.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              Ingenious iguanas improvising an intricate
                              impromptu on impossibly-impractical instruments.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              Green glass globes glow greenly.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/1.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              I slit the sheet, the sheet I slit, and on the
                              slitted sheet I sit.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              Perspicacious Polly Perkins purchased Peter’s
                              product and peddled pickles to produce a pretty
                              profit!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-7"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-7"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-7"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-7"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-7"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle"
                        src="../assets/img/team/1.webp"
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Zogidi Lishang</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane h-100 fade"
            id="tab-thread-9"
            role="tabpanel"
            aria-labelledby="tab-thread-9"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-8"
                    >
                      <span className="line-clamp-1">Nonteporano Lepat</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-8">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              The longest book title is made up of 3,777 words.
                              I don’t wanna write it down for you, go find it!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/6.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">Well…no?</p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              Well… I know a uniquely long title. Do you know
                              which has it?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/6.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Victor Hugo’s "Les Miserables" contains an 823
                              word sentence, and hopefully no one elese will
                              write longer to break the record.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              {""}I dunno! Guess ‘tis not easy to read and count
                              the words!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/6.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              which book do you remember to have the longest
                              possible sentence?{""}
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-8"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-8"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-8"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-8"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-8"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle"
                        src="../assets/img/team/6.webp"
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Nonteporano Lepat</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane h-100 fade"
            id="tab-thread-10"
            role="tabpanel"
            aria-labelledby="tab-thread-10"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-9"
                    >
                      <span className="line-clamp-1">Jessica Ball</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-9">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/60.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Cows kill more people than sharks!
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">Whaat?!</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/60.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Hard to believe, but true. Sharks kill an average
                              of 5 people per year while cows kill an average of
                              22 people per year.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              But in fact, humans are more deadly to sharks than
                              they are to humans. Humans kill about 100 million
                              sharks per year!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/60.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">Also, what?!</p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-9"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-9"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-9"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-9"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-9"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle"
                        src="../assets/img/team/60.webp"
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Jessica Ball</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane h-100 fade"
            id="tab-thread-11"
            role="tabpanel"
            aria-labelledby="tab-thread-11"
          >
            <div className="d-flex flex-column h-100">
              <div className="card-header p-3 p-md-4 d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <button
                    className="btn ps-0 pe-2 text-body-tertiary d-sm-none"
                    data-phoenix-toggle="offcanvas"
                    data-phoenix-target="#chat-sidebar"
                  >
                    <span className="fa-solid fa-chevron-left" />
                  </button>
                  <div className="d-flex flex-column flex-md-row align-items-md-center">
                    <button
                      className="btn fs-7 fw-semibold text-body-emphasis d-flex align-items-center p-0 me-3 text-start"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#thread-details-10"
                    >
                      <span className="line-clamp-1">Harley Brown</span>
                      <span className="fa-solid fa-chevron-down ms-2 fs-10" />
                    </button>
                    <p className="fs-9 mb-0 me-2">
                      {""}
                      <span className="fa-solid fa-circle text-success fs-11 me-2" />
                      Active now
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-phone" />
                  </button>
                  <button className="btn btn-icon btn-primary me-1">
                    <span className="fa-solid fa-video" />
                  </button>
                  <button
                    className="btn btn-icon btn-phoenix-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li>
                      <a className="dropdown-item" href="#!">
                        Add to favourites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        View profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Manage notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 p-sm-4 scrollbar chat-content-body-10">
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              OMG! I should leave my dietitian and ask for some
                              advice from the Sun God then!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/57.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              And the Sun loses a billion kilos per second.
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">
                              And know what I heard? Neptune has only completed
                              one orbit around the Sun since its discovery!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/57.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Oh yeah! It contains enough alcohol to supply
                              every person on the planet with 300,000 pints of
                              beer per day for the next billion years!
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 justify-content-end flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex flex-end-center hover-actions-trigger">
                        <div className="d-sm-none hover-actions align-self-center me-2 start-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-pen-to-square text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="chat-message-content me-2">
                          <div
                            className="mb-1 sent-message-content bg-primary rounded-2 p-3 text-white"
                            data-bs-theme="light"
                          >
                            <p className="mb-0">Really?! </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                          Yesterday, 10 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex chat-message">
                  <div className="d-flex mb-2 flex-1">
                    <div className="w-100 w-xxl-75">
                      <div className="d-flex hover-actions-trigger">
                        <div className="avatar avatar-m me-3 flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/57.webp"
                            alt
                          />
                        </div>
                        <div className="chat-message-content received me-2">
                          <div className="mb-1 received-message-content border rounded-2 p-3">
                            <p className="mb-0">
                              Clouds at the centre of the Milky Way smell of
                              rum, taste of raspberries and are packed with
                              booze!
                            </p>
                          </div>
                        </div>
                        <div className="d-none d-sm-flex">
                          <div className="hover-actions position-relative align-self-center me-2">
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-reply" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-trash" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-share" />
                            </button>
                            <button className="btn p-2 fs-10">
                              <span className="fa-solid fa-face-smile" />
                            </button>
                          </div>
                        </div>
                        <div className="d-sm-none hover-actions align-self-center me-2 end-0">
                          <div className="bg-body-emphasis rounded-pill d-flex align-items-center border px-2 actions">
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-reply text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-trash text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-share text-primary" />
                            </button>
                            <button className="btn p-2" type="button">
                              <span className="fa-solid fa-face-smile text-primary" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-7">
                        Yesterday, 10 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div
                  className="chat-textarea outline-none scrollbar mb-1"
                  contentEditable="true"
                />
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <button
                      className="btn btn-link py-0 ps-0 pe-2 text-body fs-9 btn-emoji"
                      data-picmo="data-picmo"
                    >
                      <span className="fa-regular fa-face-smile" />
                    </button>
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatPhotos-10"
                    >
                      <span className="fa-solid fa-image" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      accept="image/*"
                      id="chatPhotos-10"
                    />
                    <label
                      className="btn btn-link py-0 px-2 text-body fs-9"
                      htmlFor="chatAttachment-10"
                    >
                      {""}
                      <span className="fa-solid fa-paperclip" />
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      id="chatAttachment-10"
                    />
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-microphone" />
                    </button>
                    <button className="btn btn-link py-0 px-2 text-body fs-9">
                      <span className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-10" type="button">
                      Send
                      <span className="fa-solid fa-paper-plane ms-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas phoenix-offcanvas-top h-100 w-100 bg-body-emphasis scrollbar z-index-0 rounded"
                id="thread-details-10"
              >
                <div className="border-bottom border-translucent p-4">
                  <div className="d-flex flex-between-center">
                    <button
                      className="btn p-0"
                      data-phoenix-dismiss="offcanvas"
                    >
                      <span className="fa-solid fa-chevron-left text-body-tertiary" />
                    </button>
                    <button
                      className="btn p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-v text-body-tertiary" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="avatar avatar-4xl mb-2">
                      <img
                        className="rounded-circle border border-2 border-light-subtle"
                        src="../assets/img/team/57.webp"
                        alt
                      />
                    </div>
                    <h4 className="fw-semibold mb-3">Harley Brown</h4>
                    <div className="d-flex">
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-phone" />
                      </button>
                      <button className="btn btn-primary btn-icon fs-10 me-1">
                        <span className="fas fa-video" />
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10">
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 px-sm-5 scrollbar">
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-user-pen me-3" />
                    Nickname
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-palette me-3" />
                    Change Color
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-5">
                    <span className="fa-solid fa-user-plus me-3" />
                    Create Group Chat
                  </button>
                  <div className="d-flex mb-5">
                    <span className="fa-solid fa-photo-film me-3 fs-9" />
                    <div>
                      <h6 className="fw-semibold mb-2">Shared Media</h6>
                      <div className="row g-2">
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/3.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/3.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/4.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/4.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/5.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/5.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/6.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/6.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/7.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/7.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/8.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/8.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/9.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/9.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/10.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/10.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/11.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/11.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/12.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/12.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/13.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/13.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/14.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/14.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                        <div className="col-auto">
                          <a
                            href="../assets/img/chat/2.png"
                            data-gallery="gallery"
                          >
                            {""}
                            <img
                              className="object-fit-cover rounded-2 bg-body-secondary-hover"
                              src="../assets/img/chat/2.png"
                              alt
                              height={100}
                              width={100}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="d-flex">
                      <span className="fa-solid fa-folder me-3 fs-9" />
                      <div className="flex-1">
                        <h6 className="fw-semibold border-bottom border-translucent pb-2 mb-0">
                          Shared Files
                        </h6>
                        <div className="mb-2">
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-zipper" />
                                <p className="mb-0 fs-10 fw-bold lh-1">zip</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Federico_godarf_design.zip
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    53.34 MB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 8, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-code" />
                                <p className="mb-0 fs-10 fw-bold lh-1">bat</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Restart_lyf.bat
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-lines" />
                                <p className="mb-0 fs-10 fw-bold lh-1">txt</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Fake lorem ipsum fr fr.txt
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                          <div className="border-bottom border-translucent d-flex align-items-center justify-content-between">
                            <a
                              className="text-decoration-none d-flex align-items-center py-3"
                              href="#!"
                            >
                              <div className="btn-icon btn-icon-lg border rounded-3 text-body-quaternary flex-column me-2">
                                <span className="fs-8 mb-1 fa-solid fa-file-circle-exclamation" />
                                <p className="mb-0 fs-10 fw-bold lh-1">mad</p>
                              </div>
                              <div className="flex-1">
                                <h6 className="text-body line-clamp-1">
                                  Unsupported file format.mad
                                </h6>
                                <div className="d-flex align-items-center lh-1">
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    11.13 KB
                                  </p>
                                  <span
                                    className="fa-solid fa-circle text-body-quaternary fs-10"
                                    data-fa-transform="shrink-12"
                                  />
                                  <p className="fs-10 mb-0 text-body-tertiary fw-semibold">
                                    Dec 2, 2011
                                  </p>
                                </div>
                              </div>
                            </a>
                            <button className="btn p-0">
                              <span className="fa-regular fa-arrow-alt-circle-down fs-8 text-body-tertiary" />
                            </button>
                          </div>
                        </div>
                        <a className="btn btn-link fs-10 p-0" href="#!">
                          See 19 more{""}
                          <span className="fa-solid fa-chevron-down ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-bell-slash me-3" />
                    Mute Conversation
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-gear me-3" />
                    Manage Settings
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-hand-holding-heart me-3" />
                    Get help
                  </button>
                  <button className="btn d-block p-0 fw-semibold mb-3">
                    <span className="fa-solid fa-flag me-3" />
                    Report Account
                  </button>
                  <button className="btn d-block p-0 fw-semibold">
                    <span className="fa-solid fa-ban me-3" />
                    Block Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="phoenix-offcanvas-backdrop d-lg-none top-0"
          data-phoenix-backdrop="data-phoenix-backdrop"
        />
        <div
          className="modal fade"
          id="chatSearchBoxModal"
          tabIndex={-1}
          aria-hidden="true"
          data-bs-backdrop="true"
          data-phoenix-modal="data-phoenix-modal"
          style={{ phoenixBackdropOpacity: 1 }}
        >
          <div className="modal-dialog">
            <div className="modal-content mt-15">
              <div className="modal-body p-0">
                <div className="chat-search-box">
                  <div className="form-icon-container">
                    <input
                      className="form-control py-3 form-icon-input rounded-1"
                      type="text"
                      autofocus="autofocus"
                      placeholder="Search People, Groups and Messages"
                    />
                    <span className="fa-solid fa-magnifying-glass fs-9 form-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer position-absolute">
        <div className="row g-0 justify-content-between align-items-center h-100">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 mt-2 mt-sm-0 text-body">
              Thank you for creating with Phoenix
              <span className="d-none d-sm-inline-block" />
              <span className="d-none d-sm-inline-block mx-1">|</span>
              <br className="d-sm-none" />
              2024 ©
              <a className="mx-1" href="https://themewagon.com/">
                Themewagon
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-body-tertiary text-opacity-85">v1.18.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Chat;
