import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setJokeId, setSearchKey } from '../../pages/jokes/jokeSlice';
import { getExcerpt } from '../../libs/jokeLib';

const SearchResults = () => {
  const dispatch = useDispatch();
  const { searchKey, searchResults } = useSelector((state) => state.jokes);
  const handleClick = (id) => {
    dispatch(setJokeId(id));
    dispatch(setSearchKey(''));
  };

  return searchResults.length > 0 && (
    <div className="search-results">
      {searchResults.map(
        (joke) => {
          const [text, index] = joke;
          return (
            <button type="button" key={text} onClick={() => handleClick(index)}>
              {getExcerpt(text, searchKey)}
            </button>
          );
        }
      )}
    </div>
  );
};

export default SearchResults;
