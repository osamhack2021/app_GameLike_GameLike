import get2Digits from './get2Digits';

export default function getDateString(d: Date = new Date()) {
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hour = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();

  return (
    year +
    '-' +
    get2Digits(month) +
    '-' +
    get2Digits(day) +
    ' ' +
    get2Digits(hour) +
    ':' +
    get2Digits(min) +
    ':' +
    get2Digits(sec)
  );
}
