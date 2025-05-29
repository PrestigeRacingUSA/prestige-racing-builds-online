
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const Parts = () => {
  const parts = [
    {
      id: 1,
      name: "Custom Cylinder Heads",
      category: "Engine Components",
      image: "/lovable-uploads/8a0cff2e-9665-43c0-a53e-2080a97f0c4f.png",
      description: "Precision-ported cylinder heads with custom valve work"
    },
    {
      id: 2,
      name: "Engine Block Assemblies",
      category: "Engine Components",
      image: "/lovable-uploads/3d9d4025-82da-401d-ba34-71a1e948c9fa.png",
      description: "Fully prepared and machined engine blocks"
    },
    {
      id: 3,
      name: "CNC Precision Components",
      category: "Machined Parts",
      image: "/lovable-uploads/99e8c7c8-a5d9-4365-9769-3685f06400d6.png",
      description: "Custom machined components to exact specifications"
    },
    {
      id: 4,
      name: "Performance Engine Parts",
      category: "Internal Components",
      image: "/lovable-uploads/2e8cd1a3-9664-4654-bc57-54ca4fec14c4.png",
      description: "High-performance internal engine components"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              Performance Parts Gallery
            </h1>
            <p className="font-inter text-xl text-secondary max-w-3xl mx-auto">
              Precision-engineered components for the most demanding racing applications. Each part is crafted to exact specifications.
            </p>
          </div>

          {/* Parts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {parts.map((part, index) => (
              <div 
                key={part.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={part.image}
                    alt={part.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                      {part.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-oswald font-semibold text-xl text-primary mb-2">
                    {part.name}
                  </h3>
                  <p className="font-inter text-secondary mb-4">
                    {part.description}
                  </p>
                  <Button 
                    className="w-full bg-accent hover:bg-accent-hover text-white font-inter font-medium transition-colors duration-200"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts;
