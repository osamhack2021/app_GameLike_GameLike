import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backView}>
        <Text>대충 게임 배경이나 몽환적 배경</Text>
      </View>

      <View style={styles.scrollView}>
        <ScrollView>
          <View style={styles.checkView}>
            <Text>오늘의 출석체크!</Text>
          </View>

          <View style={styles.ddayView}>
            <Text>마왕성 도착까지 -일</Text>
          </View>

          <View style={styles.infoView}>
            <Text>나의 레벨</Text>
          </View>

          <View style={styles.listView}>
            <Text>
              추천친구{'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}추천친구들
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backView: {
    flex: 3,
    backgroundColor: 'powderblue',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  checkView: {
    flex: 2,
  },
  ddayView: {
    flex: 2,
  },
  infoView: {
    flex: 4,
  },
  listView: {
    flex: 1,
  },
  scrollView: {
    flex: 8,
    backgroundColor: 'lightgoldenrodyellow',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default HomeScreen;
