import React from 'react';
import PropTypes from 'prop-types';
import { getExcerpt } from '../../libs/jokeLib';
import './SearchResultsView.scss';

const SearchResultsView = ({ searchResults, handleMouseDown, searchKey }) => {
  return (
    <div className="search-results">
      {searchResults.map(
        ([text, index]) => {
          return (
            <button
              type="button"
              key={text}
              onMouseDown={() => handleMouseDown(index)}
            >
              {getExcerpt(text, searchKey)}
            </button>
          );
        }
      )}
    </div>
  );
};

SearchResultsView.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])
    )
  ).isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  searchKey: PropTypes.string.isRequired,
};

export default SearchResultsView;
