import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Settings from '../screens/Settings/Settings';
import SignIn from '../screens/SignIn/SignIn';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Guide"
        component={StackNavigator}
        options={{
          tabBarIcon: () => (
            <Icon name="home" color={colors.primary} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Icon name="sliders" color={colors.primary} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Sign In"
        component={SignIn}
        options={{
          tabBarIcon: () => (
            <Icon name="sign-in" color={colors.primary} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
