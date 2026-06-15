import { FaRobot, FaCheckCircle, FaFileAlt } from "react-icons/fa";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="hidden lg:flex bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-12 flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold">ResumeGen AI</h1>
          <p className="mt-4 text-lg opacity-90">
            Build ATS-Friendly Resumes Using AI
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <FaRobot />
            <span>AI Generated Resume Content</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle />
            <span>ATS Optimization</span>
          </div>

          <div className="flex items-center gap-3">
            <FaFileAlt />
            <span>Professional Templates</span>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            <div>
              <h3 className="text-2xl font-bold">10K+</h3>
              <p>Users</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">25K+</h3>
              <p>Resumes</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">98%</h3>
              <p>Success</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-slate-500 mt-2 mb-8">{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
