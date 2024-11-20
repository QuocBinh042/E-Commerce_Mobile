import { get, post, del, patch } from "../utils/request";

// Lấy danh sách địa chỉ theo UserID
export const fetchAddresses = async (userId) => {
  try {
    const response = await get(`address/user/${userId}`);
    return response; // Trả về danh sách địa chỉ
  } catch (error) {
    console.error("Error fetching addresses:", error.message);
    throw error;
  }
};

// Thêm địa chỉ mới
export const addAddress = async (address) => {
  try {
    const response = await post("address", address);
    return response; // Trả về kết quả thêm
  } catch (error) {
    console.error("Error adding address:", error.message);
    throw error;
  }
};

// Xóa địa chỉ
export const removeAddress = async (addressId) => {
  try {
    const response = await del(`address/${addressId}`);
    return response; // Trả về kết quả xóa
  } catch (error) {
    console.error("Error removing address:", error.message);
    throw error;
  }
};

// Cập nhật địa chỉ
export const updateAddress = async (addressId, updatedAddress) => {
  try {
    const response = await patch(`address/${addressId}`, updatedAddress);
    return response; 
  } catch (error) {
    console.error("Error updating address:", error.message);
    throw error;
  }
};
