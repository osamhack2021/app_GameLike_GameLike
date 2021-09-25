import React from 'react';
import type {FC, ReactNode} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import type {FieldData} from '../datas/FieldData';
//import {Colors} from 'react-native-paper';

type FieldElementProps = {
  data?: FieldData;
};

const FieldElement: FC<FieldElementProps> = ({data}) => {
  return (
    <View style={styles.view}>
      <Text>아이콘</Text>
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
