import {ExpectedData} from '../Quest/Datas';

export type Level = {
  exp: number;
};

export type User = {
  nickname: string;
  email: string;
  getinDate: string;
  getoutdate: string;
};

export type AppState = {
  //loggedIn: boolean;
  //loggedUser: User;
  user: User;
  expectedDatas: ExpectedData.DataType[];
  level: Level;
};
