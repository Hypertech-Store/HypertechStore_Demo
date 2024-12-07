import instance from "./instance";

export const registerCustom = async (registerData) => {
    const res = await instance.post('/khach-hang/register', registerData);
    return res;
};

export const loginCustom = async (loginData) => {
    const res = await instance.post('/khach-hang/login', loginData);
    return res;
};