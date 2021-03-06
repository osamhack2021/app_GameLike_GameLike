import {Alert} from 'react-native';

export default function getDate(date: string = '') {
  if (date === '') {
    return new Date();
  } else {
    try {
      const arr = date.split(' ');
      const day = arr[0].split('-');
      const time = arr[1].split(':');
      const d: number[] = [];
      for (let i of day) {
        d.push(parseInt(i, 10));
      }
      for (let i of time) {
        d.push(parseInt(i, 10));
      }
      return new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5]);
    } catch (e) {
      if (e instanceof Error) {
        throw Error(e.message);
      } else {
        throw Error('error in getDate');
      }
    }
  }
}
