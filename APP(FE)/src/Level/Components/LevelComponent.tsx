import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Button, Alert} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {growExpAction} from '../../Store/Actions/levelActions';
import {AppState} from '../../Store';
import {
  getLevelFromExp,
  getLevelUpExpByLevel,
} from '../Functions/LevelFunctions';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export function LevelComponent() {
  const userExp = useSelector<AppState, number>(state => state.level.exp);
  const [lv, exp] = getLevelFromExp(userExp);
  const maxExp = getLevelUpExpByLevel(lv);

  return (
    <View style={styles.container}>
      <View style={styles.levelIcon}>
        <Text style={styles.levelText}>{'Lv.' + lv}</Text>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.expText}>{'경험치: ' + exp + '/' + maxExp}</Text>
        <View style={styles.expBar}>
          <View style={{flex: exp, backgroundColor: '#00e676'}} />
          <View style={{flex: maxExp - exp, backgroundColor: '#ffffff'}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#102027',
  },

  levelIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#446280',
    marginLeft: 20,
  },
  levelText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
    color: 'white',
  },

  rightView: {
    flex: 1,
    alignItems: 'center',
  },
  expBar: {
    width: '80%',
    height: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e2f1f8',
  },
  expText: {
    fontSize: 13,
    color: 'white',
    marginBottom: 5,
  },
});

export default LevelComponent;
