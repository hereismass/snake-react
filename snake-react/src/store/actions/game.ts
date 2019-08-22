import { Action } from 'redux';

export enum GAME {
  RESET_SCORE = 'GAME_RESET_SCORE',
  RESTART = 'GAME_RESTART'
}

export type ResetScore = Action<GAME.RESET_SCORE>;
export const resetScore = (): ResetScore => ({
  type: GAME.RESET_SCORE
});

export type Restart = Action<GAME.RESTART>;
export const restart = (): Restart => ({
  type: GAME.RESTART
});
