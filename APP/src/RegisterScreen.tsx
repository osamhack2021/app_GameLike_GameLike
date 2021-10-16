import React, {useEffect, useCallback, useState, createRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Modal,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import axios from 'axios';

const RegisterScreen = ({navigation}: {navigation: any}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [userDate, setUserDate] = useState('');
  const [plog, setPLog] = useState('');

  const onClickRegister = useCallback((e, p, n) => {
    axios
      .post('http://52.231.66.60/auth/join', {
        email: e,
        password: p,
        nick: n,
        // date: d,
      })
      .then(response => {
        setPLog(JSON.stringify(response.data));
      })
      .catch(error => {
        setPLog(JSON.stringify(error));
      });
  }, []);

  return (
    <View style={styles.Container}>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={UserEmail => setUserEmail(UserEmail)}
          placeholder="이메일"
        />
      </View>

      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={UserPassword => setUserPassword(UserPassword)}
          placeholder="비밀번호"
        />
      </View>

      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={UserNickname => setUserNickname(UserNickname)}
          placeholder="이름"
        />
      </View>

      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={UserDate => setUserDate(UserDate)}
          placeholder="입대일자"
        />
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => {
          onClickRegister(userEmail, userPassword, userNickname);
        }}>
        <Text style={styles.buttonTextStyle}>회원가입</Text>
        <Text>{plog}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#307ecc',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});