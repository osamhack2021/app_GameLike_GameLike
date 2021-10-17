import {createStore} from 'redux';
import {rootReducer} from './Reducers/rootReducer';

export const makeStore = () => {
  const store = createStore(rootReducer);
  return store;
};
