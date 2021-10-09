import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import QuestByTime from '../Modules/QuestByTime';
import textStyles from '../Styles/QuestTextStyles';
import {QuestData} from '../Datas';
import TodayQuestSelector from './TodayQuestSelector';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../Store';
import {insertTodayQuestsAction} from '../../Store';
import {useNavigation} from '@react-navigation/core';
import getDateString from '../Times/getDateString';

const ex: QuestData.DataType = {
  id: 0,
  name: '휴식',
  fieldName: '휴식',
  date: '',
  userId: '',
  isPerformed: 0,
};

const during = 30; //각 퀘스트당 몇 분 진행할지

export default function TodayQuestScreen({navigation}: {navigation: any}) {
  const dispatch = useDispatch();
  const userId = '';
  //const [quests, setQuests] = useState<QuestData.DataType[]>(questInit());
  const quests = useSelector<AppState, QuestData.DataType[]>(
    state => state.questDatas.todayDatas,
  );
  useEffect(() => {
    //현재 시각 이후부터 21시까지의 QuestData를 생성함
    const cquests: QuestData.DataType[] = [];
    const curDate = new Date();
    if (curDate.getMinutes() >= 30) {
      curDate.setMinutes(60);
    } else {
      curDate.setMinutes(30);
    }
    while (curDate.getHours() < 21) {
      cquests.push({...ex, date: getDateString(curDate), userId: userId});
      curDate.setMinutes(curDate.getMinutes() + 30);
    }
    dispatch(insertTodayQuestsAction(cquests));
  }, [dispatch]);

  const todayStr = new Date().toLocaleDateString();

  return (
    <View>
      <Text style={textStyles.small}>{todayStr}</Text>
      <Text style={textStyles.normal}>오늘의 퀘스트를 정해볼까요?</Text>
      <FlatList
        data={quests}
        renderItem={ri => (
          <QuestByTime
            date={ri.item.date}
            during={30}
            task={ri.item.name}
            onPress={() => navigation.navigate('SELECTOR', {index: ri.index})}
          />
        )}
      />
    </View>
  );
}
