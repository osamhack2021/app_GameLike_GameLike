// 2. expected list 가져오기
//     get:
//     res:    expected data 최신순으로 20개 가져오기

import {ExpectedData} from '..';

export default function loadRecentExpected(): ExpectedData.DataType[] {
  return [
    {
      id: -1,
      questName: '물리학 공부',
      userId: 'testid',
      date: '2021-10-14',
      hashTag: '전공',
    },
    {
      id: -1,
      questName: '근력 운동',
      userId: 'testid',
      date: '2021-10-14',
      hashTag: '운동',
    },
    {
      id: -1,
      questName: '단어 외우기',
      userId: 'testid',
      date: '2021-10-14',
      hashTag: '토익',
    },
    {
      id: -1,
      questName: '롤드컵 보고싶다',
      userId: 'testid',
      date: '2021-10-14',
      hashTag: '롤드컵',
    },
  ];
}
