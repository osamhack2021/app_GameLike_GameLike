import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import QuestField from './src/Quests/QuestField';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <QuestField />
      <QuestField />
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
