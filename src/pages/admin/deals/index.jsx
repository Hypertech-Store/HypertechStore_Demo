const Deals = () => {
  return (
    <>
      <div className="content kanban-deals-content">
        <nav className="mb-3 crm-deals-breadcrumb" aria-label="breadcrumb">
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
        <div>
          <div className="px-4 px-lg-6">
            <h2 className="mb-5">Deals</h2>
            <div className="d-xl-flex justify-content-between">
              <div className="mb-3">
                <button
                  className="btn btn-primary me-4"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#addDealModal"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Add Deal
                </button>
                <button className="btn btn-link text-body px-0">
                  <span className="fa-solid fa-file-export fs-9 me-2" />
                  Export
                </button>
              </div>
              <div className="d-flex mb-4">
                <div className="search-box">
                  <form className="position-relative">
                    <input
                      className="form-control search-input search"
                      type="search"
                      placeholder="Search by name"
                      aria-label="Search"
                    />
                    <span className="fas fa-search search-box-icon" />
                  </form>
                </div>
                <select className="form-select w-auto mx-2" id="select-deals">
                  <option>Deals</option>
                </select>
                <button
                  className="btn px-3 btn-phoenix-secondary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#reportsFilterModal"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span
                    className="fa-solid fa-filter text-primary"
                    data-fa-transform="down-3"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            className="px-4 px-lg-6 scrollbar"
            data-kanban-container="data-kanban-container"
          >
            <div className="deals">
              <div className="deals-col me-4">
                <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
                  <div>
                    <h5 className="mb-2">New</h5>
                    <p className="fs-9 text-body-tertiary mb-1">
                      Forecast Revenue:
                    </p>
                    <h4 className="mb-3">$37,000.00</h4>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#addDealModal"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fa-solid fa-plus" />
                    </button>
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Add meeting
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          See all connected contacts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Clone
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Display only bad deals
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="scrollbar deals-items-container">
                  <div
                    className="w-100 min-vh-50"
                    data-sortable="data-sortable"
                  >
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-1"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-1"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 30, 2022
                                <span className="text-body-quaternary">
                                  {""}. 2:15 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              Jo_Td01
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Financial
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $14,000.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Knitkake.inc
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Ally Aagaard
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-1">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-info">
                                new
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-danger">
                                Urgent
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $14,000.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      Knitkake.inc
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      27-12-2022<span> . 11:19 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option selected="selected">
                                        Ally Aagaard
                                      </option>
                                      <option>Lonnie Kub</option>
                                      <option>Aida Moen</option>
                                      <option>Niko Koss</option>
                                      <option>Alec Haag</option>
                                      <option>Ola Smith</option>
                                      <option>Leif Walsh</option>
                                      <option>Brain Cole</option>
                                      <option>Reese Mann</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-info"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-2"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-2"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 29, 2022
                                <span className="text-body-quaternary">
                                  {""}. 12:15 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              Dimensions for Printing
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Marketplace
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $23,000.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Kibikaba Clothings
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Lonnie Kub
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-2">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-info">
                                New
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-success">
                                Medium
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $23,000.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      Kibikaba Clothings
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      25-12-2022<span> . 2:00 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option>Ally Aagaard</option>
                                      <option selected="selected">
                                        Lonnie Kub
                                      </option>
                                      <option>Aida Moen</option>
                                      <option>Niko Koss</option>
                                      <option>Alec Haag</option>
                                      <option>Ola Smith</option>
                                      <option>Leif Walsh</option>
                                      <option>Brain Cole</option>
                                      <option>Reese Mann</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-info"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="deals-col me-4">
                <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
                  <div>
                    <h5 className="mb-2">In Progress</h5>
                    <p className="fs-9 text-body-tertiary mb-1">
                      Forecast Revenue:
                    </p>
                    <h4 className="mb-3">$101,300.00</h4>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#addDealModal"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fa-solid fa-plus" />
                    </button>
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Add meeting
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          See all connected contacts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Clone
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Display only bad deals
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="scrollbar deals-items-container">
                  <div
                    className="w-100 min-vh-50"
                    data-sortable="data-sortable"
                  >
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-3"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-3"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 30, 2022
                                <span className="text-body-quaternary">
                                  {""}. 06:15 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              True and True Attorneys
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Financial
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $33,000.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                PBR Holdings
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Aida Moen
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-3">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-primary">
                                In Progress
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-warning">
                                High
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $33,000.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      PBR Holdings
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      27-12-2022<span> . 11:19 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option>Ally Aagaard</option>
                                      <option>Lonnie Kub</option>
                                      <option selected="selected">
                                        Aida Moen
                                      </option>
                                      <option>Niko Koss</option>
                                      <option>Alec Haag</option>
                                      <option>Ola Smith</option>
                                      <option>Leif Walsh</option>
                                      <option>Brain Cole</option>
                                      <option>Reese Mann</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-primary"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-4"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-4"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 30, 2022
                                <span className="text-body-quaternary">
                                  {""}. 08:20 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              The Morlong Corporation
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Marketplace
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $45,300.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Giraffes Studio
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Niko Koss
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-4">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-primary">
                                In Progress
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-info">
                                Low
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $45,300.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      Giraffes Studio
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      26-12-2022<span> . 12:10 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option>Ally Aagaard</option>
                                      <option>Lonnie Kub</option>
                                      <option>Aida Moen</option>
                                      <option selected="selected">
                                        Niko Koss
                                      </option>
                                      <option>Alec Haag</option>
                                      <option>Ola Smith</option>
                                      <option>Leif Walsh</option>
                                      <option>Brain Cole</option>
                                      <option>Reese Mann</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-primary"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-5"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-5"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 30, 2022
                                <span className="text-body-quaternary">
                                  {""}. 3:25 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              Product List
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Marketplace
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $23,000.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Birds eye
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Alec Haag
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-5">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-primary">
                                In Progress
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-danger">
                                Urgent
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $23,000.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      Birds eye
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      27-12-2022<span> . 11:19 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option>Ally Aagaard</option>
                                      <option>Lonnie Kub</option>
                                      <option>Aida Moen</option>
                                      <option>Niko Koss</option>
                                      <option selected="selected">
                                        Alec Haag
                                      </option>
                                      <option>Ola Smith</option>
                                      <option>Leif Walsh</option>
                                      <option>Brain Cole</option>
                                      <option>Reese Mann</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-primary"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="deals-col me-4">
                <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
                  <div>
                    <h5 className="mb-2">Pending</h5>
                    <p className="fs-9 text-body-tertiary mb-1">
                      Forecast Revenue:
                    </p>
                    <h4 className="mb-3">$23,400.00</h4>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#addDealModal"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fa-solid fa-plus" />
                    </button>
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Add meeting
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          See all connected contacts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Clone
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Display only bad deals
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="scrollbar deals-items-container">
                  <div
                    className="w-100 min-vh-50"
                    data-sortable="data-sortable"
                  >
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-6"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-6"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 30, 2022
                                <span className="text-body-quaternary">
                                  {""}. 3:15 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              Printing Services by Feltz
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Marketplace
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $23,400.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Ant Family
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Ally Aagaard
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-6">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-warning">
                                Pending
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-warning">
                                High
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $23,400.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      Ant Family
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      27-12-2022<span> . 11:19 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option selected="selected">
                                        Ally Aagaard
                                      </option>
                                      <option>Lonnie Kub</option>
                                      <option>Aida Moen</option>
                                      <option>Niko Koss</option>
                                      <option>Alec Haag</option>
                                      <option>Ola Smith</option>
                                      <option>Leif Walsh</option>
                                      <option>Brain Cole</option>
                                      <option>Reese Mann</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-warning"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="deals-col me-4">
                <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
                  <div>
                    <h5 className="mb-2">Canceled</h5>
                    <p className="fs-9 text-body-tertiary mb-1">
                      Forecast Revenue:
                    </p>
                    <h4 className="mb-3">$260.00</h4>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#addDealModal"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fa-solid fa-plus" />
                    </button>
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Add meeting
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          See all connected contacts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Clone
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Display only bad deals
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="scrollbar deals-items-container">
                  <div
                    className="w-100 min-vh-50"
                    data-sortable="data-sortable"
                  >
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-7"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-7"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 31, 2022
                                <span className="text-body-quaternary">
                                  {""}. 01:30 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              SP Flat Plate
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Financial
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $14,000.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Ant Family
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Ola Smith
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-7">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-secondary">
                                Canceled
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-success">
                                Medium
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $14,000.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      Ant Family
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      29-12-2022<span> . 01:30 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option>Ally Aagaard</option>
                                      <option>Lonnie Kub</option>
                                      <option>Aida Moen</option>
                                      <option>Niko Koss</option>
                                      <option>Alec Haag</option>
                                      <option selected="selected">
                                        Ola Smith
                                      </option>
                                      <option>Leif Walsh</option>
                                      <option>Brain Cole</option>
                                      <option>Reese Mann</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-300"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-8"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-8"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 31, 2022
                                <span className="text-body-quaternary">
                                  {""}. 2:15 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              Ventilated Pipe
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Marketplace
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $14,000.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Giraffes Studio
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Leif Walsh
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-8">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-secondary">
                                Canceled
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-info">
                                Low
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $14,000.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      Giraffes Studio
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      29-12-2022<span> . 02:15 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option>Ally Aagaard</option>
                                      <option>Lonnie Kub</option>
                                      <option>Aida Moen</option>
                                      <option>Niko Koss</option>
                                      <option>Alec Haag</option>
                                      <option>Ola Smith</option>
                                      <option selected="selected">
                                        Leif Walsh
                                      </option>
                                      <option>Brain Cole</option>
                                      <option>Reese Mann</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-300"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="deals-col me-4">
                <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
                  <div>
                    <h5 className="mb-2">Completed</h5>
                    <p className="fs-9 text-body-tertiary mb-1">
                      Forecast Revenue:
                    </p>
                    <h4 className="mb-3">$1,650.00</h4>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#addDealModal"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fa-solid fa-plus" />
                    </button>
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span className="fas fa-ellipsis-h fs-10" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Add meeting
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          See all connected contacts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Clone
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Display only bad deals
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="scrollbar deals-items-container">
                  <div
                    className="w-100 min-vh-50"
                    data-sortable="data-sortable"
                  >
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-9"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-9"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 29, 2022
                                <span className="text-body-quaternary">
                                  {""}. 03:12 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              Product Shipping
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Financial
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $15,000.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Birds eye
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Brain Cole
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-9">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-success">
                                Completed
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-danger">
                                Urgent
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $15,000.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      Birds eye
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      27-12-2022<span> . 11:19 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option>Ally Aagaard</option>
                                      <option>Lonnie Kub</option>
                                      <option>Aida Moen</option>
                                      <option>Niko Koss</option>
                                      <option>Alec Haag</option>
                                      <option>Ola Smith</option>
                                      <option>Leif Walsh</option>
                                      <option selected="selected">
                                        Brain Cole
                                      </option>
                                      <option>Reese Mann</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-10"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-10"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 29, 2022
                                <span className="text-body-quaternary">
                                  {""}. 06:15 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              Product List
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Financial
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $33,00.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Ink Incorporated
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Reese Mann
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-10">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-success">
                                Completed
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-info">
                                Low
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $33,00.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      Ink Incorporated
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      28-12-2022<span> . 12:20 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option>Ally Aagaard</option>
                                      <option>Lonnie Kub</option>
                                      <option>Aida Moen</option>
                                      <option>Niko Koss</option>
                                      <option>Alec Haag</option>
                                      <option>Ola Smith</option>
                                      <option>Leif Walsh</option>
                                      <option>Brain Cole</option>
                                      <option selected="selected">
                                        Reese Mann
                                      </option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <a
                            className="dropdown-indicator-icon position-absolute text-body-tertiary"
                            href="#collapseWidthDeals-11"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="collapseWidthDeals-11"
                          >
                            <span className="fa-solid fa-angle-down" />
                          </a>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex">
                              <span
                                className="me-2"
                                data-feather="clock"
                                style={{ strokeWidth: 2 }}
                              />
                              <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
                                Dec 29, 2022
                                <span className="text-body-quaternary">
                                  {""}. 2:15 PM
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="deals-items-head d-flex align-items-center mb-2">
                            <a
                              className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
                              href="deal-details.html"
                            >
                              Dimensions for Printing
                            </a>
                            <p className="deals-category fs-10 mb-0 mt-1 d-none">
                              <span
                                className="me-1 text-body-quaternary"
                                data-feather="grid"
                                style={{
                                  strokeWidth: 2,
                                  height: 12,
                                  width: 12,
                                }}
                              />
                              Marketplace
                            </p>
                            <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
                              $23,400.00
                            </p>
                          </div>
                          <div className="deals-company-agent d-flex flex-between-center">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-user me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Slim Apes
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="uil uil-headphones me-2" />
                              <p className="text-body-secondary fw-bold fs-9 mb-0">
                                Ally Aagaard
                              </p>
                            </div>
                          </div>
                          <div className="collapse" id="collapseWidthDeals-11">
                            <div className="d-flex gap-2 mb-5">
                              <span className="badge badge-phoenix badge-phoenix-success">
                                Completed
                              </span>
                              <span className="badge badge-phoenix badge-phoenix-danger">
                                Urgent
                              </span>
                            </div>
                            <table className="mb-4 w-100 table-stats table-stats">
                              <tbody>
                                <tr>
                                  <th />
                                  <th />
                                  <th />
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="dollar-sign"
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Expected Revenue
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      $23,400.00
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="user"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Company Name
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
                                      Slim Apes
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-phone text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fa-solid fa-square-envelope text-body-tertiary" />
                                      </a>
                                      <a href="#!">
                                        {""}
                                        <span className="fab fa-whatsapp-square text-body-tertiary" />
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="calendar"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Closing Date &amp; Time
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
                                      28-12-2022<span> . 02:19 PM</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-1">
                                    <div className="d-flex align-items-center">
                                      <span
                                        className="me-2 text-body-tertiary"
                                        data-feather="headphones"
                                        style={{ width: 16, height: 16 }}
                                      />
                                      <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
                                        Assigned Agent{""}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-1 d-none d-sm-block pe-sm-2">
                                    :
                                  </td>
                                  <td className="py-1">
                                    <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                      <option selected="selected">
                                        Ally Aagaard
                                      </option>
                                      <option>Lonnie Kub</option>
                                      <option>Aida Moen</option>
                                      <option>Niko Koss</option>
                                      <option>Alec Haag</option>
                                      <option>Ola Smith</option>
                                      <option>Leif Walsh</option>
                                      <option>Brain Cole</option>
                                      <option>Reese Mann</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="fs-9 mb-1"> Probability:</p>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar rounded-pill bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="deals-col position-relative">
                <div className="d-flex flex-center flex-column h-100">
                  <h3 className="mb-4">Add new stage</h3>
                  <button
                    className="btn btn-sm btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#addStageModal"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fa-solid fa-plus me-2" />
                    New Stage
                  </button>
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
      <div
        className="modal fade"
        id="addDealModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addDealModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Deal Informations</h3>
              <button
                className="btn btn-sm btn-phoenix-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="fas fa-times text-danger" />
              </button>
            </div>
            <div className="modal-body px-0">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Deal Owner
                    </label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Ally Aagaard</option>
                      <option>Aida Moen</option>
                      <option>Niko Koss</option>
                      <option>Alec Haag</option>
                      <option>Lonnie Kub</option>
                      <option>Ola Smith</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Deal Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter deal name"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="row g-3">
                      <div className="col-sm-6 col-lg-12 col-xl-6">
                        <label className="text-body-highlight fw-bold mb-2">
                          Deal Amount
                        </label>
                        <div className="row g-2">
                          <div className="col">
                            <input
                              className="form-control"
                              type="number"
                              placeholder="$ Enter amount"
                            />
                          </div>
                          <div className="col-auto">
                            <select className="form-select">
                              <option>USD</option>
                              <option>GBP</option>
                              <option>EUR</option>
                              <option>JPY</option>
                              <option>CAD</option>
                              <option>AUD</option>
                              <option>CNY</option>
                              <option>CHF</option>
                              <option>ZAR</option>
                              <option>BRL</option>
                              <option>RUB</option>
                              <option>INR</option>
                              <option>MXN</option>
                              <option>NZD</option>
                              <option>SGD</option>
                              <option>HKD</option>
                              <option>KRW</option>
                              <option>SEK</option>
                              <option>NOK</option>
                              <option>TRY</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Deal Code
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter deals code"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Deal Type
                      <button className="btn btn-link p-0 ms-3">
                        <span className="fa-solid fa-plus me-1" />
                        <span>Add new</span>
                      </button>
                    </label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Buy One Get One Free</option>
                      <option>Clearance sale</option>
                      <option>Bundle deals</option>
                      <option>Free shipping</option>
                      <option>Loyalty programs</option>
                      <option>Limited-time offers</option>
                      <option>Refer-a-friend discounts</option>
                      <option>Seasonal sales</option>
                      <option>Membership discounts</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Category
                      <button className="btn btn-link p-0 ms-3">
                        <span className="fa-solid fa-plus me-1" />
                        <span>Add new</span>
                      </button>
                    </label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Financial</option>
                      <option>Marketplace</option>
                      <option>Travel</option>
                      <option>E-commerce</option>
                      <option>Cloud Computing</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Probability (%)
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter value"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Expected Revenue
                    </label>
                    <div className="row g-2">
                      <div className="col">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="$ Enter amount"
                        />
                      </div>
                      <div className="col-auto">
                        <select className="form-select">
                          <option>USD</option>
                          <option>GBP</option>
                          <option>EUR</option>
                          <option>JPY</option>
                          <option>CAD</option>
                          <option>AUD</option>
                          <option>CNY</option>
                          <option>CHF</option>
                          <option>ZAR</option>
                          <option>BRL</option>
                          <option>RUB</option>
                          <option>INR</option>
                          <option>MXN</option>
                          <option>NZD</option>
                          <option>SGD</option>
                          <option>HKD</option>
                          <option>KRW</option>
                          <option>SEK</option>
                          <option>NOK</option>
                          <option>TRY</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Contact Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter contact name"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="row g-3">
                      <div className="col-6">
                        <label className="text-body-highlight fw-bold mb-2">
                          Phone Number
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div className="col-6">
                        <label className="text-body-highlight fw-bold mb-2">
                          Email Address
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter email address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Lead Source
                      <button className="btn btn-link p-0 ms-3">
                        <span className="fa-solid fa-plus me-1" />
                        <span>Add new</span>
                      </button>
                    </label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Referrals</option>
                      <option>Former Clients</option>
                      <option>Competitors</option>
                      <option>Business &amp; sales</option>
                      <option>Google resources</option>
                      <option>Linkedin</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Campaign Source
                      <button className="btn btn-link p-0 ms-3">
                        <span className="fa-solid fa-plus me-1" />
                        <span>Add new</span>
                      </button>
                    </label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Online Campaign</option>
                      <option>Offline Campaign</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Time Zone
                    </label>
                    <select className="form-select">
                      <option>GMT-12:00 Etc/GMT-12</option>
                      <option>GMT-11:00 Etc/GMT-11</option>
                      <option>GMT-11:00 Pacific/Midway</option>
                      <option>GMT-10:00 America/Adak</option>
                      <option>GMT-09:00 America/Anchorage</option>
                      <option>GMT-09:00 Pacific/Gambier</option>
                      <option>GMT-08:00 America/Dawson_Creek</option>
                      <option>GMT-08:00 America/Ensenada</option>
                      <option>GMT-08:00 America/Los_Angeles</option>
                      <option>GMT-07:00 America/Chihuahua</option>
                      <option>GMT-07:00 America/Denver</option>
                      <option>GMT-06:00 America/Belize</option>
                      <option>GMT-06:00 America/Cancun</option>
                      <option>GMT-06:00 America/Chicago</option>
                      <option>GMT-06:00 Chile/EasterIsland</option>
                      <option>GMT-05:00 America/Bogota</option>
                      <option>GMT-05:00 America/Havana</option>
                      <option>GMT-05:00 America/New_York</option>
                      <option>GMT-04:30 America/Caracas</option>
                      <option>GMT-04:00 America/Campo_Grande</option>
                      <option>GMT-04:00 America/Glace_Bay</option>
                      <option>GMT-04:00 America/Goose_Bay</option>
                      <option>GMT-04:00 America/Santiago</option>
                      <option>GMT-04:00 America/La_Paz</option>
                      <option>GMT-03:00 America/Argentina/Buenos_Aires</option>
                      <option>GMT-03:00 America/Montevideo</option>
                      <option>GMT-03:00 America/Araguaina</option>
                      <option>GMT-03:00 America/Godthab</option>
                      <option>GMT-03:00 America/Miquelon</option>
                      <option>GMT-03:00 America/Sao_Paulo</option>
                      <option>GMT-03:30 America/St_Johns</option>
                      <option>GMT-02:00 America/Noronha</option>
                      <option>GMT-01:00 Atlantic/Cape_Verde</option>
                      <option>GMT Europe/Belfast</option>
                      <option>GMT Africa/Abidjan</option>
                      <option>GMT Europe/Dublin</option>
                      <option>GMT Europe/Lisbon</option>
                      <option>GMT Europe/London</option>
                      <option>UTC UTC</option>
                      <option>GMT+01:00 Africa/Algiers</option>
                      <option>GMT+01:00 Africa/Windhoek</option>
                      <option>GMT+01:00 Atlantic/Azores</option>
                      <option>GMT+01:00 Atlantic/Stanley</option>
                      <option>GMT+01:00 Europe/Amsterdam</option>
                      <option>GMT+01:00 Europe/Belgrade</option>
                      <option>GMT+01:00 Europe/Brussels</option>
                      <option>GMT+02:00 Africa/Cairo</option>
                      <option>GMT+02:00 Africa/Blantyre</option>
                      <option>GMT+02:00 Asia/Beirut</option>
                      <option>GMT+02:00 Asia/Damascus</option>
                      <option>GMT+02:00 Asia/Gaza</option>
                      <option>GMT+02:00 Asia/Jerusalem</option>
                      <option>GMT+03:00 Africa/Addis_Ababa</option>
                      <option>GMT+03:00 Asia/Riyadh89</option>
                      <option>GMT+03:00 Europe/Minsk</option>
                      <option>GMT+03:30 Asia/Tehran</option>
                      <option>GMT+04:00 Asia/Dubai</option>
                      <option>GMT+04:00 Asia/Yerevan</option>
                      <option>GMT+04:00 Europe/Moscow</option>
                      <option>GMT+04:30 Asia/Kabul</option>
                      <option>GMT+05:00 Asia/Tashkent</option>
                      <option>GMT+05:30 Asia/Kolkata</option>
                      <option>GMT+05:45 Asia/Katmandu</option>
                      <option>GMT+06:00 Asia/Dhaka</option>
                      <option>GMT+06:00 Asia/Yekaterinburg</option>
                      <option>GMT+06:30 Asia/Rangoon</option>
                      <option>GMT+07:00 Asia/Bangkok</option>
                      <option>GMT+07:00 Asia/Novosibirsk</option>
                      <option>GMT+08:00 Etc/GMT+8</option>
                      <option>GMT+08:00 Asia/Hong_Kong</option>
                      <option>GMT+08:00 Asia/Krasnoyarsk</option>
                      <option>GMT+08:00 Australia/Perth</option>
                      <option>GMT+08:45 Australia/Eucla</option>
                      <option>GMT+09:00 Asia/Irkutsk</option>
                      <option>GMT+09:00 Asia/Seoul</option>
                      <option>GMT+09:00 Asia/Tokyo</option>
                      <option>GMT+09:30 Australia/Adelaide</option>
                      <option>GMT+09:30 Australia/Darwin</option>
                      <option>GMT+09:30 Pacific/Marquesas</option>
                      <option>GMT+10:00 Etc/GMT+10</option>
                      <option>GMT+10:00 Australia/Brisbane</option>
                      <option>GMT+10:00 Australia/Hobart</option>
                      <option>GMT+10:00 Asia/Yakutsk</option>
                      <option>GMT+10:30 Australia/Lord_Howe</option>
                      <option>GMT+11:00 Asia/Vladivostok</option>
                      <option>GMT+11:30 Pacific/Norfolk</option>
                      <option>GMT+12:00 Etc/GMT+12</option>
                      <option>GMT+12:00 Asia/Anadyr</option>
                      <option>GMT+12:00 Asia/Magadan</option>
                      <option>GMT+12:00 Pacific/Auckland</option>
                      <option>GMT+12:45 Pacific/Chatham</option>
                      <option>GMT+13:00 Pacific/Tongatapu</option>
                      <option>GMT+14:00 Pacific/Kiritimati</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <div className="row g-3">
                      <div className="col-6">
                        <label className="text-body-highlight fw-bold mb-2">
                          Create Date
                        </label>
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          placeholder="dd / mm / yyyy"
                          data-options='{"disableMobile":true}'
                        />
                      </div>
                      <div className="col-6">
                        <label className="text-body-highlight fw-bold mb-2">
                          Start Time
                        </label>
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          placeholder="H:i"
                          data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="row g-3">
                      <div className="col-6">
                        <label className="text-body-highlight fw-bold mb-2">
                          Closing Date
                        </label>
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          placeholder="dd / mm / yyyy"
                          data-options='{"disableMobile":true}'
                        />
                      </div>
                      <div className="col-6">
                        <label className="text-body-highlight fw-bold mb-2">
                          Closing Time
                        </label>
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          placeholder="H:i"
                          data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-6">
                      <label className="text-body-highlight fw-bold mb-2">
                        Stage
                      </label>
                      <select className="form-select">
                        <option>Select</option>
                        <option>New</option>
                        <option>In Progress</option>
                        <option>Pending</option>
                        <option>Canceled</option>
                        <option>Completed</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label className="text-body-highlight fw-bold mb-2">
                        Priority
                      </label>
                      <select className="form-select">
                        <option>Urgent</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 pt-6 px-0 pb-0">
              <button
                className="btn btn-link text-danger px-3 my-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
              <button className="btn btn-primary my-0">Create Deal</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="addStageModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addStageModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4">
              <h3 className="mb-5 text-body-highlight">Create New Stage</h3>
              <div className="mb-4">
                <label className="mb-2 fw-bold text-body-highlight">
                  Column Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter stage name"
                />
              </div>
              <label className="mb-2 fw-bold text-body-highlight">
                Forecast Revenue
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="$  Enter amount"
              />
            </div>
            <div className="modal-footer border-0 pt-3 px-4 pb-4">
              <button
                className="btn btn-link text-danger px-4 m-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
              <button className="btn btn-primary px-6 m-0">
                Create New Stage
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Deals;
