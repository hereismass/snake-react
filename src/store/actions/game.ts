import { Action } from 'redux';

export enum GAME {
  RESET_SCORE = 'GAME_RESET_SCORE',
  RESTART_GAME = 'GAME_RESTART_GAME',
  LAUNCH_GAME = 'GAME_LAUNCH_GAME',
  STOP_GAME = 'GAME_STOP_GAME'
}

export type ResetScore = Action<GAME.RESET_SCORE>;
export const resetScore = (): ResetScore => ({
  type: GAME.RESET_SCORE
});

export type RestartGame = Action<GAME.RESTART_GAME>;
export const restartGame = (): RestartGame => ({
  type: GAME.RESTART_GAME
});

export type LaunchGame = Action<GAME.LAUNCH_GAME>;
export const launchGame = (): LaunchGame => ({
  type: GAME.LAUNCH_GAME
});

export type StopGame = Action<GAME.STOP_GAME>;
export const stopGame = (): StopGame => ({
  type: GAME.STOP_GAME
});
