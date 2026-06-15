import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import { useAppSelector } from "../../hooks/useRedux";

const NotFound = () => {
  const token = useAppSelector((state) => state.auth.token) || localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl text-center">
        <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <FaExclamationTriangle size={36} />
        </div>

        <h1 className="text-6xl font-black text-indigo-600">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mt-4">Page Not Found</h2>
        
        <p className="text-slate-500 mt-4 leading-relaxed text-sm md:text-base">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="mt-8">
          <Link
            to={token ? "/resumes" : "/"}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-xl transition shadow-md shadow-indigo-100 hover:shadow-lg w-full justify-center"
          >
            <FaHome />
            {token ? "Back to Resumes" : "Back to Home"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
