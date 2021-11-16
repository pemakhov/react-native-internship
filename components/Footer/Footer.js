import React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const Footer = ({ brand, slogan, styles }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>{brand}</Text>
      <Text style={styles.slogan}>{slogan}</Text>
    </View>
  );
};

Footer.propTypes = {
  brand: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    container: ViewPropTypes.style,
    brand: Text.propTypes.style,
    slogan: Text.propTypes.style,
  }).isRequired,
};

export default Footer;
