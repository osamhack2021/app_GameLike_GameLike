import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import QuestComponent from './src/Quests/QuestTab';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <QuestComponent />
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
