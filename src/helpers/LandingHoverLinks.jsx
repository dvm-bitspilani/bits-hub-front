import React from 'react'
import {LandingHoverLinksPropTypes} from '../propTypes'
import { Link } from 'react-router-dom'
import './landinghoverlinks.css'

function LandingHoverLinks({ name }) {
  return (
    <React.Fragment>
      <Link to={`/${name}`} className='landingHoverLinkContainer'>{name}</Link>
    </React.Fragment>
  )
}

LandingHoverLinks.propTypes = LandingHoverLinksPropTypes

export default LandingHoverLinks
