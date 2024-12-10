import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../assets/img/icons/logo1.png";

const LoginPage = () => {
  document.title = "Hypertech Store - Đăng nhập";

  const [email, setEmail] = useState("");
  const [mat_khau, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginData = { email, mat_khau };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/khach-hang/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const data = await response.json();
      console.log(data); // Log nội dung JSON nhận được từ API
      if (response.ok) {
        const userData = {
          id: data.user.id,
          ten_nguoi_dung: data.user.ten_nguoi_dung,
          email: data.user.email,
          hinh_anh: data.user.hinh_anh,
        };
        sessionStorage.setItem("userInfo", JSON.stringify(userData));
        sessionStorage.setItem("userToken", data.token || "token");
        sessionStorage.setItem("userId", data.user.id);

        toast.success("Đăng nhập thành công!");
        navigate("/");
      } else {
        toast.error(data.message || "Đăng nhập thất bại");
      }
    } catch (err) {
      toast.error(`Có lỗi xảy ra, ${err?.message}`);
    } finally {
      setLoading(false);
    }
  };

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
            <h3 className="text-body-highlight">Sign In</h3>
            <p className="text-body-tertiary">Get access to your account</p>
          </div>

          <button className="btn btn-phoenix-secondary w-100 mb-3">
            <svg
              className="svg-inline--fa fa-google text-danger me-2 fs-9"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              />
            </svg>
            Sign in with google
          </button>

          <div className="position-relative">
            <hr className="bg-body-secondary mt-5 mb-4" />
            <div className="divider-content-center">or use email</div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3 text-start">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <div className="form-icon-container">
                <input
                  className="form-control form-icon-input"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <svg
                  className="svg-inline--fa fa-user text-body fs-9 form-icon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg
                >
                  <path
                    fill="currentColor"
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                  />
                </svg>
              </div>
            </div>

            <div className="mb-3 text-start">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <div
                className="form-icon-container"
                data-password="data-password"
              >
                <input
                  className="form-control form-icon-input pe-6"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={mat_khau}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  className="svg-inline--fa fa-key text-body fs-9 form-icon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="key"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg
                >
                  <path
                    fill="currentColor"
                    d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
                  />
                </svg>
              </div>
            </div>

            <div className="row flex-between-center mb-7">
              <div className="col-auto">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input"
                    id="basic-checkbox"
                    type="checkbox"
                    defaultChecked="checked"
                  />
                  <label
                    className="form-check-label mb-0"
                    htmlFor="basic-checkbox"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <a className="fs-9 fw-semibold" href="quen-mat-khau">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mb-3"
              disabled={loading}
            >
              {loading ? "Đang đăng nhập..." : "Sign In"}
            </button>
          </form>

          <div className="text-center">
            <a className="fs-9 fw-bold" href="dang-ky">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
