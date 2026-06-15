import { useState } from "react";
import { useField } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const NormalInputField = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div>
      {label && <label className="block mb-1 font-medium">{label}</label>}

      <div className="relative">
        <input
          {...field}
          {...props}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className={`w-full border p-3 rounded-xl ${
            isPassword ? "pr-12" : ""
          } ${
            meta.touched && meta.error ? "border-red-500" : "border-gray-300"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>

      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm mt-1">{meta.error}</p>
      )}
    </div>
  );
};

export default NormalInputField;
