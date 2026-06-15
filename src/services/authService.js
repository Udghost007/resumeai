import { api } from "./axios";

const authService = {
  register: (payload) => api.post("/auth/register", payload),
  login: (credentials) => api.post("/auth/login", credentials),
  forgotPassword: (payload) => api.post("/auth/forgot-password", payload),
  resetPassword: (payload) => api.post("/auth/reset-password", payload),
  getCurrentUser: () => api.get("/auth/user"),
  updateProfile: (payload) => api.put("/auth/profile", payload),
};

export default authService;
