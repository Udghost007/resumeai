import { createAsyncThunk } from "@reduxjs/toolkit";
import resumeService from "../../../services/resumeService";

export const createResume = createAsyncThunk(
  "resume/create",
  async (resumeData, { rejectWithValue }) => {
    try {
      const result = await resumeService.createResume(resumeData);
      return result;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create resume",
      );
    }
  },
);

export const createResumeProjects = createAsyncThunk(
  "resume/createResumeProjects",
  async (resumeData, { rejectWithValue }) => {
    try {
      const result = await resumeService.createResumeProjects(resumeData);
      return result;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create resume",
      );
    }
  },
);

export const updateResume = createAsyncThunk(
  "resume/updateResume",
  async ({ id, resumeData }, { rejectWithValue }) => {
    try {
      const result = await resumeService.updateResume(id, resumeData);
      return result;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update resume",
      );
    }
  },
);

export const fetchResumes = createAsyncThunk(
  "resume/fetchResumes",
  async (filters, { rejectWithValue }) => {
    try {
      return await resumeService.getResumes(filters);
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Load failed");
    }
  },
);

export const fetchResumeById = createAsyncThunk(
  "resume/fetchResumeById",
  async (id, { rejectWithValue }) => {
    try {
      const result = await resumeService.getResumeById(id);
      return result;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch resume",
      );
    }
  },
);

export const deleteResume = createAsyncThunk(
  "resume/delete",
  async (id, { rejectWithValue }) => {
    try {
      await resumeService.deleteResume(id);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete resume",
      );
    }
  },
);

