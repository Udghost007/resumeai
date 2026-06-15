import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Lazy load route components
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const ForgotPassword = lazy(() => import("../pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/Auth/ResetPassword"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const ResumeList = lazy(() => import("../pages/Resume/ResumeList"));
const CreateResume = lazy(() => import("../pages/Resume/CreateResume"));
const ResumePreview = lazy(() => import("../pages/Resume/ResumePreview"));
const ResumeTemplates = lazy(() => import("../pages/Resume/ResumeTemplates"));
const Settings = lazy(() => import("../pages/Dashboard/Settings"));
const Notifications = lazy(() => import("../pages/Dashboard/Notifications"));
const AIResumeGenerator = lazy(() => import("../pages/AI/AIResumeGenerator"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const FeaturesPage = lazy(() => import("../pages/Features/FeaturesPage"));
const HowItWorksPage = lazy(() => import("../pages/HowItWorks/HowItWorksPage"));
const PricingPage = lazy(() => import("../pages/Pricing/PricingPage"));
const AboutPage = lazy(() => import("../pages/About/AboutPage"));
const ContactPage = lazy(() => import("../pages/Contact/ContactPage"));

// Fallback spinner component during lazy loading
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
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
    </Suspense>
  );
};

export default AppRoutes;

