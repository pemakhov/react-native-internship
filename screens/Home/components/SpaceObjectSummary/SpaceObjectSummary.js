import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SpaceObjectSummary = ({ name, type, image, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.touchable}
      activeOpacity={0.8}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>Type: {type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

SpaceObjectSummary.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  handlePress: PropTypes.func,
};

export default SpaceObjectSummary;
