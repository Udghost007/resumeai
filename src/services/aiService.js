import { api } from "./axios";

const aiService = {
  generate: ({ type, prompt }) => api.post("/ai/generate", { type, prompt }),
};

export default aiService;
