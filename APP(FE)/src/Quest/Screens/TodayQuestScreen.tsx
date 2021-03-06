import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import ExpectedElement from '../Components/ExpectedElement';
import textStyles from '../Styles/questTextStyles';
import {ExpectedData} from '../Datas';
import {useDispatch, useSelector} from 'react-redux';
import {AppState, User} from '../../Store';
import {replaceExpectedAction} from '../../Store/Actions';
import getTodayString from '../Times/getTodayString';
import {reloadTodayExpected} from '../Connection';
import {todayQuestScreenStyles} from '../Styles/todayQuestScreenStyles';
import {QuestEndScreenProps} from './QuestEndScreen';

const during = 30; //각 퀘스트당 몇 분 진행할지

export default function TodayQuestScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  //1. reload expects
  //2. expect에 따른 FlatList 출력
  const todayStr = getTodayString(new Date());
  const dispatch = useDispatch();
  const [log, setLog] = useState('');
  const userData = useSelector<AppState, User>(state => state.user);

  const expects = useSelector<AppState, ExpectedData.DataType[]>(
    state => state.expectedDatas,
  );

  //expected reload 요청
  useEffect(() => {
    reloadTodayExpected(userData.email).then(res => {
      dispatch(replaceExpectedAction(res));
    });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={textStyles.small}>{todayStr}</Text>
        <Text style={textStyles.normal}>오늘의 퀘스트를 정해볼까요?</Text>
        <View style={styles.centerView}>
          <View style={styles.tcoView}>
            <TouchableOpacity
              style={styles.questAddButton}
              onPress={() => {
                navigation.navigate('SELECTOR');
              }}>
              <Text style={styles.questAddText}>오늘의 퀘스트 추가하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.middleView}>
        <FlatList
          data={expects}
          renderItem={ri => (
            <ExpectedElement
              name={ri.item.questName}
              hashTag={ri.item.hashTag}
              onPress={() =>
                navigation.navigate('CURRENT', {expected: ri.item})
              }
            />
          )}
        />
      </View>

      <View style={styles.bottomView}>
        <View style={styles.tcoView}>
          <TouchableOpacity
            style={styles.endButton}
            onPress={() => {
              const pr: QuestEndScreenProps = {
                questName: '테스트',
                takenExp: 30,
                takenTime: '조금',
              };
              //navigation.replace('QUESTEND', {props: pr});

              navigation.goBack();
            }}>
            <Text style={styles.questAddText}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = todayQuestScreenStyles;
