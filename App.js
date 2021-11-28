import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Home from './screens/Home/Home';
import SpaceObject from './screens/SpaceObject/SpaceObject';
import About from './screens/About/About';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function GuideStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Destination" component={SpaceObject} />
    </Stack.Navigator>
  );
}

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Guide"
          component={GuideStackScreen}
          options={{
            tabBarIcon: () => <Icon name="home" color="#000" size={30} />,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: () => (
              <Icon name="info-circle" color="#000" size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
