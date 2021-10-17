import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import ExpectedElement from '../Components/ExpectedElement';
import textStyles from '../Styles/QuestTextStyles';
import {ExpectedData} from '../Datas';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../Store';
import {replaceExpectedAction} from '../../Store/Actions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import getTodayString from '../Times/getTodayString';
import {reloadTodayExpected} from '../Connection';
import {todayQuestScreenStyle} from '../../Styles/TodayQuestScreenStyles';

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

  const expects = useSelector<AppState, ExpectedData.DataType[]>(
    state => state.expectedDatas,
  );

  //expected reload 요청
  useEffect(() => {
    reloadTodayExpected().then(res => {
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
              style={styles.tco}
              onPress={() => {
                navigation.navigate('SELECTOR');
              }}>
              <Text>오늘의 퀘스트 추가하기</Text>
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
            style={styles.tco}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = todayQuestScreenStyle;
