import team from "../../../../assets/img/team/32.webp";
const listCustomer = () => {
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
        <div className="row g-2 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Customers</h2>
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
              <span>New </span>
              <span className="text-body-tertiary fw-semibold">(6)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Abandoned checkouts </span>
              <span className="text-body-tertiary fw-semibold">(17)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Locals </span>
              <span className="text-body-tertiary fw-semibold">(6,810)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Email subscribers </span>
              <span className="text-body-tertiary fw-semibold">(8)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>Top reviews </span>
              <span className="text-body-tertiary fw-semibold">(2)</span>
            </a>
          </li>
        </ul>
        <div
          id="products"
          data-list='{"valueNames":["customer","email","total-orders","total-spent","city","last-seen","last-order"],"page":10,"pagination":true}'
        >
          <div className="mb-4">
            <div className="row g-3">
              <div className="col-auto">
                <div className="search-box">
                  <form className="position-relative">
                    <input
                      className="form-control search-input search"
                      type="search"
                      placeholder="Search customers"
                      aria-label="Search"
                    />
                    <span className="fas fa-search search-box-icon" />
                  </form>
                </div>
              </div>
              <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
                <div className="btn-group position-static" role="group">
                  <div className="btn-group position-static text-nowrap">
                    <button
                      className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      {""}
                      Country
                      <span className="fas fa-angle-down ms-2" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          US
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Uk
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Australia
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-group position-static text-nowrap">
                    <button
                      className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-boundary="window"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      {""}
                      VIP
                      <span className="fas fa-angle-down ms-2" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          VIP 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          VIP 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          VIP 3
                        </a>
                      </li>
                      <li />
                    </ul>
                  </div>
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0">
                    More filters
                  </button>
                </div>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-phoenix-secondary flex-shrink-0"
                  type="button"
                >
                  <span className="fa-solid fa-file-export fs-9 me-2" />
                  Export
                </button>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar-overlay mx-n1 px-1">
              <table className="table table-sm fs-9 mb-0">
                <thead>
                  <tr>
                    <th className="white-space-nowrap fs-9 align-middle ps-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          id="checkbox-bulk-customers-select"
                          type="checkbox"
                          data-bulk-select='{"body":"customers-table-body"}'
                        />
                      </div>
                    </th>
                    <th
                      className="sort align-middle pe-5"
                      scope="col"
                      data-sort="customer"
                      style={{ width: "10%" }}
                    >
                      CUSTOMER
                    </th>
                    <th
                      className="sort align-middle pe-5"
                      scope="col"
                      data-sort="email"
                      style={{ width: "20%" }}
                    >
                      EMAIL
                    </th>
                    <th
                      className="sort align-middle"
                      scope="col"
                      data-sort="total-orders"
                      style={{ width: "10%" }}
                    >
                      ORDERS
                    </th>
                    <th
                      className="sort align-middle ps-3"
                      scope="col"
                      data-sort="total-spent"
                      style={{ width: "10%" }}
                    >
                      TOTAL SPENT
                    </th>
                    <th
                      className="sort align-middle ps-7"
                      scope="col"
                      data-sort="city"
                      style={{ width: "25%" }}
                    >
                      CITY
                    </th>
                    <th
                      className="sort align-middle"
                      scope="col"
                      data-sort="last-seen"
                      style={{ width: "15%" }}
                    >
                      LAST SEEN
                    </th>
                    <th
                      className="sort align-middle pe-0"
                      scope="col"
                      data-sort="last-order"
                      style={{ width: "10%", minWidth: 150 }}
                    >
                      LAST ORDER
                    </th>
                    <th className="sort align-middle pe-0 ps-4" scope="col" />
                  </tr>
                </thead>
                <tbody className="list" id="customers-table-body">
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"customer":{"avatar":"/team/32.webp","name":"Carry Anna"},"email":"annac34@gmail.com","city":"Budapest","totalOrders":89,"totalSpent":23987,"lastSeen":"34 min ago","lastOrder":"Dec 12, 12:56 PM"}'
                        />
                      </div>
                    </td>
                    <td className="customer align-middle white-space-nowrap pe-5">
                      <a
                        className="d-flex align-items-center text-body-emphasis"
                        href="customer-details.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                        <p className="mb-0 ms-3 text-body-emphasis fw-bold">
                          Carry Anna
                        </p>
                      </a>
                    </td>
                    <td className="email align-middle white-space-nowrap pe-5">
                      <a
                        className="fw-semibold"
                        href="mailto:annac34@gmail.com"
                      >
                        annac34@gmail.com
                      </a>
                    </td>
                    <td className="total-orders align-middle white-space-nowrap fw-semibold">
                      89
                    </td>
                    <td className="total-spent align-middle white-space-nowrap fw-bold ps-3 text-body-emphasis">
                      $ 23987
                    </td>
                    <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
                      Budapest
                    </td>
                    <td className="last-seen align-middle white-space-nowrap text-body-tertiary">
                      34 min ago
                    </td>
                    <td className="last-order align-middle white-space-nowrap text-body-tertiary">
                      Dec 12, 12:56 PM
                    </td>
                    <td className="align-middle white-space-nowrap pe-0 ps-4 btn-reveal-trigger">
                      <div className="btn-reveal-trigger position-static">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
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
                          <a
                            className="dropdown-item"
                            href="chi-tiet-khach-hang"
                          >
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
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"customer":{"avatar":"/team/avatar.webp","name":"Milind Mikuja","placeholder":true},"email":"mimiku@yahoo.com","city":"Manchester","totalOrders":76,"totalSpent":21567,"lastSeen":"6 hours ago","lastOrder":"Dec 9, 2:28 PM"}'
                        />
                      </div>
                    </td>
                    <td className="customer align-middle white-space-nowrap pe-5">
                      <a
                        className="d-flex align-items-center text-body-emphasis"
                        href="customer-details.html"
                      >
                        <div className="avatar avatar-m">
                          <img
                            className="rounded-circle avatar-placeholder"
                            src={team}
                            alt
                          />
                        </div>
                        <p className="mb-0 ms-3 text-body-emphasis fw-bold">
                          Milind Mikuja
                        </p>
                      </a>
                    </td>
                    <td className="email align-middle white-space-nowrap pe-5">
                      <a className="fw-semibold" href="mailto:mimiku@yahoo.com">
                        mimiku@yahoo.com
                      </a>
                    </td>
                    <td className="total-orders align-middle white-space-nowrap fw-semibold text-body-highlight">
                      76
                    </td>
                    <td className="total-spent align-middle white-space-nowrap fw-bold ps-3 text-body-emphasis">
                      $ 21567
                    </td>
                    <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
                      Manchester
                    </td>
                    <td className="last-seen align-middle white-space-nowrap text-body-tertiary">
                      6 hours ago
                    </td>
                    <td className="last-order align-middle white-space-nowrap text-body-tertiary">
                      Dec 9, 2:28 PM
                    </td>
                    <td className="align-middle white-space-nowrap pe-0 ps-4 btn-reveal-trigger">
                      <div className="btn-reveal-trigger position-static">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
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
                          <a
                            className="dropdown-item"
                            href="chi-tiet-khach-hang"
                          >
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
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"customer":{"avatar":"/team/35.webp","name":"Stanly Drinkwater"},"email":"stnlwasser@hotmail.com","city":"Smallville","totalOrders":69,"totalSpent":19872,"lastSeen":"43 min ago","lastOrder":"Dec 4, 12:56 PM"}'
                        />
                      </div>
                    </td>
                    <td className="customer align-middle white-space-nowrap pe-5">
                      <a
                        className="d-flex align-items-center text-body-emphasis"
                        href="customer-details.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                        <p className="mb-0 ms-3 text-body-emphasis fw-bold">
                          Stanly Drinkwater
                        </p>
                      </a>
                    </td>
                    <td className="email align-middle white-space-nowrap pe-5">
                      <a
                        className="fw-semibold"
                        href="mailto:stnlwasser@hotmail.com"
                      >
                        stnlwasser@hotmail.com
                      </a>
                    </td>
                    <td className="total-orders align-middle white-space-nowrap fw-semibold text-body-highlight">
                      69
                    </td>
                    <td className="total-spent align-middle white-space-nowrap fw-bold ps-3 text-body-emphasis">
                      $ 19872
                    </td>
                    <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
                      Smallville
                    </td>
                    <td className="last-seen align-middle white-space-nowrap text-body-tertiary">
                      43 min ago
                    </td>
                    <td className="last-order align-middle white-space-nowrap text-body-tertiary">
                      Dec 4, 12:56 PM
                    </td>
                    <td className="align-middle white-space-nowrap pe-0 ps-4 btn-reveal-trigger">
                      <div className="btn-reveal-trigger position-static">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
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
                          <a
                            className="dropdown-item"
                            href="chi-tiet-khach-hang"
                          >
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
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"customer":{"avatar":"/team/57.webp","name":"Josef Stravinsky"},"email":"Josefsky@sni.it","city":"Metropolis","totalOrders":67,"totalSpent":17996,"lastSeen":"2 hours ago","lastOrder":"Dec 1,  4:07 AM"}'
                        />
                      </div>
                    </td>
                    <td className="customer align-middle white-space-nowrap pe-5">
                      <a
                        className="d-flex align-items-center text-body-emphasis"
                        href="customer-details.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                        <p className="mb-0 ms-3 text-body-emphasis fw-bold">
                          Josef Stravinsky
                        </p>
                      </a>
                    </td>
                    <td className="email align-middle white-space-nowrap pe-5">
                      <a className="fw-semibold" href="mailto:Josefsky@sni.it">
                        Josefsky@sni.it
                      </a>
                    </td>
                    <td className="total-orders align-middle white-space-nowrap fw-semibold text-body-highlight">
                      67
                    </td>
                    <td className="total-spent align-middle white-space-nowrap fw-bold ps-3 text-body-emphasis">
                      $ 17996
                    </td>
                    <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
                      Metropolis
                    </td>
                    <td className="last-seen align-middle white-space-nowrap text-body-tertiary">
                      2 hours ago
                    </td>
                    <td className="last-order align-middle white-space-nowrap text-body-tertiary">
                      Dec 1, 4:07 AM
                    </td>
                    <td className="align-middle white-space-nowrap pe-0 ps-4 btn-reveal-trigger">
                      <div className="btn-reveal-trigger position-static">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
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
                          <a
                            className="dropdown-item"
                            href="chi-tiet-khach-hang"
                          >
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
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"customer":{"avatar":"/team/58.webp","name":"Igor Borvibson"},"email":"vibigorr@technext.it","city":"Central city","totalOrders":61,"totalSpent":16785,"lastSeen":"5 days ago","lastOrder":"Nov 28, 7:28 PM"}'
                        />
                      </div>
                    </td>
                    <td className="customer align-middle white-space-nowrap pe-5">
                      <a
                        className="d-flex align-items-center text-body-emphasis"
                        href="customer-details.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                        <p className="mb-0 ms-3 text-body-emphasis fw-bold">
                          Igor Borvibson
                        </p>
                      </a>
                    </td>
                    <td className="email align-middle white-space-nowrap pe-5">
                      <a
                        className="fw-semibold"
                        href="mailto:vibigorr@technext.it"
                      >
                        vibigorr@technext.it
                      </a>
                    </td>
                    <td className="total-orders align-middle white-space-nowrap fw-semibold text-body-highlight">
                      61
                    </td>
                    <td className="total-spent align-middle white-space-nowrap fw-bold ps-3 text-body-emphasis">
                      $ 16785
                    </td>
                    <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
                      Central city
                    </td>
                    <td className="last-seen align-middle white-space-nowrap text-body-tertiary">
                      5 days ago
                    </td>
                    <td className="last-order align-middle white-space-nowrap text-body-tertiary">
                      Nov 28, 7:28 PM
                    </td>
                    <td className="align-middle white-space-nowrap pe-0 ps-4 btn-reveal-trigger">
                      <div className="btn-reveal-trigger position-static">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
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
                          <a
                            className="dropdown-item"
                            href="chi-tiet-khach-hang"
                          >
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
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"customer":{"avatar":"/team/59.webp","name":"Katerina Karenin"},"email":"karkat99@gmail.com","city":"Gotham","totalOrders":58,"totalSpent":14956,"lastSeen":"2 weeks ago","lastOrder":"Nov 24, 10:16 AM"}'
                        />
                      </div>
                    </td>
                    <td className="customer align-middle white-space-nowrap pe-5">
                      <a
                        className="d-flex align-items-center text-body-emphasis"
                        href="customer-details.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                        <p className="mb-0 ms-3 text-body-emphasis fw-bold">
                          Katerina Karenin
                        </p>
                      </a>
                    </td>
                    <td className="email align-middle white-space-nowrap pe-5">
                      <a
                        className="fw-semibold"
                        href="mailto:karkat99@gmail.com"
                      >
                        karkat99@gmail.com
                      </a>
                    </td>
                    <td className="total-orders align-middle white-space-nowrap fw-semibold text-body-highlight">
                      58
                    </td>
                    <td className="total-spent align-middle white-space-nowrap fw-bold ps-3 text-body-emphasis">
                      $ 14956
                    </td>
                    <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
                      Gotham
                    </td>
                    <td className="last-seen align-middle white-space-nowrap text-body-tertiary">
                      2 weeks ago
                    </td>
                    <td className="last-order align-middle white-space-nowrap text-body-tertiary">
                      Nov 24, 10:16 AM
                    </td>
                    <td className="align-middle white-space-nowrap pe-0 ps-4 btn-reveal-trigger">
                      <div className="btn-reveal-trigger position-static">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
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
                          <a
                            className="dropdown-item"
                            href="chi-tiet-khach-hang"
                          >
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
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"customer":{"avatar":"","name":"Roy Anderson"},"email":"andersonroy@netflix.chill","city":"Vancouver","totalOrders":52,"totalSpent":12509,"lastSeen":"4 days ago","lastOrder":"Nov 18, 5:43 PM"}'
                        />
                      </div>
                    </td>
                    <td className="customer align-middle white-space-nowrap pe-5">
                      <a
                        className="d-flex align-items-center text-body-emphasis"
                        href="customer-details.html"
                      >
                        <div className="avatar avatar-m">
                          <div className="avatar-name rounded-circle">
                            <span>R</span>
                          </div>
                        </div>
                        <p className="mb-0 ms-3 text-body-emphasis fw-bold">
                          Roy Anderson
                        </p>
                      </a>
                    </td>
                    <td className="email align-middle white-space-nowrap pe-5">
                      <a
                        className="fw-semibold"
                        href="mailto:andersonroy@netflix.chill"
                      >
                        andersonroy@netflix.chill
                      </a>
                    </td>
                    <td className="total-orders align-middle white-space-nowrap fw-semibold text-body-highlight">
                      52
                    </td>
                    <td className="total-spent align-middle white-space-nowrap fw-bold ps-3 text-body-emphasis">
                      $ 12509
                    </td>
                    <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
                      Vancouver
                    </td>
                    <td className="last-seen align-middle white-space-nowrap text-body-tertiary">
                      4 days ago
                    </td>
                    <td className="last-order align-middle white-space-nowrap text-body-tertiary">
                      Nov 18, 5:43 PM
                    </td>
                    <td className="align-middle white-space-nowrap pe-0 ps-4 btn-reveal-trigger">
                      <div className="btn-reveal-trigger position-static">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
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
                          <a
                            className="dropdown-item"
                            href="chi-tiet-khach-hang"
                          >
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
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="fs-9 align-middle ps-0 py-3">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-bulk-select-row='{"customer":{"avatar":"/team/31.webp","name":"Martina scorcese"},"email":"cesetina1@gmail.com","city":"Viena","totalOrders":49,"totalSpent":11003,"lastSeen":"6 min ago","lastOrder":"Nov 18, 2:09 AM"}'
                        />
                      </div>
                    </td>
                    <td className="customer align-middle white-space-nowrap pe-5">
                      <a
                        className="d-flex align-items-center text-body-emphasis"
                        href="customer-details.html"
                      >
                        <div className="avatar avatar-m">
                          <img className="rounded-circle" src={team} alt />
                        </div>
                        <p className="mb-0 ms-3 text-body-emphasis fw-bold">
                          Martina scorcese
                        </p>
                      </a>
                    </td>
                    <td className="email align-middle white-space-nowrap pe-5">
                      <a
                        className="fw-semibold"
                        href="mailto:cesetina1@gmail.com"
                      >
                        cesetina1@gmail.com
                      </a>
                    </td>
                    <td className="total-orders align-middle white-space-nowrap fw-semibold text-body-highlight">
                      49
                    </td>
                    <td className="total-spent align-middle white-space-nowrap fw-bold ps-3 text-body-emphasis">
                      $ 11003
                    </td>
                    <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
                      Viena
                    </td>
                    <td className="last-seen align-middle white-space-nowrap text-body-tertiary">
                      6 min ago
                    </td>
                    <td className="last-order align-middle white-space-nowrap text-body-tertiary">
                      Nov 18, 2:09 AM
                    </td>
                    <td className="align-middle white-space-nowrap pe-0 ps-4 btn-reveal-trigger">
                      <div className="btn-reveal-trigger position-static">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
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
                          <a
                            className="dropdown-item"
                            href="chi-tiet-khach-hang"
                          >
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
export default listCustomer;
