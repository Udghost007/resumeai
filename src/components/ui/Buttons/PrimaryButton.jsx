const PrimaryButton = ({
  type = "button",
  text = "Submit",
  loader = false,
  disabled = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loader || disabled}
      className={`px-5 py-3 rounded-xl bg-blue-600 text-white transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
    >
      {loader ? "Loading..." : text}
    </button>
  );
};

export default PrimaryButton;
