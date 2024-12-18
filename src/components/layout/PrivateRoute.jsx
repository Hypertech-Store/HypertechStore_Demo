import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    // Lấy role từ sessionStorage và chuyển về kiểu số
    const role = Number(sessionStorage.getItem("customRole"));

    // Kiểm tra nếu không có role trong sessionStorage, điều hướng về /login
    if (!role && role !== 0 && role !== 1) {
        return <Navigate to="/login" />;
    }

    // Kiểm tra quyền truy cập, nếu role không phải 0 hoặc 1, chuyển hướng về login
    const isAuthenticated = role === 0 || role === 1;

    if (!isAuthenticated) {
        // Nếu không được xác thực, điều hướng về trang login
        return <Navigate to="/login" />;
    }

    // Nếu có quyền truy cập, render các route con trong vùng bảo vệ
    return <Outlet />;
};

export default PrivateRoute;
