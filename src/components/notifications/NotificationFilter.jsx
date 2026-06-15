const filters = [
  { label: "All", value: "all" },
  { label: "Resume", value: "resume" },
  { label: "AI", value: "ai" },
  { label: "System", value: "system" },
];

const NotificationFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-wrap gap-4">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-lg transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default NotificationFilter;
