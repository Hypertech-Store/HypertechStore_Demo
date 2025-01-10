import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const ListProducts = () => {
  const breadcrumbTitles = {
    "admin/danh-sach-san-pham": "Danh sách sản phẩm", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const [categories2, setCategories2] = useState([]);
  const [subCategories2, setSubCategories2] = useState([]);
  const [selectedCategory2, setSelectedCategory2] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Lấy danh sách danh mục
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/danh-muc/getAll")
      .then((response) => {
        console.log(response);
        setCategories2(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Lấy danh mục con khi danh mục cha thay đổi
  useEffect(() => {
    console.log(selectedCategory2);

    if (selectedCategory2) {
      axios
        .get(`http://127.0.0.1:8000/api/danh-muc-con/${selectedCategory2}`)
        .then((response) => {
          console.log(response.data.data);
          setSubCategories2(response.data.data);
        })
        .catch((error) =>
          console.error("Error fetching subcategories:", error)
        );
    } else {
      setSubCategories2([]);
    }
  }, [selectedCategory2]);


  const [selectedSubCategory2, setSelectedSubCategory2] = useState('');

  // Hàm thay đổi danh mục
  const handleCategoryChange = (e) => {
    setSelectedCategory2(e.target.value);
    setSelectedSubCategory2(''); // Reset danh mục con khi thay đổi danh mục
  };

  // Hàm thay đổi danh mục con
  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory2(e.target.value);
  };

  // Hàm thay đổi từ khóa tìm kiếm
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const [isSearching, setIsSearching] = useState(false);


  // Lấy sản phẩm
  useEffect(() => {
    if (!isSearching) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/api/san-pham/allProductAdmin?page=${currentPage}&limit=${productsPerPage}`
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
    }
  }, [isSearching, currentPage]);



  const totalPages = Math.ceil(totalProducts / productsPerPage); // Tính tổng số trang

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Lấy danh mục và danh mục con khi component mount
  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
  }, []);

  const handleSearchSubmit = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/san-pham/tim-kiem', {
        params: {
          searchQuery,
          categoryId: selectedCategory2 || "",
          subCategoryId: selectedSubCategory2 || "",
          page: currentPage, // You can change this based on the pagination logic
          number_row: 10, // Adjust the number of rows per page
        },
      });
      console.log(response);
      
      setProducts(response.data.data);
      setTotalProducts(response.data.total);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

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

  const handleEditProductClick = (id) => {
    navigate(`/admin/sua-san-pham/${id}`);
  };
  return (
    <>
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
              <h2 className="mb-0">Danh sách sản phẩm</h2>
            </div>
          </div>

          <div
            id="products"
            data-list='{"valueNames":["product","price","category","tags","vendor","time"],"page":10,"pagination":true}'
          >
            <div className="mb-4">
              <div className="d-flex flex-wrap gap-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearchSubmit();
                  }}
                >
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Tìm kiếm sản phẩm"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />

                  <select
                    className="form-select"
                    value={selectedCategory2}
                    onChange={handleCategoryChange}
                  >
                    <option value="">Chọn danh mục...</option>
                    {categories2.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.ten_danh_muc}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select"
                    value={selectedSubCategory2}
                    onChange={handleSubCategoryChange}
                  >
                    <option value="">Chọn danh mục con...</option>
                    {subCategories2.map((subCategory) => (
                      <option key={subCategory.id} value={subCategory.id}>
                        {subCategory.ten_danh_muc_con}
                      </option>
                    ))}
                  </select>

                  <button type="submit" className="btn btn-primary" onClick={handleSearchSubmit}>Tìm kiếm</button>
                </form>

                <div className="ms-xxl-auto ms-auto">
                  <button
                    className="btn btn-primary"
                    onClick={handleAddProductClick}
                    id="addBtn"
                  >
                    <span className="fas fa-plus me-2" />
                    Thêm sản phẩm
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
                        <td className="ps-2">
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
                                onClick={() => handleEditProductClick(product.id)}
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