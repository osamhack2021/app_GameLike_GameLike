// 1. 오늘의 expected list 가져오기
//     post:   date
//     res:    date 값이 일치하는 같은 모든 expected data

import axios from 'axios';
import {Alert} from 'react-native';
import getDateString from 'src/Quest/Times/getDateString';
import {ExpectedData} from '..';
import testDatas from './expectedTestDatas';

export function reloadTodayExpected(): ExpectedData.DataType[] {
  let log = '';
  const date = getDateString();
  try {
    axios
      .post('http://52.231.66.60/auth/join', {date: date})
      .then(response => {
        try {
          log = 'get well:' + JSON.stringify(response.data);
          Alert.alert(JSON.stringify(response.data));
          //데이터 반환하기
          //arr = response.data
        } catch (e) {
          log = '일단 잘 됨';
        }

        return testDatas;
      })
      .catch(error => {
        if (error instanceof Error) {
          log = error.message;
        } else {
          log = 'error ocurred while getting expected datas';
        }
      });
  } catch (e) {
    if (e instanceof Error) {
      log = 'axios:' + e.message;
    } else {
      log = 'axios 실행 중 오류';
    }
    Alert.alert(log);
  }
  return [];
}

export default reloadTodayExpected;
