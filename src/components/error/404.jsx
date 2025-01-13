import Lottie from "react-lottie";
import illustrations_light from "../../assets/img/spot-illustrations/404.png";
import illustrations_dark from "../../assets/img/spot-illustrations/dark_404.png";
import notFoundAnimation from "./404.json"; // Import file 404 Lottie animation
import "../../assets/css/404.css";
const NotFound = () => {
  return (
    <>
      <div>
        <div className="px-3 lottie-wrapper">
          <div className="row min-vh-100 flex-center p-5">
            <div className="col-12 col-xl-10 col-xxl-8">
              <div className="row justify-content-center align-items-center g-5">
                {/* Illustration Wrapper: Lottie + Image */}
                <div className="col-12 col-lg-6 text-center order-lg-1">
                  {/* Hiển thị Lottie animation nếu đang load */}

                  <Lottie
                    options={{
                      animationData: notFoundAnimation,
                      renderer: "svg", // Chuyển từ canvas sang svg nếu cần
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={600}
                    width={600}
                  />
                </div>

                <div className="col-12 col-lg-6 text-center text-lg-start">
                  <img
                    className="img-fluid mb-6 w-50 w-lg-75 d-dark-none"
                    src={illustrations_light}
                    alt="404 Illustration Light"
                  />
                  <img
                    className="img-fluid mb-6 w-50 w-lg-75 d-light-none"
                    src={illustrations_dark}
                    alt="404 Illustration Dark"
                  />
                  <h3 className="text-body-secondary fw-bolder mb-3">
                    Đường dẫn không còn tồn tại trên máy chủ.
                  </h3>
                  <p className="text-body mb-5">
                    Nhưng đừng lo lắng! Chú đà điểu của chúng tôi đang tìm kiếm
                    khắp nơi
                    <br className="d-none d-sm-block" />
                    trong khi bạn chờ đợi một cách an toàn.
                  </p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Trang chủ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
