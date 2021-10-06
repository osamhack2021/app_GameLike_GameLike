export function GetMinuteFromTimeNumber(timenum: number) {
  return timenum % 100;
}

export function GetHourFromTimeNumber(timenum: number) {
  return timenum / 100;
}

export function GetYearFromDateNumber(datenum: number) {
  return datenum / 10000;
}

export function GetMonthFromDateNumber(datenum: number) {
  return (datenum / 100) % 100;
}

export function GetDayFromDateNumber(datenum: number) {
  return datenum % 100;
}
