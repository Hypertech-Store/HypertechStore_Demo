/* eslint-disable no-unused-vars */
import icon from "../../../assets/img/icons/image-icon.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const PaymentMethod = () => {
  const breadcrumbTitles = {
    "admin/phuong-thuc-thanh-toan": "Payment Method", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy
    
  const [formData, setFormData] = useState({
    image: null, // Dữ liệu hình ảnh
  });
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null); // Use directly an image object
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [methodData, setMethodData] = useState({
    id: null,
    name: "",
    image: null,
  });

  // Hàm xử lý khi ảnh được thả vào khu vực dropzone
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0]; // Lấy ảnh đầu tiên thả vào
    if (file) {
      setFormData({ image: file });
      setImagePreview(URL.createObjectURL(file)); // Cập nhật hình ảnh xem trước
    }
  };

  // Hàm xử lý sự kiện kéo thả trên khu vực dropzone
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Hàm xử lý khi người dùng chọn ảnh từ thiết bị
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ image: file });
      setImagePreview(URL.createObjectURL(file)); // Cập nhật hình ảnh xem trước
    }
  };

  const handleFileUpdateChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL for the selected file
      setImage(image); // Đặt tệp vào state
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("ten_phuong_thuc", formData.ten_phuong_thuc);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/phuong-thuc-thanh-toan",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      if (response.ok) {
        const newMethod = await response.json();
        console.log(newMethod.data);

        alert("Thêm phương thức thành công!");
        setPaymentMethods((prevMethods) => [...prevMethods, newMethod.data]);

        // Reset form sau khi thêm thành công
        setFormData({ ten_phuong_thuc: "", image: null });
        setImagePreview(null);
      } else {
        alert("Lỗi khi thêm phương thức: " + response.statusText);
      }
    } catch (error) {
      alert("Lỗi kết nối tới server: " + error.message);
    }
  };

  useEffect(() => {
    // Gọi API
    fetch("http://127.0.0.1:8000/api/phuong-thuc-thanh-toan")
      .then((response) => response.json())
      .then((data) => {
        setPaymentMethods(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching payment methods:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/phuong-thuc-thanh-toan/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Xóa thành công!");

        // Cập nhật danh sách phương thức trong state
        setPaymentMethods((prevMethods) =>
          prevMethods.filter((method) => method.id !== id)
        );
      } else {
        alert("Lỗi khi xóa: " + response.statusText);
      }
    } catch (error) {
      alert("Lỗi kết nối tới server: " + error.message);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    const formDataToSend = new FormData();
    formDataToSend.append("ten_phuong_thuc", updatedData.ten_phuong_thuc);
    if (updatedData.image) {
      formDataToSend.append("image", updatedData.image);
    }

    try {
      // Hiển thị trạng thái loading
      setLoading(true);

      const response = await fetch(
        `http://127.0.0.1:8000/api/phuong-thuc-thanh-toan/${id}`,
        {
          method: "PUT",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const updatedMethod = await response.json();
        alert("Cập nhật thành công!");

        // Cập nhật danh sách phương thức trong state
        setPaymentMethods((prevMethods) =>
          prevMethods.map((method) =>
            method.id === id ? { ...method, ...updatedMethod } : method
          )
        );
        setImagePreview(null);
      } else {
        alert("Lỗi khi cập nhật: " + response.statusText);
      }
    } catch (error) {
      alert("Lỗi kết nối tới server: " + error.message);
    } finally {
      // Ẩn trạng thái loading khi hoàn thành
      setLoading(false);
    }
  };

  // Hàm xử lý khi nhấn nút chỉnh sửa
  const handleEditClick = (id) => {
    // Giả sử bạn gọi API để lấy thông tin phương thức thanh toán theo id
    fetch(`http://127.0.0.1:8000/api/phuong-thuc-thanh-toan/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMethodData({
          id: data.data.id,
          name: data.data.ten_phuong_thuc, // Thay "ten_phuong_thuc" bằng tên trường đúng
          image: data.data.anh_phuong_thuc, // Thay "image" bằng tên trường đúng
        });
        console.log(methodData);
      })
      .catch((error) => {
        console.error("Error fetching payment method data:", error);
      });
  };

  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/admin">Bảng điều khiển</Link>
          </li>

          <li className="breadcrumb-item active" aria-current="page">
            {currentTitle}
          </li>
        </ol>
      </nav>
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">Danh sách phương thức thanh toán</h2>
          </div>
        </div>

        <div
          id="products"
          data-list='{"valueNames":["product","price","category","tags","vendor","time"],"page":10,"pagination":true}'
        >
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-3">
              <div className="search-box">
                <form className="position-relative">
                  <input
                    className="form-control search-input search"
                    type="search"
                    placeholder="Search products"
                    aria-label="Search"
                  />
                  <span className="fas fa-search search-box-icon" />
                </form>
              </div>

              <div className="ms-xxl-auto ms-auto">
                <button
                  className="btn btn-primary"
                  id="addBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#addMethod"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Thêm phương thức
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
                      className="white-space-nowrap fs-9 align-middle ps-4"
                      scope="col"
                      style={{ width: "15%" }}
                    >
                      STT
                    </th>
                    <th
                      className="white-space-nowrap align-middle ps-4"
                      scope="col"
                      style={{ width: "30%" }}
                      data-sort="product"
                    >
                      ẢNH PHƯƠNG THỨC
                    </th>

                    <th
                      className="align-middle ps-4"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      TÊN PHƯƠNG THỨC
                    </th>
                    <th className="align-middle ps-4" style={{ width: "5%" }}>
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {paymentMethods.map((method, index) => (
                    <tr key={method.id}>
                      <td className="ps-4">{index + 1}</td>
                      <td className="product align-middle ps-4">
                        <img
                          src={`http://127.0.0.1:8000/storage/${method.anh_phuong_thuc}`}
                          alt={method.ten_phuong_thuc}
                          style={{
                            maxWidth: "100px",
                            maxHeight: "50px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td className="tags align-middle review pb-2 ps-4">
                        {method.ten_phuong_thuc}
                      </td>

                      <td className="align-middle white-space-nowrap ps-4">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#editMethod"
                          aria-haspopup="true"
                          aria-expanded="false"
                          onClick={() => handleEditClick(method.id)}
                        >
                          <span className="fa-solid fa-pen-to-square fs-9" />
                        </button>
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          onClick={() => handleDelete(method.id)}
                        >
                          <span className="fa-solid fa-trash fs-9" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
              <div className="col-auto d-flex">
                <p className="mb-0 me-3 fw-semibold text-body"></p>
                {/* Showing{" "}
                {currentPage === 1
                  ? 1
                  : (currentPage - 1) * CategorysPerPage + 1}{" "}
                to {Math.min(currentPage * CategorysPerPage, categories.length)}{" "}
                of {categories.length} items */}
              </div>
              <div className="col-auto d-flex">
                <button className="" disabled>
                  <span className="fas fa-chevron-left" />
                </button>
                <ul className="mb-0 pagination">
                  <li className="">
                    <button className="page" type="button"></button>
                  </li>
                </ul>
                <button className="" disabled>
                  <span className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addMethod"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addMethod"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Thêm phương thức mới</h3>
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
                <div className="col-lg-12">
                  {/* Ảnh biến thể */}
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Ảnh phương thức
                    </label>

                    <div
                      className="dropzone dropzone-multiple p-0 mb-5"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      } // Kích hoạt input khi click
                      id="my-awesome-dropzone"
                      data-dropzone="data-dropzone"
                    >
                      <div className="fallback">
                        <input
                          id="fileInput"
                          type="file"
                          style={{ display: "none" }} // Ẩn input
                          onChange={handleFileChange}
                          multiple="multiple"
                        />
                      </div>

                      {formData.image ? (
                        <div className="dz-preview d-flex flex-wrap">
                          <div
                            className="border border-translucent bg-body-emphasis rounded-3 d-flex justify-content-center align-items-center position-relative me-2 mb-2 col-lg-12"
                            style={{ height: 150 }}
                          >
                            <img
                              className="dz-image"
                              src={URL.createObjectURL(formData.image)}
                              alt="Preview"
                              data-dz-thumbnail="data-dz-thumbnail"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                              }}
                            />
                            <a
                              className="dz-remove text-body-quaternary"
                              href="#!"
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
                          Drag your photo here
                          <span className="text-body-secondary px-1">or</span>
                          <button className="btn btn-link p-0" type="button">
                            Browse from device
                          </button>
                          <br />
                          <img
                            className="mt-3 me-2"
                            src={icon}
                            width={40}
                            alt="upload icon"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Biến thể ) */}
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên phương thức
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={formData.ten_phuong_thuc}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ten_phuong_thuc: e.target.value,
                        })
                      }
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
              <button className="btn btn-primary my-0" onClick={handleSubmit}>
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editMethod"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editMethod"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Sửa phương thức</h3>
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
                <div className="col-lg-12">
                  {/* Ảnh phương thức thanh toán */}
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Ảnh phương thức
                    </label>

                    <div
                      className="dropzone dropzone-multiple p-0 mb-5"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      } // Kích hoạt input khi click
                      id="my-awesome-dropzone"
                      data-dropzone="data-dropzone"
                    >
                      <div className="fallback">
                        <input
                          id="fileInput"
                          type="file"
                          style={{ display: "none" }} // Ẩn input
                          onChange={handleFileUpdateChange}
                          multiple="multiple"
                        />
                      </div>

                      {methodData.image || imagePreview ? (
                        <div className="dz-preview d-flex flex-wrap">
                          <div
                            className="border border-translucent bg-body-emphasis rounded-3 d-flex justify-content-center align-items-center position-relative me-2 mb-2 col-lg-12"
                            style={{ height: 150 }}
                          >
                            <img
                              className="dz-image"
                              src={
                                methodData.image
                                  ? "http://127.0.0.1:8000/storage/" +
                                    methodData.image
                                  : imagePreview
                              }
                              alt="Preview"
                              data-dz-thumbnail="data-dz-thumbnail"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                              }}
                            />
                            {/* Button to remove the image */}
                            <a
                              className="dz-remove text-body-quaternary position-absolute bottom-0 end-0 m-2"
                              href="#!"
                              onClick={() => {
                                setMethodData({ ...methodData, image: null });
                                setImagePreview(""); // Clear the preview when the image is removed
                              }}
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
                          Drag your photo here
                          <span className="text-body-secondary px-1">or</span>
                          <button className="btn btn-link p-0" type="button">
                            Browse from device
                          </button>
                          <br />
                          <img
                            className="mt-3 me-2"
                            src={icon}
                            width={40}
                            alt="upload icon"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Tên phương thức */}
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên phương thức
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={methodData.name} // Giá trị sẽ được cập nhật trong modal
                      onChange={(e) =>
                        setMethodData({ ...methodData, name: e.target.value })
                      }
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
              <button className="btn btn-primary my-0">Cập nhật</button>
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
export default PaymentMethod;
