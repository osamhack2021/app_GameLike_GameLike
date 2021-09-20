import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.view1}>
        <Text>Hello world1</Text>
      </View>

      <View style={Styles.view2}>
        <Text>Hello world2</Text>
      </View>

      <View style={Styles.view3}>
        <Text>Hello world3</Text>
      </View>
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e93e43',
  },
  view2: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5a941',
  },

  view3: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4ebd7a',
  },
});
