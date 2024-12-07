import instance from "./instance";

// Lấy tất cả sản phẩm
export const getAllProducts = async () => {
    const res = await instance.get('/san-pham/allProduct');
    return res;
};

// Lấy chi tiết sản phẩm theo ID
export const getProductDetailById = async (productId) => {
    const res = await instance.get(`/san-pham/detail/${productId}`);
    return res;
};

// Tạo sản phẩm mới
export const createProduct = async (productData) => {
    const res = await instance.post('/san-pham/create', productData);
    return res;
};

// Cập nhật sản phẩm theo ID
export const updateProductById = async (productId, productData) => {
    const res = await instance.put(`/san-pham/update/${productId}`, productData);
    return res;
};

// Xóa sản phẩm theo ID
export const deleteProductById = async (productId) => {
    const res = await instance.delete(`/san-pham/delete/${productId}`);
    return res;
};


export const getVariantProductById = async (productId) => {
    const res = await instance.get(`/san-pham/${productId}/bien-the`);
    return res;
};