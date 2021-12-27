import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import TogglerItem from './components/TogglerItem';
import { listTypes } from '../../constants/listTypes';
import { toggleListType } from '../../store/spaceObjects/actions';
import { colorThemes } from '../../constants/colorThemes';
import { toggleColorTheme } from '../../store/colorThemes/actions';
import styles from './styles';

function Settings() {
  const colorTheme = useSelector((state) => state.colorThemes.colorTheme);
  const listType = useSelector((state) => state.spaceObjects.listType);
  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container}>
      <TogglerItem
        title="Option List"
        value={listType === listTypes.SECTION}
        onValueChange={() => dispatch(toggleListType(listType))}
      />
      <TogglerItem
        title="Dark Color Theme"
        value={colorTheme === colorThemes.dark}
        onValueChange={() => dispatch(toggleColorTheme(colorTheme))}
      />
      <Text>{colorTheme}</Text>
    </ScrollView>
  );
}

export default Settings;
