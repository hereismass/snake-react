import { eventChannel, END, EventChannel } from 'redux-saga';
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


function keyboardChannel() {
  return eventChannel((emit) => {

    const keyPressedHandler = (event: KeyboardEvent) => {
      console.log('key pressed:', event);
      switch(event.key) {
        case 'ArrowRight':
          emit('right');
          break;
        case 'ArrowLeft':
          emit('left');
          break;
        case 'ArrowUp':
          emit('bottom');  
          break;
        case 'ArrowDown':
          emit('top');
          break;

      }
    }

    window.addEventListener('keydown', keyPressedHandler);
    
    // This subscriber function must return an unsubscribe function
    return () => {
      window.removeEventListener('keydown', keyPressedHandler);
    };
  });
}

function* keyboardChannelListener() {
  const channel = yield call(keyboardChannel);
  try {
    while (true) {
      const newDirection: IDirection = yield take(channel);
      yield put(actions.setSnakeNewDirection(newDirection));
      console.log('new direction', newDirection);
    }
  } finally {
    if (yield cancelled()) {
      channel.close();
      console.log('KEYBOARD LISTENER STOPPED');
    }
  }
}

function* gameInterval() {
  try {
    yield delay(1000);
    while (true) {
      yield put(actions.setSnakeDirection());
      yield put(actions.moveSnake());
      yield delay(1000);
    }
  } finally {
    if (yield cancelled()) {
      console.log('GAME STOPPED');
    }
  }
}


function* startGame() {
  // starts the game interval
  const gameIntervalTask = yield fork(gameInterval);
  const keyboardListenerTask = yield fork(keyboardChannelListener);

  // wait for end of the game
  yield take(actions.GAME.STOP_GAME);
  // cancel interval
  yield cancel(gameIntervalTask);
  yield cancel(keyboardListenerTask);
}


export function* gameWatcher() {
  yield all([
    takeLatest(actions.GAME.LAUNCH_GAME, startGame)
  ]);
}