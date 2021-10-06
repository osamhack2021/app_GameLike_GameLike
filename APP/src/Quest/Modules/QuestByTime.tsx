import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type QuestByTimeProps = {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  task: string;
  onPress?: () => void;
};

const QuestByTime: FC<QuestByTimeProps> = ({
  startHour,
  startMinute,
  endHour,
  endMinute,
  task,
  onPress,
}) => {
  const myTime =
    startHour.toString() +
    ':' +
    startMinute.toString() +
    '~' +
    endHour.toString() +
    ':' +
    endMinute.toString();

  if (!onPress) {
    onPress = () => {};
  }

  return (
    <View style={styles.view}>
      <Text>{myTime}</Text>
      <TouchableOpacity style={styles.tco} onPress={onPress}>
        <Text>{task}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75},
});

export default QuestByTime;
