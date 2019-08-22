import { Reducer } from 'redux';
import { GAME } from '../actions';
import initialState from '../initialState';

const game: Reducer<IState['game']> = (state = initialState.game, action) => {
  switch (action.type) {
    case GAME.RESET_SCORE:
      return { ...state, score: 0 };
    default:
      return state;
  }
};

export default game;
