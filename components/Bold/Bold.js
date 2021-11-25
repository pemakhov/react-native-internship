import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Bold = ({ children }) => <Text style={styles}>{children}</Text>;

Bold.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Bold;
