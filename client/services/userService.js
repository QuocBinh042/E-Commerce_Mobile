import { del, get, patch, post, upload } from "../utils/request";

// Đăng nhập người dùng
export const checkUserLogin = async (username, password) => {
    try {
        const response = await post("user/login", { username, password });
        console.log("API response:", response);
        if (response.success) {
            return response.user;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        return null;
    }
};

// Lấy danh sách người dùng
export const getUserList = async () => {
    return await get("user/users");
};

// Tạo người dùng mới
export const createUser = async (options) => {
    return await post("user/users", options);
};

// Cập nhật người dùng
export const updateUser = async (id, options) => {
    return await patch(`user/users/${id}`, options);
};

// Xóa người dùng
export const deleteUser = async (id) => {
    return await del(`user/users/${id}`);
};

// API: Upload Avatar
export const uploadAvatar = async (userId, file) => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);
  
      // Gọi API upload
      return await upload(`user/${userId}/avatar`, formData);
    } catch (error) {
      console.error("Error uploading avatar:", error);
      throw error;
    }
  };