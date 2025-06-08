
import React from 'react';
import Navigation from '@/components/Navigation';

const Index = () => {
  console.log('Index component rendering');
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Prestige Racing USA</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Small-Batch Racing Engines - Private-label power for 2-3 clients annually
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Engine Build Programs</h3>
              <p className="text-gray-600">Premium racing engine builds tailored to your specifications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Custom CNC Components</h3>
              <p className="text-gray-600">Precision-machined components for maximum performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Trackside Support</h3>
              <p className="text-gray-600">Professional support when you need it most.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
