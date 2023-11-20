import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import dvm from '../assets/DVM_Logo_white.svg'

function ClubAssocLink({ club }) {
  return (
    <React.Fragment>
      <Link to={club.id} className="clubLink">
        <div className="clubLink-head">
          <div className="imgContainer">
            {/* <img src={club.logo} alt={club.id} />  */}
            {/* this image is just a placeholder */}
            <img src={dvm} alt="dvm" />
          </div>
          <div className="clubLink-name">
            <h3>{club['name']}</h3>
            <div className="club-type">{club['type']}</div>
          </div>
        </div>
        <p>{club['description']}</p>
      </Link>
    </React.Fragment>
  )
}

export default ClubAssocLink

ClubAssocLink.propTypes = {
  club: PropTypes.object,
}
