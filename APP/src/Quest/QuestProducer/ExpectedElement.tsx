import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import get2Digits from '../Times/get2Digits';
import getDate from '../Times/getDate';

type QuestByTimeProps = {
  name: string;
  onPress?: () => void;
};

const QuestElement: FC<QuestByTimeProps> = ({name, onPress}) => {
  if (!onPress) {
    onPress = () => {};
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.tco} onPress={onPress}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 3},
});

export default QuestElement;
