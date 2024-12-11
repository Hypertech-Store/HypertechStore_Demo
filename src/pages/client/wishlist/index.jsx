import { useState } from "react";

import product1 from "../../../assets/img/products/1.png";
import product3 from "../../../assets/img/products/3.png";
import product4 from "../../../assets/img/products/4.png";
import product6 from "../../../assets/img/products/6.png";
import product7 from "../../../assets/img/products/7.png";
import product8 from "../../../assets/img/products/8.png";
import product10 from "../../../assets/img/products/10.png";
import product12 from "../../../assets/img/products/12.png";
import product17 from "../../../assets/img/products/17.png";

function Wishlist() {
  document.title = "Hypertech Store - Sản phẩm yêu thích";
  const [viewAll, setViewAll] = useState(false); // Quản lý trạng thái View All / View Less
  const [currentPage, setCurrentPage] = useState(1); // Quản lý trang hiện tại

  const handleViewToggle = () => {
    setViewAll(!viewAll);
    setCurrentPage(1); // Quay lại trang đầu khi chuyển đổi View All / View Less
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalItems = 9; // Total number of products
  const itemsPerPage = viewAll ? totalItems : 5; // View All shows all products, View Less shows 5
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate the number of pages

  const products = [
    {
      image: product1,
      name: "Fitbit Sense Advanced Smartwatch",
      color: "Pure matte black",
      size: "42",
      price: "$57",
    },
    {
      image: product7,
      name: "2021 Apple 12.9-inch iPad Pro",
      color: "Black",
      size: "Pro",
      price: "$1,499",
    },
    {
      image: product6,
      name: "PlayStation 5 DualSense Wireless Controller",
      color: "White",
      size: "Regular",
      price: "$299",
    },
    {
      image: product3,
      name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
      color: "Space Gray",
      size: "Pro",
      price: "$1,699",
    },
    {
      image: product4,
      name: 'Apple iMac 24" 4K Retina Display',
      color: "Ocean Blue",
      size: '21"',
      price: "$65",
    },
    {
      image: product10,
      name: "Apple Magic Mouse (Wireless, Rechargable)",
      color: "White",
      size: "Regular",
      price: "$30",
    },
    {
      image: product8,
      name: "Amazon Basics Matte Black Wired Keyboard",
      color: "Black",
      size: "MD",
      price: "$40",
    },
    {
      image: product12,
      name: "HORI Racing Wheel Apex for PlayStation 4",
      color: "Black",
      size: "45",
      price: "$130",
    },
    {
      image: product17,
      name: "Xbox Series S",
      color: "Space Gray",
      size: "sm",
      price: "$300",
    },
  ];

  const visibleProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ); // Get the products for the current page

  return (
    <section className="pt-5 pb-9">
      <div className="container-small cart">
        <nav className="mb-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#!">Page 1</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#!">Page 2</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Default
            </li>
          </ol>
        </nav>
        <h2 className="mb-5">
          Wishlist
          <span className="text-body-tertiary fw-normal ms-2">(43)</span>
        </h2>
        <div
          className="border-y border-translucent"
          id="productWishlistTable"
          data-list='{"valueNames":["products","color","size","price","quantity","total"],"page":5,"pagination":true}'
        >
          <div className="table-responsive scrollbar">
            <table className="table fs-9 mb-0">
              <thead>
                <tr>
                  <th
                    className="align-middle"
                    scope="col"
                    data-sort="image"
                    style={{ width: "8%" }}
                  >
                    IMAGE
                  </th>
                  <th
                    className="white-space-nowrap align-middle"
                    scope="col"
                    style={{ width: "35%", minWidth: 250 }}
                    data-sort="products"
                  >
                    PRODUCTS
                  </th>
                  <th
                    className="align-middle"
                    scope="col"
                    data-sort="color"
                    style={{ width: "10%" }}
                  >
                    COLOR
                  </th>
                  <th
                    className="align-middle"
                    scope="col"
                    data-sort="size"
                    style={{ width: "8%" }}
                  >
                    SIZE
                  </th>
                  <th
                    className="align-middle text-body"
                    scope="col"
                    data-sort="price"
                    style={{ width: "8%" }}
                  >
                    PRICE
                  </th>
                  <th
                    className="align-middle text-body"
                    scope="col"
                    style={{
                      width: "20%",
                      textAlign: "center", // Đảm bảo căn giữa văn bản trong th
                      justifyContent: "center", // Căn giữa theo chiều ngang
                      alignItems: "center",
                    }}
                  >
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody className="list" id="profile-wishlist-table-body">
                {visibleProducts.map((product, index) => (
                  <tr
                    key={index}
                    className="hover-actions-trigger btn-reveal-trigger position-static"
                  >
                    <td className="align-middle white-space-nowrap ps-0 py-0">
                      <a
                        className="border border-translucent rounded-2 d-inline-block"
                        href="product-details.html"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          width={55}
                        />
                      </a>
                    </td>
                    <td className="products align-middle">
                      <a
                        className="fw-semibold mb-0 line-clamp-1"
                        href="product-details.html"
                      >
                        {product.name}
                      </a>
                    </td>
                    <td className="color align-middle fs-9 text-body">
                      {product.color}
                    </td>
                    <td className="size align-middle text-body-tertiary fs-9 fw-semibold">
                      {product.size}
                    </td>
                    <td className="price align-middle text-body fs-9 fw-semibold">
                      {product.price}
                    </td>
                    <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                      <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                        <span className="fas fa-trash" />
                      </button>
                      <button className="btn btn-primary fs-10">
                        <span className="fas fa-shopping-cart me-1 fs-10" />
                        Add to cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
            <div className="col-auto d-flex">
              <p
                className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                data-list-info="data-list-info"
              >
                {viewAll
                  ? "1 to 9 "
                  : currentPage === 1
                  ? "1 to 5 "
                  : "6 to 9 "}
                <span className="text-body-tertiary"> Items of </span>
                {totalItems}
              </p>
              <a
                className={`fw-semibold ${viewAll ? "d-none" : ""}`}
                href="#!"
                data-list-view="*"
                onClick={handleViewToggle}
              >
                View all
                <span
                  className="fas fa-angle-right ms-1"
                  data-fa-transform="down-1"
                />
              </a>
              <a
                className={`fw-semibold ${viewAll ? "" : "d-none"}`}
                href="#!"
                data-list-view="less"
                onClick={handleViewToggle}
              >
                View Less
                <span
                  className="fas fa-angle-right ms-1"
                  data-fa-transform="down-1"
                />
              </a>
            </div>
            <div className="col-auto d-flex">
              <button
                className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
                data-list-pagination="prev"
                onClick={() => handlePageChange(currentPage - 1)}
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
                      onClick={() => handlePageChange(index + 1)}
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
                data-list-pagination="next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wishlist;
