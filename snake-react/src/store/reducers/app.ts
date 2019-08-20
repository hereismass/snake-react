import { Reducer } from 'redux';
import { APP } from '../actions';
import initialState from '../initialState';

const app: Reducer<IState['app']> = (state = initialState.app, action) => {
  switch (action.type) {
    case APP.SET_VERSION:
      return { ...state, version: action.version };
    default:
      return state;
  }
};

export default app;
