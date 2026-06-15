const ResumeSkills = () => {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "Node.js",
    "MongoDB",
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResumeSkills;
