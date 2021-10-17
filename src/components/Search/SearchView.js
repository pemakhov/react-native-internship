import React from 'react';
import PropTypes from 'prop-types';
import './SearchView.scss';

const SearchView = ({
  handleChange,
  handleBlur,
  placeholder,
  value
}) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </div>
  );
};

SearchView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchView;
