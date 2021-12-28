import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';

const Title = ({ text }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: colors.primary }}>{text}</Text>
    </View>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
