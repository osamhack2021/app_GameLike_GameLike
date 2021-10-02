import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Screen from './src/App';

export default function AppOnWeb() {
  return (
    <SafeAreaView style={Styles.container}>
      <Screen />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: 450,
    height: 1050,
  },
});
