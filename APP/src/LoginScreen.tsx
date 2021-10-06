import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const LoginScreen = ({navigation}: {navigation: any}) => {
  /*
  const express = require('express');
  const app = express();
  app.get('/', (req: any, res: {send: (arg0: string) => void}) => {
    res.send('Hello World');
  });

  axios
    .post('52.231.66.60', {
      id: 4,
      name: 'Cho',
    })
    .then(function (response) {
      console.log(response);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    });

  const users = [
    {id: 1, name: '유저1'},
    {id: 2, name: '유저2'},
    {id: 3, name: '유저3'},
  ];

  */

  axios
    .post('http://52.231.66.60', {
      firstName: 'Fred',
      lastName: 'Flintstone',
    })
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
};

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

export default LoginScreen;
