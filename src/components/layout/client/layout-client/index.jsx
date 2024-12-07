import { Outlet, useLocation } from "react-router-dom";
import HeaderClient from "../header-client";
import FooterClient from "../footer-client";

const LayoutClient = () => {
  const location = useLocation();

  // Danh sách các đường dẫn không cần Header và Footer
  const excludePaths = ["/dang-nhap", "/dang-ky", "/quen-mat-khau"];

  // Kiểm tra nếu đường dẫn hiện tại nằm trong danh sách excludePaths
  const shouldHideHeaderFooter = excludePaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <HeaderClient />}
      <div>
        <Outlet />
      </div>
      {!shouldHideHeaderFooter && <FooterClient />}
    </>
  );
};

export default LayoutClient;
