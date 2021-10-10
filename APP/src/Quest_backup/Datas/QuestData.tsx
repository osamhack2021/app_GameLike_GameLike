import {TableAttribute} from './LocalDB';

type DataType = {
  id: number;
  name: string;
  fieldName: string;

  date: string;

  userId: string;
  isPerformed: number;
};

export const attributes: TableAttribute[] = [
  {name: 'id', type: 'INTEGER', nullable: false},
  {name: 'name', type: 'TEXT', nullable: false},
  {name: 'fieldId', type: 'INTEGER', nullable: false},
];

export const primaryKey = 'id';
export const tableName = 'Quest';

export type {DataType};
