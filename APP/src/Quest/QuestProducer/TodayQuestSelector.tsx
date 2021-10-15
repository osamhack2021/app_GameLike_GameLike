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
import {useSelector} from 'react-redux';
import insertExpected from 'src/connection/insertExpected';
import loadRecentQuests from '../Datas/Connection/loadRecentExpected';
import {AppState} from '../../Store';
import {ExpectedData, QuestData} from '../Datas';
import loadRecentExpected from '../Datas/Connection/loadRecentExpected';
import getDateString from '../Times/getDateString';

const TodayQuestSelector = ({navigation}: {navigation: any}) => {
  const [recentQuest, setRecent] = useState<ExpectedData.DataType[]>([]);
  const currentExpected = useSelector<AppState, ExpectedData.DataType[]>(
    state => state.expectedDatas,
  );

  //최근 애들 로드하기
  //겹치는 요소는 제외하고 로드하기
  //해당 엘리먼트 클릭하면 퀘스트 추가됨(서버로 데이터 보냄)
  useEffect(() => {
    const datas = loadRecentExpected();
    const results: ExpectedData.DataType[] = [];
    for (let i of datas) {
      let canPush = true;
      for (let j of currentExpected) {
        if (i.questName === j.questName && i.hashTag === j.hashTag) {
          canPush = false;
        }
      }
      if (canPush) {
        results.push({...i});
      }
    }
    setRecent(results);
  }, [currentExpected]);

  const postExpected = useCallback((data: ExpectedData.DataType) => {
    //insertExpected(data);
  }, []);

  return (
    <View>
      <Text>이 창에서 퀘스트를 선택하거나 추가해주세요</Text>
      <FlatList
        data={recentQuest}
        renderItem={ri => (
          <Button
            title={ri.item.questName + ' #' + ri.item.hashTag}
            onPress={() => {
              postExpected(ri.item);
              navigation.goBack();
            }}
          />
        )}
      />
      <TouchableOpacity
        style={styles.tco}
        onPress={() => navigation.navigate('ADDER')}>
        <Text>퀘스트 추가</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tco} onPress={() => navigation.goBack()}>
        <Text>뒤로</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 3},
});

export default TodayQuestSelector;
