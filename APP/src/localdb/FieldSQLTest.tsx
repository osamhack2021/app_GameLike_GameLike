import React, {useCallback, useEffect, useState} from 'react';
import {Text, ScrollView, StyleSheet, View, Alert} from 'react-native';
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
      await Alert.alert('start getDBConnection');
      const db = await FT.getDBConnection();
      Alert.alert('start creatTable');
      await FT.createTable(db);
      Alert.alert('start getFieldDatas');
      const storedItems = await FT.getFieldDatas(db);
      Alert.alert('start if/else');
      if (storedItems.length) {
        Alert.alert('using if');
        setFields(storedItems);
        Alert.alert('stored Items is available');
      } else {
        Alert.alert('using else');
        await FT.saveFieldDatas(db, initDatas);
        Alert.alert('saveFieldDatas ended');
        setFields(initDatas);
        Alert.alert('init Datas available');
      }
    } catch (error) {
      Alert.alert('error ocurred');
    }
  }, []);
  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  const children = fields.map(item => (
    <View>
      <Text>id: {item.id}</Text>
      <Text>name: {item.name}</Text>
      <Text>peopleWith: {item.peopleWith}</Text>
      <Text>iconName: {item.iconName}</Text>
    </View>
  ));
  return (
    <ScrollView>
      <Text>{children}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {borderWidth: 1},
});
