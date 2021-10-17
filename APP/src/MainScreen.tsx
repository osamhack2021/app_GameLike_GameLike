import * as React from 'react';
import HomeScreen from './Home/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import TodayQuestScreen from './Quest/QuestProducer/TodayQuestScreen';
import CurrentQuestScreen from './Quest/QuestExecuter/CurrentQuestScreen';
import PrevQuestScreen from './Quest/Screens/PrevQuestScreen';
import TodayNavigator from './Quest/QuestProducer/TodayNavigator';

const Stack = createStackNavigator();

export default function MainScreen() {
  return (
    <Stack.Navigator
      initialRouteName="HOME"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="TODAY" component={TodayNavigator} />
    </Stack.Navigator>
  );
}
