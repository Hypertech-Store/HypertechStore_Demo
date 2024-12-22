import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddCategory = () => {
  const [tenDanhMuc, setTenDanhMuc] = useState("");
  const [moTa, setMoTa] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
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
      alert("Category added successfully!");
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
            <a href="#">Page 1</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Page 2</a>
          </li>
          <li className="breadcrumb-item active">Default</li>
        </ol>
      </nav>
      <form onSubmit={handleSubmit}>
        <div className="row g-3 flex-between-end mb-5">
          <div className="col-auto">
            <h2 className="mb-2">Thêm danh mục</h2>
            <h5 className="text-body-tertiary fw-semibold">
              Orders placed across your store
            </h5>
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
              placeholder="Write title here..."
              value={tenDanhMuc}
              onChange={(e) => setTenDanhMuc(e.target.value)}
              required
            />
            <div className="mb-6">
              <h4 className="mb-3">Mô tả</h4>
              <textarea
                className="form-control"
                id="floatingTextarea2"
                placeholder="Leave a comment here"
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
