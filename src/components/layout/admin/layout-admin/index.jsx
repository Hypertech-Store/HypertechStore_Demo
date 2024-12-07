import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../header-admin";
import SliderBarAdmin from "../slidebar-admin";
import FooterAdmin from "../footer-admin";

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

import "../../../../assets/vendors/dayjs/dayjs.min.js"; // Day.js
import "../../../../assets/vendors/leaflet/leaflet.js";
import "../../../../assets/vendors/leaflet.markercluster/leaflet.markercluster.js";
import "../../../../assets/vendors/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js";
import "../../../../assets/js/phoenix.js"; // Phoenix JS
import "../../../../assets/vendors/echarts/echarts.min.js"; // Swiper JS
import "../../../../assets/js/ecommerce-dashboard.js";
const LayoutAdmin = () => {
  document.title = "HyperTechStore – Dashboard";
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

  return (
    <>
      <main className="main" id="top">
        <SliderBarAdmin />
        <HeaderAdmin />
        <Outlet />
        <FooterAdmin />
      </main>
    </>
  );
};

export default LayoutAdmin;
