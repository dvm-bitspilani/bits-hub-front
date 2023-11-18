import React from 'react'
import HeroSectionLink from '../helpers/HeroSectionLink'
import '../styles/herosection.css'

function HeroSection() {
  return (
    <React.Fragment>
      <div className="hero-bg">
        <HeroSectionLink
          backgroundColor="#2541B2"
          gridArea=" 1 / 1 / 3 / 3"
          square
        />
        <HeroSectionLink
          backgroundColor="#ECECEC"
          gridArea=" 1 / 3 / 2 / 4"
          square
        />
        <HeroSectionLink
          backgroundColor="#C13E42"
          gridArea=" 1 / 4 / 2 / 5"
          square
        />
        <HeroSectionLink backgroundColor="#1C976B" gridArea=" 2 / 3 / 3 / 5" />
      </div>
    </React.Fragment>
  )
}

export default HeroSection
