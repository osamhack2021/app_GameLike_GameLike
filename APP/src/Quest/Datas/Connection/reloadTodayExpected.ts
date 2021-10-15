// 1. 오늘의 expected list 가져오기
//     post:   date
//     res:    date 값이 일치하는 같은 모든 expected data

import {ExpectedData} from '..';

export function reloadTodayExpected(): ExpectedData.DataType[] {
  return [
    {
      id: -1,
      questName: '리액트 공부',
      userId: 'testid',
      date: '2021-10-15',
      hashTag: '코딩',
    },
    {
      id: -1,
      questName: '근력 운동',
      userId: 'testid',
      date: '2021-10-15',
      hashTag: '운동',
    },
    {
      id: -1,
      questName: '단어 외우기',
      userId: 'testid',
      date: '2021-10-15',
      hashTag: '토익',
    },
  ];
}

export default reloadTodayExpected;
