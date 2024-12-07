import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./assets/img/favicons/manifest.json";
import "./assets/vendors/simplebar/simplebar.min.js"; // SimpleBar JS (Ensure this is only imported once)
import "./assets/js/config.js";

// Import CSS
import "./assets/css/font.css";
import "./assets/vendors/simplebar/simplebar.min.css"; // SimpleBar CSS
import "./assets/vendors/unicons.iconscout.com/release/v4.0.8/css/line.css";
// import "./assets/css/theme-rtl.min.css";
import "./assets/css/theme.min.css";
import "./assets/vendors/swiper/swiper-bundle.min.css";

// Import JS
import "./assets/vendors/popper/popper.min.js"; // Popper.js
import "./assets/vendors/bootstrap/bootstrap.min.js"; // Bootstrap JS
import "./assets/vendors/anchorjs/anchor.min.js"; // Anchor JS
// import './assets/vendors/is/is.min.js';
import "./assets/vendors/fontawesome/all.min.js"; // FontAwesome
import "./assets/vendors/lodash/lodash.min.js"; // Lodash
import "./assets/vendors/list.js/list.min.js"; // List.js
import "./assets/vendors/feather-icons/feather.min.js"; // Feather Icons
import "./assets/vendors/dayjs/dayjs.min.js"; // Day.js
import "./assets/js/phoenix.js"; // Phoenix JS
import "./assets/vendors/swiper/swiper-bundle.min.js"; // Swiper JS
import "./assets/vendors/rater-js/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";

const AppWrapper = () => {
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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <StrictMode>
            <App />
          </StrictMode>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

createRoot(document.getElementById("root")).render(<AppWrapper />);
