// import products from "../../../../assets/img/products/1.png";
import { useState, useEffect } from "react";
import axios from "axios";

const link = "http://127.0.0.1:8000/storage/";
const ListSubcategory = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryDetails, setSubCategoryDetails] = useState({
    ten_danh_muc_con: "",
    image: "",
    danh_muc_id: "",
  });
  const [subCategoryId, setSubCategoryId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [subCategorysPerPage, setSubCategorysPerPage] = useState(10);
  const [categories, setCategories] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [imgSubCate, setImgSubCate] = useState(null);

  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  console.log(previewImage);


  useEffect(() => {
    // Fetch data for the current page
    axios
      .get(`http://127.0.0.1:8000/api/danh-muc-con?page=${currentPage}&limit=${subCategorysPerPage}`)
      .then((response) => {
        setSubCategories(response.data.data); // Dữ liệu của trang hiện tại
        setTotalPages(response.data.last_page); // Tổng số trang
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/danh-muc/getAll");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  const handleEditSubCategory = (subCategory) => {
    setSubCategoryDetails({
      ten_danh_muc_con: subCategory.ten_danh_muc_con,
      image: subCategory.img || "", // Ensure image is either empty or the actual image URL
      danh_muc_id: subCategory.danh_muc_id,
    });
    setSubCategoryId(subCategory.id);
    setImgSubCate(subCategory.img)
    console.log(subCategoryDetails);

  };

  // Handle category selection in the table
  const updateSubCategory = async () => {
    try {
      // Kiểm tra dữ liệu subCategoryDetails
      console.log("subCategoryDetails:", subCategoryDetails);
  
      // Tạo formData
      const formData = new FormData();
  
      // Kiểm tra và thêm các thuộc tính vào formData
      if (subCategoryDetails.danh_muc_id) {
        formData.append("danh_muc_id", subCategoryDetails.danh_muc_id);
      }
  
      if (subCategoryDetails.ten_danh_muc_con) {
        formData.append("ten_danh_muc_con", subCategoryDetails.ten_danh_muc_con);
      }
  
      // Kiểm tra và thêm hình ảnh vào formData nếu có
      if (subCategoryDetails.image) {
        formData.append("image", subCategoryDetails.image);
      }

      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      
      formData.append('_method', 'PUT');
      
      console.log("Form data trước khi gửi:", formData);
  
      // Gửi dữ liệu đến API
      const response = await axios.post(
        `http://127.0.0.1:8000/api/danh-muc-con/${subCategoryId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      // Kiểm tra phản hồi
      if (response.status === 200) {
        alert("Cập nhật danh mục con thành công!");
  
        setSubCategories((prev) =>
          prev.map((cat) =>
            cat.id === subCategoryId
              ? {
                  ...cat,
                  ten_danh_muc_con: subCategoryDetails.ten_danh_muc_con,
                  img: subCategoryDetails.image, // Cập nhật hình ảnh mới
                  danh_muc_id: subCategoryDetails.danh_muc_id,
                }
              : cat
          )
        );
  
        const modal = document.getElementById("updateCustomer");
        if (modal) {
          const bootstrapModal = bootstrap.Modal.getInstance(modal);
          bootstrapModal.hide();
        }
  
        console.log("Dữ liệu đã cập nhật:", subCategoryDetails);
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật danh mục:", error);
      alert("Không thể cập nhật danh mục. Vui lòng kiểm tra lại.");
    }
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
      setSubCategoryDetails((subCategoryDetails) => ({
        ...subCategoryDetails,
        image: file,
      }));
    }
  };

  const deleteSubCategory = async (id) => {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa danh mục này?");
    if (!isConfirmed) return;

    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/danh-muc-con/${id}`);
      if (response.status === 200) {
        alert("Xóa danh mục con thành công!");
        setSubCategories((prev) => prev.filter((cat) => cat.id !== id));
      }
    } catch (error) {
      console.error("Lỗi khi xóa danh mục con:", error);
      alert("Không thể xóa danh mục con.");
    }
  };


  return (
    <>
      <div className="content">
        <nav className="mb-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#!">Page 1</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#!">Page 2</a>
            </li>
            <li className="breadcrumb-item active">Default</li>
          </ol>
        </nav>
        <div className="mb-9">
          <div className="row g-3 mb-4">
            <div className="col-auto">
              <h2 className="mb-0">SubCategory</h2>
            </div>
          </div>
          <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <span>All </span>
                <span className="text-body-tertiary fw-semibold">(68817)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>Published </span>
                <span className="text-body-tertiary fw-semibold">(70348)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>Drafts </span>
                <span className="text-body-tertiary fw-semibold">(17)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>On discount </span>
                <span className="text-body-tertiary fw-semibold">(810)</span>
              </a>
            </li>
          </ul>
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
                <div className="scrollbar overflow-hidden-y">
                  <div className="btn-group position-static" role="group">
                    <div className="btn-group position-static text-nowrap">
                      <button
                        className="btn btn-phoenix-secondary px-7 flex-shrink-0"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        {""}
                        Category
                        <span className="fas fa-angle-down ms-2" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-group position-static text-nowrap">
                      <button
                        className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-reference="parent"
                      >
                        {""}
                        Vendor
                        <span className="fas fa-angle-down ms-2" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0">
                      More filters
                    </button>
                  </div>
                </div>
                <div className="ms-xxl-auto">
                  <button className="btn btn-link text-body me-4 px-0">
                    <span className="fa-solid fa-file-export fs-9 me-2" />
                    Export
                  </button>
                  <button className="btn btn-primary" id="addBtn">
                    <span className="fas fa-plus me-2" />
                    Add product
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
              <div className="table-responsive scrollbar mx-n1 px-1">
                <table className="table fs-9 mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: "5%" }}>STT</th>
                      <th style={{ width: "30%" }}>Tên danh mục</th>
                      <th style={{ width: "35%" }}>Tên danh mục con</th>
                      <th style={{ width: "20%" }}>Hình ảnh danh mục con</th>
                      <th style={{ width: "10%" }}>Ngày tạo</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="list" id="products-table-body">
                    {subCategories.map((subCategory, index) => (
                      <tr key={subCategory.id}>
                        <td>{(currentPage - 1) * subCategorysPerPage + index + 1}</td>
                        <td className="tags align-middle review pb-2 ps-3">
                          {subCategory.danh_muc?.ten_danh_muc}
                        </td>
                        <td className="product align-middle ps-4">
                          {subCategory.ten_danh_muc_con}
                        </td>
                        <td>
                          <img
                            src={`${link}${subCategory.img}`} // Kết hợp URL gốc và đường dẫn ảnh
                            alt={subCategory.ten_danh_muc_con}
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                          />
                        </td>
                        <td className="time align-middle text-body-tertiary text-opacity-85 ps-4">
                          {formatDate(subCategory.created_at)}
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
                              // Set the selected customer by using the customer object directly
                              handleEditSubCategory(subCategory);
                            }}
                          >
                            <span className="fa-solid fa-pen-to-square fs-9" />
                          </button>
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            onClick={() => deleteSubCategory(subCategory.id)}
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
                  <p className="mb-0 me-3 fw-semibold text-body">
                    Trang {currentPage} / {totalPages}
                  </p>
                </div>
                <div className="col-auto d-flex">
                  <button
                    className="page-link"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <span className="fas fa-chevron-left" />
                  </button>
                  {[...Array(totalPages).keys()].map((_, index) => (
                    <button
                      key={index}
                      className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                      onClick={() => goToPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
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
          <div className="modal-dialog modal-l modal-dialog-centered">
            <div className="modal-content bg-body-highlight p-6">
              <div className="modal-header justify-content-between border-0 p-0 mb-2">
                <h3 className="mb-0">Edit Category</h3>
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
                    <div className="mb-4">
                      <label className="text-body-highlight fw-bold mb-2">
                        Danh mục
                      </label>
                      <select
                        className="form-control"
                        value={subCategoryDetails.danh_muc_id} // Gán giá trị cho select dựa trên danh_muc_id
                        onChange={(e) =>
                          setSubCategoryDetails({
                            ...subCategoryDetails,
                            danh_muc_id: e.target.value, // Cập nhật danh_muc_id khi người dùng chọn danh mục
                          })
                        }
                      >
                        <option value="">Chọn danh mục</option>
                        {categories.map((category) => (
                          <option
                            key={category.id}
                            value={category.id}
                            selected={subCategoryDetails.danh_muc_id === category.id} // Đánh dấu option là selected nếu id khớp
                          >
                            {category.ten_danh_muc} {/* Hiển thị tên danh mục */}
                          </option>
                        ))}
                      </select>


                    </div>
                    <div className="mb-4">
                      <label className="text-body-highlight fw-bold mb-2">
                        Tên danh mục con
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={subCategoryDetails.ten_danh_muc_con}
                        onChange={(e) =>
                          setSubCategoryDetails({
                            ...subCategoryDetails,
                            ten_danh_muc_con: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="mb-4">
                      <label className="text-body-highlight fw-bold mb-2">Hình ảnh</label>
                      <input
                        className="form-control"
                        type="file"
                        accept="image/*" // Restrict to image files only
                        onChange={handleFileChange} // Call the file change handler
                      />
                      {
                        (previewImage || (imgSubCate && imgSubCate.trim() !== "")) ? (
                          <img
                            src={previewImage || `${link}${imgSubCate}`}
                            alt="imgSubCate"
                            style={{ maxWidth: '100%', maxHeight: '200px' }}
                            className="img-thumbnail"
                          />
                        ) : null
                      }

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
                <button className="btn btn-primary my-0" onClick={updateSubCategory}>
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
    </>
  );
};
export default ListSubcategory;
