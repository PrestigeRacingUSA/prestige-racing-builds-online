import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  console.log('Index component rendering');
  
  // Temporarily render only Navigation and HeroSection to isolate the issue
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* Temporarily commenting out other components to test
      <EngineBuildPrograms />
      <CustomCNCComponents />
      <TracksideSupport />
      <PatentedParts />
      <RAndD />
      <FinalCTA />
      */}
    </div>
  );
};

export default Index;
