import { FaBell } from "react-icons/fa";
import { useAppSelector } from "../../hooks/useRedux";

const DashboardHeader = ({
  title = "Dashboard",
  subtitle = "Welcome back",
  rightElement = null,
}) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <header className="bg-white px-8 py-5 border-b">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>

          <p className="text-slate-500 mt-1">{subtitle}</p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {rightElement}

          {/* Notification */}
          <button className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
            <FaBell />
          </button>

          {/* User */}
          <div className="flex items-center gap-3">
            <img
              src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}&background=6366f1&color=fff`}
              alt="profile"
              className="w-11 h-11 rounded-full object-cover"
            />

            <div className="hidden md:block">
              <h4 className="font-semibold">{user?.name || "Aman Khare"}</h4>

              <p className="text-xs text-slate-500">{user?.email || "Frontend Developer"}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

