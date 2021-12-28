import React from 'react';
import { useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';
import { colorThemes, colorThemeSources } from '../constants/colorThemes';
import RNBootSplash from 'react-native-bootsplash';
import DrawerNavigator from './DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MyDarkTheme from '../themes/dark';
import MyLightTheme from '../themes/light';

function MainNavigator() {
  const { colorTheme: userTheme, colorThemeSource } = useSelector(
    (state) => state.colorThemes
  );

  const deviceTheme = useColorScheme();

  const theme =
    colorThemeSource === colorThemeSources.device && deviceTheme
      ? deviceTheme
      : userTheme;

  return (
    <NavigationContainer
      theme={theme === colorThemes.light ? MyLightTheme : MyDarkTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default MainNavigator;
