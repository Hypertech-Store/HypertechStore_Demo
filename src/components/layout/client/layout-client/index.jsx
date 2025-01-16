import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderClient from "../header-client";
import FooterClient from "../footer-client";
import Lottie from "react-lottie";
import "../../../../assets/css/loading.css";
import loadingAnimation from "../../../../../loading.json"; // Đặt đúng đường dẫn tệp .json của GIF

const LayoutClient = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Danh sách các đường dẫn không cần Header và Footer
  const excludePaths = [
    "/dang-nhap",
    "/dang-ky",
    "/quen-mat-khau",
    "/cap-nhat-mat-khau",
  ];

  // Kiểm tra nếu đường dẫn hiện tại nằm trong danh sách excludePaths
  const shouldSkipLoading = excludePaths.includes(location.pathname);

  useEffect(() => {
    if (shouldSkipLoading) {
      // Nếu đường dẫn thuộc excludePaths, không chạy hiệu ứng loading
      setIsLoading(false);
    } else {
      // Nếu không, bật trạng thái loading
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 6000); // Thời gian giả lập tải dữ liệu

      return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
    }
  }, [location.pathname, shouldSkipLoading]);

  return (
    <>
      {/* Hiển thị GIF loading nếu đang tải, trừ khi thuộc excludePaths */}
      {isLoading && !shouldSkipLoading && (
        <div className="loading">
          <Lottie
            options={{ animationData: loadingAnimation, loop: true }}
            height={200}
            width={200}
          />
        </div>
      )}

      {/* Hiển thị nội dung trang */}
      <div
        style={{ display: isLoading && !shouldSkipLoading ? "none" : "block" }}
      >
        {!shouldSkipLoading && <HeaderClient />}

        <Outlet />

        {!shouldSkipLoading && <FooterClient />}
      </div>
    </>
  );
};

export default LayoutClient;
