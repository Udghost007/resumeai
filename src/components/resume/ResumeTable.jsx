import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ResumeTable = ({ resumes }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50">
            <th className="text-left p-4">Resume</th>

            <th className="text-left p-4">Template</th>

            <th className="text-left p-4">ATS Score</th>

            <th className="text-left p-4">Date</th>

            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {resumes.map((resume) => (
            <tr key={resume.id} className="border-t">
              <td className="p-4">{resume.title}</td>

              <td className="p-4">{resume.template}</td>

              <td className="p-4">{resume.atsScore}%</td>

              <td className="p-4">{resume.createdAt}</td>

              <td className="p-4">
                <div className="flex gap-3">
                  <button>
                    <FaEye />
                  </button>

                  <button>
                    <FaEdit />
                  </button>

                  <button>
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResumeTable;
