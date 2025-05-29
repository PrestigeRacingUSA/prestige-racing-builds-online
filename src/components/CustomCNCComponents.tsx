
import React from 'react';
import { Button } from '@/components/ui/button';

const CustomCNCComponents = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/99e8c7c8-a5d9-4365-9769-3685f06400d6.png')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-section-gradient" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6 animate-slide-in">
            Custom CNC Components
          </h2>
          <p className="font-inter text-xl text-secondary mb-8 animate-fade-in">
            In-house and outsourced machining for your precision parts. Every component is crafted to exact specifications with uncompromising quality standards.
          </p>
          <Button 
            className="bg-accent hover:bg-accent-hover text-white font-inter font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in"
          >
            Browse Parts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomCNCComponents;
