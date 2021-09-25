import {FieldData} from './FieldData';
let datas: Array<FieldData> = [
  {id: 0, name: 'test', peopleWith: 3277, iconName: 'nonono'},
  {id: 1, name: '리액트', peopleWith: 123, iconName: 'development'},
  {id: 2, name: '등 운동', peopleWith: 5709, iconName: 'sport'},
  {id: 3, name: '수능 미적분', peopleWith: 7777, iconName: 'study'},
];
export function GetDataSets(): Array<FieldData> {
  return datas;
}

export function GetIconNameFromId(id: number): string {
  let res: string = '';
  for (let i of datas) {
    if (i.id === id) {
      res = i.iconName;
      break;
    }
  }
  return res;
}
