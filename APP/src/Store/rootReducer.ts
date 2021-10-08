import {AppState} from './AppState';
import {combineReducers} from 'redux';
import type {
  LoginActions,
  QuestCheckActions,
  QuestInsertActions,
} from './actions';

export const questDatasReducer = (
  state = {todayDatas: []},
  action: QuestInsertActions,
) => {
  switch (action.type) {
    case 'insertTodayQuests':
      return {todayDatas: [...state.todayDatas, ...action.datas]};
    case 'replaceTodayQuests':
      return {todayDatas: [...action.datas]};
  }
  return state;
};

export const questStateReducer = (
  state = {prevTaskChecked: false, todayTaskChecked: false},
  action: QuestCheckActions,
) => {
  switch (action.type) {
    case 'gotoPrev':
      return {prevTaskChecked: false, todayTaskChecked: false};
    case 'gotoCur':
      return {prevTaskChecked: true, todayTaskChecked: false};
    case 'gotoToday':
      return {prevTaskChecked: true, todayTaskChecked: true};
  }
  return state;
};

export const rootReducer = combineReducers({
  questScreenState: questStateReducer,
  questDatas: questDatasReducer,
});
