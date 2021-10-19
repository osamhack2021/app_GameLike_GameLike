import {LevelActions} from '../Actions/levelActions';

export const levelReducer = (state = {exp: 0}, action: LevelActions) => {
  switch (action.type) {
    case 'obtainExp':
      return {exp: state.exp + action.exp};
  }
  return state;
};
