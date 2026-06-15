import Navbar from "../Home/components/Navbar";
import Footer from "../Home/components/Footer";
import CTA from "../Home/components/CTA";
import { FaEye, FaRocket, FaHeart, FaUserFriends } from "react-icons/fa";

const AboutPage = () => {
  const values = [
    {
      icon: <FaRocket className="text-indigo-600" size={24} />,
      title: "Empowering Careers",
      desc: "Our primary metric is your career success. We provide modern utility tools that make high-quality resume builder guidance accessible to everyone."
    },
    {
      icon: <FaEye className="text-indigo-600" size={24} />,
      title: "Algorithmic Accuracy",
      desc: "We test our templates rigorously against various Applicant Tracking Systems (ATS) to ensure formatting stands out in any review process."
    },
    {
      icon: <FaHeart className="text-indigo-600" size={24} />,
      title: "User Centered Design",
      desc: "Job hunting is stressful. Our layout wizard simplifies writing resume drafts by minimizing data entry friction and styling configurations."
    },
    {
      icon: <FaUserFriends className="text-indigo-600" size={24} />,
      title: "Accessibility First",
      desc: "We maintain a robust free starter tier so that financial constraints never stand in the way of presenting your absolute best professional profile."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-b from-indigo-50/50 to-transparent py-20 border-b border-slate-100">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              About Our Mission
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Bridging the Gap Between <span className="text-indigo-600">Talent & Opportunity</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We design tools that help job seekers present their achievements clearly, pass recruiter scanners, and earn the interviews they deserve.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  ResumeGen AI was born out of a simple observation: job seeking has changed, but the methods for creating resumes haven't. Recruiter screeners use complex algorithms that reject good candidates simply because of table layouts or font choices.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We built a platform that combines clean, ATS-optimized templates with powerful generative AI to help you draft statements, organize experience, and prepare beautiful resumes. Today, thousands of developers, designers, educators, and executives use our platform to level up their career applications.
                </p>
              </div>
              <div className="md:col-span-5 bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between min-h-[280px]">
                <h4 className="text-lg font-bold opacity-90 uppercase tracking-wider">The Goal</h4>
                <p className="text-xl md:text-2xl font-semibold leading-relaxed my-4">
                  "Build the world's most intuitive resume platform, enabling anyone to write a top-tier resume in 10 minutes."
                </p>
                <div className="border-t border-white/20 pt-4 text-sm opacity-80">
                  ResumeGen AI Leadership
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Operating Values</h2>
              <p className="mt-4 text-slate-600">The core ideas that guide how we construct our templates and support our users.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((val, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{val.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
