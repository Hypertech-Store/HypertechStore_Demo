import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
const listCategory = () => {
  const breadcrumbTitles = {
    "admin/danh-sach-danh-muc": "List category", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [categories, setCategories] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [categoryDetails, setCategoryDetails] = useState({
    name: "",
    description: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [categoryId, setCategoryId] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [totalPages, setTotalPages] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [CategorysPerPage] = useState(10);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Fetch data from API on component mount
    axios
      .get(
        `http://127.0.0.1:8000/api/danh-muc?page=${currentPage}&limit=${CategorysPerPage}`
      )
      .then((response) => {
        setCategories(response.data.data); // Set categories state from the response data's 'data' field
        setTotalPages(response.data.last_page); // Set total pages from the response data's 'last_page' field
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage, CategorysPerPage]); // Add CategorysPerPage to the dependency array if you plan to change it.

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
        `http://127.0.0.1:8000/api/danh-muc/${categoryId}`,
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
              ? {
                  ...cat,
                  ten_danh_muc: categoryDetails.name,
                  mo_ta: categoryDetails.description,
                }
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
    const isConfirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa danh mục này?"
    );

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
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">List category</h2>
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
                    <th
                      className="white-space-nowrap fs-9 align-middle ps-0"
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
                      CATEGORY NAME
                    </th>
                    <th
                      className="align-middle ps-3"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      DESCRIPTION
                    </th>

                    <th
                      className="align-middle ps-4"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      PUBLISHED ON
                    </th>
                    <th className="align-middle ps-4" style={{ width: "5%" }}>
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {categories.map((category, index) => (
                    <tr key={category.id}>
                      <td>
                        {(currentPage - 1) * CategorysPerPage + index + 1}
                      </td>
                      <td className="product align-middle ps-4">
                        {category.ten_danh_muc}
                      </td>
                      <td className="tags align-middle review pb-2 ps-3">
                        {category.mo_ta}
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
                {/* Showing{" "}
                {currentPage === 1
                  ? 1
                  : (currentPage - 1) * CategorysPerPage + 1}{" "}
                to {Math.min(currentPage * CategorysPerPage, categories.length)}{" "}
                of {categories.length} items */}
              </div>
              <div className="col-auto d-flex">
                <button
                  className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <span className="fas fa-chevron-left" />
                </button>
                <ul className="mb-0 pagination">
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={currentPage === index + 1 ? "active" : ""}
                    >
                      <button
                        className="page"
                        type="button"
                        onClick={() => goToPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className={`page-link ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
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
                      Category Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={categoryDetails.name}
                      onChange={(e) =>
                        setCategoryDetails({
                          ...categoryDetails,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Description
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={categoryDetails.description}
                      onChange={(e) =>
                        setCategoryDetails({
                          ...categoryDetails,
                          description: e.target.value,
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
              <button className="btn btn-primary my-0" onClick={updateCategory}>
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
export default listCategory;
