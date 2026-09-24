import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'copied'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare mailto link with encoded parameters
    const recipient = personalInfo.email;
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from Portfolio - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Tanushri,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Open default mail client
    window.location.href = mailtoUrl;
    setStatus('success');
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-[#0d1b3e] text-white">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b3e] tracking-tight uppercase">
              Get In Touch
            </h2>
            <div className="h-0.5 w-16 bg-[#0d1b3e] mt-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0d1b3e]">
                Let's Discuss Opportunities
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                I am actively seeking an entry-level Software Development or AI/ML role starting in 2027, as well as internship opportunities. Feel free to reach out directly via email, phone, or LinkedIn.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-3 hover:border-[#0d1b3e]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0d1b3e] shrink-0 shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-[#0d1b3e] transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  title="Copy email"
                  className="p-2 rounded-lg text-slate-500 hover:text-[#0d1b3e] hover:bg-white transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-3 hover:border-[#0d1b3e]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0d1b3e] shrink-0 shadow-2xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Phone
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-bold text-slate-900 hover:text-[#0d1b3e] transition-colors truncate block font-mono"
                    >
                      {personalInfo.displayPhone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  title="Copy phone"
                  className="p-2 rounded-lg text-slate-500 hover:text-[#0d1b3e] hover:bg-white transition-colors shrink-0"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-3 hover:border-[#0d1b3e]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0d1b3e] shrink-0 shadow-2xs">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      LinkedIn
                    </span>
                    <a
                      href={personalInfo.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 hover:text-[#0d1b3e] transition-colors truncate block"
                    >
                      {personalInfo.linkedinUsername}
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 hover:text-[#0d1b3e] shrink-0"
                >
                  Visit
                </a>
              </div>

              {/* GitHub Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-3 hover:border-[#0d1b3e]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shrink-0 shadow-2xs">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      GitHub
                    </span>
                    <a
                      href={personalInfo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 hover:text-[#0d1b3e] transition-colors truncate block"
                    >
                      {personalInfo.githubUsername}
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 hover:text-[#0d1b3e] shrink-0"
                >
                  View
                </a>
              </div>
            </div>

            {/* Quick Availability Badge */}
            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200 flex items-center gap-3 text-xs text-slate-700">
              <Clock className="w-4 h-4 text-sky-700 shrink-0" />
              <span>Available for technical discussions, interviews, and project collaborations.</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-200">
                <MessageSquare className="w-5 h-5 text-[#0d1b3e]" />
                <h3 className="text-lg font-bold text-[#0d1b3e]">
                  Send a Direct Message
                </h3>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Opening email client...</p>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Your message has been formatted. If your mail client didn't open automatically, you can directly email{' '}
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="underline font-semibold"
                      >
                        {personalInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1"
                    >
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Job Opportunity / Interview Invitation"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent transition-all"
                  />
                </div>

                {/* Message text area */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Hello Tanushri, I came across your portfolio and would like to connect regarding..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0d1b3e] text-white text-sm font-semibold hover:bg-[#182c61] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (via Mailto)</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
