import { useState } from "react";
import Navbar from "../Home/components/Navbar";
import Footer from "../Home/components/Footer";
import CTA from "../Home/components/CTA";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      name: "Starter Free",
      priceMonthly: 0,
      priceYearly: 0,
      desc: "Perfect for testing out the editor and preparing your first resume draft.",
      features: [
        "1 Active Resume Draft",
        "Access to Modern Template",
        "Standard PDF Downloads",
        "Basic Section Editors"
      ],
      buttonText: "Get Started Free",
      buttonLink: "/register",
      popular: false
    },
    {
      name: "Pro Professional",
      priceMonthly: 9.99,
      priceYearly: 7.99,
      desc: "Empower your job hunt with AI descriptions, all templates, and ATS reviews.",
      features: [
        "Unlimited Resume Drafts",
        "Access to All 3 Templates",
        "Unlimited AI Content Credits",
        "ATS Optimization & Scoring",
        "Pixel-Perfect PDF Exports",
        "24/7 Priority Support"
      ],
      buttonText: "Upgrade to Pro",
      buttonLink: "/register",
      popular: true
    },
    {
      name: "Corporate Team",
      priceMonthly: 29.99,
      priceYearly: 23.99,
      desc: "Great for teams, career coaches, and staffing recruiters.",
      features: [
        "Everything in Pro Plan",
        "Up to 5 Team Members",
        "Collaborative Real-time Editing",
        "Recruiter Brand Integration",
        "Shared Team Folders",
        "Dedicated Account Manager"
      ],
      buttonText: "Contact Sales",
      buttonLink: "/contact",
      popular: false
    }
  ];

  const pricingFaqs = [
    {
      q: "Can I cancel my subscription at any time?",
      a: "Yes! You can cancel your subscription at any time directly through your dashboard settings. You will continue to have access to Pro features until the end of your billing cycle."
    },
    {
      q: "Do you offer a money-back guarantee?",
      a: "We do. If you're not satisfied with ResumeGen AI Pro, contact us within 7 days of purchase for a full refund, no questions asked."
    },
    {
      q: "Are there any hidden contract terms or setup fees?",
      a: "Absolutely not. Our plans are simple and transparent. There are no contracts, commitments, or hidden setup fees. You pay as you go."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-indigo-50/50 to-transparent py-20 border-b border-slate-100">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              Transparent Pricing
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Simple Plans For <span className="text-indigo-600">Every Job Seeker</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              No hidden fees. Choose a plan that matches your career search criteria and start landing interviews.
            </p>

            {/* Toggle switch */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <span className={`font-semibold text-sm ${!isYearly ? "text-indigo-600" : "text-slate-500"}`}>
                Monthly Billing
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-8 bg-indigo-600 rounded-full p-1 flex items-center transition duration-300 relative focus:outline-none"
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ${
                    isYearly ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`font-semibold text-sm flex items-center gap-2 ${isYearly ? "text-indigo-600" : "text-slate-500"}`}>
                Yearly Billing
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => {
                const currentPrice = isYearly ? plan.priceYearly : plan.priceMonthly;
                return (
                  <div
                    key={index}
                    className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                      plan.popular
                        ? "border-indigo-600 shadow-xl ring-4 ring-indigo-50 lg:-translate-y-4"
                        : "border-slate-200 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                        Most Popular
                      </span>
                    )}

                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{plan.name}</h3>
                      <p className="mt-3 text-slate-500 text-sm leading-relaxed min-h-[40px]">{plan.desc}</p>

                      <div className="mt-6 flex items-baseline">
                        <span className="text-4xl md:text-5xl font-extrabold text-slate-900">${currentPrice}</span>
                        <span className="text-slate-500 ml-2 text-sm">/ month</span>
                      </div>
                      {isYearly && plan.priceYearly > 0 && (
                        <p className="text-emerald-600 text-xs font-bold mt-2">
                          Billed annually (${(plan.priceYearly * 12).toFixed(2)} / yr)
                        </p>
                      )}

                      <hr className="my-8 border-slate-100" />

                      <ul className="space-y-4">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <FaCheckCircle className="text-indigo-600 text-base flex-shrink-0" />
                            <span className="text-slate-600 text-sm md:text-base">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Link
                        to={plan.buttonLink}
                        className={`w-full py-3 rounded-2xl font-bold block text-center transition ${
                          plan.popular
                            ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-100"
                            : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {plan.buttonText}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Pricing & Billing FAQs</h2>
              <p className="mt-4 text-slate-600">Got questions about billing, changes, and refunds? We have answers.</p>
            </div>

            <div className="space-y-4">
              {pricingFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="bg-white rounded-2xl border border-slate-150 overflow-hidden transition-all">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <FaChevronUp className="text-slate-400" /> : <FaChevronDown className="text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-slate-50 text-slate-600 leading-relaxed text-sm">
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

export default PricingPage;
