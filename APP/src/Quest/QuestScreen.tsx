import React, {useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import CurrentQuestScreen from './Screens/CurrentQuestScreen';
import PrevQuestScreen from './Screens/PrevQuestScreen';
import TodayQuestScreen from './Screens/TodayQuestScreen';
import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {AppState, makeStore} from '../Store';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TodayNavigator from './Screens/TodayNavigator';
import ConnectScreen from './Connection/ConnectScreen';

const Stack = createStackNavigator();
export default function QuestScreen() {
  const prevTask = useSelector<AppState, boolean>(
    state => state.questScreenState.prevTaskChecked,
  );
  const curTask = useSelector<AppState, boolean>(
    state => state.questScreenState.todayTaskChecked,
  );

  return (
    <Stack.Navigator
      initialRouteName="TODAY"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CONNECTION" component={ConnectScreen} />
      <Stack.Screen name="TODAY" component={TodayNavigator} />
      <Stack.Screen name="CURRENT" component={CurrentQuestScreen} />
    </Stack.Navigator>
  );
}
