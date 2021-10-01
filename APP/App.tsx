import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import QuestTab from './src/Quests/QuestTab';
import FieldSQLTest from './src/localdb/FieldSQLTest';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <QuestTab />
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={Styles.container}>
  //     <FieldSQLTest />
  //   </SafeAreaView>
  // );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
