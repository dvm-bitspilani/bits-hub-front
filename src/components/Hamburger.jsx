import React, { useRef, useState } from 'react'
import '../styles/hamburger.css'
import { Link } from 'react-router-dom'

function Hamburger() {
  const [isHamOpen, setIsHamOpen] = useState(false)
  const hamburgerLinksRef = useRef(null)

  function hamburgerClickHandler() {
    console.log(hamburgerLinksRef.current)
    setIsHamOpen(!isHamOpen)
  }

  return (
    <React.Fragment>
      <div className="hamburger">
        <div className="hamburger_icon" onClick={hamburgerClickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`hamburger_links ${
            isHamOpen ? 'hamburger_links_active' : ''
          }`}
          ref={hamburgerLinksRef}
        >
          <Link to="/login" style={{ marginTop: '16px' }}>
            {' '}
            login{' '}
          </Link>
          <Link to="/events"> events </Link>
          <Link to="/clubs" style={{ marginBottom: '16px' }}>
            {' '}
            clubs{' '}
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hamburger
