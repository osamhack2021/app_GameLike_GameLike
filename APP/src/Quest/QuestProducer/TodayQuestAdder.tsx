import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, Text, TextInput, View, StyleSheet, Alert} from 'react-native';
import ExpectedElement from './ExpectedElement';
import textStyles from '../Styles/QuestTextStyles';
import {ExpectedData, QuestData} from '../Datas';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import getDateString from '../Times/getDateString';
import {insertExpectedAction, replaceExpectedAction} from '../../Store/Actions';
import postNewExpectedData from '../Datas/Connection/postNewExpectedData';
import {reloadTodayExpected} from '../Datas/Connection';

//아직 데이터를 selector에 반영하는 것은 저장 안했음
export default function TodayQuestAdder({navigation}: {navigation: any}) {
  const [questName, setQuest] = useState('');
  const [fieldName, setField] = useState('');
  const dispatch = useDispatch();
  const [log, setLog] = useState('');

  // const quests = useSelector<AppState, ExpectedData.DataType[]>(
  //   state => state.questDatas.todayDatas,
  // );

  //퀘스트 추가 버튼을 눌렀을 경우
  //1. 입력 데이터 검증
  //2. redux todayDatas 수정 후 dispatch
  //3. gototop

  const onQuestAdd = useCallback(
    nav => {
      //입력 데이터 검증
      if (questName === '') {
        Alert.alert('퀘스트 이름을 입력해주세요!');
        return;
      }
      if (fieldName === '') {
        Alert.alert('분야 이름을 입력해주세요!');
        return;
      }
      const today = getDateString();
      const data: ExpectedData.DataType = {
        id: -1,
        questName: questName,
        hashTag: fieldName,
        userId: 'testid',
        date: today,
      };
      postNewExpectedData(data);

      //expected reload 요청
      reloadTodayExpected().then(res => {
        dispatch(replaceExpectedAction(res));
      });

      nav.popToTop();
    },
    [fieldName, questName, dispatch],
  );

  return (
    <View>
      <Text>{'log: ' + log}</Text>
      <View>
        <Text>추가할 퀘스트의 정보를 입력해주세요</Text>
      </View>
      <TextInput
        value={questName}
        placeholder="퀘스트 이름"
        onChangeText={text => setQuest(text)}
      />
      <TextInput
        value={fieldName}
        placeholder="#분야"
        onChangeText={text => setField(text)}
      />
      <TouchableOpacity
        style={styles.tco}
        onPress={() => {
          onQuestAdd(navigation);
        }}>
        <Text>입력 완료</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 3},
});
