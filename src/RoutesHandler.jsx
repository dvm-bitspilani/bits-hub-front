import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import ClubsAssocsPage from "./routes/ClubsAssocsPage"

function RoutesHandler() {
  const location = useLocation()

  return (
    <React.Fragment>
      <Routes key={location.pathname} location={location}>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/events" exact element={<h1>events page</h1>} />
        <Route path="/profile" exact element={<h1>profile page</h1>} />
        <Route
          path="/recruitments"
          exact
          element={<h1>recruitments page</h1>}
        />
        <Route path="/clubs&assocs" exact element={<ClubsAssocsPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default RoutesHandler
