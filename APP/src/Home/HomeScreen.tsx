import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Button, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../Store';
import {ExpectedData} from '../Quest/Datas';
import axios from 'axios';
import reloadExpected from '../connection/reloadExpected';
import {reloadExpectedAction, replaceExpectedAction} from '../Store/Actions';
import {reloadTodayExpected} from '../Quest/Datas/Connection';
import loadUncompletedPerformed from '../Quest/Datas/Connection/loadUncompletedPerformed';
import LevelComponent from '../Level/LevelComponent';

//1. 처음 로드할 때 expected quests 가져와야함
//(연습할 땐 db 대신 static에서 load, empty array와 ex array 만들어서 가져오기)
//1. redux에서 expected load
//2. length: 0이면 db에서 load
//2.1. axios를 이용하여 date, userId가 같은 expected 값 load
//3. db에서 load한 값을 redux에 dispatch
//4. expected의 length가 0이면 canQuestAdd = false;

const HomeScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const [topText, setTopText] = useState('오늘의 퀘스트를 만들어주세요!');

  const [canQuestAdd, setCanQuestAdd] = useState(true);
  const [canDoQuest, setCanDoQuest] = useState(true);
  const [log, setLog] = useState('');

  //expected reload 요청
  const datas = useSelector<AppState, ExpectedData.DataType[]>(
    state => state.expectedDatas,
  );
  useEffect(() => {
    //dispatch(replaceExpectedAction(reloadTodayExpected()));/
    loadUncompletedPerformed().then(res => {
      if (res !== null) {
        setLog(JSON.stringify(res));
      } else {
        setLog('불러올 내용이 없습니다');
      }
    });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View>
        <Text>Profile Component</Text>
      </View>
      <View>
        <LevelComponent />
      </View>
      <View>
        <Text>{topText}</Text>
        <View>
          <Text>Avatar</Text>
        </View>
        <View>
          <Button
            title="퀘스트 수행하기"
            disabled={!canQuestAdd}
            onPress={() => {
              navigation.navigate('TODAY');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;