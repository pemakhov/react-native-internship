import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { THEME } from '../../constants/layout';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const { color, backgroundColor } = THEME.title;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor,
  },
  text: {
    fontSize: 20,
    color,
  }
})

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
