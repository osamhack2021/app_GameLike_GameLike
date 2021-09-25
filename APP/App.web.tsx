import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native';
import App from './App';

export default function AppOnWeb() {
  return (
    <SafeAreaView style={Styles.container}>
      <App />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: 450,
    height: 1050,
  },
});
