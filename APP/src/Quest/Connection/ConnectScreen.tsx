import React, {useCallback} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import axios from 'axios';

export default function ConnectScreen({navigation}: {navigation: any}) {
  const axGet = useCallback(() => {
    axios
      .get('http://52.231.66.60/auth/join')
      .then(Response => {
        Alert.alert(Response.data);
      })
      .catch(Error => {
        Alert.alert(Error);
      });
  }, []);
  const axPost = useCallback(() => {
    axios
      .post('http://52.231.66.60/auth/join')
      .then(Response => {
        Alert.alert(Response.data);
      })
      .catch(Error => {
        Alert.alert(Error);
      });
  }, []);

  return (
    <View>
      <Text>ConnectScreen</Text>
      <Button title="get" onPress={axGet} />
      <Button title="post" onPress={axPost} />
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate('TODAY');
        }}
      />
    </View>
  );
}
