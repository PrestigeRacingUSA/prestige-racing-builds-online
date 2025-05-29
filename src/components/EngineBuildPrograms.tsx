import React from 'react';

const EngineBuildPrograms = () => {
  const programs = [
    {
      title: "Block Prep",
      image: "/lovable-uploads/7561f56b-65e5-4785-afd9-aa42f6544dac.png",
      description: "Precision machining and preparation of engine blocks for optimal performance."
    },
    {
      title: "Cylinder Head Work",
      image: "/lovable-uploads/8a0cff2e-9665-43c0-a53e-2080a97f0c4f.png",
      description: "Advanced porting, valve work, and precision assembly for maximum flow."
    },
    {
      title: "Final Assembly",
      image: "/lovable-uploads/3d9d4025-82da-401d-ba34-71a1e948c9fa.png",
      description: "Meticulous assembly with precision-torqued components and quality control."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Engine Build Programs
          </h2>
          <p className="font-inter text-xl text-secondary max-w-3xl mx-auto">
            Full-cycle service: block prep, cylinder-head work, final assembly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="font-oswald font-bold text-2xl mb-3">{program.title}</h3>
                    <p className="font-inter text-sm">{program.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-oswald font-semibold text-xl text-primary mb-2">{program.title}</h3>
                <p className="font-inter text-secondary">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineBuildPrograms;
