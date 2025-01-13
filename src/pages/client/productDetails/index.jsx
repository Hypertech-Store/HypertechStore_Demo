/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { toast } from "react-toastify"; // Thư viện toast cho thông báo
import PacmanLoader from "react-spinners/PacmanLoader";
import { useNavigate } from "react-router-dom"; // Import hook điều hướng
import icon from "../../../assets/img/icons/image-icon.png";
import soldout from "../../../assets/img/e-commerce/outstock.png";

const ProductDetails = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const navigate = useNavigate();
  const productId = queryParams.get("id");
  const khachHangIdFromStorage = localStorage.getItem("userId");
  const [productData, setProductData] = useState(null);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean); // Tách các phần của URL
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [productRelated, setProductRelated] = useState([]); // Store related products
  // Tiêu đề cho từng phần của URL
  const breadcrumbTitles = {
    "cua-hang": "Cửa hàng",
    "chi-tiet-san-pham": "Chi tiết sản phẩm",
  };

  // eslint-disable-next-line no-unused-vars
  const [variantPrice, setVariantPrice] = useState(0); // lưu giá biến thể
  const [remainingTime, setRemainingTime] = useState("");
  const [ngayKetThucSale, setNgayKetThucSale] = useState(null);
  const [images, setImages] = useState([]);
  const [colorAttribute, setColorAttribute] = useState("");
  const [colorName, setColorName] = useState("");
  const [dungLuongOptions, setDungLuongOptions] = useState([]);

  const [selectedDungLuong, setSelectedDungLuong] = useState(null); // Dung lượng được chọn
  const [finalPrice, setFinalPrice] = useState(0);
  const [dungLuongName, setDungLuongName] = useState(""); // State for the attribute name "Dung lượng"
  const [colorVariants, setColorVariants] = useState([]);
  const [otherAttributes, setOtherAttributes] = useState([]);
  const [danhGias, setDanhGias] = useState([]);
  const [daMua, setDaMua] = useState(false); // Lưu trạng thái đã mua hay chưa

  // eslint-disable-next-line no-unused-vars
  const [isAttributesComplete, setIsAttributesComplete] = useState(false);
  const baseUrl = "http://127.0.0.1:8000/storage/";
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang

  const [formData, setFormData] = useState({
    rating: 0, // Điểm đánh giá
    reviewText: "", // Nội dung đánh giá
    images: [], // Mảng hình ảnh tải lên
  });

  const handleStarClick = (index) => {
    setFormData({ ...formData, rating: index + 1 });
  };

  // Hiển thị sao đã chọn
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          style={{
            fontSize: 32,
            cursor: "pointer",
            color: i < formData.rating ? "#FFD700" : "#D3D3D3", // Màu vàng cho sao đã chọn
          }}
        >
          &#9733; {/* Biểu tượng sao */}
        </span>
      );
    }
    return stars;
  };

  // Xử lý thay đổi khi người dùng chọn tệp
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setFormData({
        ...formData,
        images: [...formData.images, ...Array.from(files)],
      });
      console.log("Selected files:", files);
    }
  };

  // Xử lý sự kiện kéo thả tệp vào khu vực dropzone
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFormData({
        ...formData,
        images: [...formData.images, ...Array.from(files)],
      });
      console.log("Dropped files:", files);
    }
  };

  // Xử lý sự kiện kéo tệp qua khu vực dropzone
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Xử lý xóa hình ảnh
  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  // Gửi yêu cầu đánh giá lên API
  const handleSubmitReview = async () => {
    const { rating, reviewText, images } = formData;

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("san_pham_id", productId);
    formDataToSubmit.append("khach_hang_id", khachHangIdFromStorage);
    formDataToSubmit.append("danh_gia", rating);
    formDataToSubmit.append("binh_luan", reviewText);

    // Gửi từng hình ảnh lên server
    images.forEach((image) => {
      formDataToSubmit.append("image[]", image);
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/api/danh-gia", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Review submitted successfully!");
      } else {
        alert("Error submitting review: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting review");
    }
  };

  // Đánh giá sao
  // const handleRatingClick = (ratingValue) => {
  //   setFormData({
  //     ...formData,
  //     rating: ratingValue,
  //   });
  // };

  useEffect(() => {
    // Hàm để gọi API
    const fetchDanhGias = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/danh-gia/san-pham/${productId}?page=${currentPage}`
        );
        if (!response.ok) {
          throw new Error("Lỗi khi lấy dữ liệu");
        }
        const data = await response.json();
        console.log(data);

        setDanhGias(data); // Lưu dữ liệu vào state
        setTotalPages(Math.ceil(data?.summary.tong_danh_gia / 5)); // Làm tròn lên để tính số trang
        console.log("Dữ liệu nhận từ API:", data);
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };

    fetchDanhGias();
  }, [currentPage]); // Gọi lại mỗi khi trang thay đổi

  useEffect(() => {
    // Kiểm tra xem khách hàng đã mua sản phẩm chưa
    const kiemTraMuaSanPham = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/san-pham/kiem-tra-mua-san-pham/${productId}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              khach_hang_id: khachHangIdFromStorage, // Gửi ID khách hàng từ FE
            }),
          }
        );

        const data = await response.json();

        console.log(data);

        if (data.da_mua === false) {
          setDaMua(false);
          console.log(daMua);
        } else {
          setDaMua(true); // Khách hàng chưa mua sản phẩm
        }
      } catch (error) {
        console.error("Lỗi khi kiểm tra sản phẩm đã mua:", error);
      }
    };

    kiemTraMuaSanPham();
  }, [productId, khachHangIdFromStorage]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/san-pham/detail/${productId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Product data:", data);
        setProductData(data);
        console.log("Best Selling Products:", productData?.bestSellingProducts);

        setNgayKetThucSale(data.sale?.ngay_ket_thuc_sale || null);

        if (data.hinh_anh_bien_the_san_pham) {
          const imageLinks = data.hinh_anh_bien_the_san_pham.flatMap((item) =>
            item.hinh_anh.map(
              (image) => `${baseUrl}${image.duong_dan_hinh_anh}`
            )
          );
          setImages(imageLinks);
        }

        // Xử lý thuộc tính "Màu sắc"
        const colorAttributeData = data.gia_tri_thuoc_tinh?.find(
          (item) => item.thuoc_tinh_san_pham?.ten_thuoc_tinh === "Màu sắc"
        );
        setColorAttribute(
          colorAttributeData?.thuoc_tinh_san_pham?.ten_thuoc_tinh || "Màu sắc"
        );
        setColorName(colorAttributeData?.gia_tri || "Chưa chọn màu");

        // Hiển thị các biến thể màu sắc (nếu có)
        if (data.hinh_anh_bien_the_san_pham) {
          const colorVariantsData = data.hinh_anh_bien_the_san_pham.flatMap(
            (item) =>
              item.hinh_anh.map((image) => ({
                colorName: image.ten_gia_tri,
                imageUrl: `${baseUrl}${image.duong_dan_hinh_anh}`,
              }))
          );
          setColorVariants(colorVariantsData);
        }

        // Xử lý thuộc tính "Dung lượng"
        const capacityAttributeData = data.grouped_attributes?.["Dung lượng"];
        if (capacityAttributeData) {
          setDungLuongOptions(capacityAttributeData.ten_gia_tri || []);
          setDungLuongName("Dung lượng");
        }

        // Xử lý các thuộc tính khác (không phải Màu sắc và Dung lượng)
        const otherAttributesData = Object.keys(
          data.grouped_attributes || {}
        ).filter((key) => key !== "Màu sắc" && key !== "Dung lượng");
        setOtherAttributes(otherAttributesData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/san-pham/san-pham-lien-quan/${productId}`
        );
        const data = await response.json();

        // Kiểm tra dữ liệu trong console để chắc chắn rằng bạn có 'san_phams'
        console.log(data.san_phams); // Nếu có 'san_phams', nó sẽ được in ra.

        setProductRelated(data); // Gán giá trị của data vào state
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    if (productId) {
      fetchProductData();
      fetchRelatedProducts(); // Fetch related products
    }
  }, [productId]);

  const numberFormat = new Intl.NumberFormat("vi-VN", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  // Dependency on `productId` and `baseUrl`

  useEffect(() => {
    if (productData) {
      document.title = `${productData?.sanPham?.ten_san_pham}`;
    }
  }, [productData]); // Mỗi khi productData thay đổi, cập nhật lại tiêu đề trang

  useEffect(() => {
    // Hàm tính thời gian đếm ngược
    const calculateRemainingTime = () => {
      if (!ngayKetThucSale) return;

      const endTime = new Date(
        new Date(ngayKetThucSale).toLocaleString("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
        })
      ).getTime();
      const now = new Date().getTime();
      const timeLeft = endTime - now;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Số ngày
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ); // Số giờ còn lại
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Số phút
        // const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Số giây

        setRemainingTime(`${days} ngày ${hours} giờ ${minutes} phút`);
      } else {
        setRemainingTime(null); // Nếu hết hạn, xóa thời gian
      }
    };

    // Cập nhật mỗi giây nếu `ngayKetThucSale` tồn tại
    if (ngayKetThucSale) {
      const timer = setInterval(calculateRemainingTime, 1000);
      return () => clearInterval(timer); // Xóa bộ đếm khi unmounted
    }
  }, [ngayKetThucSale]);

  useEffect(() => {
    // Kiểm tra xem tất cả các thuộc tính đã được chọn hay chưa
    const isColorSelected = colorName && colorName !== "Chưa chọn màu";
    const isDungLuongSelected = selectedDungLuong && selectedDungLuong !== "";
    const areOtherAttributesSelected = otherAttributes.every(
      (attribute) =>
        productData.grouped_attributes[attribute]?.ten_gia_tri.length > 0
    );

    setIsAttributesComplete(
      isColorSelected && isDungLuongSelected && areOtherAttributesSelected
    );
  }, [colorName, selectedDungLuong, otherAttributes, productData]);
  // State để lưu chỉ số ảnh hiện tại
  const [activeImageIndex, setActiveImageIndex] = useState(0); // Mặc định là ảnh chính

  // Thêm ảnh chính vào đầu danh sách
  const imageArray = [productData?.sanPham?.duong_dan_anh, ...images];

  const handleImageClick = (index, color = "") => {
    if (index === 0) {
      setActiveImageIndex(0);
      setColorName("");
      setVariantPrice(0); // No variant price
    } else {
      setActiveImageIndex(index);
      setColorName(color);

      if (selectedDungLuong) {
        const selectedVariant = productData?.bienTheSanPhams?.find(
          (variant) =>
            variant.gia_tri_thuoc_tinh?.some(
              (attr) => attr.ten_gia_tri === color
            ) &&
            variant.gia_tri_thuoc_tinh?.some(
              (attr) => attr.ten_gia_tri === selectedDungLuong
            )
        );

        if (selectedVariant) {
          const variantPrice = parseFloat(selectedVariant.gia) || 0;
          setVariantPrice(variantPrice);

          // Format price with currency
          console.log(
            `Giá biến thể: ${new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(variantPrice)}`
          );

          setFinalPrice(calculateFinalPrice(variantPrice)); // Tính giá cuối
        }
      }
    }
  };

  const calculateFinalPrice = (variantPrice = 0) => {
    let basePrice = parseFloat(productData?.sanPham?.gia) || 0; // Giá gốc
    if (productData?.sale_theo_phan_tram) {
      // Nếu có giảm giá
      basePrice =
        basePrice -
        (basePrice * parseFloat(productData?.sale_theo_phan_tram || 0)) / 100; // Giá sau khi giảm
    }
    let finalPrice = basePrice + variantPrice;
    return finalPrice;
  };
  // Dùng giá mặc định ban đầu (gốc hoặc đã giảm)
  useEffect(() => {
    const initialPrice = calculateFinalPrice(0); // Giá mặc định khi chưa có biến thể
    setFinalPrice(initialPrice);
  }, [productData]);

  const handleAddToCart = async () => {
    const userData = JSON.parse(localStorage.getItem("userInfo"));

    // Kiểm tra người dùng đăng nhập
    if (!userData || !userData.id) {
      toast.error("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
      return;
    }

    // Kiểm tra nếu chỉ có màu sắc (colorName) hoặc dung lượng (selectedDungLuong) mà không yêu cầu cả 2
    if (
      !selectedVariant ||
      !selectedVariant.id ||
      (!colorName && !selectedDungLuong)
    ) {
      toast.error("Vui lòng chọn đầy đủ thuộc tính của sản phẩm.");
      return;
    }

    // Nếu selectedVariant có đầy đủ thuộc tính, không cần kiểm tra lại
    console.log("Biến thể đã chọn (ID):", selectedVariant.id);
    console.log("Thuộc tính biến thể:", selectedVariant.gia_tri_thuoc_tinh);

    // Lấy thông tin tồn kho
    const { so_luong_kho: stockQuantity } = selectedVariant;
    const stockStatus = productData?.sanPham?.so_luong_ton_kho || 0;

    console.log("Stock Quantity:", stockQuantity);
    console.log("Stock Status:", stockStatus);

    // Kiểm tra tình trạng tồn kho
    if (stockQuantity === 0 && stockStatus === 0) {
      toast.error("Sản phẩm biến thể này đã hết hàng.");
      return;
    }

    // Kiểm tra tồn kho biến thể hoặc sản phẩm riêng lẻ
    if (stockQuantity === 0) {
      toast.error("Sản phẩm biến thể này đã hết hàng.");
      return;
    }

    if (stockStatus === 0) {
      toast.error("Sản phẩm này đã hết hàng.");
      return;
    }

    // Chuẩn bị dữ liệu để gửi
    const productDataToSend = {
      khach_hang_id: userData.id,
      san_pham_id: selectedVariant.san_pham_id,
      so_luong: 1,
      bien_the_san_pham_id: selectedVariant.id,
      attributes:
        selectedVariant.gia_tri_thuoc_tinh?.map((attr) => ({
          gia_tri_thuoc_tinh_id: attr.id,
          ten_gia_tri: attr.ten_gia_tri,
        })) || [],
      gia: finalPrice,
    };

    // Giỏ hàng
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) =>
        item.san_pham_id === selectedVariant.san_pham_id &&
        JSON.stringify(item.attributes) ===
          JSON.stringify(productDataToSend.attributes)
    );

    if (existingProductIndex !== -1) {
      // Sản phẩm đã có trong giỏ hàng, cập nhật số lượng
      cart[existingProductIndex].so_luong += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Sản phẩm đã được cập nhật số lượng trong giỏ hàng.");
    } else {
      // Thêm sản phẩm mới vào giỏ hàng
      cart.push(productDataToSend);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
    }

    // Gửi yêu cầu thêm vào giỏ hàng qua API
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/gio-hang/them-gio-hang",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productDataToSend),
        }
      );

      if (response.ok) {
        // Nếu thành công, chuyển đến trang giỏ hàng
        navigate("/gio-hang");
      } else {
        toast.error("Có lỗi khi thêm sản phẩm vào giỏ hàng.");
      }
    } catch (error) {
      toast.error("Không thể kết nối với máy chủ, vui lòng thử lại.");
      console.error("Error:", error);
    }
  };

  const handleDungLuongChange = async (event) => {
    const selectedCapacity = event.target.value;
    setSelectedDungLuong(selectedCapacity);

    // Lọc các biến thể theo dung lượng đã chọn
    const filteredVariants = productData?.bienTheSanPhams?.filter((variant) =>
      variant.gia_tri_thuoc_tinh?.some(
        (attr) => attr.ten_gia_tri === selectedCapacity || !selectedCapacity
      )
    );

    console.log("Các biến thể lọc theo dung lượng:", filteredVariants);

    if (!filteredVariants || filteredVariants.length === 0) {
      setSelectedVariant(null);
      setVariantPrice(0);
      setFinalPrice(0);
      toast.warn("Không tìm thấy biến thể phù hợp với dung lượng đã chọn.");
      return;
    }

    let selectedVariant = filteredVariants[0]; // Mặc định chọn biến thể đầu tiên

    // Kiểm tra nếu có chọn màu sắc và chọn biến thể dựa trên màu sắc và dung lượng
    if (colorName && colorName.trim()) {
      // Lọc các biến thể dựa trên dung lượng và màu sắc đã chọn
      selectedVariant = filteredVariants.find((variant) =>
        variant.gia_tri_thuoc_tinh?.some(
          (attr) => attr.ten_gia_tri === colorName // Lọc theo màu
        )
      );
    }

    console.log("Biến thể đã chọn:", selectedVariant);

    // Nếu không tìm thấy biến thể với màu sắc, sẽ kiểm tra biến thể khác (hoặc biến thể đầu tiên nếu không có màu sắc)
    if (!selectedVariant) {
      selectedVariant = filteredVariants[0]; // Chọn một biến thể bất kỳ
      setSelectedVariant(selectedVariant);
      setVariantPrice(0);
      setFinalPrice(0);
      toast.warn("Không tìm thấy kết hợp màu sắc và dung lượng phù hợp.");
    }

    const sanPhamId = selectedVariant?.san_pham_id;
    const attributeIds = selectedVariant?.gia_tri_thuoc_tinh?.map(
      (attr) => attr.id
    );

    if (!sanPhamId || !attributeIds || attributeIds.length === 0) {
      toast.warn("Không có thuộc tính hoặc ID sản phẩm hợp lệ.");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/get-gia-bien-the",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            san_pham_id: sanPhamId,
            attributes: attributeIds,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Không thể lấy giá biến thể.");
      }

      const data = await response.json();
      const variantData = data?.bien_the_san_pham?.[0];
      console.log("Dữ liệu trả về từ API:", variantData);
      if (variantData?.gia) {
        const variantPrice = parseFloat(variantData.gia); // Lấy giá của biến thể
        setVariantPrice(variantPrice);
        setFinalPrice(calculateFinalPrice(variantPrice)); // Hàm tính giá cuối cùng
        setSelectedVariant(selectedVariant);

        console.log("Giá biến thể:", variantPrice);
      } else {
        toast.warn("Không tìm thấy giá cho biến thể đã chọn.");
      }
    } catch (error) {
      toast.error("Lỗi khi lấy giá biến thể từ API.");
      console.error("Error:", error);
    }
  };

  const handleColorChange = async (colorName) => {
    setColorName(colorName); // Cập nhật tên màu đã chọn vào state

    // Lọc các biến thể theo màu đã chọn
    const filteredVariants = productData?.bienTheSanPhams?.filter((variant) =>
      variant.gia_tri_thuoc_tinh?.some((attr) => attr.ten_gia_tri === colorName)
    );

    console.log("Các biến thể lọc theo màu sắc:", filteredVariants);

    if (!filteredVariants || filteredVariants.length === 0) {
      setSelectedVariant(null); // Không tìm thấy biến thể phù hợp
      setVariantPrice(0);
      setFinalPrice(0);
      toast.warn("Không tìm thấy biến thể phù hợp với màu sắc đã chọn.");
      return;
    }

    // Mặc định chọn biến thể đầu tiên trong danh sách đã lọc
    let selectedVariant = filteredVariants[0];

    // Cập nhật trạng thái của biến thể đã chọn và giá trị của nó
    setSelectedVariant(selectedVariant);
    setVariantPrice(0);
    setFinalPrice(0);

    console.log("Biến thể đã chọn:", selectedVariant);

    // Lấy ID sản phẩm và ID thuộc tính để gửi đi
    const sanPhamId = selectedVariant?.san_pham_id;
    const attributeIds = selectedVariant?.gia_tri_thuoc_tinh?.map(
      (attr) => attr.id
    );

    if (!sanPhamId || !attributeIds || attributeIds.length === 0) {
      toast.warn("Không có thuộc tính hoặc ID sản phẩm hợp lệ.");
      return;
    }

    // Gửi request API để lấy giá biến thể
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/get-gia-bien-the",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            san_pham_id: sanPhamId,
            attributes: attributeIds,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Không thể lấy giá biến thể.");
      }

      const data = await response.json();
      const variantData = data?.bien_the_san_pham?.[0];

      if (variantData?.gia) {
        const variantPrice = parseFloat(variantData.gia); // Lấy giá của biến thể
        setVariantPrice(variantPrice);
        setFinalPrice(calculateFinalPrice(variantPrice)); // Hàm tính giá cuối cùng
        console.log("Giá biến thể:", variantPrice);
      } else {
        toast.warn("Không tìm thấy giá cho biến thể đã chọn.");
      }
    } catch (error) {
      toast.error("Lỗi khi lấy giá biến thể từ API.");
      console.error("Error:", error);
    }
  };

  const handleCheckVariant = (type, value) => {
    if (type === "color") {
      // Xử lý sự kiện khi chọn màu
      handleImageClick(value.index + 1, value.colorName);
    } else if (type === "capacity") {
      // Xử lý sự kiện khi chọn dung lượng
      handleDungLuongChange({ target: { value } });
    }
  };

  if (!productData || !productData.grouped_attributes) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <PacmanLoader speedMultiplier={0.8} color="#36d7b7" />
      </div>
    ); // Show the loader while waiting for data
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString); // Tạo đối tượng Date từ chuỗi
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    // Sử dụng UTC để định dạng theo múi giờ UTC
    return date.toLocaleString("vi-VN", { timeZone: "UTC", ...options });
  };

  return (
    <>
      <div>
        <section>
          <section className="py-0">
            <div className="container-small">
              <nav className="mb-3" aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  {/* Trang chủ */}
                  <li className="breadcrumb-item">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  {/* Thêm "Cửa hàng" nếu đang ở trang "Chi tiết sản phẩm" */}
                  {pathnames.includes("chi-tiet-san-pham") && (
                    <li className="breadcrumb-item">
                      <Link to="/cua-hang">Cửa hàng</Link>
                    </li>
                  )}
                  {/* Chi tiết sản phẩm */}
                  {pathnames.map((pathname, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const title = breadcrumbTitles[pathname] || pathname;
                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                      <li
                        key={to}
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {title}
                      </li>
                    ) : null;
                  })}
                </ol>
              </nav>
              <div
                className="row g-5 mb-5 mb-lg-8"
                data-product-details="data-product-details"
              >
                <div className="col-12 col-lg-6">
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-2 col-lg-12 col-xl-2">
                      <div
                        className="swiper-products-thumb swiper theme-slider overflow-visible swiper-initialized swiper-vertical swiper-backface-hidden swiper-thumbs"
                        id="swiper-products-thumb"
                      >
                        <div
                          className="swiper-wrapper"
                          id="swiper-wrapper-56b3ffd4b36810b60"
                          aria-live="polite"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                          {/* Duyệt qua các ảnh khác (các ảnh con) */}
                          {images.map((image, index) => (
                            <div
                              key={index}
                              className={`swiper-slide ${
                                activeImageIndex === index + 1 // Chỉnh lại logic tính toán active
                                  ? "swiper-slide-thumb-active"
                                  : ""
                              }`}
                              role="group"
                              aria-label={`${index + 2} / ${imageArray.length}`}
                              style={{ height: 84, marginBottom: 16 }}
                              onClick={() =>
                                handleImageClick(
                                  index + 1, // Cập nhật chỉ số chính xác khi chọn ảnh con
                                  colorVariants[index]?.colorName || "",
                                  true
                                )
                              } // Gọi với isVariant = true cho các ảnh con
                            >
                              <div className="product-thumb-container p-2 p-sm-3 p-xl-2">
                                <img
                                  src={image}
                                  alt={`Product Image ${index + 2}`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-10 col-lg-12 col-xl-10">
                      <div className="d-flex align-items-center border border-translucent rounded-3 text-center p-5 h-100">
                        <div
                          className="swiper theme-slider swiper-initialized swiper-horizontal swiper-backface-hidden"
                          data-thumb-target="swiper-products-thumb"
                          data-products-swiper='{"slidesPerView":1,"spaceBetween":16,"thumbsEl":".swiper-products-thumb"}'
                        >
                          {productData?.sanPham?.so_luong_ton_kho === 0 && (
                            <div className="sold-out-overlay">
                              {/* Bạn có thể dùng một hình ảnh biểu tượng hoặc văn bản */}
                              <img
                                src={soldout}
                                alt="Sold Out"
                                style={{
                                  width: "90%",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          )}

                          <div
                            className="swiper-wrapper"
                            id="swiper-wrapper-25b87b05eda6d6e9"
                            aria-live="polite"
                          >
                            <div
                              className="swiper-slide swiper-slide-active"
                              role="group"
                              aria-label={`${activeImageIndex + 1} / ${
                                imageArray.length
                              }`}
                              style={{ width: 411 }}
                            >
                              {/* Hiển thị ảnh active */}
                              <img
                                className="w-100"
                                src={`${
                                  imageArray[activeImageIndex]?.startsWith(
                                    "http"
                                  )
                                    ? imageArray[activeImageIndex]
                                    : baseUrl + imageArray[activeImageIndex]
                                }`}
                                alt={`Product image ${activeImageIndex + 1}`}
                              />
                            </div>
                          </div>
                          <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-lg btn-outline-warning rounded-pill w-100 me-3 px-2 px-sm-4 fs-9 fs-sm-8">
                      <svg
                        className="svg-inline--fa fa-heart me-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="heart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                        />
                      </svg>
                      {/* <span class="me-2 far fa-heart"></span> Font Awesome fontawesome.com */}
                      Thêm yêu thích
                    </button>
                    <button
                      className="btn btn-lg btn-warning rounded-pill w-100 fs-9 fs-sm-8"
                      onClick={handleAddToCart}
                    >
                      <svg
                        className="svg-inline--fa fa-cart-shopping me-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cart-shopping"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        />
                      </svg>
                      Thêm giỏ hàng
                    </button>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="d-flex flex-wrap">
                        <div className="me-2">
                          <svg
                            className="svg-inline--fa fa-star text-warning"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                          {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          <svg
                            className="svg-inline--fa fa-star text-warning"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                          {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          <svg
                            className="svg-inline--fa fa-star text-warning"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                          {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          <svg
                            className="svg-inline--fa fa-star text-warning"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                          {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                          <svg
                            className="svg-inline--fa fa-star text-warning"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                          >
                            <path
                              fill="currentColor"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                          {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                        </div>
                        <p className="text-primary fw-semibold mb-2">
                          6548 People rated and reviewed{" "}
                        </p>
                      </div>
                      <h3 className="mb-3 lh-sm">
                        {productData?.sanPham?.ten_san_pham}
                      </h3>
                      {productData?.bestSellingProducts?.map((product) => {
                        // Kiểm tra product.id với sanPham.id
                        if (
                          product.id === productData?.sanPham?.id &&
                          product.top_bestseller
                        ) {
                          return (
                            <div
                              className="d-flex flex-wrap align-items-start mb-3"
                              key={product.id}
                            >
                              <span className="badge text-bg-success fs-9 rounded-pill me-2 fw-semibold">
                                #{product.top_bestseller} Sản phẩm bán chạy
                              </span>
                            </div>
                          );
                        }
                        return null; // Không hiển thị gì nếu id không khớp
                      })}

                      <div className="d-flex flex-wrap align-items-center">
                        {productData?.sale_theo_phan_tram ? (
                          <>
                            <h1 className="me-3">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })
                                .format(
                                  parseFloat(productData?.sanPham?.gia) *
                                    (1 -
                                      parseFloat(
                                        productData?.sale_theo_phan_tram
                                      ) /
                                        100) +
                                    variantPrice
                                )
                                .replace("₫", "VNĐ")}
                            </h1>
                            <p className="text-body-quaternary text-decoration-line-through fs-6 mb-0 me-3">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })
                                .format(parseFloat(productData?.sanPham?.gia))
                                .replace("₫", "VNĐ")}
                            </p>
                            <p className="text-warning fw-bolder fs-6 mb-0">
                              Giảm giá {""}
                              {parseFloat(
                                productData?.sale_theo_phan_tram
                              ).toFixed(0)}
                              %
                            </p>
                          </>
                        ) : (
                          <h1>
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })
                              .format(
                                parseFloat(productData?.sanPham?.gia) +
                                  variantPrice
                              )
                              .replace("₫", "VNĐ")}
                          </h1>
                        )}
                      </div>

                      <p className="mb-2 text-body-secondary mt-2">
                        {productData?.sanPham?.mo_ta}

                        {/* <a className="fw-bold" href="#!">
                            {""}Xem thêm
                          </a> */}
                      </p>
                      {remainingTime && (
                        <p className="text-danger-dark fw-bold mb-5 mb-lg-0">
                          Kết thúc sau {remainingTime}
                        </p>
                      )}
                    </div>
                    <div>
                      {/* Màu sắc */}
                      {/* Màu sắc */}
                      {colorAttribute === "Màu sắc" && (
                        <div className="mb-3">
                          <p className="fw-semibold mb-2 text-body">
                            <span>{colorAttribute}: </span>
                            <span className="text-body-emphasis">
                              {colorName || "Chưa chọn màu"}
                            </span>
                          </p>
                          <div className="d-flex product-color-variants">
                            {colorVariants.map((variant, index) => (
                              <div
                                key={index}
                                className={`rounded-1 border border-translucent me-2 ${
                                  variant.colorName === colorName
                                    ? "active"
                                    : ""
                                }`} // Đánh dấu biến thể đã chọn
                                onClick={() =>
                                  handleColorChange(variant.colorName)
                                } // Gọi hàm khi chọn
                                style={{ padding: "5px", borderWidth: "3px" }}
                              >
                                <img
                                  src={variant.imageUrl}
                                  alt={variant.colorName}
                                  width={30}
                                  height={30}
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Dung lượng */}
                      {dungLuongName === "Dung lượng" && (
                        <div className="row g-3 g-sm-5 align-items-end">
                          <div className="col-12 col-sm-auto">
                            <p className="fw-semibold mb-2 text-body">
                              {dungLuongName}
                            </p>
                            <div className="d-flex align-items-center">
                              {dungLuongOptions.length > 0 ? (
                                dungLuongOptions.map((option, index) => (
                                  <div
                                    key={index}
                                    className={`d-flex align-items-center me-3 rounded-1 border cursor-pointer ${
                                      selectedDungLuong === option
                                        ? "border border-primary"
                                        : "border border-1"
                                    }`}
                                    onClick={() =>
                                      handleCheckVariant("capacity", option)
                                    }
                                    style={{
                                      padding: "7px 10px",
                                      borderWidth: "3px",
                                      fontSize: "13px",
                                    }}
                                  >
                                    <span>{option}</span>
                                  </div>
                                ))
                              ) : (
                                <span className="text-muted">
                                  Không có tùy chọn dung lượng
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Hiển thị các thuộc tính khác nếu có */}
                      {otherAttributes.length > 0 && (
                        <div className="mb-3">
                          {otherAttributes.map((attribute) => (
                            <div key={attribute}>
                              <p className="fw-semibold mb-2 text-body">
                                <span>{attribute}: </span>
                                <span className="text-body-emphasis">
                                  {productData.grouped_attributes[
                                    attribute
                                  ]?.ten_gia_tri.join(", ")}
                                </span>
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-0">
            <div className="container-small">
              <ul
                className="nav nav-underline fs-9 mb-4"
                id="productTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="specification-tab"
                    data-bs-toggle="tab"
                    href="#tab-specification"
                    role="tab"
                    aria-controls="tab-specification"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Thông số kỹ thuật
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    href="#tab-reviews"
                    role="tab"
                    aria-controls="tab-reviews"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Đánh giá & nhận xét
                  </a>
                </li>
              </ul>
              <div className="row gx-3 gy-7">
                <div className="col-12 col-lg-7 col-xl-12">
                  <div className="tab-content" id="productTabContent">
                    <div
                      className="tab-pane pe-lg-6 pe-xl-12 fade show active text-body-emphasis"
                      id="tab-specification"
                      role="tabpanel"
                      aria-labelledby="specification-tab"
                    >
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{ width: "40%" }}> </th>
                            <th style={{ width: "60%" }} />
                          </tr>
                        </thead>
                        <tbody>
                          {productData?.sanPham?.thong_so &&
                            productData?.sanPham?.thong_so.map(
                              (spec, index) => (
                                <tr key={index}>
                                  <td className="bg-body-highlight align-middle">
                                    <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
                                      {spec.thong_so}
                                    </h6>
                                  </td>
                                  <td className="px-5 mb-0">{spec.mo_ta}</td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="tab-reviews"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                    >
                      <div className="bg-body-emphasis rounded-3 p-4 border border-translucent">
                        <div className="row g-3 justify-content-between mb-4">
                          <div className="col-auto">
                            <div className="d-flex align-items-center flex-wrap">
                              <h2 className="fw-bolder me-3">
                                {danhGias?.summary.trung_binh_sao}
                                <span className="fs-8 text-body-quaternary fw-bold">
                                  /5
                                </span>
                              </h2>
                              <div className="me-3">
                                {/* Loop to display full stars */}
                                {[
                                  ...Array(
                                    Math.floor(danhGias?.summary.trung_binh_sao)
                                  ),
                                ].map((_, index) => (
                                  <svg
                                    key={`full-star-${index}`}
                                    className="svg-inline--fa fa-star text-warning fs-6"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="star"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    data-fa-i2svg
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                    />
                                  </svg>
                                ))}

                                {/* Check if there is a half star */}
                                {danhGias?.summary.trung_binh_sao % 1 !== 0 && (
                                  <svg
                                    className="svg-inline--fa fa-star-half-stroke star-icon text-warning fs-6"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="star-half-stroke"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    data-fa-i2svg
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"
                                    />
                                  </svg>
                                )}

                                {/* Loop to display empty stars */}
                                {[
                                  ...Array(
                                    5 -
                                      Math.ceil(
                                        danhGias?.summary.trung_binh_sao
                                      )
                                  ),
                                ].map((_, index) => (
                                  <svg
                                    key={`empty-star-${index}`}
                                    className="svg-inline--fa fa-star text-body-quaternary fs-6"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="star"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    data-fa-i2svg
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                    />
                                  </svg>
                                ))}
                              </div>

                              <p className="text-body mb-0 fw-semibold fs-7">
                                {danhGias?.summary.tong_sao} ratings and{" "}
                                {danhGias?.summary.tong_danh_gia} reviews
                              </p>
                            </div>
                          </div>

                          {daMua ? (
                            <div className="col-auto">
                              <button
                                className="btn btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#reviewModal"
                              >
                                Rate this product
                              </button>

                              <div
                                className="modal fade"
                                id="reviewModal"
                                tabIndex={-1}
                                aria-hidden="true"
                              >
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content p-4">
                                    <div className="d-flex flex-between-center mb-2">
                                      <h5 className="modal-title fs-8 mb-0">
                                        Your rating
                                      </h5>
                                      <button className="btn p-0 fs-10">
                                        Clear
                                      </button>
                                    </div>
                                    {/* <div
                                      className="mb-3 star-rating"
                                      data-rater='{"starSize":32,"step":0.5}'
                                      style={{
                                        width: 160,
                                        height: 32,
                                        backgroundSize: 32,
                                      }}
                                    >
                                      <div
                                        className="star-value"
                                        style={{ backgroundSize: 32, width: `${(formData.rating / 5) * 100}%` }}
                                        onClick={() => setFormData({ ...formData, rating: 5 })}
                                      />
                                    </div> */}

                                    <div
                                      className="mb-3 star-rating"
                                      style={{ display: "flex", gap: "10px" }}
                                    >
                                      {renderStars()} {/* Hiển thị sao */}
                                    </div>

                                    <div className="mb-3">
                                      <h5 className="text-body-highlight mb-3">
                                        Your review
                                      </h5>
                                      <textarea
                                        className="form-control"
                                        id="reviewTextarea"
                                        rows={5}
                                        placeholder="Write your review"
                                        value={formData.reviewText}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            reviewText: e.target.value,
                                          })
                                        }
                                      />
                                    </div>
                                    <div
                                      className="dropzone dropzone-multiple p-0 mb-5"
                                      onDrop={handleDrop}
                                      onDragOver={handleDragOver}
                                      onClick={() =>
                                        document
                                          .getElementById("fileInput")
                                          .click()
                                      } // Kích hoạt input khi click
                                      id="my-awesome-dropzone"
                                      data-dropzone="data-dropzone"
                                    >
                                      <div className="fallback">
                                        <input
                                          id="fileInput"
                                          type="file"
                                          style={{ display: "none" }} // Ẩn input
                                          onChange={handleFileChange}
                                          multiple="multiple" // Cho phép chọn nhiều file
                                        />
                                      </div>

                                      {formData.images &&
                                      formData.images.length > 0 ? (
                                        <div className="dz-preview d-flex flex-wrap">
                                          {formData.images.map(
                                            (image, index) => (
                                              <div
                                                key={index}
                                                className="border border-translucent bg-body-emphasis rounded-3 d-flex justify-content-center align-items-center position-relative me-2 mb-2"
                                                style={{
                                                  height: 120,
                                                  width: 120,
                                                }}
                                              >
                                                <img
                                                  className="dz-image"
                                                  src={URL.createObjectURL(
                                                    image
                                                  )}
                                                  alt="Preview"
                                                  data-dz-thumbnail="data-dz-thumbnail"
                                                  style={{
                                                    maxWidth: "100%",
                                                    maxHeight: "100%",
                                                    objectFit: "contain",
                                                  }}
                                                />
                                                <a
                                                  className="dz-remove text-body-quaternary"
                                                  href="#!"
                                                  data-dz-remove="data-dz-remove"
                                                  onClick={() =>
                                                    handleRemoveImage(index)
                                                  }
                                                >
                                                  <span data-feather="x" />
                                                </a>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      ) : (
                                        <div
                                          className="dz-message text-body-tertiary text-opacity-85"
                                          data-dz-message="data-dz-message"
                                        >
                                          Drag your photo here
                                          <span className="text-body-secondary px-1">
                                            or
                                          </span>
                                          <button
                                            className="btn btn-link p-0"
                                            type="button"
                                          >
                                            Browse from device
                                          </button>
                                          <br />
                                          <img
                                            className="mt-3 me-2"
                                            src={icon}
                                            width={40}
                                            alt="upload icon"
                                          />
                                        </div>
                                      )}
                                    </div>
                                    <div className="d-sm-flex flex-between-center">
                                      <div className="form-check flex-1">
                                        <input
                                          className="form-check-input"
                                          id="reviewAnonymously"
                                          type="checkbox"
                                          defaultChecked
                                        />
                                        <label
                                          className="form-check-label mb-0 text-body-emphasis fw-semibold"
                                          htmlFor="reviewAnonymously"
                                        >
                                          Review anonymously
                                        </label>
                                      </div>
                                      <button
                                        className="btn ps-0"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        className="btn btn-primary rounded-pill"
                                        onClick={handleSubmitReview}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                        <div>
                          {danhGias?.data?.data.map((danhGia, index) => (
                            <div
                              key={index}
                              className="mb-4 hover-actions-trigger btn-reveal-trigger"
                            >
                              <div className="d-flex justify-content-between">
                                <h5 className="mb-2">
                                  {/* Hiển thị số sao */}
                                  {Array.from(
                                    { length: danhGia.danh_gia },
                                    (_, i) => (
                                      <svg
                                        key={i}
                                        className="svg-inline--fa fa-star text-warning"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                        />
                                      </svg>
                                    )
                                  )}
                                  <span className="text-body-secondary ms-1">
                                    {" "}
                                    by{" "}
                                  </span>
                                  {danhGia.khach_hang.ho_ten}
                                </h5>
                                <div className="btn-reveal-trigger position-static">
                                  <button
                                    className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    data-boundary="window"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-bs-reference="parent"
                                  >
                                    <svg
                                      className="svg-inline--fa fa-ellipsis fs-10"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="ellipsis"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <p className="text-body-tertiary fs-9 mb-1">
                                {formatDate(danhGia.created_at)}
                              </p>
                              <p className="text-body-highlight mb-3">
                                {danhGia.binh_luan}
                              </p>
                              <div className="row g-2 mb-2">
                                {Array.isArray(danhGia.chi_tiet_danh_gias) &&
                                  danhGia.chi_tiet_danh_gias.map(
                                    (image, index) => (
                                      <div className="col-auto" key={index}>
                                        <a
                                          href={
                                            "http://127.0.0.1:8000/storage/" +
                                            image.hinh_anh_duong_dan
                                          }
                                          data-gallery={`gallery-${index}`}
                                        >
                                          <img
                                            src={
                                              "http://127.0.0.1:8000/storage/" +
                                              image.hinh_anh_duong_dan
                                            }
                                            alt={`Review ${index + 1}`}
                                            height={164}
                                          />
                                        </a>
                                      </div>
                                    )
                                  )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="d-flex justify-content-center">
                          <nav>
                            <ul className="pagination mb-0">
                              {/* Nút quay lại */}
                              <li
                                className={`page-item ${
                                  currentPage === 1 ? "disabled" : ""
                                }`}
                              >
                                <a
                                  className="page-link"
                                  href="#!"
                                  onClick={() =>
                                    setCurrentPage(currentPage - 1)
                                  }
                                >
                                  <svg
                                    className="svg-inline--fa fa-chevron-left"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="chevron-left"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                    />
                                  </svg>
                                </a>
                              </li>

                              {/* Các trang */}
                              {Array.from({ length: totalPages }).map(
                                (_, pageIndex) => (
                                  <li
                                    key={pageIndex + 1}
                                    className={`page-item ${
                                      currentPage === pageIndex + 1
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    <a
                                      className="page-link"
                                      href="#!"
                                      onClick={() =>
                                        setCurrentPage(pageIndex + 1)
                                      }
                                    >
                                      {pageIndex + 1}
                                    </a>
                                  </li>
                                )
                              )}

                              {/* Nút tiếp theo */}
                              <li
                                className={`page-item ${
                                  currentPage === totalPages ? "disabled" : ""
                                }`}
                              >
                                <a
                                  className="page-link"
                                  href="#!"
                                  onClick={() =>
                                    setCurrentPage(currentPage + 1)
                                  }
                                >
                                  <svg
                                    className="svg-inline--fa fa-chevron-right"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="chevron-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                    />
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of .container*/}
          </section>
        </section>

        <section className="py-0 mb-9">
          <div className="container">
            <div className="d-flex flex-between-center mb-3">
              <div>
                <h3>Sản phẩm tương tự</h3>
                <p className="mb-0 text-body-tertiary fw-semibold">
                  Thiết yếu cho một cuộc sống tốt đẹp hơn
                </p>
              </div>
            </div>
            <div className="swiper-theme-container products-slider">
              <div
                className="swiper theme-slider swiper-initialized swiper-horizontal swiper-backface-hidden"
                data-swiper='{"slidesPerView":1,"spaceBetween":16,"breakpoints":{"450":{"slidesPerView":2,"spaceBetween":16},"768":{"slidesPerView":3,"spaceBetween":16},"992":{"slidesPerView":4,"spaceBetween":16},"1200":{"slidesPerView":5,"spaceBetween":16},"1540":{"slidesPerView":6,"spaceBetween":16}}}'
              >
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-18d1b1cb4c610f964"
                  aria-live="polite"
                >
                  {Array.isArray(productRelated?.san_phams_lien_quan) &&
                  productRelated.san_phams_lien_quan.length > 0 ? (
                    productRelated.san_phams_lien_quan.map((product) => (
                      <div
                        key={product.id}
                        className="swiper-slide swiper-slide-active"
                        role="group"
                        aria-label="1 / 7"
                        style={{ width: "217.6px", marginRight: 16 }}
                      >
                        <div className="position-relative text-decoration-none product-card h-100">
                          <div className="d-flex flex-column justify-content-between h-100">
                            <div>
                              <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                                <button
                                  className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  aria-label="Add to wishlist"
                                  data-bs-original-title="Add to wishlist"
                                >
                                  <svg
                                    className="svg-inline--fa fa-heart d-block-hover"
                                    data-fa-transform="down-1"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="heart"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    data-fa-i2svg
                                    style={{
                                      transformOrigin: "0.5em 0.5625em",
                                    }}
                                  >
                                    <g transform="translate(256 256)">
                                      <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                        <path
                                          fill="currentColor"
                                          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                          transform="translate(-256 -256)"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                  {/* <span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                                  <svg
                                    className="svg-inline--fa fa-heart d-none-hover"
                                    data-fa-transform="down-1"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="heart"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    data-fa-i2svg
                                    style={{
                                      transformOrigin: "0.5em 0.5625em",
                                    }}
                                  >
                                    <g transform="translate(256 256)">
                                      <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                        <path
                                          fill="currentColor"
                                          d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                          transform="translate(-256 -256)"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                  {/* <span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                                </button>
                                {product.trang_thai && (
                                  <div
                                    style={{
                                      position: "absolute",
                                      overflow: "hidden",
                                      width: "80px",
                                      height: "85px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        fontSize: "11px",
                                        position: "relative",
                                        top: "22px", // Điều chỉnh vị trí theo chiều dọc
                                        left: "-30px", // Điều chỉnh vị trí theo chiều ngang
                                        width: "120px",
                                        height: "20px",
                                        lineHeight: "20px",
                                        color: "#fff",
                                        textAlign: "center",
                                        backgroundColor: "#ff3100",
                                        textTransform: "uppercase",
                                        zIndex: 2,
                                        fontWeight: "700",
                                        transform: "rotate(-45deg)",
                                      }}
                                    >
                                      {/* Điều kiện hiển thị dựa vào trang_thai */}
                                      {product.trang_thai === "Sale"
                                        ? `${parseFloat(
                                            product.sale_percent.replace(
                                              "%",
                                              ""
                                            )
                                          ).toFixed(0)}%`
                                        : product.trang_thai === "Sản phẩm mới"
                                        ? "NEW"
                                        : null}
                                    </div>
                                  </div>
                                )}

                                <img
                                  className="img-fluid"
                                  src={`${baseUrl}${product.duong_dan_anh}`}
                                  alt={product.ten_san_pham}
                                />
                              </div>
                              <a
                                className="stretched-link"
                                href={`/chi-tiet-san-pham?id=${product.id}`}
                              >
                                <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                                  {product.ten_san_pham}
                                </h6>
                              </a>
                              <p className="fs-9">
                                <svg
                                  className="svg-inline--fa fa-star text-warning"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="star"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  />
                                </svg>
                                {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                                <svg
                                  className="svg-inline--fa fa-star text-warning"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="star"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  />
                                </svg>
                                {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                                <svg
                                  className="svg-inline--fa fa-star text-warning"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="star"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  />
                                </svg>
                                {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                                <svg
                                  className="svg-inline--fa fa-star text-warning"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="star"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  />
                                </svg>
                                {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                                <svg
                                  className="svg-inline--fa fa-star text-warning"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="star"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  data-fa-i2svg
                                >
                                  <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                  />
                                </svg>
                                {/* <span class="fa fa-star text-warning"></span> Font Awesome fontawesome.com */}
                                <span className="text-body-quaternary fw-semibold ms-1">
                                  (59 people rated)
                                </span>
                              </p>
                            </div>
                            <div>
                              <div className="align-items-center mb-1">
                                {product.trang_thai === "Sale" ? (
                                  <>
                                    <h4
                                      className="mb-0"
                                      style={{ color: "#dd2f2c" }}
                                    >
                                      {/* Tính toán giá sau khi giảm và định dạng giá */}
                                      {numberFormat.format(
                                        parseFloat(product.gia) *
                                          (1 -
                                            parseFloat(
                                              product.sale_percent.trim()
                                            ) /
                                              100)
                                      )}{" "}
                                      VNĐ
                                    </h4>
                                    <p
                                      className="text-decoration-line-through mb-0 mt-1"
                                      style={{
                                        color: "#98a2b3",
                                        fontSize: "16px",
                                      }}
                                    >
                                      {/* Hiển thị giá gốc đã có gạch ngang và định dạng giá */}
                                      {numberFormat.format(
                                        parseFloat(product.gia)
                                      )}{" "}
                                      VNĐ
                                    </p>
                                  </>
                                ) : (
                                  <h4
                                    className="text-body-emphasis mb-0"
                                    style={{ marginTop: "-4pc" }}
                                  >
                                    {/* Nếu không có sale thì hiển thị giá gốc */}
                                    {numberFormat.format(
                                      parseFloat(product.gia)
                                    )}{" "}
                                    VNĐ
                                  </h4>
                                )}
                              </div>

                              {product.trang_thai === "Sale" && (
                                <p className="text-success fw-bold fs-9 lh-1 mb-0 mt-3">
                                  Kết thúc sau {remainingTime}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No related products available.</p>
                  )}
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                />
              </div>
              <div className="swiper-nav">
                <div
                  className="swiper-button-next"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-18d1b1cb4c610f964"
                  aria-disabled="false"
                >
                  <svg
                    className="svg-inline--fa fa-chevron-right nav-icon"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    />
                  </svg>
                  {/* <span class="fas fa-chevron-right nav-icon"></span> Font Awesome fontawesome.com */}
                </div>
                <div
                  className="swiper-button-prev swiper-button-disabled"
                  tabIndex={-1}
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-18d1b1cb4c610f964"
                  aria-disabled="true"
                >
                  <svg
                    className="svg-inline--fa fa-chevron-left nav-icon"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                    />
                  </svg>
                  {/* <span class="fas fa-chevron-left nav-icon"></span> Font Awesome fontawesome.com */}
                </div>
              </div>
            </div>
          </div>
          {/* end of .container*/}
        </section>
      </div>
    </>
  );
};
export default ProductDetails;
