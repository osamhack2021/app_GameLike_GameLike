import React, {useCallback, useMemo, useState, FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import GetTodayString from '../Times/GetTodayString';
import QuestByTime from '../Modules/QuestByTime';
import textStyles from '../Styles/QuestTextStyles';
import {QuestData} from '../Datas';

type TodayQuestSelectorProps = {
  item: QuestData.DataType;
};

const TodayQuestSelector: FC<TodayQuestSelectorProps> = ({item}) => {
  return (
    <View>
      <Text>questSelector</Text>
    </View>
  );
};

export default TodayQuestSelector;
