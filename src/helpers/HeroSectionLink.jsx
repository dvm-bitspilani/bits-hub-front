import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/herosection.css'
import bgImageIcons from '../assets/Clubs&Assocs.svg'
import bgImageIconsHover from "../assets/Clubs&AssocsHover.svg"

function HeroSectionLink({
  backgroundColor,
  gridArea,
  bgImage,
  text,
  textHover,
  textHoverSize,
  textColor,
  icon,
}) {
  const [isHovered, setIsHovered] = useState(false)

  const style = {
    backgroundColor: backgroundColor,
    gridArea: gridArea,
    backgroundImage: bgImage ? (isHovered ? `url(${bgImageIconsHover})` : `url(${bgImageIcons})`) : 'none',
    cursor: isHovered ? 'pointer' : 'default',
    scale: isHovered ? '0.98' : '1',
  }

  return (
    <React.Fragment>
      <div
        className="hero-link"
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered && (
          <div className="hero-link-label">
            <p style={{ color: textColor }}>{text}</p>
            <img src={icon} alt="icon" />
          </div>
        )}
        {isHovered && (
          <div className="marquee-container">
            <div style={{ color: textColor , fontSize: textHoverSize }}>
              <span className='span1'>&nbsp;{textHover}&nbsp;</span>
              <span className='span2'>&nbsp;{textHover}&nbsp;</span>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default HeroSectionLink

HeroSectionLink.propTypes = {
  backgroundColor: PropTypes.string,
  gridArea: PropTypes.string,
  bgImage: PropTypes.bool,
  text: PropTypes.string,
  textHover: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.string,
  textHoverSize: PropTypes.string,
}
