import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './StartScreen';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
// SplashScreen을 추가할지 고민중 (user_id가 저장되어 있는 경우 바로 MainScreen으로 이동하도록) => StartScreen으로 일단 대체

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="START"> 
        <Stack.Screen name="START" component={StartScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="LOGIN" component={LoginScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="MAIN" component={MainScreen} options={{ headerShown: false }}/>
      </Stack.Navigator> 
    </NavigationContainer>


  );
}
