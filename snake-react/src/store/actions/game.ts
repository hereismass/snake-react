import { Action } from 'redux';

export enum GAME {
  RESET_SCORE = 'GAME_RESET_SCORE',
  RESTART = 'GAME_RESTART',
  LAUNCH = 'GAME_LAUNCH',
  STOP = 'GAME_STOP'
}

export type ResetScore = Action<GAME.RESET_SCORE>;
export const resetScore = (): ResetScore => ({
  type: GAME.RESET_SCORE
});

export type Restart = Action<GAME.RESTART>;
export const restart = (): Restart => ({
  type: GAME.RESTART
});

export type Launch = Action<GAME.LAUNCH>;
export const launch = (): Launch => ({
  type: GAME.LAUNCH
});

export type Stop = Action<GAME.STOP>;
export const stop = (): Stop => ({
  type: GAME.STOP
});
