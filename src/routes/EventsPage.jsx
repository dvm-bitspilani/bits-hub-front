import React from 'react'
import Header from '../components/Header'
import UpcomingEvents from '../components/UpcomingEvents'
import '../styles/eventspage.css'

function EventsPage() {
  return (
    <React.Fragment>
      <Header />

      <UpcomingEvents />
    </React.Fragment>
  )
}

export default EventsPage
