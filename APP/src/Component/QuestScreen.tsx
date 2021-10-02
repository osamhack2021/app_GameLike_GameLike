import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import QuestTab from '../Quests/QuestTab';

const QuestScreen = () => {
  return (
    <ScrollView>
      <QuestTab />
    </ScrollView>
  );
};

export default QuestScreen;
