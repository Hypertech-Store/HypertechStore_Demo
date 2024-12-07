import customer from "../../../assets/img/team/32.webp";
const Order = () => {
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
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Orders</h2>
          </div>
        </div>
        <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <span>All </span>
              <span className="text-body-tertiary fw-semibold">(68817)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Pending payment </span>
              <span className="text-body-tertiary fw-semibold">(6)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Unfulfilled </span>
              <span className="text-body-tertiary fw-semibold">(17)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Completed</span>
              <span className="text-body-tertiary fw-semibold">(6,810)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Refunded</span>
              <span className="text-body-tertiary fw-semibold">(8)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Failed</span>
              <span className="text-body-tertiary fw-semibold">(2)</span>
            </a>
          </li>
        </ul>
        <div
          id="orderTable"
          data-list='{"valueNames":["order","total","customer","payment_status","fulfilment_status","delivery_type","date"],"page":10,"pagination":true}'
        >
          <div className="mb-4">
            <div className="row g-3">
              <div className="col-auto">
                <div className="search-box">
                  <form className="position-relative">
                    <input
                      className="form-control search-input search"
                      type="search"
                      placeholder="Search orders"
                      aria-label="Search"
                    />
                    <span className="fas fa-search search-box-icon" />
                  </form>
                </div>
              </div>
              <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
                <div className="btn-group position-static" role="group">
                  <div
                    className="btn-group position-static text-nowrap"
                    role="group"
                  >
                    <button
                      className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      Payment status
                      <span className="fas fa-angle-down ms-2" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="btn-group position-static text-nowrap"
                    role="group"
                  >
                    <button
                      className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      Fulfilment status
                      <span className="fas fa-angle-down ms-2" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0">
                    More filters
                  </button>
                </div>
              </div>
              <div className="col-auto">
                <button className="btn btn-link text-body me-4 px-0">
                  <span className="fa-solid fa-file-export fs-9 me-2" />
                  Export
                </button>
                <button className="btn btn-primary">
                  <span className="fas fa-plus me-2" />
                  Add order
                </button>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table table-sm fs-9 mb-0">
                <thead>
                  <tr>
                    <th
                      className="white-space-nowrap fs-9 align-middle ps-0"
                      style={{ width: 26 }}
                    >
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          id="checkbox-bulk-order-select"
                          type="checkbox"
                          data-bulk-select='{"body":"order-table-body"}'
                        />
                      </div>
                    </th>
                    <th
                      className="sort white-space-nowrap align-middle pe-3"
                      scope="col"
                      data-sort="order"
                      style={{ width: "5%" }}
                    >
                      ORDER
                    </th>
                    <th
                      className="sort align-middle text-end"
                      scope="col"
                      data-sort="total"
                      style={{ width: "6%" }}
                    >
                      TOTAL
                    </th>
                    <th
                      className="sort align-middle ps-8"
                      scope="col"
                      data-sort="customer"
                      style={{ width: "28%", minWidth: 250 }}
                    >
                      CUSTOMER
                    </th>
                    <th
                      className="sort align-middle pe-3"
                      scope="col"
                      data-sort="payment_status"
                      style={{ width: "10%" }}
                    >
                      PAYMENT STATUS
                    </th>
                    <th
                      className="sort align-middle text-start pe-3"
                      scope="col"
                      data-sort="fulfilment_status"
                      style={{ width: "12%", minWidth: 200 }}
                    >
                      FULFILMENT STATUS
                    </th>
                    <th
                      className="sort align-middle text-start"
                      scope="col"
                      data-sort="delivery_type"
                      style={{ width: "30%" }}
                    >
                      DELIVERY TYPE
                    </th>
                    <th
                      className="sort align-middle text-end pe-0"
                      scope="col"
                      data-sort="date"
                    >
                      DATE
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="order-table-body">
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2453,"total":87,"customer":{"avatar":"/team/32.webp","name":"Carry Anna"},"payment_status":{"label":"Complete","type":"badge-phoenix-success","icon":"check"},"fulfilment_status":{"label":"Cancelled","type":"badge-phoenix-secondary","icon":"x"},"delivery_type":"Cash on delivery","date":"Dec 12, 12:56 PM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2453
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $87
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Carry Anna</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Complete</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                        <span className="badge-label">Cancelled</span>
                        <span
                          className="ms-1"
                          data-feather="x"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Cash on delivery
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Dec 12, 12:56 PM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2452,"total":7264,"customer":{"avatar":"","name":"Milind Mikuja"},"fulfilment_status":{"label":"Ready to pickup","type":"badge-phoenix-info","icon":"info"},"payment_status":{"label":"Cancelled","type":"badge-phoenix-secondary","icon":"x"},"delivery_type":"Free shipping","date":"Dec 9, 2:28PM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2452
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $7264
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <div className="avatar-name rounded-circle">
                            <span>M</span>
                          </div>
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Milind Mikuja</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                        <span className="badge-label">Cancelled</span>
                        <span
                          className="ms-1"
                          data-feather="x"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                        <span className="badge-label">Ready to pickup</span>
                        <span
                          className="ms-1"
                          data-feather="info"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Free shipping
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Dec 9, 2:28PM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2451,"total":375,"customer":{"avatar":"/team/35.webp","name":"Stanly Drinkwater"},"payment_status":{"label":"Pending","type":"badge-phoenix-warning","icon":"clock"},"fulfilment_status":{"label":"Completed","type":"badge-phoenix-success","icon":"check"},"delivery_type":"Local pickup","date":"Dec 4, 12:56 PM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2451
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $375
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">
                          Stanly Drinkwater
                        </h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                        <span className="badge-label">Pending</span>
                        <span
                          className="ms-1"
                          data-feather="clock"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Completed</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Local pickup
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Dec 4, 12:56 PM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2450,"total":657,"customer":{"avatar":"/team/57.webp","name":"Josef Stravinsky"},"payment_status":{"label":"Cancelled","type":"badge-phoenix-secondary","icon":"x"},"fulfilment_status":{"label":"Partially Fulfiled","type":"badge-phoenix-warning","icon":"clock"},"delivery_type":"Standard shipping","date":"Dec 1, 4:07 AM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2450
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $657
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">
                          Josef Stravinsky
                        </h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                        <span className="badge-label">Cancelled</span>
                        <span
                          className="ms-1"
                          data-feather="x"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                        <span className="badge-label">Partially Fulfiled</span>
                        <span
                          className="ms-1"
                          data-feather="clock"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Standard shipping
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Dec 1, 4:07 AM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2449,"total":9562,"customer":{"avatar":"/team/58.webp","name":"Igor Borvibson"},"payment_status":{"label":"Failed","type":"badge-phoenix-danger","icon":"x"},"fulfilment_status":{"label":"Partially Fulfiled","type":"badge-phoenix-success","icon":"check"},"delivery_type":"Express","date":"Nov 28, 7:28 PM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2449
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $9562
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Igor Borvibson</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                        <span className="badge-label">Failed</span>
                        <span
                          className="ms-1"
                          data-feather="x"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Partially Fulfiled</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Express
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Nov 28, 7:28 PM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2448,"total":46,"customer":{"avatar":"/team/59.webp","name":"Katerina Karenin"},"payment_status":{"label":"Paid","type":"badge-phoenix-success","icon":"check"},"fulfilment_status":{"label":"Unfulfiled","type":"badge-phoenix-danger","icon":"x"},"delivery_type":"Local delivery","date":"Nov 24, 10:16 AM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2448
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $46
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">
                          Katerina Karenin
                        </h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Paid</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                        <span className="badge-label">Unfulfiled</span>
                        <span
                          className="ms-1"
                          data-feather="x"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Local delivery
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Nov 24, 10:16 AM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2447,"total":953,"customer":{"avatar":"","name":"Roy Anderson"},"payment_status":{"label":"Pending","type":"badge-phoenix-warning","icon":"clock"},"fulfilment_status":{"label":"Fulfiled","type":"badge-phoenix-success","icon":"check"},"delivery_type":"Cash on delivery","date":"Nov 18, 5:43 PM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2447
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $953
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Roy Anderson</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                        <span className="badge-label">Pending</span>
                        <span
                          className="ms-1"
                          data-feather="clock"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Fulfiled</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Cash on delivery
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Nov 18, 5:43 PM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2446,"total":12,"customer":{"avatar":"/team/31.webp","name":"Martina scorcese"},"payment_status":{"label":"Pending","type":"badge-phoenix-warning","icon":"clock"},"fulfilment_status":{"label":"Fulfiled","type":"badge-phoenix-success","icon":"check"},"delivery_type":"Standard shipping","date":"Nov 18, 2:09 AM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2446
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $12
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">
                          Martina scorcese
                        </h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                        <span className="badge-label">Pending</span>
                        <span
                          className="ms-1"
                          data-feather="clock"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Fulfiled</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Standard shipping
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Nov 18, 2:09 AM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2445,"total":3927,"customer":{"avatar":"/team/33.webp","name":"Luis Bunuel"},"payment_status":{"label":"Paid","type":"badge-phoenix-success","icon":"check"},"fulfilment_status":{"label":"Canceled","type":"badge-phoenix-secondary","icon":"x"},"delivery_type":"Cash on delivery","date":"Nov 16, 3:22 PM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2445
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $3927
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Luis Bunuel</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Paid</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                        <span className="badge-label">Canceled</span>
                        <span
                          className="ms-1"
                          data-feather="x"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Cash on delivery
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Nov 16, 3:22 PM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2444,"total":5937,"customer":{"avatar":"/team/34.webp","name":"Jean Renoir"},"payment_status":{"label":"Paid","type":"badge-phoenix-success","icon":"check"},"fulfilment_status":{"label":"Ready to pickup","type":"badge-phoenix-secondary","icon":"info"},"delivery_type":"Local pickup","date":"Nov 09, 8:49 AM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2444
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $5937
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Jean Renoir</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Paid</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                        <span className="badge-label">Ready to pickup</span>
                        <span
                          className="ms-1"
                          data-feather="info"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Local pickup
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Nov 09, 8:49 AM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2443,"total":124,"customer":{"avatar":"/team/29.webp","name":"Ricky Antony"},"payment_status":{"label":"Failed","type":"badge-phoenix-danger","icon":"x"},"fulfilment_status":{"label":"Unfulfiled","type":"badge-phoenix-danger","icon":"x"},"delivery_type":"Cash on delivery","date":"Nov 05, 4:35 PM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2443
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $124
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Ricky Antony</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                        <span className="badge-label">Failed</span>
                        <span
                          className="ms-1"
                          data-feather="x"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                        <span className="badge-label">Unfulfiled</span>
                        <span
                          className="ms-1"
                          data-feather="x"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Cash on delivery
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Nov 05, 4:35 PM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2442,"total":542,"customer":{"avatar":"/team/3.webp","name":"Emma Watson"},"payment_status":{"label":"Pending","type":"badge-phoenix-warning","icon":"clock"},"fulfilment_status":{"label":"Fulfiled","type":"badge-phoenix-success","icon":"check"},"delivery_type":"Standard shipping","date":"Nov 05, 12:00 PM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2442
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $542
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Emma Watson</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                        <span className="badge-label">Pending</span>
                        <span
                          className="ms-1"
                          data-feather="clock"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Fulfiled</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Standard shipping
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Nov 05, 12:00 PM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2441,"total":1480,"customer":{"avatar":"/team/avatar.webp","name":"Jennifer Schramm","placeholder":true},"payment_status":{"label":"Paid","type":"badge-phoenix-success","icon":"check"},"fulfilment_status":{"label":"Ready to pickup","type":"badge-phoenix-info","icon":"info"},"delivery_type":"Local delivery","date":"Nov 02, 2:00 AM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2441
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $1480
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img
                            className="rounded-circle avatar-placeholder"
                            src={customer}
                            alt
                          />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">
                          Jennifer Schramm
                        </h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Paid</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                        <span className="badge-label">Ready to pickup</span>
                        <span
                          className="ms-1"
                          data-feather="info"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Local delivery
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Nov 02, 2:00 AM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2440,"total":80,"customer":{"avatar":"/team/25.webp","name":"Michael Jenkins"},"payment_status":{"label":"Cancelled","type":"badge-phoenix-secondary","icon":"x"},"fulfilment_status":{"label":"Unfulfiled","type":"badge-phoenix-danger","icon":"x"},"delivery_type":"Free shipping","date":"Oct 30, 4:25 PM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2440
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $80
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Michael Jenkins</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                        <span className="badge-label">Cancelled</span>
                        <span
                          className="ms-1"
                          data-feather="x"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                        <span className="badge-label">Unfulfiled</span>
                        <span
                          className="ms-1"
                          data-feather="x"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Free shipping
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Oct 30, 4:25 PM
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle px-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"order":2439,"total":999,"customer":{"avatar":"/team/32.webp","name":"Raymond Mims"},"payment_status":{"label":"Pending","type":"badge-phoenix-warning","icon":"clock"},"fulfilment_status":{"label":"Fulfiled","type":"badge-phoenix-success","icon":"check"},"delivery_type":"Cash on delivery","date":"Oct 28, 3:00 PM"}'
                        />
                      </div>
                    </td>
                    <td className="order align-middle white-space-nowrap py-0">
                      <a className="fw-semibold" href="#!">
                        #2439
                      </a>
                    </td>
                    <td className="total align-middle text-end fw-semibold text-body-highlight">
                      $999
                    </td>
                    <td className="customer align-middle white-space-nowrap ps-8">
                      <a
                        className="d-flex align-items-center text-body"
                        href="../landing/profile.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={customer} alt />
                        </div>
                        <h6 className="mb-0 ms-3 text-body">Raymond Mims</h6>
                      </a>
                    </td>
                    <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                        <span className="badge-label">Pending</span>
                        <span
                          className="ms-1"
                          data-feather="clock"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                      <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                        <span className="badge-label">Fulfiled</span>
                        <span
                          className="ms-1"
                          data-feather="check"
                          style={{ height: "12.8px", width: "12.8px" }}
                        />
                      </span>
                    </td>
                    <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                      Cash on delivery
                    </td>
                    <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                      Oct 28, 3:00 PM
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
                <button className="page-link" data-list-pagination="prev">
                  <span className="fas fa-chevron-left" />
                </button>
                <ul className="mb-0 pagination" />
                <button className="page-link pe-0" data-list-pagination="next">
                  <span className="fas fa-chevron-right" />
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
  );
};
export default Order;
