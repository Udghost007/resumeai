import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import authService from "../../services/authService";

const ResetPasswordForm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("Both password fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const response = await authService.resetPassword({ token, password });

      if (response.token) {
        localStorage.setItem("token", response.token);
      }

      navigate("/resumes");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2 font-medium">New Password</label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter new password"
          className="w-full border rounded-xl p-3 outline-none focus:border-indigo-500"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Confirm Password</label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm new password"
          className="w-full border rounded-xl p-3 outline-none focus:border-indigo-500"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="showPassword"
          onChange={() => setShowPassword(!showPassword)}
        />

        <label htmlFor="showPassword" className="text-sm text-slate-600">
          Show Password
        </label>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition"
      >
        {loading ? "Resetting..." : "Reset Password"}
      </button>

      <div className="text-center">
        <Link to="/login" className="text-indigo-600 font-medium">
          Back To Login
        </Link>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
