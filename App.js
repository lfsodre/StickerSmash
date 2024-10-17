import * as React from 'react';
import {} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import Login from './src/pages/Login'
import User from './src/pages/User'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="LOGIN PAGE"
          component={Login}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#292929',
              borderBottomWidth: 0,  // Remove a linha inferior do cabeçalho
              elevation: 0,          // Remove sombra no Android
            },
          }}
        />
        <Stack.Screen
          name="HOME PAGE"
          component={Home}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#333333',
              borderBottomWidth: 0,  // Remove a linha inferior do cabeçalho
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="USER PAGE"
          component={User}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#333333',
              borderBottomWidth: 0,  // Remove a linha inferior do cabeçalho
              elevation: 0,          // Remove sombra no Android
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*--PARA INICIAR A APLICAÇÃO--*/
/*-------npx expo start-------*/