import { FaUserEdit, FaRobot, FaPenNib, FaFileDownload } from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaUserEdit size={28} />,
    title: "Enter Your Details",
    description:
      "Fill in your personal information, education, skills, projects, and work experience using our easy-to-use resume builder.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: "02",
    icon: <FaRobot size={28} />,
    title: "Generate With AI",
    description:
      "Our AI analyzes your information and creates professional summaries, project descriptions, and experience content instantly.",
    color: "bg-green-100 text-green-600",
  },
  {
    id: "03",
    icon: <FaPenNib size={28} />,
    title: "Customize Resume",
    description:
      "Choose a professional template, edit content, and optimize your resume for ATS systems and recruiter requirements.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "04",
    icon: <FaFileDownload size={28} />,
    title: "Download & Apply",
    description:
      "Export your resume in PDF format and start applying for jobs with confidence and a professional profile.",
    color: "bg-orange-100 text-orange-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
            Simple Process
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            How ResumeGen AI Works
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Build a professional ATS-friendly resume in just four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute top-5 right-5 text-5xl font-bold text-slate-100">
                {step.id}
              </div>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.color}`}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-slate-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="hidden lg:flex justify-center items-center gap-6 mt-16">
          <div className="w-24 h-[2px] bg-indigo-200"></div>
          <div className="w-4 h-4 rounded-full bg-indigo-600"></div>

          <div className="w-24 h-[2px] bg-indigo-200"></div>
          <div className="w-4 h-4 rounded-full bg-indigo-600"></div>

          <div className="w-24 h-[2px] bg-indigo-200"></div>
          <div className="w-4 h-4 rounded-full bg-indigo-600"></div>

          <div className="w-24 h-[2px] bg-indigo-200"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
