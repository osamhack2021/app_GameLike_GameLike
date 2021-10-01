import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
<<<<<<< HEAD
import App from './src/Components/HomeScreen';
=======
import Screen from './src/App';
>>>>>>> 2f0007b3c64a5502c4845f03829a5cbacee41b6a

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
