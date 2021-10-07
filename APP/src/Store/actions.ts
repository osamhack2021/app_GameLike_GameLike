import type {Action} from 'redux';
import {QuestData} from '../Quest/Datas';

export type LoginActions = Action;
export type QuestCheckActions =
  | GotoCurAction
  | GotoPrevAction
  | GotoTodayAction;
export type QuestInsertActions = InsertTodayQuestAction;

export type Actions = QuestCheckActions | QuestInsertActions;

export type GotoPrevAction = Action<'gotoPrev'>;
export type GotoCurAction = Action<'gotoCur'>;
export type GotoTodayAction = Action<'gotoToday'>;

export const gotoPrevAction = () => ({
  type: 'gotoPrev',
});
export const gotoCurAction = () => ({
  type: 'gotoCur',
});
export const gotoTodayAction = () => ({
  type: 'gotoToday',
});

//data insert actions
export type InsertTodayQuestAction = Action<'insertTodayQuests'> & {
  datas: QuestData.DataType[];
};
export const insertTodayQuestsAction = (datas: QuestData.DataType[]) => ({
  type: 'insertTodayQuests',
  datas: datas,
});
