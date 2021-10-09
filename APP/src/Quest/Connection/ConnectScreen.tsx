import React, {useCallback, useState} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import axios from 'axios';
import {TextInput} from 'react-native-gesture-handler';

export default function ConnectScreen({navigation}: {navigation: any}) {
  const [log, setLog] = useState('');
  const [plog, setPLog] = useState('');
  const [email, setEmail] = useState('');
  const [nick, setNick] = useState('');
  const [pw, setPW] = useState('');
  const axGet = useCallback(() => {
    Alert.alert('콜백 시작!');
    try {
      axios
        .get('http://52.231.66.60/auth/join')
        .then(response => {
          Alert.alert('then');
          try {
            setLog(JSON.stringify(response.data));
          } catch (e) {
            setLog('일단 잘 됨');
          }
        })
        .catch(error => {
          Alert.alert('catch');
          if (error instanceof Error) {
            setLog(error.message);
          } else {
            setLog('error ocurred');
          }
        });
    } catch (e) {
      Alert.alert('뭔가 잘못됨');
      if (e instanceof Error) {
        setLog(e.message);
      } else {
        setLog('뭔가 잘못됨');
      }
    }
  }, []);
  const axPost = useCallback((e, n, p) => {
    axios
      .post('http://52.231.66.60/auth/join', {
        email: e,
        nick: n,
        password: p,
      })
      .then(response => {
        setPLog(JSON.stringify(response.data));
      })
      .catch(error => {
        setPLog(JSON.stringify(error));
      });
  }, []);
  return (
    <View>
      <Text>ConnectScreen</Text>
      <Button title="get" onPress={axGet} />
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="email"
      />
      <TextInput
        value={nick}
        onChangeText={text => setNick(text)}
        placeholder="nickname"
      />
      <TextInput
        value={pw}
        onChangeText={text => setPW(text)}
        placeholder="pw"
      />
      <Button
        title="post"
        onPress={() => {
          axPost(email, nick, pw);
        }}
      />
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate('TODAY');
        }}
      />

      <Text>{log}</Text>
      <Text>{plog}</Text>
    </View>
  );
}
