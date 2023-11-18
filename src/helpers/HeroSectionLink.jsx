import React from 'react'
import PropTypes from 'prop-types'
import '../styles/herosection.css'

function HeroSectionLink({ backgroundColor, gridArea, square }) {
  const style = {
    backgroundColor: backgroundColor,
    gridArea: gridArea,
    aspectRatio: square ? '1' : 'unset',
  }

  return (
    <React.Fragment>
      <div className="hero-link" style={style}></div>
    </React.Fragment>
  )
}

export default HeroSectionLink

HeroSectionLink.propTypes = {
  backgroundColor: PropTypes.string,
  gridArea: PropTypes.string,
  square: PropTypes.bool,
}
