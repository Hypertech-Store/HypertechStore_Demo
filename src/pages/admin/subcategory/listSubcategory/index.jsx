// import products from "../../../../assets/img/products/1.png";
import { useState, useEffect } from "react";
import axios from "axios";

const link = "http://127.0.0.1:8000/storage/";
const ListSubcategory = () => {
  const [categories, setCategories] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState({
    name: "",
    description: "",
  });
  const [categoryId, setCategoryId] = useState(null);
  // const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);   
  const [CategorysPerPage, setCategorysPerPage] = useState(10);

  useEffect(() => {
    // Fetch data for the current page
    axios
      .get(`http://127.0.0.1:8000/api/danh-muc-con?page=${currentPage}&limit=${CategorysPerPage}`)
      .then((response) => {
        setCategories(response.data.data); // Dữ liệu của trang hiện tại
        setTotalPages(response.data.last_page); // Tổng số trang
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  // Hàm chuyển trang
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  // Function to format date
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A"; // Return 'N/A' if date is null or undefined

    const date = new Date(dateStr);
    const options = {
      day: "numeric", // Day of the month (1, 2, ...)
      month: "short", // Abbreviated month name (e.g. 'Jan', 'Feb')
      year: "numeric", // Full year
      hour: "2-digit", // Hour with two digits (12:00 PM, 01:00 PM)
      minute: "2-digit", // Minute with two digits (12:05 PM, 01:45 PM)
      hour12: true, // Use 12-hour time format
    };

    return date.toLocaleString("en-US", options);
  };

  // Handle category selection in the table
  const updateCategory = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/danh-muc-con/${categoryId}`,
        {
          ten_danh_muc: categoryDetails.name,
          mo_ta: categoryDetails.description,
        }
      );
      if (response.status === 200) {
        alert("Cập nhật danh mục thành công!");
        // Cập nhật danh sách categories sau khi sửa
        setCategories((prev) =>
          prev.map((cat) =>
            cat.id === categoryId
              ? { ...cat, ten_danh_muc: categoryDetails.name, mo_ta: categoryDetails.description }
              : cat
          )
        );
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật danh mục:", error);
      alert("Không thể cập nhật danh mục.");
    }
  };

  // Hàm xóa danh mục
  const deleteCategory = async (id) => {
    // Hiển thị hộp thoại xác nhận
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa danh mục này?");
    
    if (!isConfirmed) {
      return; // Nếu người dùng không xác nhận, không thực hiện hành động xóa
    }
  
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/danh-muc-con/${id}`
      );
      if (response.status === 200) {
        alert("Xóa danh mục thành công!");
        // Loại bỏ danh mục khỏi danh sách
        setCategories((prev) => prev.filter((cat) => cat.id !== id));
      }
    } catch (error) {
      console.error("Lỗi khi xóa danh mục:", error);
      alert("Không thể xóa danh mục.");
    }
  };
  

  const handleEditCategory = (category) => {
    setCategoryId(category.id);
    setCategoryDetails({
      name: category.ten_danh_muc,
      description: category.mo_ta,
    });
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
                    {categories.map((category, index) => (
                      <tr key={category.id}>
                        <td>{(currentPage - 1) * CategorysPerPage + index + 1}</td>
                        <td className="tags align-middle review pb-2 ps-3">
                          {category.danh_muc?.ten_danh_muc}
                        </td>
                        <td className="product align-middle ps-4">
                          {category.ten_danh_muc_con}
                        </td>
                        <td>
                          <img
                            src={`${link}${category.img}`} // Kết hợp URL gốc và đường dẫn ảnh
                            alt={category.ten_danh_muc_con}
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                          />
                        </td>
                        <td className="time align-middle text-body-tertiary text-opacity-85 ps-4">
                          {formatDate(category.created_at)}
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
                              handleEditCategory(category);
                            }}
                          >
                            <span className="fa-solid fa-pen-to-square fs-9" />
                          </button>
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            onClick={() => deleteCategory(category.id)}
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
