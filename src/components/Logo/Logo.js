import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = ({ text }) => {
  return (
    <div className="logo">
      <a href="/">
        {text}
      </a>
    </div>
  );
};

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
