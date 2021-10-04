import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CurrentQuestScreen from './CurrentQuestScreen';
import PrevQuestScreen from './PrevQuestScreen';
import TodayQuestMakerScreen from './TodayQuestMakerScreen';

export default function QuestTabSelector() {
  const [prevTaskConfirmed, setPrevTaskConfirmed] = useState(false);
  const [todayQuestProduced, setTodayQuestProduced] = useState(false);
  return (
    <ScrollView>
      {prevTaskConfirmed ? (
        todayQuestProduced ? (
          <CurrentQuestScreen />
        ) : (
          <TodayQuestMakerScreen />
        )
      ) : (
        <PrevQuestScreen />
      )}
    </ScrollView>
  );
}
