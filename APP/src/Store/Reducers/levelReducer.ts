import {ExpectedDataActions} from '../Actions';
import {LevelActions} from '../Actions/levelActions';

export const levelReducer = (state = 0, action: LevelActions) => {
  switch (action.type) {
    case 'obtainExp':
      return state + action.exp;
  }
  return state;
};
