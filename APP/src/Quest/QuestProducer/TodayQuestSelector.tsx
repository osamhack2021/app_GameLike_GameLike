import React, {useCallback, useState, useEffect} from 'react';
import {FlatList, Text, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {AppState, replaceExpectedAction} from '../../Store';
import {ExpectedData} from '../Datas';
import loadRecentExpected from '../Datas/Connection/loadRecentExpected';
import getDateString from '../Times/getDateString';
import postNewExpectedData from '../Datas/Connection/postNewExpectedData';
import {reloadTodayExpected} from '../Datas/Connection';
import {todayQuestSelectorStyles} from '../../Styles/TodayQuestSelectorStyles';

const TodayQuestSelector = ({navigation}: {navigation: any}) => {
  const [recentQuest, setRecent] = useState<ExpectedData.DataType[]>([]);
  const currentExpected = useSelector<AppState, ExpectedData.DataType[]>(
    state => state.expectedDatas,
  );
  const [log, setLog] = useState('');
  const [log2, setLog2] = useState('');

  //최근 애들 로드하기
  //겹치는 요소는 제외하고 로드하기
  //해당 엘리먼트 클릭하면 퀘스트 추가됨(서버로 데이터 보냄)
  useEffect(() => {
    loadRecentExpected(setLog).then(datas => {
      const results: ExpectedData.DataType[] = [];
      for (let i of datas) {
        let canPush = true;
        for (let j of currentExpected) {
          if (i.questName === j.questName && i.hashTag === j.hashTag) {
            canPush = false;
          }
        }
        for (let j of results) {
          if (i.questName === j.questName && i.hashTag === j.hashTag) {
            canPush = false;
          }
        }
        if (canPush) {
          results.push({...i});
        }
      }

      setRecent(results);
    });
  }, [currentExpected]);

  const dispatch = useDispatch();
  const postExpected = useCallback(
    (data: ExpectedData.DataType) => {
      data.date = getDateString();
      postNewExpectedData(data);

      reloadTodayExpected().then(res => {
        dispatch(replaceExpectedAction(res));
      });
    },
    [dispatch],
  );

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text>이 창에서 퀘스트를 선택하거나 추가해주세요</Text>
      </View>
      <View style={styles.middleView}>
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
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.tco}
          onPress={() => navigation.navigate('ADDER')}>
          <Text>퀘스트 추가</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tco}
          onPress={() => navigation.goBack()}>
          <Text>뒤로</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = todayQuestSelectorStyles;

export default TodayQuestSelector;
