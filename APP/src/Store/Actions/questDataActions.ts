import type {Action} from 'redux';
import {QuestData} from '../../Quest/Datas';

export type QuestDataActions =
  | InsertTodayQuestAction
  | ReplaceTodayQuestAction
  | ReplaceTodayQuestActionByIndex;

export type InsertTodayQuestAction = Action<'insertTodayQuests'> & {
  datas: QuestData.DataType[];
};
export const insertTodayQuestsAction = (datas: QuestData.DataType[]) => ({
  type: 'insertTodayQuests',
  datas: datas,
});

//data replace actions
export type ReplaceTodayQuestAction = Action<'replaceTodayQuests'> & {
  datas: QuestData.DataType[];
};
export const replaceTodayQuestsAction = (datas: QuestData.DataType[]) => ({
  type: 'replaceTodayQuests',
  datas: datas,
});

//data replace actions by Index
export type ReplaceTodayQuestActionByIndex =
  Action<'replaceTodayQuestByIndex'> & {
    data: QuestData.DataType;
    index: number;
  };
export const replaceTodayQuestActionByIndex = (
  data: QuestData.DataType,
  index: number,
) => ({
  type: 'replaceTodayQuestByIndex',
  data: data,
  index: index,
});
