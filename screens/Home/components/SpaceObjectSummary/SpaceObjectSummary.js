import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SpaceObjectSummary = ({ name, type, image }) => {
  const handlePress = () => console.log('pressed');
  return (
    <TouchableHighlight onPress={handlePress} style={styles.touchable}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>Type: {type}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

SpaceObjectSummary.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default SpaceObjectSummary;
