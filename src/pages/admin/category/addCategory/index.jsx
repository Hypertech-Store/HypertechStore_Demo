import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [tenDanhMuc, setTenDanhMuc] = useState("");
  const [moTa, setMoTa] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pathnames = location.pathname.split("/").filter(Boolean);

  const breadcrumbTitles = {
    "admin/them-danh-muc": "Thêm danh mục", // Đây là URL không có "/"
  };
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); 

  const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!tenDanhMuc.trim() || !moTa.trim()) {
        alert("Vui lòng điền đầy đủ các trường thông tin.");
        setLoading(false);
        return; // Dừng lại nếu dữ liệu không hợp lệ
      }

      const response = await fetch("http://127.0.0.1:8000/api/danh-muc/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ten_danh_muc: tenDanhMuc,
          mo_ta: moTa,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add category");
      }

      const data = await response.json();
      alert("Thêm danh mục thành công!");
      setTenDanhMuc("");
      setMoTa("");
      navigate("/admin/danh-sach-danh-muc");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
      <form onSubmit={handleSubmit}>
        <div className="row g-3 flex-between-end mb-5">
          <div className="col-auto">
            <h2 className="mb-2">Thêm danh mục</h2>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-primary mb-2 mb-sm-0"
              type="submit"
              disabled={loading}
            >
              {loading ? "Đang tạo danh mục..." : "Tạo danh mục "}
            </button>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-12 col-xl-12">
            <h4 className="mb-3">Tên danh mục</h4>
            <input
              className="form-control mb-5"
              type="text"
              placeholder="Nhập tên danh mục"
              value={tenDanhMuc}
              onChange={(e) => setTenDanhMuc(e.target.value)}
              required
            />
            <div className="mb-6">
              <h4 className="mb-3">Mô tả</h4>
              <textarea
                className="form-control"
                id="floatingTextarea2"
                placeholder="Nhập mô tả"
                style={{ height: 100 }}
                value={moTa}
                onChange={(e) => setMoTa(e.target.value)}
              />
            </div>
          </div>
        </div>
        {error && <p className="text-danger">Error: {error}</p>}
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

export default AddCategory;
