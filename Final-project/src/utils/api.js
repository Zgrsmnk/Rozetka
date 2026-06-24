import axios from "axios";
import { API_URL } from "../constants/api";

const instance = axios.create({
    baseURL: API_URL,
});

const api = {
    getProducts() {
        return instance.get("/");
    }
}

export default api;