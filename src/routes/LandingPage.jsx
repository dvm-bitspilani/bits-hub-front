import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css'
import Hamburger from '../components/Hamburger'
import DVMLogo from '../assets/DVM_Logo.svg'

function LandingPage() {
  return (
    <React.Fragment>
      <div className="landing_bg">
        <img src={DVMLogo} alt="DVM" className='DVM_logo' />
        <Hamburger />
      </div>
      <Link to="/recruitments"></Link>
    </React.Fragment>
  )
}

export default LandingPage
