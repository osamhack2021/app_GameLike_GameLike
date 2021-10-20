import type {Action} from 'redux';

export type UserActions = LoginAction;

export type LoginAction = Action<'login'> & {
  email: string;
  nickname: string;
  getinDate: string;
  getoutDate: string;
};

export const loginAction = (
  email: string,
  nickname: string,
  getinDate: string,
  getoutDate: string,
) => ({
  type: 'login',
  email: email,
  nickname: nickname,
  getinDate: getinDate,
  getoutDate: getoutDate,
});
