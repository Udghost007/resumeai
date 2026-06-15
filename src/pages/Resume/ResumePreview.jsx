import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import ResumeLivePreview from "../../components/resume-preview/ResumeLivePreview";
import ResumeActions from "../../components/resume-preview/ResumeActions";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { fetchResumeById } from "../../pages/Resume/Slice/action";

const ResumePreview = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const selectedResume = useAppSelector((state) => state.resume.selectedResume);
  const loading = useAppSelector((state) => state.resume.loading);

  useEffect(() => {
    if (id) {
      dispatch(fetchResumeById(id));
    }
  }, [id, dispatch]);

  if (loading && !selectedResume) {
    return (
      <div className="flex bg-slate-100 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 overflow-x-hidden">
        <DashboardHeader
          title="Resume Preview"
          subtitle="Preview before downloading"
        />

        <div className="p-4 md:p-8 max-w-4xl mx-auto">
          <div
            id="resume-preview"
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
            style={{
              background: "#fff",
              color: "#000",
            }}
          >
            <ResumeLivePreview
              data={selectedResume}
              template={selectedResume?.template || "modern"}
            />
          </div>
          <ResumeActions />
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
