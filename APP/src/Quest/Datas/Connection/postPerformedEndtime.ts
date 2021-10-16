// 5. performed endTime값 변경
//     post:   id, endTime
//     res:    성공 여부

export default function postPerformedEndtime(
  performedId: number,
  endTime: string,
) {
  if (performedId === -1) {
    return false;
  }
  return true;
}
