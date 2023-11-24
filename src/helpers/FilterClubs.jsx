import React from 'react'
import Cross from './CrossIcon'
import PropTypes from 'prop-types'

function FilterClubs({
  selectedCategory,
  selectedFilters,
  handleFilterClick,
}) {
  return (
    <React.Fragment>
      {selectedCategory === 'clubs' && (
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
              selectedFilters.includes('Technical') ? 'filter-tag-selected' : ''
            }`}
            data-filter="Technical"
            onClick={() => handleFilterClick('Technical')}
          >
            <p>Technical</p>
            <Cross />
          </div>
          <div
            className={`filter-tag ${
              selectedFilters.includes('Creative') ? 'filter-tag-selected' : ''
            }`}
            data-filter="Creative"
            onClick={() => handleFilterClick('Creative')}
          >
            <p>Creative</p>
            <Cross />
          </div>
          <div
            className={`filter-tag ${
              selectedFilters.includes('Finance') ? 'filter-tag-selected' : ''
            }`}
            data-filter="Finance"
            onClick={() => handleFilterClick('Finance')}
          >
            <p>Finance</p>
            <Cross />
          </div>
          <div
            className={`filter-tag ${
              selectedFilters.includes('SoftSkills')
                ? 'filter-tag-selected'
                : ''
            }`}
            data-filter="SoftSkills"
            onClick={() => handleFilterClick('SoftSkills')}
          >
            <p>Soft Skills</p>
            <Cross />
          </div>
        </div>
      )}
      {selectedCategory === 'assocs' && (
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
              selectedFilters.includes('BranchesAssocs')
                ? 'filter-tag-selected'
                : ''
            }`}
            data-filter="BranchesAssocs"
            onClick={() => handleFilterClick('BranchesAssocs')}
          >
            <p>Branches Assocs</p>
            <Cross />
          </div>
          <div
            className={`filter-tag ${
              selectedFilters.includes('RegionalAssocs')
                ? 'filter-tag-selected'
                : ''
            }`}
            data-filter="RegionalAssocs"
            onClick={() => handleFilterClick('RegionalAssocs')}
          >
            <p>Regional Assocs</p>
            <Cross />
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default FilterClubs

FilterClubs.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  selectedFilters: PropTypes.array.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
}
