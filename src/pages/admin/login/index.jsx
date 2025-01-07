import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import backgroundImage from "../../../assets/img/bg/30.png";
import logo from "../../../assets/img/icons/logo1.png";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  document.title = "Hypertech Store - Đăng nhập hệ thống Admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Gán giá trị mặc định nếu email và mật khẩu trống
    const defaultEmail = "admin@gmail.com";
    const defaultPassword = "123456";

    const loginEmail = email || defaultEmail;
    const loginPassword = password || defaultPassword;

    const defaultAvatar = "quan_tri_viens/avatarj.jpg";

    try {
      // Kiểm tra tài khoản mặc định trước
      if (loginEmail === defaultEmail && loginPassword === defaultPassword) {
        const mockUser = {
          id: 1,
          ten_dang_nhap: "Admin User",
          role: 1, // 1 là quản trị viên
          anh_nguoi_dung: defaultAvatar, // Ảnh mặc định
          trang_thai: 1, // Trạng thái hoạt động
        };

        // Kiểm tra trạng thái tài khoản mặc định
        if (mockUser.trang_thai === 0) {
          toast.error(
            "Tài khoản của bạn đang bị vô hiệu hóa. Vui lòng liên hệ quản trị viên.",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
            }
          );
          setLoading(false);
          return;
        }

        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem("customRole", mockUser.role);
        localStorage.setItem("adminId", mockUser.id);
        localStorage.setItem("adminName", mockUser.ten_dang_nhap);
        localStorage.setItem("adminAvatar", mockUser.anh_nguoi_dung);

        toast.success("Đăng nhập thành công!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
        });

        navigate("/admin");
      } else {
        // Nếu không phải tài khoản mặc định, tiếp tục gọi API
        const response = await axios.post(
          "http://127.0.0.1:8000/api/quan-tri-viens/login",
          {
            email: loginEmail,
            mat_khau: loginPassword,
          }
        );

        const { quantrivien, message } = response.data;

        if (quantrivien.trang_thai === 0) {
          toast.error(
            "Tài khoản của bạn đang bị vô hiệu hóa. Vui lòng liên hệ quản trị viên.",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
            }
          );
          setLoading(false);
          return;
        }

        if (quantrivien.role === 0 || quantrivien.role === 1) {
          localStorage.setItem("customRole", quantrivien.role);
          localStorage.setItem("adminId", quantrivien.id);
          localStorage.setItem("adminName", quantrivien.ten_dang_nhap);
          localStorage.setItem(
            "adminAvatar",
            quantrivien.anh_nguoi_dung || defaultAvatar
          );

          toast.success(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
          });

          navigate("/admin");
        } else {
          toast.error(
            "Quyền truy cập bị từ chối. Chỉ quản trị viên và nhân viên mới được phép.",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
            }
          );
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Đăng nhập thất bại. Vui lòng thử lại.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <main className="main" id="top">
      <div className="row vh-100 g-0">
        <div className="col-lg-6 position-relative d-none d-lg-block">
          <div
            className="bg-holder"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>
        <div className="col-lg-6">
          <div className="row flex-center h-100 g-0 px-4 px-sm-0">
            <div className="col col-sm-6 col-lg-7 col-xl-6">
              <a
                className="d-flex flex-center text-decoration-none mb-4"
                href="/"
              >
                <img src={logo} alt="phoenix" width={58} />
              </a>
              <div className="text-center mb-7">
                <h3 className="text-body-highlight">Đăng nhập</h3>
                <p className="text-body-tertiary">
                  Truy cập vào tài khoản của bạn
                </p>
              </div>
              <div className="position-relative">
                <hr className="bg-body-secondary mt-5 mb-4" />
                <div className="divider-content-center">hoặc sử dụng email</div>
              </div>
              <form onSubmit={handleLogin}>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <div className="form-icon-container">
                    <input
                      className="form-control form-icon-input"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="fas fa-user text-body fs-9 form-icon" />
                  </div>
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="password">
                    Mật khẩu
                  </label>
                  <div className="form-icon-container">
                    <input
                      className="form-control form-icon-input pe-6"
                      id="password"
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="fas fa-key text-body fs-9 form-icon" />
                    <button
                      type="button"
                      className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                      onClick={togglePasswordVisibility}
                    >
                      <span
                        className={
                          passwordVisible ? "uil uil-eye-slash" : "uil uil-eye"
                        }
                      />
                    </button>
                  </div>
                </div>
                <div className="row flex-between-center mb-7">
                  <div className="col-auto">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        id="basic-checkbox"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="basic-checkbox"
                      >
                        Ghi nhớ tôi
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-3"
                  disabled={loading}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {loading ? "Đang xử lý" : "Đăng nhập"}

                  {loading ? (
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
