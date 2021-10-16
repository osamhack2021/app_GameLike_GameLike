import {numberLiteralTypeAnnotation} from '@babel/types';
import type {Action} from 'redux';
import reloadExpected from '../../connection/reloadExpected';
import {ExpectedData} from '../../Quest/Datas';

export type LevelActions = GrowExpAction;

export type GrowExpAction = Action<'obtainExp'> & {
  exp: number;
};

export const growExpAction = (exp: number) => ({
  type: 'obtainExp',
  exp: exp,
});
