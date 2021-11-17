import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './headerStyles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
