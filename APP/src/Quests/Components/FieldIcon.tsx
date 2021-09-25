import React from 'react';
import type {FC} from 'react';
import {View, Image} from 'react-native';
import {HotModuleReplacementPlugin} from 'webpack';

type FieldIconProps = {
  iconName: string;
  width: number;
  height: number;
};

const FieldIcon: FC<FieldIconProps> = ({iconName, width, height}) => {
  let result;
  if (iconName.localeCompare('development') === 0) {
    result = require('../../assets/icons/development.png');
  } else if (iconName.localeCompare('sport') === 0) {
    result = require('../../assets/icons/sport.png');
  } else if (iconName.localeCompare('study') === 0) {
    result = require('../../assets/icons/study.png');
  } else {
    result = require('../../assets/icons/0.png');
  }
  return (
    <View>
      <Image
        source={result}
        style={{
          width: width,
          height: height,
          margin: 15,
        }}
      />
    </View>
  );
};

export default FieldIcon;
