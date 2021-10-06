import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GetTodayString from '../Modules/GetTodayString';
import textStyles from '../Styles/QuestTextStyles';

export default function CurrentQuestScreen() {
  const todayStr = GetTodayString();

  const hashTag = '#코딩'; //db에서 받아오기
  const taskStr = '알고리즘 문제풀기'; //db에서 받아오기

  const runWith = 12;
  const runWithStr = '명이 같이 ' + hashTag + ' 중이에요!';
  return (
    <View>
      <Text style={textStyles.small}>{todayStr}</Text>
      <View>
        <Text style={textStyles.small}>지금 할 일은?</Text>
        <Text style={textStyles.normal}>{taskStr}</Text>
        <Text style={textStyles.small}>{hashTag}</Text>
      </View>
      <Text>CurrentQuestViewer</Text>
    </View>
  );
}
