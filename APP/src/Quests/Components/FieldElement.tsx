import React from 'react';
import type {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import type {FieldData} from '../datas/FieldData';
import FieldIcon from './FieldIcon';
//import {Colors} from 'react-native-paper';

type FieldElementProps = {
  data: FieldData;
};

const FieldElement: FC<FieldElementProps> = ({data}) => {
  return (
    <View style={styles.view}>
      <FieldIcon iconName={data.iconName} width={60} height={60} />
      <View style={styles.textView}>
        <Text style={styles.titleText}>{data.name}</Text>
        <Text style={styles.subText}>{data.peopleWith}명이 함께합니다.</Text>
      </View>
      <Text>체크박스</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 75,
    borderWidth: 1,
    borderColor: '#BFFF00',
  },
  textView: {
    flex: 1,
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 18,
  },
  subText: {
    fontSize: 12,
  },
});

export default FieldElement;
