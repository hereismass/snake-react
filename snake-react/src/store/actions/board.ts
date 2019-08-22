import { Action } from 'redux';

export enum BOARD {
  ADD_NEW_MOUSE = 'BOARD_ADD_NEW_MOUSE',
  REMOVE_ALL_MOUSES = 'BOARD_REMOVE_ALL_MOUSES'
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
