import {numberTypeAnnotation} from '@babel/types';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {Text, ScrollView, StyleSheet, View, Alert, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import * as LocalDB from '../../localdb/LocalDB';
import * as FieldData from '../datas/FieldData';
import * as QuestData from '../datas/QuestData';

type QuestInputProps = {
  quests: QuestData.DataType[];
  setQuests: React.Dispatch<React.SetStateAction<QuestData.DataType[]>>;
  fields: FieldData.DataType[];
  setFields: React.Dispatch<React.SetStateAction<FieldData.DataType[]>>;
};
//1. Quest 객체만 제작
//2. insert or replace Fields
//3. insert quest
//4. 오류 발생 시 메시지 띄움
//4. 부모 함수 리로드
const QuestInput: FC<QuestInputProps> = ({
  quests,
  setQuests,
  fields,
  setFields,
}) => {
  //데이터 입력
  const [inputId, setInputId] = useState<string>('');
  const [inputName, setInputName] = useState<string>('');
  const [inputField, setInputField] = useState<string>('');

  const addQuestData = async () => {
    const fieldId = parseInt(inputField, 10);
    try {
      //Field가 있으면 있는 것 사용, 없으면 새로 생성
      const db = await LocalDB.openDB();
      const selectedField = await LocalDB.selectNumberItem<FieldData.DataType>(
        db,
        FieldData.tableName,
        'id',
        fieldId,
      );
      if (selectedField.length) {
        const newField: FieldData.DataType = {
          id: parseInt(inputField, 10),
          name: inputName,
          peopleWith: 0,
          iconName: 'test',
          dataCreatorId: 'tester',
          isPublic: 0,
        };
        const newFields = [...fields, newField];

        await LocalDB.insertItems(
          db,
          FieldData.tableName,
          newFields,
          FieldData.attributes,
        );
        setFields(newFields);
      }
    } catch (error) {
      Alert.alert('error ocurred while finding field data');
    }
    try {
      const db = await LocalDB.openDB();
      const newQuest: QuestData.DataType = {
        id: parseInt(inputId, 10),
        name: inputName,
        fieldId: fieldId,
        estimatedTime: 10,
        writedDate: 10,
        dataCreatorId: 'tester',
        isRepeat: 0,
        isPublic: 0,
      };
      const newQuests = [...quests, newQuest];
      await LocalDB.insertItems(
        db,
        FieldData.tableName,
        newQuests,
        QuestData.attributes,
      );
      setQuests(newQuests);
      setInputId('');
      setInputName('');
      setInputField('');
    } catch (error) {
      Alert.alert('error ocurred while finding quest data.');
    }
  };

  return (
    <View>
      <TextInput
        value={inputId}
        placeholder="id"
        onChangeText={text => {
          setInputId(text);
        }}
      />
      <TextInput
        value={inputName}
        placeholder="name"
        onChangeText={text => {
          setInputName(text);
        }}
      />
      <TextInput
        value={inputField}
        placeholder="input id of field"
        onChangeText={text => {
          setInputField(text);
        }}
      />
      <Button title="입력" onPress={addQuestData} />
    </View>
  );
};

export default QuestInput;

const styles = StyleSheet.create({
  view: {borderWidth: 1, width: '100%'},
});
