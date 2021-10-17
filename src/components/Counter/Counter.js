import React from 'react';
import { useSelector } from 'react-redux';
import './Counter.scss';

const Counter = () => {
  const page = useSelector((state) => state.jokes.currentJokeIndex) + 1;
  const pagesTotal = useSelector((state) => state.jokes.collection.length);

  return (
    <div className="pages-counter">
      {`${page} / ${pagesTotal}`}
    </div>
  );
};

export default Counter;
