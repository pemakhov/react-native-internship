import React from 'react';
import PropTypes from 'prop-types';

const JokeView = ({ joke }) => {
  const paragraphs = joke
    .split('\n')
    .filter((line) => line)
    .map((line) => <p key={line.slice(0, 10)}>{line}</p>);

  return (
    <div>
      {paragraphs}
    </div>
  );
};

JokeView.propTypes = {
  joke: PropTypes.string.isRequired,
};

export default JokeView;
