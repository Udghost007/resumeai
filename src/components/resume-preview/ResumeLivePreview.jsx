import React, { lazy, Suspense } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

// Lazy-loaded template components
const ModernTemplate = lazy(() => import("./ModernTemplate"));
const ProfessionalTemplate = lazy(() => import("./ProfessionalTemplate"));
const CreativeTemplate = lazy(() => import("./CreativeTemplate"));

const ResumeLivePreview = ({ data = {}, template = "modern" }) => {
  // Extract personal info robustly
  const personalInfo = Array.isArray(data?.personalInfo)
    ? data.personalInfo[0]
    : data?.personalInfo || {};

  const summary = data?.summary || "";
  const education = data?.education || [];
  const experience = data?.experience || [];
  const projects = data?.projects || [];
  const skills = data?.skills || [];
  const certifications = data?.certifications || [];

  // Common contact info renderer
  const renderContactItem = (icon, text) => {
    if (!text) return null;
    return (
      <span className="flex items-center gap-1.5 text-xs text-slate-600">
        {icon}
        <span>{text}</span>
      </span>
    );
  };

  const renderSocialLink = (icon, text, url) => {
    if (!url) return null;
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs text-indigo-600 hover:underline"
      >
        {icon}
        <span>{text || "Link"}</span>
      </a>
    );
  };

  const renderTemplate = () => {
    const props = {
      personalInfo,
      summary,
      education,
      experience,
      projects,
      skills,
      certifications,
      renderContactItem,
      renderSocialLink,
    };

    switch (template) {
      case "professional":
        return <ProfessionalTemplate {...props} />;
      case "creative":
        return <CreativeTemplate {...props} />;
      case "modern":
      default:
        return <ModernTemplate {...props} />;
    }
  };

  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-slate-500 min-h-[400px] flex items-center justify-center font-medium">
          <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mr-2"></div>
          Loading Template Preview...
        </div>
      }
    >
      {renderTemplate()}
    </Suspense>
  );
};

export default ResumeLivePreview;
