import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './footerStyles';

const Footer = ({ brand, slogan }) => {
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
};

export default Footer;
