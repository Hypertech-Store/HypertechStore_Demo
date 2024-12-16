import icon from "../../../../assets/img/icons/image-icon.png";
import React, { useState, useEffect } from "react";
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

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  //call api get Categories
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/danh-muc/getAll",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setCategories(data); // Đảm bảo API trả về danh sách phù hợp
      } else {
        console.error("Failed to fetch categories:", data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // get sub categori
  const fetchSubCategories = async (categoryId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/danh-muc-con/find-by-id/${categoryId}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        setSubCategories(data.data);
      } else {
        console.error("Failed to fetch subcategories:", data);
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    setFormData({
      ...formData,
      danh_muc_id: categoryId,
      danh_muc_con_id: "", // Reset danh mục con khi thay đổi danh mục
    });
    fetchSubCategories(categoryId);
  };

  const [formData, setFormData] = useState({
    danh_muc_id: "",
    danh_muc_con_id: "",
    ten_san_pham: "",
    mo_ta: "",
    gia: "",
    so_luong_ton_kho: "",
    image: null,
    luot_xem: "0",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      console.log("Selected file:", file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "image" && formData[key]) {
        form.append(key, formData[key]);
      } else if (key !== "image") {
        form.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/san-pham/create",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: form, // FormData chứa dữ liệu sản phẩm
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Sản phẩm đã được tạo thành công!");
        console.log(result);
      } else {
        console.error("Lỗi:", result);
        alert("Không thể tạo sản phẩm, vui lòng kiểm tra lại.");
      }
    } catch (error) {
      console.error("Lỗi kết nối:", error);
      alert("Đã xảy ra lỗi, vui lòng thử lại.");
    }
  };

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
        <form onSubmit={handleSubmit} className="mb-9">
          <div className="row g-3 flex-between-end mb-5">
            <div className="col-auto">
              <h2 className="mb-2">Thêm mới sản phẩm</h2>
              <h5 className="text-body-tertiary fw-semibold">
                Đơn hàng được đặt trên cửa hàng của bạn
              </h5>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary mb-2 mb-sm-0" type="submit">
                Tạo sản phẩm
              </button>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-xl-8">
              <h4 className="mb-3">Tiêu đề sản phẩm</h4>
              <input
                type="text"
                name="ten_san_pham"
                className="form-control"
                placeholder="Nhập tên sản phẩm"
                onChange={handleInputChange}
              />
              <div className="mb-6 mt-5">
                <h4 className="mb-3">Mô tả sản phẩm</h4>

                <textarea
                  name="mo_ta"
                  className="form-control"
                  rows="4"
                  placeholder="Nhập mô tả sản phẩm"
                  onChange={handleInputChange}
                />
              </div>
              <h4 className="mb-3">Display images</h4>
              <div
                className="dropzone dropzone-multiple p-0 mb-5"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById("fileInput").click()} // Kích hoạt input khi click
                style={{
                  border: "2px dashed #ccc",
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                {formData.image ? (
                  <div
                    className="border border-translucent bg-body-emphasis rounded-3 d-flex flex-center position-relative me-2 mb-2"
                    style={{ height: 80, width: 80 }}
                  >
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                ) : (
                  <p>Drag & drop a file here or click to upload</p>
                )}
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }} // Ẩn input
                  onChange={handleFileChange}
                />
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
                            type="number"
                            name="gia"
                            className="form-control"
                            placeholder="Nhập giá sản phẩm"
                            onChange={handleInputChange}
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
                              type="number"
                              name="so_luong_ton_kho"
                              className="form-control"
                              placeholder="Nhập số lượng tồn kho"
                              onChange={handleInputChange}
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
                      <h4 className="card-title mb-4">Chi tiết</h4>
                      <div className="row gx-3">
                        {/* Danh mục */}
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="mb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="mb-0 text-body-highlight me-2">
                                Danh mục
                              </h5>
                              <a className="fw-bold fs-9" href="them-danh-muc">
                                Thêm mới danh mục
                              </a>
                            </div>
                            <select
                              className="form-select mb-3"
                              aria-label="Danh mục"
                              value={selectedCategory}
                              onChange={handleCategoryChange}
                            >
                              <option value="">Chọn danh mục...</option>
                              {categories.length > 0 &&
                                categories.map((category) => (
                                  <option key={category.id} value={category.id}>
                                    {category.ten_danh_muc}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>

                        {/* Danh mục con */}
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="mb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="mb-0 text-body-highlight me-2">
                                Danh mục con
                              </h5>
                              <a
                                className="fw-bold fs-9"
                                href="them-danh-muc-con"
                              >
                                Thêm mới danh mục con
                              </a>
                            </div>
                            <select
                              name="danh_muc_con_id"
                              className="form-select"
                              onChange={handleInputChange}
                            >
                              <option value="">Chọn danh mục con...</option>
                              {subCategories.length > 0 &&
                                subCategories.map((subCategory) => (
                                  <option
                                    key={subCategory.id}
                                    value={subCategory.id}
                                  >
                                    {subCategory.ten_danh_muc_con}
                                  </option>
                                ))}
                            </select>
                          </div>
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
