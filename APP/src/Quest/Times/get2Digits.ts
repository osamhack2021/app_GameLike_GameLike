export default function get2Digits(num: number) {
  if (num / 10 < 1) {
    return '0' + num;
  } else if (num / 100 >= 1) {
    return String(num % 100);
  } else {
    return String(num);
  }
}
