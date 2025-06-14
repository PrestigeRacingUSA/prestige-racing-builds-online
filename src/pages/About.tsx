
import React from 'react';
import Navigation from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              About Prestige Racing USA
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-in">
              <div className="space-y-6">
                <p className="font-inter text-lg text-secondary leading-relaxed">
                  Our founder has spent two decades machining and building engines. He has dedicated his career to mastering manufacturing, engineering, and engine physics. He has built some of the fastest Hondas and Nissans in Arizona, with many former customers still racing his engines today. Drawing on a deep understanding of Japanese manufacturers' design philosophy, he has designed, patented and manufactured performance parts for both suspension and engine components.
                </p>
                
                <p className="font-inter text-lg text-secondary leading-relaxed">
                  Our shop combines decades of racing experience with cutting-edge technology and traditional craftsmanship. Every component that leaves our facility has been precision-machined, carefully assembled, and thoroughly tested to meet the exacting standards of professional motorsports. When you choose Prestige Racing USA, you're not just buying an engine—you're investing in a partnership dedicated to your racing success.
                </p>

                <div className="mt-8">
                  <h3 className="font-oswald font-semibold text-2xl text-primary mb-4">Our Ethos</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="font-inter text-secondary">Uncompromising quality in every component</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="font-inter text-secondary">Innovation through precision engineering</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="font-inter text-secondary">Trackside support when it matters most</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/a6b89269-e235-47b8-bc3e-47428227c975.png"
                alt="Prestige Racing USA Shop"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
