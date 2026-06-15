import aiService from "./aiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const generateAiAction = createAsyncThunk(
  "post/personal",
  async (prompt) => {
    try {
      if (prompt && prompt !== "") {
        const response = await aiService.generate({ type: "summary", prompt });

        if (response && response.success) {
          const textResponse = response.content || "";

          // Remove the ```json and ``` markdown wrapper by regex
          const cleanJsonString = textResponse
            .replace(/```json\s*/i, "") // remove ```json at start
            .replace(/\s*```/, "") // remove ``` at end
            .trim();

          return JSON.parse(cleanJsonString);
        } else {
          throw new Error(response?.message || "AI generation failed");
        }
      }
      return null;
    } catch (error) {
      console.error("Error generating AI content:", error);
      throw error;
    }
  },
);
