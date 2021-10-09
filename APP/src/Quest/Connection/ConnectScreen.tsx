import React, {useCallback, useState} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import axios from 'axios';

export default function ConnectScreen({navigation}: {navigation: any}) {
  const [log, setLog] = useState('');
  const axGet = useCallback(() => {
    try {
      axios
        .get('http://52.231.66.60/auth/join')
        .then(response => {
          try {
            setLog(response.data);
          } catch (e) {
            setLog('일단 잘 됨');
          }
        })
        .catch(error => {
          if (error instanceof Error) {
            setLog(error.message);
          } else {
            try {
              setLog(error);
            } catch (e) {
              setLog('');
              if (e instanceof Error) {
                setLog(e.message);
              } else {
                setLog('error ocurred');
              }
            }
          }
        });
    } catch (e) {
      if (e instanceof Error) {
        setLog(e.message);
      } else {
        setLog('뭔가 잘못됨');
      }
    }
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
      <Text>{log}</Text>
    </View>
  );
}
