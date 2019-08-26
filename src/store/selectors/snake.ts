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

/**
 * Returns the snake head
 */
type GetSnakeHead = Selector<IState, ISnakePart>;
export const getSnakeHead: GetSnakeHead = state => state.snake.parts[0];

/**
 * Returns the snake head
 */
type GetSnakeDirection = Selector<IState, string>;
export const getSnakeDirection: GetSnakeDirection = state => state.snake.direction;
