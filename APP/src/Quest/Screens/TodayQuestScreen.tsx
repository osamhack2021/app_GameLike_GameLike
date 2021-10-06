import React from 'react';
import {Text, View} from 'react-native';
import GetTodayString from '../Modules/GetTodayString';
import QuestByTime from '../Modules/QuestByTime';
import textStyles from '../Styles/QuestTextStyles';
import {QuestData} from '../Datas';

const ex: QuestData.DataType = {
  id: 0,
  name: '휴식',
  fieldName: '휴식',
  startTime: 0,
  date: 0,
  userId: '',
  isPerformed: 0,
};

export default function TodayQuestScreen() {
  const todayQuests: QuestData.DataType[] = [];
  const todayStr = GetTodayString();
  return (
    <View>
      <Text style={textStyles.small}>{todayStr}</Text>
      <Text style={textStyles.normal}>오늘의 퀘스트를 정해볼까요?</Text>
      <QuestByTime
        startHour={18}
        startMinute={0}
        endHour={18}
        endMinute={30}
        task="할일"
      />
    </View>
  );
}
