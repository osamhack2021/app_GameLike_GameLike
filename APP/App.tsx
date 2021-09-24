import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';



const Tab = createBottomTabNavigator();
/*
<NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
*/
export default function App() {
  return (
    
    <View>
      {HomeScreen}
    </View>
      
      
    
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
