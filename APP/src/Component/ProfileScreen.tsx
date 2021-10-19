import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import {useState, useEffect, useCallback, createRef} from 'react';
import axios, {AxiosResponse} from 'axios';
import loadRanking from './Data/loadRanking';

let nick: any;
let email: any;
let enlistDate: any;
let dischargeDate: any;
let exp: any;
let level: any;
export default function ProfileScreen() {
  const [log, setLog] = useState('');
  const [plog, setpLog] = useState('');
  const [testEmail, setTestEmail] = useState('cho@n.n'); // 일단 하드코딩
  // const result: ProfileData.UserData[] = [];
  const postData = {
    email: testEmail,
  };

  const onClickUserinfo = () => {
    axios
      .post<{email: string}, AxiosResponse<string>>(
        'http://52.231.66.60/profiles',
        postData,
      )
      .then(response => {
        try {
          let jsonData = response.data;
          let obj = JSON.parse(jsonData);
          nick = obj.user.nick;
          email = obj.user.email;
          enlistDate = obj.user.enlistDate;
          dischargeDate = obj.user.dischargeDate;
          exp = obj.user.exp;
          level = obj.user.level;
          setLog(
            `
            UserInfo
            nick = ${obj.user.nick} 
            email = ${obj.user.email} 
            enlistDate = ${obj.user.enlistDate}
            dischargeDate = ${obj.user.dischargeDate}
            exp = ${obj.user.exp}
            level = ${obj.user.level}
            rank = ${obj.rank}
            `,
          );
        } catch (e) {
          if (e instanceof Error) {
            setLog('일단 잘 됨: ' + e.message);
          }
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

  const onClickRankinfo = () => {
    axios
      .get('http://52.231.66.60/rank')
      .then(response => {
        try {
          setpLog(JSON.stringify(response.data));
          const arr = JSON.parse(response.data);
        } catch (e) {
          setpLog('일단 잘 됨');
        }
      })
      .catch(error => {
        if (error instanceof Error) {
          setpLog(error.message);
        } else {
          setpLog('에러다 에러');
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
    onClickRankinfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileCom}>
        <Button title="로그아웃" onPress={() => onClickLogout()} />
        <Text style={styles.profileText}>
          Profile Component, {testEmail}
          {log}
        </Text>
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
    //justifyContent: 'center',
    //alignItems: 'center',
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
