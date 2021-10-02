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
  const [inputFieldName, setInputFieldName] = useState<string>('');
  const [inputFieldId, setInputFieldId] = useState<string>('');
  const [inputEstimatedTime, setInputEstimatedTime] = useState<string>('');
  const [inputIsPublic, setInputIsPublic] = useState<number>(0);
  const [inputIsRepeat, setInputIsRepeat] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dataCreatorId = 'tester';

  const setAllInputEmpty = () => {
    setInputId('');
    setInputName('');
    setInputFieldName('');
    setInputEstimatedTime('');
    setInputFieldId('');
    setInputIsPublic(0);
    setInputIsRepeat(0);
  };

  const addQuestData = async () => {
    let fieldId = parseInt(inputFieldId, 10);
    const parsedId = parseInt(inputId, 10);
    const parsedTime = parseInt(inputEstimatedTime, 10);
    if (isNaN(parsedId) || isNaN(fieldId)) {
      Alert.alert('Id 값은 숫자로 입력해주세요!');
    }
    if (isNaN(parsedTime)) {
      Alert.alert('예상 소요 시간은 숫자로 입력해주세요');
    }
    try {
      const db = await LocalDB.openDB();
      try {
        //Field가 있으면 있는 것 사용, 없으면 새로 생성
        const selectedField = await LocalDB.selectTextItem<FieldData.DataType>(
          db,
          FieldData.tableName,
          'name',
          inputFieldName,
        );
        if (selectedField.length === 0) {
          const newField: FieldData.DataType = {
            id: fieldId,
            name: inputFieldName,
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
        } else {
          fieldId = selectedField[0].id;
        }
      } catch (error) {
        let errStr: string = '필드 데이터 입력 실패:';
        if (error instanceof Error) {
          errStr += error.message;
        }
        Alert.alert(errStr);
      }
      try {
        //const nextId = await LocalDB.getNextId(db, QuestData.tableName);
        const newQuest: QuestData.DataType = {
          id: parsedId,
          name: inputName,
          fieldId: fieldId,
          estimatedTime: parsedTime,
          writedDate: Date.now(),
          dataCreatorId: dataCreatorId,
          isRepeat: inputIsRepeat,
          isPublic: inputIsPublic,
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
        let errStr: string = '퀘스트 데이터 입력 실패:';
        if (error instanceof Error) {
          errStr += error.message;
        }
        Alert.alert(errStr);
      }
    } catch (error) {
      Alert.alert('db 오픈 실패');
    }
  };

  return (
    <View>
      <View>
        <Text>필드는 추후 선택형으로 수정 예정</Text>
      </View>
      <View style={styles.horizontal}>
        <TextInput
          value={inputId}
          style={{flex: 0.5}}
          placeholder="퀘스트 id"
          onChangeText={text => {
            setInputId(text);
          }}
        />
        <TextInput
          value={inputName}
          style={{flex: 0.5}}
          placeholder="퀘스트 제목"
          onChangeText={text => {
            setInputName(text);
          }}
        />
      </View>
      <View style={styles.horizontal}>
        <TextInput
          value={inputFieldId}
          style={{flex: 0.5}}
          placeholder="필드 id"
          onChangeText={text => {
            setInputFieldId(text);
          }}
        />
        <TextInput
          value={inputFieldName}
          style={{flex: 0.5}}
          placeholder="필드 이름"
          onChangeText={text => {
            setInputFieldName(text);
          }}
        />
      </View>
      <View>
        <TextInput
          value={inputEstimatedTime}
          placeholder="몇 분 정도 걸릴까요?(추후 선택형으로 수정 예정)"
          onChangeText={text => {
            setInputEstimatedTime(text);
          }}
        />
      </View>
      <View style={styles.horizontal}>
        <View>
          <Text>반복 여부</Text>
          <Checkbox
            status="unchecked"
            onPress={() => setInputIsPublic(inputIsPublic === 0 ? 1 : 0)}
          />
        </View>
        <View>
          <Text>공개 여부</Text>
          <Checkbox
            status="unchecked"
            onPress={() => setInputIsRepeat(inputIsRepeat === 0 ? 1 : 0)}
          />
        </View>
      </View>
      <Button title="입력" onPress={addQuestData} />
    </View>
  );
};

export default QuestInput;

const styles = StyleSheet.create({
  view: {borderWidth: 1, width: '100%'},
  horizontal: {flexDirection: 'row'},
});
