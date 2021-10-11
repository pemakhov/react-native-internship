import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNextJokeId, setPreviousJokeId, setJokeId } from './jokeSlice';

const JokeSwitchBar = () => {
  const dispatch = useDispatch();
  const jokesNumber = useSelector((state) => state.jokes.collection.length);

  return (
    <div>
      <button type="button" onClick={() => dispatch(setJokeId(0))}>{'<<'}</button>
      <button type="button" onClick={() => dispatch(setPreviousJokeId())}>{'<'}</button>
      <button type="button" onClick={() => dispatch(setNextJokeId())}>{'>'}</button>
      <button type="button" onClick={() => dispatch(setJokeId(jokesNumber - 1))}>{'>>'}</button>
    </div>
  );
};

export default JokeSwitchBar;
