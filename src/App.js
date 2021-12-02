import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Home from './screens/Home/Home';
import SpaceObject from './screens/SpaceObject/SpaceObject';
import About from './screens/About/About';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function GuideStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Destination" component={SpaceObject} />
    </Stack.Navigator>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Guide"
        component={GuideStackScreen}
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

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={TabScreen} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
