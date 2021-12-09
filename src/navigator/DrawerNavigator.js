import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About/About';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={TabNavigator} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
