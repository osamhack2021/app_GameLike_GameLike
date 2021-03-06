// 2. expected list 가져오기
//     get:
//     res:    expected data 최신순으로 20개 가져오기

import axios, {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import getDateString from '../Times/getDateString';
import {ExpectedData} from '../Datas';
import {serverurl} from '../../serverurl';

export default async function loadRecentExpected(setLog: any, userId: string) {
  const result: ExpectedData.DataType[] = [];
  const ax = axios
    .post<{email: string}, AxiosResponse<any>>(serverurl + '/quest/expected', {
      email: userId,
    })
    .then((response: any) => {
      //Alert.alert(JSON.stringify(response.data));
      //데이터 반환하기
      try {
        const arr = JSON.parse(response.data);

        for (let i of arr) {
          const t: ExpectedData.DataType = {
            id: -1,
            questName: i.questName,
            hashTag: i.hashTag,
            date: i.date,
            userId: userId,
          };
          result.push(t);
        }
      } catch (e) {
        Alert.alert('전송받은 데이터 값 오류');
      }
      return result;
    })
    .catch((error: any) => {
      if (error instanceof Error) {
        setLog('error: ' + error.message);
      } else {
        setLog('error ocurred while getting expected datas');
      }
      Alert.alert('네트워크 에러');
      return result;
    });
  return ax;

  // return [
  //   {
  //     id: -1,
  //     questName: '물리학 공부',
  //     userId: 'test@n.n',
  //     date: getDateString(),
  //     hashTag: '전공',
  //   },
  //   {
  //     id: -1,
  //     questName: '근력 운동',
  //     userId: 'test@n.n',
  //     date: getDateString(),
  //     hashTag: '운동',
  //   },
  //   {
  //     id: -1,
  //     questName: '단어 외우기',
  //     userId: 'test@n.n',
  //     date: getDateString(),
  //     hashTag: '토익',
  //   },
  //   {
  //     id: -1,
  //     questName: '롤드컵 보고싶다',
  //     userId: 'test@n.n',
  //     date: getDateString(),
  //     hashTag: '롤드컵',
  //   },
  // ];
}
