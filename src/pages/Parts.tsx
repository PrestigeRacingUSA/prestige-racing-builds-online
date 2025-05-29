
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const Parts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              Performance Parts
            </h1>
            <p className="font-inter text-xl text-secondary max-w-3xl mx-auto">
              Precision-engineered components for the most demanding racing applications. Each part is crafted to exact specifications.
            </p>
          </div>

          {/* Parts Content */}
          <div className="space-y-16">
            {/* First Image */}
            <div className="text-center animate-fade-in">
              <img 
                src="/lovable-uploads/37882931-6464-4f03-8326-381db782ed06.png"
                alt="Custom Precision Components"
                className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8"
              />
              <div className="max-w-2xl mx-auto">
                <p className="font-inter text-xl text-secondary mb-6">
                  Parts catalog coming soon. Please contact us for custom design inquiries.
                </p>
                <Button 
                  className="bg-accent hover:bg-accent-hover text-white font-inter font-semibold px-8 py-3 transition-colors duration-200"
                >
                  Contact Us for Custom Parts
                </Button>
              </div>
            </div>

            {/* Second Image */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/lovable-uploads/31b5f1c7-665a-420b-a63d-7de65356865b.png"
                alt="Advanced Engineering Components"
                className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts;
