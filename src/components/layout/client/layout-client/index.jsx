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
  const excludePaths = ["/dang-nhap", "/dang-ky", "/quen-mat-khau"];

  // Kiểm tra nếu đường dẫn hiện tại nằm trong danh sách excludePaths
  const shouldHideHeaderFooter = excludePaths.includes(location.pathname);

  // Đảm bảo rằng bạn chỉ hiển thị GIF khi dữ liệu trang đang được tải
  useEffect(() => {
    // Giả lập việc tải dữ liệu (có thể thay bằng các API request thực tế)
    const timer = setTimeout(() => {
      setIsLoading(false); // Giả lập đã tải dữ liệu xong
    }, 6000); // Bạn có thể thay đổi thời gian này tùy vào thời gian tải thực tế

    return () => clearTimeout(timer); // Dọn dẹp khi component unmount
  }, []);

  return (
    <>
      {/* Hiển thị GIF loading nếu đang tải và không phải là các đường dẫn được loại trừ */}
      {isLoading && !shouldHideHeaderFooter && (
        <div className="loading">
          <Lottie
            options={{ animationData: loadingAnimation, loop: true }}
            height={200}
            width={200}
          />
        </div>
      )}

      {/* Hiển thị Header và Footer, trừ khi chúng bị ẩn */}
      {!shouldHideHeaderFooter && !isLoading && (
        <>
          <HeaderClient />
          <Outlet />
          <FooterClient />
        </>
      )}

      {/* Chỉ hiển thị Outlet nếu là các đường dẫn loại trừ */}
      {shouldHideHeaderFooter && <Outlet />}
    </>
  );
};

export default LayoutClient;
