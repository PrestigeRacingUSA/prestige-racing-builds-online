
import React from 'react';

const HeroSection = () => {
  console.log('HeroSection rendering');
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Simple background for testing */}
      <div className="absolute inset-0" style={{ backgroundColor: '#153E7A' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Small-Batch Racing Engines
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 opacity-90">
          Private-label power for 2–3 clients annually
        </p>
        <p className="text-lg md:text-xl font-medium text-white/90">
          Reserve Your Spot
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-white/50 rounded-full">
          <div className="w-1 h-8 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
