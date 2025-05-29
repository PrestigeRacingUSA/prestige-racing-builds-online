
import React from 'react';

const TracksideSupport = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              Trackside Performance Support
            </h2>
            <p className="font-inter text-xl text-secondary mb-6">
              On-call tuning, data analysis, and race-weekend strategy. Our expertise doesn't end when the engine leaves the shop.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-inter text-secondary">Real-time engine monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-inter text-secondary">Performance optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-inter text-secondary">Strategic race support</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/f091f177-02ed-42f1-8d00-0efb7c98b47c.png"
              alt="Trackside Performance Support"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksideSupport;
