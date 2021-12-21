import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleListType } from '../../../store/spaceObjects/actions';
import { listTypes } from '../../../constants/listTypes';
import { View, Text, Switch } from 'react-native';
import styles from '../styles';

function ListTypeToggler() {
  const listType = useSelector((state) => state.spaceObjects.listType);
  const dispatch = useDispatch();

  return (
    <View style={styles.listTypeTogglerContainer}>
      <Text style={styles.listTypeTogglerText}>Toggle List Type: </Text>
      <Switch
        onValueChange={() => dispatch(toggleListType(listType))}
        value={listType === listTypes.SECTION}
      />
    </View>
  );
}

export default ListTypeToggler;
