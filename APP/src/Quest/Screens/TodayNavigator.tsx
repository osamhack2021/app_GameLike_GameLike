import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TodayQuestScreen from './TodayQuestScreen';
import TodayQuestSelector from './TodayQuestSelector';
import TodayQuestAdder from './TodayQuestAdder';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SCREEN">
        <Stack.Screen name="SCREEN" component={TodayQuestScreen} />
        <Stack.Screen name="SELECTOR" component={TodayQuestSelector} />
        <Stack.Screen name="ADDER" component={TodayQuestAdder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
