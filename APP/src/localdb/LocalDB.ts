import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {Alert} from 'react-native';

enablePromise(true);

export const openDB = async () => {
  return openDatabase({name: 'GameLikeLocal.db', location: 'default'});
};

export type TableAttribute = {
  name: string;
  type: string;
  nullable: boolean;
};

export const createTable = async (
  db: SQLiteDatabase,
  tableName: string,
  primaryKey: string,
  attributes: TableAttribute[],
) => {
  const query =
    `CREATE TABLE IF NOT EXISTS "${tableName}"(` +
    attributes
      .map(i => ` "${i.name}" ${i.type} ${i.nullable ? '' : 'NOT NULL'},`)
      .join(' ') +
    ` PRIMARY KEY("${primaryKey}") );`;
  //Alert.alert(query);
  //await db.executeSql(query);
  return query;
};

export const getItemsFromTable = async <T>(
  db: SQLiteDatabase,
  tableName: string,
  attributes: TableAttribute[],
): Promise<T[]> => {
  let names: string[] = [];
  for (let i of attributes) {
    names.push(i.name);
  }
  try {
    const items: T[] = [];
    const results = await db.executeSql(
      'SELECT' + names.join(', ') + `FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        items.push(result.rows.item(index));
      }
    });
    return items;
  } catch (error) {
    console.error(error);
    throw Error(`Failed to get items from table ${tableName}`);
  }
};

export const insertItems = async <T>(
  db: SQLiteDatabase,
  tableName: string,
  items: T[],
  attributes: TableAttribute[],
) => {
  let names: string[] = [];
  for (let i of attributes) {
    names.push(i.name);
  }
  try {
    const insertQuery =
      `INSERT OR REPLACE INTO ${tableName}(` +
      names.join(', ') +
      ') values ' +
      items
        .map(i => {
          let ra: string[] = [];
          for (let key in i) {
            if (typeof i[key] === 'string') {
              ra.push(`"${i[key]}"`);
            } else if (typeof i[key] === 'number') {
              ra.push(`${String(i[key])}`);
            } else {
              throw Error(
                'inserting: there is non-number or non-string value.',
              );
            }
          }
          let res = '(' + ra.join(', ') + ')';
          return res;
        })
        .join(',');

    return db.executeSql(insertQuery);
  } catch (error) {
    throw Error('error ocurred while inserting');
  }
};

export const deleteItem = async (
  db: SQLiteDatabase,
  id: number,
  tableName: string,
) => {
  const deleteQuery = `DELETE from ${tableName} where id = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase, tableName: string) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};
