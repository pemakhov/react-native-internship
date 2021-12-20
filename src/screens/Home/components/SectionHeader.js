import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';

function SectionHeader({ text }) {
  return (
    <View style={styles.sectionListHeaderContainer}>
      <Text style={styles.sectionListHeaderText}>{text}</Text>
    </View>
  );
}

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionHeader;
