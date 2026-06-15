import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Aman Khare",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "ResumeGen AI helped me create a professional ATS-friendly resume within minutes. The AI-generated summary was impressive and saved me hours of work.",
  },
  {
    name: "Jessica Parker",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The templates are modern, clean, and recruiter-friendly. I received interview calls within a week after updating my resume using this platform.",
  },
  {
    name: "Michael Johnson",
    role: "Data Analyst",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The ATS optimization feature is a game changer. The platform suggested improvements that significantly increased my resume score.",
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
              Success Stories
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
              What Our Users Say
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Thousands of professionals trust ResumeGen AI to create
              high-quality resumes and accelerate their careers.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote */}
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <FaQuoteLeft />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mt-5 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review */}
                <p className="mt-5 text-slate-600 leading-7">"{item.review}"</p>

                {/* User */}
                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-20">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-indigo-600">10K+</h3>
              <p className="text-slate-600 mt-2">Happy Users</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600">25K+</h3>
              <p className="text-slate-600 mt-2">Resumes Created</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">4.9/5</h3>
              <p className="text-slate-600 mt-2">User Rating</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">98%</h3>
              <p className="text-slate-600 mt-2">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
