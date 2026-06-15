import { useState } from "react";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import { useAppSelector } from "../../hooks/useRedux";
import { downloadElementAsPdf } from "../../utils/pdfGenerator";

const Review = () => {
  const selectedResume = useAppSelector((state) => state.resume.selectedResume);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    try {
      setError("");
      setDownloading(true);
      await downloadElementAsPdf(
        document.getElementById("resume-preview"),
        selectedResume?.title ? `${selectedResume.title}.pdf` : "resume.pdf",
      );
    } catch (err) {
      const message = err?.message || "Unable to download PDF";
      setError(message);
      console.error("Download failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  const pInfo = Array.isArray(selectedResume?.personalInfo)
    ? selectedResume.personalInfo[0]
    : selectedResume?.personalInfo || {};

  const checklist = [
    { label: "Personal Information", status: !!pInfo.fullName },
    { label: "Professional Summary", status: !!selectedResume?.summary },
    {
      label: "Education History",
      status: selectedResume?.education?.length > 0,
    },
    {
      label: "Work Experience",
      status: selectedResume?.experience?.length > 0,
    },
    { label: "Projects", status: selectedResume?.projects?.length > 0 },
    { label: "Skills", status: selectedResume?.skills?.length > 0 },
    {
      label: "Certifications",
      status: selectedResume?.certifications?.length > 0,
    },
  ];

  return (
    <div className="text-center py-6">
      <div className="flex justify-center mb-4 text-emerald-500">
        <FaCheckCircle size={64} />
      </div>

      <h2 className="text-2xl font-bold text-slate-800">
        Congratulations! Your resume is ready.
      </h2>
      <p className="text-slate-500 mt-2">
        Review your resume on the right and download it when you are ready.
      </p>

      {/* Checklist */}
      <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-6 mt-8 text-left border">
        <h3 className="font-semibold text-slate-700 mb-4">
          Resume Completeness Checklist
        </h3>
        <div className="space-y-3">
          {checklist.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full ${item.status ? "bg-emerald-500" : "bg-slate-300"}`}
              />
              <span
                className={`text-sm ${item.status ? "text-slate-700 font-medium" : "text-slate-400"}`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 max-w-sm mx-auto">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition w-full"
        >
          <FaDownload />
          {downloading ? "Downloading..." : "Download PDF"}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-600 mt-4 max-w-sm mx-auto">{error}</p>
      )}
    </div>
  );
};

export default Review;
