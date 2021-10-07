import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import GetTodayString from '../Times/GetTodayString';
import QuestByTime from '../Modules/QuestByTime';
import textStyles from '../Styles/QuestTextStyles';
import {QuestData} from '../Datas';
import TodayQuestSelector from './TodayQuestSelector';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../Store';
import {insertTodayQuestsAction} from '../../Store';

const ex: QuestData.DataType = {
  id: 0,
  name: '휴식',
  fieldName: '휴식',
  startTime: 0,
  date: 0,
  userId: '',
  isPerformed: 0,
};

const during = 30; //각 퀘스트당 몇 분 진행할지

export default function TodayQuestScreen() {
  const dispatch = useDispatch();
  const today = 20211007;
  const userId = '';
  let curTime = 1800;
  //const [quests, setQuests] = useState<QuestData.DataType[]>(questInit());
  const quests = useSelector<AppState, QuestData.DataType[]>(
    state => state.questDatas.todayDatas,
  );
  useEffect(() => {
    const cquests: QuestData.DataType[] = [];
    for (let i = curTime; i < 2100; i += during) {
      if (i % 100 >= 60) {
        i -= 60;
        i += 100;
      }
      cquests.push({...ex, startTime: i, date: today, userId: userId});
    }
    dispatch(insertTodayQuestsAction(cquests));
  }, [curTime, dispatch]);

  const todayStr = GetTodayString();
  const [isSelection, setSelection] = useState(false);
  let selectedItem: QuestData.DataType = quests[0];
  return (
    <View>
      <Text style={textStyles.small}>{todayStr}</Text>
      <Text style={textStyles.normal}>오늘의 퀘스트를 정해볼까요?</Text>
      {isSelection ? <TodayQuestSelector item={selectedItem} /> : <></>}
      <FlatList
        data={quests}
        renderItem={({item}) => (
          <QuestByTime
            startTime={item.startTime}
            during={30}
            task={item.name}
            onPress={() => {
              setSelection(true);
              selectedItem = item;
            }}
          />
        )}
      />
    </View>
  );
}
