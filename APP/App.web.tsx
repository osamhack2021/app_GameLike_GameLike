import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import App from './src/Components/HomeScreen';

export default function AppOnWeb() {
  return (
    <SafeAreaView style={Styles.container}>
      <App />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    
    width: 360,
    height: 800,
  },
});
