import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, Text, TextInput, View, StyleSheet} from 'react-native';
import GetTodayString from '../Times/GetTodayString';
import QuestByTime from '../Modules/QuestByTime';
import textStyles from '../Styles/QuestTextStyles';
import {QuestData} from '../Datas';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
  const [during, setDuring] = useState('');
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
      <TextInput
        value={during}
        placeholder="소요시간"
        onChangeText={text => setDuring(text)}
      />
      <TouchableOpacity
        style={styles.tco}
        onPress={() => navigation.popToTop()}>
        <Text>입력 완료</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 3},
});
