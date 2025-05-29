
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative py-20 bg-muted overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="/lovable-uploads/99e8c7c8-a5d9-4365-9769-3685f06400d6.png"
          alt="Prestige Racing USA Logo"
          className="w-96 h-96 object-contain"
        />
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border-4 border-primary rounded-full"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6 animate-fade-in">
          Ready to Build?
        </h2>
        <p className="font-inter text-xl text-secondary mb-8 animate-fade-in max-w-2xl mx-auto">
          Join the select few who demand nothing but perfection. Let's discuss your next racing engine project.
        </p>
        <Button 
          onClick={handleContactClick}
          className="bg-accent hover:bg-accent-hover text-white font-inter font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
