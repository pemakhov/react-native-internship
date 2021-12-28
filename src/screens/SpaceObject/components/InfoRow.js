import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Bold from '../../../components/Bold/Bold';
import styles from '../styles';

const InfoRow = ({ infoKey, value }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.infoRowContainer}>
      <Text style={{ color: colors.text }}>
        <Bold>{infoKey}: </Bold>
        {value}
      </Text>
    </View>
  );
};

InfoRow.propTypes = {
  infoKey: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default InfoRow;
