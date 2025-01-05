import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import icon from "../../../../assets/img/icons/image-icon.png";
const listAdmin = () => {
  const breadcrumbTitles = {
    "admin/danh-sach-quan-tri": "List admin", // Đây là URL không có "/"
  };

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy
  const [adminId, setAdminId] = useState(null);
  const [quanTriViens, setQuanTriViens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isUpdating, setIsUpdating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const link = "http://127.0.0.1:8000/storage/";
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [matKhau, setMatKhau] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [tenDangNhap, setTenDangNhap] = useState("");
  const [email, setEmail] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [role, setRole] = useState("");
  const [trangThai, setTrangThai] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null); // If you allow image updates

  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 10,
  });

  // Hàm lấy dữ liệu từ API
  const fetchQuanTriViens = async (page = 1) => {
    setLoading(true);
    setError(null); // Reset lỗi khi bắt đầu tải
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/quan-tri-viens/getAll?page=${page}&per_page=${pagination.per_page}`
      );
      const { data, current_page, last_page } = response.data;
      setQuanTriViens(data);
      setCurrentPage(current_page);
      setTotalPages(last_page);
    } catch (err) {
      setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuanTriViens();
  }, []);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      fetchQuanTriViens(page);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Hàm xử lý khi ảnh được thả vào khu vực dropzone
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0]; // Lấy ảnh đầu tiên thả vào
    if (file) {
      setImage({ image: file });
      setImagePreview(URL.createObjectURL(file)); // Cập nhật hình ảnh xem trước
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("ten_dang_nhap", tenDangNhap);
    formData.append("mat_khau", matKhau);
    formData.append("ho_ten", hoTen);
    formData.append("email", email);
    formData.append("role", role); // Role will be populated correctly from the state
    formData.append("trang_thai", trangThai); // Trang Thai will be populated correctly from the state
    formData.append("image", image);
    formData.append("dia_chi", diaChi);
    formData.append("so_dien_thoai", soDienThoai);

    console.log("Form Data Sent:", {
      ten_dang_nhap: tenDangNhap,
      mat_khau: matKhau,
      ho_ten: hoTen,
      email: email,
      role: role,
      trang_thai: trangThai,
      image: image,
      dia_chi: diaChi,
      so_dien_thoai: soDienThoai,
    });

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/quan-tri-viens/add",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Thêm thành công!");

        // Cập nhật lại danh sách quanTriViens sau khi thêm thành công
        setQuanTriViens((prevQuanTriViens) => {
          return Array.isArray(prevQuanTriViens)
            ? [...prevQuanTriViens, data.data]
            : [data.data];
        });
        console.log("Server Response:", data);
      } else {
        alert("Có lỗi xảy ra: " + data.message);
        console.error("Server Error:", data.message);
      }
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Đã có lỗi xảy ra. Vui lòng thử lại!");
    }
  };

  const handleFileUpdateChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Cập nhật preview hình ảnh
      setImagePreview(URL.createObjectURL(file));
      setImage(file); // Lưu file ảnh vào state để gửi lên server
    }
  };

  const handleEditClick = async (id) => {
    console.log("Edit button clicked, admin ID:", id); // Log when the edit button is clicked

    // Set the adminId state to the selected ID
    setAdminId(id);

    try {
      console.log("Fetching admin data for ID:", id); // Log the ID being fetched
      // Fetch admin data from the backend API
      const response = await fetch(
        `http://127.0.0.1:8000/api/quan-tri-viens/detail/${id}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      console.log("Admin data fetched successfully:", data); // Log fetched data

      // Update states with the fetched data
      setHoTen(data.ho_ten);
      setTenDangNhap(data.ten_dang_nhap);
      setEmail(data.email);
      setSoDienThoai(data.so_dien_thoai);
      setRole(data.role);
      setTrangThai(data.trang_thai);
      setDiaChi(data.dia_chi);
      setImagePreview(data.anh_nguoi_dung); // Assuming the response includes an image URL if the admin has one
      setMatKhau(data.mat_khau); // Assuming password is set on edit, but might not be shown in input
    } catch (error) {
      console.error("Error fetching admin details:", error); // Log any error
    }
  };

  const handleUpdate = async () => {};

  const handleDelete = async (id) => {
    const confirmation = window.confirm("Bạn có chắc chắn muốn xóa?");
    if (!confirmation) return;

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/quan-tri-viens/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Xóa thành công!");

        // Cập nhật danh sách quanTriViens sau khi xóa thành công
        setQuanTriViens((prevQuanTriViens) => {
          return prevQuanTriViens.filter(
            (quanTriVien) => quanTriVien.id !== id
          );
        });
      } else {
        alert("Lỗi khi xóa: " + response.statusText);
      }
    } catch (error) {
      alert("Lỗi kết nối tới server: " + error.message);
    }
  };

  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/admin">Dashboard</Link>
          </li>

          <li className="breadcrumb-item active" aria-current="page">
            {currentTitle}
          </li>
        </ol>
      </nav>
      <div className="pb-6">
        <h2 className="mb-4">List Admin</h2>
        <div
          id="lealsTable"
          data-list='{"valueNames":["name","email","phone","contact","company","date"],"page":10,"pagination":true}'
        >
          <div className="row g-3 justify-content-between mb-4">
            <div className="search-box me-2">
              <form className="position-relative">
                <input
                  className="form-control search-input search"
                  type="search"
                  placeholder="Search by name"
                  aria-label="Search"
                />
                <span className="fas fa-search search-box-icon" />
              </form>
            </div>

            <div className="col-auto">
              <div className="d-flex">
                <button
                  className="btn px-3 btn btn-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#addAdmin"
                  data-boundary="window"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Thêm quản trị
                </button>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table fs-9 mb-0">
                <thead>
                  <tr>
                    <th
                      className="white-space-nowrap fs-9 align-middle ps-2"
                      scope="col"
                      style={{ width: "8%" }}
                    >
                      STT
                    </th>
                    <th
                      className="white-space-nowrap fs-9 align-middle ps-2"
                      scope="col"
                      style={{ width: "12%" }}
                    >
                      HÌNH ẢNH
                    </th>
                    <th
                      className="white-space-nowrap fs-9 align-middle ps-4"
                      scope="col"
                      style={{ width: "15%" }}
                    >
                      HỌ TÊN
                    </th>
                    <th
                      className="white-space-nowrap fs-9 align-middle ps-2"
                      scope="col"
                      style={{ width: "18%" }}
                    >
                      EMAIL
                    </th>
                    <th
                      className="white-space-nowrap fs-9 align-middle"
                      scope="col"
                      style={{ width: "15%" }}
                    >
                      SỐ ĐIỆN THOẠI
                    </th>
                    {/* <th
                      className="white-space-nowrap fs-9 align-middle ps-2"
                      scope="col"
                      style={{ width: "13%" }}
                    >
                      TÊN NGƯỜI DÙNG
                    </th> */}
                    <th
                      className="white-space-nowrap fs-9 align-middle"
                      scope="col"
                      style={{ width: "24%" }}
                    >
                      ĐỊA CHỈ
                    </th>
                    {/* <th
                      className="white-space-nowrap fs-9 align-middle"
                      scope="col"
                      style={{ width: "10%" }}
                    >
                      NGÀY TẠO
                    </th> */}
                    <th className="align-middle"></th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {quanTriViens.map((admin, index) => (
                    <tr key={admin.id}>
                      <td className="product align-middle ps-2">
                        {(currentPage - 1) * 10 + index + 1}
                      </td>
                      <td className="tags align-middle review pb-2 ps-2">
                        <img
                          className="rounded-circle"
                          src={`${link}${admin.anh_nguoi_dung}`}
                          alt="Admin Avatar"
                          style={{
                            maxWidth: "60px",
                            maxHeight: "60px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td className="tags align-middle review pb-2 ps-4">
                        <a
                          className="fw-bold"
                          style={{ textDecoration: "none" }}
                        >
                          {admin.ho_ten}
                        </a>
                      </td>

                      <td className="tags align-middle review pb-2 ps-2">
                        {admin.email}
                      </td>
                      <td className="tags align-middle review pb-2">
                        {admin.so_dien_thoai}
                      </td>
                      {/* <td className="tags align-middle review pb-2 ps-2">
                        <span className="fw-semibold text-body-highlight admin-username">
                          {admin.ten_dang_nhap}
                        </span>
                      </td> */}
                      <td className="tags align-middle review pb-2">
                        <span className="fw-semibold text-body-highlight admin-address">
                          {admin.dia_chi}
                        </span>
                      </td>
                      {/* <td className="tags align-middle review pb-2">
                        {new Date(admin.created_at).toLocaleDateString()}
                      </td> */}
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                        <div className="btn-reveal-trigger position-static">
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs-10" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a className="dropdown-item" href="#view">
                              Chi tiết
                            </a>
                            <button
                              className="dropdown-item"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#editAdmin"
                              data-boundary="window"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                              onClick={() => handleEditClick(admin.id)} // Pass the relevant id
                            >
                              Chỉnh sửa
                            </button>
                            <div className="dropdown-divider" />
                            <button
                              className="dropdown-item text-danger"
                              onClick={() => handleDelete(admin.id)}
                            >
                              Xóa
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
            <div className="col-auto d-flex">
              <p className="mb-0 me-3 fw-semibold text-body">
                Trang {pagination.current_page} / {totalPages}
              </p>
            </div>
            <div className="col-auto d-flex">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="fas fa-chevron-left" />
              </button>
              <ul className="mb-0 pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i + 1}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addAdmin"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addAdmin"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          style={{ width: "1110px" }}
        >
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Thêm quản trị</h3>
              <button
                className="btn btn-sm btn-phoenix-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="fas fa-times text-danger" />
              </button>
            </div>
            <div className="modal-body px-0 mt-1">
              <div className="row g-4">
                {/* Image Section */}
                <div className="col-lg-12">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Hình Ảnh
                    </label>
                    <div
                      className="dropzone dropzone-multiple p-0 mb-5"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                      id="my-awesome-dropzone"
                      data-dropzone="data-dropzone"
                    >
                      <div className="fallback">
                        <input
                          id="fileInput"
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                          multiple="multiple"
                        />
                      </div>

                      {imagePreview ? (
                        <div className="dz-preview d-flex flex-wrap">
                          <div
                            className="border border-translucent bg-body-emphasis rounded-3 d-flex justify-content-center align-items-center position-relative me-2 mb-2 col-lg-12"
                            style={{ height: 150 }}
                          >
                            <img
                              className="dz-image"
                              src={imagePreview}
                              alt="Preview"
                              data-dz-thumbnail="data-dz-thumbnail"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                              }}
                            />
                            <a
                              className="dz-remove text-body-quaternary position-absolute bottom-0 end-0 m-2"
                              href="#!"
                              onClick={() => setImagePreview(null)}
                              data-dz-remove="data-dz-remove"
                            >
                              <span data-feather="x" />
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="dz-message text-body-tertiary text-opacity-85"
                          data-dz-message="data-dz-message"
                        >
                          Kéo ảnh vào đây
                          <span className="text-body-secondary px-1">hoặc</span>
                          <button className="btn btn-link p-0" type="button">
                            Duyệt từ thiết bị
                          </button>
                          <br />
                          <img
                            className="mt-3 me-2"
                            src={icon} // Replace with a proper icon URL
                            width={40}
                            alt="upload icon"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Họ và tên
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nhập họ tên"
                      value={hoTen}
                      onChange={(e) => setHoTen(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên đăng nhập
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nhập tên người dùng"
                      value={tenDangNhap}
                      onChange={(e) => setTenDangNhap(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Nhập địa chỉ email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Số điện thoại
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nhập số điện thoại"
                      value={soDienThoai}
                      onChange={(e) => setSoDienThoai(e.target.value)}
                    />
                  </div>
                </div>

                {/* Additional fields */}
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Vai trò
                    </label>
                    <select
                      className="form-control"
                      value={role} // Make sure the value is tied to the state `role`
                      onChange={(e) => setRole(e.target.value)} // Update state on change
                    >
                      <option value="" disabled={role !== ""}>
                        Chọn vai trò
                      </option>
                      <option value="0">Quản trị viên</option>
                      <option value="1">Nhân viên</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Trạng thái
                    </label>
                    <select
                      className="form-control"
                      value={trangThai} // Make sure the value is tied to the state `trangThai`
                      onChange={(e) => setTrangThai(e.target.value)} // Update state on change
                    >
                      <option value="" disabled={trangThai !== ""}>
                        Chọn trạng thái
                      </option>
                      <option value="1">Hoạt động</option>
                      <option value="0">Ngừng hoạt động</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Địa chỉ
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nhập địa chỉ"
                      value={diaChi}
                      onChange={(e) => setDiaChi(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Mật khẩu
                    </label>
                    <div className="position-relative">
                      <input
                        className="form-control"
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Nhập mật khẩu"
                        value={matKhau}
                        onChange={(e) => setMatKhau(e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary"
                        onClick={togglePasswordVisibility}
                      >
                        <span
                          className={
                            passwordVisible
                              ? "uil uil-eye-slash"
                              : "uil uil-eye"
                          }
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 pt-0 px-0 pb-0">
              <button
                className="btn btn-link text-danger px-3 my-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Hủy bỏ
              </button>
              <button className="btn btn-primary my-0" onClick={handleSubmit}>
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editAdmin"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editAdmin"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          style={{ width: "1110px" }}
        >
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Sửa quản trị</h3>
              <button
                className="btn btn-sm btn-phoenix-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="fas fa-times text-danger" />
              </button>
            </div>
            <div className="modal-body px-0 mt-1">
              <div className="row g-4">
                {/* Image Section */}

                <div className="col-lg-12">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Hình Ảnh
                    </label>
                    <div
                      className="dropzone dropzone-multiple p-0 mb-5"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      <div className="fallback">
                        <input
                          id="fileInput"
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleFileUpdateChange}
                          multiple
                        />
                      </div>
                      {imagePreview ? (
                        <div className="dz-preview d-flex flex-wrap">
                          <div
                            className="border border-translucent bg-body-emphasis rounded-3 d-flex justify-content-center align-items-center position-relative me-2 mb-2 col-lg-12"
                            style={{ height: 150 }}
                          >
                            <img
                              className="dz-image"
                              src={
                                imagePreview?.startsWith("blob:")
                                  ? imagePreview // Ảnh vừa chọn
                                  : `${link}${imagePreview}` // Ảnh từ API
                              }
                              alt="Preview"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                              }}
                            />
                            <a
                              className="dz-remove text-body-quaternary position-absolute bottom-0 end-0 m-2"
                              href="#!"
                              onClick={() => {
                                setImagePreview(null);
                                setImage(null); // Xoá tệp tạm để ngăn cập nhật
                              }}
                            >
                              <span data-feather="x" />
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="dz-message text-body-tertiary text-opacity-85">
                          Kéo ảnh vào đây
                          <span className="text-body-secondary px-1">hoặc</span>
                          <button className="btn btn-link p-0" type="button">
                            Duyệt từ thiết bị
                          </button>
                          <br />
                          <img
                            className="mt-3 me-2"
                            src={icon} // Replace with a proper icon URL
                            width={40}
                            alt="upload icon"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Họ và tên
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nhập họ tên"
                      value={hoTen}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên đăng nhập
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nhập tên người dùng"
                      value={tenDangNhap}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Nhập địa chỉ email"
                      value={email}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Số điện thoại
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nhập số điện thoại"
                      value={soDienThoai}
                    />
                  </div>
                </div>
                {/* Additional fields */}
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Vai trò
                    </label>
                    <select className="form-control" value={role}>
                      <option value="" disabled={role !== ""}>
                        Chọn vai trò
                      </option>
                      <option value="0">Quản trị viên</option>
                      <option value="1">Nhân viên</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Trạng thái
                    </label>
                    <select className="form-control" value={trangThai}>
                      <option value="" disabled={trangThai !== ""}>
                        Chọn trạng thái
                      </option>
                      <option value="1">Hoạt động</option>
                      <option value="0">Ngừng hoạt động</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Địa chỉ
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Nhập địa chỉ"
                      value={diaChi}
                      rows="3" // Thêm số dòng để quản lý kích thước của textarea
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer border-0 pt-0 px-0 pb-0">
              <button
                className="btn btn-link text-danger px-3 my-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Hủy bỏ
              </button>
              <button
                className="btn btn-primary my-0"
                onClick={() => handleUpdate(adminId)} // pass adminId if available
                disabled={isUpdating}
              >
                {isUpdating ? "Đang cập nhật..." : "Cập nhật"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer position-absolute">
        <div className="row g-0 justify-content-between align-items-center h-100">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 mt-2 mt-sm-0 text-body">
              Thank you for creating with Phoenix
              <span className="d-none d-sm-inline-block" />
              <span className="d-none d-sm-inline-block mx-1">|</span>
              <br className="d-sm-none" />
              2024 ©
              <a className="mx-1" href="https://themewagon.com/">
                Themewagon
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-body-tertiary text-opacity-85">v1.18.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default listAdmin;
