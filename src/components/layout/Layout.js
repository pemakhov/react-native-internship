import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="centred-container">
          <div className="logo">
            {'{ jokes }'}
          </div>
        </div>
      </header>
      <main>
        <div className="centred-container main-container">
          {children}
        </div>
      </main>
      <footer>
        <div className="centred-container footer">
          <div className="footer__name">
            ONIX react-native internship 2021-2022
          </div>
          <div className="footer__copyright">
            by Serhii Pemakhov
          </div>
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
