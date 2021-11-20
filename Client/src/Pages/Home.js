import React from 'react';
import '../App.css';
  
 
 
import HeroSection from '../Components/HeroSection';
import Timeline from '../Components/Timeline';
import Recent from '../Components/Recent';

function Home() {
  return (
    <>
      <HeroSection />
      <Recent/>
      <Timeline/>
      
    </>
  );
}

export default Home;