
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Logo Background */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/5c40691e-3774-44d3-bb86-e73dab2c6171.png')`,
          backgroundSize: 'contain'
        }}
      />
      
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
