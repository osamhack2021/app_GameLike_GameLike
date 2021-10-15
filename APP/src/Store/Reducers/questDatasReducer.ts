import {QuestDataActions} from '../Actions';

export const questDatasReducer = (state = [], action: QuestDataActions) => {
  switch (action.type) {
    case 'insertTodayQuests':
      return [...state, ...action.datas];
    case 'replaceTodayQuests':
      return [...action.datas];
  }
  return state;
};
