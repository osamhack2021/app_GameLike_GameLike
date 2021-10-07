import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  gotoPrevAction,
  gotoCurAction,
  gotoTodayAction,
} from '../../src/Store/actions';

export default function QuestScreenSelector() {
  const dispatch = useDispatch();
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => dispatch(gotoPrevAction())}
        style={styles.tco}>
        <Text>Prev</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(gotoTodayAction())}
        style={styles.tco}>
        <Text>Decider</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(gotoCurAction())}
        style={styles.tco}>
        <Text>Cur</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tco: {flex: 1},
  view: {width: '100%', heigth: 75, backgroundColor: '#0000ff'},
});
