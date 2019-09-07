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
    case BOARD.REMOVE_MOUSE:
      const mouses = state.mouses.filter(mouse => {
        return mouse.position.x !== action.position.x || mouse.position.y !== action.position.y;
      });
      return { ...state, mouses: mouses };
    default:
      return state;
  }
};

export default board;
