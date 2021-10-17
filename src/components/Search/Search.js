import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchKey } from '../../pages/jokes/jokeSlice';
import SearchView from './SearchView';

const Search = ({ placeholder }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearchKey(event.target.value));
  };

  const handleBlur = () => dispatch(setSearchKey(''));

  return (
    <SearchView
      handleChange={handleChange}
      handleBlur={handleBlur}
      placeholder={placeholder}
      value={useSelector((state) => state.jokes.searchKey)}
    />
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;
