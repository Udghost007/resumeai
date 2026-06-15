const TemplatePreview = ({ selectedTemplate }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Live Preview</h2>

      <div className="border rounded-xl min-h-[500px] p-6">
        {selectedTemplate ? (
          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="text-sm text-slate-500">Selected template</p>
              <h3 className="text-3xl font-bold mt-2">
                {selectedTemplate.title}
              </h3>
              <p className="text-slate-600 mt-3">
                {selectedTemplate.description}
              </p>
            </div>
            <div className="mt-8 rounded-xl border bg-slate-50 p-6">
              <p className="text-slate-500">
                Preview area for the selected template.
              </p>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-slate-400">
            Choose a template to preview it here.
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatePreview;
