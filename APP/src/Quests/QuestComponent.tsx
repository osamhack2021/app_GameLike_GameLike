import React from 'react';
import {FlatList, View} from 'react-native';
import FieldElement from './Components/FieldElement';
import * as FDS from './datas/FieldDataSet';
import * as FD from './datas/FieldData';

const fields: FD.FieldData[] = FDS.GetDataSets();

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
