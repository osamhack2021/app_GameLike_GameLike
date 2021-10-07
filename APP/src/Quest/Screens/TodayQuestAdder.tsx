import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, Text, TextInput, View, StyleSheet} from 'react-native';
import GetTodayString from '../Times/GetTodayString';
import QuestByTime from '../Modules/QuestByTime';
import textStyles from '../Styles/QuestTextStyles';
import {QuestData} from '../Datas';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function TodayQuestAdder() {
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
        value={questName}
        placeholder="#분야"
        onChangeText={text => setQuest(text)}
      />
      <TextInput
        value={questName}
        placeholder="소요시간"
        onChangeText={text => setQuest(text)}
      />
      <TouchableOpacity style={styles.tco}>
        <Text>입력 완료</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 3},
});
