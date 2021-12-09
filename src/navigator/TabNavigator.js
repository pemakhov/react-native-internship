import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import About from '../screens/About/About';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Guide"
        component={StackNavigator}
        options={{
          tabBarIcon: () => <Icon name="home" color="#000" size={30} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: () => <Icon name="info-circle" color="#000" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
