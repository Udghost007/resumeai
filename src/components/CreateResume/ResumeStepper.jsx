const ResumeStepper = ({ currentStep }) => {
  const steps = [
    "Personal",
    "Summary",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Certifications",
    "Review",
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
      <div className="flex flex-wrap gap-3">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`px-4 py-2 rounded-xl text-sm font-medium
              ${
                currentStep === index + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
          >
            {index + 1}. {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeStepper;
