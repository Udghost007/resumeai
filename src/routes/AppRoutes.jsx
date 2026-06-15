import { Route, Routes } from "react-router-dom";
import AIResumeGenerator from "../pages/AI/AIResumeGenerator";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";
import Notifications from "../pages/Dashboard/Notifications";
import Settings from "../pages/Dashboard/Settings";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import CreateResume from "../pages/Resume/CreateResume";
import ResumeList from "../pages/Resume/ResumeList";
import ResumePreview from "../pages/Resume/ResumePreview";
import ResumeTemplates from "../pages/Resume/ResumeTemplates";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/reset-password/:token" element={<ResetPassword />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/resumes" element={<ResumeList />} />
        <Route path="/resumes/create" element={<CreateResume />} />
        <Route path="/resumes/create/:id" element={<CreateResume />} />
        <Route path="/resumes/preview/:id" element={<ResumePreview />} />
        <Route path="/templates" element={<ResumeTemplates />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/ai-generator" element={<AIResumeGenerator />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
