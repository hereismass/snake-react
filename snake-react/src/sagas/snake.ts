import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from '../store/actions';
import * as selectors from '../store/selectors';

export function* createSnake() {
  // to put in constants
  const snakeLength = yield select(selectors.getSnakeLength);
  const x: number = 4;
  const y: number = 5;

  for (let i = 0; i < snakeLength; i++) {
    yield put(actions.createSnakePart(x, y + i, 'tail'));
  }
}

export function* moveSnake() {
  const head = yield select(selectors.getSnakeHead);
  const direction = yield select(selectors.getSnakeDirection);
  let { nextX, nextY } = head.position;
  switch (direction) {
    case 'top':
      nextY++;
      break;
    case 'bottom':
      nextY--;
      break;
    case 'left':
      nextX--;
      break;
    case 'right':
      nextX++;
      break;
  }
  const nextPositionType = yield select(selectors.isPositionUsed, { x: nextX, y: nextY });

  // test next position
  // if empty, add head remove tail
  // if wall or snakepart, end game
  // if mouse, add head, dont remove tail
}

export function* snakeWatcher() {
  yield all([takeLatest(actions.SNAKE.MOVE_SNAKE, moveSnake)]);
}
