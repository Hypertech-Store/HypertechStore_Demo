import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ParameterLink = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productSpecifications, setProductSpecifications] = useState([]);
  const [productData, setProductData] = useState([]); // Dữ liệu sản phẩm
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(0); // Tổng số trang
  const [thongSoList, setThongSoList] = useState([]);
  const productsPerPage = 10; // Số sản phẩm trên mỗi trang
  const [selectedSpec, setSelectedSpec] = useState("");
  const [description, setDescription] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [editingThongSo, setEditingThongSo] = useState(null);
  const [filteredSpecifications, setFilteredSpecifications] = useState([]);

  const breadcrumbTitles = {
    "admin/lien-ket-thong-so": "Liên kết thông số", // Đây là URL không có "/"
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Ghép lại các phần đường dẫn thành chuỗi để tìm trong breadcrumbTitles
  const currentTitle =
    breadcrumbTitles[pathnames.join("/")] ||
    pathnames[pathnames.length - 1]?.toUpperCase(); // Fallback nếu không tìm thấy

  // Cập nhật useEffect để xử lý thay đổi trang
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/san-pham-va-thong-so", {
        params: {
          page: currentPage, // Truyền thông tin trang hiện tại
          limit: productsPerPage, // Truyền giới hạn sản phẩm trên mỗi trang
        },
      })
      .then((response) => {
        console.log("API Response:", response.data); // Kiểm tra dữ liệu trả về

        // Trích xuất dữ liệu và tổng số
        const { data, last_page } = response.data;

        if (Array.isArray(data)) {
          // Chuyển đổi các item để thêm tên sản phẩm và tên thông số
          const updatedData = data.map((item) => ({
            ...item,
            san_pham_id: item.ten_san_pham || null,
            thong_so_id: item.ten_thong_so || null,
          }));

          setProductData(updatedData); // Cập nhật danh sách sản phẩm với tên sản phẩm và thông số
          setTotalPages(last_page); // Cập nhật tổng số trang

          // Kiểm tra nếu sau khi xóa và trang không còn dữ liệu, chuyển về trang đầu tiên
          if (updatedData.length === 0 && currentPage > 1) {
            setCurrentPage((prev) => prev - 1); // Chuyển trang về trang trước đó
          }
        } else {
          console.error("Products không phải là mảng:", data);
          setProductData([]); // Đặt lại danh sách sản phẩm nếu không phải là mảng
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setProductData([]); // Đặt lại danh sách sản phẩm khi có lỗi
      });
  }, [currentPage]); // Chỉ gọi lại API khi currentPage thay đổi

  const handlePageChange = (newPage) => {
    // Nếu người dùng đang ở trang 1 và không có dữ liệu
    if (newPage <= 0 || newPage > totalPages) {
      return;
    }

    setCurrentPage(newPage); // Thay đổi trang
  };

  // Fetch product list
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/san-pham/allSanPham")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data); // Store data in state
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const handleProductChange = (event) => {
    const selectedProductId = event.target.value;
    setSelectedProduct(selectedProductId);

    console.log("Selected Product ID:", selectedProductId);

    if (selectedProductId) {
      // Find the product in the list based on selected ID
      const selectedProductData = products.find(
        (product) => product.id === parseInt(selectedProductId)
      );

      if (selectedProductData) {
        const productCategoryId = selectedProductData.danh_muc_id;
        console.log("Danh mục ID của sản phẩm:", productCategoryId);

        // Fetch specs related to the category ID
        fetch(
          `http://127.0.0.1:8000/api/thong-so?danh_muc_id=${productCategoryId}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`API trả về lỗi: ${response.statusText}`);
            }
            return response.json();
          })
          .then((data) => {
            if (data && data.data.length > 0) {
              setProductSpecifications(data.data); // Update specifications
              console.log("Thông số sản phẩm từ API:", data);
            } else {
              setProductSpecifications([]); // No specifications
              console.log("Không có thông số nào cho danh mục này.");
            }
          })
          .catch((error) => {
            console.error("Lỗi khi gọi API lấy thông số sản phẩm:", error);
          });
      } else {
        setProductSpecifications([]); // Reset if product not found
        console.log("Không tìm thấy sản phẩm với ID đã chọn.");
      }
    } else {
      setProductSpecifications([]); // Reset if no product selected
      console.log("Vui lòng chọn sản phẩm.");
    }
  };

  const handleAddThongSo = async () => {
    if (!selectedProduct || thongSoList.length === 0) {
      alert("Vui lòng chọn sản phẩm và thêm thông số");
      return;
    }

    const requestData = {
      product_id: selectedProduct,
      parameters: thongSoList.map((item) => ({
        spec_id: item.selectedSpec,
        description: item.moTa,
      })),
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/san-pham-va-thong-so",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const data = await response.json();
      console.log("Response from server:", data);

      if (response.ok) {
        if (Array.isArray(data.data)) {
          alert("Thêm thông số thành công!");

          setProductData((prevProductData) => {
            const newProductData = [
              ...prevProductData,
              ...data.data, // Dữ liệu đã được trả về từ server chứa tên thay vì ID
            ];

            // Kiểm tra nếu đủ 10 thông số trên trang hiện tại thì chuyển sang trang tiếp theo
            const totalProducts = newProductData.length;
            if (totalProducts > currentPage * productsPerPage) {
              // Nếu trang hiện tại đã đủ số lượng, tự động chuyển sang trang sau
              setCurrentPage((prevPage) => prevPage + 1); // Tăng trang lên
            }

            return newProductData;
          });
        } else {
          console.error("Dữ liệu trả về không phải là mảng:", data);
          alert("Có lỗi khi thêm thông số.");
        }
      } else {
        throw new Error(`API error: ${data.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Lỗi khi gửi thông số:", error);
      alert(`Có lỗi xảy ra: ${error.message}`);
    }
  };

  const addThongSo = () => {
    // Thêm một thông số mới vào danh sách thongSoList
    setThongSoList([
      ...thongSoList,
      {
        id: Math.random(), // Tạo ID duy nhất cho mỗi thông số mới
        moTa: "", // Mô tả ban đầu
        selectedSpec: "", // Mã thông số đã chọn
      },
    ]);
  };

  const removeThongSo = (index) => {
    // Xóa thông số khỏi danh sách thongSoList
    const newThongSoList = thongSoList.filter((_, idx) => idx !== index);
    setThongSoList(newThongSoList);
  };

  const updateThongSo = (index, field, value) => {
    // Cập nhật thông tin cho thông số
    const updatedList = [...thongSoList];
    updatedList[index][field] = value;
    setThongSoList(updatedList);
  };

  const handleUpdateChange = (event) => {
    const selectedProductId = event.target.value;
    setSelectedProduct(selectedProductId); // Cập nhật sản phẩm đã chọn

    if (selectedProductId) {
      const selectedProductData = products.find(
        (product) => product.id === parseInt(selectedProductId)
      );

      if (selectedProductData) {
        const productCategoryId = selectedProductData.danh_muc_id;

        // Gọi API và cập nhật state filteredSpecifications
        fetch(
          `http://127.0.0.1:8000/api/thong-so?danh_muc_id=${productCategoryId}`
        )
          .then((response) => response.json())
          .then((data) => {
            setFilteredSpecifications(data.data); // Cập nhật thông số sản phẩm từ API
            setSelectedSpec(""); // Đặt lại selectedSpec mỗi khi sản phẩm thay đổi
          })
          .catch((error) => {
            console.error("Error fetching specifications:", error);
          });
      }
    } else {
      setFilteredSpecifications([]); // Reset thông số khi không chọn sản phẩm
      setSelectedSpec(""); // Đặt lại selectedSpec khi không có sản phẩm
    }
  };

  // Sửa đổi handleDeleteThongSo để cập nhật dữ liệu sau khi xóa và đảm bảo việc chuyển trang khi thiếu thông số
  const handleDeleteThongSo = async (thongSoId) => {
    console.log("ID của thông số cần xóa:", thongSoId);

    if (!window.confirm("Bạn có chắc chắn muốn xóa thông số này?")) {
      return; // Hủy nếu người dùng không xác nhận
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/san-pham-va-thong-so/${thongSoId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      

      if (response.ok) {
        alert("Xóa thông số thành công!");

        // Cập nhật danh sách sản phẩm ngay lập tức sau khi xóa
        setProductData(
          (prevProductData) =>
            prevProductData.filter((item) => item.id !== thongSoId) // Loại bỏ thông số đã xóa
        );

        // Kiểm tra nếu không còn thông số nào trên trang, thì chuyển về trang đầu tiên
        if (productData.length <= 1) {
          setCurrentPage(1); // Chuyển về trang 1 nếu không còn sản phẩm
        }
      } else {
        const data = await response.json();
        throw new Error(data.message || "Có lỗi khi xóa thông số.");
      }
    } catch (error) {
      console.error("Error deleting parameter:", error);
      alert(`Không thể xóa thông số: ${error.message}`);
    }
  };

  const handleSpecChange = (e) => {
    setSelectedSpec(e.target.value);
    const selectedSpecification = productSpecifications.find(
      (spec) => spec.id === Number(e.target.value)
    );
    if (selectedSpecification) {
      setDescription(selectedSpecification.mo_ta); // Pre-fill description
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleEditClick = async (item) => {
    try {
      console.log("Clicked item ID:", item.id);

      // Send API request to fetch detailed product info and specs
      const response = await fetch(
        `http://127.0.0.1:8000/api/san-pham-va-thong-so/${item.id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch item details");
      }

      const result = await response.json();
      const data = result.data; // Fetch data from response
      console.log("API response data:", data);

      // Update the state with item details
      setEditingThongSo(data);
      setSelectedProduct(data.san_pham_id); // Set selected product ID
      setSelectedSpec(data.thong_so_id); // Set selected spec ID
      setDescription(data.mo_ta); // Set description

      // Find related product in the products list
      const relatedProduct = products.find(
        (product) => product.id === data.san_pham_id
      );

      if (relatedProduct && relatedProduct.danh_muc_id) {
        const productCategoryId = relatedProduct.danh_muc_id;

        // Call API to fetch specs based on category ID
        const specsResponse = await fetch(
          `http://127.0.0.1:8000/api/thong-so?danh_muc_id=${productCategoryId}`
        );
        if (!specsResponse.ok) {
          throw new Error("Failed to fetch specifications");
        }

        const specsResult = await specsResponse.json();
        const specifications = specsResult.data; // Spec data
        setFilteredSpecifications(specifications); // Update filtered specs
        console.log("Filtered specifications:", specifications);

        // Find the correct spec that matches the item's thong_so_id
        const specData = specifications.find(
          (spec) => spec.id === data.thong_so_id
        );
        if (specData) {
          setSelectedSpec(specData.id); // Set selected spec based on thong_so_id
        }
      } else {
        console.warn(`Product not found or missing category ID`);
        setFilteredSpecifications([]); // Reset specifications if no category
      }
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  const handleUpdateThongSo = async () => {
    // Kiểm tra dữ liệu đầu vào
    if (!selectedProduct || !selectedSpec || !description) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    try {
      // Trước khi gửi yêu cầu cập nhật, lấy tên sản phẩm và thông số
      const selectedProductName = productData.find(
        (item) => item.id === selectedProduct
      )?.ten_san_pham;

      const selectedSpecName = filteredSpecifications.find(
        (spec) => spec.id === selectedSpec
      )?.ten_thong_so;

      console.log("Sending update request with data:", {
        san_pham_id: selectedProduct,
        thong_so_id: selectedSpec,
        ten_san_pham: selectedProductName,
        ten_thong_so: selectedSpecName,
        mo_ta: description,
      });

      // Gửi yêu cầu cập nhật API
      const response = await axios.put(
        `http://127.0.0.1:8000/api/san-pham-va-thong-so/${editingThongSo.id}`,
        {
          san_pham_id: selectedProduct,
          thong_so_id: selectedSpec,
          mo_ta: description,
        }
      );

      if (response.status === 200) {
        // Tạo object đã được cập nhật
        const updatedItem = response.data.data;

        setProductData((prevData) =>
          prevData.map((item) =>
            item.id === updatedItem.id
              ? { ...item, ...updatedItem } // Cập nhật thông tin với dữ liệu trả về từ API
              : item
          )
        );

        console.log("Updated data from API:", response.data);
        alert("Cập nhật thông số thành công!");

        // Reset các state và đóng modal
        setEditingThongSo(null);
        setSelectedProduct("");
        setSelectedSpec("");
        setDescription("");
      } else {
        console.error("Error updating specification:", response);
        alert("Có lỗi xảy ra khi cập nhật thông số!");
      }
    } catch (error) {
      console.error("Error sending update request:", error);
      alert("Có lỗi xảy ra khi gửi yêu cầu cập nhật!");
    }
  };

  return (
    <div className="content">
      <nav aria-label="breadcrumb">
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
            <h2 className="mb-0">Danh sách liên kết thông số</h2>
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
                    placeholder="Tìm kiếm"
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
                  data-bs-target="#addParameterLink"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-plus me-2" />
                  Thêm liên kết
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
                      className="white-space-nowrap fs-9 align-middle ps-3"
                      scope="col"
                      style={{ width: "6%" }}
                    >
                      STT
                    </th>
                    <th
                      className="white-space-nowrap align-middle ps-4"
                      scope="col"
                      style={{ width: "30%" }}
                      data-sort="product"
                    >
                      SẢN PHẨM
                    </th>
                    <th
                      className="align-middle ps-4"
                      scope="col"
                      style={{ width: "20%" }}
                    >
                      THÔNG SỐ
                    </th>
                    <th
                      className="align-middle ps-4"
                      scope="col"
                      style={{ width: "25%" }}
                    >
                      MÔ TẢ
                    </th>
                    <th className="align-middle ps-3" style={{ width: "5%" }}>
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {Array.isArray(productData) && productData.length > 0 ? (
                    productData.map((item, index) => (
                      <tr key={index}>
                        <td className="ps-3">
                          {index + 1 + (currentPage - 1) * 10}
                        </td>
                        <td className="product align-middle ps-4">
                          {item.ten_san_pham}{" "}
                          {/* Sử dụng tên sản phẩm từ response */}
                        </td>
                        <td className="tags align-middle review pb-2 ps-4">
                          {item.ten_thong_so}{" "}
                          {/* Sử dụng tên thông số từ response */}
                        </td>

                        <td className="tags align-middle review pb-2 ps-4">
                          {item.mo_ta}
                        </td>
                        <td className="align-middle white-space-nowrap">
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            onClick={() => handleEditClick(item)}
                            data-bs-toggle="modal"
                            data-bs-target="#editParameterLink"
                          >
                            <span className="fa-solid fa-pen-to-square fs-9" />
                          </button>
                          <button
                            className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                            type="button"
                            onClick={() => handleDeleteThongSo(item.id)} // Gọi hàm xóa thông số với ID
                          >
                            <span className="fa-solid fa-trash fs-9" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Không có dữ liệu để hiển thị
                      </td>
                    </tr>
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
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <span className="fas fa-chevron-left" />
                </button>
                <ul className="mb-0 pagination">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(index + 1)}
                        type="button"
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className="page-link pe-0"
                  onClick={() => handlePageChange(currentPage + 1)}
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
        id="addParameterLink"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="addParameterLink"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          style={{ width: "1100px" }}
        >
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Thêm liên kết</h3>
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
                </div>

                {thongSoList.length > 0 && (
                  <div className="col-lg-12">
                    <h5 className="mb-3">Liên kết thông số đã thêm</h5>
                  </div>
                )}

                {thongSoList.map((item, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="card p-3 h-100">
                      <div className="row g-3 align-items-start">
                        <div className="col-lg-12">
                          <label className="form-label fw-bold">
                            Tên thông số
                          </label>
                          <select
                            className="form-control"
                            value={item.selectedSpec}
                            onChange={(e) =>
                              updateThongSo(
                                index,
                                "selectedSpec",
                                e.target.value
                              )
                            }
                          >
                            <option value="" disabled>
                              Chọn tên thông số...
                            </option>
                            {productSpecifications
                              .filter(
                                (spec) =>
                                  !thongSoList.some(
                                    (addedItem) =>
                                      addedItem.selectedSpec === spec.id
                                  )
                              ) // Lọc các thông số đã được chọn
                              .map((spec) => (
                                <option key={spec.id} value={spec.id}>
                                  {spec.ten_thong_so}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="col-lg-12">
                          <label className="form-label fw-bold">Mô tả</label>
                          <textarea
                            className="form-control"
                            rows="2"
                            placeholder="Mô tả"
                            value={item.moTa}
                            onChange={(e) =>
                              updateThongSo(index, "moTa", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-12 text-end">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeThongSo(index)}
                          >
                            Xóa thông số
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-lg-12 text-center mt-4">
                  <div className="card p-3 bg-light border-dashed">
                    <button
                      className="btn btn-outline-success btn-block d-flex align-items-center justify-content-center btn-sm"
                      style={{ fontSize: "12px", fontWeight: "bold" }}
                      onClick={addThongSo}
                    >
                      <i className="fas fa-plus me-2"></i>
                      Thêm thông số mới
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-5" />

            <div className="modal-footer border-0 pt-0 px-0 pb-0 mt-5">
              <button
                className="btn btn-link text-danger px-3 my-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Hủy bỏ
              </button>
              <button className="btn btn-primary" onClick={handleAddThongSo}>
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editParameterLink"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="editParameterLink"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-l modal-dialog-centered">
          <div className="modal-content bg-body-highlight p-6">
            <div className="modal-header justify-content-between border-0 p-0 mb-2">
              <h3 className="mb-0">Chỉnh sửa thông số</h3>
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
                      Sản phẩm
                    </label>
                    <select
                      className="form-select"
                      value={selectedProduct}
                      onChange={handleUpdateChange}
                    >
                      <option value="">Chọn sản phẩm</option>
                      {products.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.ten_san_pham}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-2">
                    <label className="text-body-highlight fw-bold mb-2">
                      Thông số
                    </label>
                    <select
                      className="form-select"
                      value={selectedSpec} // Set giá trị của select từ state
                      onChange={handleSpecChange}
                    >
                      <option value="">Chọn thông số</option>
                      {filteredSpecifications.length > 0 ? (
                        filteredSpecifications.map((spec) => (
                          <option key={spec.id} value={spec.id}>
                            {spec.ten_thong_so} {/* Hiển thị tên thông số */}
                          </option>
                        ))
                      ) : (
                        <option value="">Không có thông số nào</option>
                      )}
                    </select>
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
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 pt-0 px-0 pb-0 mt-5">
              <button
                className="btn btn-link text-danger px-3 my-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Hủy bỏ
              </button>
              <button
                className="btn btn-primary my-0"
                onClick={handleUpdateThongSo}
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
export default ParameterLink;
