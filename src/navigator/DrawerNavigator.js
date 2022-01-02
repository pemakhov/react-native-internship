import React from 'react';
import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import SignIn from '../screens/SignIn/SignIn';
import Settings from '../screens/Settings/Settings';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="The Solar System Travel Guide"
      screenOptions={{ headerTintColor: colors.text }}>
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
