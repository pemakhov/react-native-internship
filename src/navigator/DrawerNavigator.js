import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import About from '../screens/About/About';
import SignIn from '../screens/SignIn/SignIn';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="The Solar System Travel Guide">
      <Drawer.Screen
        name="The Solar System Travel Guide"
        component={TabNavigator}
      />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="SignIn" component={SignIn} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
