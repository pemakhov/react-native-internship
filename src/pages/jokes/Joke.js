import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNextJokeId, fetchAllJokes } from './jokeSlice';
import { PENDING } from '../../constants/loadingStates';
import { jokeTypes } from '../../constants/jokesApiInfo';

const Joke = () => {
  const dispatch = useDispatch();
  const { currentJokeId, collection, loading } = useSelector((state) => state.jokes);

  // The text of a joke
  let joke = '';

  if (loading === PENDING) {
    joke = 'Loading...';
  } else if (collection.length === 0) {
    // In case when no jokes were fetched
    joke = 'No jokes :(';
  } else {
    const jokeObject = collection[currentJokeId];
    // There are 'single' and 'twopart' types
    const { type } = jokeObject;
    joke = (type === jokeTypes.single)
      ? jokeObject.joke
      : `${jokeObject.setup}\n${jokeObject.delivery}`;
  }

  useEffect(() => {
    dispatch(fetchAllJokes());
  }, []);

  return (
    <div>
      <div>
        {joke}
      </div>
      <button type="button" onClick={() => dispatch(setNextJokeId())}>Next</button>
    </div>
  );
};

export default Joke;
