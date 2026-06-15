import { useState } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    try {
      setLoading(true);
      const response = await authService.forgotPassword({ email });
      setMessage(response.message || "Password reset email sent");
    } catch (err) {
      setError(
        err.response?.data?.message || "Unable to send password reset email",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2">Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-xl p-3"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      {message && <p className="text-sm text-green-600">{message}</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-3 rounded-xl"
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>

      <div className="text-center">
        <Link to="/login" className="text-indigo-600">
          Back To Login
        </Link>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;