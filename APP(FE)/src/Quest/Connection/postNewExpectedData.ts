// 3. expected data 추가하기
//     post:   새로 추가할 expected data 정보(questName, hashTag, date, userId)

import axios, {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {serverurl} from '../../serverurl';
import {ExpectedData} from '../Datas';

type PostData = {
  questName: string;
  hashTag: string;
  date: string;
  userId: string;
};

//     res:    성공 여부
export default function postNewExpectedData(
  insertData: ExpectedData.DataType,
  userId: string,
) {
  let completed = false;
  const postData = {
    questName: insertData.questName,
    hashTag: insertData.hashTag,
    date: insertData.date,
    userId: userId,
  };
  const ax = axios
    .post<PostData, AxiosResponse<any>>(serverurl + '/quest/createEx', postData)
    .then((response: any) => {
      //Alert.alert('pnedlog:' + JSON.stringify(response.data));
      //const res = JSON.parse(response.data);
      const res = response.data;
      if (res.success) {
        return true;
      } else {
        throw Error(res.message);
      }
    })
    .catch((error: any) => {
      completed = false;
      if (error instanceof Error) {
        Alert.alert('pned: ' + error.message);
      } else {
        Alert.alert('error ocurred while getting expected datas');
      }
    });

  //testDatas.push(insertData);
  return ax;
}
