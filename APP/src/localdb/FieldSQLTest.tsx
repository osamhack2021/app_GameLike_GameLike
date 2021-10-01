import {placeholder} from '@babel/types';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, ScrollView, StyleSheet, View, Alert, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import * as FieldData from '../Quests/datas/FieldData';
import * as FT from './FieldTable';
import * as LocalDB from './LocalDB';

const initDatas: Array<FieldData.DataType> = [
  {
    id: 0,
    name: 'test',
    peopleWith: 3277,
    iconName: 'nonono',
    dataCreatorId: 'tester',
    isPublic: 0,
  },
];

export default function FieldSQLTest() {
  //데이터 로드
  const [fields, setFields] = useState<FieldData.DataType[]>([]);
  const [errorOut, setErrorOut] = useState('');
  const [queryOut, setQueryOut] = useState('');
  const loadDataCallback = useCallback(async () => {
    let db: SQLiteDatabase = await LocalDB.openDB();
    try {
      await LocalDB.createTable(
        db,
        FieldData.tableName,
        FieldData.primaryKey,
        FieldData.attributes,
      );
    } catch (error) {
      Alert.alert('Creating Table error');
    }
    try {
      const storedItems = await LocalDB.getItemsFromTable<FieldData.DataType>(
        db,
        FieldData.tableName,
        FieldData.attributes,
      );
      Alert.alert('Getting Items works well');
      setFields(storedItems);
    } catch (error) {
      Alert.alert('Getting items error');
    }
  }, []);
  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  //데이터 입력
  const [inputId, setInputId] = useState<number>(0);
  const [inputName, setInputName] = useState<string>('');
  const [inputPW, setPeopleWith] = useState<number>(0);

  const addFieldData = async () => {
    const newField: FieldData.DataType = {
      id: inputId,
      name: inputName,
      peopleWith: inputPW,
      iconName: 'test',
      dataCreatorId: 'tester',
      isPublic: 0,
    };
    try {
      const newFields = [...fields, newField];
      setFields(newFields);
      const db = await LocalDB.openDB();
      await LocalDB.insertItems(
        db,
        FieldData.tableName,
        newFields,
        FieldData.attributes,
      );
      setInputId(0);
      setInputName('');
      setPeopleWith(0);
    } catch (error) {
      Alert.alert('error ocurred while adding element');
    }
  };

  //데이터 삭제
  const deleteData = async () => {
    try {
      const db = await LocalDB.openDB();
      await LocalDB.deleteItem(db, inputId, FieldData.tableName);
      let idindex: number = -1;
      for (let i = 0; i < fields.length; i++) {
        if (inputId === fields[i].id) {
          idindex = i;
        }
      }
      if (idindex !== -1) {
        fields.splice(idindex, 1);
      } else {
        Alert.alert("deletion: can't find the id");
      }
      setFields(fields.slice(0));
    } catch (error) {
      Alert.alert('data deletion error ocurred');
    }
  };

  const children = fields.map(item => (
    <View style={styles.view}>
      <Text>id: {item.id}</Text>
      <Text>name: {item.name}</Text>
      <Text>peopleWith: {item.peopleWith}</Text>
      <Text>iconName: {item.iconName}</Text>
    </View>
  ));
  return (
    <ScrollView>
      <TextInput
        placeholder="id"
        onChangeText={text => {
          setInputId(Number(text));
        }}
      />
      <TextInput
        placeholder="name"
        onChangeText={text => {
          setInputName(text);
        }}
      />
      <TextInput
        placeholder="id"
        onChangeText={text => {
          setPeopleWith(Number(text));
        }}
      />
      <Button title="입력" onPress={addFieldData} />
      <Button title="삭제" onPress={deleteData} />
      <Text>{errorOut}</Text>
      <Text>{queryOut}</Text>
      <View>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {borderWidth: 1, width: '100%'},
});
