import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Cross from '../helpers/CrossIcon'

function ClubsAssocsList({ selectedCategory }) {
  const [selectedFilters, setSelectedFilters] = useState([])

  const handleFilterClick = (filter) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (prevSelectedFilters.includes(filter)) {
        return prevSelectedFilters.filter(
          (selectedFilter) => selectedFilter !== filter
        )
      } else {
        return [...prevSelectedFilters, filter]
      }
    })
  }

  useEffect(() => {
    setSelectedFilters([])
  }, [selectedCategory])

  return (
    <React.Fragment>
      <div className="clubsassocs-list-container">
        <div className="filter-container">
          <p>Filter by:</p>
          <div className="filter-tags-container">
            <div
              className={`filter-tag ${
                selectedFilters.includes('CurrentlyRecruiting')
                  ? 'filter-tag-selected'
                  : ''
              }`}
              data-filter="CurrentlyRecruiting"
              onClick={() => handleFilterClick('CurrentlyRecruiting')}
            >
              <p>Currently Recruiting</p>
              <Cross />
            </div>
            <div
              className={`filter-tag ${
                selectedFilters.includes('AnotherFilter')
                  ? 'filter-tag-selected'
                  : ''
              }`}
              data-filter="AnotherFilter"
              onClick={() => handleFilterClick('AnotherFilter')}
            >
              <p>Another Filter</p>
              <Cross />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

ClubsAssocsList.propTypes = {
  selectedCategory: PropTypes.string,
}

export default ClubsAssocsList
