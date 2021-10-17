import React from 'react';

const button = ({
  classList = '',
  handleClick,
  disabled = false,
  children
}) => {
  return (
    <button
      type="button"
      className={classList}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default button;
