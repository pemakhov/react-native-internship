import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import './Layout.scss';

const Layout = ({ children }) => {
  const logoText = '{ jokes }';
  const searchPlaceholder = 'search a joke...';

  return (
    <>
      <header>
        <div className="centred-container header">
          <Logo text={logoText} />
          <Search placeholder={searchPlaceholder} />
          <SearchResults />
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
            ONIX React Native Internship 2021-2022
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
