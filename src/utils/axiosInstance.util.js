import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "./apiPaths.util";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 400) {
        toast.error(error.response.data.message || "Bad Request");
        window.location.href = "/";
      } else if (error.response.status === 500) {
        toast.error("Server Error. Please try again.");
      } else {
        toast.error(error.response.data.message || "An error occurred.");
      }
    } else if (error.code === "ECONNABORTED") {
      toast.error("Request timeout. Please try again.");
    } else {
      toast.error("Network Error. Please check your connection.");
    }
    return Promise.reject(error); // ensure error propagation
  }
);

export default axiosInstance;
