import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

import AIPromptForm from "../../components/ai/AIPromptForm";
import AIResponseCard from "../../components/ai/AIResponseCard";
import AIGeneratorActions from "../../components/ai/AIGeneratorActions";

const AIResumeGenerator = () => {
  const [generatedContent, setGeneratedContent] = useState("");

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 overflow-x-hidden">
        <DashboardHeader
          title="AI Resume Generator"
          subtitle="Generate professional content using AI"
        />

        <div className="p-4 md:p-8 space-y-6">
          <AIPromptForm onGenerated={setGeneratedContent} />

          <AIResponseCard content={generatedContent} />

          <AIGeneratorActions content={generatedContent} />
        </div>
      </div>
    </div>
  );
};

export default AIResumeGenerator;
