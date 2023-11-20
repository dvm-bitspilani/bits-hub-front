import React, { useState } from 'react'
import PropTypes from 'prop-types'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'

function ClubTextDetailHelper({data}) {
  const [isAboutOpened, setIsAboutOpened] = useState(true)
  const [isWorkOpened, setIsWorkOpened] = useState(false)
  const [isContactOpened, setIsContactOpened] = useState(false)

  function handleAboutClick() {
    setIsAboutOpened(!isAboutOpened)
    setIsWorkOpened(false)
    setIsContactOpened(false)
  }
  function handleWorkClick() {
    setIsWorkOpened(!isWorkOpened)
    setIsAboutOpened(false)
    setIsContactOpened(false)
  }
  function handleContactClick() {
    setIsContactOpened(!isContactOpened)
    setIsAboutOpened(false)
    setIsWorkOpened(false)
  }

  return (
    <React.Fragment>
      <div className="club-text-detail-container">
        <button onClick={handleAboutClick}>
          About
          <span>
            <img src={isAboutOpened ? minus : plus} alt="plus" />
          </span>
          <p
            style={{
              opacity: isAboutOpened ? '1' : '0',
              height: isAboutOpened ? 'auto' : '0',
            }}
          >
            {data[0]["about"]}
          </p>
        </button>
        <button onClick={handleWorkClick}>
          Work & Responsibility
          <span>
            <img src={isWorkOpened ? minus : plus} alt="plus" />
          </span>
          <p
            style={{
              opacity: isWorkOpened ? '1' : '0',
              height: isWorkOpened ? 'auto' : '0',
            }}
          >{data[0]["work_responsibility"]}
          </p>
        </button>
        <button onClick={handleContactClick}>
          Contact
          <span>
            <img src={isContactOpened ? minus : plus} alt="plus" />
          </span>
          <p
            style={{
              opacity: isContactOpened ? '1' : '0',              
              height: isContactOpened ? 'auto' : '0',
            }}
          >{data[0]["contact"]}
          </p>
        </button>
        <button>
          Notifications <span className="hyperlink-btn">Subscribe</span>
        </button>
        <button style={{ borderBottom: '1.75px solid white' }}>
          Recruitment <span className="hyperlink-btn">Apply Now</span>
        </button>
      </div>
    </React.Fragment>
  )
}

export default ClubTextDetailHelper

ClubTextDetailHelper.propTypes ={
    data: PropTypes.array.isRequired
}