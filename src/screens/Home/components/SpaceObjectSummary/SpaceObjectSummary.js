import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { texts } from '../../../../constants/texts';

const SpaceObjectSummary = ({ name, type, image, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.touchable}
      activeOpacity={0.9}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>
            {texts.spaceObjectSummary.type}: {type}
          </Text>
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
