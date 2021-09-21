import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import HomeTab from './TabNavigator/HomeTab'
import MenuTab from './TabNavigator/MenuTab'
import QuestTab from './TabNavigator/QuestTab'
import SettingTab from './TabNavigator/SettingTab'
import ProfileTab from './TabNavigator/ProfileTab'

const bottomTab = createBottomTabNavigator();

/*
const AppTabNavigator = createBottomTabNavigator({
  HomeTab: { screen: HomeTab },
  MenuTab: { screen: MenuTab },
  QuestTab: { screen: QuestTab },
  SettingTab: { screen: SettingTab },
  ProfileTab: { screen: ProfileTab }
});
const AppTabContainet = createAppContainer(AppTabNavigator);
*/

export default class HomeScreen extends Component {
    render(){
        return (

            <View>

                <View style={styles.container}>
                    <Text>GAME LIKE</Text> 
              
                </View>

            <View>
              
              
                    
                </View>

            </View>

          );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});