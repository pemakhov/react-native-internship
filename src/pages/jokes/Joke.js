import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllJokes } from './jokeSlice';
import { PENDING } from '../../constants/loadingStates';
import JokeView from './JokeView';
import { getJokeText } from '../../libs/jokeLib';

const Joke = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllJokes());
  }, []);

  const { currentJokeIndex, collection, loading } = useSelector((state) => state.jokes);
  
  // The text of a joke
  let joke = '';

  if (loading === PENDING) {
    joke = 'Loading...';
  } else if (collection.length === 0) {
    // In case when no jokes were fetched
    joke = 'No jokes :(';
  } else {
    const jokeObject = collection[currentJokeIndex];
    joke = getJokeText(jokeObject);
  }

  return <JokeView joke={joke} />;
};

export default Joke;
