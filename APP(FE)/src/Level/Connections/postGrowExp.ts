//증가할 exp값 보냄
import axios, {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {serverurl} from '../../serverurl';

type PostData = {
  email: string;
  exp: number;
};

type ObtainedData = {
  message: string;
  success: boolean;
};

export default function postGrowExp(userId: string, growExp: number) {
  const postData = {
    email: userId,
    exp: growExp,
  };
  const ax = axios
    .post<PostData, AxiosResponse<any>>(
      serverurl + '/quest/updateExp',
      postData,
    )
    .then(response => {
      const res = response.data;
      if (res.success) {
        return true;
      } else {
        Alert.alert(res.message);
        return false;
      }
    })
    .catch(error => {
      if (error instanceof Error) {
        Alert.alert('error: ' + error.message);
      } else {
        Alert.alert('error ocurred while growing exp on server database');
      }
      return false;
    });

  return ax;
}
