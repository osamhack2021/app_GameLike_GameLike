//동시접속자 수 가져옴

import axios, {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import getDateString from '../Times/getDateString';
import {ExpectedData} from '../Datas';

export default async function loadDongjeob(hashTag: string, userId: string) {
  const result: ExpectedData.DataType[] = [];
  const ax = axios
    .post<{hashTag: string; userId: string}, AxiosResponse<any>>(
      'www.gamelike.best/quest/complete',
      {hashTag: hashTag},
    )
    .then((response: any) => {
      //Alert.alert(JSON.stringify(response.data));
      //데이터 반환하기
      try {
        return response.data.peopleWith;
      } catch (e) {
        Alert.alert('전송받은 데이터 값 오류');
      }
      return -1;
    })
    .catch((error: any) => {
      if (error instanceof Error) {
        Alert.alert('error: ' + error.message);
      } else {
        Alert.alert('error ocurred while getting expected datas');
      }
      Alert.alert('네트워크 에러');
      return -1;
    });
  return ax;
}
