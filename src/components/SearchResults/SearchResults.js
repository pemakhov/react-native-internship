import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setJokeIndex, setSearchKey } from '../../pages/jokes/jokeSlice';
import SearchResultsView from './SearchResultsView';

const SearchResults = () => {
  const dispatch = useDispatch();
  const { searchKey, searchResults } = useSelector((state) => state.jokes);
  const handleMouseDown = (index) => {
    dispatch(setJokeIndex(index));
    dispatch(setSearchKey(''));
  };

  return searchResults.length > 0 && (
    <SearchResultsView
      searchResults={searchResults}
      handleMouseDown={handleMouseDown}
      searchKey={searchKey}
    />
  );
};

export default SearchResults;
