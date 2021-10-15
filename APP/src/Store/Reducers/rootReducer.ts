import {AppState} from '../AppState';
import {combineReducers} from 'redux';
import {questDatasReducer} from './questDatasReducer';
import {questStateReducer} from './questStateReducer';
import {expectedDatasReducer} from './expectedDatasReducer';
import {performedDatasReducer} from './performedDatasReducer';

export const rootReducer = combineReducers({
  questScreenState: questStateReducer,
  questDatas: questDatasReducer,
  expectedDatas: expectedDatasReducer,
  //performedDatas: performedDatasReducer,
});
