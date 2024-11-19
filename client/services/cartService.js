import { get, post, del, patch } from "../utils/request";

// Fetch all cart items for a specific user
export const getCartItems = async (userId) => {
  try {
    const result = await get(`cart/${userId}`);
    return result;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};

// Add a product to the cart and return if a new unique item was added
export const addToCart = async (userId, productId, quantity) => {
  try {
    const result = await post("cart/add", {
      userId,
      productId,
      quantity,
    });
    return result.success; // Return true if a new unique item was added
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

// Update quantity of a product in the cart
export const updateCartQuantity = async (userId, productId, quantity) => {
  try {
    const result = await patch("cart/update-quantity", {
      userId,
      productId,
      quantity,
    });
    return result;
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    throw error;
  }
};

// Remove a product from the cart
export const removeFromCart = async (userId, productId) => {
  try {
    const result = await del(`cart/remove?userId=${userId}&productId=${productId}`);
    return result;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};

// Fetch unique item count from the cart for a specific user
export const getUniqueItemCount = async (userId) => {
  try {
    const result = await get(`cart/${userId}/count`); // Gọi endpoint '/count' để lấy số mặt hàng duy nhất
    return result.count; // Dữ liệu trả về phải ở dạng { count: <number> }
  } catch (error) {
    console.error("Error fetching unique item count:", error);
    throw error;
  }
};
