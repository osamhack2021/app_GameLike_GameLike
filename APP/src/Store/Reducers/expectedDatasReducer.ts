import {ExpectedDataActions} from '../Actions';

export const expectedDatasReducer = (
  state = [],
  action: ExpectedDataActions,
) => {
  switch (action.type) {
    case 'insertExpected':
      return [...state, ...action.datas];
    case 'replaceExpected':
      return [...action.datas];
  }
  return state;
};
