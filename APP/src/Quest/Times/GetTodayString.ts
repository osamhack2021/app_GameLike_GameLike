export function getKoreanDay(day: number) {
  let result = '';
  switch (day) {
    case 0:
      result = '일';
      break;
    case 1:
      result = '월';
      break;
    case 2:
      result = '화';
      break;
    case 3:
      result = '수';
      break;
    case 4:
      result = '목';
      break;
    case 5:
      result = '금';
      break;
    case 6:
      result = '토';
      break;
    default:
      result = 'error';
      break;
  }
  return result;
}

const date = new Date();
export default function GetTodayString() {
  const today = {
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString(),
    date: date.getDate().toString(), //일
    day: getKoreanDay(date.getDay()), //요일
  };
  const todayStr =
    today.year +
    '년 ' +
    today.month +
    '월 ' +
    today.date +
    '일 ' +
    today.day +
    '요일';
  return todayStr;
}

export function getToday() {
  return (
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()
  );
}

export function getTime() {
  return date.getHours() * 100 + date.getMinutes();
}
