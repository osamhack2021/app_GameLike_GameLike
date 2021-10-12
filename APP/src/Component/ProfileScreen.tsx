import React from 'react';
import {View, Text} from 'react-native';

// default값들임, 데이터 불러왔으면 지우기
var name = 'name';
var email = 'email';
var day = 'day';

export default function ProfileScreen() {
  return (
    <View>
      <View>
        <Text>ProfileScreen</Text>
      </View>
      <View>
        <Text>이름 : {name} </Text>
        <Text>이메일 : {email} </Text>
        <Text>입대일자 : {day} </Text>
        <Text>D-DAY : </Text>
      </View>
    </View>
  );
}
