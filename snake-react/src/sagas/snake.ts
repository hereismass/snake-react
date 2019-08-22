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

/*export function* snakeWatcher() {
  //yield all([takeLatest(actions.GAME.RESTART, initializeBoard)]);
}*/
