import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/use-scroll-reveal';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';

const ContactPage: React.FC = () => {
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal(100);
  const infoRef = useScrollReveal(200);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = Object.fromEntries(
      [...formData.entries()].map(([k, v]) => [k, v.toString()])
    );
    data._cc = "sanjayrajendranm7@gmail.com";
    data._subject = `New contact from ${data.name} - Indxai Website`;

    try {
      const res = await fetch("https://formsubmit.co/ajax/contact@indxai.tech", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-black/60 border border-white/[0.08] focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30 " +
    "text-white placeholder:text-gray-700 rounded-lg px-4 py-3 outline-none transition-all text-sm font-mono";

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10 border-t border-white/5"
      style={{ background: "#050505" }}>
      <div className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Hero */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-label justify-center mb-6">04 / Contact</p>
          <h2 className="text-5xl font-black mb-5 tracking-tight"
            style={{
              background: "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Get in Touch
          </h2>
          <p className="text-gray-400">
            Let us discuss how we can help transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Form */}
          <div ref={formRef} className="card-glow-border">
            <div className="card-glow-border-inner p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono tracking-widest uppercase text-gray-500">
                      Name <span className="text-orange-500">*</span>
                    </label>
                    <input type="text" id="name" name="name" required
                      className={inputClass} placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono tracking-widest uppercase text-gray-500">
                      Email <span className="text-orange-500">*</span>
                    </label>
                    <input type="email" id="email" name="email" required
                      className={inputClass} placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-mono tracking-widest uppercase text-gray-500">
                    Company
                  </label>
                  <input type="text" id="company" name="company"
                    className={inputClass} placeholder="Acme Corp" />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono tracking-widest uppercase text-gray-500">
                    Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="How can we help you?" />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="btn-orange w-full py-3.5 flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting
                    ? <Loader2 className="w-4 h-4 animate-spin" />
                    : <><Send className="w-4 h-4" /> Send Message</>}
                </button>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg text-sm font-mono"
                    style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}>
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg text-sm font-mono"
                    style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }}>
                    ✗ Something went wrong. Please email us directly at contact@indxai.tech
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Info */}
          <div ref={infoRef} className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              {/* Email */}
              <div className="card-glow-border group transition-all duration-300">
                <div className="card-glow-border-inner flex items-start gap-4 p-5 group-hover:bg-zinc-900/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>
                    <Mail className="text-orange-400 w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-1">Email</h4>
                    <a href="mailto:contact@indxai.tech"
                      className="text-white hover:text-orange-400 transition-colors text-sm font-medium">
                      contact@indxai.tech
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="card-glow-border group transition-all duration-300">
                <div className="card-glow-border-inner flex items-start gap-4 p-5 group-hover:bg-zinc-900/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>
                    <MapPin className="text-orange-400 w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-1">Location</h4>
                    <p className="text-white text-sm font-medium">Cbe-641 035<br />Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="card-glow-border">
              <div className="card-glow-border-inner p-6">
                <h4 className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-5">Business Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-gray-400 text-sm">Monday – Friday</span>
                    <span className="text-white text-sm font-mono">9:00 AM – 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Saturday – Sunday</span>
                    <span className="text-gray-600 text-sm font-mono">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
