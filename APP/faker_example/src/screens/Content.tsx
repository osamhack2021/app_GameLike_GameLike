import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

const title = 'Content'
export default function Content() {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: { padding: 5, backgroundColor: Colors.blue900 },
  text: { fontSize: 20, color: 'white' },
})
