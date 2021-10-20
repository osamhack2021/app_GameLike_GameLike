import * as React from 'react';
import {useState, useEffect, useCallback, createRef} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function LoginScreen({navigation}: {navigation: any}) {
  const [log, setLog] = useState('');
  const [plog, setPLog] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const onClickLogin = () => {
    axios
      .post('http://www.gamelike.best/login', null, {
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
              Alert.alert(e.message);
            } else {
              Alert.alert('뭘까');
            }
          }
        } else {
          Alert.alert(`아이디와 비밀번호를 확인하세요 ${res.data}`);
        }
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  const onClickKakaoLogin = () => {
    axios
      .get('www.gamelike.best/auth/kakao')
      .then(response => {
        Alert.alert('then');
        try {
          setLog(JSON.stringify(response.data));
          setPLog('카카오로그인성공');
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
  };

  return (
    <View style={styles.back}>
      <ImageBackground
        source={require('../assets/images/background/background.png')}
        style={styles.bg}>
        <View style={styles.container}>
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
          <View>
            {errortext !== '' ? <Text>{errortext}</Text> : null}
            <Button title="카카오로그인" onPress={() => onClickKakaoLogin()} />
            <Button title="로그인" onPress={() => onClickLogin()} />
            <Button
              title="회원가입"
              onPress={() => navigation.navigate('REGISTER')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
  },
  bg: {},
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFormTop: {
    margin: 5,
    width: '80%',
  },
  yellow: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    fontSize: 30,
    margin: 30,
  },
});
