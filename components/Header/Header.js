import React from 'react';
import { View, Text, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes, { shape } from 'prop-types';

const Header = ({ title, style }) => (
  <View style={style.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.shape({
    container: PropTypes.ViewPropTypes.style,
    text: PropTypes.ViewPropTypes.style,
  }).isRequired,
};

export default Header;
