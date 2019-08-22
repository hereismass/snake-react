import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from '../store/actions';
import * as selectors from '../store/selectors';
import { createSnake } from './snake';
import { generateRandomNumber } from '../helpers';

export function* createMouse() {
  const { height, width } = yield select(selectors.getBoardSize);

  let x: number = generateRandomNumber(width);
  let y: number = generateRandomNumber(height);

  // to improve
  const color: string = 'green';

  console.log('create mouse', yield select(selectors.isPositionUsed, { x, y }));

  while (yield select(selectors.isPositionUsed, { x, y })) {
    x = generateRandomNumber(width);
    y = generateRandomNumber(height);
    console.log('woops already used. retrying', x, y);
  }

  yield put(actions.addNewMouse({ x, y }, color));
}

export function* initializeBoard() {
  yield put(actions.removeAllMouses());
  yield put(actions.resetScore());
  yield call(createSnake);

  const numberOfMouses: number = yield select(selectors.getMousesLimit);
  for (let i: number = 0; i < numberOfMouses; i++) {
    yield call(createMouse);
  }
}

export function* boardWatcher() {
  yield all([takeLatest(actions.GAME.RESTART, initializeBoard)]);
}
