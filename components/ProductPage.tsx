import React, { useState, useEffect, useRef } from 'react';

/* ─── animated counter hook ─── */
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

/* ─── Feature data from PRD §2 ─── */
const features = [
  {
    title: 'Universal API Proxy',
    description: 'A single gateway that intercepts requests and normalizes them for any commercial provider — OpenAI, Anthropic, Gemini.',
    spec: 'Standard OpenAI API schema for drop-in replacement',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Semantic & Exact Caching',
    description: 'Two-tier cache to catch identical or semantically identical queries and return them instantly, bypassing external APIs entirely.',
    spec: 'Tier 1: KV Store · Tier 2: Vector DB intent matching',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'Token Compression Engine',
    description: 'Algorithmic reduction of prompt context before sending upstream. Strips redundancy while preserving semantic meaning.',
    spec: 'Dynamic thresholding (compress prompts > 500 tokens)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Privacy Firewall',
    description: 'Automated detection and masking of PII — names, emails, internal keys — before payload leaves your VPC.',
    spec: 'Regex + lightweight NER pipeline',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Observability Telemetry',
    description: 'Granular logging of input/output tokens, cost savings, and latency per request. Non-blocking, async telemetry.',
    spec: 'Async logging · zero main-thread blocking',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

/* ─── Tech stack data from PRD §3 ─── */
const techStack = [
  { name: 'FastAPI', desc: 'Gateway', icon: '⚡' },
  { name: 'LiteLLM', desc: 'Routing', icon: '🔀' },
  { name: 'Redis', desc: 'Exact Cache', icon: '🗄️' },
  { name: 'Qdrant', desc: 'Vector DB', icon: '🧠' },
  { name: 'Langfuse', desc: 'Telemetry', icon: '📊' },
  { name: 'Docker', desc: 'Deployment', icon: '🐳' },
];

/* ─── Main component ─── */
const ProductPage: React.FC = () => {
  const rawCost = useCountUp(60, 2200);
  const optimizedCost = useCountUp(38, 2200);
  const savings = useCountUp(37, 2500);

  const [flowVisible, setFlowVisible] = useState(false);
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFlowVisible(true); },
      { threshold: 0.2 }
    );
    if (flowRef.current) observer.observe(flowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white">

      {/* ──────── PRODUCT HERO ──────── */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-orange-500/15 via-orange-900/5 to-transparent blur-3xl product-hero-glow" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-300 text-xs font-semibold tracking-widest uppercase">New Product</span>
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">ANTI</span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">GRAVITY</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Enterprise AI Token Optimization Proxy Middleware. A frictionless layer between your applications and commercial LLM APIs that mathematically reduces token weight and strips sensitive data before it reaches external servers.
          </p>

          {/* Metric badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { value: '30%+', label: 'Cost Reduction' },
              { value: '0', label: 'Quality Degradation' },
              { value: '<100ms', label: 'Processing Latency' },
            ].map((m, i) => (
              <div key={i} className="px-5 py-3 bg-zinc-900/80 border border-gray-800 rounded-xl backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-black text-orange-400">{m.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── ARCHITECTURE FLOW DIAGRAM ──────── */}
      <section className="py-20 md:py-28" ref={flowRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Siphon sits transparently between your client apps and any commercial LLM API.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="max-w-5xl mx-auto">
            {/* Desktop flow (horizontal) */}
            <div className="hidden md:flex items-center justify-center gap-0">
              {/* Client */}
              <div className={`flex-shrink-0 transition-all duration-700 ${flowVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="w-36 h-36 rounded-2xl bg-zinc-900 border border-gray-700 flex flex-col items-center justify-center gap-2 relative group hover:border-gray-500 transition-colors">
                  <svg className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-300">Client App</span>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className={`w-16 flex items-center justify-center transition-all duration-700 delay-200 ${flowVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-full h-px bg-gradient-to-r from-gray-600 to-orange-500">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-orange-500" />
                  <div className="flow-particle absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-400" />
                </div>
              </div>

              {/* Siphon Core */}
              <div className={`flex-shrink-0 transition-all duration-700 delay-300 ${flowVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="w-72 rounded-2xl border border-orange-500/40 bg-gradient-to-b from-orange-500/10 to-zinc-900 p-5 relative overflow-hidden group hover:border-orange-500/70 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="text-center mb-4">
                      <span className="text-orange-400 font-black text-lg tracking-wide">SIPHON</span>
                    </div>
                    <div className="space-y-2">
                      {['Privacy Firewall', 'Token Compression', 'Semantic Cache', 'LLM Router'].map((step, i) => (
                        <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 border border-gray-800 transition-all duration-500 ${flowVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${400 + i * 150}ms` }}>
                          <span className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[10px] text-orange-400 font-bold">{i + 1}</span>
                          <span className="text-xs font-medium text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className={`w-16 flex items-center justify-center transition-all duration-700 delay-700 ${flowVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-full h-px bg-gradient-to-r from-orange-500 to-gray-600">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-gray-600" />
                  <div className="flow-particle-delayed absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-400" />
                </div>
              </div>

              {/* Commercial API */}
              <div className={`flex-shrink-0 transition-all duration-700 delay-800 ${flowVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="w-36 h-36 rounded-2xl bg-zinc-900 border border-gray-700 flex flex-col items-center justify-center gap-2 group hover:border-gray-500 transition-colors">
                  <svg className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-300">LLM API</span>
                  <span className="text-[10px] text-gray-500">OpenAI · Anthropic · Gemini</span>
                </div>
              </div>
            </div>

            {/* Mobile flow (vertical) */}
            <div className="md:hidden flex flex-col items-center gap-4">
              <div className="w-full max-w-xs p-4 rounded-xl bg-zinc-900 border border-gray-700 text-center">
                <span className="text-sm font-semibold text-gray-300">Client App</span>
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-orange-500 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-orange-500" />
              </div>
              <div className="w-full max-w-xs rounded-xl border border-orange-500/40 bg-gradient-to-b from-orange-500/10 to-zinc-900 p-5">
                <div className="text-center mb-3">
                  <span className="text-orange-400 font-black tracking-wide">SIPHON</span>
                </div>
                <div className="space-y-2">
                  {['Privacy Firewall', 'Token Compression', 'Semantic Cache', 'LLM Router'].map((step, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 border border-gray-800">
                      <span className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[10px] text-orange-400 font-bold">{i + 1}</span>
                      <span className="text-xs font-medium text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-gray-600 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-gray-600" />
              </div>
              <div className="w-full max-w-xs p-4 rounded-xl bg-zinc-900 border border-gray-700 text-center">
                <span className="text-sm font-semibold text-gray-300">LLM API</span>
                <div className="text-[10px] text-gray-500 mt-1">OpenAI · Anthropic · Gemini</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── CORE FEATURES GRID ──────── */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Five integrated systems working in concert to slash your token costs while keeping your data secure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((f, i) => (
              <div
                key={i}
                className={`group bg-zinc-900 border border-gray-800 rounded-2xl p-7 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 relative overflow-hidden ${i === 4 ? 'lg:col-start-2' : ''}`}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-900/20 border border-orange-500/20 rounded-xl flex items-center justify-center mb-5 text-orange-400 group-hover:border-orange-500/40 transition-colors">
                    {f.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-50 transition-colors">
                    {f.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {f.description}
                  </p>

                  {/* Spec badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 border border-gray-800">
                    <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[11px] text-gray-500 font-medium">{f.spec}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── TECH STACK ──────── */}
      <section className="py-16 border-y border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-gray-400 uppercase tracking-widest">Built On</h3>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {techStack.map((t, i) => (
              <div key={i} className="group flex flex-col items-center gap-2 py-4 px-2 rounded-xl hover:bg-zinc-900 transition-colors cursor-default">
                <span className="text-2xl md:text-3xl">{t.icon}</span>
                <span className="text-sm font-semibold text-white">{t.name}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── COST DELTA VISUALIZATION ──────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">The Cost Delta</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See the difference Siphon makes on 1 million tokens.
            </p>
          </div>

          <div className="max-w-4xl mx-auto" ref={rawCost.ref}>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
              {/* Raw cost */}
              <div className="bg-zinc-900 border border-gray-800 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/60" />
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Without Siphon</span>
                <div className="mt-4 mb-2">
                  <span className="text-5xl md:text-6xl font-black text-gray-300">${rawCost.count}</span>
                </div>
                <span className="text-sm text-gray-500">per 1M tokens</span>
                <div className="mt-6">
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full cost-bar-raw" style={{ width: '100%' }} />
                  </div>
                  <span className="text-[10px] text-gray-600 mt-1 block">Full token payload</span>
                </div>
              </div>

              {/* Optimized cost */}
              <div className="bg-zinc-900 border border-orange-500/30 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-green-500" />
                <span className="text-xs text-orange-400 uppercase tracking-widest font-semibold">With Siphon</span>
                <div className="mt-4 mb-2">
                  <span className="text-5xl md:text-6xl font-black text-orange-400">${optimizedCost.count}</span>
                </div>
                <span className="text-sm text-gray-500">per 1M tokens</span>
                <div className="mt-6">
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-green-500 rounded-full cost-bar-optimized" style={{ width: '63%' }} />
                  </div>
                  <span className="text-[10px] text-gray-600 mt-1 block">Compressed + cached payload</span>
                </div>
              </div>
            </div>

            {/* Savings callout */}
            <div ref={savings.ref} className="text-center bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 border border-orange-500/20 rounded-2xl py-8 px-6">
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">You Save</div>
              <div className="text-6xl md:text-7xl font-black text-orange-400 mb-2">{savings.count}%</div>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                With zero degradation in end-user response quality and sub-100ms processing latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── CTA ──────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Defy Token Gravity?</h3>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Deploy Siphon entirely within your VPC. Zero data leaves your infrastructure.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) {
                const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: offset, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
          >
            Get Early Access
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

    </div>
  );
};

export default ProductPage;
