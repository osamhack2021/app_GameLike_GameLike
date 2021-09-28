import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import QuestComponent from './src/Quests/QuestTab';
import FieldSQLTest from './src/localdb/FieldSQLTest';

export default function App() {
  // return (
  //   <SafeAreaView style={Styles.container}>
  //     <QuestComponent />
  //   </SafeAreaView>
  // );

  return (
    <SafeAreaView style={Styles.container}>
      <FieldSQLTest />
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
