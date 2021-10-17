import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import get2Digits from '../Times/get2Digits';
import getDate from '../Times/getDate';

type QuestByTimeProps = {
  name: string;
  hashTag: string;
  disabled?: boolean;
  onPress?: () => void;
};

const ExpectedElement: FC<QuestByTimeProps> = ({
  name,
  hashTag,
  disabled,
  onPress,
}) => {
  if (!onPress) {
    onPress = () => {};
  }

  return (
    <View style={styles.view}>
      <View>
        <Text style={styles.hashTagText}>{'#' + hashTag}</Text>
      </View>
      <TouchableOpacity
        style={styles.tco}
        onPress={onPress}
        disabled={disabled || false}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  hashTagText: {color: '#fafafa'},
  tco: {
    width: '100%',
    height: 75,
    borderColor: '#000000',
    borderWidth: 3,
    backgroundColor: '#fafafa',
  },
});

export default ExpectedElement;
