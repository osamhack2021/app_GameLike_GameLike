import {combineReducers} from 'redux';
import {expectedDatasReducer} from './expectedDatasReducer';
import {levelReducer} from './levelReducer';
import {userReducer} from './userReducer';

export const rootReducer = combineReducers({
  expectedDatas: expectedDatasReducer,
  level: levelReducer,
  user: userReducer,
});
