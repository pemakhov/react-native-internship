import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './screens/Loading/Loading';
import MainNavigator from './navigator/MainNavigator';
import { retrieveTraveler } from './store/travelers/actions';
import {
  fetchSpaceObjects,
  retrieveListType,
} from './store/spaceObjects/actions';
import {
  retrieveColorTheme,
  retrieveColorThemeSource,
} from './store/colorThemes/actions';

const App = () => {
  const loaded = useSelector((state) => state.spaceObjects.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveColorThemeSource());
    dispatch(retrieveColorTheme());
    dispatch(retrieveTraveler());
    dispatch(retrieveListType());
    dispatch(fetchSpaceObjects());
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      {loaded ? <MainNavigator /> : <Loading />}
    </SafeAreaProvider>
  );
};

export default App;
