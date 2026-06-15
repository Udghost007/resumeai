import { useState } from "react";
import Navbar from "../Home/components/Navbar";
import Footer from "../Home/components/Footer";
import CTA from "../Home/components/CTA";
import HowItWorks from "../Home/components/HowItWorks";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const HowItWorksPage = () => {
  const faqs = [
    {
      q: "How does the AI resume builder write my descriptions?",
      a: "Our AI processes your basic job details (like job title, company, and key keywords) and transforms them into professional, action-oriented bullet points based on industry standards and recruiter best practices."
    },
    {
      q: "What makes a resume ATS-friendly?",
      a: "An ATS-friendly resume uses a standard structure, standard fonts, clear headings, avoids complex graphics or tables, and contains key search terms that match the job description. Our templates are designed strictly to pass ATS filters."
    },
    {
      q: "Can I download my resume in other formats besides PDF?",
      a: "Currently, our platform supports direct high-quality PDF downloads to ensure formatting looks identical on all screens and recruiter systems. PDF format is standard and highly recommended."
    },
    {
      q: "Is my personal data safe with ResumeGen AI?",
      a: "Absolutely. We prioritize your privacy. All your data is securely stored, encrypted, and we never share your details or resume content with third-party advertising companies."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-b from-indigo-50/50 to-transparent py-20 border-b border-slate-100">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              Step-By-Step Guide
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Create a Job-Winning Resume <span className="text-indigo-600">in Minutes</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Find out how easy it is to input your data, generate tailored descriptions with AI assistance, customize design layouts, and export your PDF.
            </p>
          </div>
        </section>

        {/* Workflow steps */}
        <HowItWorks />

        {/* Detailed Breakdown section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Entering Your Background Info</h3>
                <p className="text-slate-600 leading-relaxed">
                  Start by typing in your basic career data. Our structured forms organize fields for personal information, summaries, employment records, academic degrees, project scopes, skills, and certifications into simple steps.
                </p>
              </div>
              <div className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100/50">
                <span className="text-xs font-bold text-indigo-600 tracking-wide uppercase">Form Wizard Tip</span>
                <p className="mt-3 text-slate-700 text-sm italic">
                  "Only list experiences relevant to the job family you are targeting. This helps the AI customize language specific to that industry's jargon."
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 bg-green-50/50 p-8 rounded-3xl border border-green-100/50">
                <span className="text-xs font-bold text-green-700 tracking-wide uppercase">AI Writing Tip</span>
                <p className="mt-3 text-slate-700 text-sm italic">
                  "Use active verbs like 'Initiated', 'Supervised', or 'Reorganized' when setting prompt values. The AI will build highly quantitative bullet points around them."
                </p>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">2. AI Copilot Generation</h3>
                <p className="text-slate-600 leading-relaxed">
                  No more writer's block. Hit the AI button in the stepper form, and our assistant reads your basic responsibilities to structure them into persuasive career statements. It will instantly correct grammar and improve style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-slate-600">Have questions about the builder? We've got answers.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="bg-white rounded-2xl border border-slate-150 overflow-hidden transition-all">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <FaChevronUp className="text-slate-400" /> : <FaChevronDown className="text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-slate-50 text-slate-600 leading-relaxed text-sm md:text-base">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
