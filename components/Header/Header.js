import React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title, styles }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    container: ViewPropTypes.style,
    text: ViewPropTypes.style,
  }).isRequired,
};

export default Header;
