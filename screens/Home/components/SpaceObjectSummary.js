import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const SpaceObjectSummary = ({ name, type }) => (
  <View>
    <Text>Name: {name}</Text>
    <Text>Type: {type}</Text>
  </View>
);

SpaceObjectSummary.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SpaceObjectSummary;
