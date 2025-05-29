
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CustomCNCComponents = () => {
  const navigate = useNavigate();

  const handleBrowsePartsClick = () => {
    navigate('/parts');
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/e815b922-5bd6-4bdb-8c0b-ae9fe9bfd82f.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6 animate-fade-in">
          Custom CNC Components
        </h2>
        <p className="font-inter text-xl text-secondary mb-8 animate-fade-in max-w-2xl mx-auto">
          In-house and outsourced machining for your precision parts.
        </p>
        <Button 
          onClick={handleBrowsePartsClick}
          className="bg-accent hover:bg-accent-hover text-white font-inter font-semibold px-8 py-3 transition-colors duration-200 animate-fade-in"
        >
          Browse Parts
        </Button>
      </div>
    </section>
  );
};

export default CustomCNCComponents;
