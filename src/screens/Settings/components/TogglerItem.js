import React from 'react';
import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';

function TogglerItem({ title, value, onValueChange, disabled = false }) {
  return (
    <View style={styles.item.container}>
      <Text style={styles.item.text}>{title}</Text>
      <Switch onValueChange={onValueChange} value={value} disabled={disabled} />
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
