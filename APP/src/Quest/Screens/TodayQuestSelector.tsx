import React, {useCallback, useMemo, useState, FC} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import QuestByTime from '../Modules/QuestByTime';
import textStyles from '../Styles/QuestTextStyles';
import {QuestData} from '../Datas';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {AppState} from '../../Store';
import get2Digits from '../Times/get2Digits';
import getHoursColonMinutes from '../Times/getHoursColonMinutes';

const TodayQuestSelector = ({
  route,
  navigation,
}: {
  navigation: any;
  route: any;
}) => {
  const {index} = route.params;

  const quests = useSelector<AppState, QuestData.DataType[]>(
    state => state.questDatas.todayDatas,
  );
  const element = quests[index];
  const date = new Date(element.date);

  return (
    <View>
      <Text>이 창에서 퀘스트를 선택해주세요</Text>
      <Text>{getHoursColonMinutes(date) + '에 수행할 퀘스트'}</Text>
      <TouchableOpacity
        style={styles.tco}
        onPress={() => navigation.navigate('ADDER', {index: index})}>
        <Text>퀘스트 추가</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tco} onPress={() => navigation.goBack()}>
        <Text>확인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 3},
});

export default TodayQuestSelector;
