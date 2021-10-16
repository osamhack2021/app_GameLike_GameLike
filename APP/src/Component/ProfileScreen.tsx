import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import {useState, useEffect, useCallback, createRef} from 'react';
import axios from 'axios';
import {color} from 'native-base/lib/typescript/theme/styled-system';

// default값들임, 데이터 불러왔으면 지우기
var name = 'name';
var email = 'email';
var day = 'day';

export default function ProfileScreen() {
  const [log, setLog] = useState('');
  const testEmail = 'test@n.n';

  const onClickUserinfo = () => {
    axios
      .post('http://52.231.66.60/profiles', null, {
        params: {
          email: testEmail,
        },
      })
      .then(response => {
        try {
          setLog(JSON.stringify(response.data));
        } catch (e) {
          setLog('일단 잘 됨');
        }
      })
      .catch(error => {
        if (error instanceof Error) {
          setLog(error.message);
        } else {
          setLog('에러다 에러');
        }
      });
  };

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

  useEffect(() => {
    onClickUserinfo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileCom}>
        <Text style={styles.profileText}>Profile Component</Text>
        <Button title="로그아웃" onPress={() => onClickLogout()} />
        <Text style={styles.profileText}>{log}</Text>
      </View>

      <View style={styles.levelCom}>
        <Text>Level Component</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#008080',
  },
  profileCom: {
    flex: 9,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#008080',
  },
  profileText: {
    color: 'white',
  },
  levelCom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
