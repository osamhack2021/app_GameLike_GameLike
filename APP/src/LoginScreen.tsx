import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const LoginScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>
        LOGIN
        </Text>
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
  <Button title="로그인" onPress = {() => navigation.navigate('MAIN')}/>
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


export default LoginScreen;
