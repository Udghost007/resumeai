import { createSlice } from "@reduxjs/toolkit";
import { createResume, fetchResumes, updateResume, fetchResumeById, deleteResume } from "./action";

const initialState = {
  resume: [],
  selectedResume: null,
  loading: false,
  error: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResumes: (state, action) => {
      state.resume = action.payload;
    },
    setSelectedResume: (state, action) => {
      state.selectedResume = action.payload;
    },
    clearSelectedResume: (state) => {
      state.selectedResume = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // fetch resume data
      .addCase(fetchResumes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResumes.fulfilled, (state, action) => {
        state.loading = false;
        state.resume =
          action.payload?.resumes || action.payload?.resume || action.payload;
      })
      .addCase(fetchResumes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // createResume
      .addCase(createResume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createResume.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedResume = action.payload?.resume || action.payload;
        if (Array.isArray(state.resume)) {
          state.resume.push(state.selectedResume);
        }
      })
      .addCase(createResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Resume
      .addCase(updateResume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateResume.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedResume = action.payload?.resume || action.payload;
        if (Array.isArray(state.resume)) {
          state.resume = state.resume.map((r) =>
            r?._id === state.selectedResume?._id ? state.selectedResume : r
          );
        }
      })
      .addCase(updateResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Resume By Id
      .addCase(fetchResumeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResumeById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedResume = action.payload?.resume || action.payload;
      })
      .addCase(fetchResumeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Resume
      .addCase(deleteResume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteResume.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(state.resume)) {
          state.resume = state.resume.filter((r) => r?._id !== action.payload);
        }
        if (state.selectedResume?._id === action.payload) {
          state.selectedResume = null;
        }
      })
      .addCase(deleteResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setResumes, setSelectedResume, clearSelectedResume } =
  resumeSlice.actions;
export default resumeSlice.reducer;

