import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import '../styles/landingpage.css'

function LandingPage() {
  return (
    <React.Fragment>
      <div className="landing-bg">
        <Header />
        <HeroSection />
      </div>
    </React.Fragment>
  )
}

export default LandingPage
