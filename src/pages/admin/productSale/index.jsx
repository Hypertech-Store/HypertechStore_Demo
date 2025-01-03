import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Listsale = () => {
  const breadcrumbTitles = {
    "admin/danh-sach-san-pham-sale": "List product sale", // Đây là URL không có "/"
  };

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  const [sales, setSales] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [salePercentage, setSalePercentage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Fetch dữ liệu giảm giá
  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/sale-san-pham/get-sale-paginate?page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSales(data.data.data);
        console.log(data.data.data);

        setTotalPages(data.data.last_page); // Sửa lại từ response thành data
      })
      .catch((error) => console.error("Error fetching sale data:", error));
  }, [currentPage]);

  // Fetch danh sách sản phẩm
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/san-pham/san-pham-chua-sale")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Hàm xử lý thay đổi trang
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Hàm định dạng ngày tháng
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  // Hàm định dạng tỷ lệ giảm giá
  const formatSalePercentage = (percentage) => {
    return parseInt(percentage, 10); // Chuyển đổi thành số nguyên
  };

  // Hàm xử lý thay đổi sản phẩm được chọn
  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleSalePercentageChange = (event) => {
    setSalePercentage(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const saleData = {
      san_pham_id: selectedProduct,
      sale_theo_phan_tram: salePercentage,
      ngay_bat_dau_sale: startDate,
      ngay_ket_thuc_sale: endDate,
    };

    // Gửi yêu cầu POST đến API
    fetch("http://127.0.0.1:8000/api/sale-san-pham/add-sale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saleData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const newSale = data.data.sale_san_pham;

          // Hiển thị thông báo thành công
          alert(`Sản phẩm đã được thêm vào sale thành công!`);
          console.log(data);

          // Cập nhật danh sách sales
          setSales((prevSales) => [...prevSales, newSale]);

          // Xóa sản phẩm vừa chọn khỏi danh sách sản phẩm chưa sale
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== newSale.san_pham_id)
          );

          // Reset form
          setSelectedProduct("");
          setSalePercentage("");
          setStartDate("");
          setEndDate("");
        } else if (data.error) {
          alert(`Lỗi: ${data.error}`);
        }
      })
      .catch((error) => {
        console.error("Error adding sale:", error);
        alert("Có lỗi xảy ra khi gửi yêu cầu!");
      });
  };

  const handleDeleteSale = async (id) => {
    // Xác nhận trước khi xóa
    const isConfirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa biến thể sản phẩm này?"
    );

    if (!isConfirmed) return;

    try {
      // Gửi yêu cầu xóa biến thể sản phẩm qua API
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/sale-san-pham/${id}`
      );

      if (response.status === 200) {
        // Nếu xóa thành công, thông báo và cập nhật lại danh sách
        alert("Xóa sản phẩm sale thành công!");

        // Cập nhật lại danh sách trong state (setData hoặc tương tự)
        setSales((prev) => prev.filter((prevSales) => prevSales.id !== id));

        fetch("http://127.0.0.1:8000/api/san-pham/san-pham-chua-sale")
          .then((response) => response.json())
          .then((data) => {
            setProducts(data.data);
          })
          .catch((error) => console.error("Error fetching products:", error));
      } else {
        // Nếu có lỗi khác, thông báo cho người dùng
        alert("Không thể xóa sản phẩm sale.");
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm sale:", error);
      // Thông báo lỗi nếu có sự cố
      alert("Không thể xóa sản phẩm sale. Vui lòng thử lại.");
    }
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
              <h2 className="mb-0">Danh sách sản phẩm sale</h2>
            </div>
          </div>

          <div
            id="products"
            data-list='{"saleNames":["product","price","category","tags","vendor","time"],"page":10,"pagination":true}'
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
                    data-bs-target="#addSale"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fas fa-plus me-2" />
                    Add sale
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
                        style={{ width: "10%" }}
                      >
                        STT
                      </th>
                      <th
                        className="white-space-nowrap align-middle ps-4"
                        scope="col"
                        style={{ width: "25%" }}
                        data-sort="product"
                      >
                        SẢN PHẨM
                      </th>
                      <th
                        className="align-middle ps-4"
                        scope="col"
                        style={{ width: "20%" }}
                      >
                        PHẦN TRĂM SALE
                      </th>

                      <th
                        className="align-middle ps-4"
                        scope="col"
                        style={{ width: "20%" }}
                      >
                        NGÀY BẮT ĐẦU
                      </th>
                      <th
                        className="align-middle ps-4"
                        scope="col"
                        style={{ width: "20%" }}
                      >
                        NGÀY KẾT THÚC
                      </th>
                      <th className="align-middle" style={{ width: "5%" }}>
                        HÀNH ĐỘNG
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list" id="products-table-body">
                    {sales?.length === 0 ? (
                      <tr>
                        <td colSpan="7" className="text-center">
                          Không có dữ liệu
                        </td>
                      </tr>
                    ) : (
                      sales?.map((sale, index) => (
                        <tr key={sale.id}>
                          <td className="product align-middle ps-2">
                            {(currentPage - 1) * 10 + index + 1}
                          </td>
                          <td className="tags align-middle review pb-2 ps-4">
                            {sale.san_pham.ten_san_pham}
                          </td>
                          <td className="tags align-middle review pb-2 ps-4">
                            {formatSalePercentage(sale.sale_theo_phan_tram)}%
                          </td>
                          <td className="time align-middle text-body-tertiary text-opacity-85 ps-4">
                            {formatDate(sale.ngay_bat_dau_sale)}
                          </td>
                          <td className="time align-middle text-body-tertiary text-opacity-85 ps-4">
                            {formatDate(sale.ngay_ket_thuc_sale)}
                          </td>
                          <td className="align-middle white-space-nowrap">
                            <button
                              className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#editSale"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-reference="parent"
                            >
                              <span className="fa-solid fa-pen-to-square fs-9" />
                            </button>
                            <button
                              className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                              type="button"
                              onClick={() => handleDeleteSale(sale.id)}
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
                <div className="col-auto d-flex">
                  <p className="mb-0 me-3 fw-semibold text-body">
                    Trang {currentPage} / {totalPages}
                  </p>
                </div>
                <div className="col-auto d-flex">
                  <button
                    className={`page-link ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
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
          id="addSale"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="addSale"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-body-highlight p-6">
              <div className="modal-header justify-content-between border-0 p-0 mb-2">
                <h3 className="mb-0">Thêm sản phẩm sale</h3>
                <button
                  className="btn btn-sm btn-phoenix-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span className="fas fa-times text-danger" />
                </button>
              </div>
              <div className="modal-body px-0">
                <div className="row g-4">
                  {/* Left column with sale details */}
                  <div className="col-lg-12">
                    <div className="mb-5">
                      <div className="row g-3">
                        <div className="col-md-12">
                          <label className="text-body-highlight fw-bold mb-2">
                            Sản phẩm
                          </label>
                          <select
                            className="form-select"
                            aria-label="Product select"
                            value={selectedProduct}
                            onChange={handleProductChange}
                          >
                            <option value="">Chọn sản phẩm</option>
                            {products.map((product) => (
                              <option key={product.id} value={product.id}>
                                {product.ten_san_pham}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-12">
                          <label className="text-body-highlight fw-bold mb-2">
                            Phần trăm sale
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            min="0"
                            max="100"
                            placeholder="Nhập phần trăm"
                            value={salePercentage}
                            onChange={handleSalePercentageChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="text-body-highlight fw-bold mb-2">
                          Ngày bắt đầu
                        </label>
                        <input
                          className="form-control"
                          type="datetime-local"
                          value={startDate}
                          onChange={handleStartDateChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="text-body-highlight fw-bold mb-2">
                          Ngày kết thúc
                        </label>
                        <input
                          className="form-control"
                          type="datetime-local"
                          value={endDate}
                          onChange={handleEndDateChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Thêm sale
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="editSale"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="editSale"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-l modal-dialog-centered">
            <div className="modal-content bg-body-highlight p-6">
              <div className="modal-header justify-content-between border-0 p-0 mb-2">
                <h3 className="mb-0">Edit Attribute Name</h3>
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
                        Attribute Name
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="mb-4">
                      <label className="text-body-highlight fw-bold mb-2">
                        Description
                      </label>
                      <input className="form-control" type="text" />
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
                <button className="btn btn-primary my-0">Update</button>
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
export default Listsale;
