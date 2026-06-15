import { FaArrowRight, FaCheck, FaFilePdf } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useRedux";

const Hero = () => {
  const token = useAppSelector((state) => state.auth.token) || localStorage.getItem("token");

  return (
    <section className="bg-[#F8F9FF] min-h-[85vh] flex items-center">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
              ✨ AI-Powered Career Assistant
            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
              Build Your Perfect
              <br />
              <span className="text-indigo-600">Resume</span> with AI
            </h1>

            <p className="mt-6 text-xl text-slate-600 max-w-xl">
              Create professional, ATS-friendly resumes in minutes. Our AI
              technology helps you write better, faster and land your dream job.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to={token ? "/templates" : "/register"}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                Create Resume Now
                <FaArrowRight />
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/50?img=1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/50?img=2"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/50?img=3"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              <div>
                <div className="text-yellow-500">★★★★★</div>
                <p className="text-sm text-slate-600">
                  Trusted by 10,000+ job seekers
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative hidden lg:flex justify-center">
            {/* Resume Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 w-[500px] relative z-10">
              <h2 className="text-3xl font-bold">JESSICA PARKER</h2>
              <p className="text-slate-500 mt-1">SOFTWARE ENGINEER</p>

              <hr className="my-6" />

              <div>
                <h3 className="font-semibold mb-2">PROFESSIONAL SUMMARY</h3>

                <p className="text-sm text-slate-600 leading-6">
                  Motivated and detail-oriented Software Engineer with 5+ years
                  of experience in developing scalable web applications and
                  solving complex problems.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-3">EXPERIENCE</h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-semibold">
                        Senior Software Engineer
                      </h4>
                      <span className="text-sm">2021 - Present</span>
                    </div>

                    <ul className="text-sm text-slate-600 mt-2 list-disc ml-5">
                      <li>Developed scalable web applications.</li>
                      <li>Improved application performance by 30%.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-2">SKILLS</h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "React",
                    "Node.js",
                    "MongoDB",
                    "HTML",
                    "CSS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-100 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Score Card */}
            <div className="absolute top-16 -left-8 bg-white rounded-2xl shadow-lg p-6 w-36">
              <h4 className="font-semibold text-sm">AI Score</h4>

              <div className="mt-4 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-[6px] border-indigo-500 flex items-center justify-center">
                  <span className="font-bold text-xl">95%</span>
                </div>
              </div>

              <p className="text-center text-sm mt-3">Great Score!</p>
            </div>

            {/* ATS Card */}
            <div className="absolute bottom-20 -left-2 bg-white rounded-2xl shadow-lg p-6 w-36 text-center">
              <h4 className="font-semibold text-sm">ATS Friendly</h4>

              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mt-3">
                <FaCheck className="text-green-600" />
              </div>

              <h3 className="font-bold text-xl mt-2">100%</h3>

              <p className="text-sm text-slate-500">Optimization</p>
            </div>

            {/* Suggestions Card */}
            <div className="absolute top-40 -right-10 bg-white rounded-2xl shadow-lg p-6 w-52">
              <h4 className="font-semibold mb-4">AI Suggestions</h4>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  Strong Action Words
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  Quantified Achievements
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  Relevant Keywords
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  Clean Formatting
                </div>
              </div>
            </div>

            {/* Download Card */}
            <div className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-lg p-6 w-44">
              <h4 className="font-semibold mb-4">Download</h4>

              <div className="flex gap-3">
                <div className="bg-red-500 text-white rounded-lg p-4 flex-1 text-center">
                  <FaFilePdf className="mx-auto" />
                  <span className="text-xs">PDF</span>
                </div>

                <div className="bg-blue-500 text-white rounded-lg p-4 flex-1 text-center">
                  <FiFileText className="mx-auto" />
                  <span className="text-xs">DOCX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
