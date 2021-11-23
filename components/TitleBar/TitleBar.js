import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const TitleBar = ({ title }) => (
  <View style={styles.bar}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

TitleBar.propTypes = {
  title: PropTypes.string,
};

export default TitleBar;
