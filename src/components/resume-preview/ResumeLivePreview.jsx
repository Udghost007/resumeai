import {
  FaAward,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const ResumeLivePreview = ({ data = {}, template = "modern" }) => {
  // Extract personal info robustly
  const personalInfo = Array.isArray(data?.personalInfo)
    ? data.personalInfo[0]
    : data?.personalInfo || {};

  const summary = data?.summary || "";
  const education = data?.education || [];
  const experience = data?.experience || [];
  const projects = data?.projects || [];
  const skills = data?.skills || [];
  const certifications = data?.certifications || [];

  // Common contact info renderer
  const renderContactItem = (icon, text) => {
    if (!text) return null;
    return (
      <span className="flex items-center gap-1.5 text-xs text-slate-600">
        {icon}
        <span>{text}</span>
      </span>
    );
  };

  const renderSocialLink = (icon, text, url) => {
    if (!url) return null;
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs text-indigo-600 hover:underline"
      >
        {icon}
        <span>{text || "Link"}</span>
      </a>
    );
  };

  // --- MODERN TEMPLATE ---
  const renderModern = () => (
    <div className="font-sans text-slate-800 p-8 min-h-[842px]">
      {/* Header */}
      <div className="border-b pb-6 border-slate-200">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <p className="text-lg font-medium text-indigo-600 mt-1">
          {personalInfo.title || "Your Professional Title"}
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          {renderContactItem(<FaEnvelope />, personalInfo.email)}
          {renderContactItem(<FaPhone />, personalInfo.phone)}
          {renderContactItem(<FaMapMarkerAlt />, personalInfo.address)}
          {renderSocialLink(<FaLinkedin />, "LinkedIn", personalInfo.linkedin)}
          {renderSocialLink(<FaGithub />, "GitHub", personalInfo.github)}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-slate-900 border-b pb-1 border-slate-100 uppercase tracking-wider text-xs">
            Professional Summary
          </h2>
          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed whitespace-pre-line">
            {summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-slate-900 border-b pb-1 border-slate-100 uppercase tracking-wider text-xs">
            Work Experience
          </h2>
          <div className="mt-3 space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-slate-800 text-sm">
                    {exp.position || "Position Title"}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {exp.startDate || "Start Date"} – {exp.endDate || "Present"}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-0.5">
                  <span className="font-medium text-indigo-600">
                    {exp.company || "Company Name"}
                  </span>
                  <span>{exp.location}</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 whitespace-pre-line leading-relaxed">
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
          <h2 className="text-lg font-bold text-slate-900 border-b pb-1 border-slate-100 uppercase tracking-wider text-xs">
            Education
          </h2>
          <div className="mt-3 space-y-3">
            {education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">
                    {edu.degree || "Degree/Diploma"}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {edu.college || edu.university || "Institution Name"}
                    {edu.university && edu.college ? `, ${edu.university}` : ""}
                  </p>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {edu.passingYear || "Graduation Year"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-slate-900 border-b pb-1 border-slate-100 uppercase tracking-wider text-xs">
            Projects
          </h2>
          <div className="mt-3 space-y-3">
            {projects.map((proj, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-slate-800 text-sm">
                    {proj.projectName || "Project Name"}
                  </h3>
                  {proj.technologies && (
                    <span className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {proj.technologies}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 mt-1 whitespace-pre-line leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-slate-900 border-b pb-1 border-slate-100 uppercase tracking-wider text-xs">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 rounded-full text-xs font-medium"
              >
                {typeof skill === "object" ? skill.name : skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-slate-900 border-b pb-1 border-slate-100 uppercase tracking-wider text-xs">
            Certifications
          </h2>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex gap-2 items-start">
                <FaAward className="text-indigo-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800 text-xs">
                    {cert.name || "Certification Name"}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {cert.issuedBy}{" "}
                    {cert.issueDate ? `(${cert.issueDate})` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // --- PROFESSIONAL TEMPLATE ---
  const renderProfessional = () => (
    <div className="font-serif text-slate-900 p-10 min-h-[842px]">
      {/* Header */}
      <div className="text-center pb-4 border-b-2 border-slate-800">
        <h1 className="text-3xl font-bold uppercase tracking-wider">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <p className="text-sm font-semibold text-slate-700 italic mt-1 uppercase tracking-widest">
          {personalInfo.title || "Your Professional Title"}
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1.5 mt-3 text-xs text-slate-600">
          {personalInfo.address && <span>{personalInfo.address}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold"
            >
              LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
            Professional Profile
          </h2>
          <p className="text-xs text-slate-700 mt-2 leading-relaxed whitespace-pre-line text-justify">
            {summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
            Professional Experience
          </h2>
          <div className="mt-2.5 space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline font-bold text-xs">
                  <span>
                    {exp.position || "Position"} —{" "}
                    <span className="italic font-medium text-slate-700">
                      {exp.company || "Company"}
                    </span>
                  </span>
                  <span className="font-normal text-slate-600">
                    {exp.startDate} – {exp.endDate || "Present"}
                  </span>
                </div>
                {exp.location && (
                  <p className="text-[10px] text-slate-500 font-semibold italic">
                    {exp.location}
                  </p>
                )}
                <p className="text-xs text-slate-700 mt-1.5 whitespace-pre-line leading-relaxed text-justify">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
            Education
          </h2>
          <div className="mt-2.5 space-y-3">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="flex justify-between items-start text-xs"
              >
                <div>
                  <span className="font-bold">{edu.degree || "Degree"}</span>
                  <p className="text-slate-600 mt-0.5">
                    {edu.college || edu.university || "Institution"}
                    {edu.university && edu.college ? `, ${edu.university}` : ""}
                  </p>
                </div>
                <span className="font-bold text-slate-600">
                  {edu.passingYear}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
            Key Projects
          </h2>
          <div className="mt-2.5 space-y-3">
            {projects.map((proj, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline font-bold text-xs">
                  <span>{proj.projectName || "Project"}</span>
                  {proj.technologies && (
                    <span className="text-[10px] font-normal italic text-slate-600">
                      ({proj.technologies})
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 mt-1 whitespace-pre-line leading-relaxed text-justify">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
            Core Competencies
          </h2>
          <p className="text-xs text-slate-700 mt-2.5 leading-relaxed">
            {skills
              .map((skill) => (typeof skill === "object" ? skill.name : skill))
              .join("  •  ")}
          </p>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
            Certifications
          </h2>
          <ul className="list-disc pl-5 mt-2 text-xs text-slate-700 space-y-1">
            {certifications.map((cert, idx) => (
              <li key={idx}>
                <span className="font-bold">{cert.name}</span> — {cert.issuedBy}{" "}
                {cert.issueDate ? `(${cert.issueDate})` : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  // --- CREATIVE TEMPLATE ---
  const renderCreative = () => (
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

  // Selector
  switch (template) {
    case "professional":
      return renderProfessional();
    case "creative":
      return renderCreative();
    case "modern":
    default:
      return renderModern();
  }
};

export default ResumeLivePreview;
