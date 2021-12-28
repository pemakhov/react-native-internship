import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';
import { texts } from '../../../constants/texts';

const SpaceObjectSummary = ({ data, handlePress }) => {
  const { id, name, type, image } = data;
  const memoizedHandlePress = useCallback(handlePress, [id, name, handlePress]);

  return (
    <TouchableOpacity
      onPress={memoizedHandlePress}
      style={styles.touchable}
      activeOpacity={0.9}>
      <View style={styles.summaryContainer}>
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
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired,
  }),
  handlePress: PropTypes.func,
};

export default SpaceObjectSummary;
