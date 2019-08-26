import { all, AllEffect, call, CallEffect } from 'redux-saga/effects';
import { bootstrapWatcher } from './bootstrap';
import { boardWatcher } from './board';

function* mainSaga() {
  const sagas = [call(bootstrapWatcher), call(boardWatcher)];

  yield all(sagas);
}

export default mainSaga;
