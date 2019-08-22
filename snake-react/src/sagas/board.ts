import {
  all,
  call,
  put,
  select,
  takeLatest,
  fork,
  take,
  cancel,
  delay,
  cancelled
} from 'redux-saga/effects';
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

  while ((yield select(selectors.isPositionUsed, { x, y })) !== 'empty') {
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

  yield put(actions.launch());
}

export function* gameInterval() {
  try {
    while (true) {
      yield put(actions.moveSnake());
      yield delay(1000);
    }
  } finally {
    if (yield cancelled()) {
      console.log('GAME STOPPED');
    }
  }
}

export function* startGame() {
  // starts the game interval
  const gameIntervalTask = yield fork(gameInterval);

  // wait for end of the game
  yield take(actions.GAME.STOP);
  // cancel interval
  yield cancel(gameIntervalTask);
}

export function* boardWatcher() {
  yield all([
    takeLatest(actions.GAME.RESTART, initializeBoard),
    takeLatest(actions.GAME.LAUNCH, startGame)
  ]);
}
