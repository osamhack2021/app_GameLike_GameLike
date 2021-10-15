// 1. 오늘의 expected list 가져오기
//     post:   date
//     res:    date 값이 일치하는 같은 모든 expected data

import {ExpectedData} from '..';
import testDatas from './expectedTestDatas';

export function reloadTodayExpected(): ExpectedData.DataType[] {
  return testDatas;
}

export default reloadTodayExpected;
