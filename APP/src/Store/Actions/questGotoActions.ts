import type {Action} from 'redux';

export type QuestGotoActions = GotoCurAction | GotoPrevAction | GotoTodayAction;

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
