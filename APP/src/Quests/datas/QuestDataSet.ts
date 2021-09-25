import {QuestData} from './QuestData';
let datas: Array<QuestData> = [
  {id: 0, name: 'test하기1', fieldId: 0},
  {id: 1, name: 'test하기2', fieldId: 0},
  {id: 2, name: '리덕스 공부하기', fieldId: 1},
  {id: 3, name: '오픈소스 찾아보기', fieldId: 1},
  {id: 4, name: '버튼 구현하기', fieldId: 1},
  {id: 5, name: '랫풀다운 10회 5세트', fieldId: 2},
  {id: 6, name: '풀업 3회 5세트', fieldId: 2},
  {id: 7, name: '친업 3회 5세트', fieldId: 2},
  {id: 8, name: '킬러문제 3개 풀기', fieldId: 3},
];
export function GetDataSets(): Array<QuestData> {
  return datas;
}
