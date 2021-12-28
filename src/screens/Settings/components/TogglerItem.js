import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from '../styles';

function TogglerItem({ title, value, onValueChange, disabled = false }) {
  const { colors } = useTheme();

  return (
    <View style={styles.item.container}>
      <Text style={{ ...styles.item.text, color: colors.text }}>{title}</Text>
      <Switch
        trackColor={{
          false: colors.switch.track.false,
          true: colors.switch.track.true,
        }}
        thumbColor={
          disabled ? colors.switch.thumb.disabled : colors.switch.thumb.enabled
        }
        onValueChange={onValueChange}
        value={value}
        disabled={disabled}
      />
    </View>
  );
}

TogglerItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onValueChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default TogglerItem;
