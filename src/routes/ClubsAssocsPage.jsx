import React, { useState } from 'react'
import Header from '../components/Header'
import ClubsAssocsList from '../components/ClubsAssocsList'
import '../styles/clubsassocs.css'

import data from './club_assoc_data' // will use api later

console.log(data)

function ClubsAssocsPage() {
  const [categorySelected, setCategorySelected] = useState('clubs')

  return (
    <React.Fragment>
      <Header />
      <section className="clubsassocs-wrapper">
        <div className="switch-panel">
          <div
            onClick={() => setCategorySelected('clubs')}
            className={
              categorySelected === 'clubs'
                ? 'category-club selected-category'
                : 'category-club'
            }
          >
            <p>CLUBS</p>
          </div>
          <div
            onClick={() => setCategorySelected('assocs')}
            className={
              categorySelected === 'assocs'
                ? 'category-assoc selected-category'
                : 'category-assoc'
            }
          >
            <p>ASSOCIATIONS</p>
          </div>
        </div>
        <ClubsAssocsList selectedCategory={categorySelected} />
      </section>
    </React.Fragment>
  )
}

export default ClubsAssocsPage
