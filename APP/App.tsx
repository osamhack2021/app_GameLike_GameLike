import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from './src/StartScreen';
import LoginScreen from './src/LoginScreen';
import MainScreen from './src/MainScreen';

import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {AppState, makeStore} from './src/Store';

const Stack = createStackNavigator();
const store = makeStore();

export default function App() {
  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  );
}
