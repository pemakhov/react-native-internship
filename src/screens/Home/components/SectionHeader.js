import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from '../styles';

function SectionHeader({ text }) {
  const { colors } = useTheme();
  const { sectionList: sectionListStyles } = styles;

  return (
    <View
      style={{
        ...sectionListStyles.headerContainer,
        backgroundColor: colors.background,
      }}>
      <Text style={{ ...sectionListStyles.headerText, color: colors.text }}>
        {text}
      </Text>
    </View>
  );
}

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionHeader;
