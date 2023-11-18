import React from 'react'
import HeroSectionLink from '../helpers/HeroSectionLink'
import '../styles/herosection.css'

import rightIcon from '../assets/right_arrow_icon.svg'
import profileIcon from '../assets/profile_icon.svg'
import eventsIcon from '../assets/events_icon.svg'
import recruitmentsIcon from '../assets/recruitments_icon.svg'

function HeroSection() {
  return (
    <React.Fragment>
      <div className="hero-bg">
        <HeroSectionLink
          bgImage
          text={'Clubs & Assocs'}
          textColor={'#FFFFFF'}
          icon={rightIcon}
          backgroundColor="#2541B2"
          gridArea=" 1 / 1 / 3 / 3"
        />
        <HeroSectionLink
          text={'Events'}
          textColor={'#000000'}
          icon={eventsIcon}
          backgroundColor="#ECECEC"
          gridArea=" 1 / 3 / 2 / 4"
        />
        <HeroSectionLink
          text={'Profile'}
          textColor={'#FFFFFF'}
          icon={profileIcon}
          backgroundColor="#C13E42"
          gridArea=" 1 / 4 / 2 / 5"
        />
        <HeroSectionLink
          text={'recruitments'}
          textColor={'#FFFFFF'}
          icon={recruitmentsIcon}
          backgroundColor="#1C976B"
          gridArea=" 2 / 3 / 3 / 5"
        />
      </div>
    </React.Fragment>
  )
}

export default HeroSection
