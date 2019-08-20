import { all, AllEffect, call, CallEffect } from 'redux-saga/effects';
import { bootstrapWatcher } from './bootstrap';

function* mainSaga() {
  const sagas = [call(bootstrapWatcher)];

  yield all(sagas);
}

export default mainSaga;
