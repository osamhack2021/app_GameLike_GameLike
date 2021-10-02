import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from './src/StartScreen';
import LoginScreen from './src/LoginScreen';
import MainScreen from './src/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MAIN">
        <Stack.Screen
          name="START"
          component={StartScreen}
          options={{title: '시작화면'}}
        />
        <Stack.Screen
          name="LOGIN"
          component={LoginScreen}
          options={{title: '로그인화면'}}
        />
        <Stack.Screen
          name="MAIN"
          component={MainScreen}
          options={{title: '메인화면'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
