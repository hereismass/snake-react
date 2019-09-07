import { Action } from 'redux';

export enum BOARD {
  ADD_NEW_MOUSE = 'BOARD_ADD_NEW_MOUSE',
  REMOVE_ALL_MOUSES = 'BOARD_REMOVE_ALL_MOUSES',
  REMOVE_MOUSE = 'BOARD_REMOVE_MOUSE',
  EAT_MOUSE = 'BOARD_EAT_MOUSE'
}

export type AddNewMouse = Action<BOARD.ADD_NEW_MOUSE> & {
  position: IPosition;
  color: string;
};
export const addNewMouse = (position: IPosition, color: string): AddNewMouse => ({
  type: BOARD.ADD_NEW_MOUSE,
  position,
  color
});

export type RemoveAllMouses = Action<BOARD.REMOVE_ALL_MOUSES>;
export const removeAllMouses = (): RemoveAllMouses => ({
  type: BOARD.REMOVE_ALL_MOUSES
});

export type RemoveMouse = Action<BOARD.REMOVE_MOUSE> & {
  position: IPosition;
};
export const removeMouse = (position: IPosition): RemoveMouse => ({
  position,
  type: BOARD.REMOVE_MOUSE
});

export type EatMouse = Action<BOARD.EAT_MOUSE> & {
  position: IPosition;
};
export const eatMouse = (position: IPosition): EatMouse => ({
  position,
  type: BOARD.EAT_MOUSE
});
