import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../../assets/img/icons/logo1.png";

const ForPassword = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/reset/quen-mat-khau', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                toast.success(
                    '🎉 Một liên kết đặt lại mật khẩu đã được gửi đến email của bạn.',
                    {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'colored',
                    }
                );
            } else {
                toast.error(
                    `❌ ${data.message || 'Có lỗi xảy ra. Vui lòng thử lại.'}`,
                    {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'colored',
                    }
                );
            }
        } catch (error) {
            toast.error(
                '🚨 Gửi yêu cầu thất bại. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.',
                {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'colored',
                }
            );
        }
    };

    return (
        <>
            <style>
                {`
                    body { margin-top: 20px; }
                    .mail-seccess { ... } /* Định nghĩa CSS */
                    .login-register-area { ... } /* Định nghĩa CSS */
                `}
            </style>

            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
            />

            {isSubmitted ? (
                <section className="mail-seccess section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-12">
                                <div className="success-inner">
                                    <h1>
                                        <i className="fa fa-envelope" />
                                        <span>Yêu cầu đặt lại mật khẩu đã được gửi!</span>
                                    </h1>
                                    <p>
                                        Chúng tôi đã gửi một liên kết đặt lại mật khẩu đến email của bạn.
                                        Vui lòng kiểm tra hộp thư đến (hoặc mục thư rác) và làm theo hướng dẫn.
                                    </p>
                                    <a href="/" className="btn">Trang chủ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div className="login-register-area">
                    <div className="container">
                        <div className="row flex-center min-vh-100 py-5">
                            <div className="col-sm-10 col-md-8 col-lg-5 col-xxl-4">
                                <a
                                    className="d-flex flex-center text-decoration-none mb-4"
                                    href="/"
                                >
                                    <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                                        <img src={logo} alt="phoenix" width={58} />
                                    </div>
                                </a>
                                <div className="px-xxl-5">
                                    <div className="text-center mb-6">
                                        <h4 className="text-body-highlight">Forgot your password?</h4>
                                        <p className="text-body-tertiary mb-5">
                                            Enter your email below and we will send{" "}
                                            <br className="d-sm-none" />
                                            you a reset link
                                        </p>
                                        <form onSubmit={handleSubmit} className="d-flex align-items-center mb-5">
                                            <input
                                                className="form-control flex-1"
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <button className="btn btn-primary ms-2">
                                                Send
                                                <span className="fas fa-chevron-right ms-2" />
                                            </button>
                                        </form>
                                        <a className="fs-9 fw-bold" href="#!">
                                            Still having problems?
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ForPassword;
