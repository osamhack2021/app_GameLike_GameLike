import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

import * as FD from '../Quests/datas/FieldData';

const fieldTableName = 'Field';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'GameLikeLocal.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS "${fieldTableName}"(
    "id" INTEGER NOT NULL, 
    "name" TEXT NOT NULL, 
    "peopleWith" INTEGER NOT NULL,
    "iconName" TEXT NOT NULL, 
    "dataCreatorId" TEXT NOT NULL,
    "isPublic" INTEGER NOT NULL,
    PRIMARY KEY("id") );`;

  await db.executeSql(query);
};

export const getFieldDatas = async (
  db: SQLiteDatabase,
): Promise<FD.FieldData[]> => {
  try {
    const fieldDatas: FD.FieldData[] = [];
    const results = await db.executeSql(
      `SELECT id as id, name, peopleWith, iconName, dataCreatorId, isPublic FROM ${fieldTableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        fieldDatas.push(result.rows.item(index));
      }
    });
    return fieldDatas;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get FieldDatas, in FieldTable.ts');
  }
};

export const saveFieldDatas = async (
  db: SQLiteDatabase,
  fieldDatas: FD.FieldData[],
) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${fieldTableName}(id, name, peopleWith, iconName, dataCreatorId, isPublic) values ` +
    fieldDatas
      .map(
        i =>
          `(${i.id},"${i.name}",${i.peopleWith},"${i.iconName}","${
            i.dataCreatorId
          }",${i.isPublic ? 1 : 0})`,
      )
      .join(',');

  return db.executeSql(insertQuery);
};

export const deleteFieldData = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${fieldTableName} where id = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${fieldTableName}`;

  await db.executeSql(query);
};
