import { Reducer } from 'redux';
import { BOARD } from '../actions';
import initialState from '../initialState';

const board: Reducer<IState['board']> = (state = initialState.board, action) => {
  switch (action.type) {
    case BOARD.ADD_NEW_MOUSE:
      return {
        ...state,
        mouses: [...state.mouses, { position: action.position, color: action.color }]
      };
    case BOARD.REMOVE_ALL_MOUSES:
      return { ...state, mouses: [] };
    default:
      return state;
  }
};

export default board;
