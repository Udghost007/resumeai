import {
  FaAward,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const ModernTemplate = ({
  personalInfo = {},
  summary = "",
  education = [],
  experience = [],
  projects = [],
  skills = [],
  certifications = [],
  renderContactItem,
  renderSocialLink,
}) => {
  return (
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
};

export default ModernTemplate;
