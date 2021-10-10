import axios from 'axios';
import {LOGIN_USER} from './types';

export function loginUser(dataTosubmit: {email: string; password: string}) {
  // 서버에서 받은 data를 request에 저장
  const request = axios
    .post('http://52.231.66.60/auth/login', dataTosubmit)
    .then(response => response.data);
  return {
    type: 'LOGIN_USER',
    payload: request,
  };
}
