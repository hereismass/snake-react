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

export function* gameInterval() {
  try {
    yield delay(1000);
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
  yield take(actions.GAME.STOP_GAME);
  // cancel interval
  yield cancel(gameIntervalTask);
}


export function* gameWatcher() {
  yield all([
    takeLatest(actions.GAME.LAUNCH_GAME, startGame)
  ]);
}