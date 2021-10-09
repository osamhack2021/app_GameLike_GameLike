import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import get2Digits from '../Times/get2Digits';
import getDate from '../Times/getDate';

type QuestByTimeProps = {
  date: string;
  during: number;
  task: string;
  onPress?: () => void;
};

const QuestByTime: FC<QuestByTimeProps> = ({date, during, task, onPress}) => {
  const startDate = getDate(date);
  const endDate = getDate(date);
  endDate.setMinutes(endDate.getMinutes() + during);
  const myTime =
    get2Digits(startDate.getHours()) +
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
      <Text>{startDate.toString()}</Text>
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
