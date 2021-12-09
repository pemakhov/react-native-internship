import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import DrawerNavigator from './navigator/DrawerNavigator';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
      <DrawerNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
