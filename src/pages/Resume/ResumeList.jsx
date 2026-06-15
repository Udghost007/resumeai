import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import ResumeFilters from "../../components/resume/ResumeFilters";
import ResumeCard from "../../components/resume/ResumeCard";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { fetchResumes } from "./Slice/action";

const ResumeList = () => {
  const dispatch = useAppDispatch();
  const resumes = useAppSelector((state) => state.resume.resume);
  const loading = useAppSelector((state) => state.resume.loading);

  const [searchTerm, setSearchTerm] = useState("");
  const [templateFilter, setTemplateFilter] = useState("All Templates");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(fetchResumes({ template: templateFilter, search: searchTerm }));
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, templateFilter, searchTerm]);

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 overflow-x-hidden">
        <DashboardHeader title="My Resumes" subtitle="Manage your resumes" />

        <div className="p-4 md:p-8">
          <ResumeFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            templateFilter={templateFilter}
            setTemplateFilter={setTemplateFilter}
          />

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          ) : Array.isArray(resumes) && resumes.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-6 mt-8">
              {resumes.map((resume) => (
                <ResumeCard key={resume._id} resume={resume} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300 mt-8">
              <h3 className="text-xl font-bold text-slate-800">No resumes found</h3>
              <p className="text-slate-500 mt-2">Get started by creating your first resume!</p>
              <Link
                to="/templates"
                className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                Create Resume
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeList;
