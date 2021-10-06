import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type QuestByTimeProps = {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  task: string;
};

const QuestByTime: FC<QuestByTimeProps> = ({
  startHour,
  startMinute,
  endHour,
  endMinute,
  task,
}) => {
  const myTime =
    startHour.toString() +
    ':' +
    startMinute.toString() +
    '~' +
    endHour.toString() +
    ':' +
    endMinute.toString();
  return (
    <View>
      <Text>{myTime}</Text>
      <TouchableOpacity>
        <Text>{task}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuestByTime;
