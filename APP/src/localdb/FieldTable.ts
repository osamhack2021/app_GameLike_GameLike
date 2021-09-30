//사용하지 않을 예정

import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

import * as FieldData  from '../Quests/datas/FieldData';
import * as LocalDB from './LocalDB';

//load
//insert
//delete

enablePromise(true);

function createTable(db: SQLiteDatabase){
  LocalDB.createTable(db,FieldData.tableName,FieldData.primaryKey,FieldData.attributes);
}

export const loadFieldDatas = async (db: SQLiteDatabase) => {
  try{
    const db = await LocalDB.getDB();
    await createTable(db);
    const storedItems = await LocalDB.getItemsFromTable(db,FieldData.tableName,FieldData.attributes);
    if(storedItems.length){
      
    }
  }
};
