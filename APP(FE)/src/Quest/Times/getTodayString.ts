import get2Digits from './get2Digits';
import getDayFromNumber from './getDayFromNumber';

export default function getTodayString(date: Date = new Date()) {
  return (
    date.getFullYear() +
    '년 ' +
    get2Digits(date.getMonth() + 1) +
    '월 ' +
    get2Digits(date.getDate()) +
    '일 ' +
    getDayFromNumber(date.getDay()) +
    '요일'
  );
}
