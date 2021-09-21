import React from 'react'
import {
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
} from 'react-native'
import * as D from './src/data'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TopBar from './src/screens/TopBar'
import BottomBar from './src/screens/BottomBar'
import Content from './src/screens/Content'

const avatarUrl = D.randomAvatarUrl()
const avatarSize = 50
const onIconPressed = () => Alert.alert('icon pressed')

console.log(require('./src/assets/images/bg.jpg'))

console.log(Platform.OS)
export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <TopBar />
      <Content />
      <BottomBar />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: Colors.lightBlue50 },
})
