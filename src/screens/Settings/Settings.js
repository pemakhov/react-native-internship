import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import TogglerItem from './components/TogglerItem';
import { listTypes } from '../../constants/listTypes';
import { toggleListType } from '../../store/spaceObjects/actions';
import { colorThemes, colorThemeSources } from '../../constants/colorThemes';
import {
  toggleColorTheme,
  toggleColorThemeSource,
} from '../../store/colorThemes/actions';
import styles from './styles';

function Settings() {
  const { colorTheme, colorThemeSource } = useSelector(
    (state) => state.colorThemes
  );

  const { listType } = useSelector((state) => state.spaceObjects);
  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container}>
      <TogglerItem
        title="Option List "
        value={listType === listTypes.SECTION}
        onValueChange={() => dispatch(toggleListType(listType))}
      />
      <TogglerItem
        title="Let user choose color theme "
        value={colorThemeSource === colorThemeSources.user}
        onValueChange={() => dispatch(toggleColorThemeSource(colorThemeSource))}
      />
      <TogglerItem
        title="Dark Color Theme"
        value={colorTheme === colorThemes.dark}
        onValueChange={() => dispatch(toggleColorTheme(colorTheme))}
        disabled={colorThemeSource === colorThemeSources.device}
      />
    </ScrollView>
  );
}

export default Settings;
