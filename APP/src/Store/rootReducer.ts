import {AppState} from './AppState';
import type {LoginActions, QuestCheckActions} from './actions';

const initialState: AppState = {
  loggedIn: false,
  loggedUser: {email: '', name: '', password: ''},
  questScreenState: {prevTaskChecked: false, todayTaskChecked: false},
};

export const rootReducer = (
  state: AppState = initialState,
  action: QuestCheckActions,
) => {
  return state;
  // switch (action.type) {
  //   case 'gotoPrev':
  //     return {
  //       ...state,
  //       questScreenState: {prevTaskChecked: false, todayTaskChecked: false},
  //     };
  //   case 'gotoCur':
  //     return {
  //       ...state,
  //       questScreenState: {prevTaskChecked: true, todayTaskChecked: false},
  //     };
  //   case 'gotoToday':
  //     return {
  //       ...state,
  //       questScreenState: {prevTaskChecked: true, todayTaskChecked: true},
  //     };
  // }
  // return state;
};
