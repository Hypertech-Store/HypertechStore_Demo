import icon from "../../../../assets/img/icons/image-icon.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const editProducts = () => {
  const breadcrumbTitles = {
    "admin/sua-san-pham": "Sửa sản phẩm", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

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

  //xử lý edit
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const productId = queryParams.get("id");
  const [productData, setProductData] = useState(null);
  const [ngayKetThucSale, setNgayKetThucSale] = useState(null);
  const [images, setImages] = useState([]);
  const [colorAttribute, setColorAttribute] = useState("");
  const [colorName, setColorName] = useState("");
  const [dungLuongOptions, setDungLuongOptions] = useState([]);
  const [otherAttributes, setOtherAttributes] = useState([]);
  const [dungLuongName, setDungLuongName] = useState(""); 
  const [colorVariants, setColorVariants] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/san-pham/detail/${productId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Product data:", data);
        setProductData(data);

        setNgayKetThucSale(data.sale?.ngay_ket_thuc_sale || null);

        if (data.hinh_anh_bien_the_san_pham) {
          const imageLinks = data.hinh_anh_bien_the_san_pham.flatMap((item) =>
            item.hinh_anh.map(
              (image) => `${baseUrl}${image.duong_dan_hinh_anh}`
            )
          );
          setImages(imageLinks);
        }

        // Xử lý thuộc tính "Màu sắc"
        const colorAttributeData = data.gia_tri_thuoc_tinh?.find(
          (item) => item.thuoc_tinh_san_pham?.ten_thuoc_tinh === "Màu sắc"
        );
        setColorAttribute(
          colorAttributeData?.thuoc_tinh_san_pham?.ten_thuoc_tinh || "Màu sắc"
        );
        setColorName(colorAttributeData?.gia_tri || "Chưa chọn màu");

        // Hiển thị các biến thể màu sắc (nếu có)
        if (data.hinh_anh_bien_the_san_pham) {
          const colorVariantsData = data.hinh_anh_bien_the_san_pham.flatMap(
            (item) =>
              item.hinh_anh.map((image) => ({
                colorName: image.ten_gia_tri,
                imageUrl: `${baseUrl}${image.duong_dan_hinh_anh}`,
              }))
          );
          setColorVariants(colorVariantsData);
        }

        // Xử lý thuộc tính "Dung lượng"
        const capacityAttributeData = data.grouped_attributes?.["Dung lượng"];
        if (capacityAttributeData) {
          setDungLuongOptions(capacityAttributeData.ten_gia_tri || []);
          setDungLuongName("Dung lượng");
        }

        // Xử lý các thuộc tính khác (không phải Màu sắc và Dung lượng)
        const otherAttributesData = Object.keys(
          data.grouped_attributes || {}
        ).filter((key) => key !== "Màu sắc" && key !== "Dung lượng");
        setOtherAttributes(otherAttributesData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (productId) {
      fetchProductData();
    }
  }, [productId]);


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
        <form className="mb-9">
          <div className="row g-3 flex-between-end mb-5">
            <div className="col-auto">
              <h2 className="mb-2">Sửa sản phẩm</h2>
              <h5 className="text-body-tertiary fw-semibold">
                Orders placed across your store
              </h5>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary mb-2 mb-sm-0" type="submit">
                Cập nhật sản phẩm
              </button>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-xl-8">
              <h4 className="mb-3">Ảnh sản phẩm</h4>
              <div
                className="dropzone dropzone-multiple p-0 mb-5"
                id="my-awesome-dropzone"
                data-dropzone="data-dropzone"
              >
                <div className="fallback">
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }} // Ẩn input
                    multiple="multiple"
                  />
                </div>

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
              </div>
              <h4 className="mb-3">Tên sản phẩm</h4>
              <input
                className="form-control mb-5"
                type="text"
                placeholder="Write title here..."
              />
              <div className="mb-6">
                <h4 className="mb-3">Mô tả sản phẩm</h4>

                <textarea
                  className="form-control"
                  id="floatingTextarea2"
                  placeholder="Leave a comment here"
                  style={{ height: 100 }}
                  defaultValue={""}
                />
              </div>
              <div className="mb-6">
                <h4 className="mb-2 text-body-highlight">Giá thông thường</h4>
                <input className="form-control" type="text" placeholder="$$$" />
              </div>
              <div className="mb-6">
                <h5 className="mb-3 text-body-highlight">Số lượng</h5>

                <input
                  className="form-control"
                  type="number"
                  placeholder="Quantity"
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
                        {/* Danh mục */}
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
                            >
                              <option value="">Chọn danh mục...</option>
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
                                Thêm danh mục con
                              </a>
                            </div>
                            <select
                              name="danh_muc_con_id"
                              className="form-select"
                            >
                              <option value="">Chọn danh mục con...</option>
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
                        <div className="col-12 col-sm-6 col-xl-12">
                          <div className="border-bottom border-translucent border-dashed border-sm-0 border-bottom-xl pb-4">
                            <div className="d-flex flex-wrap mb-2">
                              <h5 className="text-body-highlight me-2">
                                Lựa chọn 1
                              </h5>
                              <a className="fw-bold fs-9" href="#!">
                                Xóa
                              </a>
                            </div>
                            <select className="form-select mb-3">
                              <option value="">Chọn thuộc tính</option>
                            </select>

                            {/* <div className="product-variant-checkbox-menu">
                              <h6>Chọn giá trị:</h6>

                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />
                                <label className="form-check-label"></label>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-phoenix-primary w-100"
                        type="button"
                      >
                        Thêm lựa chọn
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
export default editProducts;