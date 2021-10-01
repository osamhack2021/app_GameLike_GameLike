import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View, Alert, Text} from 'react-native';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import FieldElement from './Components/FieldElement';
import * as FieldData from './datas/FieldData';
import * as QuestData from './datas/QuestData';
import * as LocalDB from '../localdb/LocalDB';
import QuestInput from './Components/QuestInput';

// 1. 퀘스트 데이터 목록 불러옴
// 2. 퀘스트 돌면서 확인
// 	- 찾은 필드를 실제필드 목록에서 탐색
// 		- 있다면 해당 필드 데이터셋에 추가
// 		- 없다면 전체 필드 목록에서 불러와 실제 필드 목록에 추가
// 3. 모든 필드 정돈이 완료되면 렌더링
// 	실제 필드 목록에서 렌더링
// 	데이터는 데이터로 전송

type FieldRenderData = {
  field: FieldData.DataType;
  subQuests: QuestData.DataType[];
};

function CreateFieldElements(
  allFields: FieldData.DataType[],
  quests: QuestData.DataType[],
): FieldRenderData[] {
  let renderFields: FieldRenderData[] = [];

  //1. 모든 퀘스트 순환
  for (let q of quests) {
    //2. 현재 필드 목록 확인
    let flag: boolean = false;
    for (let f of renderFields) {
      if (q.fieldId === f.field.id) {
        //2.1. 필드 목록에 퀘스트의 필드가 있으면 추가
        flag = true;
        f.subQuests.push(q);
        break;
      }
    }
    if (flag === false) {
      //2.2. 없으면 필드 목록에 해당 필드 불러오고 거기에 추가
      let isExisting = false;
      for (let f of allFields) {
        if (q.fieldId === f.id) {
          isExisting = true;
          renderFields.push({field: f, subQuests: [q]});
          break;
        }
      }
      if (isExisting === false) {
        throw Error('CreateFieldElements: field not existing');
      }
    }
  }

  return renderFields;
}

export default function QuestTab() {
  //데이터 로드
  const [fields, setFields] = useState<FieldData.DataType[]>([]);
  const [quests, setQuests] = useState<QuestData.DataType[]>([]);
  const loadDataCallback = useCallback(async () => {
    try {
      const db: SQLiteDatabase = await LocalDB.openDB();
      try {
        await LocalDB.createTable(
          db,
          FieldData.tableName,
          FieldData.primaryKey,
          FieldData.attributes,
        );
        await LocalDB.createTable(
          db,
          QuestData.tableName,
          QuestData.primaryKey,
          QuestData.attributes,
        );
      } catch (error) {
        Alert.alert('Creating Table error');
      }
      try {
        const storedFields =
          await LocalDB.getItemsFromTable<FieldData.DataType>(
            db,
            FieldData.tableName,
            FieldData.attributes,
          );
        Alert.alert('필드야 뭐 잘 되겠지');
        setFields(storedFields);
        const storedQuests =
          await LocalDB.getItemsFromTable<QuestData.DataType>(
            db,
            QuestData.tableName,
            QuestData.attributes,
          );
        setQuests(storedQuests);
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message + ' getting items error');
        } else {
          Alert.alert('Getting items error');
        }
      }
    } catch (error) {
      Alert.alert('load data error');
    }
  }, []);
  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  const createFieldElements = useCallback(
    (allFields: FieldData.DataType[], allQuests: QuestData.DataType[]) => {
      let renderFields: FieldRenderData[] = [];

      //1. 모든 퀘스트 순환
      for (let q of allQuests) {
        //2. 현재 필드 목록 확인
        let flag: boolean = false;
        for (let f of renderFields) {
          if (q.fieldId === f.field.id) {
            //2.1. 필드 목록에 퀘스트의 필드가 있으면 추가
            flag = true;
            f.subQuests.push(q);
            break;
          }
        }
        if (flag === false) {
          //2.2. 없으면 필드 목록에 해당 필드 불러오고 거기에 추가
          let isExisting = false;
          for (let f of allFields) {
            if (q.fieldId === f.id) {
              isExisting = true;
              renderFields.push({field: f, subQuests: [q]});
              break;
            }
          }
          if (isExisting === false) {
            throw Error('CreateFieldElements: field not existing');
          }
        }
      }

      return renderFields;
    },
    [],
  );

  const renderFields = createFieldElements(fields, quests);
  return (
    <View>
      <Text>QuestTab</Text>
      <QuestInput
        quests={quests}
        setQuests={setQuests}
        fields={fields}
        setFields={setFields}
      />
      <FlatList
        data={renderFields}
        renderItem={({item}) => (
          <FieldElement data={item.field} questDatas={item.subQuests} />
        )}
        keyExtractor={(item, index) => item.field.id.toString()}
      />
    </View>
  );
}
