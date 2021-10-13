import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {useState, useEffect, useCallback, createRef} from 'react';
import axios from 'axios';

// default값들임, 데이터 불러왔으면 지우기
var name = 'name';
var email = 'email';
var day = 'day';

export default function ProfileScreen() {
  const [log, setLog] = useState('');

  const onClickLogout = () => {
    axios
      .get('http://52.231.66.60/auth/logout')
      .then(response => {
        try {
          setLog(`로그아웃 성공이오 ${JSON.stringify(response.data)}`);
        } catch (e) {
          setLog('로그아웃 성공 했지만');
        }
      })
      .catch(error => {
        if (error instanceof Error) {
          setLog(error.message);
        } else {
          setLog('로그아웃 error ocurred');
        }
      });
  };

  return (
    <View>
      <View>
        <Text>ProfileScreen</Text>
      </View>
      <View>
        <Text>이름 : {name} </Text>
        <Text>이메일 : {email} </Text>
        <Text>입대일자 : {day} </Text>
        <Text>D-DAY : </Text>
        <Button title="로그아웃" onPress={() => onClickLogout()} />
        <Text>log</Text>
      </View>
    </View>
  );
}
