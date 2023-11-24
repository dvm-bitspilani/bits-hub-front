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
          bgIcons
          text={'Clubs & Assocs'}
          textColor={'#FFFFFF'}
          textHover={'Find clubs and assocs you are interested in.'}
          icon={rightIcon}
          textHoverSize={'84px'}
          backgroundColor="#2541B2"
          gridArea=" 1 / 1 / 3 / 3"
          setStateHover={setClubsHover}
          linkto={'clubs'}
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
          linkto={'events'}
        />
        <HeroSectionLink
          text={'Profile'}
          textColor={'#FFFFFF'}
          textHover={'View your profile and subscriptions.'}
          icon={profileIcon}
          textHoverSize={'52px'}
          backgroundColor="#C13E42"
          gridArea=" 1 / 4 / 2 / 5"
          setStateHover={setProfileHover}
          linkto={'profile'}
        />
        <HeroSectionLink
          text={'recruitments'}
          textColor={'#FFFFFF'}
          textHover={'Apply for the currently ongoing Recruitments.'}
          icon={recruitmentsIcon}
          textHoverSize={'52px'}
          backgroundColor="#1C976B"
          gridArea=" 2 / 3 / 3 / 5"
          setStateHover={setRecruitmentsHover}
          linkto={'recruitments'}
        />
      </div>
    </React.Fragment>
  )
}

export default HeroSection
