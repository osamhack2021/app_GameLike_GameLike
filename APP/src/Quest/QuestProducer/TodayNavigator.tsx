import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TodayQuestScreen from './TodayQuestScreen';
import TodayQuestSelector from './TodayQuestSelector';
import TodayQuestAdder from './TodayQuestAdder';
import QuestEndScreen from '../Screens/QuestEndScreen';
import CurrentQuestScreen from '../QuestExecuter/CurrentQuestScreen';

const Stack = createStackNavigator();

export default function TodayNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SCREEN"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SCREEN" component={TodayQuestScreen} />
      <Stack.Screen name="SELECTOR" component={TodayQuestSelector} />
      <Stack.Screen name="ADDER" component={TodayQuestAdder} />
      <Stack.Screen name="CURRENT" component={CurrentQuestScreen} />
      <Stack.Screen name="QUESTEND" component={QuestEndScreen} />
    </Stack.Navigator>
  );
}
