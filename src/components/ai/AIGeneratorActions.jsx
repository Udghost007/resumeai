import { useState } from "react";

const AIGeneratorActions = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const copyContent = async () => {
    if (!content) return;
    await navigator.clipboard.writeText(content);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={copyContent}
        disabled={!content}
        className="bg-green-600 text-white px-6 py-3 rounded-xl disabled:opacity-50"
      >
        {copied ? "Copied" : "Copy Content"}
      </button>

      <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
        Add To Resume
      </button>
    </div>
  );
};

export default AIGeneratorActions;
