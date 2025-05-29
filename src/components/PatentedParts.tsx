
import React from 'react';

const PatentedParts = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/4b9a1a08-d8d9-4977-81c9-fd8e28307947.png')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-fade-in">
          Our Patented Parts
        </h2>
        <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
          Exclusively yours—protected by patent and built for performance. Innovation meets precision in every component we design and manufacture.
        </p>
      </div>
    </section>
  );
};

export default PatentedParts;
