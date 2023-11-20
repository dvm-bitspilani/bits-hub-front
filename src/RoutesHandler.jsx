import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import EventsPage from "./routes/EventsPage"
import ClubsAssocsPage from './routes/ClubsAssocsPage'
import ClubsAssocsDetailPage from './components/ClubsAssocsDetailPage'

function RoutesHandler() {
  const location = useLocation()

  return (
    <React.Fragment>
      <Routes key={location.pathname} location={location}>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/events" exact element={<EventsPage />} />
        <Route path="/profile" exact element={<h1>profile page</h1>} />
        <Route
          path="/recruitments"
          exact
          element={<h1>recruitments page</h1>}
        />
        <Route path="/clubs_assocs" exact element={<ClubsAssocsPage />} />
        <Route path="/clubs_assocs/:id" element={<ClubsAssocsDetailPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default RoutesHandler
