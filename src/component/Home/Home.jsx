import React from 'react'
import "./Home.css"
import Navbar from './../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import About from './../AboutUs/AboutUs';
import OurServices from './../OurServices/OurServices';
import ElectrifyNeed from './../ElectrifyNeed/ElectrifyNeed';
import Benefits from './../Benefits/Benefits';
import Footer from './../Footer/Footer';

function Home() {
  return (
    <div className='main_container_home'>
      <Navbar/>
      <HeroSection></HeroSection>
      <About/>
      <OurServices/>
      <ElectrifyNeed />
      <Benefits />
      <Footer />
    </div>

  )
}

export default Home