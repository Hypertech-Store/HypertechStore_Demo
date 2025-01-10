import icon from "../../../../assets/img/icons/image-icon.png";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const AddProducts = () => {
  const breadcrumbTitles = {
    "admin/them-san-pham": "Thêm sản phẩm", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const navigate = useNavigate();
  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

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
  const [attributes, setAttributes] = useState([]); // Dữ liệu từ API
  const [options, setOptions] = useState([]); // Danh sách options được thêm

  useEffect(() => {
    fetchCategories();
    fetchAttributeValues();
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

  const fetchAttributeValues = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/thuoc-tinh/gia-tri-theo-thuoc-tinh",
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
        setAttributes(data); // Lưu dữ liệu vào state
      } else {
        console.error("Failed to fetch attribute values:", data);
      }
    } catch (error) {
      console.error("Error fetching attribute values:", error);
    }
  };

  const addOption = () => {
    setOptions((prev) => [...prev, { attributeId: "", selectedValues: [] }]);
  };

  const handleAttributeChange = (index, attributeId) => {
    setOptions((prev) =>
      prev.map((option, i) =>
        i === index
          ? {
            ...option,
            attributeId,
            selectedValues: [],
          }
          : option
      )
    );
  };

  const handleValueChange = (optionIndex, valueId) => {
    setOptions((prev) =>
      prev.map((option, index) =>
        index === optionIndex
          ? {
            ...option,
            selectedValues: option.selectedValues.includes(valueId)
              ? option.selectedValues.filter((id) => id !== valueId) // Bỏ chọn nếu đã tồn tại
              : [...option.selectedValues, valueId], // Thêm nếu chưa tồn tại
          }
          : option
      )
    );
  };

  // get sub categori
  const fetchSubCategories = async (categoryId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/danh-muc-con/${categoryId}`,
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

    // Thêm các trường cơ bản
    form.append("danh_muc_id", formData.danh_muc_id);
    form.append("danh_muc_con_id", formData.danh_muc_con_id);
    form.append("ten_san_pham", formData.ten_san_pham);
    form.append("mo_ta", formData.mo_ta);
    form.append("gia", formData.gia);
    form.append("so_luong_ton_kho", formData.so_luong_ton_kho);
    if (formData.image) {
      form.append("image", formData.image);
    }

    // Thêm thuoc_tinh
    options.forEach((option, index) => {
      form.append(`thuoc_tinh[${index}][id]`, option.attributeId); // ID thuộc tính
      option.selectedValues.forEach((valueId, valueIndex) => {
        form.append(`thuoc_tinh[${index}][gia_tri][${valueIndex}]`, valueId); // Giá trị thuộc tính
      });
    });

    // Thêm giá biến thể
    form.append("gia_bien_the[]", "0");

    // Gửi dữ liệu qua API
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/san-pham/create",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: form, // FormData chứa dữ liệu
        }
      );

      const result = await response.json();
      console.log(result);
      
      if (response.ok) {
        alert("Sản phẩm đã được tạo thành công!");
        navigate("/admin/danh-sach-san-pham")

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
              <Link to="/admin">Dashboard</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              {currentTitle}
            </li>
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
              <h4 className="mb-3">Hình ảnh</h4>
              <div
                className="dropzone dropzone-multiple p-0 mb-5"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById("fileInput").click()} // Kích hoạt input khi click
                id="my-awesome-dropzone"
                data-dropzone="data-dropzone"
              >
                <div className="fallback">
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }} // Ẩn input
                    onChange={handleFileChange}
                    multiple="multiple"
                  />
                </div>

                {formData.image ? (
                  <div className="dz-preview d-flex flex-wrap">
                    <div
                      className="border border-translucent bg-body-emphasis rounded-3 d-flex justify-content-center align-items-center position-relative me-2 mb-2"
                      style={{ height: 120, width: 120 }}
                    >
                      <img
                        className="dz-image"
                        src={URL.createObjectURL(formData.image)}
                        alt="Preview"
                        data-dz-thumbnail="data-dz-thumbnail"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
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
                ) : (
                  <div
                    className="dz-message text-body-tertiary text-opacity-85"
                    data-dz-message="data-dz-message"
                  >
                    Kéo ảnh của bạn vào đây
                    <span className="text-body-secondary px-1">hoặc</span>
                    <button className="btn btn-link p-0" type="button">
                      Duyệt từ thiết bị
                    </button>
                    <br />
                    <img
                      className="mt-3 me-2"
                      src={icon}
                      width={40}
                      alt="upload icon"
                    />
                  </div>
                )}
              </div>
              <h4 className="mb-3">Tên sản phẩm</h4>
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
              <div className="mb-6 mt-5">
                <h4 className="mb-3">Giá thông thường</h4>
                <input
                  type="text"
                  name="gia"
                  className="form-control"
                  placeholder="Nhập giá sản phẩm"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-6 mt-5">
                <h4 className="mb-3 text-body-highlight">Số lượng</h4>

                <input
                  type="number"
                  name="so_luong_ton_kho"
                  className="form-control"
                  placeholder="Nhập số lượng tồn kho"
                  onChange={handleInputChange}
                />
              </div>

            </div>

            <div className="col-12 col-xl-4">
              <div className="row g-2">
                <div className="col-12 col-xl-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Chi tiết</h4>
                      <div className="row gx-3">
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="mb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="mb-0 text-body-highlight me-2">
                                Danh mục
                              </h5>
                              <a className="fw-bold fs-9" href="them-danh-muc">
                                Thêm danh mục
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
                                Thêm danh mục con
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
                      <h4 className="card-title mb-4">Biến thể</h4>
                      <div className="row g-3">
                        {options.map((option, index) => {
                          const selectedAttribute = attributes.find(
                            (attr) => attr.id === parseInt(option.attributeId)
                          );

                          return (
                            <div
                              className="col-12 col-sm-6 col-xl-12"
                              key={index}
                            >
                              <div className="border-bottom border-translucent border-dashed border-sm-0 border-bottom-xl pb-4">
                                <div className="d-flex flex-wrap mb-2">
                                  <h5 className="text-body-highlight me-2">
                                    Lựa chọn {index + 1}
                                  </h5>
                                  <a
                                    className="fw-bold fs-9"
                                    href="#!"
                                    onClick={() =>
                                      setOptions((prev) =>
                                        prev.filter((_, i) => i !== index)
                                      )
                                    }
                                  >
                                    Xóa
                                  </a>
                                </div>
                                <select
                                  className="form-select mb-3"
                                  value={option.attributeId}
                                  onChange={(e) =>
                                    handleAttributeChange(index, e.target.value)
                                  }
                                >
                                  <option value="">Chọn thuộc tính</option>
                                  {attributes.map((attr) => (
                                    <option key={attr.id} value={attr.id}>
                                      {attr.ten_thuoc_tinh}
                                    </option>
                                  ))}
                                </select>
                                {selectedAttribute && (
                                  <div className="product-variant-checkbox-menu">
                                    <h6>Chọn giá trị:</h6>
                                    {selectedAttribute.gia_tri_thuoc_tinh.map(
                                      (value) => (
                                        <div
                                          key={value.id}
                                          className="form-check mb-2"
                                        >
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`value-${index}-${value.id}`}
                                            checked={option.selectedValues.includes(
                                              value.id
                                            )}
                                            onChange={() =>
                                              handleValueChange(index, value.id)
                                            }
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor={`value-${index}-${value.id}`}
                                          >
                                            {value.ten_gia_tri}
                                          </label>
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <button
                        className="btn btn-phoenix-primary w-100"
                        type="button"
                        onClick={addOption}
                      >
                        Thêm lựa chọn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form >
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
      </div >
    </>
  );
};
export default AddProducts;
