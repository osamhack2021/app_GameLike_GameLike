import axios from 'axios';
import {useDispatch} from 'react-redux';
import {ExpectedData} from 'src/Quest/Datas';
import getDateString from 'src/Quest/Times/getDateString';

function insertExpected(data: ExpectedData.DataType): string {
  return 'test';
  // let log = '';
  // const date = getDateString();
  // try {
  //   axios
  //     .post('http://52.231.66.60/auth/join', {date: date})
  //     .then(response => {
  //       try {
  //         log = 'get well:' + JSON.stringify(response.data);
  //         //데이터 반환하기
  //         //arr = response.data
  //       } catch (e) {
  //         log = '일단 잘 됨';
  //       }
  //     })
  //     .catch(error => {
  //       if (error instanceof Error) {
  //         log = error.message;
  //       } else {
  //         log = 'error ocurred while getting expected datas';
  //       }
  //     });
  // } catch (e) {
  //   if (e instanceof Error) {
  //     log = 'axios:' + e.message;
  //   } else {
  //     log = 'axios 실행 중 오류';
  //   }
  // }
  // return [log, arr];
}

export default insertExpected;
