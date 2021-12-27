import React from 'react';
import { useSelector } from 'react-redux';
import { colorThemes } from '../constants/colorThemes';
import RNBootSplash from 'react-native-bootsplash';
import DrawerNavigator from './DrawerNavigator';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

function MainNavigator() {
  const { colorTheme } = useSelector((state) => state.colorThemes);

  const MyLight = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#eee',
    },
  };

  const MyDark = {
    ...DarkTheme,
  };

  return (
    <NavigationContainer
      theme={colorTheme === colorThemes.light ? MyLight : MyDark}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default MainNavigator;
