import React from 'react';
import PropTypes from 'prop-types';

const JokeView = ({ joke }) => {
  const paragraphs = joke
    .split('\n')
    .filter((line) => line)
    .map((line) => <p key={line}>{line}</p>);

  return (
    <div className="joke">
      {paragraphs}
    </div>
  );
};

JokeView.propTypes = {
  joke: PropTypes.string.isRequired,
};

export default JokeView;
