import {TableAttribute} from '../../localdb/LocalDB';

type DataType = {
  id: number;
  name: string;
  peopleWith: number;
  iconName: string;

  dataCreatorId: string;
  isPublic: number;
};

export const attributes: TableAttribute[] = [
  {name: 'id', type: 'INTEGER', nullable: false},
  {name: 'name', type: 'TEXT', nullable: false},
  {name: 'peopleWith', type: 'INTEGER', nullable: false},
  {name: 'iconName', type: 'TEXT', nullable: false},
  {name: 'dataCreatorId', type: 'TEXT', nullable: false},
  {name: 'isPublic', type: 'INTEGER', nullable: false},
];

export const primaryKey = 'id';
export const tableName = 'Field';

export type {DataType};
