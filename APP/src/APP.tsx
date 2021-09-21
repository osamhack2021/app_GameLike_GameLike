import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen  from './Components/LoginScreen.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
