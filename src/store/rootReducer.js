import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../pages/Auth/Slice/authSlice";
import resumeReducer from "../pages/Resume/Slice/resumeSlice";
import uiReducer from "./uiSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  resume: resumeReducer,
  ui: uiReducer,
});

export default rootReducer;
