import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ListProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const productsPerPage = 10; // Số sản phẩm trên mỗi trang
  const link = "http://127.0.0.1:8000/storage/";
  // Lấy danh mục
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/danh-muc/getAll",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setCategories(data); // Đảm bảo API trả về danh sách phù hợp
      } else {
        console.error("Failed to fetch categories:", data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Lấy danh mục con
  const fetchSubCategories = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/danh-muc-con/getAll",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setSubCategories(data);
      } else {
        console.error("Failed to fetch subcategories:", data);
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Lấy sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/san-pham/allProduct?page=${currentPage}&limit=${productsPerPage}`
        );
        const data = await response.json();
        if (data.status === "success" && Array.isArray(data.data.data)) {
          setProducts(data.data.data);
          setTotalProducts(data.data.total);
        } else {
          console.error("Failed to fetch products:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalProducts / productsPerPage); // Tính tổng số trang

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Lấy danh mục và danh mục con khi component mount
  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
  }, []);

  // Lấy tên danh mục theo ID
  const getCategoryNameById = (id) => {
    const category = categories.find((cat) => cat.id === id);
    return category ? category.ten_danh_muc : "N/A";
  };

  // Lấy tên danh mục con theo ID
  const getSubCategoryNameById = (id) => {
    if (!subCategories || subCategories.length === 0) {
      return "N/A"; // Trả về giá trị mặc định nếu danh sách rỗng
    }
    const subCategory = subCategories.find((subCat) => subCat.id === id);
    return subCategory ? subCategory.ten_danh_muc_con : "N/A";
  };

  // Xóa sản phẩm
  const handleRemove = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      try {
        await fetch(`http://127.0.0.1:8000/api/san-pham/delete/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        alert("Sản phẩm đã được xóa thành công.");
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Đã xảy ra lỗi khi xóa sản phẩm. Vui lòng thử lại.");
      }
    }
  };
  const handleAddProductClick = () => {
    navigate("/admin/them-san-pham"); // Navigate to the 'thêm-san-pham' page
  };

  const handleEditProductClick = () => {
    navigate("/admin/sua-san-pham"); // Navigate to the 'thêm-san-pham' page
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
              <h2 className="mb-0">Danh sách sản phẩm</h2>
            </div>
          </div>
          <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <span>All </span>
                <span className="text-body-tertiary fw-semibold">
                  ({totalProducts})
                </span>
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
                  <button
                    className="btn btn-primary"
                    onClick={handleAddProductClick}
                    id="addBtn"
                  >
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
                      <th style={{ width: "20%" }}>Hình ảnh</th>
                      <th style={{ width: "35%" }}>Tên sản phẩm</th>
                      <th style={{ width: "10%" }}>Giá</th>
                      <th style={{ width: "10%" }}>Danh mục</th>
                      <th style={{ width: "10%" }}>Tags</th>
                      <th style={{ width: "10%" }}>Danh mục con</th>
                      <th style={{ width: "10%" }}>Ngày tạo</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id}>
                        <td>
                          {index + 1 + (currentPage - 1) * productsPerPage}
                        </td>
                        <td>
                          <img
                            src={`${link}${product.duong_dan_anh}`}
                            alt={product.ten_san_pham}
                            style={{
                              width: "70px",
                              height: "70px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td>{product.ten_san_pham}</td>
                        <td>{Number(product.gia).toLocaleString()}₫</td>
                        <td>{getCategoryNameById(product.danh_muc_id)}</td>
                        <td>
                          <span className="badge bg-primary">
                            {product.trang_thai || "N/A"}
                          </span>
                        </td>
                        <td>
                          {getSubCategoryNameById(product.danh_muc_con_id)}
                        </td>
                        <td>
                          {new Date(product.created_at).toLocaleDateString()}
                        </td>
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
                              <a
                                className="dropdown-item"
                                onClick={handleEditProductClick}
                              >
                                Chỉnh sửa
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item text-danger"
                                onClick={() => handleRemove(product.id)}
                              >
                                Xóa
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                  {/* Hiển thị số trang */}
                  <div className="col-auto d-flex">
                    <p className="mb-0 me-3 fw-semibold text-body">
                      Trang {currentPage} / {totalPages}
                    </p>
                  </div>

                  {/* Điều hướng phân trang */}
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
                          key={index}
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
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

                {/* Hiển thị sản phẩm */}
                <div className="row">
                  {products.map((product) => (
                    <div key={product.id} className="col-12 mb-3">
                      <div className="product-item">{product.name}</div>
                    </div>
                  ))}
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
export default ListProducts;
