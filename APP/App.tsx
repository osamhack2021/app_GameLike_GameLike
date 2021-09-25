import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FieldElement from './src/Quests/Components/FieldElement';
import * as FD from './src/Quests/datas/FieldDataSet';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <FieldElement data={FD.default()[0]} />
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
