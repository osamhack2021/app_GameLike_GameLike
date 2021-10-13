import * as React from 'react';
import {useState, useEffect, useCallback, createRef} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default function LoginScreen({navigation}: {navigation: any}) {
  const [log, setLog] = useState('');
  const [plog, setPLog] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();
  /*
  const gotoMain = () => {
    navigation.navigate('MAIN');
  };
*/

  const onClickLogin = () => {
    axios
      .post('http://52.231.66.60/auth/kakao', null, {
        params: {
          email: userEmail,
          password: userPassword,
        },
      })
      .then(res => {
        if (res.data) {
          try {
            setPLog(`로그인 성공 ${res.data}`);
            navigation.navigate('MAIN');
          } catch (e) {
            if (e instanceof Error) {
              setLog(e.message);
            } else {
              setLog('뭘까');
            }
          }
        } else {
          setPLog(`아이디와 비밀번호를 확인하세요 ${res.data}`);
        }
      })
      .catch(error => {
        setPLog(JSON.stringify(error));
      });
    return false;
  };

  const onClickKakaoLogin = () => {
    axios
      .post('http://52.231.66.60/auth/login', null, {
        params: {
          email: userEmail,
          password: userPassword,
        },
      })
      .then(res => {
        if (res.data) {
          try {
            setPLog(`로그인 성공 ${res.data}`);
            //navigation.navigate('MAIN');
          } catch (e) {
            if (e instanceof Error) {
              setLog(e.message);
            } else {
              setLog('뭘까');
            }
          }
        } else {
          setPLog(`아이디와 비밀번호를 확인하세요 ${res.data}`);
        }
      })
      .catch(error => {
        setPLog(JSON.stringify(error));
      });
    return false;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.yellow}>LOGIN</Text>
        <TextInput
          style={styles.textFormTop}
          onChangeText={UserEmail => setUserEmail(UserEmail)}
          placeholder={'이메일'}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.textFormTop}
          onChangeText={UserPassword => setUserPassword(UserPassword)}
          placeholder={'비밀번호'}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
      </View>
      <View>
        {errortext !== '' ? <Text>{errortext}</Text> : null}
        <Button title="카카오로그인" onPress={() => onClickKakaoLogin()} />
        <Button title="로그인" onPress={() => onClickLogin()} />
        <Button
          title="회원가입"
          onPress={() => navigation.navigate('REGISTER')}
        />
      </View>
      <Text>{log}</Text>
      <Text>{plog}</Text>
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
