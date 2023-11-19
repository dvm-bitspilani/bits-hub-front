import React, { useState, useEffect } from 'react'
import ClubAssocLink from '../helpers/ClubAssocLink'
import PropTypes from 'prop-types'
import Cross from '../helpers/CrossIcon'

function ClubsAssocsList({ selectedCategory , data }) {
    console.log(data)

  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    if(selectedCategory === 'clubs'){
        setFilteredData(data[0]['clubs'])
    }
    if(selectedCategory === 'assocs'){
        setFilteredData(data[0]['associations'])
    }
  },[selectedCategory , data])


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


  console.log(filteredData)

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
        <div className='linksContainer'>
            {filteredData.map((club) => (
                <ClubAssocLink key={club.id} club={club} />
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ClubsAssocsList

ClubsAssocsList.propTypes = {
  selectedCategory: PropTypes.string,
  data: PropTypes.array,
}