import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;
const userToken =
  (typeof window !== "undefined" && localStorage.getItem("user-token")) || "";

const axiosInstance = axios.create({
  baseURL,
});

if (userToken) {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "user-token"
  )}`;
}

axiosInstance.interceptors.request.use(
  (config) => {
    if (config && typeof window !== "undefined") {
      const token =
        config.data?.access_token || localStorage.getItem("user-token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("user-token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
