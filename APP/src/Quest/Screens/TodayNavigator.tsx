import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TodayQuestScreen from './TodayQuestScreen';
import TodayQuestSelector from './TodayQuestSelector';
import TodayQuestAdder from './TodayQuestAdder';

const Stack = createStackNavigator();

export default function TodayNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SCREEN" component={TodayQuestScreen} />
    </Stack.Navigator>
  );
}
