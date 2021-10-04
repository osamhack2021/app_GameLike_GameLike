import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Component/HomeScreen';
import SettingScreen from './Component/SettingScreen';
import QuestScreen from './Quest/QuestScreen';
import ProfileScreen from './Component/ProfileScreen';
import DungeonScreen from './Component/DungeonScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveBackgroundColor: 'gray',
      })}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="퀘스트" component={QuestScreen} />
      <Tab.Screen name="던전" component={DungeonScreen} />
      <Tab.Screen name="프로필" component={ProfileScreen} />
      <Tab.Screen name="설정" component={SettingScreen} />
    </Tab.Navigator>
  );
}
