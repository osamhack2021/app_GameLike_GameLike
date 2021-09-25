import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FieldElement from './src/Quests/FieldElement';
import Test from './src/Quests/test';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <FieldElement />
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
