import { Selector } from 'reselect';

/**
 * Returns the snake length
 */
type GetSnakeLength = Selector<IState, number>;
export const getSnakeLength: GetSnakeLength = state => state.snake.length;

/**
 * Returns the snake parts
 */
type GetSnakeParts = Selector<IState, ISnakePart[]>;
export const getSnakeParts: GetSnakeParts = state => state.snake.parts;

/**
 * Returns the whole snake
 */
type GetSnake = Selector<IState, ISnake>;
export const getSnake: GetSnake = state => state.snake;
