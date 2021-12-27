import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import DrawerNavigator from './DrawerNavigator';

function MainNavigator() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#eee',
    },
  };

  return (
    <NavigationContainer
      theme={MyTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default MainNavigator;
