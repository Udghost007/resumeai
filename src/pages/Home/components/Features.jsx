import { FaRobot, FaShieldAlt, FaBolt, FaPalette } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={28} />,
    title: "AI-Powered Writing",
    description:
      "Generate professional resume summaries, experience descriptions, and project details using advanced AI technology.",
    bg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "ATS Optimization",
    description:
      "Create ATS-friendly resumes that pass applicant tracking systems and improve your chances of getting shortlisted.",
    bg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: <FaBolt size={28} />,
    title: "Time Saving",
    description:
      "Build complete resumes within minutes instead of spending hours formatting and writing content manually.",
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: <FaPalette size={28} />,
    title: "Professional Templates",
    description:
      "Choose from modern, elegant, and recruiter-approved resume templates tailored for different industries.",
    bg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Why Choose ResumeGen AI?
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            Everything you need to build a professional, ATS-friendly resume and
            stand out in today’s competitive job market.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.iconColor}`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-indigo-600">95%</h3>
            <p className="mt-2 text-slate-600">AI Resume Quality Score</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-green-600">100%</h3>
            <p className="mt-2 text-slate-600">ATS-Friendly Formatting</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">10x</h3>
            <p className="mt-2 text-slate-600">Faster Resume Creation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
