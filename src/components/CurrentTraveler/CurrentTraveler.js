import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';

function CurrentTraveler({ traveler }) {
  const { colors } = useTheme();
  const text =
    traveler === null
      ? "We don't know your name :(\nBut you can sign in"
      : `Welcome, ${traveler}`;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.negative.background,
      }}>
      <Text style={{ ...styles.text, color: colors.negative.text }}>
        {text}
      </Text>
    </View>
  );
}

function mapState(state) {
  return { traveler: state.travelers.traveler };
}

CurrentTraveler.propTypes = { traveler: PropTypes.string };
CurrentTraveler.defaultProps = { traveler: null };

export default connect(mapState)(CurrentTraveler);
