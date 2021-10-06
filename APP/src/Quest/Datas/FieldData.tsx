import {TableAttribute} from './LocalDB';

type DataType = {
  id: number;
  name: string;
  peopleWith: number;
  iconName: string;
};

export const attributes: TableAttribute[] = [
  {name: 'id', type: 'INTEGER', nullable: false},
  {name: 'name', type: 'TEXT', nullable: false},
  {name: 'peopleWith', type: 'INTEGER', nullable: false},
  {name: 'iconName', type: 'TEXT', nullable: false},
];

export const primaryKey = 'id';
export const tableName = 'Field';

export type {DataType};
