import React, {useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import CurrentQuestScreen from './Screens/CurrentQuestScreen';
import PrevQuestScreen from './Screens/PrevQuestScreen';
import TodayQuestScreen from './Screens/TodayQuestScreen';
import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {AppState, makeStore} from '../Store';
import QuestScreenSelector from './QuestScreenSelector';

export default function QuestScreen() {
  const prevTask = useSelector<AppState, boolean>(
    state => state.questScreenState.prevTaskChecked,
  );
  const curTask = useSelector<AppState, boolean>(
    state => state.questScreenState.todayTaskChecked,
  );

  const [prevTaskConfirmed, setPrevTaskConfirmed] = useState(false);
  const [todayQuestProduced, setTodayQuestProduced] = useState(false);
  return (
    <View>
      <QuestScreenSelector />
      <ScrollView>
        {prevTask ? (
          curTask ? (
            <CurrentQuestScreen />
          ) : (
            <TodayQuestScreen />
          )
        ) : (
          <PrevQuestScreen />
        )}
        <TodayQuestScreen />
      </ScrollView>
    </View>
  );
}
