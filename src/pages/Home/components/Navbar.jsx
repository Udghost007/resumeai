import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaFileAlt } from "react-icons/fa";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Pricing", path: "/pricing" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
              <FaFileAlt size={20} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">ResumeGen AI</h1>
              <p className="text-xs text-slate-500">AI Resume Builder</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-all ${
                    isActive
                      ? "text-indigo-600"
                      : "text-slate-600 hover:text-indigo-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-xl border border-slate-300 font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              Log In
            </Link>

            <Link
              to="/register"
              className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="lg:hidden text-slate-800 transition hover:text-indigo-600"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-md">
          <div className="px-6 py-5 flex flex-col gap-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-medium transition ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <hr className="my-2 border-slate-200" />

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="border border-slate-300 rounded-xl py-3 text-center font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              Log In
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="bg-indigo-600 text-white rounded-xl py-3 text-center font-medium hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
