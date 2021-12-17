import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import DrawerNavigator from './navigator/DrawerNavigator';
import Loading from './screens/Loading/Loading';
import { retrieveTraveler } from './store/travelers/actions';
import { fetchSpaceObjects } from './store/spaceObjects/actions';

const App = () => {
  const loaded = useSelector((state) => state.spaceObjects.loaded);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveTraveler());
    dispatch(fetchSpaceObjects());
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      {loaded ? (
        <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
          <DrawerNavigator />
        </NavigationContainer>
      ) : (
        <Loading />
      )}
    </SafeAreaProvider>
  );
};

export default App;
