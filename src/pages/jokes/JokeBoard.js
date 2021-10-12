import React from 'react';
import Joke from './Joke';
import JokeSwitchBar from './JokeSwitchBar';

const JokeBoard = () => {
  return (
    <div className="centred-container main-container">
      <Joke />
      <JokeSwitchBar />
    </div>
  );
};

export default JokeBoard;
