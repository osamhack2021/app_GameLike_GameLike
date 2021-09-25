import React from 'react';
import type {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import type {QuestData} from '../datas/QuestData';
import type {FieldData} from '../datas/FieldData';
import FieldIcon from './FieldIcon';
import * as FDS from '../datas/FieldDataSet';
//import {Colors} from 'react-native-paper';

type QuestElementProps = {
  data: QuestData;
};

const QuestElement: FC<QuestElementProps> = ({data}) => {
  let icon: string = FDS.GetIconNameFromId(data.fieldId);
  return (
    <View style={styles.view}>
      <FieldIcon iconName={icon} width={30} height={30} padding={10} />
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
