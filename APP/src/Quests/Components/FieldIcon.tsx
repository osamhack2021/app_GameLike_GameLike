import React from 'react';
import type {FC} from 'react';
import {View, Image} from 'react-native';

type FieldIconProps = {
  iconName: string;
  width: number;
  height: number;
};

const FieldIcon: FC<FieldIconProps> = ({iconName, width, height}) => {
  let result;
  if (iconName.localeCompare('development')) {
    result = require('../../assets/icons/development.png');
  } else if (iconName.localeCompare('sport')) {
    result = require('../../assets/icons/sport.png');
  } else if (iconName.localeCompare('study')) {
    result = require('../../assets/icons/study.png');
  } else {
    result = require('../../assets/icons/0.png');
  }
  return (
    <View>
      <Image source={result} width={width} height={height} />
    </View>
  );
};

export default FieldIcon;
