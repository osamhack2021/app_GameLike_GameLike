import {numberTypeAnnotation} from '@babel/types';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {Text, ScrollView, StyleSheet, View, Alert, Button} from 'react-native';
import {TextInput, Checkbox} from 'react-native-paper';
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
  const [estimatedTime, setEstimatedTime] = useState<string>('');
  const [isPublic, setIsPublic] = useState<number>(0);
  const [isRepeat, setIsRepeat] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dataCreatorId = 'tester';

  const setAllInputEmpty = () => {
    setInputId('');
    setInputName('');
    setInputField('');
    setEstimatedTime('');
    setIsPublic(0);
    setIsRepeat(0);
  };

  const addQuestData = async () => {
    const fieldId = parseInt(inputField, 10);
    try {
      //Field가 있으면 있는 것 사용, 없으면 새로 생성
      const db = await LocalDB.openDB();
      const selectedField = await LocalDB.selectTextItem<FieldData.DataType>(
        db,
        FieldData.tableName,
        'name',
        inputField,
      );
      if (selectedField.length === 0) {
        const nextId = await LocalDB.getNextId(db, FieldData.tableName);
        const newField: FieldData.DataType = {
          id: nextId,
          name: inputField,
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
      const nextId = await LocalDB.getNextId(db, QuestData.tableName);
      const newQuest: QuestData.DataType = {
        id: nextId,
        name: inputName,
        fieldId: fieldId,
        estimatedTime: parseInt(estimatedTime, 10),
        writedDate: Date.now(),
        dataCreatorId: dataCreatorId,
        isRepeat: isRepeat,
        isPublic: isPublic,
      };
      const newQuests = [...quests, newQuest];
      await LocalDB.insertItems(
        db,
        QuestData.tableName,
        newQuests,
        QuestData.attributes,
      );
      setQuests(newQuests);
      setAllInputEmpty();
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
        setErrorMessage(error.message);
      }
      Alert.alert('error ocurred while finding quest data.');
    }
  };

  return (
    <View>
      <View>
        <TextInput
          value={inputName}
          placeholder="퀘스트 제목"
          onChangeText={text => {
            setInputName(text);
          }}
        />
      </View>
      <View>
        <TextInput
          value={inputField}
          placeholder="필드 이름(추후 선택형으로 수정 예정)"
          onChangeText={text => {
            setInputField(text);
          }}
        />
      </View>
      <View>
        <TextInput
          value={inputName}
          placeholder="몇 분 정도 걸릴까요?(추후 선택형으로 수정 예정)"
          onChangeText={text => {
            setEstimatedTime(text);
          }}
        />
      </View>
      <View>
        <Text>반복 여부</Text>
        <Checkbox
          status="unchecked"
          onPress={() => setIsPublic(isPublic === 0 ? 1 : 0)}
        />
      </View>
      <View>
        <Text>공개 여부</Text>
        <Checkbox
          status="unchecked"
          onPress={() => setIsRepeat(isRepeat === 0 ? 1 : 0)}
        />
      </View>
      <Button title="입력" onPress={addQuestData} />
    </View>
  );
};

export default QuestInput;

const styles = StyleSheet.create({
  view: {borderWidth: 1, width: '100%'},
});
