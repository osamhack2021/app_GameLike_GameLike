import React from 'react';
import CurrentQuestScreen from './QuestExecuter/CurrentQuestScreen';
import {createStackNavigator} from '@react-navigation/stack';
import TodayNavigator from './QuestProducer/TodayNavigator';
import ConnectScreen from './Connection/ConnectScreen';

const Stack = createStackNavigator();
export default function QuestScreen() {
  return (
    <Stack.Navigator
      initialRouteName="CONNECTION"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CONNECTION" component={ConnectScreen} />
      <Stack.Screen name="TODAY" component={TodayNavigator} />
      <Stack.Screen name="CURRENT" component={CurrentQuestScreen} />
    </Stack.Navigator>
  );
}
