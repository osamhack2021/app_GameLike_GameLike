import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class LoginScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
              <Text>GAME LIKE</Text> 
              <TextInput style={styles.inputBox} value={"ID"}/>
              <TextInput style={styles.inputBox} value={"PW"}/>           
              <button>로그인</button>
              <button >회원가입</button>
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
  inputBox: {
    backgroundColor: 'white',
    margin: 5,
  }
});