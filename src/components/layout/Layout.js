import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        Header
      </header>
      <main>
        {children}
      </main>
      <footer>
        Footer
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
