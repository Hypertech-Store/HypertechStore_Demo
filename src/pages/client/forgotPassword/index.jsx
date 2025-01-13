import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineEmail } from "react-icons/md";
const ForPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/reset/quen-mat-khau",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast.success(
          "🎉 Một liên kết đặt lại mật khẩu đã được gửi đến email của bạn.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          }
        );
      } else {
        toast.error(
          `❌ ${data.message || "Có lỗi xảy ra. Vui lòng thử lại."}`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          }
        );
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error(
        "🚨 Gửi yêu cầu thất bại. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        }
      );
    }
  };

  return (
    <>
      <style>
        {`
.mail-seccess {
  padding: 150px 0;
  background-color: #f9f9f9;
  text-align: center;
}

.mail-seccess .success-inner {
  padding: 50px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mail-seccess h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column; /* Sắp xếp các phần tử theo chiều dọc */
  align-items: center;
  gap: 10px; /* Khoảng cách giữa icon và text */
}

.mail-seccess h1 i {
  font-size: 80px; /* Tăng kích thước biểu tượng */
  color: #007bff;
}

.mail-seccess h1 span {
  font-size: 20px;
  color: #333;
}

.mail-seccess p {
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 30px;
}



.mail-seccess .btn:hover {
  background-color: #0056b3;
}


                `}
      </style>

      {isSubmitted ? (
        <section className="mail-seccess section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-12">
                <div className="success-inner">
                  <h1>
                    <i className="fa fa-envelope fa-2x" />

                    <br />
                    <span>Yêu cầu đặt lại mật khẩu đã được gửi!</span>
                  </h1>

                  <p>
                    Chúng tôi đã gửi một liên kết đặt lại mật khẩu đến email của
                    bạn. Vui lòng kiểm tra hộp thư đến (hoặc mục thư rác) và làm
                    theo hướng dẫn.
                  </p>
                  <a href="/" className="btn btn-primary btn-sm">
                    Trang chủ
                  </a>
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
                ></a>
                <div className="px-xxl-5">
                  <div className="text-center mb-6">
                    <h3>
                      <i className="fa fa-lock fa-4x"></i>
                    </h3>
                    <h4 className="text-body-highlight mt-5">Quên mật khẩu?</h4>
                    <p className="text-body-tertiary mb-5">
                      Nhập email của bạn bên dưới và chúng tôi sẽ gửi cho bạn
                      một liên kết đặt lại
                    </p>
                    <form
                      onSubmit={handleSubmit}
                      className="d-flex align-items-center mb-5"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flex: 1,
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0.6rem 0.75rem",
                            backgroundColor: "transparent",
                            color: "#6c757d",
                            border: "1px solid #ced4da",
                            borderRight: "none",
                            borderRadius: "0.25rem 0 0 0.25rem",
                          }}
                        >
                          <MdOutlineEmail />
                        </span>
                        <input
                          style={{
                            flex: 1,
                            padding: "0.375rem 0.75rem",
                            border: "1px solid #ced4da",
                            borderRadius: "0 0.25rem 0.25rem 0",
                            outline: "none",
                          }}
                          id="email"
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        style={{
                          marginLeft: "0.5rem",
                          padding: "0.375rem 0.75rem",
                          border: "none",
                          borderRadius: "0.25rem",
                          backgroundColor: "#007bff",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Gửi
                        <span className="fas fa-chevron-right ms-2" />
                      </button>
                    </form>

                    <a className="fs-9 fw-bold" href="dang-nhap">
                      Quay lại
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
