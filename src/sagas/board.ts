import {
  all,
  call,
  put,
  select,
  takeLatest
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

  while ((yield select(selectors.getPositionType, { x, y })) !== 'empty') {
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

  yield put(actions.launchGame());
}

export function* eatMouse(action: actions.EatMouse) {
  // remove eaten mouse
  yield put(actions.removeMouse(action.position));
  // add new mouse on the map
  yield call(createMouse);
  // increment score
  yield put(actions.incrementScore());

}

export function* boardWatcher() {
  yield all([
    takeLatest(actions.GAME.RESTART_GAME, initializeBoard),
    takeLatest(actions.BOARD.EAT_MOUSE, eatMouse)
  ]);
}
