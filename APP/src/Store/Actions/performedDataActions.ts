import type {Action} from 'redux';
import {PerformedData} from '../../Quest/Datas';

export type PerformedDataActions =
  | InsertPerformedAction
  | ReplacePerformedAction
  | ReplacePerformedActionByIndex;

export type InsertPerformedAction = Action<'insertPerformed'> & {
  datas: PerformedData.DataType[];
};
export const insertPerformedAction = (datas: PerformedData.DataType[]) => ({
  type: 'insertPerformed',
  datas: datas,
});

//data replace actions
export type ReplacePerformedAction = Action<'replacePerformed'> & {
  datas: PerformedData.DataType[];
};
export const replacePerformedAction = (datas: PerformedData.DataType[]) => ({
  type: 'replacePerformed',
  datas: datas,
});

//data replace actions by Index
export type ReplacePerformedActionByIndex =
  Action<'replacePerformedByIndex'> & {
    data: PerformedData.DataType;
    index: number;
  };
export const replacePerformedActionByIndex = (
  data: PerformedData.DataType,
  index: number,
) => ({
  type: 'replacePerformedByIndex',
  data: data,
  index: index,
});
