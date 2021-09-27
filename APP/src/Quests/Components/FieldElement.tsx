import React, {useState} from 'react';
import type {FC} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import type {FieldData} from '../datas/FieldData';
import FieldIcon from './FieldIcon';
import {QuestData} from '../datas/QuestData';
import QuestElement from './QuestElement';
import Icon from 'react-native-vector-icons/Entypo';
import QuestElementList from './QuestElementList';
//import {Colors} from 'react-native-paper';

type FieldElementProps = {
  data: FieldData;
  questDatas: QuestData[];
};

//아마 제대로 작동 안할듯
//리액트 훅 적용해야 할 것으로 예상
let listVisible: boolean = false; //이거 리액트 훅으로 바꿀 수 있으면 바꾸기

const FieldElement: FC<FieldElementProps> = ({data, questDatas}) => {
  const [questVisible, setQuestVisible] = useState(false);

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
        <TouchableOpacity
          onPress={() => {
            setQuestVisible(!questVisible);
          }}>
          <Icon name="chevron-with-circle-down" style={styles.rightbox} />
        </TouchableOpacity>
      </View>
      <QuestElementList visible={questVisible} questDatas={questDatas} />
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
