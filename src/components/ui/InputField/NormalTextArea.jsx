const NormalTextArea = ({
  label,
  name,
  value,
  rows = 5,
  placeholder,
  error,
  onChange,
  onBlur,
  className = "",
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium">
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full border p-3 rounded-xl resize-none
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default NormalTextArea;
