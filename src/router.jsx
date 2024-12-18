import { Route, Routes } from "react-router-dom";
import LayoutClient from "./components/layout/client/layout-client";
import LayoutAdmin from "./components/layout/admin/layout-admin";

// Admin pages
// import AdminLogin from "./pages/admin/login";
import Dashboard from "./pages/admin/dashboard";
import AddProducts from "./pages/admin/product/addProducts";
import ListProducts from "./pages/admin/product/listProducts";
import AddCategory from "./pages/admin/category/addCategory";
import ListCategory from "./pages/admin/category/listCategory";
import AddSubcategory from "./pages/admin/subcategory/addSubcategory";
import ListSubcategory from "./pages/admin/subcategory/listSubcategory";
import ListCustomer from "./pages/admin/customer/listCustomer";
import DetailCustomer from "./pages/admin/customer/detailCustomer";
import ListAdmin from "./pages/admin/Administrators/listAdmin";
import AdminLogin from "./pages/admin/login";

import Orders from "./pages/admin/order";
import Chat from "./pages/admin/chat";

// Client pages
import HomeClient from "./pages/client/home";
import Shop from "./pages/client/product";
import ProductDetails from "./pages/client/productDetails";
import Wishlist from "./pages/client/wishlist";
import Cart from "./pages/client/cart";
import Shipping from "./pages/client/shipping";
import Order from "./pages/client/order";
import Deals from "./pages/admin/deals";
import Checkout from "./pages/client/checkout";
import Invoice from "./pages/client/invoice";
import Profile from "./pages/client/profile";
import Login from "./pages/client/login";
import Register from "./pages/client/register";
import ForPassword from "./pages/client/forgotPassword";
import Verification from "./pages/client/2FAVerification";
// import ResetPassword from "./pages/client/ressetPassword";
import PrivateRoute from "../src/components/layout/PrivateRoute.jsx"; // Import the PrivateRoute component

const Router = () => {
  return (
    <>
      <Routes>
        {/* Admin Routes */}

        {/* Wrap /admin with PrivateRoute */}
        <Route path="/login" element={<AdminLogin />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<Dashboard />} />
            <Route path="them-san-pham" element={<AddProducts />} />
            <Route path="danh-sach-san-pham" element={<ListProducts />} />
            <Route path="them-danh-muc" element={<AddCategory />} />
            <Route path="danh-sach-danh-muc" element={<ListCategory />} />
            <Route path="them-danh-muc-con" element={<AddSubcategory />} />
            <Route path="danh-sach-danh-muc-con" element={<ListSubcategory />} />
            <Route path="danh-sach-khach-hang" element={<ListCustomer />} />
            <Route path="chi-tiet-khach-hang" element={<DetailCustomer />} />
            <Route path="danh-sach-quan-tri" element={<ListAdmin />} />
            <Route path="don-hang" element={<Orders />} />
            <Route path="khuyen-mai" element={<Deals />} />
            <Route path="tin-nhan" element={<Chat />} />
          </Route>
        </Route>

        {/* </Route> */}

        {/* Client Routes */}
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<HomeClient />} />
          <Route path="cua-hang" element={<Shop />} />
          <Route path="san-pham-yeu-thich" element={<Wishlist />} />
          <Route path="gio-hang" element={<Cart />} />
          <Route path="chi-tiet-san-pham" element={<ProductDetails />} />
          <Route path="thong-tin-van-chuyen" element={<Shipping />} />
          <Route path="don-hang" element={<Order />} />
          <Route path="thanh-toan" element={<Checkout />} />
          <Route path="hoa-don" element={<Invoice />} />
          <Route path="thong-tin-tai-khoan" element={<Profile />} />
          <Route path="dang-nhap" element={<Login />} />
          <Route path="dang-ky" element={<Register />} />
          <Route path="quen-mat-khau" element={<ForPassword />} />
          <Route path="xac-minh-2-lop" element={<Verification />} />
        </Route>

        {/* Admin Routes */}
      </Routes>
    </>
  );
};

export default Router;
