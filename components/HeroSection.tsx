import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[95vh] min-h-[800px] w-full overflow-hidden flex flex-col justify-center items-center">
      {/* Background Planet/Arc */}
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[150vmin] h-[150vmin] rounded-full bg-gradient-radial from-orange-500/20 via-orange-800/10 to-transparent blur-3xl" />
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[150vmin] h-[150vmin] rounded-full border-t border-orange-400/30" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4">
        {/* Giant Text - TOKEN at top */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
          <h1 className="text-[20vw] sm:text-[15vw] md:text-[10rem] lg:text-[12rem] font-black text-white leading-none whitespace-nowrap">TOKEN</h1>
        </div>

        {/* Giant Text - FACTORY at bottom */}
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none overflow-hidden">
          <h1 className="text-[20vw] sm:text-[15vw] md:text-[10rem] lg:text-[12rem] font-black text-white leading-none whitespace-nowrap">FACTORY</h1>
        </div>
      </div>
       {/* Bottom Text */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
          <div className="w-px h-8 bg-orange-500"></div>
          <p className="text-sm md:text-base lg:text-xl font-medium tracking-widest text-gray-300 uppercase whitespace-nowrap">
              Where Innovation Meets Design
          </p>
      </div>
    </div>
  );
};

export default HeroSection;
