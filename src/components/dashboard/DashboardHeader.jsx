import { FaBell } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { toggleSidebar } from "../../store/uiSlice";

const DashboardHeader = ({
  title = "Dashboard",
  subtitle = "Welcome back",
  rightElement = null,
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  return (
    <header className="bg-white px-4 md:px-8 py-4 md:py-5 border-b">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Hamburger button for mobile */}
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
          >
            <HiMenu size={24} />
          </button>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h1>
            <p className="text-xs md:text-sm text-slate-500 mt-0.5">{subtitle}</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-4">
          {rightElement}

          {/* Notification */}
          <Link
            to="/notifications"
            className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition text-slate-700"
          >
            <FaBell />
          </Link>

          {/* User */}
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}&background=6366f1&color=fff`}
              alt="profile"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover"
            />

            <div className="hidden md:block">
              <h4 className="font-semibold text-sm md:text-base">{user?.name || "Aman Khare"}</h4>

              <p className="text-xs text-slate-500">{user?.email || "Frontend Developer"}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

