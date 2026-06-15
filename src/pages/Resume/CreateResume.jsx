import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Certifications from "../../components/CreateResume/Certifications";
import Education from "../../components/CreateResume/Education";
import Experience from "../../components/CreateResume/Experience";
import PersonalInfo from "../../components/CreateResume/PersonalInfo";
import ProfessionalSummary from "../../components/CreateResume/ProfessionalSummary";
import Projects from "../../components/CreateResume/Projects";
import ResumeStepper from "../../components/CreateResume/ResumeStepper";
import Review from "../../components/CreateResume/Review";
import Skills from "../../components/CreateResume/Skills";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import Sidebar from "../../components/dashboard/Sidebar";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { fetchResumeById } from "./Slice/action";
import { clearSelectedResume } from "./Slice/resumeSlice";
import { downloadElementAsPdf } from "../../utils/pdfGenerator";
import ResumeLivePreview from "../../components/resume-preview/ResumeLivePreview";

const CreateResume = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(
    () => localStorage.getItem("selectedTemplateId") || "modern",
  );
  const [livePreviewData, setLivePreviewData] = useState({});
  const [downloading, setDownloading] = useState(false);

  const updatePreview = useCallback((fields) => {
    setLivePreviewData((prev) => ({ ...prev, ...fields }));
  }, []);

  const selectedResume = useAppSelector((state) => state.resume.selectedResume);

  // Sync route and check for templates
  useEffect(() => {
    if (id) {
      dispatch(fetchResumeById(id));
    } else {
      dispatch(clearSelectedResume());
      localStorage.removeItem("resumeId");

      const template = localStorage.getItem("selectedTemplateId");
      if (!template) {
        navigate("/templates");
      } else {
        setSelectedTemplate(template);
      }
    }
  }, [id, dispatch, navigate]);

  // Load backend details into the preview state
  useEffect(() => {
    if (selectedResume) {
      setLivePreviewData(selectedResume);
      if (selectedResume.template) {
        setSelectedTemplate(selectedResume.template);
        localStorage.setItem("selectedTemplateId", selectedResume.template);
      }
      if (selectedResume._id) {
        localStorage.setItem("resumeId", selectedResume._id);
      }
    }
  }, [selectedResume]);

  const nextStep = () => {
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);
      await downloadElementAsPdf(
        document.getElementById("resume-preview"),
        selectedResume?.title ? `${selectedResume.title}.pdf` : "resume.pdf",
      );
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  const renderStep = () => {
    const resumeId = selectedResume?._id;

    switch (currentStep) {
      case 1:
        return <PersonalInfo onNext={nextStep} onChange={updatePreview} />;
      case 2:
        return <ProfessionalSummary onNext={nextStep} onChange={updatePreview} id={resumeId} />;
      case 3:
        return <Education onNext={nextStep} onChange={updatePreview} id={resumeId} />;
      case 4:
        return <Experience onNext={nextStep} onChange={updatePreview} id={resumeId} />;
      case 5:
        return <Projects onNext={nextStep} onChange={updatePreview} id={resumeId} />;
      case 6:
        return <Skills onNext={nextStep} onChange={updatePreview} id={resumeId} />;
      case 7:
        return <Certifications onNext={nextStep} onChange={updatePreview} id={resumeId} />;
      case 8:
        return <Review id={resumeId} />;
      default:
        return <PersonalInfo onNext={nextStep} onChange={updatePreview} />;
    }
  };

  const downloadButton = selectedResume?._id ? (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-semibold transition shadow-sm hover:shadow"
    >
      {downloading ? "Preparing PDF..." : "Download PDF"}
    </button>
  ) : null;

  return (
    <div className="min-h-screen bg-slate-100 flex overflow-hidden h-screen w-full">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader
          title="Create Resume"
          subtitle="Build your ATS-friendly resume"
          rightElement={downloadButton}
        />

        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel: Form Wizard */}
          <div className="w-full lg:w-1/2 p-4 md:p-8 overflow-y-auto border-r border-slate-200 bg-slate-50 flex flex-col justify-start">
            <ResumeStepper currentStep={currentStep} />

            <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                    {currentStep === 1 && "Personal Information"}
                    {currentStep === 2 && "Professional Summary"}
                    {currentStep === 3 && "Education"}
                    {currentStep === 4 && "Experience"}
                    {currentStep === 5 && "Projects"}
                    {currentStep === 6 && "Skills"}
                    {currentStep === 7 && "Certifications"}
                    {currentStep === 8 && "Review & Complete"}
                  </h2>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3">
                    {currentStep > 1 && (
                      <button
                        onClick={prevStep}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-semibold transition"
                      >
                        Previous
                      </button>
                    )}

                    {currentStep < 8 && selectedResume?._id && (
                      <button
                        onClick={nextStep}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>

                <div>{renderStep()}</div>
              </div>
            </div>
          </div>

          {/* Right Panel: Live Preview */}
          <div className="hidden lg:flex lg:w-1/2 bg-slate-200 p-8 overflow-y-auto items-start justify-center">
            <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-lg border border-slate-300 sticky top-0 overflow-hidden">
              <div className="bg-slate-800 text-slate-400 text-xs px-4 py-2 flex justify-between items-center border-b select-none">
                <span>LIVE PREVIEW</span>
                <span className="capitalize font-semibold text-emerald-400">
                  {selectedTemplate} Template
                </span>
              </div>
              <div id="resume-preview" className="bg-white">
                <ResumeLivePreview data={livePreviewData} template={selectedTemplate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateResume;

