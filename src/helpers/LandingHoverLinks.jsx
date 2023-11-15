import React from 'react'
import LandingHoverLinksPropTypes from '../propTypes'
import { Link } from 'react-router-dom'

function LandingHoverLinks({ name }) {
  return (
    <React.Fragment>
      <Link to={`/${name}`}>{name}</Link>
    </React.Fragment>
  )
}

LandingHoverLinks.propTypes = LandingHoverLinksPropTypes

export default LandingHoverLinks
