import React, {useCallback, useState} from 'react';
import {Text, View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {ExpectedData} from '../Datas';
import {useDispatch} from 'react-redux';
import getDateString from '../Times/getDateString';
import {replaceExpectedAction} from '../../Store/Actions';
import postNewExpectedData from '../Connection/postNewExpectedData';
import {reloadTodayExpected} from '../Connection';
import {todayQuestScreenStyles} from '../Styles/TodayQuestScreenStyles';
import textStyles from '../Styles/QuestTextStyles';
import {TextInput} from 'react-native-paper';

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

      postNewExpectedData(data).then((res: any) => {
        //expected reload 요청
        reloadTodayExpected()
          .then(r => {
            dispatch(replaceExpectedAction(r));
          })
          .then(() => nav.popToTop());
      });
    },
    [fieldName, questName, dispatch],
  );

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={textStyles.normal}>
          추가할 퀘스트의 정보를 입력해주세요
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          underlineColor="#000000"
          outlineColor="#000000"
          selectionColor="#000000"
          value={questName}
          placeholder="퀘스트 이름 입력"
          onChangeText={text => setQuest(text)}
        />
        <View style={{marginVertical: 5}}>
          <TextInput
            underlineColor="#000000"
            outlineColor="#000000"
            selectionColor="#000000"
            value={fieldName}
            placeholder="#분야 입력"
            onChangeText={text => setField(text)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.endButton}
        onPress={() => {
          onQuestAdd(navigation);
        }}>
        <Text style={styles.questAddText}>입력 완료</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = todayQuestScreenStyles;
