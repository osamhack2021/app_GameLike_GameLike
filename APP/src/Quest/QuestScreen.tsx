import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CurrentQuestScreen from './CurrentQuestScreen/CurrentQuestScreen';
import PrevQuestScreen from './PrevQuestScreen/PrevQuestScreen';
import TodayQuestMakerScreen from './QuestDeciderScreen/QuestDeciderScreen';

export default function QuestTabSelector() {
  const [prevTaskConfirmed, setPrevTaskConfirmed] = useState(false);
  const [todayQuestProduced, setTodayQuestProduced] = useState(false);
  return (
    <ScrollView>
      <TodayQuestMakerScreen />
    </ScrollView>
    /*<ScrollView>
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
  );*/
  );
}
