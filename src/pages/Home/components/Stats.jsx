import { FaUsers, FaFileAlt, FaStar, FaChartLine } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={28} />,
    value: "10K+",
    label: "Happy Users",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <FaFileAlt size={28} />,
    value: "25K+",
    label: "Resumes Created",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaStar size={28} />,
    value: "4.9/5",
    label: "Average Rating",
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    icon: <FaChartLine size={28} />,
    value: "98%",
    label: "Success Rate",
    color: "bg-blue-100 text-blue-600",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
            Trusted Worldwide
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            Helping Professionals
            <br />
            Build Better Careers
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Thousands of job seekers use ResumeGen AI to create professional
            resumes and get hired faster.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${stat.color}`}
              >
                {stat.icon}
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                {stat.value}
              </h3>

              <p className="mt-2 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom Achievement Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200">
          <div className="grid lg:grid-cols-3 gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-3xl font-bold text-indigo-600">95%</h3>

              <p className="mt-2 text-slate-600">AI Resume Quality Score</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-600">100%</h3>

              <p className="mt-2 text-slate-600">ATS Friendly Templates</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">10x Faster</h3>

              <p className="mt-2 text-slate-600">Resume Creation Process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
