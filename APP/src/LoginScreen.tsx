import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e: {
    target: {value: React.SetStateAction<string>};
  }) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e: {
    target: {value: React.SetStateAction<string>};
  }) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log('click login');
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      axios
        .get('/user_inform/login')
        .then(res => console.log(res))
        .catch();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [],
  );

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
