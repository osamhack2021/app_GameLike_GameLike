//미사용
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {ExpectedData} from 'src/Quest/Datas';
import getDateString from 'src/Quest/Times/getDateString';

//Expected reload
//- date, userId 값 전송
//- 해당 값이 일치하는 데이터를 post로 받아옴
//- 데이터 return

function reloadExpected(): [string, ExpectedData.DataType[]] {
  let arr: ExpectedData.DataType[] = [];
  return ['test', arr];
}

export default reloadExpected;
