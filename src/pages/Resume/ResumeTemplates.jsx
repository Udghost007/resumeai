import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useRedux";
import { clearSelectedResume } from "./Slice/resumeSlice";
import Sidebar from "../../components/dashboard/Sidebar";

const ResumeTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const templates = [
    {
      id: "modern",
      name: "Modern Template",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80",
      description:
        "A clean, developer-friendly layout with bold headings and blue accents.",
    },
    {
      id: "professional",
      name: "Professional Template",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      description:
        "A classic corporate resume design built to look polished and academic.",
    },
    {
      id: "creative",
      name: "Creative Template",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
      description:
        "A warm two-column layout ideal for designers, marketers, and creatives.",
    },
  ];

  const handleUseTemplate = (templateId) => {
    localStorage.setItem("selectedTemplateId", templateId);
    localStorage.removeItem("resumeId"); // Clear previous session resume
    dispatch(clearSelectedResume()); // Clear Redux state
    navigate("/resumes/create");
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="min-h-screen bg-[#f3f4f8] p-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Select a Resume Template
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Pick a starter design. You can change templates anytime while
            editing.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template) => {
            const isSelected = selectedTemplate === template.id;
            return (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`flex flex-col bg-white rounded-3xl overflow-hidden border-2 cursor-pointer transition-all duration-350 shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                  isSelected
                    ? "border-indigo-600 ring-4 ring-indigo-50"
                    : "border-slate-100"
                }`}
              >
                {/* Image Preview */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 border-b">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transform scale-110 transition-transform">
                        Selected
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {template.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                      {template.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    {isSelected ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Avoid re-triggering parent onClick
                          handleUseTemplate(template.id);
                        }}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-bold shadow-md transition-colors"
                      >
                        Use this template
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="w-full border border-slate-200 text-slate-600 hover:bg-slate-50 py-3 rounded-2xl font-semibold transition-colors"
                      >
                        Select
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplates;
