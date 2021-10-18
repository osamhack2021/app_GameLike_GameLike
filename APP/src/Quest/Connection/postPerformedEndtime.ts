// 5. performed endTime값 변경
//     post:   id, endTime
//     res:    성공 여부

import axios, {AxiosResponse} from 'axios';
import {Alert} from 'react-native';

type PostData = {
  userId: string;
  startTime: string;
  endTime: string;
};

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
    .post<PostData, AxiosResponse<any>>(
      'http://52.231.66.60/quest/updatePe',
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
