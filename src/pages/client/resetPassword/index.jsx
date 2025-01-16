import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Dùng để chuyển hướng
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState(null); // Lưu token từ query string
  const navigate = useNavigate();
  const location = useLocation(); // Lấy location để đọc query string
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Sử dụng useEffect để lấy token từ query string khi component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search); // Lấy query params từ URL
    const tokenFromUrl = params.get("token"); // Lấy giá trị của tham số token
    setToken(tokenFromUrl); // Lưu token vào state
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra xem mật khẩu mới và xác nhận mật khẩu có khớp không
    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu không khớp, vui lòng kiểm tra lại!");
      return;
    }

    // Bật trạng thái submitting để áp dụng hiệu ứng xoay cho nút
    setIsSubmitting(true);

    try {
      // Gửi yêu cầu đặt lại mật khẩu
      const response = await axios.post(
        "http://127.0.0.1:8000/api/reset/dat-lai-mat-khau",
        {
          token: token, // Gửi token đã lấy từ URL
          mat_khau_moi: newPassword,
          mat_khau_moi_confirmation: confirmPassword,
        }
      );
      // Kiểm tra phản hồi từ API
      if (
        response.data &&
        response.data.message === "Đặt lại mật khẩu thành công."
      ) {
        toast.success("Cập nhật mật khẩu thành công!");
        // Đợi 5 giây trước khi chuyển hướng

        navigate("/dang-nhap"); // Chuyển hướng đến trang đăng nhập
      } else {
        // Nếu phản hồi không phải là thông báo thành công, hiển thị thông báo lỗi
        const errorMessage =
          response.data?.message || "Cập nhật mật khẩu thất bại!";
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra, vui lòng thử lại!");
      console.error("Lỗi:", error);
    } finally {
      // Sau khi hoàn thành, tắt trạng thái đang gửi để dừng hiệu ứng xoay
      setIsSubmitting(false);
    }
  };
  return (
    <div className="login-register-area pt-5 pb-5">
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="col-lg-6 col-md-12">
            <div className="login-register-wrapper bg-white shadow rounded p-5">
              <div className="login-register-tab-list nav mb-4 text-center">
                <h3 className="active ps-15">Cập nhật mật khẩu</h3>
              </div>
              <div className="tab-content mt-2">
                <div className="tab-pane active">
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Mật khẩu mới
                          </label>
                          <input
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Nhập mật khẩu mới"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="confirm-password"
                            className="form-label"
                          >
                            Xác nhận mật khẩu
                          </label>
                          <input
                            name="confirm-password"
                            id="confirm-password"
                            className="form-control"
                            placeholder="Xác nhận lại mật khẩu"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                        </div>

                        <div className="button-box text-center">
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={isSubmitting} // Vô hiệu hóa nút khi đang gửi
                          >
                            {isSubmitting ? "Đang gửi..." : "Gửi"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
