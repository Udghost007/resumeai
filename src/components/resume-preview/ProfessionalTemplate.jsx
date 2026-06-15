const ProfessionalTemplate = ({
  personalInfo = {},
  summary = "",
  education = [],
  experience = [],
  projects = [],
  skills = [],
  certifications = [],
}) => {
  return (
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
};

export default ProfessionalTemplate;
