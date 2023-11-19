import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import '../styles/landingpage.css'

import scrollDown from '../assets/scrolldown_icon.svg'

function LandingPage() {
  return (
    <React.Fragment>
      <div className="landing-bg">
        <Header />
        <HeroSection />
        <div className="scroll-down">
          <span>Scroll</span>
          <img src={scrollDown} alt="down" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default LandingPage
