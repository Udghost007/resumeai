import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 to-violet-600">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 lg:p-16 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                🚀 Get Started Today
              </span>

              <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white leading-tight">
                Ready To Build Your
                <br />
                Dream Resume?
              </h2>

              <p className="mt-6 text-lg text-indigo-100 max-w-xl">
                Generate professional ATS-friendly resumes using Artificial
                Intelligence. Create impressive resumes, optimize content, and
                land more interviews.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/register"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-100 transition"
                >
                  Get Started Free
                  <FaArrowRight />
                </Link>

                <Link
                  to="/templates"
                  className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition"
                >
                  View Templates
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Why Choose ResumeGen AI?
              </h3>

              <div className="space-y-5">
                {[
                  "AI-Powered Resume Writing",
                  "ATS Optimization & Scoring",
                  "Professional Resume Templates",
                  "Real-Time Resume Preview",
                  "PDF Download Support",
                  "Fast & Easy Resume Creation",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-lg" />

                    <span className="text-slate-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <h4 className="text-2xl font-bold text-indigo-600">10K+</h4>
                  <p className="text-xs text-slate-500">Users</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <h4 className="text-2xl font-bold text-green-600">25K+</h4>
                  <p className="text-xs text-slate-500">Resumes</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <h4 className="text-2xl font-bold text-orange-500">98%</h4>
                  <p className="text-xs text-slate-500">Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
