import axios from "axios";
import { API_URL } from "../constants/api";

const instance = axios.create({
  baseURL: API_URL,
});

const api = {
  getProducts() {
    return instance.get("/");
  },

  createProduct(data) {
    return instance.post("/", data);
  },

  updateProduct(id, data) {
    return instance.put(`/${id}`, data);
  },

  deleteProduct(id) {
    return instance.delete(`/${id}`);
  },
};

export default api;
