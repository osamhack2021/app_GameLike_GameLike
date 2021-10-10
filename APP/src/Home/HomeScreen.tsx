import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const [topText, setTopText] = useState('오늘의 퀘스트를 만들어주세요!');

  const [canFight, setCanFight] = useState(true);
  const [canQuestAdd, setCanQuestAdd] = useState(true);
  const [canDoQuest, setCanDoQuest] = useState(true);
  return (
    <View style={styles.container}>
      <View>
        <Text>Profile Component</Text>
      </View>
      <View>
        <Text>Level Component</Text>
      </View>
      <View>
        <Text>{topText}</Text>
        <View>
          <Text>Avatar</Text>
        </View>
        <View>
          <Button
            title="퀘스트 제작하기"
            disabled={!canQuestAdd}
            onPress={() => {
              navigation.navigate('TODAY');
            }}
          />
          <Button
            title="퀘스트 수행하기"
            disabled={!canDoQuest}
            onPress={() => {
              navigation.navigate('CURRENT');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
