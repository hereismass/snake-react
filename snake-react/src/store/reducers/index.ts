import { ReducersMapObject } from 'redux';
import app from './app';
import board from './board';
import game from './game';
import snake from './snake';

const reducers: ReducersMapObject<IState> = {
  app,
  board,
  game,
  snake
};

export default reducers;
