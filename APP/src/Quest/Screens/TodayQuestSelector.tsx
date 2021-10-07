import React, {useCallback, useMemo, useState, FC} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import GetTodayString from '../Times/GetTodayString';
import QuestByTime from '../Modules/QuestByTime';
import textStyles from '../Styles/QuestTextStyles';
import {QuestData} from '../Datas';
import {TouchableOpacity} from 'react-native-gesture-handler';

type TodayQuestSelectorProps = {
  item: QuestData.DataType;
};

const TodayQuestSelector: FC<TodayQuestSelectorProps> = ({item}) => {
  const [isAdderOpened, setAdderOpened] = useState(false);
  return (
    <View>
      <Text>이 창에서 퀘스트를 선택해주세요</Text>
      <TouchableOpacity style={styles.tco} onPress={() => setAdderOpened(true)}>
        <Text>퀘스트 추가</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginVertical: 10},
  tco: {width: '100%', height: 75, borderColor: '#000000', borderWidth: 3},
});

export default TodayQuestSelector;
