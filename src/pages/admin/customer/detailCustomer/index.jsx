import team from "../../../../assets/img/team/33.webp";
const DetailCustomer = () => {
  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#!">Page 1</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#!">Page 2</a>
          </li>
          <li className="breadcrumb-item active">Default</li>
        </ol>
      </nav>
      <div className="pb-9">
        <div className="row">
          <div className="col-12">
            <div className="row align-items-center justify-content-between g-3 mb-3">
              <div className="col-12 col-md-auto">
                <h2 className="mb-0">Lead details</h2>
              </div>
              <div className="col-12 col-md-auto">
                <div className="d-flex">
                  <div className="flex-1 d-md-none">
                    <button
                      className="btn px-3 btn-phoenix-secondary text-body-tertiary me-2"
                      data-phoenix-toggle="offcanvas"
                      data-phoenix-target="#productFilterColumn"
                    >
                      <span className="fa-solid fa-bars" />
                    </button>
                  </div>
                  <button className="btn btn-primary me-2">
                    <span className="fa-solid fa-envelope me-2" />
                    <span>Send an email</span>
                  </button>
                  <button className="btn btn-phoenix-secondary px-3 px-sm-5 me-2">
                    <span className="fa-solid fa-thumbtack me-sm-2" />
                    <span className="d-none d-sm-inline">Shortlist</span>
                  </button>
                  <button
                    className="btn px-3 btn-phoenix-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-ellipsis" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end p-0"
                    style={{ zIndex: 9999 }}
                  >
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
                    <li>
                      <a className="dropdown-item text-danger" href="#!">
                        Delete Lead
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 g-md-4 g-xl-6">
          <div className="col-md-5 col-lg-5 col-xl-4">
            <div className="sticky-leads-sidebar">
              <div
                className="lead-details-offcanvas bg-body scrollbar phoenix-offcanvas phoenix-offcanvas-fixed"
                id="productFilterColumn"
              >
                <div className="d-flex justify-content-between align-items-center mb-2 d-md-none">
                  <h3 className="mb-0">Lead Details</h3>
                  <button className="btn p-0" data-phoenix-dismiss="offcanvas">
                    <span className="uil uil-times fs-7" />
                  </button>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row align-items-center g-3 text-center text-xxl-start">
                      <div className="col-12 col-xxl-auto">
                        <div className="avatar avatar-5xl">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                      </div>
                      <div className="col-12 col-sm-auto flex-1">
                        <h3 className="fw-bolder mb-2">Ansolo Lazinatov</h3>
                        <p className="mb-0">Chief tech officer,</p>
                        <a className="fw-bold" href="#!">
                          Blue Beetles
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-5">
                      <h3>About lead</h3>
                      <button className="btn btn-link px-3" type="button">
                        Edit
                      </button>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-envelope-alt"> </span>
                        <h5 className="text-body-highlight mb-0">Email</h5>
                      </div>
                      <a href="mailto:shatinon@jeemail.com:">
                        ansolo5@jeemail.com
                      </a>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-phone"> </span>
                        <h5 className="text-body-highlight mb-0">Phone</h5>
                      </div>
                      <a href="tel:+1234567890">+1234567890 </a>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-globe" />
                        <h5 className="text-body-highlight mb-0">Website</h5>
                      </div>
                      <a href="#!">www.bb.ru.com </a>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-building" />
                        <h5 className="text-body-highlight mb-0">Industry</h5>
                      </div>
                      <p className="mb-0 text-body-secondary">
                        Large Enterprise
                      </p>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-postcard" />
                        <h5 className="text-body-highlight mb-0">
                          Number of employees
                        </h5>
                      </div>
                      <p className="mb-0 text-body-secondary">126</p>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-dollar-alt" />
                        <h5 className="text-body-highlight mb-0">
                          Annual Revenue
                        </h5>
                      </div>
                      <p className="mb-0 text-body-secondary">$12000 </p>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-clock" />
                        <h5 className="text-body-highlight mb-0">
                          Last contacted
                        </h5>
                      </div>
                      <p className="mb-0 text-body-secondary">
                        12 November 2021, 10:54 AM
                      </p>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-file-check-alt" />
                        <h5 className="text-body-highlight mb-0">
                          Lead source
                        </h5>
                      </div>
                      <p className="mb-0 text-body-secondary">Advertisement</p>
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-check-circle" />
                        <h5 className="text-body-highlight mb-0">
                          Lead status
                        </h5>
                      </div>
                      <span className="badge badge-phoenix badge-phoenix-primary">
                        New Lead
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-5">
                      <h3>Address</h3>
                      <button className="btn btn-link" type="button">
                        Edit
                      </button>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-estate" />
                        <h5 className="mb-0">Street</h5>
                      </div>
                      <p className="mb-0 text-body-secondary">
                        38/2 Penelope street
                      </p>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-map-pin-alt" />
                        <h5 className="mb-0 text-body-highlight">Zip code</h5>
                      </div>
                      <p className="mb-0 text-body-secondary">1425</p>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-map" />
                        <h5 className="mb-0 text-body-highlight">City</h5>
                      </div>
                      <p className="mb-0 text-body-secondary">Qualimando</p>
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2 uil uil-windsock" />
                        <h5 className="mb-0 text-body-highlight">Country</h5>
                      </div>
                      <p className="mb-0 text-body-secondary">
                        United Empire of Brekania
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="phoenix-offcanvas-backdrop d-lg-none top-0"
                data-phoenix-backdrop="data-phoenix-backdrop"
              />
            </div>
          </div>
          <div className="col-md-7 col-lg-7 col-xl-8">
            <div className="lead-details-container">
              <nav
                className="navbar pb-4 px-0 sticky-top bg-body nav-underline-scrollspy"
                id="navbar-deals-detail"
              >
                <ul className="nav nav-underline fs-9">
                  <li className="nav-item">
                    <a className="nav-link me-2" href="#scrollspyTask">
                      Tasks
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-2" href="#scrollspyDeals">
                      Deals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-2" href="#scrollspyEmails">
                      Emails
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#scrollspyAttachments">
                      Attachments{""}
                    </a>
                  </li>
                </ul>
              </nav>
              <div
                className="scrollspy-example rounded-2"
                data-bs-spy="scroll"
                data-bs-offset={0}
                data-bs-target="#navbar-deals-detail"
                data-bs-root-margin="0px 0px -40%"
                data-bs-smooth-scroll="true"
                tabIndex={0}
              >
                <div className="mb-8">
                  <h2 className="mb-4" id="scrollspyTask">
                    Tasks
                  </h2>
                  <div className="row align-items-center g-0 justify-content-start mb-3">
                    <div className="col-12 col-sm-auto">
                      <div
                        className="search-box w-100 mb-2 mb-sm-0"
                        style={{ maxWidth: "30rem" }}
                      >
                        <form className="position-relative">
                          <input
                            className="form-control search-input search"
                            type="search"
                            placeholder="Search tasks"
                            aria-label="Search"
                          />
                          <span className="fas fa-search search-box-icon" />
                        </form>
                      </div>
                    </div>
                    <div className="col-auto d-flex">
                      <p className="mb-0 ms-sm-3 fs-9 text-body-tertiary fw-bold">
                        <span className="fas fa-filter me-1 fw-extra-bold fs-10" />
                        23 tasks
                      </p>
                      <button className="btn btn-link p-0 ms-3 fs-9 text-primary fw-bold">
                        <span className="fas fa-sort me-1 fw-extra-bold fs-10" />
                        Sorting
                      </button>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                    <div className="col-12 col-lg-auto flex-1">
                      <div
                        data-todo-offcanvas-toogle="data-todo-offcanvas-toogle"
                        data-todo-offcanvas-target="todoOffcanvas-1"
                      >
                        <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <input
                            className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined"
                            type="checkbox"
                            id="checkbox-todo-0"
                          />
                          <label
                            className="form-check-label mb-0 fs-8 me-2 line-clamp-1"
                            htmlFor="checkbox-todo-0"
                          >
                            Platforms for data administration
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-auto">
                      <div className="d-flex ms-4 lh-1 align-items-center">
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
                          19 Nov, 2022
                        </p>
                        <div
                          className="d-none d-lg-block end-0 position-absolute"
                          style={{ top: "23%" }}
                        >
                          <div className="hover-actions end-0">
                            <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                              <span className="fas fa-edit" />
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                              <span className="fas fa-trash" />
                            </button>
                          </div>
                        </div>
                        <div className="hover-lg-hide">
                          <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
                            11:56 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                    <div className="col-12 col-lg-auto flex-1">
                      <div
                        data-todo-offcanvas-toogle="data-todo-offcanvas-toogle"
                        data-todo-offcanvas-target="todoOffcanvas-2"
                      >
                        <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <input
                            className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined"
                            type="checkbox"
                            id="checkbox-todo-1"
                          />
                          <label
                            className="form-check-label mb-0 fs-8 me-2 line-clamp-1"
                            htmlFor="checkbox-todo-1"
                          >
                            Make wiser business choices.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-auto">
                      <div className="d-flex ms-4 lh-1 align-items-center">
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
                          05 Nov, 2022
                        </p>
                        <div
                          className="d-none d-lg-block end-0 position-absolute"
                          style={{ top: "23%" }}
                        >
                          <div className="hover-actions end-0">
                            <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                              <span className="fas fa-edit" />
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                              <span className="fas fa-trash" />
                            </button>
                          </div>
                        </div>
                        <div className="hover-lg-hide">
                          <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
                            09:30 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                    <div className="col-12 col-lg-auto flex-1">
                      <div
                        data-todo-offcanvas-toogle="data-todo-offcanvas-toogle"
                        data-todo-offcanvas-target="todoOffcanvas-3"
                      >
                        <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <input
                            className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined"
                            type="checkbox"
                            id="checkbox-todo-2"
                          />
                          <label
                            className="form-check-label mb-0 fs-8 me-2 line-clamp-1"
                            htmlFor="checkbox-todo-2"
                          >
                            Market and consumer insights
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-auto">
                      <div className="d-flex ms-4 lh-1 align-items-center">
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
                          02 Nov, 2022
                        </p>
                        <div
                          className="d-none d-lg-block end-0 position-absolute"
                          style={{ top: "23%" }}
                        >
                          <div className="hover-actions end-0">
                            <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                              <span className="fas fa-edit" />
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                              <span className="fas fa-trash" />
                            </button>
                          </div>
                        </div>
                        <div className="hover-lg-hide">
                          <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
                            05:25 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                    <div className="col-12 col-lg-auto flex-1">
                      <div
                        data-todo-offcanvas-toogle="data-todo-offcanvas-toogle"
                        data-todo-offcanvas-target="todoOffcanvas-4"
                      >
                        <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <input
                            className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined"
                            type="checkbox"
                            id="checkbox-todo-3"
                          />
                          <label
                            className="form-check-label mb-0 fs-8 me-2 line-clamp-1"
                            htmlFor="checkbox-todo-3"
                          >
                            Dashboards for business insights
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-auto">
                      <div className="d-flex ms-4 lh-1 align-items-center">
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
                          29 Oct, 2022
                        </p>
                        <div
                          className="d-none d-lg-block end-0 position-absolute"
                          style={{ top: "23%" }}
                        >
                          <div className="hover-actions end-0">
                            <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                              <span className="fas fa-edit" />
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                              <span className="fas fa-trash" />
                            </button>
                          </div>
                        </div>
                        <div className="hover-lg-hide">
                          <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
                            08:21 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                    <div className="col-12 col-lg-auto flex-1">
                      <div
                        data-todo-offcanvas-toogle="data-todo-offcanvas-toogle"
                        data-todo-offcanvas-target="todoOffcanvas-5"
                      >
                        <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <input
                            className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined"
                            type="checkbox"
                            id="checkbox-todo-4"
                            defaultChecked="checked"
                          />
                          <label
                            className="form-check-label mb-0 fs-8 me-2 line-clamp-1"
                            htmlFor="checkbox-todo-4"
                          >
                            Analytics and consultancy for data
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-auto">
                      <div className="d-flex ms-4 lh-1 align-items-center">
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
                          21 Oct, 2022
                        </p>
                        <div
                          className="d-none d-lg-block end-0 position-absolute"
                          style={{ top: "23%" }}
                        >
                          <div className="hover-actions end-0">
                            <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                              <span className="fas fa-edit" />
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                              <span className="fas fa-trash" />
                            </button>
                          </div>
                        </div>
                        <div className="hover-lg-hide">
                          <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
                            03:45 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                    <div className="col-12 col-lg-auto flex-1">
                      <div
                        data-todo-offcanvas-toogle="data-todo-offcanvas-toogle"
                        data-todo-offcanvas-target="todoOffcanvas-6"
                      >
                        <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <input
                            className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined"
                            type="checkbox"
                            id="checkbox-todo-5"
                            defaultChecked="checked"
                          />
                          <label
                            className="form-check-label mb-0 fs-8 me-2 line-clamp-1"
                            htmlFor="checkbox-todo-5"
                          >
                            Planning your locations Customer data platform
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-auto">
                      <div className="d-flex ms-4 lh-1 align-items-center">
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
                          14 Oct, 2022
                        </p>
                        <div
                          className="d-none d-lg-block end-0 position-absolute"
                          style={{ top: "23%" }}
                        >
                          <div className="hover-actions end-0">
                            <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                              <span className="fas fa-edit" />
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                              <span className="fas fa-trash" />
                            </button>
                          </div>
                        </div>
                        <div className="hover-lg-hide">
                          <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
                            10:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                    <div className="col-12 col-lg-auto flex-1">
                      <div
                        data-todo-offcanvas-toogle="data-todo-offcanvas-toogle"
                        data-todo-offcanvas-target="todoOffcanvas-7"
                      >
                        <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                          <input
                            className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined"
                            type="checkbox"
                            id="checkbox-todo-6"
                            defaultChecked="checked"
                          />
                          <label
                            className="form-check-label mb-0 fs-8 me-2 line-clamp-1"
                            htmlFor="checkbox-todo-6"
                          >
                            Promotion of technology
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-auto">
                      <div className="d-flex ms-4 lh-1 align-items-center">
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
                          12 Oct, 2022
                        </p>
                        <div
                          className="d-none d-lg-block end-0 position-absolute"
                          style={{ top: "23%" }}
                        >
                          <div className="hover-actions end-0">
                            <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                              <span className="fas fa-edit" />
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                              <span className="fas fa-trash" />
                            </button>
                          </div>
                        </div>
                        <div className="hover-lg-hide">
                          <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
                            02:00 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="fw-bold fs-9 mt-4" href="#!">
                    <span className="fas fa-plus me-1" />
                    Add new task
                  </a>
                </div>
                <div className="mb-8">
                  <div
                    className="d-flex justify-content-between align-items-center mb-4"
                    id="scrollspyDeals"
                  >
                    <h2 className="mb-0">Deals</h2>
                    <button className="btn btn-primary btn-sm">
                      <span className="fa-solid fa-plus me-2" />
                      Add Deals
                    </button>
                  </div>
                  <div
                    className="border-top border-bottom border-translucent"
                    id="leadDetailsTable"
                    data-list='{"valueNames":["dealName","amount","stage","probability","date","type"],"page":5,"pagination":true}'
                  >
                    <div className="table-responsive scrollbar mx-n1 px-1">
                      <table className="table fs-9 mb-0">
                        <thead>
                          <tr>
                            <th
                              className="white-space-nowrap fs-9 align-middle ps-0"
                              style={{ width: 26 }}
                            >
                              <div className="form-check mb-0 fs-8">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  data-bulk-select='{"body":"lead-details-table-body"}'
                                />
                              </div>
                            </th>
                            <th
                              className="sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase"
                              scope="col"
                              data-sort="dealName"
                              style={{ width: "15%", minWidth: 200 }}
                            >
                              Deal name
                            </th>
                            <th
                              className="sort align-middle pe-6 text-uppercase text-end"
                              scope="col"
                              data-sort="amount"
                              style={{ width: "15%", minWidth: 100 }}
                            >
                              Amount
                            </th>
                            <th
                              className="sort align-middle text-start text-uppercase"
                              scope="col"
                              data-sort="stage"
                              style={{ width: "20%", minWidth: 200 }}
                            >
                              Stage
                            </th>
                            <th
                              className="sort align-middle text-start text-uppercase"
                              scope="col"
                              data-sort="probability"
                              style={{ width: "20%", minWidth: 100 }}
                            >
                              Probability
                            </th>
                            <th
                              className="sort align-middle ps-0 text-end text-uppercase"
                              scope="col"
                              data-sort="date"
                              style={{ width: "15%", minWidth: 120 }}
                            >
                              Closing Date
                            </th>
                            <th
                              className="sort align-middle text-end text-uppercase"
                              scope="col"
                              data-sort="type"
                              style={{ width: "15%", minWidth: 140 }}
                            >
                              Type
                            </th>
                            <th
                              className="align-middle pe-0 text-end"
                              scope="col"
                              style={{ width: "15%" }}
                            >
                              {""}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list" id="lead-details-table-body">
                          <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                            <td className="fs-9 align-middle px-0 py-3">
                              <div className="form-check mb-0 fs-8">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  data-bulk-select-row='{"dealName":"Mocking Bird","active":true,"amount":"$6,800,000","stage_status":{"label":"won deal","type":"badge-phoenix-success"},"progress":{"min":"67","max":"145","color":"bg-info"},"date":"Dec 29, 2021","type_status":{"label":"warm","type":"badge-phoenix-info"}}'
                                />
                              </div>
                            </td>
                            <td className="dealName align-middle white-space-nowrap py-2 ps-0">
                              <a className="fw-semibold text-primary" href="#!">
                                Mocking Bird
                              </a>
                            </td>
                            <td className="amount align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 text-end pe-6">
                              $6,800,000
                            </td>
                            <td className="stage align-middle white-space-nowrap text-body py-2">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                                won deal
                              </span>
                            </td>
                            <td className="probability align-middle white-space-nowrap">
                              <p className="text-body-secondary fs-10 mb-0">
                                67%
                              </p>
                              <div
                                className="progress bg-primary-subtle"
                                style={{ height: 3 }}
                                role="progressbar"
                              >
                                <div
                                  className="progress-bar bg-info"
                                  style={{ width: "46.206896551724135%" }}
                                  role="progressbar"
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="date align-middle text-body-tertiary text-center py-2">
                              Dec 29, 2021
                            </td>
                            <td className="type align-middle fw-semibold py-2 text-end">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                                warm
                              </span>
                            </td>
                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                              <div className="btn-reveal-trigger position-static">
                                <button
                                  className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  data-boundary="window"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-bs-reference="parent"
                                >
                                  <span className="fas fa-ellipsis-h fs-10" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a className="dropdown-item" href="#!">
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#!">
                                    Export
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                            <td className="fs-9 align-middle px-0 py-3">
                              <div className="form-check mb-0 fs-8">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  data-bulk-select-row='{"dealName":"Airbender","active":true,"amount":"$89,090,000","stage_status":{"label":"new Deal","type":"badge-phoenix-primary"},"progress":{"min":"34","max":"145","color":"bg-warning"},"date":"Mar 27, 2021","type_status":{"label":"hot","type":"badge-phoenix-danger"}}'
                                />
                              </div>
                            </td>
                            <td className="dealName align-middle white-space-nowrap py-2 ps-0">
                              <a className="fw-semibold text-primary" href="#!">
                                Airbender
                              </a>
                            </td>
                            <td className="amount align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 text-end pe-6">
                              $89,090,000
                            </td>
                            <td className="stage align-middle white-space-nowrap text-body py-2">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
                                new Deal
                              </span>
                            </td>
                            <td className="probability align-middle white-space-nowrap">
                              <p className="text-body-secondary fs-10 mb-0">
                                34%
                              </p>
                              <div
                                className="progress bg-primary-subtle"
                                style={{ height: 3 }}
                                role="progressbar"
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "23.448275862068964%" }}
                                  role="progressbar"
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="date align-middle text-body-tertiary text-center py-2">
                              Mar 27, 2021
                            </td>
                            <td className="type align-middle fw-semibold py-2 text-end">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                                hot
                              </span>
                            </td>
                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                              <div className="btn-reveal-trigger position-static">
                                <button
                                  className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  data-boundary="window"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-bs-reference="parent"
                                >
                                  <span className="fas fa-ellipsis-h fs-10" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a className="dropdown-item" href="#!">
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#!">
                                    Export
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                            <td className="fs-9 align-middle px-0 py-3">
                              <div className="form-check mb-0 fs-8">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  data-bulk-select-row='{"dealName":"Showmen","active":true,"amount":"$78,650,000","stage_status":{"label":"Canceled","type":"badge-phoenix-secondary"},"progress":{"min":"89","max":"145","color":"bg-success"},"date":"Jun 24, 2021","type_status":{"label":"cold","type":"badge-phoenix-warning"}}'
                                />
                              </div>
                            </td>
                            <td className="dealName align-middle white-space-nowrap py-2 ps-0">
                              <a className="fw-semibold text-primary" href="#!">
                                Showmen
                              </a>
                            </td>
                            <td className="amount align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 text-end pe-6">
                              $78,650,000
                            </td>
                            <td className="stage align-middle white-space-nowrap text-body py-2">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                                Canceled
                              </span>
                            </td>
                            <td className="probability align-middle white-space-nowrap">
                              <p className="text-body-secondary fs-10 mb-0">
                                89%
                              </p>
                              <div
                                className="progress bg-primary-subtle"
                                style={{ height: 3 }}
                                role="progressbar"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: "61.37931034482759%" }}
                                  role="progressbar"
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="date align-middle text-body-tertiary text-center py-2">
                              Jun 24, 2021
                            </td>
                            <td className="type align-middle fw-semibold py-2 text-end">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                cold
                              </span>
                            </td>
                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                              <div className="btn-reveal-trigger position-static">
                                <button
                                  className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  data-boundary="window"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-bs-reference="parent"
                                >
                                  <span className="fas fa-ellipsis-h fs-10" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a className="dropdown-item" href="#!">
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#!">
                                    Export
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                            <td className="fs-9 align-middle px-0 py-3">
                              <div className="form-check mb-0 fs-8">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  data-bulk-select-row='{"dealName":"Tarakihi","active":true,"amount":"$1,200,000","stage_status":{"label":"In Progress","type":"badge-phoenix-info"},"progress":{"min":"90","max":"145","color":"bg-success"},"date":"May 19, 2024","type_status":{"label":"hot","type":"badge-phoenix-danger"}}'
                                />
                              </div>
                            </td>
                            <td className="dealName align-middle white-space-nowrap py-2 ps-0">
                              <a className="fw-semibold text-primary" href="#!">
                                Tarakihi
                              </a>
                            </td>
                            <td className="amount align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 text-end pe-6">
                              $1,200,000
                            </td>
                            <td className="stage align-middle white-space-nowrap text-body py-2">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                                In Progress
                              </span>
                            </td>
                            <td className="probability align-middle white-space-nowrap">
                              <p className="text-body-secondary fs-10 mb-0">
                                90%
                              </p>
                              <div
                                className="progress bg-primary-subtle"
                                style={{ height: 3 }}
                                role="progressbar"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: "62.06896551724138%" }}
                                  role="progressbar"
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="date align-middle text-body-tertiary text-center py-2">
                              May 19, 2024
                            </td>
                            <td className="type align-middle fw-semibold py-2 text-end">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                                hot
                              </span>
                            </td>
                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                              <div className="btn-reveal-trigger position-static">
                                <button
                                  className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  data-boundary="window"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-bs-reference="parent"
                                >
                                  <span className="fas fa-ellipsis-h fs-10" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a className="dropdown-item" href="#!">
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#!">
                                    Export
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                            <td className="fs-9 align-middle px-0 py-3">
                              <div className="form-check mb-0 fs-8">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  data-bulk-select-row='{"dealName":"Ponce d’leon","active":true,"amount":"$46,000","stage_status":{"label":"won Deal","type":"badge-phoenix-success"},"progress":{"min":"97","max":"145","color":"bg-success"},"date":"Aug 19, 2024","type_status":{"label":"cold","type":"badge-phoenix-warning"}}'
                                />
                              </div>
                            </td>
                            <td className="dealName align-middle white-space-nowrap py-2 ps-0">
                              <a className="fw-semibold text-primary" href="#!">
                                Ponce d’leon
                              </a>
                            </td>
                            <td className="amount align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 text-end pe-6">
                              $46,000
                            </td>
                            <td className="stage align-middle white-space-nowrap text-body py-2">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                                won Deal
                              </span>
                            </td>
                            <td className="probability align-middle white-space-nowrap">
                              <p className="text-body-secondary fs-10 mb-0">
                                97%
                              </p>
                              <div
                                className="progress bg-primary-subtle"
                                style={{ height: 3 }}
                                role="progressbar"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: "66.89655172413794%" }}
                                  role="progressbar"
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="date align-middle text-body-tertiary text-center py-2">
                              Aug 19, 2024
                            </td>
                            <td className="type align-middle fw-semibold py-2 text-end">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                cold
                              </span>
                            </td>
                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                              <div className="btn-reveal-trigger position-static">
                                <button
                                  className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  data-boundary="window"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-bs-reference="parent"
                                >
                                  <span className="fas fa-ellipsis-h fs-10" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a className="dropdown-item" href="#!">
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#!">
                                    Export
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                            <td className="fs-9 align-middle px-0 py-3">
                              <div className="form-check mb-0 fs-8">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  data-bulk-select-row='{"dealName":"leon","active":true,"amount":"$66,000","stage_status":{"label":"IN PROGRESS","type":"badge-phoenix-info"},"progress":{"min":"88","max":"145","color":"bg-success"},"date":"Aug 19, 2024","type_status":{"label":"cold","type":"badge-phoenix-warning"}}'
                                />
                              </div>
                            </td>
                            <td className="dealName align-middle white-space-nowrap py-2 ps-0">
                              <a className="fw-semibold text-primary" href="#!">
                                leon
                              </a>
                            </td>
                            <td className="amount align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 text-end pe-6">
                              $66,000
                            </td>
                            <td className="stage align-middle white-space-nowrap text-body py-2">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                                IN PROGRESS
                              </span>
                            </td>
                            <td className="probability align-middle white-space-nowrap">
                              <p className="text-body-secondary fs-10 mb-0">
                                88%
                              </p>
                              <div
                                className="progress bg-primary-subtle"
                                style={{ height: 3 }}
                                role="progressbar"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: "60.689655172413794%" }}
                                  role="progressbar"
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="date align-middle text-body-tertiary text-center py-2">
                              Aug 19, 2024
                            </td>
                            <td className="type align-middle fw-semibold py-2 text-end">
                              <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                cold
                              </span>
                            </td>
                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                              <div className="btn-reveal-trigger position-static">
                                <button
                                  className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  data-boundary="window"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-bs-reference="parent"
                                >
                                  <span className="fas fa-ellipsis-h fs-10" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a className="dropdown-item" href="#!">
                                    View
                                  </a>
                                  <a className="dropdown-item" href="#!">
                                    Export
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                      <div className="col-auto d-flex">
                        <p
                          className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                          data-list-info="data-list-info"
                        />
                        <a className="fw-semibold" href="#!" data-list-view="*">
                          View all
                          <span
                            className="fas fa-angle-right ms-1"
                            data-fa-transform="down-1"
                          />
                        </a>
                        <a
                          className="fw-semibold d-none"
                          href="#!"
                          data-list-view="less"
                        >
                          View Less
                          <span
                            className="fas fa-angle-right ms-1"
                            data-fa-transform="down-1"
                          />
                        </a>
                      </div>
                      <div className="col-auto d-flex">
                        <button
                          className="page-link"
                          data-list-pagination="prev"
                        >
                          <span className="fas fa-chevron-left" />
                        </button>
                        <ul className="mb-0 pagination" />
                        <button
                          className="page-link pe-0"
                          data-list-pagination="next"
                        >
                          <span className="fas fa-chevron-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="mb-2" id="scrollspyEmails">
                    Emails
                  </h2>
                  <div>
                    <div className="scrollbar">
                      <ul
                        className="nav nav-underline fs-9 flex-nowrap mb-1"
                        id="emailTab"
                        role="tablist"
                      >
                        <li className="nav-item me-3">
                          <a
                            className="nav-link text-nowrap border-0 active"
                            id="mail-tab"
                            data-bs-toggle="tab"
                            href="#tab-mail"
                            aria-controls="mail-tab"
                            role="tab"
                            aria-selected="true"
                          >
                            Mails (68)
                            <span className="text-body-tertiary fw-normal" />
                          </a>
                        </li>
                        <li className="nav-item me-3">
                          <a
                            className="nav-link text-nowrap border-0"
                            id="drafts-tab"
                            data-bs-toggle="tab"
                            href="#tab-drafts"
                            aria-controls="drafts-tab"
                            role="tab"
                            aria-selected="true"
                          >
                            Drafts (6)
                            <span className="text-body-tertiary fw-normal" />
                          </a>
                        </li>
                        <li className="nav-item me-3">
                          <a
                            className="nav-link text-nowrap border-0"
                            id="schedule-tab"
                            data-bs-toggle="tab"
                            href="#tab-schedule"
                            aria-controls="schedule-tab"
                            role="tab"
                            aria-selected="true"
                          >
                            Scheduled (17)
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="search-box w-100 mb-3">
                      <form className="position-relative">
                        <input
                          className="form-control search-input search"
                          type="search"
                          placeholder="Search..."
                          aria-label="Search"
                        />
                        <span className="fas fa-search search-box-icon" />
                      </form>
                    </div>
                    <div className="tab-content" id="profileTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="tab-mail"
                        role="tabpanel"
                        aria-labelledby="mail-tab"
                      >
                        <div
                          className="border-top border-bottom border-translucent"
                          id="allEmailsTable"
                          data-list='{"valueNames":["subject","sent","date","source","status"],"page":7,"pagination":true}'
                        >
                          <div className="table-responsive scrollbar mx-n1 px-1">
                            <table className="table fs-9 mb-0">
                              <thead>
                                <tr>
                                  <th
                                    className="white-space-nowrap fs-9 align-middle ps-0"
                                    style={{ width: 26 }}
                                  >
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select='{"body":"all-email-table-body"}'
                                      />
                                    </div>
                                  </th>
                                  <th
                                    className="sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase"
                                    scope="col"
                                    data-sort="subject"
                                    style={{ width: "31%", minWidth: 350 }}
                                  >
                                    Subject
                                  </th>
                                  <th
                                    className="sort align-middle pe-3 text-uppercase"
                                    scope="col"
                                    data-sort="sent"
                                    style={{ width: "15%", minWidth: 130 }}
                                  >
                                    Sent by
                                  </th>
                                  <th
                                    className="sort align-middle text-start text-uppercase"
                                    scope="col"
                                    data-sort="date"
                                    style={{ minWidth: 165 }}
                                  >
                                    Date
                                  </th>
                                  <th
                                    className="sort align-middle pe-0 text-uppercase"
                                    scope="col"
                                    style={{ width: "15%", minWidth: 100 }}
                                  >
                                    Action
                                  </th>
                                  <th
                                    className="sort align-middle text-end text-uppercase"
                                    scope="col"
                                    data-sort="status"
                                    style={{ width: "15%", minWidth: 100 }}
                                  >
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="list" id="all-email-table-body">
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"Quary about purchased soccer socks","email":"jackson@mail.com"},"active":true,"sent":"Jackson Pollock","date":"Dec 29, 2021 10:23 am","source":"Call","type_status":{"label":"sent","type":"badge-phoenix-success"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      Quary about purchased soccer socks
                                    </a>
                                    <div className="fs-10 d-block">
                                      jackson@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Jackson Pollock
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 29, 2021 10:23 am
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                                      sent
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"How to take the headache out of Order","email":"ansolo45@mail.com"},"active":true,"sent":"Ansolo Lazinatov","date":"Dec 27, 2021 3:27 pm","source":"Call","type_status":{"label":"delivered","type":"badge-phoenix-info"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      How to take the headache out of Order
                                    </a>
                                    <div className="fs-10 d-block">
                                      ansolo45@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Ansolo Lazinatov
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 27, 2021 3:27 pm
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                                      delivered
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"The Arnold Schwarzenegger of Order","email":"ansolo45@mail.com"},"active":true,"sent":"Ansolo Lazinatov","date":"Dec 24, 2021 10:44 am","source":"Call","type_status":{"label":"Bounce","type":"badge-phoenix-warning"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      The Arnold Schwarzenegger of Order
                                    </a>
                                    <div className="fs-10 d-block">
                                      ansolo45@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Ansolo Lazinatov
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 24, 2021 10:44 am
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                      Bounce
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"My order is not being taken","email":"jackson@mail.com"},"active":true,"sent":"Jackson Pollock","date":"Dec 19, 2021 4:55 pm","source":"Call","type_status":{"label":"Spam","type":"badge-phoenix-danger"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      My order is not being taken
                                    </a>
                                    <div className="fs-10 d-block">
                                      jackson@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Jackson Pollock
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 19, 2021 4:55 pm
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                                      Spam
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"Shipment is missing","email":"jackson@mail.com"},"active":true,"sent":"Jackson Pollock","date":"Dec 19, 2021 2:43 pm","source":"Call","type_status":{"label":"sent","type":"badge-phoenix-success"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      Shipment is missing
                                    </a>
                                    <div className="fs-10 d-block">
                                      jackson@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Jackson Pollock
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 19, 2021 2:43 pm
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                                      sent
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"How can I order something urgently?","email":"ansolo45@mail.com"},"active":true,"sent":"Jackson Pollock","date":"Dec 19, 2021 2:43 pm","source":"Call","type_status":{"label":"Delivered","type":"badge-phoenix-info"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      How can I order something urgently?
                                    </a>
                                    <div className="fs-10 d-block">
                                      ansolo45@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Jackson Pollock
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 19, 2021 2:43 pm
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                                      Delivered
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"How the delicacy of the products will be handled?","email":"ansolo45@mail.com"},"active":true,"sent":"Ansolo Lazinatov","date":"Dec 16, 2021 5:18 pm","source":"Call","type_status":{"label":"bounced","type":"badge-phoenix-warning"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      How the delicacy of the products will be
                                      handled?
                                    </a>
                                    <div className="fs-10 d-block">
                                      ansolo45@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Ansolo Lazinatov
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 16, 2021 5:18 pm
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                      bounced
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                            <div className="col-auto d-flex">
                              <p
                                className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                                data-list-info="data-list-info"
                              />
                              <a
                                className="fw-semibold"
                                href="#!"
                                data-list-view="*"
                              >
                                View all
                                <span
                                  className="fas fa-angle-right ms-1"
                                  data-fa-transform="down-1"
                                />
                              </a>
                              <a
                                className="fw-semibold d-none"
                                href="#!"
                                data-list-view="less"
                              >
                                View Less
                                <span
                                  className="fas fa-angle-right ms-1"
                                  data-fa-transform="down-1"
                                />
                              </a>
                            </div>
                            <div className="col-auto d-flex">
                              <button
                                className="page-link"
                                data-list-pagination="prev"
                              >
                                <span className="fas fa-chevron-left" />
                              </button>
                              <ul className="mb-0 pagination" />
                              <button
                                className="page-link pe-0"
                                data-list-pagination="next"
                              >
                                <span className="fas fa-chevron-right" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-drafts"
                        role="tabpanel"
                        aria-labelledby="drafts-tab"
                      >
                        <div
                          className="border-top border-bottom border-translucent"
                          id="draftsEmailsTable"
                          data-list='{"valueNames":["subject","sent","date","source","status"],"page":7,"pagination":true}'
                        >
                          <div className="table-responsive scrollbar mx-n1 px-1">
                            <table className="table fs-9 mb-0">
                              <thead>
                                <tr>
                                  <th
                                    className="white-space-nowrap fs-9 align-middle ps-0"
                                    style={{ width: 26 }}
                                  >
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select='{"body":"drafts-email-table-body"}'
                                      />
                                    </div>
                                  </th>
                                  <th
                                    className="sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase"
                                    scope="col"
                                    data-sort="subject"
                                    style={{ width: "31%", minWidth: 350 }}
                                  >
                                    Subject
                                  </th>
                                  <th
                                    className="sort align-middle pe-3 text-uppercase"
                                    scope="col"
                                    data-sort="sent"
                                    style={{ width: "15%", minWidth: 130 }}
                                  >
                                    Sent by
                                  </th>
                                  <th
                                    className="sort align-middle text-start text-uppercase"
                                    scope="col"
                                    data-sort="date"
                                    style={{ minWidth: 165 }}
                                  >
                                    Date
                                  </th>
                                  <th
                                    className="sort align-middle pe-0 text-uppercase"
                                    scope="col"
                                    style={{ width: "15%", minWidth: 100 }}
                                  >
                                    Action
                                  </th>
                                  <th
                                    className="sort align-middle text-end text-uppercase"
                                    scope="col"
                                    data-sort="status"
                                    style={{ width: "15%", minWidth: 100 }}
                                  >
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody
                                className="list"
                                id="drafts-email-table-body"
                              >
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"Quary about purchased soccer socks","email":"jackson@mail.com"},"active":true,"sent":"Jackson Pollock","date":"Dec 29, 2021 10:23 am","source":"Call","type_status":{"label":"sent","type":"badge-phoenix-success"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      Quary about purchased soccer socks
                                    </a>
                                    <div className="fs-10 d-block">
                                      jackson@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Jackson Pollock
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 29, 2021 10:23 am
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                                      sent
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"How to take the headache out of Order","email":"ansolo45@mail.com"},"active":true,"sent":"Ansolo Lazinatov","date":"Dec 27, 2021 3:27 pm","source":"Call","type_status":{"label":"delivered","type":"badge-phoenix-info"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      How to take the headache out of Order
                                    </a>
                                    <div className="fs-10 d-block">
                                      ansolo45@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Ansolo Lazinatov
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 27, 2021 3:27 pm
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                                      delivered
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"The Arnold Schwarzenegger of Order","email":"ansolo45@mail.com"},"active":true,"sent":"Ansolo Lazinatov","date":"Dec 24, 2021 10:44 am","source":"Call","type_status":{"label":"Bounce","type":"badge-phoenix-warning"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      The Arnold Schwarzenegger of Order
                                    </a>
                                    <div className="fs-10 d-block">
                                      ansolo45@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Ansolo Lazinatov
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 24, 2021 10:44 am
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                      Bounce
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"My order is not being taken","email":"jackson@mail.com"},"active":true,"sent":"Jackson Pollock","date":"Dec 19, 2021 4:55 pm","source":"Call","type_status":{"label":"Spam","type":"badge-phoenix-danger"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      My order is not being taken
                                    </a>
                                    <div className="fs-10 d-block">
                                      jackson@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Jackson Pollock
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 19, 2021 4:55 pm
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                                      Spam
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"Shipment is missing","email":"jackson@mail.com"},"active":true,"sent":"Jackson Pollock","date":"Dec 19, 2021 2:43 pm","source":"Call","type_status":{"label":"sent","type":"badge-phoenix-success"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      Shipment is missing
                                    </a>
                                    <div className="fs-10 d-block">
                                      jackson@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Jackson Pollock
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 19, 2021 2:43 pm
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                                      sent
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                            <div className="col-auto d-flex">
                              <p
                                className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                                data-list-info="data-list-info"
                              />
                              <a
                                className="fw-semibold"
                                href="#!"
                                data-list-view="*"
                              >
                                View all
                                <span
                                  className="fas fa-angle-right ms-1"
                                  data-fa-transform="down-1"
                                />
                              </a>
                              <a
                                className="fw-semibold d-none"
                                href="#!"
                                data-list-view="less"
                              >
                                View Less
                                <span
                                  className="fas fa-angle-right ms-1"
                                  data-fa-transform="down-1"
                                />
                              </a>
                            </div>
                            <div className="col-auto d-flex">
                              <button
                                className="page-link"
                                data-list-pagination="prev"
                              >
                                <span className="fas fa-chevron-left" />
                              </button>
                              <ul className="mb-0 pagination" />
                              <button
                                className="page-link pe-0"
                                data-list-pagination="next"
                              >
                                <span className="fas fa-chevron-right" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-schedule"
                        role="tabpanel"
                        aria-labelledby="schedule-tab"
                      >
                        <div
                          className="border-top border-bottom border-translucent"
                          id="scheduledEmailsTable"
                          data-list='{"valueNames":["subject","sent","date","source","status"],"page":7,"pagination":true}'
                        >
                          <div className="table-responsive scrollbar mx-n1 px-1">
                            <table className="table fs-9 mb-0">
                              <thead>
                                <tr>
                                  <th
                                    className="white-space-nowrap fs-9 align-middle ps-0"
                                    style={{ width: 26 }}
                                  >
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select='{"body":"scheduled-email-table-body"}'
                                      />
                                    </div>
                                  </th>
                                  <th
                                    className="sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase"
                                    scope="col"
                                    data-sort="subject"
                                    style={{ width: "31%", minWidth: 350 }}
                                  >
                                    Subject
                                  </th>
                                  <th
                                    className="sort align-middle pe-3 text-uppercase"
                                    scope="col"
                                    data-sort="sent"
                                    style={{ width: "15%", minWidth: 130 }}
                                  >
                                    Sent by
                                  </th>
                                  <th
                                    className="sort align-middle text-start text-uppercase"
                                    scope="col"
                                    data-sort="date"
                                    style={{ minWidth: 165 }}
                                  >
                                    Date
                                  </th>
                                  <th
                                    className="sort align-middle pe-0 text-uppercase"
                                    scope="col"
                                    style={{ width: "15%", minWidth: 100 }}
                                  >
                                    Action
                                  </th>
                                  <th
                                    className="sort align-middle text-end text-uppercase"
                                    scope="col"
                                    data-sort="status"
                                    style={{ width: "15%", minWidth: 100 }}
                                  >
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody
                                className="list"
                                id="scheduled-email-table-body"
                              >
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"Quary about purchased soccer socks","email":"jackson@mail.com"},"active":true,"sent":"Jackson Pollock","date":"Dec 29, 2021 10:23 am","source":"Call","type_status":{"label":"sent","type":"badge-phoenix-success"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      Quary about purchased soccer socks
                                    </a>
                                    <div className="fs-10 d-block">
                                      jackson@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Jackson Pollock
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 29, 2021 10:23 am
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                                      sent
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"How to take the headache out of Order","email":"ansolo45@mail.com"},"active":true,"sent":"Ansolo Lazinatov","date":"Dec 27, 2021 3:27 pm","source":"Call","type_status":{"label":"delivered","type":"badge-phoenix-info"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      How to take the headache out of Order
                                    </a>
                                    <div className="fs-10 d-block">
                                      ansolo45@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Ansolo Lazinatov
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 27, 2021 3:27 pm
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                                      delivered
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"The Arnold Schwarzenegger of Order","email":"ansolo45@mail.com"},"active":true,"sent":"Ansolo Lazinatov","date":"Dec 24, 2021 10:44 am","source":"Call","type_status":{"label":"Bounce","type":"badge-phoenix-warning"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      The Arnold Schwarzenegger of Order
                                    </a>
                                    <div className="fs-10 d-block">
                                      ansolo45@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Ansolo Lazinatov
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 24, 2021 10:44 am
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                      Bounce
                                    </span>
                                  </td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                  <td className="fs-9 align-middle px-0 py-3">
                                    <div className="form-check mb-0 fs-8">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-bulk-select-row='{"mail":{"subject":"My order is not being taken","email":"jackson@mail.com"},"active":true,"sent":"Jackson Pollock","date":"Dec 19, 2021 4:55 pm","source":"Call","type_status":{"label":"Spam","type":"badge-phoenix-danger"}}'
                                      />
                                    </div>
                                  </td>
                                  <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                    <a
                                      className="fw-semibold text-primary"
                                      href="#!"
                                    >
                                      My order is not being taken
                                    </a>
                                    <div className="fs-10 d-block">
                                      jackson@mail.com
                                    </div>
                                  </td>
                                  <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                    Jackson Pollock
                                  </td>
                                  <td className="date align-middle white-space-nowrap text-body py-2">
                                    Dec 19, 2021 4:55 pm
                                  </td>
                                  <td className="align-middle white-space-nowrap ps-3">
                                    <a className="text-body" href="#!">
                                      <span className="fa-solid fa-phone text-primary me-2" />
                                      Call
                                    </a>
                                  </td>
                                  <td className="status align-middle fw-semibold text-end py-2">
                                    <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                                      Spam
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                            <div className="col-auto d-flex">
                              <p
                                className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                                data-list-info="data-list-info"
                              />
                              <a
                                className="fw-semibold"
                                href="#!"
                                data-list-view="*"
                              >
                                View all
                                <span
                                  className="fas fa-angle-right ms-1"
                                  data-fa-transform="down-1"
                                />
                              </a>
                              <a
                                className="fw-semibold d-none"
                                href="#!"
                                data-list-view="less"
                              >
                                View Less
                                <span
                                  className="fas fa-angle-right ms-1"
                                  data-fa-transform="down-1"
                                />
                              </a>
                            </div>
                            <div className="col-auto d-flex">
                              <button
                                className="page-link"
                                data-list-pagination="prev"
                              >
                                <span className="fas fa-chevron-left" />
                              </button>
                              <ul className="mb-0 pagination" />
                              <button
                                className="page-link pe-0"
                                data-list-pagination="next"
                              >
                                <span className="fas fa-chevron-right" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="mb-4" id="scrollspyAttachments">
                    Attachments
                  </h2>
                  <div className="border-top border-dashed pt-3 pb-4">
                    <div className="d-flex flex-between-center">
                      <div className="d-flex mb-1">
                        <span className="fa-solid fa-image me-2 text-body-tertiary fs-9" />
                        <p className="text-body-highlight mb-0 lh-1">
                          Silly_sight_1.png
                        </p>
                      </div>
                      <div className="btn-reveal-trigger">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                          type="button"
                          data-bs-toggle="dropdown"
                          data-boundary="window"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-bs-reference="parent"
                        >
                          <span className="fas fa-ellipsis-h" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a className="dropdown-item" href="#!">
                            Edit
                          </a>
                          <a className="dropdown-item text-danger" href="#!">
                            Delete
                          </a>
                          <a className="dropdown-item" href="#!">
                            Download
                          </a>
                          <a className="dropdown-item" href="#!">
                            Report abuse
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="fs-9 text-body-tertiary mb-3">
                      <span>768kB</span>
                      <span className="text-body-quaternary mx-1">| </span>
                      <a href="#!">Shantinan Mekalan </a>
                      <span className="text-body-quaternary mx-1">| </span>
                      <span className="text-nowrap">21st Dec, 12:56 PM</span>
                    </p>
                    <img className="rounded-2" src={team} alt />
                  </div>
                  <div className="border-top border-dashed py-4">
                    <div className="d-flex flex-between-center">
                      <div>
                        <div className="d-flex align-items-center mb-1">
                          <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary" />
                          <p className="text-body-highlight mb-0 lh-1">
                            All_images.zip
                          </p>
                        </div>
                        <p className="fs-9 text-body-tertiary mb-0">
                          <span>12.8 mB</span>
                          <span className="text-body-quaternary mx-1">|</span>
                          <a href="#!">Yves Tanguy </a>
                          <span className="text-body-quaternary mx-1">| </span>
                          <span className="text-nowrap">
                            19th Dec, 08:56 PM
                          </span>
                        </p>
                      </div>
                      <div className="btn-reveal-trigger">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                          type="button"
                          data-bs-toggle="dropdown"
                          data-boundary="window"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-bs-reference="parent"
                        >
                          <span className="fas fa-ellipsis-h" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a className="dropdown-item" href="#!">
                            Edit
                          </a>
                          <a className="dropdown-item text-danger" href="#!">
                            Delete
                          </a>
                          <a className="dropdown-item" href="#!">
                            Download
                          </a>
                          <a className="dropdown-item" href="#!">
                            Report abuse
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-dashed py-4">
                    <div className="d-flex flex-between-center">
                      <div>
                        <div className="d-flex align-items-center mb-1">
                          <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary" />
                          <p className="text-body-highlight mb-0 lh-1">
                            Project.txt
                          </p>
                        </div>
                        <p className="fs-9 text-body-tertiary mb-0">
                          <span>123 kB</span>
                          <span className="text-body-quaternary mx-1">| </span>
                          <a href="#!">Shantinan Mekalan </a>
                          <span className="text-body-quaternary mx-1">| </span>
                          <span className="text-nowrap">
                            12th Dec, 12:56 PM
                          </span>
                        </p>
                      </div>
                      <div className="btn-reveal-trigger">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                          type="button"
                          data-bs-toggle="dropdown"
                          data-boundary="window"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-bs-reference="parent"
                        >
                          <span className="fas fa-ellipsis-h" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a className="dropdown-item" href="#!">
                            Edit
                          </a>
                          <a className="dropdown-item text-danger" href="#!">
                            Delete
                          </a>
                          <a className="dropdown-item" href="#!">
                            Download
                          </a>
                          <a className="dropdown-item" href="#!">
                            Report abuse{""}
                          </a>
                        </div>
                      </div>
                    </div>
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

export default DetailCustomer;
