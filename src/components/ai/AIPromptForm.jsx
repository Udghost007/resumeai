import { useState } from "react";
import aiService from "../../services/aiService";

const AIPromptForm = ({ onGenerated }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    experience: "",
    skills: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleGenerate = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await aiService.generate({
        type: "summary",
        prompt: `Generate resume content for a ${formData.jobTitle} with ${formData.experience} years of experience. Skills: ${formData.skills}`,
      });
      onGenerated(response.content || "");
    } catch (generateError) {
      setError(generateError.response?.data?.message || "AI generation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-bold mb-5">Generate Resume Content</h2>
      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <div className="space-y-4">
        <input
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <input
          name="experience"
          placeholder="Years of Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          name="skills"
          rows="5"
          placeholder="Enter Skills (React, Next.js, TypeScript...)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <button
          type="button"
          onClick={handleGenerate}
          disabled={loading}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
        >
          {loading ? "Generating..." : "Generate With AI"}
        </button>
      </div>
    </div>
  );
};

export default AIPromptForm;
