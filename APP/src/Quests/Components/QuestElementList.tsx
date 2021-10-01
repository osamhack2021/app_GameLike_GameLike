import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import QuestElement from './QuestElement';
import * as QDS from '../datas/QuestDataSet';
import * as QuestData from '../datas/QuestData';

const quests: QuestData.DataType[] = QDS.GetDataSets();
type QuestElementListProps = {
  iconName: string;
  questDatas: QuestData.DataType[];
  visible: boolean;
};
const QuestElementList: FC<QuestElementListProps> = ({
  iconName,
  questDatas,
  visible,
}) => {
  if (visible) {
    return (
      <View>
        <FlatList
          data={questDatas}
          renderItem={({item}) => (
            <QuestElement data={item} iconName={iconName} />
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
  } else {
    return null;
  }
};

export default QuestElementList;
