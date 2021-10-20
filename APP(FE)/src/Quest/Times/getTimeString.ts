import get2Digits from './get2Digits';

export default function getTimeString(d: Date = new Date()) {
  const hour = d.getHours();
  const minute = d.getMinutes();
  const seconds = d.getSeconds();

  return (
    get2Digits(hour) + ':' + get2Digits(minute) + ':' + get2Digits(seconds)
  );
}
