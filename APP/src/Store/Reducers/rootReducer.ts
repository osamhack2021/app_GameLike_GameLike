import {AppState} from '../AppState';
import {combineReducers} from 'redux';
import {questDatasReducer} from './questDatasReducer';
import {questStateReducer} from './questStateReducer';

export const rootReducer = combineReducers({
  questScreenState: questStateReducer,
  questDatas: questDatasReducer,
});
