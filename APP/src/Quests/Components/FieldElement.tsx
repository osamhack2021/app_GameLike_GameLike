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
      <FieldIcon iconName={data.iconName} />
      <View>
        <Text>가운데 텍스트1</Text>
        <Text>가운데 텍스트2</Text>
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
    height: 50,
    borderWidth: 1,
    borderColor: '#BFFF00',
  },
  centerTextView: {
    alignItems: 'flex-start',
  },
});

export default FieldElement;
