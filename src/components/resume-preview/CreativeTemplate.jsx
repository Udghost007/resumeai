import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const CreativeTemplate = ({
  personalInfo = {},
  summary = "",
  education = [],
  experience = [],
  projects = [],
  skills = [],
  certifications = [],
}) => {
  return (
    <div className="font-sans text-slate-800 min-h-[842px] flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-1/3 bg-slate-900 text-white p-8 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="pb-6 border-b border-slate-700">
            <h1 className="text-2xl font-black tracking-tight text-white leading-tight">
              {personalInfo.fullName || "Your Name"}
            </h1>
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mt-2">
              {personalInfo.title || "Your Title"}
            </p>
          </div>

          {/* Contact Details */}
          <div className="mt-8">
            <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-4">
              Contact Info
            </h2>
            <div className="space-y-3.5 text-xs text-slate-300">
              {personalInfo.email && (
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-emerald-400" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-2">
                  <FaPhone className="text-emerald-400" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.address && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-emerald-400" />
                  <span>{personalInfo.address}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-emerald-400" />
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              )}
              {personalInfo.github && (
                <div className="flex items-center gap-2">
                  <FaGithub className="text-emerald-400" />
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-4">
                Core Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-800 text-slate-200 border border-slate-700 px-2.5 py-1 rounded-md text-[11px] font-medium"
                  >
                    {typeof skill === "object" ? skill.name : skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="text-[10px] text-slate-500 mt-8">
          Powered by ResumeGen
        </div>
      </div>

      {/* Main Panel */}
      <div className="md:w-2/3 bg-white p-8">
        {/* Summary */}
        {summary && (
          <div>
            <h2 className="text-sm font-black uppercase text-slate-900 border-b-2 border-emerald-400 pb-1.5 tracking-wider">
              Profile Summary
            </h2>
            <p className="text-xs text-slate-600 mt-3.5 leading-relaxed whitespace-pre-line text-justify">
              {summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-black uppercase text-slate-900 border-b-2 border-emerald-400 pb-1.5 tracking-wider">
              Professional Experience
            </h2>
            <div className="mt-3 space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs">
                    <span>
                      {exp.position} at{" "}
                      <span className="text-indigo-600">{exp.company}</span>
                    </span>
                    <span className="text-[10px] font-medium text-slate-500">
                      {exp.startDate} – {exp.endDate || "Present"}
                    </span>
                  </div>
                  {exp.location && (
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      {exp.location}
                    </span>
                  )}
                  <p className="text-xs text-slate-600 mt-2 whitespace-pre-line leading-relaxed text-justify">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-black uppercase text-slate-900 border-b-2 border-emerald-400 pb-1.5 tracking-wider">
              Education
            </h2>
            <div className="mt-3 space-y-3">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start text-xs"
                >
                  <div>
                    <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                    <p className="text-slate-500 mt-0.5">
                      {edu.college || edu.university}
                      {edu.university && edu.college
                        ? `, ${edu.university}`
                        : ""}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    {edu.passingYear}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-black uppercase text-slate-900 border-b-2 border-emerald-400 pb-1.5 tracking-wider">
              Key Projects
            </h2>
            <div className="mt-3 space-y-3.5">
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900 text-xs">
                      {proj.projectName}
                    </h3>
                    {proj.technologies && (
                      <span className="text-[10px] font-semibold text-indigo-600">
                        {proj.technologies}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 whitespace-pre-line leading-relaxed text-justify">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-black uppercase text-slate-900 border-b-2 border-emerald-400 pb-1.5 tracking-wider">
              Certifications
            </h2>
            <ul className="list-disc pl-5 mt-3 text-xs text-slate-600 space-y-1">
              {certifications.map((cert, idx) => (
                <li key={idx}>
                  <span className="font-bold text-slate-800">{cert.name}</span>{" "}
                  — {cert.issuedBy}{" "}
                  {cert.issueDate ? `(${cert.issueDate})` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreativeTemplate;
