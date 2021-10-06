import React, {useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import CurrentQuestScreen from './Screens/CurrentQuestScreen';
import PrevQuestScreen from './Screens/PrevQuestScreen';
import QuestDeciderScreen from './Screens/QuestDeciderScreen';
import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {AppState, makeStore} from '../Store';
import QuestScreenSelector from './QuestScreenSelector';

export default function QuestScreen() {
  let str = 'a';
  try {
    const prevTask = useSelector<AppState, boolean>(
      state => state.questScreenState.prevTaskChecked,
    );
  } catch (error) {
    if (error instanceof Error) {
      str = error.message;
    } else {
      str = '에러도안뜨냐 무슨';
    }
  }
  // const curTask = useSelector<AppState, boolean>(
  //   state => state.questScreenState.todayTaskChecked,
  // );

  const [prevTaskConfirmed, setPrevTaskConfirmed] = useState(false);
  const [todayQuestProduced, setTodayQuestProduced] = useState(false);
  // return (
  //   <View>
  //     <QuestScreenSelector />
  //     <ScrollView>
  //       {prevTask ? (
  //         curTask ? (
  //           <CurrentQuestScreen />
  //         ) : (
  //           <QuestDeciderScreen />
  //         )
  //       ) : (
  //         <PrevQuestScreen />
  //       )}
  //       <QuestDeciderScreen />
  //     </ScrollView>
  //   </View>
  // );
  return (
    <View>
      <Text>{str}</Text>
    </View>
  );
}
