import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

import * as QD from '../Quests/datas/QuestData';

const tableName = 'Quest';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'GameLikeLocal.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(value TEXT NOT NULL);`;

  await db.executeSql(query);
};

export const getQuestDatas = async (
  db: SQLiteDatabase,
): Promise<QD.QuestData[]> => {
  try {
    const questDatas: QD.QuestData[] = [];
    const results = await db.executeSql(
      `SELECT id as id, value FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        questDatas.push(result.rows.item(index));
      }
    });
    return questDatas;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get QuestDatas, in QuestTable.ts');
  }
};

export const saveQuestDatas = async (
  db: SQLiteDatabase,
  questDatas: QD.QuestData[],
) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
    questDatas.map(i => `(${i.id},'${i.value})`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteQuestData = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where id = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};
