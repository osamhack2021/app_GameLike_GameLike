import axios from 'axios';
import {Alert} from 'react-native';

export default async function loadRanking(setLog: any) {
  type RankData = {
    nick: string;
    dischargeDate: string;
    exp: number;
    level: number;
  };
  const result: RankData[] = [];
  const ax = axios
    .get('http://52.231.66.60/rank')
    .then(response => {
      setLog(JSON.stringify(response.data));
      //데이터 반환하기
      try {
        const arr = JSON.parse(response.data);

        for (let i of arr) {
          const t: RankData = {
            nick: i.nick,
            dischargeDate: i.dischargeDate,
            exp: i.exp,
            level: i.level,
          };
          result.push(t);
        }
      } catch (e) {
        Alert.alert('전송받은 데이터 값 오류');
      }
      return result;
    })
    .catch(error => {
      if (error instanceof Error) {
        setLog('error: ' + error.message);
      } else {
        setLog('error ocurred while getting expected datas');
      }
      Alert.alert('네트워크 에러');
      return result;
    });
  return ax;
}
