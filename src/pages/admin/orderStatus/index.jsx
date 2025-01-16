import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const OrderStatus = () => {
  const [status, setStatus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const breadcrumbTitles = {
    "admin/trang-thai-don-hang": "Trạng thái đơn hàng",
  };

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase();

  const fetchStatus = async (page = 1) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/trang-thai-don-hang?page=${page}`
      );
      setStatus(response.data.data);
      console.log(response.data.data);
      setTotalPages(response.data.last_page);
      setCurrentPage(response.data.current_page);
    } catch (error) {
      console.error("Failed to fetch methods", error);
    }
  };

  useEffect(() => {
    fetchStatus(currentPage);
  }, [currentPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleToggleStatus = async (statusId, newStatus) => {
    try {
      // Gửi yêu cầu PUT tới API
      const response = await axios.put(
        "http://127.0.0.1:8000/api/don-hang/trang-thai",
        {
          trang_thai_id: statusId, // ID khách hàng
          trang_thai: newStatus ? 1 : 0, // Chuyển đổi trạng thái true/false thành 1/0
        }
      );

      // Nếu cập nhật thành công, thay đổi trạng thái hiển thị ngay lập tức
      if (response.data.success) {
        // Cập nhật lại trạng thái của khách hàng trong state
        setStatus((prevState) => {
          const updateStatus = prevState.map((status) =>
            status.id === statusId
              ? {
                  ...status,
                  trang_thai: newStatus ? 1 : 0, // Cập nhật trang_thai với trạng thái mới
                  status: newStatus ? 1 : 0, // Tự động cập nhật status nếu cần thiết
                }
              : status
          );

          // Log the updated methods to verify the data
          console.log("Updated methods:", updateStatus); // Log the updated list

          return updateStatus;
        });

        alert(response.data.message);
      } else {
        alert("Cập nhật trạng thái thất bại.");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      alert("Đã xảy ra lỗi khi cập nhật trạng thái.");
    }
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
            <h2 className="mb-0">Trạng thái đơn hàng</h2>
          </div>
          <div className="col-auto ms-auto mt-3">
            <div className="search-box">
              <form className="position-relative">
                <input
                  className="form-control search-input search"
                  type="search"
                  placeholder="Tìm kiếm đơn hàng"
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
                      className="white-space-nowrap fs-9 align-middle"
                      scope="col"
                      style={{ width: "20%" }}
                    >
                      STT
                    </th>
                    <th
                      className="white-space-nowrap align-middle"
                      scope="col"
                      style={{ width: "35%" }}
                      data-sort="product"
                    >
                      TÊN TRẠNG THÁI
                    </th>

                    <th
                      className="align-middle"
                      scope="col"
                      style={{ width: "35%" }}
                    >
                      MÔ TẢ
                    </th>

                    <th className="align-middle ps-5" style={{ width: "20%" }}>
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>

                <tbody className="list" id="products-table-body">
                  {status.map((status, index) => (
                    <tr key={status.id}>
                      <td className="product align-middle ps-2">
                        {(currentPage - 1) * 5 + index + 1}
                      </td>
                      <td className="product align-middle">
                        {status.ten_trang_thai}
                      </td>

                      <td className="tags align-middle review pb-2">
                        {status.mo_ta}
                      </td>

                      <td className="align-middle white-space-nowrap ps-7">
                        <input
                          disabled
                          readOnly
                          className="form-check-status ms-0 me-2"
                          type="checkbox"
                          id={`customer_${status.id}`} // ID độc nhất dựa trên status ID
                          checked={status.trang_thai === 1} // Nếu trạng thái là 1, checkbox sẽ bật
                          onChange={(e) =>
                            handleToggleStatus(status.id, e.target.checked)
                          } // Hàm xử lý sự kiện
                        />
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
export default OrderStatus;
