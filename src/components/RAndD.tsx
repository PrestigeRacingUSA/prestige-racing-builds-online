
import React from 'react';

const RAndD = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/2e8cd1a3-9664-4654-bc57-54ca4fec14c4.png"
              alt="R&D for Tomorrow's Tracks"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="animate-slide-in">
            <h2 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              R&D for Tomorrow's Tracks
            </h2>
            <p className="font-inter text-xl text-secondary">
              Additive-manufactured prototypes and new designs in beta. We're constantly pushing the boundaries of what's possible in racing engine technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RAndD;
