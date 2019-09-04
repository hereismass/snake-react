import { all, AllEffect, call, CallEffect } from 'redux-saga/effects';
import { bootstrapWatcher } from './bootstrap';
import { gameWatcher} from './game';
import { boardWatcher } from './board';
import { snakeWatcher} from './snake';

function* mainSaga() {
  const sagas = [call(bootstrapWatcher), call(boardWatcher), call(snakeWatcher), call(gameWatcher)];

  yield all(sagas);
}

export default mainSaga;
