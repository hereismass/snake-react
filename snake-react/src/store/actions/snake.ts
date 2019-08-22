import { Action } from 'redux';

export enum SNAKE {
  CREATE_SNAKE_PART = 'SNAKE_CREATE_SNAKE_PART'
}

export type CreateSnakePart = Action<SNAKE.CREATE_SNAKE_PART> & {
  x: number;
  y: number;
  order: 'head' | 'tail';
};
export const createSnakePart = (x: number, y: number, order: 'head' | 'tail'): CreateSnakePart => ({
  type: SNAKE.CREATE_SNAKE_PART,
  x,
  y,
  order
});
