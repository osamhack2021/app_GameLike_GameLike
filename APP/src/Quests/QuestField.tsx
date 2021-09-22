import type React from 'react';
import type {FC, ReactNode} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import type {FieldData} from './FieldData';
import {Colors} from 'react-native-paper';

type QuestFieldProps = {
  data?: FieldData;
};

const QuestField: FC<QuestFieldProps> = ({data}) => {
  return (
    <View style={[styles.view]}>
      <View>
        <Text>left</Text>
      </View>
      <View>
        <Text>center</Text>
      </View>
      <View>
        <Text>right</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    backgroundColor: Colors.lime100,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: '300',
    borderRadius: 150,
  },
});

export default QuestField;
