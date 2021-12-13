import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';

function CurrentTraveler({ currentTraveler }) {
  const text =
    currentTraveler === null
      ? "We don't know your name :(\nBut you can sign in"
      : `Welcome, ${currentTraveler.name}`;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
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
  }),
};

CurrentTraveler.defaultProps = {
  currentTraveler: null,
};

export default connect(mapState)(CurrentTraveler);
