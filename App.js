import * as React from 'react';
import {} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import Login from './src/pages/Login'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: '#FFF',
            headerStyle: {backgroundColor: '#292929'},
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: '#FFF',
            headerStyle: {backgroundColor: '#292929'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}