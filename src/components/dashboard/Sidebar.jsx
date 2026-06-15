import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaUser,
  FaLayerGroup,
  FaCog,
  FaSignOutAlt,
  FaRobot,
} from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { logout } from "../../pages/Auth/Slice/authSlice";
import { closeSidebar } from "../../store/uiSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen);

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      title: "My Resumes",
      path: "/resumes",
      icon: <FaFileAlt />,
    },
    {
      title: "Templates",
      path: "/templates",
      icon: <FaLayerGroup />,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      title: "AI Generator",
      path: "/ai-generator",
      icon: <FaRobot />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => dispatch(closeSidebar())}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 w-72 h-screen bg-white border-r flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-3 rounded-xl">
              <FaRobot size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">ResumeGen AI</h2>

              <p className="text-sm text-slate-500">Resume Builder</p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 p-4 overflow-y-auto">
          <p className="text-xs font-semibold text-slate-400 uppercase mb-4">
            Main Menu
          </p>

          <div className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => dispatch(closeSidebar())}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>

                <span className="font-medium">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Bottom User Card */}
        <div className="p-4 border-t">
          <div className="bg-slate-50 rounded-xl p-3">
            <div className="flex items-center gap-3">
              <img
                src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}&background=6366f1&color=fff`}
                alt="user"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-sm">
                  {user?.name || "ResumeGen User"}
                </h4>

                <p className="text-xs text-slate-500">Frontend Developer</p>
              </div>
            </div>

            <button
              onClick={() => {
                dispatch(logout());
                dispatch(closeSidebar());
                navigate("/login");
              }}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
