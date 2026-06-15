import { useState } from "react";
import { downloadElementAsPdf } from "../../utils/pdfGenerator";
import { useAppSelector } from "../../hooks/useRedux";
import { useNavigate } from "react-router-dom";

const ResumeActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const selectedResume = useAppSelector((state) => state.resume.selectedResume);
  const navigate = useNavigate();

  const handleDownload = async () => {
    try {
      setError("");
      setLoading(true);
      await downloadElementAsPdf(
        document.getElementById("resume-preview"),
        selectedResume?.title ? `${selectedResume.title}.pdf` : "resume.pdf",
      );
    } catch (downloadError) {
      setError(downloadError.message || "Unable to download PDF");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      {error && <p className="mb-3 text-sm text-red-600">{error}</p>}

      <div className="flex gap-4">
        <button
          onClick={handleDownload}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-xl transition cursor-pointer font-semibold"
        >
          {loading ? "Preparing PDF..." : "Download PDF"}
        </button>

        {selectedResume?._id && (
          <button
            onClick={() => navigate(`/resumes/create/${selectedResume._id}`)}
            className="border border-slate-200 hover:bg-slate-50 px-6 py-3 rounded-xl transition cursor-pointer font-semibold text-slate-700"
          >
            Edit Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default ResumeActions;
