import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import QuestField from './src/Quests/QuestField';

export default function App() {
  return (
    <SafeAreaView>
      <QuestField />
      <QuestField />
      <Text>hello</Text>
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
