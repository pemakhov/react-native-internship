import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import SignIn from '../screens/SignIn/SignIn';
import Settings from '../screens/Settings/Settings';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="The Solar System Travel Guide">
      <Drawer.Screen
        name="The Solar System Travel Guide"
        component={TabNavigator}
      />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="SignIn" component={SignIn} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
