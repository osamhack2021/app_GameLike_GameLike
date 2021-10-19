// 4. performed data 추가하기
//     post:   새로 추가할 performed 정보(questName, hashTag, date, startTime, endTime, detail, userId)
//     res:    해당 performed data id 값

import axios, {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {PerformedData} from '../Datas';

type PostData = {
  questName: string;
  hashTag: string;
  date: string;
  startTime: string;
  detail: string;
  userId: string;
};

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
    .post<PostData, AxiosResponse<any>>(
      'http://52.231.66.60/quest/createPe',
      postData,
    )
    .then((response: any) => {
      const res = response.data;
      if (res.success) {
        return true;
      } else {
        throw Error(res.message);
      }
    })
    .catch((error: any) => {
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
