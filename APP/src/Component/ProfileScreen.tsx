import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import {useState, useEffect, useCallback, createRef} from 'react';
import axios, {AxiosResponse} from 'axios';
import loadRanking from './Data/loadRanking';
import {getLevelFromExp} from 'src/Level/Functions/LevelFunctions';
import {serverurl} from '../serverurl';

let nick: any;
let email: any;
let enlistDate: any;
let dischargeDate: any;
export default function ProfileScreen() {
  const [log, setLog] = useState('');
  const [plog, setpLog] = useState('');
  const [testEmail, setTestEmail] = useState('cho@n.n'); // 일단 하드코딩
  const [nickname, setNickname] = useState('Network error');
  const [discharge, setDischarge] = useState('2022년 9월 22일');
  const [level, setLevel] = useState(1);
  const [rank, setRank] = useState(0);
  // const result: ProfileData.UserData[] = [];
  const postData = {
    email: testEmail,
  };

  const onClickUserinfo = () => {
    axios
      .post<{email: string}, AxiosResponse<string>>(
        serverurl + '/profiles',
        postData,
      )
      .then(response => {
        try {
          let jsonData = response.data;
          let obj = JSON.parse(jsonData);
          setNickname(obj.user.nick);
          setTestEmail(obj.user.email);
          setDischarge(obj.user.enlistDate);
          dischargeDate = obj.user.dischargeDate;
          const exp = obj.user.exp;
          const [lv, x] = getLevelFromExp(exp);
          setLevel(lv);
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
      .get(serverurl + '/rank')
      .then(response => {
        try {
          setpLog(JSON.stringify(response.data));
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
      .get(serverurl + '/auth/logout')
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
      <View style={styles.leftView}>
        <Text style={styles.profileText}>{nickname}</Text>
        <Text style={styles.emailText}>{testEmail}</Text>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.dcText}>{discharge}</Text>
        <Text style={styles.levelText}>Lv. {level}</Text>
        <Text style={styles.rankText}>랭킹 {rank}위</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#008080',
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#008080',
  },

  leftView: {
    flex: 7,
    marginLeft: 10,
  },
  profileText: {
    color: 'white',
    fontSize: 24,
    flex: 2,
    fontFamily: 'NotoSansKR-Bold',
    justifyContent: 'flex-end',
  },

  emailText: {
    flex: 1,
    color: 'white',
    fontSize: 12,
    fontFamily: 'NotoSansKR-Medium',
    marginBottom: 10,
    lineHeight: 15,
  },

  rightView: {
    flex: 3,
    alignItems: 'flex-end',
    marginRight: 5,
  },

  levelText: {
    color: 'white',
    fontSize: 24,
    flex: 2,
    fontFamily: 'NotoSansKR-Bold',
    justifyContent: 'center',
    lineHeight: 50,
  },

  rankText: {
    flex: 1,
    color: 'white',
    fontSize: 12,
    fontFamily: 'NotoSansKR-Medium',
    marginBottom: 10,
    lineHeight: 15,
  },
  dcText: {
    flex: 1,
    color: 'white',
    fontSize: 12,
    fontFamily: 'NotoSansKR-Medium',
    lineHeight: 18,
  },
});
