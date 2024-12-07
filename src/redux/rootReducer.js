import { combineReducers } from "@reduxjs/toolkit";
import toggleSiteBarAdmin from "./slice/toggleSiteBarAdminSlice";

const rootReducer = combineReducers({
  toggleSiteBarAdmin: toggleSiteBarAdmin,
});

export default rootReducer;
