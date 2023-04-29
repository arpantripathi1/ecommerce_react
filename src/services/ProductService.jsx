import { ENDPOINTS } from "../config";
import axios from "axios";

export const getProductList = async () => {
    const res = await axios.get(ENDPOINTS.productList);
    return res;
}

export const getSingleProduct = async (productId) => {
  const res = await axios.get(`${ENDPOINTS.productList}/${productId}`);
  return res;
};

