import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";

const ListParameter = () => {
  const breadcrumbTitles = {
    "admin/danh-sach-thong-so": "List Parameter", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  const [thongSo, setThongSo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);  // For total pages
  const itemsPerPage = 10; // Define the number of items per page
  const [categories, setCategories] = useState([]);
  const [editingThongSo, setEditingThongSo] = useState(null); // Lưu thông tin thông số đang chỉnh sửa
  const [editTenThongSo, setEditTenThongSo] = useState('');
  const [editMoTa, setEditMoTa] = useState('');
  const [editCategory, setEditCategory] = useState('');

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
  // Handler for changing pages
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return; // Avoid invalid pages
    setCurrentPage(page);
  };

  // Fetch data from the API
  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/api/thong-so?page=${currentPage}&limit=${itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        setThongSo(data.data);
        setTotalPages(data.last_page); // Update totalPages from API response
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi lấy thông số', error);
        setLoading(false);
      });
  }, [currentPage]);


  const [selectedCategory, setSelectedCategory] = useState('');
  const [tenThongSo, setTenThongSo] = useState('');
  const [moTa, setMoTa] = useState('');

  const handleAddThongSo = () => {
    
    if (!selectedCategory || !tenThongSo || !moTa) {
      alert('Vui lòng nhập đủ tất cả các trường thông số!');
      return;  // Dừng lại nếu có trường bị bỏ trống
    }
    const danhMuc = categories.find(category => category.id === parseInt(selectedCategory, 10));

    const newThongSo = {
      danh_muc_id: selectedCategory,  // Chỉ cần gửi danh_muc_id
      danh_muc: danhMuc,  // Đưa thông tin chi tiết của danh mục vào
      ten_thong_so: tenThongSo,
      mo_ta: moTa,
    };

    // Gửi thông số mới tới API
    fetch('http://127.0.0.1:8000/api/thong-so', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newThongSo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Thông số đã được thêm:', data);

        // Thông báo thành công
        alert('Thông số đã được thêm thành công!');

        // Thêm thông số mới vào danh sách thông số
        setThongSo((prevThongSo) => [
          ...prevThongSo,
          {
            ...newThongSo,  // Bao gồm tất cả các thuộc tính của newThongSo
            id: data.id,  // Giả sử bạn nhận lại ID của thông số mới từ API
          },
        ]);
        console.log(newThongSo);


        // Reset form sau khi gửi thành công
        setSelectedCategory('');
        setTenThongSo('');
        setMoTa('');
      })
      .catch((error) => {
        console.error('Error adding thong so:', error);
        // Thông báo lỗi
        alert('Có lỗi xảy ra khi thêm thông số.');
      });
  };


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/thong-so/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Xóa thông số thành công!");
        setThongSo((prevThongSo) => prevThongSo.filter((item) => item.id !== id));
      } else {
        const errorData = await response.json();
        alert(`Xóa thất bại: ${errorData.message || "Có lỗi xảy ra"}`);
      }
    } catch (error) {
      console.error("Lỗi khi xóa thông số:", error);
      alert("Có lỗi xảy ra khi xóa thông số");
    }
  };



  const handleEditClick = (item) => {
    setEditingThongSo(item);
    setEditTenThongSo(item.ten_thong_so);
    setEditMoTa(item.mo_ta);
    setEditCategory(item.danh_muc_id);
  };

  const handleUpdateThongSo = async () => {
    if (!editingThongSo) return;
    const danhMuc = categories.find(category => category.id === parseInt(editCategory, 10));

    const updatedThongSo = {
      danh_muc_id: editCategory,
      danh_muc: danhMuc,
      ten_thong_so: editTenThongSo,
      mo_ta: editMoTa,
    };

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/thong-so/${editingThongSo.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedThongSo),
        }
      );

      if (response.ok) {
        const updatedData = await response.json();
        console.log(updatedData);


        // Cập nhật trực tiếp thông số trong state mà không phải tải lại trang
        setThongSo((prevThongSo) =>
          prevThongSo.map((item) =>
            item.id === editingThongSo.id ? { ...item, ...updatedThongSo } : item
          )
        );
        console.log(thongSo);


        alert('Cập nhật thông số thành công!');

      } else {
        const errorData = await response.json();
        alert(`Lỗi cập nhật: ${errorData.message || 'Không thể cập nhật thông số'}`);
      }
    } catch (error) {
      console.error('Lỗi khi cập nhật thông số:', error);
      alert('Có lỗi xảy ra khi cập nhật thông số');
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
            <h2 className="mb-0">List Parameter</h2>
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
                  data-bs-target="#addParameter"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Thêm thông số
                </button>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table fs-9 mb-0">
                <thead>
                  <tr>
                    <th className="white-space-nowrap fs-9 align-middle ps-0" style={{ width: '15%' }}>STT</th>
                    <th className="white-space-nowrap align-middle ps-4" style={{ width: '30%' }}>DANH MỤC</th>
                    <th className="align-middle ps-4" style={{ width: '25%' }}>TÊN THÔNG SỐ</th>
                    <th className="align-middle ps-4" style={{ width: '25%' }}>MÔ TẢ</th>
                    <th className="align-middle" style={{ width: '5%' }}>HÀNH ĐỘNG</th>
                  </tr>
                </thead>
                <tbody className="list">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center">Loading...</td>
                    </tr>
                  ) : (
                    thongSo.map((item, index) => (
                      <tr key={item.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td> {/* Tính STT đúng cho mỗi trang */}
                        <td className="product align-middle ps-4">{item.danh_muc.ten_danh_muc}</td>
                        <td className="tags align-middle review pb-2 ps-3">{item.ten_thong_so}</td>
                        <td className="tags align-middle review pb-2 ps-3">{item.mo_ta}</td>
                        <td className="align-middle white-space-nowrap">
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            onClick={() => handleEditClick(item)}
                            data-bs-toggle="modal"
                            data-bs-target="#editParameter"
                          >
                            <span className="fa-solid fa-pen-to-square fs-9" />
                          </button>
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            onClick={() => handleDelete(item.id)}
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
      <div
        className="modal fade"
        id="addParameter"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addParameter"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-l modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Thêm thông số</h3>
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
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Danh mục
                    </label>
                    <select
                      className="form-control"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">Chọn danh mục</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.ten_danh_muc} {/* Hiển thị tên danh mục */}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên thông số
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={tenThongSo}
                      onChange={(e) => setTenThongSo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Mô tả
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Mô tả thông số của sản phẩm"
                      value={moTa}
                      onChange={(e) => setMoTa(e.target.value)}
                    ></textarea>
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
                onClick={handleAddThongSo}
              >
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editParameter"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editParameter"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-l modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Sửa thông số</h3>
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
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Danh mục
                    </label>
                    <select
                      id="editCategory"
                      className="form-control"
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.ten_danh_muc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tên thông số
                    </label>
                    <input
                      id="editTenThongSo"
                      type="text"
                      className="form-control"
                      value={editTenThongSo}
                      onChange={(e) => setEditTenThongSo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Mô tả
                    </label>
                    <textarea
                      id="editMoTa"
                      className="form-control"
                      value={editMoTa}
                      onChange={(e) => setEditMoTa(e.target.value)}
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
              <button className="btn btn-primary my-0" onClick={handleUpdateThongSo} >Cập nhật</button>
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
export default ListParameter;
