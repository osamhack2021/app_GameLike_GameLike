import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, Text, TextInput, View, StyleSheet, Alert} from 'react-native';
import QuestElement from '../Modules/QuestElement';
import textStyles from '../Styles/QuestTextStyles';
import {QuestData} from '../Datas';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../Store';
import {replaceTodayQuestsAction} from '../../Store';

//아직 데이터를 selector에 반영하는 것은 저장 안했음
export default function TodayQuestAdder({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const {index} = route.params;
  const [questName, setQuest] = useState('');
  const [fieldName, setField] = useState('');
  const dispatch = useDispatch();

  const quests = useSelector<AppState, QuestData.DataType[]>(
    state => state.questDatas.todayDatas,
  );

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
      //기존 redux 내 quest 배열을 replace할 배열 생성
      const cquests = [...quests];
      cquests[index] = {
        ...cquests[index],
        name: questName,
        fieldName: fieldName,
      };
      //redux dispatch
      dispatch(replaceTodayQuestsAction(cquests));
      nav.popToTop();
    },
    [dispatch, fieldName, questName, index, quests],
  );

  return (
    <View>
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
