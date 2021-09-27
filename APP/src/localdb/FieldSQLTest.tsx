import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {FieldData} from 'src/Quests/datas/FieldData';

const fields: Array<FieldData> = [];

export default function FieldSQLTest() {
  const children = fields.map(item => (
    <View>
      <Text>id: {item.id}</Text>
      <Text>name: {item.name}</Text>
      <Text>peopleWith: {item.peopleWith}</Text>
      <Text>iconName: {item.iconName}</Text>
    </View>
  ));
  return (
    <ScrollView>
      <Text>{children}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {borderWidth: 1},
});
