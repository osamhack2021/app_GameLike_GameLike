import React from 'react';
import {Text, View} from 'react-native';
import GetTodayString from '../Times/GetTodayString';
import QuestByTime from '../Modules/QuestByTime';
import textStyles from '../Styles/QuestTextStyles';

export default function QuestAdder() {
  const todayStr = GetTodayString();
  return (
    <View>
      <Text style={textStyles.normal}>QuestAdder</Text>
    </View>
  );
}
