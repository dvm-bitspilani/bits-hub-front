import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/herosection.css'
import { Link } from 'react-router-dom'

function HeroSectionLink({
  backgroundColor,
  gridArea,
  bgIcons,
  text,
  textHover,
  textHoverSize,
  textColor,
  icon,
  setStateHover,
  eventsHover,
  profileHover,
  recruitmentsHover,
}) {
  const [isHovered, setIsHovered] = useState(false)

  const style = {
    backgroundColor: backgroundColor,
    gridArea: gridArea,
    cursor: isHovered ? 'pointer' : 'default',
    scale: isHovered ? '0.98' : '1',
  }

  return (
    <React.Fragment>
      <Link
        to={text.toLowerCase().replace(/ /g, '')}
        className="hero-link"
        style={style}
        onMouseEnter={() => {
          setIsHovered(true)
          setStateHover(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          setStateHover(false)
        }}
      >
        {bgIcons && (
          <div className="hero-link-bg">
            <svg
              width="122"
              height="122"
              viewBox="0 0 122 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                scale: eventsHover
                  ? '0.4'
                  : profileHover
                    ? '1.2'
                    : recruitmentsHover
                      ? '0.4'
                      : '0.8',
              }}
            >
              <circle
                cx="61"
                cy="61"
                r="61"
                fill={
                  eventsHover
                    ? '#8987BE'
                    : recruitmentsHover
                      ? '#8987BE'
                      : '#C13E42'
                }
              />
            </svg>

            <svg
              width="134"
              height="134"
              viewBox="0 0 134 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                scale: eventsHover
                  ? '1.2'
                  : profileHover
                    ? '0.4'
                    : recruitmentsHover
                      ? '0.4'
                      : '0.8',
              }}
            >
              <rect
                y="42.4885"
                width="100"
                height="100"
                transform="rotate(-25.1434 0 42.4885)"
                fill={
                  profileHover
                    ? '#8987BE'
                    : recruitmentsHover
                      ? '#8987BE'
                      : '#FEFEFE'
                }
              />
            </svg>
            <svg
              width="135"
              height="117"
              viewBox="0 0 135 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                scale: eventsHover
                  ? '0.4'
                  : profileHover
                    ? '0.4'
                    : recruitmentsHover
                      ? '1.2'
                      : '0.8',
              }}
            >
              <path
                d="M67.5 117L134.617 0.75H0.383034L67.5 117Z"
                fill={
                  eventsHover ? '#8987BE' : profileHover ? '#8987BE' : '#1C976B'
                }
              />
            </svg>
          </div>
        )}
        {!isHovered && (
          <div className="hero-link-label">
            <p style={{ color: textColor }}>{text}</p>
            <img src={icon} alt="icon" />
          </div>
        )}
        {isHovered && (
          <div className="marquee-container">
            <div style={{ color: textColor, fontSize: textHoverSize }}>
              <span className="span1">&nbsp;{textHover}&nbsp;</span>
              <span className="span2">&nbsp;{textHover}&nbsp;</span>
            </div>
          </div>
        )}
      </Link>
    </React.Fragment>
  )
}

export default HeroSectionLink

HeroSectionLink.propTypes = {
  backgroundColor: PropTypes.string,
  gridArea: PropTypes.string,
  bgIcons: PropTypes.bool,
  text: PropTypes.string,
  textHover: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.string,
  textHoverSize: PropTypes.string,
  setStateHover: PropTypes.func,
  eventsHover: PropTypes.bool,
  profileHover: PropTypes.bool,
  recruitmentsHover: PropTypes.bool,
}
