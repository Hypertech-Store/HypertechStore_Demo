import React, { useEffect, useState } from "react";
import axios from "axios";
import icon from "../../../../assets/img/icons/image-icon.png";
import { Link, useNavigate } from "react-router-dom";
const addSubcategory = () => {
  const [categories, setCategories] = useState([]);
  const [subcategoryName, setSubcategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategoryImage, setSubcategoryImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const breadcrumbTitles = {
    "admin/them-danh-muc-con": "Thêm danh mục con", // Đây là URL không có "/"
  };
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase();
  // Fetch danh mục
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/danh-muc/getAll"
        );
        const filteredCategories = response.data.filter(
          (category) => category.trang_thai === 1
        ); // Lọc các mục có trang_thai = 1
        setCategories(filteredCategories); // Set các mục đã lọc vào state
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Xử lý thay đổi ảnh
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSubcategoryImage(file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setSubcategoryImage(null);
      setPreviewImage(null);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (file) {
      setSubcategoryImage(file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setSubcategoryImage(null);
      setPreviewImage(null);
    }
  };
  const handleFileChange = (e) => {
    handleImageChange(e); // Sử dụng lại hàm `handleImageChange`
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCategory || !subcategoryName || !subcategoryImage) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const formData = new FormData();
    formData.append("danh_muc_id", selectedCategory);
    formData.append("ten_danh_muc_con", subcategoryName);
    formData.append("image", subcategoryImage);

    try {
      await axios.post("http://127.0.0.1:8000/api/danh-muc-con", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Thêm danh mục con thành công!");
      navigate("/admin/danh-sach-danh-muc-con");
    } catch (error) {
      console.error("Error adding subcategory:", error);
      alert("Thêm danh mục con thất bại!");
    }
  };

  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/admin">Bảng điều khiển</Link>
          </li>

          <li className="breadcrumb-item active" aria-current="page">
            {currentTitle}
          </li>
        </ol>
      </nav>
      <form className="mb-9" onSubmit={handleSubmit}>
        <div className="row g-3 flex-between-end mb-5">
          <div className="col-auto">
            <h2 className="mb-2">Thêm mới danh mục con</h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary mb-2 mb-sm-0" type="submit">
              Tạo danh mục con
            </button>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-12 col-xl-8" style={{ width: "65%" }}>
            <h4 className="mb-3">Tên danh mục con </h4>
            <input
              className="form-control mb-5"
              type="text"
              placeholder="Nhập tên danh mục con"
              value={subcategoryName}
              onChange={(e) => setSubcategoryName(e.target.value)}
            />

            <h4 className="mb-3">Ảnh danh mục con</h4>
            <div
              className="dropzone dropzone-multiple p-0 mb-5"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange} // Dùng handleImageChange trực tiếp
                multiple={false}
              />

              {previewImage ? (
                <div className="dz-preview d-flex flex-wrap">
                  <div
                    className="border border-translucent bg-body-emphasis rounded-3 d-flex justify-content-center align-items-center position-relative me-2 mb-2"
                    style={{ height: 120, width: 120 }}
                  >
                    <img
                      className="dz-image"
                      src={previewImage}
                      alt="Preview"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="dz-message text-body-tertiary text-opacity-85">
                  Kéo ảnh của bạn vào đây
                  <span className="text-body-secondary px-1">hoặc</span>
                  <button className="btn btn-link p-0" type="button">
                    Duyệt từ thiết bị
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 col-xl-5" style={{ width: "35%" }}>
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
                            <a className="fw-bold fs-9" href="#!">
                              Thêm mới danh mục
                            </a>
                          </div>
                          <select
                            className="form-select"
                            value={selectedCategory}
                            onChange={(e) =>
                              setSelectedCategory(e.target.value)
                            }
                          >
                            <option value="">Chọn danh mục</option>
                            {categories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.ten_danh_muc}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
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
  );
};
export default addSubcategory;
