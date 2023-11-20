import React from 'react'
import data from './upcomingevents'
import '../styles/upcomingevents.css'

function UpcomingEvents() {
  console.log(data)
  return (
    <React.Fragment>
      <h1 className="upcomingeventsheading">Upcoming Events</h1>
      <div className="upcomingeventscontainer">
        {data.map((event, index) => {
          return (
            <div className="upcomingevent" key={index}>
              <span className="span1">&nbsp;{event}&nbsp;</span>
              <span className="span2">&nbsp;{event}&nbsp;</span>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default UpcomingEvents
