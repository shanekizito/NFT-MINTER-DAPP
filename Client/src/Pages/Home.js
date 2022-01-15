import React from 'react';
import '../App.css';
  
 
 
import HeroSection from '../Components/HeroSection';
import Team from '../Components/Team';
import Timeline from '../Components/Timeline';
import Recent from '../Components/Recent';

function Home() {
  return (
    <>
      <HeroSection />
      <Recent/>
      <Team/>
  
    </>
  );
}

export default Home;