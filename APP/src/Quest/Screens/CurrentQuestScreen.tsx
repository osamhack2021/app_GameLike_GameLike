import React, {useCallback, useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {ExpectedData, PerformedData} from '../Datas';
import postPerformedEndtime from '../Connection/postPerformedEndtime';
import postNewPerformedData from '../Connection/postNewPerformedData';
import getDate from '../Times/getDate';
import getTimeString from '../Times/getTimeString';
import getTodayString from '../Times/getTodayString';
import postGrowExp from '../../Level/Connections/postGrowExp';
import {QuestEndScreenProps} from './QuestEndScreen';
import get2Digits from '../Times/get2Digits';
import loadDongjeob from '../Connection/loadDongjeob';
import {todayQuestScreenStyles} from '../Styles/todayQuestScreenStyles';
import {textStyles} from '../Styles/questTextStyles';
import {currentQuestStyles} from '../Styles/currentQuestStyles';
import {TextInput} from 'react-native-paper';
import {AppState, loginExpAction, User} from '../../Store';
import axios, {AxiosResponse} from 'axios';
import {getLevelFromExp} from '../../Level/Functions/LevelFunctions';
import {serverurl} from '../../serverurl';

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

  let expected: any;
  try {
    expected = route.params.expected;
  } catch (e) {
    expected = {
      hashTag: 'error',
      questName: '퀘스트를 불러오지 못했습니다.',
    };
  }

  const hashTagText =
    expected.hashTag !== '' ? '#' + expected.hashTag : '퀘스트를 생성해주세요!';
  const taskStr = expected.questName;

  const [isPerfoming, setIsPerforming] = useState(false); //수행중 여부
  const [performedId, setPerformedId] = useState(-1);
  const [startTime, setStartTime] = useState('');
  const [detailText, setDetailText] = useState('');

  const [runWithStr, setRunWithStr] = useState('');
  const userData = useSelector<AppState, User>(state => state.user);

  const onClickUserinfo = useCallback(() => {
    axios
      .post<{email: string}, AxiosResponse<string>>(serverurl + '/profiles', {
        email: userData.email,
      })
      .then(response => {
        try {
          let jsonData = response.data;
          let obj = JSON.parse(jsonData);
          Alert.alert(jsonData);
          const exp = obj.user.exp;
          const [lv, x] = getLevelFromExp(exp);
          //Alert.alert(exp);
          dispatch(loginExpAction(obj.user.exp));
        } catch (e) {
          if (e instanceof Error) {
            setLog('일단 잘 됨: ' + e.message);
          }
        }
      })
      .catch(error => {
        if (error instanceof Error) {
          setLog(error.message);
        } else {
          setLog('에러다 에러');
        }
      });
  }, [dispatch, userData]);

  const onStart = useCallback(
    (
      exp: ExpectedData.DataType,
      details: string,
      performing: boolean,
      hash: string,
      user: User,
    ) => {
      //1. 데이터 제작하기
      //2. 서버로 전송하기
      //3. then 넘어오면 수행 시작
      if (performing) {
        return;
      }
      const curDate = getDate();
      const performed: PerformedData.DataType = {
        id: 0,
        questName: exp.questName,
        hashTag: exp.hashTag,
        date: getTodayString(curDate),
        userId: user.email,
        startTime: getTimeString(curDate),
        endTime: getTimeString(curDate),
        detail: details,
      };
      postNewPerformedData(performed, user.email).then(() => {
        setStartTime(performed.startTime);
        setPerformedId(performed.id);
        setIsPerforming(true);

        loadDongjeob(exp.hashTag, user.email).then(res => {
          if (res > 0) {
            setRunWithStr(res + '명이 같이 ' + hash + ' 중이에요!');
          } else {
            setRunWithStr('');
          }
        });
      });
    },
    [],
  );

  const expCompute = useCallback((start: string, end: string) => {
    const s = start.split(':');
    const e = end.split(':');
    const r: number[] = [];
    for (let i = 0; i < 3; ++i) {
      r[i] = parseInt(e[i], 10) - parseInt(s[i], 10);
    }
    const result = (r[0] * 60 * 60 + r[1] * 60 + r[2]) / 2;
    return result;
  }, []);

  const duringCompute = useCallback(
    (start: string, end: string = getTimeString()) => {
      const cur = end;
      const s = start.split(':');
      const e = cur.split(':');
      const r: number[] = [];
      for (let i = 0; i < 3; ++i) {
        r[i] = parseInt(e[i], 10) - parseInt(s[i], 10);
      }
      for (let i = 1; i < 3; ++i) {
        if (r[i] < 0) {
          r[i - 1] -= 1;
          r[i] += 60;
        }
      }
      return get2Digits(r[0]) + ':' + get2Digits(r[1]) + ':' + get2Digits(r[2]);
    },
    [],
  );

  const onEnd = useCallback(
    (
      userIdValue: string,
      startTimeValue: string,
      endTimeValue: string,
      performing: boolean,
      nav: any,
    ) => {
      //서버에 끝 데이터 보내기 (performedId 체크하기)
      //then 넘어오면 수행 종료 후 rerender

      if (!performing) {
        return;
      }
      const resultExp = expCompute(startTimeValue, endTimeValue);

      postPerformedEndtime(userIdValue, startTimeValue, endTimeValue).then(
        () => {
          postGrowExp(userData.email, resultExp).then(() => {
            setIsPerforming(false);
            setLog(userIdValue + ',' + startTimeValue + ',' + endTimeValue);
            const pr: QuestEndScreenProps = {
              questName: expected.questName,
              takenExp: resultExp,
              takenTime: duringCompute(startTimeValue, endTimeValue),
            };
            //Alert.alert('성공, 경험치: ' + resultExp);
            onClickUserinfo();
            nav.replace('QUESTEND', {props: pr});
          });
        },
      );
    },
    [expCompute, duringCompute, expected, userData],
  );

  const onDetailChanged = useCallback(text => {
    setDetailText(text);
  }, []);

  return (
    <View style={todayQuestScreenStyles.container}>
      <Text style={textStyles.small}>{todayStr}</Text>
      <View style={styles.topView}>
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
          placeholder="이 퀘스트의 세부 설명을 적어주세요"
          onChangeText={onDetailChanged}
          editable={!isPerfoming}
        />
      </View>
      <View style={currentQuestStyles.buttonView}>
        <Button
          title="수행 시작!"
          onPress={() => {
            onStart(expected, detailText, isPerfoming, hashTagText, userData);
          }}
          disabled={isPerfoming}
        />
        <View style={styles.button}>
          <Button
            title="수행 종료.."
            color="#ff1744"
            onPress={() => {
              onEnd(
                userData.email,
                startTime,
                getTimeString(),
                isPerfoming,
                navigation,
              );
            }}
            disabled={!isPerfoming}
          />
        </View>
      </View>
    </View>
  );
}

const questStyles = todayQuestScreenStyles;
const styles = currentQuestStyles;
export default CurrentQuestScreen;
