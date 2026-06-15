import { FaFileAlt } from "react-icons/fa";

const EmptyState = () => {
  return (
    <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
      <div className="flex justify-center">
        <div className="bg-indigo-100 p-5 rounded-full">
          <FaFileAlt size={40} className="text-indigo-600" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6">No Resumes Found</h2>

      <p className="text-slate-500 mt-3">
        Create your first ATS-friendly resume using AI.
      </p>

      <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl">
        Create Resume
      </button>
    </div>
  );
};

export default EmptyState;
