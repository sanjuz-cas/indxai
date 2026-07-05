import React from 'react';
import { useScrollReveal } from '../hooks/use-scroll-reveal';
import { Lightbulb, Palette, Award } from 'lucide-react';

const values = [
  {
    Icon: Lightbulb,
    title: "Innovation",
    desc: "Pushing the boundaries of what's possible in AI infrastructure through rigorous research and breakthrough engineering.",
  },
  {
    Icon: Palette,
    title: "Creativity",
    desc: "Approaching deep technical problems with a designer's mindset. We believe elegant code and intuitive systems are paramount.",
  },
  {
    Icon: Award,
    title: "Excellence",
    desc: "Delivering enterprise-grade reliability, security, and performance. Every element earns its place; nothing is decorative.",
  },
];

const AboutPage: React.FC = () => {
  const heroRef = useScrollReveal();
  const missionRef = useScrollReveal(100);
  const valuesRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative z-10 border-t border-white/5 bg-black">
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Hero */}
        <div ref={heroRef} className="text-center max-w-3xl mx-auto mb-24">
          <p className="section-label justify-center mb-6">03 / About</p>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight"
            style={{
              background: "linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            About Indxai
          </h2>
          <p className="text-base text-gray-500 font-mono tracking-[0.2em] uppercase">
            Where Innovation Meets Design
          </p>
        </div>

        {/* Mission */}
        <div ref={missionRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <p className="section-label mb-5">Mission</p>
            <h3 className="text-3xl font-bold text-orange-400 mb-8 tracking-tight">Our Mission</h3>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                At Indxai, we are committed to delivering innovative solutions that transform ideas into
                reality. Our creative agency specializes in cutting-edge technology and design, ensuring
                your brand stands out in the digital landscape.
              </p>
              <p>
                From concept to execution, we work tirelessly to ensure your success and growth,
                leveraging the latest in AI, tokenization, and factory automation to drive results.
              </p>
            </div>
          </div>

          {/* CSS geometric art */}
          <div className="relative aspect-square max-w-sm mx-auto w-full animate-float">
            <div className="w-full h-full rounded-3xl relative overflow-hidden"
              style={{ border: "1px solid rgba(249,115,22,0.2)", background: "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(9,9,11,0.9) 100%)" }}>
              {/* inner glow */}
              <div className="absolute top-0 left-0 w-full h-full"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(249,115,22,0.25) 0%, transparent 60%)" }} />
              {/* concentric squares */}
              <div className="absolute inset-8 rounded-2xl"
                style={{ border: "1px solid rgba(249,115,22,0.2)" }} />
              <div className="absolute inset-16 rounded-xl"
                style={{ border: "1px solid rgba(249,115,22,0.3)" }} />
              {/* center orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full animate-glow-pulse"
                style={{ background: "radial-gradient(circle, rgba(249,115,22,0.6) 0%, rgba(249,115,22,0.2) 50%, transparent 100%)" }} />
              {/* corner dots */}
              <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-orange-500/60" />
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-orange-500/60" />
              <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-orange-500/60" />
              <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-orange-500/60" />
              {/* horizontal scan line */}
              <div className="absolute left-0 right-0 h-px opacity-40"
                style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.8), transparent)", animation: "scan-line 4s ease-in-out infinite" }} />
            </div>
          </div>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="mb-32">
          <div className="text-center mb-16">
            <p className="section-label justify-center mb-4">Values</p>
            <h3 className="text-3xl font-bold text-white tracking-tight">Our Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="card-glow-border group transition-all duration-300">
                <div className="card-glow-border-inner p-8 transition-all duration-300 group-hover:bg-zinc-900/80">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>
                    <Icon className="text-orange-400 w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 tracking-tight">{title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center">
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Ready to Transform Your Vision?</h3>
          <p className="text-gray-500 mb-8">Let's collaborate to bring your ideas to life with innovative solutions.</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-orange inline-flex items-center gap-2 py-3.5 px-8 text-sm font-semibold"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
