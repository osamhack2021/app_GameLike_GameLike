import React from 'react';
import type {FC, ReactNode} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import type {FieldData} from './FieldData';
import {Colors} from 'react-native-paper';

type QuestFieldProps = {
  data?: FieldData;
};

const QuestField: FC<QuestFieldProps> = ({data}) => {
  return (
    <View style={styles.view}>
      <Text>왼쪽</Text>
      <Text>가운데</Text>
      <Text>오른쪽</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    backgroundColor: '#BFFF00',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 300,
    borderRadius: 150,
  },
});

export default QuestField;
