import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {questEndStyles} from '../Styles/questEndStyles';
import textStyles from '../Styles/questTextStyles';
import {todayQuestScreenStyles} from '../Styles/todayQuestScreenStyles';

export type QuestEndScreenProps = {
  questName: string;
  takenTime: string;
  takenExp: number;
};

export default function QuestEndScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const data: QuestEndScreenProps = route.params.props;
  //퀘스트 명
  //수행 시간
  //획득 경험치
  //레벨 게이지
  return (
    <View style={todayQuestScreenStyles.container}>
      <View style={[{flex: 1}, questEndStyles.mg]}>
        <View style={questEndStyles.textView}>
          <Text style={textStyles.sn}>{'퀘스트 명: ' + data.questName}</Text>
        </View>
        <View style={questEndStyles.textView}>
          <Text style={textStyles.sn}>{'수행 시간: ' + data.takenTime}</Text>
        </View>
        <View style={questEndStyles.textView}>
          <Text style={textStyles.sn}>{'획득 경험치: ' + data.takenExp}</Text>
        </View>
      </View>
      <View style={todayQuestScreenStyles.bottomView}>
        <TouchableOpacity
          style={todayQuestScreenStyles.endButton}
          onPress={() => navigation.goBack()}>
          <Text style={todayQuestScreenStyles.questAddText}>뒤로</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = questEndStyles;
