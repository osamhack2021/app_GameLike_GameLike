import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import get2Digits from '../Times/get2Digits';

type QuestByTimeProps = {
  date: string;
  during: number;
  task: string;
  onPress?: () => void;
};

const QuestByTime: FC<QuestByTimeProps> = ({date, during, task, onPress}) => {
  let startDate = new Date(date);
  let endDate = new Date(date);
  endDate.setMinutes(endDate.getMinutes() + during);
  const myTime =
    startDate.getHours() +
    ':' +
    get2Digits(startDate.getMinutes()) +
    '~' +
    get2Digits(endDate.getHours()) +
    ':' +
    get2Digits(endDate.getMinutes());

  if (!onPress) {
    onPress = () => {};
  }

  return (
    <View style={styles.view}>
      <Text>{"'" + date + "'"}</Text>
      <Text>{startDate.toString()}</Text>
      <Text>{new Date().toString()}</Text>
      <Text>{new Date(date).toString()}</Text>
      <Text>{new Date(2021, 10, 9, 12, 30, 25).toString()}</Text>
      <Text>{new Date('2021-10-09 12:30:25').toString()}</Text>
      <Text>{myTime}</Text>
      <TouchableOpacity style={styles.tco} onPress={onPress}>
        <Text>{task}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 3},
});

export default QuestByTime;
