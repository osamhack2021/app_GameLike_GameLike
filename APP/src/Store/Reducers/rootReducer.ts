import {combineReducers} from 'redux';
import {expectedDatasReducer} from './expectedDatasReducer';
import {levelReducer} from './levelReducer';

export const rootReducer = combineReducers({
  expectedDatas: expectedDatasReducer,
  level: levelReducer,
});
