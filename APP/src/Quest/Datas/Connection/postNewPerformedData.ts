// 4. performed data 추가하기
//     post:   새로 추가할 performed 정보(questName, hashTag, date, startTime, endTime, detail, userId)
//     res:    해당 performed data id 값

import axios from 'axios';
import {Alert} from 'react-native';
import {PerformedData} from '..';

export default async function postNewPerformedData(
  insertData: PerformedData.DataType,
) {
  const postData = {
    questName: insertData.questName,
    hashTag: insertData.hashTag,
    date: insertData.date,
    startTime: insertData.startTime,
    detail: insertData.detail,
    userId: 'test@n.n',
  };
  const ax = axios
    .post('http://52.231.66.60/quest/createPe', postData)
    .then(response => {
      return true;
    })
    .catch(error => {
      if (error instanceof Error) {
        Alert.alert('error: ' + error.message);
      } else {
        Alert.alert('error ocurred while getting expected datas');
      }
      return false;
    });

  //testDatas.push(insertData);
  return ax;
}
