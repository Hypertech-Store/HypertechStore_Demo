import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const listOfAttributeName = () => {
  const breadcrumbTitles = {
    "admin/ten-thuoc-tinh": "List attribute name", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const [tenThuocTinh, setTenThuocTinh] = useState('');

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  const [data, setData] = useState({
    data: [],
    current_page: 1,
    last_page: 1,
    next_page_url: null,
    prev_page_url: null,
  });

  const fetchData = async (page = 1) => {
    const response = await fetch(`http://127.0.0.1:8000/api/thuoc-tinh-san-pham?page=${page}`);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData(data.current_page);
  }, [data.current_page]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= data.last_page) {
      setData((prevState) => ({
        ...prevState,
        current_page: page,
      }));
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

  const handleAddAttribute = async () => {
    if (!tenThuocTinh) {
      alert('Tên thuộc tính không được để trống');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/thuoc-tinh-san-pham', {
        ten_thuoc_tinh: tenThuocTinh
      });

      if (response.status === 201) {
        alert('Thuộc tính đã được thêm thành công');
        setTenThuocTinh(''); // Reset input

        // Cập nhật lại dữ liệu
        const newAttribute = response.data.data;
        console.log(newAttribute);

        setData((prevState) => ({
          ...prevState,
          data: [...prevState.data, newAttribute], // Thêm thuộc tính mới vào đầu mảng dữ liệu
        }));
        console.log(data);


      } else {
        alert('Có lỗi khi thêm thuộc tính');
      }
    } catch (error) {
      console.error(error); // In ra lỗi để kiểm tra
      alert('Đã có lỗi xảy ra khi thêm thuộc tính');
    }
  };


  const deleteThuocTinh = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/thuoc-tinh-san-pham/${id}`);
        // Xóa sản phẩm khỏi state mà không tải lại dữ liệu từ server
        setData((prevState) => ({
          ...prevState,
          data: prevState.data.filter((item) => item.id !== id),
        }));
        alert("Xóa thành công!");
      } catch (error) {
        console.error("Lỗi khi xóa:", error);
        alert("Xóa thất bại!");
      }
    }
  };

  const [attributeName, setAttributeName] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState(null);

  const handleEditThuocTinh = (attribute) => {
    console.log(attribute);
    
    setSelectedAttribute(attribute);
    setAttributeName(attribute.ten_thuoc_tinh); // Đổ dữ liệu vào input
  };

  const handleUpdate = async () => {
    if (!selectedAttribute) return;

    try {
      await axios.put(`http://127.0.0.1:8000/api/thuoc-tinh-san-pham/${selectedAttribute.id}`, {
        ten_thuoc_tinh: attributeName,
      });
      alert("Cập nhật thành công!");
      setData((prevState) => ({
        ...prevState,
        data: prevState.data.map((item) =>
          item.id === selectedAttribute.id ? { ...item, ten_thuoc_tinh: attributeName } : item
        ),
      }));
      setSelectedAttribute(null);
      setAttributeName("");
    } catch (error) {
      console.error("Lỗi cập nhật:", error);
      alert("Cập nhật thất bại, vui lòng thử lại!");
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
      <div className="mb-9">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">List Attribute Name</h2>
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
                  data-bs-target="#addAttribute"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Thêm thuộc tính
                </button>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table fs-9 mb-0">
                <thead>
                  <tr>
                    <th className="white-space-nowrap fs-9 align-middle ps-0" scope="col" style={{ width: '15%' }}>
                      STT
                    </th>
                    <th className="white-space-nowrap align-middle ps-4" scope="col" style={{ width: '30%' }} data-sort="product">
                      TÊN THUỘC TÍNH
                    </th>
                    <th className="align-middle ps-4" scope="col" style={{ width: '25%' }}>
                      NGÀY THÊM
                    </th>
                    <th className="align-middle ps-4" style={{ width: '5%' }}>
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {data.data.map((item, index) => (
                    <tr key={item.id}>
                      <td>{(data.current_page - 1) * 10 + index + 1}</td>
                      <td className="product align-middle ps-4">{item.ten_thuoc_tinh}</td>
                      <td className="tags align-middle review pb-2 ps-3">
                        {formatDate(item.created_at)}
                      </td>
                      <td className="align-middle white-space-nowrap">
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#editAttribute"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-bs-reference="parent"
                          onClick={() => handleEditThuocTinh(item)}
                        >
                          <span className="fa-solid fa-pen-to-square fs-9" />
                        </button>
                        <button
                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                          type="button"
                          onClick={() => deleteThuocTinh(item.id)}
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
                  Trang {data.current_page} / {data.last_page}
                </p>
              </div>
              <div className="col-auto d-flex">
                <button
                  className="page-link"
                  onClick={() => handlePageChange(data.current_page - 1)}
                  disabled={data.current_page === 1}
                >
                  <span className="fas fa-chevron-left" />
                </button>
                {[...Array(data.last_page).keys()].map((_, index) => (
                  <button
                    key={index}
                    className={`page-link ${data.current_page === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className="page-link pe-0"
                  onClick={() => handlePageChange(data.current_page + 1)}
                  disabled={data.current_page === data.last_page}
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
        id="addAttribute"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addAttribute"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-l modal-dialog-centered"
          style={{ width: "25pc" }}
        >
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Add Attribute</h3>
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
                      Tên thuộc tính
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={tenThuocTinh}
                      onChange={(e) => setTenThuocTinh(e.target.value)}
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
                onClick={handleAddAttribute}
              >
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editAttribute"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editAttribute"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-l modal-dialog-centered"
          style={{ width: "25pc" }}
        >
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Edit Attribute</h3>
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
                      Tên thuộc tính
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={attributeName}
                      onChange={(e) => setAttributeName(e.target.value)}
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
                onClick={handleUpdate}
              >
                Cập nhật
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
export default listOfAttributeName;
