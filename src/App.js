import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import TabNavigator from './navigator/TabNavigator';
import { retrieveTraveler } from './store/travelers/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveTraveler());
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
