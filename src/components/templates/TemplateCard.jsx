const TemplateCard = ({ id, title, description, selected, onSelect }) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-sm border transition ${
        selected
          ? "border-indigo-600 bg-indigo-50"
          : "border-transparent bg-white"
      }`}
    >
      <div className="h-64 bg-slate-100 flex items-center justify-center">
        {title} Preview
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="text-slate-500 mt-2">{description}</p>

        <button
          type="button"
          onClick={() => onSelect(id)}
          className={`w-full mt-4 py-3 rounded-xl font-medium ${
            selected
              ? "bg-slate-700 text-white"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          {selected ? "Selected" : "Use Template"}
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
