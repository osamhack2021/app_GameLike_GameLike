import {FieldData} from './FieldData';

export default function GetDataSets(): Array<FieldData> {
  let datas: Array<FieldData> = [
    {id: 0, name: 'test', peopleWith: 3277},
    {id: 1, name: '리액트', peopleWith: 123},
    {id: 2, name: '등 운동', peopleWith: 5709},
    {id: 3, name: '미적분 1강 수강', peopleWith: 7777},
  ];

  return datas;
}
