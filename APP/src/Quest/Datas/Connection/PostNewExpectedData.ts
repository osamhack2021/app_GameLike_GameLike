// 3. expected data 추가하기
//     post:   새로 추가할 expected data 정보(questName, hashTag, date, userId)

import {ExpectedData} from '..';
import testDatas from './expectedTestDatas';

//     res:    성공 여부
export default function postNewExpectedData(insertData: ExpectedData.DataType) {
  testDatas.push(insertData);
}
