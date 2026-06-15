import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ResumeFilters = ({
  searchTerm,
  setSearchTerm,
  templateFilter,
  setTemplateFilter,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col md:flex-row gap-4 justify-between">
      <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3 flex-1">
        <FaSearch className="text-slate-400" />

        <input
          type="text"
          placeholder="Search resumes..."
          className="outline-none w-full text-slate-700 placeholder:text-slate-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <select
        className="border border-slate-200 rounded-xl px-4 py-3 text-slate-700 outline-none focus:border-indigo-500"
        value={templateFilter}
        onChange={(e) => setTemplateFilter(e.target.value)}
      >
        <option>All Templates</option>
        <option>Modern</option>
        <option>Professional</option>
        <option>Creative</option>
      </select>

      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition cursor-pointer font-semibold"
        onClick={() => navigate("/templates")}
      >
        + Create Resume
      </button>
    </div>
  );
};

export default ResumeFilters;
