import type {Action} from 'redux';

export type LevelActions = GrowExpAction | LoginExpAction;

export type GrowExpAction = Action<'obtainExp'> & {
  exp: number;
};

export const growExpAction = (exp: number) => ({
  type: 'obtainExp',
  exp: exp,
});

export type LoginExpAction = Action<'loginExp'> & {
  exp: number;
};

export const loginExpAction = (exp: number) => ({
  type: 'loginExp',
  exp: exp,
});
