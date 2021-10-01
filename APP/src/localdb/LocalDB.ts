import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

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
    `CREATE TABLE IF NOT EXISTS "${tableName}"(\n` +
    attributes
      .map(i => `"${i.name}" ${i.type} ${i.nullable ? '' : 'NOT NULL'},`)
      .join('\n') +
    `\nPRIMARY KEY("${primaryKey}") );`;
  await db.executeSql(query);
  return query;
};

export const getItemsFromTable = async <DataType>(
  db: SQLiteDatabase,
  tableName: string,
  attributes: TableAttribute[],
): Promise<DataType[]> => {
  let names: string[] = [];
  for (let i of attributes) {
    names.push(i.name);
  }
  try {
    const items: DataType[] = [];
    const results = await db.executeSql(
      'SELECT ' + names.join(', ') + ` FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        items.push(result.rows.item(index));
      }
    });
    return items;
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message + `tableName: ${tableName}`);
    } else {
      throw Error(`Failed to get items from table ${tableName}`);
    }
  }
};

export const selectTextItem = async <DataType>(
  db: SQLiteDatabase,
  tableName: string,
  attribute: string,
  data: string,
): Promise<DataType[]> => {
  try {
    const items: DataType[] = [];
    const results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE ${attribute}="${data}"`,
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

export const selectNumberItem = async <DataType>(
  db: SQLiteDatabase,
  tableName: string,
  attribute: string,
  data: number,
): Promise<DataType[]> => {
  try {
    const items: DataType[] = [];
    const results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE ${attribute}=${data}`,
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

export const insertItems = async <DataType>(
  db: SQLiteDatabase,
  tableName: string,
  items: DataType[],
  attributes: TableAttribute[],
) => {
  let names: string[] = [];
  let errorquery: string = '';
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
                'inserting: there is non-number string value: ' + key,
              );
            }
          }
          let res = '(' + ra.join(', ') + ')';
          return res;
        })
        .join(',');
    errorquery = insertQuery;

    return db.executeSql(insertQuery);
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message + ' ' + errorquery);
    } else {
      throw Error('error ocurred while inserting');
    }
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

export const getNextId = async (db: SQLiteDatabase, tableName: string) => {
  try {
    const query = `SELECT max(id) from ${tableName}`;
    const results = await db.executeSql(query);
    const id: number = results[0].rows.item(0);
    return id;
  } catch (error) {
    return -1;
  }
};
