import React from 'react';
import {Text, View} from 'react-native';
import GetTodayString from '../Modules/GetTodayString';
import textStyles from '../Styles/QuestTextStyles';

export default function TodayQuestMakerScreen() {
  const todayStr = GetTodayString();
  return (
    <View>
      <Text style={textStyles.small}>{todayStr}</Text>
      <Text style={textStyles.normal}>오늘의 퀘스트를 정해볼까요?</Text>
    </View>
  );
}
