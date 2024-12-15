import { useState, useEffect } from "react";
import axios from "axios";
import { TagsInput } from "react-tag-input-component";
const listCategory = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null); // Store selected category ID
  const [categoryDetails, setCategoryDetails] = useState({
    name: "",
    description: "",
    tags: [],
    dateCreated: "",
  });
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Fetch data from API on component mount
    axios
      .get("http://127.0.0.1:8000/api/danh-muc/getAll")
      .then((response) => {
        setCategories(response.data); // Set categories state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
  const handleEditCategory = (category) => {
    setCategoryId(category.id); // Set categoryId
    setCategoryDetails({
      name: category.ten_danh_muc,
      description: category.mo_ta,
      tags: category.tags || [],
      dateCreated: category.created_at,
    });
    setTags(category.tags || []);
  };
  
  // State to store raw date for the input
  const [dateCreated, setDateCreated] = useState(categoryDetails.dateCreated);

  // Handle date input change
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDateCreated(newDate); // Update raw date for internal state
    setCategoryDetails({
      ...categoryDetails,
      dateCreated: newDate, // Update the parent state if necessary
    });
  };

  return (
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
            <h2 className="mb-0">Category</h2>
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
              <div className="ms-xxl-auto ms-auto">
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
                    <th className="white-space-nowrap fs-9 align-middle ps-0">
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          id="checkbox-bulk-products-select"
                          type="checkbox"
                        />
                      </div>
                    </th>
                    <th
                      className="white-space-nowrap align-middle ps-4"
                      scope="col"
                      style={{ width: "20%" }}
                      data-sort="product"
                    >
                      CATEGORY NAME
                    </th>
                    <th
                      className="align-middle ps-3"
                      scope="col"
                      style={{ width: "20%" }}
                    >
                      DESCRIPTION
                    </th>
                    <th
                      className="align-middle ps-3"
                      scope="col"
                      style={{ width: "35%" }}
                    >
                      TAGS
                    </th>
                    <th
                      className="align-middle ps-4"
                      scope="col"
                      style={{ width: "20%" }}
                    >
                      PUBLISHED ON
                    </th>
                    <th className="align-middle ps-4" style={{ width: "5%" }}>
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {categories.map((category) => (
                    <tr key={category.id}>
                      <td className="fs-9 align-middle">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>

                      <td className="product align-middle ps-4">
                        <a
                          className="fw-semibold"
                          href="../landing/product-details.html"
                        >
                          {category.ten_danh_muc}
                        </a>
                      </td>

                      <td className="tags align-middle review pb-2 ps-3">
                        <a className="text-decoration-none" href="#!">
                          {category.mo_ta}
                        </a>
                      </td>
                      <td className="tags align-middle review pb-2 ps-3">
                        <a className="text-decoration-none" href="#!">
                          <span className="badge badge-tag me-2 mb-2">
                            Tag1
                          </span>
                        </a>
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
                <p className="mb-0">Showing 1 to 2 of 2 items</p>
              </div>
              <div className="col-auto d-flex">
                <button className="page-link" data-list-pagination="prev">
                  <span className="fas fa-chevron-left" />
                </button>
                <ul className="mb-0 pagination" />
                <button className="page-link pe-0" data-list-pagination="next">
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
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Tags
                    </label>
                    {/* TagsInput component */}
                    <TagsInput
                      className="form-control mb-xl-3"
                      value={tags}
                      onChange={setTags}
                      name="tags"
                      inputProps={{
                        className: "form-control",
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-body-highlight fw-bold mb-2">
                      Date Created
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      value={dateCreated} // Store the raw date value here
                      onChange={handleDateChange} // Handle date selection change
                    />
                    <div className="text-muted mt-2">
                      {formatDate(dateCreated)}{" "}
                      {/* Display formatted date below */}
                    </div>
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
  );
};
export default listCategory;
