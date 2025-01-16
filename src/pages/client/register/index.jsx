import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader"; // Import spinner từ react-icons
import logo from "../../../assets/img/icons/logo1.png";

const Register = () => {
  document.title = "Hypertech Store - Đăng ký";
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ten_nguoi_dung: "",
    mat_khau: "",
    email: "",
    trang_thai: 1, // Thêm trường trang_thai mặc định = 1
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.mat_khau.length < 8) {
      toast.error("Mật khẩu phải chứa ít nhất 8 ký tự!");
      return;
    }

    setIsSubmitting(true); // Chỉ đặt isSubmitting = true khi mật khẩu hợp lệ
  
    setLoading(true);
  };

  useEffect(() => {
  if (isSubmitting) {
    const registerUser = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/khach-hang/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // Gửi dữ liệu formData, bao gồm trang_thai = 1
          }
        );

        const data = await response.json();

        if (response.ok) {
          toast.success("Đăng ký thành công!");
          setTimeout(() => {
            // Dừng spinner sau 2s (demo)
            setLoading(false);
          }, 2000);
          navigate("/dang-nhap"); // Chuyển hướng sang trang đăng nhập
        } else {
          // Kiểm tra lỗi do tài khoản đã tồn tại
          if (data.message && data.message.includes("đã tồn tại")) {
            toast.error("Tên người dùng hoặc email đã tồn tại!");
          } else {
            toast.error(data.message || "Đăng ký thất bại");
          }
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        toast.error("Có lỗi xảy ra");
      } finally {
        setIsSubmitting(false); // Đặt lại trạng thái
      }
    };

    registerUser();
  }
}, [isSubmitting, formData, navigate]);

return (
  <div className="container">
    <div className="row flex-center min-vh-100 py-5">
      <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
        <a className="d-flex flex-center text-decoration-none mb-4" href="/">
          <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
            <img src={logo} alt="phoenix" width={58} />
          </div>
        </a>
        <div className="text-center mb-7">
          <h3 className="text-body-highlight">Đăng ký</h3>
          <p className="text-body-tertiary">
            Tạo tài khoản của bạn ngay hôm nay
          </p>
        </div>
        <button className="btn btn-phoenix-secondary w-100 mb-3">
          <span className="fab fa-google text-danger me-2 fs-9" />
          Đăng ký với google
        </button>
        <div className="position-relative mt-4">
          <hr className="bg-body-secondary" />
          <div className="divider-content-center">hoặc sử dụng email</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label" htmlFor="name">
              Tên người dùng
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              name="ten_nguoi_dung"
              value={formData.ten_nguoi_dung}
              onChange={handleChange}
              placeholder="Tên người dùng"
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="row g-3 mb-3">
            <div className="col-sm-6">
              <label className="form-label" htmlFor="password">
                Mật khẩu
              </label>
              <input
                className="form-control"
                id="password"
                type="password"
                name="mat_khau"
                value={formData.mat_khau}
                onChange={handleChange}
                placeholder="Mật khẩu"
                required
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label" htmlFor="confirmPassword">
                Xác nhận mật khẩu
              </label>
              <input
                className="form-control"
                id="confirmPassword"
                type="password"
                placeholder="Xác nhận mật khẩu"
                required
              />
            </div>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              id="termsService"
              type="checkbox"
              required
            />
            <label
              className="form-label fs-9 text-transform-none"
              htmlFor="termsService"
            >
              Tôi chấp nhận <a href="#!">các điều khoản </a>và{" "}
              <a href="#!">chính sách bảo mật</a>
            </label>
          </div>

          <button
            className="btn btn-primary w-100 mb-3 d-flex align-items-center justify-content-center"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Đang xử lý" : "Đăng ký"}

            {isSubmitting ? (
              <HashLoader
                color="#ffffff" // Set the color of the loader to white
                size={15} // Adjust the size of the loader here (e.g., 20px)
                style={{
                  animation: "spin 1s linear infinite",
                  marginLeft: "12px", // Space between the text and the icon
                }}
              />
            ) : null}
          </button>

          <div className="text-center">
            <a className="fs-9 fw-bold" href="/dang-nhap">
              Bạn đã có tài khoản?
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};
const style = document.createElement("style");
style.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
export default Register;
