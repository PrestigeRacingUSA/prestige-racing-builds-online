
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/e372497e-d969-4393-93e3-061675d9c6bd.png')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-oswald font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-in">
          Small-Batch Racing Engines
        </h1>
        <p className="font-inter text-xl md:text-2xl lg:text-3xl font-light mb-8 animate-fade-in opacity-90">
          Private-label power for 2–3 clients annually
        </p>
        <p className="font-inter text-lg md:text-xl font-medium animate-fade-in text-white/90">
          Reserve Your Spot
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/50 rounded-full">
          <div className="w-1 h-8 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
