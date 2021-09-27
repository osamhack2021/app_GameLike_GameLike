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
    width: 360,
    height: 800,
  },
});
