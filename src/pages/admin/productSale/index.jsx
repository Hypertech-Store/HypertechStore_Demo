import { Link, useLocation } from "react-router-dom";
const Listsale = () => {
  const breadcrumbTitles = {
    "admin/danh-sach-san-pham-sale": "List product sale", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

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
                        className="white-space-nowrap fs-9 align-middle ps-0"
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
                        className="align-middle ps-3"
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
                    <tr>
                      <td></td>
                      <td className="product align-middle ps-4"></td>
                      <td className="tags align-middle review pb-2 ps-3"></td>
                      <td className="tags align-middle review pb-2 ps-3"></td>
                      <td className="time align-middle text-body-tertiary text-opacity-85 ps-4"></td>

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
                        >
                          <span className="fa-solid fa-trash fs-9" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                <div className="col-auto d-flex">
                  <p className="mb-0 me-3 fw-semibold text-body"></p>
                  {/* Showing{" "}
                {currentPage === 1
                  ? 1
                  : (currentPage - 1) * CategorysPerPage + 1}{" "}
                to {Math.min(currentPage * CategorysPerPage, categories.length)}{" "}
                of {categories.length} items */}
                </div>
                <div className="col-auto d-flex">
                  <button className="" disabled>
                    <span className="fas fa-chevron-left" />
                  </button>
                  <ul className="mb-0 pagination">
                    <li className="">
                      <button className="page" type="button"></button>
                    </li>
                  </ul>
                  <button className="" disabled>
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
              <h3 className="mb-0">Add Product Sale</h3>
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
                        >
                          <option selected>Chọn sản phẩm</option>
                          <option value="1">Sản phẩm 1</option>
                          <option value="2">Sản phẩm 2</option>
                          <option value="3">Sản phẩm 3</option>
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
                        placeholder="Chọn ngày bắt đầu"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text-body-highlight fw-bold mb-2">
                        Ngày kết thúc
                      </label>
                      <input
                        className="form-control"
                        type="datetime-local"
                        placeholder="Chọn ngày kết thúc"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Edit Product Sale</h3>
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
                        >
                          <option selected>Chọn sản phẩm</option>
                          <option value="1">Sản phẩm 1</option>
                          <option value="2">Sản phẩm 2</option>
                          <option value="3">Sản phẩm 3</option>
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
                        placeholder="Chọn ngày bắt đầu"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text-body-highlight fw-bold mb-2">
                        Ngày kết thúc
                      </label>
                      <input
                        className="form-control"
                        type="datetime-local"
                        placeholder="Chọn ngày kết thúc"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Listsale;
