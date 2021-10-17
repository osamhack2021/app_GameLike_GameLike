import type {Action} from 'redux';

export type LevelActions = GrowExpAction;

export type GrowExpAction = Action<'obtainExp'> & {
  exp: number;
};

export const growExpAction = (exp: number) => ({
  type: 'obtainExp',
  exp: exp,
});
