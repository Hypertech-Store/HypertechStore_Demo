import { createSlice } from "@reduxjs/toolkit";

const toggleSiteBarAdmin = createSlice({
  name: "toggleSiteBarAdmin",
  initialState: {
    isShow: false,
  },
  reducers: {
    setIsShowSiteBarAdmin: (state, actions) => {
      state.isShow = actions.payload;
    },
  },
});

export const { setIsShowSiteBarAdmin } = toggleSiteBarAdmin.actions;

export default toggleSiteBarAdmin.reducer;