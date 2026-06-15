import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://resumeai-backend-mcvg.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      if (window.location.pathname !== "/login") {
        window.location.assign("/login");
      }
    }

    return Promise.reject(error);
  },
);

export const api = {
  get: (url, config) => axiosClient.get(url, config).then((res) => res.data),
  post: (url, data, config) =>
    axiosClient.post(url, data, config).then((res) => res.data),
  put: (url, data, config) =>
    axiosClient.put(url, data, config).then((res) => res.data),
  delete: (url, config) =>
    axiosClient.delete(url, config).then((res) => res.data),
};

export default axiosClient;
