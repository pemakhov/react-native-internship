import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Bold from '../../../../components/Bold/Bold';
import styles from './styles';

const InfoRow = ({ infoKey, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
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
