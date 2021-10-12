import React from 'react';
import Joke from './Joke';
import JokeSwitchBar from './JokeSwitchBar';
import './JokeBoard.scss';

const JokeBoard = () => {
  return (
    <div className="board">
      <Joke />
      <JokeSwitchBar />
    </div>
  );
};

export default JokeBoard;
