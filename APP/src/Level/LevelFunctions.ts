export function getLevelUpExpArray(): number[] {
  const result: number[] = [];
  let i = 0;
  result[0] = 0;
  for (i = 1; i < 9; ++i) {
    result[i] = 2 * 1800;
  }
  result[9] = 2.5 * 1800;
  for (i = 10; i < 19; ++i) {
    result[i] = 3 * 1800;
  }
  result[19] = 3.5 * 1800;
  for (i = 20; i < 29; ++i) {
    result[i] = 4 * 1800;
  }
  result[29] = 5 * 1800;
  for (i = 30; i < 40; ++i) {
    result[i] = 4 * 1800;
  }
  for (i = 40; i < 50; ++i) {
    result[i] = 5 * 1800;
  }
  for (i = 50; i < 70; ++i) {
    result[i] = 6 * 1800;
  }
  for (i = 70; i < 80; ++i) {
    result[i] = 7 * 1800;
  }
  for (i = 80; i < 90; ++i) {
    result[i] = 8 * 1800;
  }
  for (i = 90; i < 110; ++i) {
    result[i] = 10 * 1800;
  }
  for (i = 110; i < 120; ++i) {
    result[i] = 15 * 1800;
  }
  for (i = 120; i < 200; ++i) {
    result[i] = 20 * 1800;
  }

  return result;
}

const exps = getLevelUpExpArray();
const over200Exp = 20 * 1800;

export function getLevelUpExpByLevel(level: number) {
  if (level < 120) {
    return exps[level];
  } else {
    return over200Exp;
  }
}

export function getAccumulatedExpByLevel(level: number) {
  let sum = 0;
  for (let i = 1; i < 200; ++i) {
    sum += exps[i];
  }
  for (let i = 200; i < level; ++i) {
    sum += over200Exp;
  }
}

export function getLevelFromExp(exp: number) {
  let remained = exp;
  let level = 0;
  while (exps[level] <= remained) {
    remained -= exps[level];
    ++level;
  }
  return [level, remained];
}
