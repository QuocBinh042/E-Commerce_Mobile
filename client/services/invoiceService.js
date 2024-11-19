import { post } from "../utils/request";

export const createInvoice = async (orderId, totalAmount) => {
  return await post("invoices/create", { orderId, totalAmount });
};
