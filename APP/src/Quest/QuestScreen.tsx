import React, {useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import CurrentQuestScreen from './Screens/CurrentQuestScreen';
import PrevQuestScreen from './Screens/PrevQuestScreen';
import TodayQuestScreen from './Screens/TodayQuestScreen';
import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {AppState, makeStore} from '../Store';
import QuestScreenSelector from './QuestScreenSelector';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TodayNavigator from './Screens/TodayNavigator';

export default function QuestScreen() {
  const prevTask = useSelector<AppState, boolean>(
    state => state.questScreenState.prevTaskChecked,
  );
  const curTask = useSelector<AppState, boolean>(
    state => state.questScreenState.todayTaskChecked,
  );

  return (
    <View>
      <Text>hi</Text>
    </View>
  );
  // return (
  //   <View>
  //     <Stack.Navigator>
  //       <Stack.Screen name="today" component={TodayQuestScreen} />
  //       <Stack.Screen name="current" component={CurrentQuestScreen} />
  //     </Stack.Navigator>
  //   </View>
  // );
}
