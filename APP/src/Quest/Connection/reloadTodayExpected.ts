// 1. 오늘의 expected list 가져오기
//     get
//     res:    date 값이 일치하는 같은 모든 expected data

import axios, {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import getDateString from '../Times/getDateString';
import {ExpectedData} from '../Datas';
import {serverurl} from '../../serverurl';

type DateWrapper = {
  date: string;
};

export async function reloadTodayExpected() {
  const date = getDateString();
  const result: ExpectedData.DataType[] = [];

  const ax = axios
    .post<DateWrapper, AxiosResponse<string>>(
      serverurl + '/quest/expectedToday',
      {
        date: date,
      },
    )
    .then((response: any) => {
      try {
        const arr = JSON.parse(response.data);

        for (let i of arr) {
          const t: ExpectedData.DataType = {
            id: -1,
            questName: i.questName,
            hashTag: i.hashTag,
            date: i.date,
            userId: 'test@n.n',
          };
          result.push(t);
        }
      } catch (e) {
        Alert.alert('전송받은 데이터 값 오류');
      }
      //Alert.alert(JSON.stringify(result));
      return result;
    })
    .catch((error: any) => {
      if (error instanceof Error) {
        Alert.alert('error: ' + error.message);
      } else {
        Alert.alert('error: 네트워크 오류');
      }
      return result;
    });

  return ax;
}

export default reloadTodayExpected;
