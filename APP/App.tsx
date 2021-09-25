import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import QuestComponent from './src/Quests/QuestComponent';

import QuestElement from './src/Quests/Components/QuestElement';
import * as QD from './src/Quests/datas/QuestDataSet';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <QuestElement data={QD.GetDataSets()[0]} />
      <QuestComponent />
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
