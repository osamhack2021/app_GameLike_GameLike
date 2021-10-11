import {ExpectedData, PerformedData, QuestData} from '../Quest/Datas';

export type User = {
  name: string;
  email: string;
  password: string;
};

export type QuestScreenState = {
  prevTaskChecked: boolean;
  todayTaskChecked: boolean;
};

export type QuestDatas = {
  todayDatas: QuestData.DataType[];
};

export type AppState = {
  //loggedIn: boolean;
  //loggedUser: User;
  questScreenState: QuestScreenState;
  questDatas: QuestDatas;
  expectedDatas: ExpectedData.DataType[];
  performedDatas: PerformedData.DataType[];
};
