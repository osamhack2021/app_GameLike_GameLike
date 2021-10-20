import React, {useCallback, useState} from 'react';
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
  ImageBackground,
  Alert,
} from 'react-native';
import axios from 'axios';

const RegisterScreen = ({navigation}: {navigation: any}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [userenDate, setUserenDate] = useState('');
  const [userdisDate, setUserdisDate] = useState('');
  const [plog, setPLog] = useState('');

  const onClickRegister = useCallback((e, p, n, en, dis) => {
    axios
      .post('www.gamelike.best/auth/join', {
        email: e,
        password: p,
        nick: n,
        enlistDate: en,
        dischargeDate: dis,
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
    <View style={styles.back}>
      <ImageBackground
        source={require('../assets/images/background/background.png')}
        style={styles.bg}>
        <View style={styles.Container}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="이메일"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              placeholder="비밀번호"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserNickname => setUserNickname(UserNickname)}
              placeholder="이름"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserenDate => setUserenDate(UserenDate)}
              placeholder="입대일자"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserdisDate => setUserdisDate(UserdisDate)}
              placeholder="전역일자"
              placeholderTextColor="white"
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {
              onClickRegister(
                userEmail,
                userPassword,
                userNickname,
                userenDate,
                userdisDate,
              );
            }}>
            <Text style={styles.buttonTextStyle}>회원가입</Text>
            <Text>{plog}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  back: {
    flex: 1,
  },
  bg: {},
  Container: {
    width: '100%',
    height: '100%',
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
    color: '#29434e',
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
    textDecorationColor: '#000000',
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
