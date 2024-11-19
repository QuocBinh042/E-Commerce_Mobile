import { post } from "../utils/request";

export const createOrder = async (userId, itemIds, totalAmount) => {
  return await post("orders", { userId, itemIds, totalAmount });
};
