import React from 'react';
import { useScrollReveal } from '../hooks/use-scroll-reveal';
import { FileCode, Database, Globe2 } from 'lucide-react';

const cards = [
  {
    Icon: FileCode,
    title: "Token Factory",
    desc: "Optimize your LLM interactions with our cutting-edge tokenization strategies. Reduce costs and latency while increasing throughput for your AI applications.",
  },
  {
    Icon: Database,
    title: "External Memory Layer",
    desc: "Empower your models with long-term memory. Our secure, scalable API connects your AI to vast enterprise knowledge bases, enabling context-aware and accurate responses.",
  },
  {
    Icon: Globe2,
    title: "Indian Context Models",
    desc: "Go beyond generic models. We develop and fine-tune AI that deeply understands Indian languages, cultures, and business nuances, giving you a competitive edge.",
  },
];

const CoreOfferingsSection: React.FC = () => {
  const headerRef = useScrollReveal();
  const card1Ref = useScrollReveal(80);
  const card2Ref = useScrollReveal(180);
  const card3Ref = useScrollReveal(280);
  const refs = [card1Ref, card2Ref, card3Ref];

  return (
    <section className="py-24 md:py-32 relative z-10">
      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)" }} />

      <div className="container mx-auto px-6">
        <div ref={headerRef} className="max-w-3xl mb-20">
          <p className="section-label mb-4">01 / Core Offerings</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The foundational layer<br />
            <span className="text-gray-500">for enterprise AI.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We provide the foundational blocks for enterprises to build and deploy powerful,
            contextually-aware AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ Icon, title, desc }, i) => (
            <div key={title} ref={refs[i]} className="card-glow-border group transition-all duration-300">
              <div className="card-glow-border-inner p-8 flex flex-col transition-all duration-300
                group-hover:bg-zinc-900/80">
                {/* Icon badge */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-7 relative overflow-hidden"
                  style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "radial-gradient(circle at center, rgba(249,115,22,0.3), transparent)" }} />
                  <Icon className="text-orange-400 w-5 h-5 relative z-10" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{desc}</p>

                {/* Bottom accent line */}
                <div className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500
                  bg-gradient-to-r from-orange-500/60 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingsSection;
