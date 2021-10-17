import React from 'react';
import Joke from './Joke';
import SwitchBar from '../../components/SwitchBar/SwitchBar';
import Counter from '../../components/Counter/Counter';
import { setNextJokeIndex, setPreviousJokeIndex, setJokeIndex } from './jokeSlice';
import './JokeBoard.scss';

const JokeBoard = () => {
  return (
    <div className="board">
      <Counter />
      <Joke />
      <SwitchBar
        setNextJokeIndex={setNextJokeIndex}
        setPreviousJokeIndex={setPreviousJokeIndex}
        setJokeIndex={setJokeIndex}
      />
    </div>
  );
};

export default JokeBoard;
