import React from 'react';
import type {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as QuestData from '../datas/QuestData';
import * as FieldData from '../datas/FieldData';
import FieldIcon from './FieldIcon';
//import {Colors} from 'react-native-paper';

type QuestElementProps = {
  data: QuestData.DataType;
  iconName: string;
};

const QuestElement: FC<QuestElementProps> = ({data, iconName}) => {
  return (
    <View style={styles.view}>
      <FieldIcon iconName={iconName} width={30} height={30} padding={10} />
      <View style={styles.textView}>
        <Text style={styles.titleText}>{data.name}</Text>
      </View>
      <Text style={styles.rightbox}>체크박스</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#BFFF00',
  },
  textView: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 5,
  },
  titleText: {
    fontSize: 12,
  },
  rightbox: {
    marginHorizontal: 10,
  },
});

export default QuestElement;
