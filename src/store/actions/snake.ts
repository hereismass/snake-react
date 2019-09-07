import { Action } from 'redux';

export enum SNAKE {
  CREATE_SNAKE_PART = 'SNAKE_CREATE_SNAKE_PART',
  MOVE_SNAKE = 'SNAKE_MOVE_SNAKE',
  REMOVE_SNAKE_TAIL = 'SNAKE_REMOVE_SNAKE_TAIL',
  SET_SNAKE_DIRECTION = 'SNAKE_SET_SNAKE_DIRECTION',
  SET_SNAKE_NEW_DIRECTION = 'SNAKE_SET_SNAKE_NEW_DIRECTION'
}

export type CreateSnakePart = Action<SNAKE.CREATE_SNAKE_PART> & {
  position: IPosition;
  order: 'head' | 'tail';
};
export const createSnakePart = (position:IPosition, order: 'head' | 'tail'): CreateSnakePart => ({
  type: SNAKE.CREATE_SNAKE_PART,
  position,
  order
});

export type MoveSnake = Action<SNAKE.MOVE_SNAKE>;
export const moveSnake = (): MoveSnake => ({
  type: SNAKE.MOVE_SNAKE
});

export type RemoveSnakeTail = Action<SNAKE.REMOVE_SNAKE_TAIL>;
export const removeSnakeTail = (): RemoveSnakeTail => ({
  type: SNAKE.REMOVE_SNAKE_TAIL
});

export type SetSnakeNewDirection = Action<SNAKE.SET_SNAKE_NEW_DIRECTION> & {
  direction: IDirection;
};
export const setSnakeNewDirection = (direction: IDirection): SetSnakeNewDirection => ({
  direction,
  type: SNAKE.SET_SNAKE_NEW_DIRECTION
});


export type SetSnakeDirection = Action<SNAKE.SET_SNAKE_DIRECTION>;
export const setSnakeDirection = (): SetSnakeDirection => ({
  type: SNAKE.SET_SNAKE_DIRECTION
});
