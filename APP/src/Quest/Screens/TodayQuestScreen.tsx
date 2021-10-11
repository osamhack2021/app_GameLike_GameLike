import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import QuestElement from '../Modules/QuestElement';
import textStyles from '../Styles/QuestTextStyles';
import {ExpectedData, QuestData} from '../Datas';
import TodayQuestSelector from './TodayQuestSelector';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../Store';
import {
  insertTodayQuestsAction,
  replaceExpectedAction,
} from '../../Store/Actions';
import {useNavigation} from '@react-navigation/core';
import getDateFullString from '../Times/getDateFullString';
import getDate from '../Times/getDate';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import reloadExpected from '../../connection/reloadExpected';
import getTodayString from '../Times/getTodayString';

const ex: QuestData.DataType = {
  id: 0,
  name: '휴식',
  fieldName: '휴식',
  lastDate: '',
  userId: '',
};

const during = 30; //각 퀘스트당 몇 분 진행할지

export default function TodayQuestScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  //1. reload expects
  //2. expect에 따른 FlatList 출력

  //expected reload 요청
  const todayStr = getTodayString(new Date());
  const dispatch = useDispatch();

  const expects = useSelector<AppState, ExpectedData.DataType[]>(
    state => state.expectedDatas,
  );

  useEffect(() => {
    const [rl, e] = reloadExpected();
    dispatch(replaceExpectedAction(e));
  }, [dispatch, expects]);

  return (
    <ScrollView>
      <Text style={textStyles.small}>{todayStr}</Text>
      <Text style={textStyles.normal}>오늘의 퀘스트를 정해볼까요?</Text>
      <FlatList
        data={expects}
        renderItem={ri => <QuestElement name={ri.item.name} />}
      />
      <TouchableOpacity
        style={styles.tco}
        onPress={() => {
          navigation.navigate('SELECTOR');
        }}>
        <Text>퀘스트 추가하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tco} onPress={() => {}}>
        <Text>확인</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tco: {height: 50, borderWidth: 1, alignContent: 'center'},
});
