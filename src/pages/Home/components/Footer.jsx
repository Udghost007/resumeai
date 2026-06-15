import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top Footer */}
      <div className="container mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <FaFileAlt size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">ResumeGen AI</h2>
                <p className="text-sm text-slate-400">AI Resume Builder</p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Create professional ATS-friendly resumes using Artificial
              Intelligence. Build, optimize, and download resumes that help you
              stand out in today's competitive job market.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/features"
                  className="hover:text-indigo-400 transition"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  to="/templates"
                  className="hover:text-indigo-400 transition"
                >
                  Templates
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="hover:text-indigo-400 transition"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Resources</h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Resume Tips
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Career Advice
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  ATS Guide
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Interview Tips
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <FaEnvelope className="text-indigo-500 mt-1" />
                <span>support@resumegenai.com</span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-indigo-500 mt-1" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-indigo-500 mt-1" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 lg:px-10 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Stay Updated</h3>

              <p className="text-slate-400 mt-2">
                Get resume tips and career updates directly to your inbox.
              </p>
            </div>

            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full lg:w-80 rounded-l-xl bg-slate-800 border border-slate-700 focus:outline-none"
              />

              <button className="bg-indigo-600 hover:bg-indigo-700 px-6 rounded-r-xl text-white font-medium transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} ResumeGen AI. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-indigo-400">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-indigo-400">
                Terms of Service
              </a>

              <a href="#" className="hover:text-indigo-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
