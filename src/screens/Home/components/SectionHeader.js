import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from '../styles';

function SectionHeader({ text }) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        ...styles.sectionListHeaderContainer,
        backgroundColor: colors.background,
      }}>
      <Text style={{ ...styles.sectionListHeaderText, color: colors.text }}>
        {text}
      </Text>
    </View>
  );
}

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionHeader;
