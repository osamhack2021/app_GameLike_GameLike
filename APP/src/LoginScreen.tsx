import * as React from 'react';
import {useState, useEffect, useCallback, createRef} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default function LoginScreen({navigation}: {navigation: any}) {
  const [log, setLog] = useState('');
  const [plog, setPLog] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  /*
    if (userEmail === 'a' && userPassword === 'b') {
      navigation.navigate('MAIN');
      Alert.alert('Login Success');
      console.log('Login Success');
    } else {
      setErrortext('Please check your email id or password');
      Alert.alert('Please check your email id or password');
      console.log('Please check your email id or password');
    }
    setErrortext('');
    if (!userEmail) {
      Alert.alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      Alert.alert('Please fill Password');
      return;
    }
    setLoading(true);
    */

  const handleSubmitPress = useCallback(() => {
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
        <Button title="로그인" onPress={handleSubmitPress} />
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
