import { api } from "./axios";

const resumeService = {
  createResume: (payload) => api.post("/resume", payload),
  createResumeProjects: (payload) => api.post("/resumes/projects", payload),

  getResumes: (filters) => {
    const params = {};
    if (filters?.template && filters.template !== "All Templates" && filters.template !== "all") {
      params.template = filters.template.toLowerCase();
    }
    if (filters?.search) {
      params.search = filters.search;
    }
    return api.get("/resumes", { params });
  },
  getResumeById: (id) => api.get(`/resumes/${id}`),
  updateResume: (id, payload) => api.put(`/resumes/${id}`, payload),
  deleteResume: (id) => api.delete(`/resumes/${id}`),
};

export default resumeService;
