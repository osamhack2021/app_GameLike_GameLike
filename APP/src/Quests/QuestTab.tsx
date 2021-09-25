import React from 'react';
import {FlatList, View} from 'react-native';
import FieldElement from './Components/FieldElement';
import * as FDS from './datas/FieldDataSet';
import * as FD from './datas/FieldData';
import * as QDS from './datas/QuestDataSet';
import * as QD from './datas/QuestData';

// 1. 퀘스트 데이터 목록 불러옴
// 2. 퀘스트 돌면서 확인
// 	- 찾은 필드를 실제필드 목록에서 탐색
// 		- 있다면 해당 필드 데이터셋에 추가
// 		- 없다면 전체 필드 목록에서 불러와 실제 필드 목록에 추가
// 3. 모든 필드 정돈이 완료되면 렌더링
// 	실제 필드 목록에서 렌더링
// 	데이터는 데이터로 전송

type QuestRenderData = {
  field: FD.FieldData;
  subQuests: QD.QuestData[];
};

function CreateQuestElements(): QuestRenderData[] {
  const allFields: FD.FieldData[] = FDS.GetDataSets();
  const quests: QD.QuestData[] = QDS.GetDataSets();
  let renderFields: QuestRenderData[] = [];

  for (let q of quests) {
    let flag: boolean = false;
    for (let f of renderFields) {
      if (q.fieldId === f.field.id) {
        flag = true;
        f.subQuests.push(q);
        break;
      }
    }
    if (flag === false) {
      var nextField: FD.FieldData = {
        id: -1,
        name: 'error',
        peopleWith: -1,
        iconName: 'error',
      };
      for (let f of allFields) {
        if (q.fieldId === f.id) {
          nextField = f;
          break;
        }
      }
      renderFields.push({field: nextField, subQuests: [q]});
    }
  }

  return renderFields;
}

export default function QuestTab() {
  let renderFields = CreateQuestElements();
  return (
    <View>
      <FlatList
        data={renderFields}
        renderItem={({item}) => (
          <FieldElement data={item.field} questDatas={item.subQuests} />
        )}
        keyExtractor={(item, index) => item.field.id.toString()}
      />
    </View>
  );
}
