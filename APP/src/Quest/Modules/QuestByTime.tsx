import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type QuestByTimeProps = {
  startTime: number;
  during: number;
  task: string;
  onPress?: () => void;
};

const QuestByTime: FC<QuestByTimeProps> = ({
  startTime,
  during,
  task,
  onPress,
}) => {
  const endTime =
    startTime +
    Math.floor(((startTime % 100) + during) / 60) * 100 +
    (during % 60);
  const startHour = Math.floor(startTime / 100);
  const startMinute = startTime % 100;
  const endHour = Math.floor((startMinute + during) / 60) + startHour;
  const endMinute = (startMinute + during) % 60;
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
  tco: {width: '100%', height: 75, borderColor: '#000000'},
});

export default QuestByTime;
