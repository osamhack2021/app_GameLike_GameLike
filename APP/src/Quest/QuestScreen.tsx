import React, {useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import CurrentQuestScreen from './QuestExecuter/CurrentQuestScreen';
import PrevQuestScreen from './Screens/PrevQuestScreen';
import TodayQuestScreen from './QuestProducer/TodayQuestScreen';
import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {AppState, makeStore} from '../Store';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
