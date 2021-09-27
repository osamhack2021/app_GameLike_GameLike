type QuestData = {
  id: number;
  name: string;
  fieldId: number;
  estimatedTime: number; //예상되는 완료 시간
  writedDate: number; //제작 날짜
  dataCreaterId: string; //데이터 제작자 ID

  isRepeat: boolean;
  isPublic: boolean;
};

export type {QuestData};
