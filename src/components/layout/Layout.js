import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="centred-container">
          Header
        </div>
      </header>
      <main>
        <div className="centred-container main-container">
          {children}
        </div>
      </main>
      <footer>
        <div className="centred-container">
          By Serhii Pemakhov for ONIX react-native internship 2021-2022
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
