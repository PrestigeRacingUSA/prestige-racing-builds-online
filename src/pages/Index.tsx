
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EngineBuildPrograms from '@/components/EngineBuildPrograms';
import CustomCNCComponents from '@/components/CustomCNCComponents';
import TracksideSupport from '@/components/TracksideSupport';
import PatentedParts from '@/components/PatentedParts';
import RAndD from '@/components/RAndD';
import FinalCTA from '@/components/FinalCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EngineBuildPrograms />
      <CustomCNCComponents />
      <TracksideSupport />
      <PatentedParts />
      <RAndD />
      <FinalCTA />
    </div>
  );
};

export default Index;
