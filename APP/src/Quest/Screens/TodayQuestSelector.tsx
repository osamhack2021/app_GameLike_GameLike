import React, {useCallback, useMemo, useState, FC, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import insertExpected from 'src/connection/insertExpected';
import loadRecentQuests from 'src/connection/loadRecentQuests';
import {ExpectedData, QuestData} from '../Datas';
import getDateString from '../Times/getDateString';

const TodayQuestSelector = ({
  route,
  navigation,
}: {
  navigation: any;
  route: any;
}) => {
  const {index} = route.params;
  const [recentQuest, setRecent] = useState<ExpectedData.DataType[]>([]);

  useEffect(() => {
    const [log, rq] = loadRecentQuests();
    const today = getDateString();
    for (let i of rq) {
      recentQuest.push({
        id: 0,
        userId: '',
        questId: i.id,
        date: today,
        name: i.name,
      });
    }
  }, [recentQuest]);

  const postExpected = useCallback((data: ExpectedData.DataType) => {
    insertExpected(data);
  }, []);

  return (
    <ScrollView>
      <Text>이 창에서 퀘스트를 선택해주세요</Text>
      <FlatList
        data={recentQuest}
        renderItem={ri => (
          <Button
            title={ri.item.name}
            onPress={() => {
              postExpected(ri.item);
              navigation.goBack();
            }}
          />
        )}
      />
      <TouchableOpacity
        style={styles.tco}
        onPress={() => navigation.navigate('ADDER', {index: index})}>
        <Text>퀘스트 추가</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tco} onPress={() => navigation.goBack()}>
        <Text>뒤로</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 3},
});

export default TodayQuestSelector;
