import * as React from 'react';
import HomeScreen from './Home/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
<<<<<<< HEAD
import TodayQuestScreen from './Quest/Screens/TodayQuestScreen';
import CurrentQuestScreen from './Quest/Screens/CurrentQuestScreen';
import PrevQuestScreen from './Quest/Screens/PrevQuestScreen';
import TodayNavigator from './Quest/Screens/TodayNavigator';
=======
import TodayNavigator from './Quest/QuestProducer/TodayNavigator';
>>>>>>> questEndScreen

const Stack = createStackNavigator();

export default function MainScreen() {
  return (
    <Stack.Navigator
      initialRouteName="HOME"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="TODAY" component={TodayNavigator} />
<<<<<<< HEAD
      <Stack.Screen name="CURRENT" component={CurrentQuestScreen} />
=======
>>>>>>> questEndScreen
    </Stack.Navigator>
  );
}
