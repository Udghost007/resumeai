const AIResponseCard = ({ content }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-bold mb-4">AI Generated Content</h2>

      <textarea
        rows="10"
        className="w-full border rounded-xl p-4"
        value={content || "Generated professional summary will appear here..."}
        readOnly
      />
    </div>
  );
};

export default AIResponseCard;
