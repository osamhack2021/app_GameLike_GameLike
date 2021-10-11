import {QuestDataActions} from '../Actions';

export const questDatasReducer = (
  state = {todayDatas: []},
  action: QuestDataActions,
) => {
  switch (action.type) {
    case 'insertTodayQuests':
      return {todayDatas: [...state.todayDatas, ...action.datas]};
    case 'replaceTodayQuests':
      return {todayDatas: [...action.datas]};
  }
  return state;
};
