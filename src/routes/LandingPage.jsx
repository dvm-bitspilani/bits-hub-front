import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css'
import Hamburger from '../components/Hamburger'

function LandingPage() {
  return (
    <React.Fragment>
      <div className="landing_bg">
        <Hamburger />
      </div>
      <Link to="/recruitments"></Link>
    </React.Fragment>
  )
}

export default LandingPage
