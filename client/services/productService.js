import { del, get, patch, post } from "../utils/request"

export const getProductList = async () =>{
    const result = await get("products/all");
    return result;
}

export const createProduct = async (options) =>{
    const result = await post("products", options);
    return result;
}

export const deleteProduct = async (id) =>{
    const result = await del(`products/${id}`);
    return result;
}

export const updateProduct = async(id, options) =>{
    const result = await patch(`products/${id}`, options);
    return result;
}

export const getProductsByCategory = async (categoryId) => {
  if (!categoryId) {
    console.error("Category ID is required");
    return null;
  }  
  try {
    const result = await get(`products?categoryId=${categoryId}`);
    return result;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};
