import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
  Reducer,
  Store
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import rootSaga from '../sagas';
import reducers from './reducers';

const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware({});

const middlewares: Array<SagaMiddleware<object> | Middleware> = [sagaMiddleware];

const rootReducer: Reducer<IState> = combineReducers({
  ...reducers
});

const store: Store<any, AnyAction> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
