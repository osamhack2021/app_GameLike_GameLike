import React, {useCallback, useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState, replaceExpectedAction, User} from '../../Store';
import {ExpectedData} from '../Datas';
import loadRecentExpected from '../Connection/loadRecentExpected';
import getDateString from '../Times/getDateString';
import postNewExpectedData from '../Connection/postNewExpectedData';
import {reloadTodayExpected} from '../Connection';
import {todayQuestScreenStyles} from '../Styles/todayQuestScreenStyles';
import textStyles from '../Styles/questTextStyles';

const TodayQuestSelector = ({navigation}: {navigation: any}) => {
  const [recentQuest, setRecent] = useState<ExpectedData.DataType[]>([]);
  const currentExpected = useSelector<AppState, ExpectedData.DataType[]>(
    state => state.expectedDatas,
  );
  const [log, setLog] = useState('');
  const [log2, setLog2] = useState('');
  const userData = useSelector<AppState, User>(state => state.user);

  //최근 애들 로드하기
  //겹치는 요소는 제외하고 로드하기
  //해당 엘리먼트 클릭하면 퀘스트 추가됨(서버로 데이터 보냄)
  useEffect(() => {
    loadRecentExpected(setLog, userData.email).then(datas => {
      //Alert.alert(userData.email);
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
  }, [currentExpected, userData]);

  const dispatch = useDispatch();
  const postExpected = useCallback(
    (data: ExpectedData.DataType) => {
      data.date = getDateString();
      postNewExpectedData(data, userData.email);

      reloadTodayExpected(userData.email).then(res => {
        dispatch(replaceExpectedAction(res));
      });
    },
    [dispatch, userData],
  );

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={textStyles.normal}>
          이 창에서 기존 퀘스트를 선택해주세요
        </Text>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.questAddButton}
            onPress={() => navigation.navigate('ADDER')}>
            <Text style={styles.questAddText}>신규 퀘스트 추가</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.middleView}>
        <FlatList
          data={recentQuest}
          renderItem={ri => (
            <Button
              title={'(#' + ri.item.hashTag + ') ' + ri.item.questName}
              color="e0e0e0"
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
          style={styles.endButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.questAddText}>뒤로</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = todayQuestScreenStyles;

export default TodayQuestSelector;
