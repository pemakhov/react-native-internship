import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/store';
import RNBootSplash from 'react-native-bootsplash';
import DrawerNavigator from './navigator/DrawerNavigator';

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);

export default App;
