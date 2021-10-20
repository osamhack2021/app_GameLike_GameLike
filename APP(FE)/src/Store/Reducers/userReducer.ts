import {UserActions} from '../Actions/userActions';

export const userReducer = (
  state = {email: '', nickname: '', getinDate: '', getoutDate: ''},
  action: UserActions,
) => {
  switch (action.type) {
    case 'login':
      return {
        email: action.email,
        nickname: action.nickname,
        getinDate: action.getinDate,
        getoutDate: action.getoutDate,
      };
  }
  return state;
};
