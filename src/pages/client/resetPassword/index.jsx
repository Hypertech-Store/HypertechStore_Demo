import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Dùng để chuyển hướng
import axios from 'axios';
import { toast } from "react-toastify";
const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [token, setToken] = useState(null); // Lưu token từ query string
    const navigate = useNavigate();
    const location = useLocation(); // Lấy location để đọc query string
    // Sử dụng useEffect để lấy token từ query string khi component mount
    useEffect(() => {
        const params = new URLSearchParams(location.search); // Lấy query params từ URL
        const tokenFromUrl = params.get('token'); // Lấy giá trị của tham số token
        setToken(tokenFromUrl); // Lưu token vào state
    }, [location.search]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Kiểm tra xem mật khẩu mới và xác nhận mật khẩu có khớp không
        if (newPassword !== confirmPassword) {
            toast.error('Mật khẩu không khớp, vui lòng kiểm tra lại!');
            return;
        }
        try {
            // Gửi yêu cầu đặt lại mật khẩu
            const response = await axios.post('http://127.0.0.1:8000/api/reset/dat-lai-mat-khau', {
                token: token, // Gửi token đã lấy từ URL
                mat_khau_moi: newPassword,
                mat_khau_moi_confirmation: confirmPassword
            });
            // Kiểm tra phản hồi từ API
            if (response.data && response.data.message === 'Đặt lại mật khẩu thành công.') {
                toast.success('Cập nhật mật khẩu thành công!');
                // Đợi 5 giây trước khi chuyển hướng
                setTimeout(() => {
                    toast.dismiss();  // Đóng tất cả các toast
                    navigate('/dang-nhap'); // Chuyển hướng đến trang đăng nhập
                }, 5000); // Chờ 5 giây trước khi chuyển hướng
            } else {
                // Nếu phản hồi không phải là thông báo thành công, hiển thị thông báo lỗi
                const errorMessage = response.data?.message || 'Cập nhật mật khẩu thất bại!';
                toast.error(errorMessage);
            }
        } catch (error) {
            toast.error('Đã có lỗi xảy ra, vui lòng thử lại!');
            console.error('Lỗi:', error);
        }
    };
    return (
        <div className="login-register-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 ms-auto me-auto">
                        <div className="login-register-wrapper">
                            <div className="login-register-tab-list nav">
                                <h3 className="active">Cập nhật mật khẩu</h3>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane active">
                                    <div className="login-form-container">
                                        <div className="login-register-form">
                                            <form onSubmit={handleSubmit}>
                                                <input
                                                    name="password"
                                                    placeholder="Nhập mật khẩu mới"
                                                    type="password"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                />
                                                <input
                                                    name="confirm-password"
                                                    placeholder="Xác nhận lại mật khẩu"
                                                    type="password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                                <div className="button-box">
                                                    <button type="submit"><span>Gửi</span></button>
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