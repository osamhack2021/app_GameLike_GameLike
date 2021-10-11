import type {Action} from 'redux';
import reloadExpected from '../../connection/reloadExpected';
import {ExpectedData} from '../../Quest/Datas';

export type ExpectedDataActions =
  | InsertExpectedAction
  | ReplaceExpectedAction
  | ReplaceExpectedActionByIndex
  | ReloadExpectedAction;

export type InsertExpectedAction = Action<'insertExpected'> & {
  datas: ExpectedData.DataType[];
};
export const insertExpectedAction = (datas: ExpectedData.DataType[]) => ({
  type: 'insertExpected',
  datas: datas,
});

//data replace actions
export type ReplaceExpectedAction = Action<'replaceExpected'> & {
  datas: ExpectedData.DataType[];
};
export const replaceExpectedAction = (datas: ExpectedData.DataType[]) => ({
  type: 'replaceExpected',
  datas: datas,
});

//data replace actions by Index
export type ReplaceExpectedActionByIndex = Action<'replaceExpectedByIndex'> & {
  data: ExpectedData.DataType;
  index: number;
};
export const replaceExpectedActionByIndex = (
  data: ExpectedData.DataType,
  index: number,
) => ({
  type: 'replaceExpectedByIndex',
  data: data,
  index: index,
});

//data reload actions
export type ReloadExpectedAction = Action<'reloadExpected'> & {
  datas: ExpectedData.DataType[];
};
export const reloadExpectedAction = () => {
  const [log, datas] = reloadExpected();
  return {
    type: 'reloadExpected',
    datas: datas,
  };
};
