import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Ready from './components/ready'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  // locomotive 
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full mi-h-screen text-white bg-zinc-900' >
    <Navbar />
    <LandingPage />
    <Marquee />
    <About />
    <Eyes />
    <Featured/>
    <Cards />
    <Ready/>
    <Footer />
    </div>
  )
}

export default App