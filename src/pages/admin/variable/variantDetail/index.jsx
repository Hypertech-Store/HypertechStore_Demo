/* eslint-disable no-unused-vars */
import icon from "../../../../assets/img/icons/image-icon.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ListValue = () => {
  const breadcrumbTitles = {
    "admin/chi-tiet-bien-the": "Danh sách biến thể", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  const [formData, setFormData] = useState({
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(""); // Hình ảnh xem trước
  const [data, setData] = useState([]);
  const [variantId, setVariantId] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0); // Total number of items
  const [totalPages, setTotalPages] = useState(1);
  const [bienThePerPage, setBienThe] = useState(10);

  
  // console.log(data);

  useEffect(() => {
    // Fetch data for the current page
    axios
      .get(
        `http://127.0.0.1:8000/api/get-bien-the-paginate?page=${currentPage}&limit=${bienThePerPage}`
      )
      .then((response) => {
        console.log(response);
        
        setData(response.data.data); 
        setTotalItems(response.data.total); 
        setTotalPages(response.data.last_page); 
        console.log(totalPages);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
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
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file)); // Cập nhật hình ảnh xem trước
    }
  };

  const handleEditVariant = (bienThe) => {
    // Log the variant data to the console
    console.log(bienThe);
    setVariantId(bienThe.bienTheSanPham.id);
    // Set the formData with the existing values of the variant
    setFormData({
      image:
        "http://127.0.0.1:8000/storage/" +
        bienThe.hinhAnhSanPham[0]?.duong_dan_hinh_anh || "",
      gia: bienThe.bienTheSanPham.gia,
      so_luong_kho: bienThe.bienTheSanPham.so_luong_kho,
      san_pham_id: bienThe.bienTheSanPham.san_pham_id,
    });

    // Set the image preview if there is an image
    setImagePreview(
      "http://127.0.0.1:8000/storage/" +
      bienThe.hinhAnhSanPham[0]?.duong_dan_hinh_anh || ""
    );
  };

  const handleUpdateVariant = async (event) => {
    event.preventDefault(); // Ngừng hành vi mặc định của form

    try {
      if (!variantId) {
        alert('Không tìm thấy ID biến thể để cập nhật!');
        return;
      }

      if (!formData.san_pham_id || !formData.gia || !formData.so_luong_kho) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append('san_pham_id', formData.san_pham_id);

      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      formDataToSend.append('gia', formData.gia);
      formDataToSend.append('so_luong_kho', formData.so_luong_kho);
      formDataToSend.append('_method', 'PUT');

      // Gửi yêu cầu cập nhật bằng axios
      const response = await axios.post(
        `http://127.0.0.1:8000/api/bien-the-san-pham/${variantId}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedData = response.data.data;

      if (updatedData && updatedData.id) {
        setImagePreview(updatedData.image || "");
        alert('Cập nhật biến thể thành công!');

        

        axios
          .get(
            `http://127.0.0.1:8000/api/get-bien-the-paginate?page=${currentPage}&limit=${bienThePerPage}`
          )
          .then((response) => {
            setData(response.data.data);
            setTotalItems(response.data.total);
            setTotalPages(response.data.last_page);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });


        // Đóng modal sau khi cập nhật
        const modalElement = document.getElementById('updateCustomer');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) modalInstance.hide();
      } else {
        alert("Cập nhật biến thể thất bại. Vui lòng kiểm tra lại!");
      }
    } catch (error) {
      console.error("Error updating variant:", error);

      const errorMessage = error.response?.data?.message || error.message;
      alert('Cập nhật thất bại! Chi tiết: ' + errorMessage);
    }
  };



  const handleRemoveImage = () => {
    setFormData({ ...formData, image: null });
    setImagePreview("");
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
            <h2 className="mb-0 mt-3">Danh sách biến thể</h2>
          </div>
          <div className="col-auto ms-auto mt-3">
            <div className="search-box">
              <form className="position-relative">
                <input
                  className="form-control search-input search"
                  type="search"
                  placeholder="Tìm kiếm biến thể"
                  aria-label="Search"
                />
                <span className="fas fa-search search-box-icon" />
              </form>
            </div>
          </div>
        </div>

        <div
          id="products"
          data-list='{"valueNames":["product","price","category","tags","vendor","time"],"page":10,"pagination":true}'
        >
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table fs-9 mb-0">
                <thead>
                  <tr>
                    <th
                      className="white-space-nowrap fs-9 align-middle ps-0"
                      scope="col"
                      style={{ width: "5%" }}
                    >
                      STT
                    </th>
                    <th className="align-middle" style={{ width: "15%" }}>
                      SẢN PHẨM
                    </th>
                    <th className="align-middle" style={{ width: "20%" }}>
                      ẢNH BIẾN THỂ
                    </th>
                    <th
                      className="white-space-nowrap align-middle ps-4"
                      scope="col"
                      style={{ width: "25%" }}
                      data-sort="product"
                    >
                      BIẾN THỂ
                    </th>
                    <th
                      className="align-middle ps-3"
                      scope="col"
                      style={{ width: "20%" }}
                    >
                      GIÁ BIẾN THỂ
                    </th>

                    <th
                      className="align-middle ps-4"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      HÀNG TỒN KHO
                    </th>
                    <th className="align-middle" style={{ width: "5%" }}>
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {data.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center">
                        Không có dữ liệu
                      </td>
                    </tr>
                  ) : (
                    data.map((item, index) => (
                      <tr key={item.bienTheSanPham.id}>
                        <td className="align-middle">
                          {(currentPage - 1) * 10 + index + 1}
                        </td >
                        <td>{item.bienTheSanPham.san_pham.ten_san_pham}</td>
                        <td className="tags align-middle review pb-2 ps-3">
                          {item.hinhAnhSanPham &&
                            Array.isArray(item.hinhAnhSanPham) ? (
                            item.hinhAnhSanPham.map((link, index) => (
                              <img
                                key={index} // Dùng index hoặc một thuộc tính duy nhất từ đối tượng link như ID
                                src={`http://127.0.0.1:8000/storage/${link.duong_dan_hinh_anh}`}
                                alt={`${item.bienTheSanPham.san_pham.ten_san_pham}`}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  objectFit: "cover",
                                  marginRight: "5px", // Thêm khoảng cách giữa các hình ảnh
                                }}
                              />
                            ))
                          ) : (
                            <span>Không có hình ảnh</span> // Nếu không có ảnh, sẽ hiển thị thông báo
                          )}
                        </td>

                        <td className="time align-middle text-body-tertiary text-opacity-85 ps-4">
                          {item.lienKetBienThe.map((link) => (
                            <div key={link.id}>{link.ten_gia_tri}</div>
                          ))}
                        </td>
                        <td className="time align-middle text-body-tertiary text-opacity-85 ps-4">
                          {Number(item.bienTheSanPham.gia).toLocaleString()} VNĐ
                        </td>
                        <td className="time align-middle text-body-tertiary text-opacity-85 ps-4">
                          {item.bienTheSanPham.so_luong_kho}
                        </td>
                        <td className="align-middle white-space-nowrap">
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#updateCustomer"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                            onClick={() => {
                              handleEditVariant(item);
                            }}
                          >
                            <span className="fa-solid fa-pen-to-square fs-9" />
                          </button>
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                          >
                            <span className="fa-solid fa-trash fs-9" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
              {/* Hiển thị số trang */}
              <div className="col-auto d-flex">
                <p className="mb-0 me-3 fw-semibold text-body">
                  Trang {currentPage} / {totalPages}
                </p>
              </div>

              {/* Phần nút phân trang */}
              <div className="col-auto d-flex">
                {/* Nút Previous */}
                <button
                  className="page-link"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <span className="fas fa-chevron-left" />
                </button>

                {/* Danh sách các trang */}
                <ul className="pagination mb-0">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index + 1}
                      className={`page-item ${currentPage === index + 1 ? "active" : ""
                        }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => goToPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Nút Next */}
                <button
                  className="page-link pe-0"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <span className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="updateCustomer"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="updateCustomer"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Sửa biến thể</h3>
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
                      Ảnh biến thể
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

                      {imagePreview ? (
                        <div className="dz-preview d-flex flex-wrap">
                          <div
                            className="border border-translucent bg-body-emphasis rounded-3 d-flex justify-content-center align-items-center position-relative me-2 mb-2 col-lg-12"
                            style={{ height: 150 }}
                          >
                            <img
                              className="dz-image"
                              src={imagePreview} // Hiển thị ảnh xem trước nếu có
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
                              onClick={handleRemoveImage} // Xử lý khi loại bỏ ảnh
                            >
                              <span data-feather="x" />
                            </a>
                          </div>
                        </div>
                      ) : formData.image ? (
                        <div className="dz-preview d-flex flex-wrap">
                          <div
                            className="border border-translucent bg-body-emphasis rounded-3 d-flex justify-content-center align-items-center position-relative me-2 mb-2 col-lg-12"
                            style={{ height: 150 }}
                          >
                            <img
                              className="dz-image"
                              src={formData.image} // Hiển thị ảnh từ formData nếu không có imgPreview
                              alt="Ảnh biến thể"
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
                              onClick={handleRemoveImage} // Xử lý khi loại bỏ ảnh
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
                          Kéo ảnh của bạn vào đây
                          <span className="text-body-secondary px-1">or</span>
                          <button className="btn btn-link p-0" type="button">
                            Duyệt từ thiết bị
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

                  {/* Giá biến thể */}
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Giá biến thể
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nhập giá biến thể"
                      value={Number(formData.gia)}
                      onChange={(e) =>
                        setFormData({ ...formData, gia: e.target.value })
                      }
                    />
                  </div>

                  {/* Hàng tồn kho */}
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Hàng tồn kho
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      min="0"
                      placeholder="Nhập số lượng hàng tồn kho"
                      value={formData.so_luong_kho} // Gắn giá trị từ formData
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          so_luong_kho: e.target.value,
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
                Cancel
              </button>
              <button
                className="btn btn-primary my-0"
                onClick={handleUpdateVariant} // Gọi handleUpdateVariant khi bấm nút Cập nhật
              >
                Update
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
export default ListValue;
