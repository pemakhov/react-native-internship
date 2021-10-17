import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import './SwitchBar.scss';

const SwitchBar = ({ setNextJokeIndex, setPreviousJokeIndex, setJokeIndex }) => {
  const dispatch = useDispatch();
  const lastJokeIndex = useSelector((state) => state.jokes.collection.length) - 1;
  const { currentJokeIndex } = useSelector((state) => state.jokes);
  const disabledBackward = (currentJokeIndex === 0) ? 'disabled' : '';
  const disabledForward = (currentJokeIndex === lastJokeIndex) ? 'disabled' : '';

  return (
    <div className="joke-switch">
      <Button
        classList={`switch-button left-button ${disabledBackward}`}
        handleClick={() => dispatch(setJokeIndex(0))}
        disabled={disabledBackward}
      >
        {'<<'}
      </Button>
      <Button
        classList={`switch-button ${disabledBackward}`}
        handleClick={() => dispatch(setPreviousJokeIndex())}
        disabled={disabledBackward}
      >
        {'<'}
      </Button>
      <Button
        classList={`switch-button ${disabledForward}`}
        handleClick={() => dispatch(setNextJokeIndex())}
        disabled={disabledForward}
      >
        {'>'}
      </Button>
      <Button
        classList={`switch-button right-button ${disabledForward}`}
        handleClick={() => dispatch(setJokeIndex(lastJokeIndex))}
        disabled={disabledForward}
      >
        {'>>'}
      </Button>
    </div>
  );
};

SwitchBar.propTypes = {
  setNextJokeIndex: PropTypes.func.isRequired,
  setPreviousJokeIndex: PropTypes.func.isRequired,
  setJokeIndex: PropTypes.func.isRequired,
};

export default SwitchBar;
