import toast from "react-hot-toast";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useRedux";
import { deleteResume } from "../../pages/Resume/Slice/action";

const ResumeCard = ({ resume }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formattedDate = resume.createdAt
    ? new Date(resume.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "N/A";

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      try {
        await dispatch(deleteResume(resume._id)).unwrap();
        toast.success("Resume deleted successfully");
      } catch (err) {
        toast.error(err || "Failed to delete resume");
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-slate-800">
            {resume.title}
          </h3>

          <p className="text-slate-500 mt-1 capitalize">
            Template: {resume.template || "Modern"}
          </p>

          <p className="text-sm text-slate-400 mt-2">
            Created: {formattedDate}
          </p>
        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          ATS {resume.atsScore || 85}%
        </span>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <button
          onClick={() => navigate(`/resumes/preview/${resume._id}`)}
          className="flex items-center gap-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
        >
          <FaEye />
          Preview
        </button>

        <button
          onClick={() => navigate(`/resumes/create/${resume._id}`)}
          className="flex items-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
        >
          <FaEdit />
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
        >
          <FaTrash />
          Delete
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;
