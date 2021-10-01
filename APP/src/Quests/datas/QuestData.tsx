import {TableAttribute} from '../../localdb/LocalDB';

type DataType = {
  id: number;
  name: string;
  fieldId: number;
  estimatedTime: number; //예상되는 완료 시간
  writedDate: number; //제작 날짜
  dataCreatorId: string; //데이터 제작자 ID

  isRepeat: number;
  isPublic: number;
};

export const attributes: TableAttribute[] = [
  {name: 'id', type: 'INTEGER', nullable: false},
  {name: 'name', type: 'TEXT', nullable: false},
  {name: 'fieldId', type: 'INTEGER', nullable: false},
  {name: 'estimatedTime', type: 'INTEGER', nullable: false},
  {name: 'writedDate', type: 'INTEGER', nullable: false},
  {name: 'dataCreatorId', type: 'TEXT', nullable: false},
  {name: 'isRepeat', type: 'INTEGER', nullable: false},
  {name: 'isPublic', type: 'INTEGER', nullable: false},
];

export const primaryKey = 'id';
export const tableName = 'Quest';

export type {DataType};
