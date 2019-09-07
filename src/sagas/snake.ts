import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from '../store/actions';
import * as selectors from '../store/selectors';

export function* createSnake() {
  // to put in constants
  const snakeLength: number = yield select(selectors.getSnakeLength);
  const x: number = 4;
  const y: number = 7;

  for (let i = 0; i < snakeLength; i++) {
    yield put(actions.createSnakePart({x, y: y + i}, 'tail'));
  }
}

export function* moveSnake() {
  const head: ISnakePart = yield select(selectors.getSnakeHead);
  const direction: string = yield select(selectors.getSnakeDirection);
  let { x: nextX, y: nextY }: IPosition = head.position;

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
  const nextPositionType: IPositionType = yield select(selectors.getPositionType, { x: nextX, y: nextY });
  switch (nextPositionType) {
    case 'wall':
    case 'snake':
      // end game
      yield put(actions.stopGame());
      break;
    case 'empty':
      // remove tail
      yield put(actions.removeSnakeTail());
      // add head
      yield put(actions.createSnakePart({x:nextX, y:nextY}, 'head'));
      break;
    case 'mouse':
      // remove mouse
      yield put(actions.eatMouse({x:nextX, y:nextY}));
      yield put(actions.createSnakePart({x:nextX, y:nextY}, 'head'));
      break;
  }
}

export function* snakeWatcher() {
  yield all([takeLatest(actions.SNAKE.MOVE_SNAKE, moveSnake)]);
}
