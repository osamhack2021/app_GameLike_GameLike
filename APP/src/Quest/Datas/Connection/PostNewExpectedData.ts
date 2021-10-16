// 3. expected data 추가하기
//     post:   새로 추가할 expected data 정보(questName, hashTag, date, userId)

import axios from 'axios';
import {Alert} from 'react-native';
import {ExpectedData} from '..';
import testDatas from './expectedTestDatas';

type ReturnedExpected = {
  questName: string;
  hashTag: string;
  date: string;
};

//     res:    성공 여부
export default function postNewExpectedData(
  insertData: ExpectedData.DataType,
): boolean {
  let completed = false;
  const postData = {
    questName: insertData.questName,
    hashTag: insertData.hashTag,
    date: insertData.date,
    userId: 'test@n.n',
  };
  axios
    .post('http://52.231.66.60/quest/createEx', postData)
    .then(response => {
      completed = true;
      Alert.alert('post 성공');
    })
    .catch(error => {
      completed = false;
      if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        Alert.alert('error ocurred while getting expected datas');
      }
    });

  //testDatas.push(insertData);
  return completed;
}
