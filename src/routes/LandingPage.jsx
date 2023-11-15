import React from 'react'
import '../styles/landing.css'
import Hamburger from '../components/Hamburger'
import LandingHoverLinks from '../helpers/LandingHoverLinks'
import DVMLogo from '../assets/DVM_Logo.svg'

function LandingPage() {
  return (
    <React.Fragment>
      <div className="landing_bg">
        <img src={DVMLogo} alt="DVM" className="DVM_logo" />
        <Hamburger />
      </div>
      <LandingHoverLinks name="recruitments" />
      <LandingHoverLinks name="news" />
      <LandingHoverLinks name="recommended" />
    </React.Fragment>
  )
}

export default LandingPage
