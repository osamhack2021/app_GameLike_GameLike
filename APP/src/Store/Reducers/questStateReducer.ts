import {QuestGotoActions} from '../Actions';

export const questStateReducer = (
  state = {prevTaskChecked: false, todayTaskChecked: false},
  action: QuestGotoActions,
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
