import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SpaceObjectSummary = ({ name, type }) => {
  const handlePress = () => console.log('pressed');
  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>Type: {type}</Text>
      </View>
    </TouchableHighlight>
  );
};

SpaceObjectSummary.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SpaceObjectSummary;
