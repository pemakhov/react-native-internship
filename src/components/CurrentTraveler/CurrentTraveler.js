import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CurrentTraveler({ currentTraveler }) {
  return (
    <View>
      <Text>{currentTraveler.name}</Text>
    </View>
  );
}

function mapState(state) {
  return { currentTraveler: state.currentTraveler };
}

CurrentTraveler.propTypes = {
  currentTraveler: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default connect(mapState)(CurrentTraveler);
