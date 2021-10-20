// 6. performed endTime이 null인 값 가져오기(퀘스트 수행 중 종료했을 경우 대비)
//     get:
//     res:    endTime이 null인 data 배열(대부분 경우 length가 0개 또는 1개 예상)

import axios from 'axios';
import {Alert} from 'react-native';
import {serverurl} from '../../serverurl';
import {PerformedData} from '../Datas';

export default function loadUncompletedPerformed() {
  const result: PerformedData.DataType[] = [];

  const ax = axios
    .get(serverurl + '/quest/performedE')
    .then((response: any) => {
      try {
        const arr = JSON.parse(response.data);

        for (let i of arr) {
          const t: PerformedData.DataType = {
            id: -1,
            questName: i.questName,
            hashTag: i.hashTag,
            date: i.date,
            userId: 'test@n.n',
            startTime: i.startTime,
            endTime: i.startTime,
            detail: i.detail,
          };
          result.push(t);
        }
      } catch (e) {
        Alert.alert('전송받은 데이터 값에 오류가 있습니다.');
      }
      //Alert.alert(JSON.stringify(result));
      if (result.length > 0) {
        return result;
      } else {
        return null;
      }
    })
    .catch((error: any) => {
      if (error instanceof Error) {
        Alert.alert('error: ' + error.message);
      } else {
        Alert.alert('error: 네트워크 오류');
      }
      return null;
    });

  return ax;
}
