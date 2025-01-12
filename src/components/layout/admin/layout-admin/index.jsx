import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import HeaderAdmin from "../header-admin";
import SliderBarAdmin from "../slidebar-admin";
import Lottie from "react-lottie";
import "../../../../assets/css/loading.css";
import loadingAnimation from "../../../../../loading.json";

import "../../../../assets/img/favicons/manifest.json";
import "../../../../assets/vendors/simplebar/simplebar.min.js"; // SimpleBar JS (Ensure this is only imported once)
import "../../../../assets/js/config.js";

// Import CSS
import "../../../../assets/vendors/dropzone/dropzone.css";
import "../../../../assets/vendors/choices/choices.min.css";
import "../../../../assets/vendors/flatpickr/flatpickr.min.css";
import "../../../../assets/vendors/tinymce/tinymce.min.js";
import "../../../../assets/vendors/dropzone/dropzone-min.js";
import "../../../../assets/vendors/choices/choices.min.js";
import "../../../../assets/vendors/flatpickr/flatpickr.min.js";
import "../../../../assets/css/font.css";
import "../../../../assets/vendors/simplebar/simplebar.min.css"; // SimpleBar CSS
import "../../../../assets/vendors/unicons.iconscout.com/release/v4.0.8/css/line.css";
// import "../../../../assets/css/theme-rtl.min.css";
import "../../../../assets/css/theme.min.css";
import "../../../../assets/vendors/choices/choices.min.css";
import "../../../../assets/vendors/leaflet/leaflet.css";
import "../../../../assets/vendors/leaflet.markercluster/MarkerCluster.css";
import "../../../../assets/vendors/leaflet.markercluster/MarkerCluster.Default.css";
// Import JS
import "../../../../assets/vendors/popper/popper.min.js"; // Popper.js
import "../../../../assets/vendors/bootstrap/bootstrap.min.js"; // Bootstrap JS
import "../../../../assets/vendors/anchorjs/anchor.min.js"; // Anchor JS
// import '../../../../assets/vendors/is/is.min.js';
import "../../../../assets/vendors/fontawesome/all.min.js"; // FontAwesome
import "../../../../assets/vendors/lodash/lodash.min.js"; // Lodash
import "../../../../assets/vendors/list.js/list.min.js"; // List.js
import "../../../../assets/vendors/feather-icons/feather.min.js"; // Feather Icons
import "../../../../assets/vendors/choices/choices.min.js";
import "../../../../assets/vendors/dayjs/dayjs.min.js"; // Day.js
import "../../../../assets/vendors/leaflet/leaflet.js";
import "../../../../assets/vendors/leaflet.markercluster/leaflet.markercluster.js";
import "../../../../assets/vendors/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js";
import "../../../../assets/js/phoenix.js"; // Phoenix JS
import "../../../../assets/vendors/echarts/echarts.min.js"; // Swiper JS
import "../../../../assets/js/ecommerce-dashboard.js";
const LayoutAdmin = () => {
  document.title = "HyperTechStore – Dashboard";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const phoenixIsRTL = window.config.config.phoenixIsRTL;

    // Check if the elements exist before modifying them
    const linkDefault = document.getElementById("style-default");
    const userLinkDefault = document.getElementById("user-style-default");
    const linkRTL = document.getElementById("style-rtl");
    const userLinkRTL = document.getElementById("user-style-rtl");

    if (phoenixIsRTL) {
      if (linkDefault && userLinkDefault) {
        linkDefault.setAttribute("disabled", true);
        userLinkDefault.setAttribute("disabled", true);
      }
      document.querySelector("html")?.setAttribute("dir", "rtl");
    } else {
      if (linkRTL && userLinkRTL) {
        linkRTL.setAttribute("disabled", true);
        userLinkRTL.setAttribute("disabled", true);
      }
    }
  }, []);

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
      {/* Hiển thị GIF loading nếu đang tải, bọc ngoài toàn bộ trang */}
      {isLoading && (
        <div className="loading">
          <Lottie
            options={{ animationData: loadingAnimation, loop: true }}
            height={200}
            width={200}
          />
        </div>
      )}

      <main
        className="main"
        id="top"
        style={{ display: isLoading ? "none" : "block" }}
      >
        {/* Nội dung chính chỉ hiển thị khi không còn loading */}
        <SliderBarAdmin />
        <HeaderAdmin />
        <Outlet />
      </main>
    </>
  );
};

export default LayoutAdmin;
