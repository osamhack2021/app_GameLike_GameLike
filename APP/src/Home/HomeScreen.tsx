import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Alert,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../Store';
import {ExpectedData} from '../Quest/Datas';
import loadUncompletedPerformed from '../Quest/Connection/loadUncompletedPerformed';
import LevelComponent from '../Level/Components/LevelComponent';
import * as Style from '../Styles/HomeScreenStyles';

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
      <View style={styles.profile}>
        <Text>Profile Component</Text>
      </View>
      <View style={styles.level}>
        <LevelComponent />
      </View>
      <View style={styles.questHome}>
        <View style={styles.questTopView}>
          <Text style={styles.questTopText}>{topText}</Text>
        </View>
        <View style={styles.questMiddleView}>
          <View style={styles.questAvatarView}>
            <Image
              source={require('../../assets/images/avatar/avatar.png')}
              style={styles.questAvatar}
            />
          </View>
          <View style={styles.questButtonView}>
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
    </View>
  );
};

const styles = Style.homeStyle;

export default HomeScreen;
