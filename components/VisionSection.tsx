import React from 'react';

const offerings = [
  {
    title: 'Token Factory',
    description: 'Optimize your LLM interactions with our cutting-edge tokenization strategies. Reduce costs and latency while increasing throughput for your AI applications.',
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'External Memory Layer',
    description: 'Empower your models with long-term memory. Our secure, scalable API connects your AI to vast enterprise knowledge bases, enabling context-aware and accurate responses.',
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h8" />
      </svg>
    )
  },
  {
    title: 'Indian Context Models',
    description: 'Go beyond generic models. We develop and fine-tune AI that deeply understands Indian languages, cultures, and business nuances, giving you a competitive edge.',
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const CoreOfferingsSection: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core Offerings</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We provide the foundational blocks for enterprises to build and deploy powerful, contextually-aware AI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="bg-zinc-900 border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6">
                {offering.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {offering.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingsSection;
