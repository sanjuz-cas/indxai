import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              About Indxai
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Where Innovation Meets Design
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-orange-400">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                At Indxai, we are committed to delivering innovative solutions that transform ideas into reality. 
                Our creative agency specializes in cutting-edge technology and design, ensuring your brand stands 
                out in the digital landscape.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From concept to execution, we work tirelessly to ensure your success and growth, leveraging the 
                latest in AI, tokenization, and factory automation to drive results.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-900/20 backdrop-blur-sm border border-orange-500/30 overflow-hidden">
                <img 
                  src="/img.png" 
                  alt="Indxai - AI Solutions and Innovation" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all">
              <div className="w-12 h-12 bg-orange-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Innovation</h3>
              <p className="text-gray-400">
                We push boundaries and embrace new technologies to create solutions that define the future.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all">
              <div className="w-12 h-12 bg-orange-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Creativity</h3>
              <p className="text-gray-400">
                Our creative approach ensures every project is unique, engaging, and perfectly tailored to your vision.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all">
              <div className="w-12 h-12 bg-orange-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Excellence</h3>
              <p className="text-gray-400">
                We deliver nothing but the best, ensuring quality and precision in every aspect of our work.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Vision?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate to bring your ideas to life with innovative solutions.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
