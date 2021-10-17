import {ExpectedData} from '../Quest/Datas';

export type User = {
  name: string;
  email: string;
  password: string;
};

export type Level = {
  exp: number;
};

export type AppState = {
  //loggedIn: boolean;
  //loggedUser: User;
  expectedDatas: ExpectedData.DataType[];
  level: Level;
};
