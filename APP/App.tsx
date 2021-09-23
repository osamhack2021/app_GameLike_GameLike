import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import QF from './src/Quests/QuestField';
import Test from './src/Quests/test';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <QF />
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    width: 225,
    height: 525,
  },
});
