import {HeaderStyleInterpolators} from '@react-navigation/stack';
import React, {FC, useCallback, useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../Store';
import {ExpectedData, PerformedData, QuestData} from '../Datas';
import postPerformedEndtime from '../Datas/Connection/postPerformedEndtime';
import postNewPerformedData from '../Datas/Connection/postNewPerformedData';
import textStyles from '../Styles/QuestTextStyles';
import getDate from '../Times/getDate';
import getTimeString from '../Times/getTimeString';
import getTodayString from '../Times/getTodayString';

export function CurrentQuestScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  //현재 할 일 불러오기
  const [log, setLog] = useState('');
  const todayStr = getTodayString();
  const dispatch = useDispatch();
  const expected = route.params.expected;

  const hashTagText =
    expected.hashTag !== '' ? '#' + expected.hashTag : '퀘스트를 생성해주세요!';
  const taskStr = expected.questName;

  const [isPerfoming, setIsPerforming] = useState(false); //수행중 여부
  const [performedId, setPerformedId] = useState(-1);
  const [startTime, setStartTime] = useState('');
  const [detailText, setDetailText] = useState('');

  const onStart = useCallback((exp: ExpectedData.DataType, details: string) => {
    //1. 데이터 제작하기
    //2. 서버로 전송하기
    //3. then 넘어오면 수행 시작
    const curDate = getDate();
    const performed: PerformedData.DataType = {
      id: 0,
      questName: exp.questName,
      hashTag: exp.hashTag,
      date: getTodayString(curDate),
      userId: 'testid',
      startTime: getTimeString(curDate),
      endTime: getTimeString(curDate),
      detail: details,
    };
    postNewPerformedData(performed).then(() => {
      setStartTime(performed.startTime);
      setPerformedId(performed.id);
      setIsPerforming(true);
    });
  }, []);

  const onEnd = useCallback(
    (userIdValue: string, startTimeValue: string, endTimeValue: string) => {
      //서버에 끝 데이터 보내기 (performedId 체크하기)
      //then 넘어오면 수행 종료 후 rerender

      postPerformedEndtime(userIdValue, startTimeValue, endTimeValue).then(
        () => {
          setIsPerforming(false);
          setLog(userIdValue + ',' + startTimeValue + ',' + endTimeValue);
        },
      );
    },
    [],
  );

  const onDetailChanged = useCallback(text => {
    setDetailText(text);
  }, []);

  const runWith = 12;
  const runWithStr = runWith + '명이 같이 ' + hashTagText + ' 중이에요!';
  return (
    <View>
      <Text>{log} </Text>
      <Text style={textStyles.small}>{todayStr}</Text>
      <View>
        <Text style={textStyles.small}>지금 할 일은?</Text>
        <Text style={textStyles.normal}>{taskStr}</Text>
        <Text style={textStyles.small}>{hashTagText}</Text>
      </View>
      <View>
        <Text>{runWithStr}</Text>
      </View>
      <View>
        <Text>{/*수행 시간*/}</Text>
      </View>
      <View>
        <TextInput
          value={detailText}
          placeholder="설명을 적어주세요"
          onChangeText={onDetailChanged}
          editable={!isPerfoming}
        />
      </View>
      <View>
        <Button
          title="수행 시작!"
          onPress={() => {
            onStart(expected, detailText);
          }}
        />
        <Button
          title="수행 종료.."
          onPress={() => {
            onEnd('test@n.n', startTime, getTimeString());
          }}
        />
      </View>
    </View>
  );
}
export default CurrentQuestScreen;
