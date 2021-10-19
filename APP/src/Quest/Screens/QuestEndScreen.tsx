import React from 'react';
import {Text, View} from 'react-native';

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
    <View>
      <View>
        <Text>{'퀘스트 명: ' + data.questName}</Text>
      </View>
      <View>
        <Text>{'수행 시간: ' + data.takenTime}</Text>
      </View>
      <View>
        <Text>{'획득 경험치: ' + data.takenExp}</Text>
      </View>
    </View>
  );
}
