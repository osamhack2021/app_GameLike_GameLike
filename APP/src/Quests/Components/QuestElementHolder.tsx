import React from 'react';
import {FlatList, View} from 'react-native';
import QuestElement from '../Components/QuestElement';
import * as QDS from '../datas/QuestDataSet';
import * as QD from '../datas/QuestData';

const quests: QD.QuestData[] = QDS.GetDataSets();

export default function QuestComponent() {
  return (
    <View>
      <FlatList
        data={quests}
        renderItem={({item}) => <QuestElement data={item} />}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
}
