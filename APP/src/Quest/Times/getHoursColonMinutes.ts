import get2Digits from './get2Digits';

export default function getHoursColonMinutes(date: Date) {
  return get2Digits(date.getHours()) + ':' + get2Digits(date.getMinutes());
}
