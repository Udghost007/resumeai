import Navbar from "../Home/components/Navbar";
import Footer from "../Home/components/Footer";
import CTA from "../Home/components/CTA";
import Features from "../Home/components/Features";
import { FaRobot, FaCheckDouble, FaPalette, FaHistory, FaDownload, FaChartLine } from "react-icons/fa";

const FeaturesPage = () => {
  const detailedFeatures = [
    {
      icon: <FaRobot size={24} />,
      title: "AI-Powered Suggestions",
      description: "Our advanced language model analyzes your career history and suggests highly impactful, role-specific bullet points and summaries that catch recruiter attention."
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Real-time ATS Scoring",
      description: "Get immediate feedback on your resume's searchability and matching capabilities. Check formatting, keywords, and density as you edit."
    },
    {
      icon: <FaPalette size={24} />,
      title: "Sleek Professional Templates",
      description: "Recruiter-tested templates designed to look professional across various industries, including software engineering, creative design, finance, and marketing."
    },
    {
      icon: <FaCheckDouble size={24} />,
      title: "Pre-written Job Responsibilities",
      description: "Access thousands of pre-written job bullet points across hundreds of occupations. Simply choose the ones that match your accomplishments."
    },
    {
      icon: <FaDownload size={24} />,
      title: "Instant PDF Downloads",
      description: "Download polished PDF resumes with a single click. Formatting remains pixel-perfect, clean, and optimized for applicant systems."
    },
    {
      icon: <FaHistory size={24} />,
      title: "Resume History & Versions",
      description: "Create multiple copies and customize them for specific job descriptions. Maintain all historical revisions safely in your dashboard."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-gradient-to-b from-indigo-50/50 to-transparent py-20 border-b border-slate-100">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              Platform Features
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Create Resumes That Stand Out <span className="text-indigo-600">Using AI</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore the full suite of tools designed to help you write faster, optimize for recruiter databases, and build a beautiful resume today.
            </p>
          </div>
        </section>

        {/* Re-use main features list layout */}
        <Features />

        {/* Detailed Grid Section */}
        <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Advanced Tools Built Into Every Template
              </h2>
              <p className="mt-4 text-slate-600">
                Every user gets access to our premium builder enhancements to compile their career profiles efficiently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detailedFeatures.map((feat, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{feat.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
