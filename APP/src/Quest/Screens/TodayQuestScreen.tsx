import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import QuestByTime from '../Modules/QuestByTime';
import textStyles from '../Styles/QuestTextStyles';
import {ExpectedData, QuestData} from '../Datas';
import TodayQuestSelector from './TodayQuestSelector';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../Store';
import {insertTodayQuestsAction} from '../../Store/Actions';
import {useNavigation} from '@react-navigation/core';
import getDateFullString from '../Times/getDateFullString';
import getDate from '../Times/getDate';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';

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
  const dispatch = useDispatch();
  const userId = '';
  const quests = useSelector<AppState, QuestData.DataType[]>(
    state => state.questDatas.todayDatas,
  );
  useEffect(() => {
    //현재 시각 이후부터 21시까지의 QuestData를 생성함
    const cquests: QuestData.DataType[] = [];
    const curDate = getDate();
    curDate.setSeconds(0);
    curDate.setMilliseconds(0);
    if (curDate.getMinutes() >= 30) {
      curDate.setMinutes(30);
    } else {
      curDate.setMinutes(0);
    }
    while (curDate.getHours() < 21) {
      cquests.push({
        ...ex,
        lastDate: getDateFullString(curDate),
        userId: userId,
      });
      curDate.setMinutes(curDate.getMinutes() + 30);
    }
    dispatch(insertTodayQuestsAction(cquests));
  }, [dispatch]);
  const todayStr = getDate().toLocaleDateString();

  const [log, setLog] = useState('');

  const postExpectedDatas = useCallback(
    (postQuests: ExpectedData.DataType[], nav: any) => {
      for (let i of postQuests) {
        axios
          .post('http://52.231.66.60/quest/create', {
            name: i.,
            fieldName: i.fieldName,
            date: i.lastDate,
          })
          .then(response => {
            //Alert.alert(JSON.stringify(response.data));
            nav.navigate('CURRENT');
          })
          .catch(error => {
            setLog(JSON.stringify(error));
          });
      }
    },
    [],
  );

  return (
    <ScrollView>
      <Text style={textStyles.small}>{todayStr}</Text>
      <Text style={textStyles.normal}>오늘의 퀘스트를 정해볼까요?</Text>
      <FlatList
        data={quests}
        renderItem={ri => (
          <QuestByTime
            date={ri.item.lastDate}
            during={30}
            task={ri.item.name}
            onPress={() => navigation.navigate('SELECTOR', {index: ri.index})}
          />
        )}
      />
      <TouchableOpacity
        style={styles.tco}
        onPress={() => {
          postExpectedDatas(quests, navigation);
        }}>
        <Text>확인</Text>
      </TouchableOpacity>
      <Text>{log}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tco: {height: 50, borderWidth: 1, alignContent: 'center'},
});
