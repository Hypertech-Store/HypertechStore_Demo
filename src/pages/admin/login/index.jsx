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

  // Kiểm tra nếu người dùng đã đăng nhập
  // useEffect(() => {
  //   const adminId = localStorage.getItem("adminId");
  //   if (adminId === null) {
  //     // Nếu userId không tồn tại (chưa đăng nhập), không làm gì
  //     console.log("User is not logged in.");
  //   } else {
  //     // Nếu userId tồn tại (đã đăng nhập), điều hướng đến trang admin
  //     navigate("/admin");
  //   }
  // }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/quan-tri-viens/login",
        {
          email: email,
          mat_khau: password,
        }
      );

      console.log("API Response:", response.data);

      const { quantrivien, message } = response.data;

      if (quantrivien.role === 0 || quantrivien.role === 1) {
        localStorage.setItem("customRole", quantrivien.role);
        localStorage.setItem("adminId", quantrivien.id);
        localStorage.setItem("adminName", quantrivien.ten_dang_nhap);
        localStorage.setItem(
          "adminAvatar",
          quantrivien.anh_nguoi_dung || "default-avatar.png"
        );

        console.log(localStorage.getItem("adminId"));

        toast.success(message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
        });

        setTimeout(() => {
          setLoading(false);
        }, 5000);
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
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Đăng nhập thất bại.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      } else {
        toast.error("Đã xảy ra lỗi. Vui lòng thử lại.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
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
