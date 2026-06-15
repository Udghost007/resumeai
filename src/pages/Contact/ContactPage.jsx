import { useState } from "react";
import Navbar from "../Home/components/Navbar";
import Footer from "../Home/components/Footer";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-b from-indigo-50/50 to-transparent py-20 border-b border-slate-100">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              We'd Love To <span className="text-indigo-600">Hear From You</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have a suggestion, found a bug, or need help with a billing inquiry? Reach out and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Form Card */}
              <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Message Received!</h3>
                    <p className="mt-3 text-slate-500 max-w-md mx-auto">
                      Thank you for contacting us. Our support team has received your message and will review it shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-2 text-sm">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-2 text-sm">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-2 text-sm">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Inquiry Subject"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-2 text-sm">Message Content</label>
                      <textarea
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Explain your request in detail..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 rounded-xl transition shadow-md shadow-indigo-100 hover:shadow-lg focus:outline-none"
                    >
                      {status === "submitting" ? "Sending Message..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>

              {/* Side Info */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-8">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xs">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">Contact Channels</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                        <FaEnvelope size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Email Support</h4>
                        <p className="text-slate-600 text-sm mt-1">support@resumegenai.com</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                        <FaPhoneAlt size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Phone Hotline</h4>
                        <p className="text-slate-600 text-sm mt-1">+91 98765 43210</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Headquarters</h4>
                        <p className="text-slate-600 text-sm mt-1">Lucknow, Uttar Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 rounded-3xl border border-indigo-100 flex-1 flex flex-col justify-center">
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Join 10k+ Seekers</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Build resume drafts in templates validated by leading corporate hiring teams and landing interviews globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
