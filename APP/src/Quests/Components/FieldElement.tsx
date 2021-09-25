import React from 'react';
import type {FC} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import type {FieldData} from '../datas/FieldData';
import FieldIcon from './FieldIcon';
import {QuestData} from '../datas/QuestData';
import QuestElement from './QuestElement';
//import {Colors} from 'react-native-paper';

type FieldElementProps = {
  data: FieldData;
  questDatas: QuestData[];
};

const FieldElement: FC<FieldElementProps> = ({data, questDatas}) => {
  return (
    <View>
      <View style={styles.view}>
        <FieldIcon
          iconName={data.iconName}
          width={50}
          height={50}
          padding={10}
        />
        <View style={styles.textView}>
          <Text style={styles.titleText}>{data.name}</Text>
          <Text style={styles.subText}>{data.peopleWith}명이 함께합니다.</Text>
        </View>
        <Text style={styles.rightbox}>체크박스</Text>
      </View>
      <FlatList
        data={questDatas}
        renderItem={({item}) => <QuestElement data={item} />}
        keyExtractor={(item, index) => item.id.toString()}
      />
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
    marginHorizontal: 5,
  },
  titleText: {
    fontSize: 18,
  },
  subText: {
    fontSize: 12,
  },
  rightbox: {
    marginHorizontal: 10,
  },
});

export default FieldElement;
