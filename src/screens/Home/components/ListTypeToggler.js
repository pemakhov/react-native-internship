import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleListType } from '../../../store/spaceObjects/actions';
import { View, Text, Switch } from 'react-native';

function ListTypeToggler() {
  const listType = useSelector((state) => state.spaceObjects.listType);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Toggle List Type: </Text>
      <Switch
        onValueChange={() => dispatch(toggleListType())}
        value={listType}
      />
    </View>
  );
}

export default ListTypeToggler;
