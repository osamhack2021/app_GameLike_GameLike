// 5. performed endTime값 변경
//     post:   id, endTime
//     res:    성공 여부

import axios from 'axios';
import {Alert} from 'react-native';

export default function postPerformedEndtime(
  userId: string,
  startTime: string,
  endTime: string,
) {
  const postData = {
    userId: userId,
    startTime: startTime,
    endTime: endTime,
  };
  const ax = axios
    .post('http://52.231.66.60/quest/updatePe', postData)
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
