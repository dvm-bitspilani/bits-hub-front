import React, { useState, useEffect } from 'react';
import ClubAssocLink from '../helpers/ClubAssocLink';
import PropTypes from 'prop-types';
import Cross from '../helpers/CrossIcon';

function ClubsAssocsList({ selectedCategory, data }) {


  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedCategory === 'clubs') {
      setFilteredData(data[0]?.clubs || []);
    }
    if (selectedCategory === 'assocs') {
      setFilteredData(data[0]?.assocs || []);
    }
  }, [selectedCategory, data]);

  const handleFilterClick = (filter) => {
    setSelectedFilters((prevSelectedFilters) => {
      const updatedFilters = prevSelectedFilters.includes(filter)
        ? prevSelectedFilters.filter((selectedFilter) => selectedFilter !== filter)
        : [...prevSelectedFilters, filter];

      const updatedData = filterDataWithSelectedFilters(updatedFilters);

      setFilteredData(updatedData);

      return updatedFilters;
    });
  };

  const filterDataWithSelectedFilters = (filters) => {
    if (filters.length === 0) {
      return selectedCategory === 'clubs' ? data[0]?.clubs || [] : data[0]?.assocs || [];
    }

    return (data[0]?.[selectedCategory] || []).filter((item) =>
      filters.every((filter) => item[filter] === true)
    );
  };

  useEffect(() => {
    setSelectedFilters([]);
  }, [selectedCategory]);

  return (
    <React.Fragment>
      <div className="clubsassocs-list-container">
        <div className="filter-container">
          <p>Filter by:</p>
          <div className="filter-tags-container">
            <div
              className={`filter-tag ${
                selectedFilters.includes('CurrentlyRecruiting') ? 'filter-tag-selected' : ''
              }`}
              data-filter="CurrentlyRecruiting"
              onClick={() => handleFilterClick('CurrentlyRecruiting')}
            >
              <p>Currently Recruiting</p>
              <Cross />
            </div>
            <div
              className={`filter-tag ${
                selectedFilters.includes('AnotherFilter') ? 'filter-tag-selected' : ''
              }`}
              data-filter="AnotherFilter"
              onClick={() => handleFilterClick('AnotherFilter')}
            >
              <p>Another Filter</p>
              <Cross />
            </div>
          </div>
        </div>
        <div className="linksContainer">
          {filteredData.map((club) => (
            <ClubAssocLink key={club.id} club={club} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ClubsAssocsList;

ClubsAssocsList.propTypes = {
  selectedCategory: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object)
};
