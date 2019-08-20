import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as actions from '../store/actions';
import * as selectors from '../store/selectors';

export function* bootstrap(action: actions.BootstrapApp) {
  // todo
  console.log('BOOOOTStRap');
  yield put(actions.setAppVersion('1.2.3'));
}

export function* bootstrapWatcher() {
  yield takeLatest(actions.APP.BOOTSTRAP, bootstrap);
}
