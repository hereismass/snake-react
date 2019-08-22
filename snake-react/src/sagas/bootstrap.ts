import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as actions from '../store/actions';
import * as selectors from '../store/selectors';
import { initializeBoard } from './board';

export function* bootstrap(action: actions.BootstrapApp) {
  console.log('bootstrap app');
  yield put(actions.setAppVersion('0.0.1')); // to improve with version.json for ex

  yield call(initializeBoard);
  // todo
}

export function* bootstrapWatcher() {
  yield takeLatest(actions.APP.BOOTSTRAP, bootstrap);
}
