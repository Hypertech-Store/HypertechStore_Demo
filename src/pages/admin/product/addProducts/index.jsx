import icon from "../../../../assets/img/icons/image-icon.png";
const AddProducts = () => {
  const navbarTopShape = window.config?.config?.phoenixNavbarTopShape;
  const navbarPosition = window.config?.config?.phoenixNavbarPosition;

  const body = document.querySelector("body");
  const navbarDefault = document.querySelector("#navbarDefault");
  const navbarTop = document.querySelector("#navbarTop");
  const topNavSlim = document.querySelector("#topNavSlim");
  const navbarTopSlim = document.querySelector("#navbarTopSlim");
  const navbarCombo = document.querySelector("#navbarCombo");
  const navbarComboSlim = document.querySelector("#navbarComboSlim");
  const dualNav = document.querySelector("#dualNav");
  const navbarVertical = document.querySelector(".navbar-vertical");
  const documentElement = document.documentElement;

  if (navbarPosition === "dual-nav") {
    topNavSlim?.remove();
    navbarTop?.remove();
    navbarTopSlim?.remove();
    navbarCombo?.remove();
    navbarComboSlim?.remove();
    navbarDefault?.remove();
    navbarVertical?.remove();
    dualNav?.removeAttribute("style");
    documentElement.setAttribute("data-navigation-type", "dual");
  } else if (navbarTopShape === "slim" && navbarPosition === "vertical") {
    navbarDefault?.remove();
    navbarTop?.remove();
    navbarTopSlim?.remove();
    navbarCombo?.remove();
    navbarComboSlim?.remove();
    topNavSlim.style.display = "block";
    navbarVertical.style.display = "inline-block";
    documentElement.setAttribute("data-navbar-horizontal-shape", "slim");
  } else if (navbarTopShape === "slim" && navbarPosition === "horizontal") {
    navbarDefault?.remove();
    navbarVertical?.remove();
    navbarTop?.remove();
    topNavSlim?.remove();
    navbarCombo?.remove();
    navbarComboSlim?.remove();
    dualNav?.remove();
    navbarTopSlim.removeAttribute("style");
    documentElement.setAttribute("data-navbar-horizontal-shape", "slim");
  } else if (navbarTopShape === "slim" && navbarPosition === "combo") {
    navbarDefault?.remove();
    navbarTop?.remove();
    topNavSlim?.remove();
    navbarCombo?.remove();
    navbarTopSlim?.remove();
    dualNav?.remove();
    navbarComboSlim.removeAttribute("style");
    navbarVertical.removeAttribute("style");
    documentElement.setAttribute("data-navbar-horizontal-shape", "slim");
  } else if (navbarTopShape === "default" && navbarPosition === "horizontal") {
    navbarDefault?.remove();
    topNavSlim?.remove();
    navbarVertical?.remove();
    navbarTopSlim?.remove();
    navbarCombo?.remove();
    navbarComboSlim?.remove();
    dualNav?.remove();
    navbarTop.removeAttribute("style");
    documentElement.setAttribute("data-navigation-type", "horizontal");
  } else if (navbarTopShape === "default" && navbarPosition === "combo") {
    topNavSlim?.remove();
    navbarTop?.remove();
    navbarTopSlim?.remove();
    navbarDefault?.remove();
    navbarComboSlim?.remove();
    dualNav?.remove();
    navbarCombo.removeAttribute("style");
    navbarVertical.removeAttribute("style");
    documentElement.setAttribute("data-navigation-type", "combo");
  } else {
    topNavSlim?.remove();
    navbarTop?.remove();
    navbarTopSlim?.remove();
    navbarCombo?.remove();
    navbarComboSlim?.remove();
    dualNav?.remove();
    navbarDefault?.removeAttribute("style");
    navbarVertical?.removeAttribute("style");
  }

  const navbarTopStyle = window.config?.config?.phoenixNavbarTopStyle;
  const navbarTopEl = document.querySelector(".navbar-top");
  if (navbarTopStyle === "darker") {
    navbarTopEl?.setAttribute("data-navbar-appearance", "darker");
  }

  const navbarVerticalStyle = window.config?.config?.phoenixNavbarVerticalStyle;
  if (navbarVerticalStyle === "darker") {
    navbarVertical?.setAttribute("data-navbar-appearance", "darker");
  }
  return (
    <>
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
        <form className="mb-9">
          <div className="row g-3 flex-between-end mb-5">
            <div className="col-auto">
              <h2 className="mb-2">Add a product</h2>
              <h5 className="text-body-tertiary fw-semibold">
                Orders placed across your store
              </h5>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-phoenix-secondary me-2 mb-2 mb-sm-0"
                type="button"
              >
                Discard
              </button>
              <button
                className="btn btn-phoenix-primary me-2 mb-2 mb-sm-0"
                type="button"
              >
                Save draft
              </button>
              <button className="btn btn-primary mb-2 mb-sm-0" type="submit">
                Publish product
              </button>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-xl-8">
              <h4 className="mb-3">Product Title</h4>
              <input
                className="form-control mb-5"
                type="text"
                placeholder="Write title here..."
              />
              <div className="mb-6">
                <h4 className="mb-3"> Product Description</h4>

                <textarea
                  className="form-control"
                  id="floatingTextarea2"
                  placeholder="Leave a comment here"
                  style={{ height: 100 }}
                  defaultValue={""}
                />
              </div>
              <h4 className="mb-3">Display images</h4>
              <div
                className="dropzone dropzone-multiple p-0 mb-5"
                id="my-awesome-dropzone"
                data-dropzone="data-dropzone"
              >
                <div className="fallback">
                  <input name="file" type="file" multiple="multiple" />
                </div>
                <div className="dz-preview d-flex flex-wrap">
                  <div
                    className="border border-translucent bg-body-emphasis rounded-3 d-flex flex-center position-relative me-2 mb-2"
                    style={{ height: 80, width: 80 }}
                  >
                    <img
                      className="dz-image"
                      src="../../../assets/img/products/23.png"
                      alt="..."
                      data-dz-thumbnail="data-dz-thumbnail"
                    />
                    <a
                      className="dz-remove text-body-quaternary"
                      href="#!"
                      data-dz-remove="data-dz-remove"
                    >
                      <span data-feather="x" />
                    </a>
                  </div>
                </div>
                <div
                  className="dz-message text-body-tertiary text-opacity-85"
                  data-dz-message="data-dz-message"
                >
                  Drag your photo here
                  <span className="text-body-secondary px-1">or</span>
                  <button className="btn btn-link p-0" type="button">
                    Browse from device
                  </button>
                  <br />
                  <img className="mt-3 me-2" src={icon} width={40} alt />
                </div>
              </div>
              <h4 className="mb-3">Inventory</h4>
              <div className="row g-0 border-top border-bottom">
                <div className="col-sm-4">
                  <div
                    className="nav flex-sm-column border-bottom border-bottom-sm-0 border-end-sm fs-9 vertical-tab h-100 justify-content-between"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center active"
                      id="pricingTab"
                      data-bs-toggle="tab"
                      data-bs-target="#pricingTabContent"
                      role="tab"
                      aria-controls="pricingTabContent"
                      aria-selected="true"
                    >
                      {""}
                      <span
                        className="me-sm-2 fs-4 nav-icons"
                        data-feather="tag"
                      />
                      <span className="d-none d-sm-inline">Pricing</span>
                    </a>
                    <a
                      className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center"
                      id="restockTab"
                      data-bs-toggle="tab"
                      data-bs-target="#restockTabContent"
                      role="tab"
                      aria-controls="restockTabContent"
                      aria-selected="false"
                    >
                      {""}
                      <span
                        className="me-sm-2 fs-4 nav-icons"
                        data-feather="package"
                      />
                      <span className="d-none d-sm-inline">Restock</span>
                    </a>
                    <a
                      className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center"
                      id="shippingTab"
                      data-bs-toggle="tab"
                      data-bs-target="#shippingTabContent"
                      role="tab"
                      aria-controls="shippingTabContent"
                      aria-selected="false"
                    >
                      {""}
                      <span
                        className="me-sm-2 fs-4 nav-icons"
                        data-feather="truck"
                      />
                      <span className="d-none d-sm-inline">Shipping</span>
                    </a>
                    <a
                      className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center"
                      id="productsTab"
                      data-bs-toggle="tab"
                      data-bs-target="#productsTabContent"
                      role="tab"
                      aria-controls="productsTabContent"
                      aria-selected="false"
                    >
                      {""}
                      <span
                        className="me-sm-2 fs-4 nav-icons"
                        data-feather="globe"
                      />
                      <span className="d-none d-sm-inline">
                        Global Delivery
                      </span>
                    </a>
                    <a
                      className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center"
                      id="attributesTab"
                      data-bs-toggle="tab"
                      data-bs-target="#attributesTabContent"
                      role="tab"
                      aria-controls="attributesTabContent"
                      aria-selected="false"
                    >
                      {""}
                      <span
                        className="me-sm-2 fs-4 nav-icons"
                        data-feather="sliders"
                      />
                      <span className="d-none d-sm-inline">Attributes</span>
                    </a>
                    <a
                      className="nav-link text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center"
                      id="advancedTab"
                      data-bs-toggle="tab"
                      data-bs-target="#advancedTabContent"
                      role="tab"
                      aria-controls="advancedTabContent"
                      aria-selected="false"
                    >
                      {""}
                      <span
                        className="me-sm-2 fs-4 nav-icons"
                        data-feather="lock"
                      />
                      <span className="d-none d-sm-inline">Advanced</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="tab-content py-3 ps-sm-4 h-100">
                    <div
                      className="tab-pane fade show active"
                      id="pricingTabContent"
                      role="tabpanel"
                    >
                      <h4 className="mb-3 d-sm-none">Pricing</h4>
                      <div className="row g-3">
                        <div className="col-12 col-lg-6">
                          <h5 className="mb-2 text-body-highlight">
                            Regular price
                          </h5>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="$$$"
                          />
                        </div>
                        <div className="col-12 col-lg-6">
                          <h5 className="mb-2 text-body-highlight">
                            Sale price
                          </h5>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="$$$"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade h-100"
                      id="restockTabContent"
                      role="tabpanel"
                      aria-labelledby="restockTab"
                    >
                      <div className="d-flex flex-column h-100">
                        <h5 className="mb-3 text-body-highlight">
                          Add to Stock
                        </h5>
                        <div className="row g-3 flex-1 mb-4">
                          <div className="col-sm-7">
                            <input
                              className="form-control"
                              type="number"
                              placeholder="Quantity"
                            />
                          </div>
                          <div className="col-sm">
                            <button className="btn btn-primary" type="button">
                              <span className="fa-solid fa-check me-1 fs-10" />
                              Confirm
                            </button>
                          </div>
                        </div>
                        <table>
                          <thead>
                            <tr>
                              <th style={{ width: 200 }} />
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-body-highlight fw-bold py-1">
                                Product in stock now:
                              </td>
                              <td className="text-body-tertiary fw-semibold py-1">
                                $1,090
                                <button className="btn p-0" type="button">
                                  <span
                                    className="fa-solid fa-rotate text-body ms-1"
                                    style={{ "--phoenix-text-opacity": ".6" }}
                                  />
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-body-highlight fw-bold py-1">
                                Product in transit:
                              </td>
                              <td className="text-body-tertiary fw-semibold py-1">
                                5000
                              </td>
                            </tr>
                            <tr>
                              <td className="text-body-highlight fw-bold py-1">
                                Last time restocked:
                              </td>
                              <td className="text-body-tertiary fw-semibold py-1">
                                30th June, 2021
                              </td>
                            </tr>
                            <tr>
                              <td className="text-body-highlight fw-bold py-1">
                                Total stock over lifetime:
                              </td>
                              <td className="text-body-tertiary fw-semibold py-1">
                                20,000
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade h-100"
                      id="shippingTabContent"
                      role="tabpanel"
                      aria-labelledby="shippingTab"
                    >
                      <div className="d-flex flex-column h-100">
                        <h5 className="mb-3 text-body-highlight">
                          Shipping Type
                        </h5>
                        <div className="flex-1">
                          <div className="mb-4">
                            <div className="form-check mb-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="shippingRadio"
                                id="fullfilledBySeller"
                              />
                              <label
                                className="form-check-label fs-8 text-body"
                                htmlFor="fullfilledBySeller"
                              >
                                Fullfilled by Seller
                              </label>
                            </div>
                            <div className="ps-4">
                              <p className="text-body-secondary fs-9 mb-0">
                                You’ll be responsible for product delivery.{""}
                                <br />
                                Any damage or delay during shipping may cost you
                                a Damage fee.
                              </p>
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="form-check mb-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="shippingRadio"
                                id="fullfilledByPhoenix"
                                defaultChecked="checked"
                              />
                              <label
                                className="form-check-label fs-8 text-body d-flex align-items-center"
                                htmlFor="fullfilledByPhoenix"
                              >
                                Fullfilled by Phoenix{""}
                                <span className="badge badge-phoenix badge-phoenix-warning fs-10 ms-2">
                                  Recommended
                                </span>
                              </label>
                            </div>
                            <div className="ps-4">
                              <p className="text-body-secondary fs-9 mb-0">
                                Your product, Our responsibility.
                                <br />
                                For a measly fee, we will handle the delivery
                                process for you.
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="fs-9 fw-semibold mb-0">
                          See our{""}
                          <a className="fw-bold" href="#!">
                            Delivery terms and conditions{""}
                          </a>
                          for details.
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="productsTabContent"
                      role="tabpanel"
                      aria-labelledby="productsTab"
                    >
                      <h5 className="mb-3 text-body-highlight">
                        Global Delivery
                      </h5>
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="deliveryRadio"
                            id="worldwideDelivery"
                          />
                          <label
                            className="form-check-label fs-8 text-body"
                            htmlFor="worldwideDelivery"
                          >
                            Worldwide delivery
                          </label>
                        </div>
                        <div className="ps-4">
                          <p className="fs-9 mb-0 text-body-secondary">
                            Only available with Shipping method:{""}
                            <a href="#!">Fullfilled by Phoenix</a>
                          </p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="deliveryRadio"
                            defaultChecked="checked"
                            id="selectedCountry"
                          />
                          <label
                            className="form-check-label fs-8 text-body"
                            htmlFor="selectedCountry"
                          >
                            Selected Countries
                          </label>
                        </div>
                        <div className="ps-4" style={{ maxWidth: 350 }}>
                          <select
                            className="form-select ps-4"
                            id="organizerMultiple"
                            data-choices="data-choices"
                            multiple="multiple"
                            data-options='{"removeItemButton":true,"placeholder":true}'
                          >
                            <option value>Type Country name</option>
                            <option>United States of America</option>
                            <option>United Kingdom</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="deliveryRadio"
                            id="localDelivery"
                          />
                          <label
                            className="form-check-label fs-8 text-body"
                            htmlFor="localDelivery"
                          >
                            Local delivery
                          </label>
                        </div>
                        <p className="fs-9 ms-4 mb-0 text-body-secondary">
                          Deliver to your country of residence{""}
                          <a href="#!">Change profile address </a>
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="attributesTabContent"
                      role="tabpanel"
                      aria-labelledby="attributesTab"
                    >
                      <h5 className="mb-3 text-body-highlight">Attributes</h5>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="fragileCheck"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label text-body fs-8"
                          htmlFor="fragileCheck"
                        >
                          Fragile Product
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="biodegradableCheck"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label text-body fs-8"
                          htmlFor="biodegradableCheck"
                        >
                          Biodegradable
                        </label>
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            id="frozenCheck"
                            type="checkbox"
                            defaultChecked="checked"
                          />
                          <label
                            className="form-check-label text-body fs-8"
                            htmlFor="frozenCheck"
                          >
                            Frozen Product
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Max. allowed Temperature"
                            style={{ maxWidth: 350 }}
                          />
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="productCheck"
                          type="checkbox"
                          defaultChecked="checked"
                        />
                        <label
                          className="form-check-label text-body fs-8"
                          htmlFor="productCheck"
                        >
                          Expiry Date of Product
                        </label>
                        <input
                          className="form-control inventory-attributes datetimepicker"
                          id="inventory"
                          type="text"
                          style={{ maxWidth: 350 }}
                          placeholder="d/m/y"
                          data-options='{"disableMobile":true}'
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="advancedTabContent"
                      role="tabpanel"
                      aria-labelledby="advancedTab"
                    >
                      <h5 className="mb-3 text-body-highlight">Advanced</h5>
                      <div className="row g-3">
                        <div className="col-12 col-lg-6">
                          <h5 className="mb-2 text-body-highlight">
                            Product ID Type
                          </h5>
                          <select
                            className="form-select"
                            aria-label="form-select-lg example"
                          >
                            <option selected="selected">ISBN</option>
                            <option value={1}>UPC</option>
                            <option value={2}>EAN</option>
                            <option value={3}>JAN</option>
                          </select>
                        </div>
                        <div className="col-12 col-lg-6">
                          <h5 className="mb-2 text-body-highlight">
                            Product ID
                          </h5>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ISBN Number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="row g-2">
                <div className="col-12 col-xl-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Organize</h4>
                      <div className="row gx-3">
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="mb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="mb-0 text-body-highlight me-2">
                                Category
                              </h5>
                              <a className="fw-bold fs-9" href="#!">
                                Add new category
                              </a>
                            </div>
                            <select
                              className="form-select mb-3"
                              aria-label="category"
                            >
                              <option value="men-cloth">Men's Clothing</option>
                              <option value="women-cloth">
                                Womens's Clothing
                              </option>
                              <option value="kid-cloth">Kid's Clothing</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="mb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="mb-0 text-body-highlight me-2">
                                Vendor
                              </h5>
                              <a className="fw-bold fs-9" href="#!">
                                Add new vendor
                              </a>
                            </div>
                            <select
                              className="form-select mb-3"
                              aria-label="category"
                            >
                              <option value="men-cloth">Men's Clothing</option>
                              <option value="women-cloth">
                                Womens's Clothing
                              </option>
                              <option value="kid-cloth">Kid's Clothing</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="mb-4">
                            <h5 className="mb-2 text-body-highlight">
                              Collection
                            </h5>
                            <input
                              className="form-control mb-xl-3"
                              type="text"
                              placeholder="Collection"
                            />
                          </div>
                        </div>
                        <div className="form-floating">
                          <div className="d-flex flex-wrap mb-2">
                            <h5 className="mb-0 text-body-highlight me-2">
                              Tags
                            </h5>
                            <a className="fw-bold fs-9 lh-sm" href="#!">
                              View all tags
                            </a>
                          </div>
                          <select
                            className="form-select"
                            id="floaTingLabelMultipleSelect"
                            data-choices="data-choices"
                            multiple="multiple"
                            data-options='{"removeItemButton":true,"placeholder":true}'
                          >
                            <option selected="selected">
                              Massachusetts Institute of Technology
                            </option>
                            <option>University of Chicago</option>
                            <option>GSAS Open Labs At Harvard</option>
                            <option>California Institute of Technology</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Variants</h4>
                      <div className="row g-3">
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="border-bottom border-translucent border-dashed border-sm-0 border-bottom-xl pb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="text-body-highlight me-2">
                                Option 1
                              </h5>
                              <a className="fw-bold fs-9" href="#!">
                                Remove
                              </a>
                            </div>
                            <select className="form-select mb-3">
                              <option value="size">Size</option>
                              <option value="color">Color</option>
                              <option value="weight">Weight</option>
                              <option value="smell">Smell</option>
                            </select>
                            <div className="product-variant-select-menu">
                              <select
                                className="form-select mb-3"
                                data-choices="data-choices"
                                multiple="multiple"
                                data-options='{"removeItemButton":true,"placeholder":true}'
                              >
                                <option value="size">4x6 in</option>
                                <option value="color">9x6 in</option>
                                <option value="weight">11x8 in</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="d-flex flex-wrap mb-2">
                            <h5 className="text-body-highlight me-2">
                              Option 2
                            </h5>
                            <a className="fw-bold fs-9" href="#!">
                              Remove
                            </a>
                          </div>
                          <select className="form-select mb-3">
                            <option value="size">Size</option>
                            <option value="color">Color</option>
                            <option value="weight">Weight</option>
                            <option value="smell">Smell</option>
                          </select>
                          <div className="product-variant-select-menu mb-3">
                            <select
                              className="form-select mb-3"
                              data-choices="data-choices"
                              multiple="multiple"
                              data-options='{"removeItemButton":true,"placeholder":true}'
                            >
                              <option value="size">4x6 in</option>
                              <option value="color">9x6 in</option>
                              <option value="weight">11x8 in</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-phoenix-primary w-100"
                        type="button"
                      >
                        Add another option
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
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
    </>
  );
};
export default AddProducts;
