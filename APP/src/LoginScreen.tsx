import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function LoginScreen({navigation}: {navigation: any}) {
  
  const [log, setLog] = useState('');
  const [plog, setPLog] = useState('');
  const [email, setEmail] = useState('');
  const [nick, setNick] = useState('');
  const [pw, setPW] = useState('');
  

  axios
    .get('https://52.231.66.60/auth/join')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>LOGIN</Text>
      <TextInput
        style={styles.textFormTop}
        placeholder={'아이디'}
        autoCapitalize="none"
        returnKeyType="next"
        underlineColorAndroid="#f000"
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.textFormTop}
        placeholder={'비밀번호'}
        autoCapitalize="none"
        returnKeyType="next"
        underlineColorAndroid="#f000"
        blurOnSubmit={false}
      />
      <Button title="로그인" onPress={() => navigation.navigate('MAIN')} />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate('REGISTER')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDB0B0',
  },
  textFormTop: {
    margin: 5,
  },
  yellow: {
    color: '#FFD858',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    fontSize: 30,
    margin: 30,
  },
});
