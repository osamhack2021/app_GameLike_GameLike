import React from 'react';
import {FlatList, View} from 'react-native';
import FieldElement from './Components/FieldElement';
import * as FDS from './datas/FieldDataSet';
import * as FD from './datas/FieldData';
import * as QDS from './datas/QuestDataSet';
import * as QD from './datas/QuestData';

const fields: FD.FieldData[] = FDS.GetDataSets();
const quests: QD.QuestData[] = QDS.GetDataSets();

//1. 퀘스트를 돌면서 확인
//2. 퀘스트에 맞는 필드를 찾아서 삽입

export default function QuestComponent() {
  return (
    <View>
      <FlatList
        data={fields}
        renderItem={({item}) => <FieldElement data={item} />}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
}
