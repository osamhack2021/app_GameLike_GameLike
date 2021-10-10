import * as React from 'react';
import HomeScreen from './Home/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import TodayQuestScreen from './Quest/Screens/TodayQuestScreen';
import CurrentQuestScreen from './Quest/Screens/CurrentQuestScreen';
import PrevQuestScreen from './Quest/Screens/PrevQuestScreen';

const Stack = createStackNavigator();

export default function MainScreen() {
  return (
    <Stack.Navigator
      initialRouteName="HOME"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PREV" component={PrevQuestScreen} />
      <Stack.Screen name="TODAY" component={TodayQuestScreen} />
      <Stack.Screen name="CURRENT" component={CurrentQuestScreen} />
    </Stack.Navigator>
  );
}
