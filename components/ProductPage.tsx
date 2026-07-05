import React, { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/use-scroll-reveal';
import { Shield, Zap, Minimize2, Lock, BarChart3, ArrowRight } from 'lucide-react';

/* ── Animated counter ──────────────────────────────────── */
function Counter({
  end,
  prefix = "",
  suffix = "",
  duration = 1800,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTime: number;
          const update = (ts: number) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * end));
            if (progress < 1) requestAnimationFrame(update);
            else setCount(end);
          };
          requestAnimationFrame(update);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ── Architecture flow SVG arrow ──────────────────────── */
function FlowArrow() {
  return (
    <div className="hidden md:flex items-center w-20 shrink-0">
      <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="overflow-visible">
        <path
          d="M0 12 L68 12"
          stroke="rgba(249,115,22,0.5)"
          strokeWidth="1.5"
          className="flow-arrow-path"
        />
        <path d="M64 6 L74 12 L64 18" stroke="rgba(249,115,22,0.7)" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}

/* ── Spec card data ────────────────────────────────────── */
const specs = [
  {
    Icon: Shield,
    title: "Universal API Proxy",
    desc: "A single gateway that intercepts requests and normalizes them for any commercial provider: OpenAI, Anthropic, Gemini.",
    spec: "Standard OpenAI API schema for drop-in replacement",
  },
  {
    Icon: Zap,
    title: "Semantic & Exact Caching",
    desc: "Two-tier cache to catch identical or semantically identical queries and return instantly, bypassing external APIs entirely.",
    spec: "Tier 1: KV Store · Tier 2: Vector DB intent matching",
  },
  {
    Icon: Minimize2,
    title: "Token Compression Engine",
    desc: "Algorithmic reduction of prompt context before sending upstream. Strips redundancy while preserving semantic meaning.",
    spec: "Dynamic thresholding (compress prompts > 500 tokens)",
  },
  {
    Icon: Lock,
    title: "Enterprise Privacy Firewall",
    desc: "Automated detection and masking of PII — names, emails, internal keys — before payload leaves your VPC.",
    spec: "Regex + lightweight NER pipeline",
  },
  {
    Icon: BarChart3,
    title: "Observability Telemetry",
    desc: "Granular logging of input/output tokens, cost savings, and latency per request. Non-blocking, async telemetry.",
    spec: "Async logging · zero main-thread blocking",
  },
];

const techStack = [
  { name: "FastAPI", role: "Gateway", emoji: "⚡" },
  { name: "LiteLLM", role: "Routing", emoji: "🔀" },
  { name: "Redis", role: "Exact Cache", emoji: "💾" },
  { name: "Qdrant", role: "Vector DB", emoji: "🔍" },
  { name: "Langfuse", role: "Telemetry", emoji: "📊" },
  { name: "Docker", role: "Deployment", emoji: "🐳" },
];

const pipeline = ["1. Privacy Check", "2. Token Compress", "3. Cache Lookup", "4. Smart Route"];

/* ── Main component ────────────────────────────────────── */
const ProductPage: React.FC = () => {
  const heroRef = useScrollReveal();
  const specsRef = useScrollReveal();
  const flowRef = useScrollReveal();
  const techRef = useScrollReveal();
  const costRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <section
      id="products"
      className="relative py-24 md:py-32 z-10 border-t border-white/5 overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Background mesh */}
      <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(249,115,22,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── SIPHON Hero ───────────────────────────────── */}
        <div ref={heroRef} className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
          <p className="section-label justify-center mb-6">02 / Product</p>

          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10
            border border-green-500/20 bg-green-500/[0.06] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-xs font-mono tracking-widest uppercase">New Product</span>
          </div>

          {/* SIPHON heading */}
          <h2 className="font-black tracking-tighter mb-8 select-none"
            style={{ fontSize: "clamp(5rem, 14vw, 10rem)", lineHeight: 0.88 }}>
            <span className="text-white">SI</span>
            <span style={{
              background: "linear-gradient(135deg, #fb923c 0%, #f97316 50%, #c2410c 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>PHON</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-14 max-w-3xl">
            Enterprise AI Token Optimization Proxy Middleware. A frictionless layer between your
            applications and commercial LLM APIs that mathematically reduces token weight and strips
            sensitive data before it reaches external servers.
          </p>

          {/* Metric badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {[
              { value: "30%+", label: "Cost Reduction" },
              { value: "0",    label: "Quality Degradation" },
              { value: "<100ms", label: "Processing Latency" },
            ].map(({ value, label }) => (
              <div key={label} className="card-glow-border group transition-all duration-300">
                <div className="card-glow-border-inner py-6 px-4 flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-black text-orange-400 mb-1 tabular-nums">{value}</span>
                  <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Engineering Specifications ────────────────── */}
        <div className="mb-32">
          <div ref={specsRef} className="mb-12">
            <p className="section-label mb-4">Specifications</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Engineering Specifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {specs.map(({ Icon, title, desc, spec }, i) => (
              <div key={title}
                className={`card-glow-border group transition-all duration-300${i === 3 ? " md:col-span-2 xl:col-span-2" : ""}`}>
                <div className="card-glow-border-inner p-7 flex flex-col h-full group-hover:bg-zinc-900/70 transition-colors">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.15)" }}>
                    <Icon className="text-orange-400 w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 tracking-tight">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-5">{desc}</p>
                  <div className="code-pill text-[10px]">{spec}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Architecture Flow ─────────────────────────── */}
        <div ref={flowRef} className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="section-label justify-center mb-4">Architecture</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">How It Works</h3>
            <p className="text-gray-400">
              Siphon sits transparently between your client apps and any commercial LLM API.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-0 max-w-5xl mx-auto">
            {/* Client App */}
            <div className="card-glow-border shrink-0">
              <div className="card-glow-border-inner px-6 py-6 flex flex-col items-center justify-center min-w-[120px]">
                <span className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">Client</span>
                <span className="text-white font-bold text-sm">App</span>
              </div>
            </div>

            <FlowArrow />
            {/* Mobile arrow */}
            <div className="md:hidden flex justify-center py-2">
              <ArrowRight className="text-orange-500/50 rotate-90" size={18} />
            </div>

            {/* SIPHON CORE */}
            <div className="relative shrink-0 rounded-2xl p-[1px] animate-glow-pulse">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.6), rgba(249,115,22,0.1), rgba(249,115,22,0.4))" }}
              />
              <div className="relative rounded-[calc(1rem-1px)] px-8 py-7 flex flex-col items-center"
                style={{ background: "#0d0d0d", zIndex: 1 }}>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-sm font-black text-white tracking-widest uppercase font-mono">
                    Siphon Core
                  </span>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  {pipeline.map((step, i) => (
                    <div key={step}
                      className="px-4 py-2 rounded-lg text-center text-xs font-mono text-orange-300/80 transition-all"
                      style={{
                        background: "rgba(249,115,22,0.06)",
                        border: "1px solid rgba(249,115,22,0.15)",
                        animationDelay: `${i * 120}ms`,
                      }}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <FlowArrow />
            <div className="md:hidden flex justify-center py-2">
              <ArrowRight className="text-orange-500/50 rotate-90" size={18} />
            </div>

            {/* LLM API */}
            <div className="card-glow-border shrink-0">
              <div className="card-glow-border-inner px-6 py-6 flex flex-col items-center justify-center min-w-[120px]">
                <span className="text-white font-bold text-sm mb-2">LLM API</span>
                <span className="text-[10px] text-gray-600 font-mono text-center leading-relaxed">
                  OpenAI<br />Anthropic<br />Gemini
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tech Stack ────────────────────────────────── */}
        <div ref={techRef} className="mb-32">
          <div className="text-center mb-10">
            <p className="section-label justify-center mb-4">Tech Stack</p>
            <h3 className="text-2xl font-bold text-white tracking-tight">Built on Open-Source Standards</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map(({ name, role, emoji }) => (
              <div key={name}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-all duration-200
                  hover:border-orange-500/30 hover:bg-orange-500/5 cursor-default"
                style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="text-base">{emoji}</span>
                <span className="text-white text-sm font-semibold">{name}</span>
                <span className="text-gray-600 text-xs font-mono">{role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Cost Delta ────────────────────────────────── */}
        <div ref={costRef} className="mb-32">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-4">ROI</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">The Cost Delta</h3>
            <p className="text-gray-400">See the difference Siphon makes on 1 million tokens.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Without Siphon */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(239,68,68,0.2)", background: "#0a0a0a" }}>
              <div className="h-px w-full bg-red-500/70" />
              <div className="p-8 flex flex-col items-center text-center">
                <span className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-6">Without Siphon</span>
                <div className="text-6xl font-black text-white mb-1 tabular-nums">
                  <Counter end={60} prefix="$" />
                </div>
                <span className="text-gray-600 text-xs mb-8 font-mono">per 1M tokens</span>
                <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <div className="h-full w-full rounded-full bg-red-500/70" />
                </div>
                <span className="text-red-500/60 text-xs font-mono mt-2">100% baseline cost</span>
              </div>
            </div>

            {/* With Siphon */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(249,115,22,0.25)", background: "#0a0a0a" }}>
              <div className="h-px w-full" style={{ background: "linear-gradient(90deg, #f97316, #22c55e)" }} />
              <div className="p-8 flex flex-col items-center text-center">
                <span className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-6">With Siphon</span>
                <div className="text-6xl font-black text-white mb-1 tabular-nums">
                  <Counter end={38} prefix="$" />
                </div>
                <span className="text-gray-600 text-xs mb-8 font-mono">per 1M tokens</span>
                <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <div className="h-full rounded-full w-[63%]"
                    style={{ background: "linear-gradient(90deg, #f97316, #22c55e)" }} />
                </div>
                <span className="text-orange-500/60 text-xs font-mono mt-2">63% of baseline cost</span>
              </div>
            </div>
          </div>

          {/* Savings callout */}
          <div className="text-center max-w-xl mx-auto">
            <div className="text-[5rem] md:text-[7rem] font-black tabular-nums leading-none mb-2"
              style={{
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              <Counter end={37} suffix="%" />
            </div>
            <p className="text-xl font-bold text-white mb-3">You Save</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              With zero degradation in end-user response quality and sub-100ms processing latency.
            </p>
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────── */}
        <div ref={ctaRef}
          className="text-center max-w-3xl mx-auto rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{ border: "1px solid rgba(249,115,22,0.15)", background: "#080808" }}>
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)" }} />
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)" }} />

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight relative z-10">
            Ready to Optimize Your Token Spend?
          </h3>
          <p className="text-gray-400 mb-10 relative z-10">
            Deploy Siphon entirely within your VPC. Zero data leaves your infrastructure.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-orange relative z-10 inline-flex items-center gap-2 py-3.5 px-8 text-sm font-semibold"
          >
            Get Early Access <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProductPage;
