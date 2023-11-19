import React, { useState } from 'react'
import HeroSectionLink from '../helpers/HeroSectionLink'
import '../styles/herosection.css'

import rightIcon from '../assets/right_arrow_icon.svg'
import profileIcon from '../assets/profile_icon.svg'
import eventsIcon from '../assets/events_icon.svg'
import recruitmentsIcon from '../assets/recruitments_icon.svg'

function HeroSection() {
  const [eventsHover, setEventsHover] = useState(false)
  const [profileHover, setProfileHover] = useState(false)
  const [recruitmentsHover, setRecruitmentsHover] = useState(false)
  const [clubsHover, setClubsHover] = useState(false)

  return (
    <React.Fragment>
      <div className="hero-bg">
        <HeroSectionLink
          eventsHover={eventsHover}
          profileHover={profileHover}
          recruitmentsHover={recruitmentsHover}
          clubsHover={clubsHover}
          bgImage
          text={'Clubs & Assocs'}
          textColor={'#FFFFFF'}
          textHover={'Find clubs and assocs you are interested in.'}
          icon={rightIcon}
          textHoverSize={'84px'}
          backgroundColor="#2541B2"
          gridArea=" 1 / 1 / 3 / 3"
          setStateHover={setClubsHover}
        />
        <HeroSectionLink
          text={'Events'}
          textColor={'#000000'}
          textHover={'Check out upcoming events!'}
          icon={eventsIcon}
          textHoverSize={'52px'}
          backgroundColor="#ECECEC"
          gridArea=" 1 / 3 / 2 / 4"
          setStateHover={setEventsHover}
        />
        <HeroSectionLink
          text={'Profile'}
          textColor={'#FFFFFF'}
          textHover={'PlaceHolder text which will be replaced.'}
          icon={profileIcon}
          textHoverSize={'52px'}
          backgroundColor="#C13E42"
          gridArea=" 1 / 4 / 2 / 5"
          setStateHover={setProfileHover}
        />
        <HeroSectionLink
          text={'recruitments'}
          textColor={'#FFFFFF'}
          textHover={'PlaceHolder text which will be replaced.'}
          icon={recruitmentsIcon}
          textHoverSize={'52px'}
          backgroundColor="#1C976B"
          gridArea=" 2 / 3 / 3 / 5"
          setStateHover={setRecruitmentsHover}
        />
      </div>
    </React.Fragment>
  )
}

export default HeroSection
