import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchKey } from '../../pages/jokes/jokeSlice';

const Search = ({ placeholder }) => {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(setSearchKey(event.target.value));
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        value={useSelector((state) => state.jokes.searchKey)}
      />
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;
