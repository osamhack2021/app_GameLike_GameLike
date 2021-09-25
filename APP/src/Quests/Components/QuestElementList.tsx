import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import QuestElement from './QuestElement';
import * as QDS from '../datas/QuestDataSet';
import * as QD from '../datas/QuestData';

const quests: QD.QuestData[] = QDS.GetDataSets();
type QuestElementListProps = {
  questDatas: QD.QuestData[];
  visible: boolean;
};
const QuestElementList: FC<QuestElementListProps> = ({questDatas, visible}) => {
  if (visible) {
    return (
      <View>
        <FlatList
          data={questDatas}
          renderItem={({item}) => <QuestElement data={item} />}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
  } else {
    return <></>;
  }
};

export default QuestElementList;
