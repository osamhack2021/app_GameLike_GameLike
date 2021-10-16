import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Button, Alert} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {growExpAction} from '../Store/Actions/levelActions';
import {AppState} from '../Store';
import {getLevelFromExp, getLevelUpExpByLevel} from './LevelFunctions';

export function LevelComponent() {
  const userExp = useSelector<AppState, number>(state => state.level.exp);
  const [lv, exp] = getLevelFromExp(userExp);
  const maxExp = getLevelUpExpByLevel(lv);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(growExpAction(8000));
  }, [dispatch]);

  return (
    <View>
      <View>
        <Text>레벨 정보</Text>
        <Text>(계급)</Text>
      </View>
      <View>
        <Text>{'Lv.' + lv}</Text>
        <Text>{'경험치: ' + exp + '/' + maxExp}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LevelComponent;
