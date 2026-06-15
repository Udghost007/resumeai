import {
  FaChartLine,
  FaDownload,
  FaEye,
  FaFileAlt,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import Sidebar from "../../components/dashboard/Sidebar";

const resumes = [
  {
    id: 1,
    title: "Frontend Developer Resume",
    date: "15 May 2026",
    ats: "92%",
  },
  {
    id: 2,
    title: "React Developer Resume",
    date: "10 May 2026",
    ats: "95%",
  },
  {
    id: 3,
    title: "Full Stack Resume",
    date: "05 May 2026",
    ats: "89%",
  },
];

const Dashboard = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 overflow-x-hidden">
        <DashboardHeader
          title="Welcome Back"
          subtitle="Manage your resumes and profile"
        />

        <main className="p-4 md:p-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard icon={<FaFileAlt />} title="Total Resumes" value="12" />
            <StatCard icon={<FaDownload />} title="Downloads" value="35" />
            <StatCard
              icon={<FaChartLine />}
              title="Average ATS Score"
              value="92%"
            />
            <StatCard
              icon={<FaUser />}
              title="Profile Completion"
              value="85%"
            />
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-5">Quick Actions</h2>

            <div className="grid md:grid-cols-3 gap-5">
              <ActionCard
                to="/resumes/create"
                icon={<FaPlus />}
                title="Create Resume"
              />
              <ActionCard
                to="/templates"
                icon={<FaEye />}
                title="View Templates"
              />
              <ActionCard
                to="/profile"
                icon={<FaUser />}
                title="Update Profile"
              />
            </div>
          </section>

          <section className="mt-10 bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-5">Recent Resumes</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Resume Title</th>
                    <th className="text-left py-3">Created Date</th>
                    <th className="text-left py-3">ATS Score</th>
                    <th className="text-left py-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {resumes.map((resume) => (
                    <tr key={resume.id} className="border-b">
                      <td className="py-4">{resume.title}</td>
                      <td>{resume.date}</td>
                      <td>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          {resume.ats}
                        </span>
                      </td>
                      <td>
                        <Link
                          to={`/resumes/preview/${resume.id}`}
                          className="text-indigo-600 font-medium"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="text-indigo-600 text-3xl mb-4">{icon}</div>
      <p className="text-slate-500">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </div>
  );
};

const ActionCard = ({ icon, title, to }) => {
  return (
    <Link
      to={to}
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-left"
    >
      <div className="text-indigo-600 text-3xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </Link>
  );
};

export default Dashboard;
