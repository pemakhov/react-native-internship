import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ text }) => {
  return (
    <div className="logo">
      {text}
    </div>
  );
};

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
