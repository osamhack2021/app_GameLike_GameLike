import {HeaderStyleInterpolators} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../Store';
import {QuestData} from '../Datas';
import textStyles from '../Styles/QuestTextStyles';
import getDate from '../Times/getDate';
import getTodayString from '../Times/getTodayString';

const emptyQuest: QuestData.DataType = {
  id: 0,
  name: '현재 퀘스트가 없습니다.',
  fieldName: '',
  date: '',
  userId: '',
  isPerformed: 0,
};

export default function CurrentQuestScreen() {
  //현재 할 일 불러오기
  const curDate = getDate();
  const todayStr = getTodayString(getDate());
  const dispatch = useDispatch();
  const userId = '';
  const quests = useSelector<AppState, QuestData.DataType[]>(
    state => state.questDatas.todayDatas,
  );

  const getCurrentQuest = useCallback(
    (qs: QuestData.DataType[], date: Date) => {
      for (let q of qs) {
        const l = getDate(q.date);
        const r = getDate(q.date);
        r.setMinutes(r.getMinutes() + 30);
        Alert.alert('l: ' + l);
        Alert.alert('r: ' + r);
        Alert.alert('d: ' + date);
        Alert.alert('l<d: ' + String(l < date) + ' r>d: ' + String(r > date));
        if (l < date && r > date) {
          return q;
        }
      }
      return null;
    },
    [],
  );

  const curQuest = getCurrentQuest(quests, curDate) || emptyQuest;

  const hashTag = curQuest.fieldName
    ? '#' + curQuest.fieldName
    : '퀘스트를 생성해주세요!'; //db에서 받아오기
  const taskStr = curQuest.name; //db에서 받아오기

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
    </View>
  );
}
