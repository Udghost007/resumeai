const TemplateActions = ({ selectedTemplate, onSave, onDownload }) => {
  return (
    <div className="flex flex-col gap-4 mt-6 sm:flex-row">
      <button
        type="button"
        disabled={!selectedTemplate}
        onClick={onSave}
        className={`px-6 py-3 rounded-xl text-white transition ${
          selectedTemplate
            ? "bg-indigo-600 hover:bg-indigo-700"
            : "bg-slate-300 cursor-not-allowed"
        }`}
      >
        Save Template
      </button>

      <button
        type="button"
        disabled={!selectedTemplate}
        onClick={onDownload}
        className={`px-6 py-3 rounded-xl text-white transition ${
          selectedTemplate
            ? "bg-green-600 hover:bg-green-700"
            : "bg-slate-300 cursor-not-allowed"
        }`}
      >
        Download PDF
      </button>
    </div>
  );
};

export default TemplateActions;
