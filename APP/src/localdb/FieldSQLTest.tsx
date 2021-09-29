import {placeholder} from '@babel/types';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, ScrollView, StyleSheet, View, Alert, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import {FieldData} from '../Quests/datas/FieldData';
import * as FT from './FieldTable';

const initDatas: Array<FieldData> = [
  {
    id: 0,
    name: 'test',
    peopleWith: 3277,
    iconName: 'nonono',
    dataCreatorId: 'tester',
    isPublic: false,
  },
  {
    id: 1,
    name: '리액트',
    peopleWith: 123,
    iconName: 'development',
    dataCreatorId: 'tester',
    isPublic: true,
  },
  {
    id: 2,
    name: '등 운동',
    peopleWith: 5709,
    iconName: 'sport',
    dataCreatorId: 'tester',
    isPublic: true,
  },
  {
    id: 3,
    name: '수능 미적분',
    peopleWith: 7777,
    iconName: 'study',
    dataCreatorId: 'testerstu',
    isPublic: true,
  },
];

export default function FieldSQLTest() {
  //데이터 로드
  const [fields, setFields] = useState<FieldData[]>([
    {
      id: -1,
      name: 'initValue',
      peopleWith: 1111,
      iconName: 'bbb',
      dataCreatorId: 'startValue',
      isPublic: false,
    },
  ]);
  const loadDataCallback = useCallback(async () => {
    try {
      const db = await FT.getDBConnection();
      await FT.createTable(db);
      const storedItems = await FT.getFieldDatas(db);
      if (storedItems.length) {
        setFields(storedItems);
      } else {
        await FT.saveFieldDatas(db, initDatas);
        setFields(initDatas);
      }
    } catch (error) {
      Alert.alert('error ocurred');
    }
  }, []);
  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  const [inputId, setInputId] = useState<number>(0);
  const [inputName, setInputName] = useState<string>('');
  const [inputPW, setPeopleWith] = useState<number>(0);

  //데이터 입력
  const addFieldData = async () => {
    const newField: FieldData = {
      id: inputId,
      name: inputName,
      peopleWith: inputPW,
      iconName: 'test',
      dataCreatorId: 'tester',
      isPublic: false,
    };
    try {
      const newFields = [...fields, newField];
      setFields(newFields);
      const db = await FT.getDBConnection();
      await FT.saveFieldDatas(db, newFields);
      setInputId(0);
      setInputName('');
      setPeopleWith(0);
    } catch (error) {
      Alert.alert('error ocurred while adding element');
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
      <View>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {borderWidth: 1, width: '100%'},
});
